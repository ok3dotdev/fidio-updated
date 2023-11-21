import React from 'react';
import '../styles/globals.css';
import '../styles/tycoon.scss';
import '../styles/video/videoPlayer.css';
import '../styles/features/output.css';
// import 'shaka-player/dist/controls.css'
import '../styles/video/videojs.css';
import '../styles/video/videoPlayerTycoon.css';
// import '../styles/styles.scss';
import Head from 'next/head';
import Script from 'next/script';
import io from 'socket.io-client';
import { SocketContainer } from '/modules/socket';
import { resolveVariables } from '/app.config';
import { checkSignedIn } from '/modules/utility/onboarding/SignIn';
import { LocalEventEmitter } from '/modules/events/LocalEventEmitter';
import { isObjectEmpty } from '/modules/util';
import { ThemeProvider } from '../components/provider';
import {
  addToCartGlobal,
  calculateTotal,
  updateCart,
  performPurchase,
} from '/modules/utility/ecommerce';

function MyApp({ Component, pageProps }) {
  const [_loggedIn, _setLoggedIn] = React.useState(false);
  const [_stripeSecret, _setStripeSecret] = React.useState(false);
  const [_loginError, _setLoginError] = React.useState(false);
  const [_pageError, _setPageError] = React.useState(null);
  const [_openMenu, _setOpenMenu] = React.useState({});
  const [_cart, _setCart] = React.useState({});
  const [fetchBusy, setFetchBusy] = React.useState(false);

  React.useEffect(() => {
    const muteLoginErr = () => {
      _setLoginError(null);
    };
    document.addEventListener('mute-login-error', muteLoginErr, { once: true });
  }, []);

  React.useEffect(() => {
    if (pageProps._loggedIn) {
      _setLoggedIn(pageProps._loggedIn);
    } else {
      const signedIn = checkSignedIn();
      if (signedIn) {
        _setLoggedIn(signedIn);
      }
    }
  }, [_loggedIn, pageProps._loggedIn]);

  const toggleSingleOpenMenu = (e, menu) => {
    if (_openMenu && _openMenu.currentMenu) {
      if (_openMenu.currentMenu == menu) {
        _setOpenMenu({});
      } else {
        _setOpenMenu({ currentMenu: menu });
      }
    } else {
      _setOpenMenu({ currentMenu: menu });
    }
  };

  React.useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      if (!cart.user) {
        const temp = cart;
        temp.user = _loggedIn;
        localStorage.setItem('cart', JSON.stringify(temp));
        _setCart(temp);
      }
    } else {
      if (_loggedIn) {
        const def = { user: _loggedIn, cart: [] };
        localStorage.setItem('cart', JSON.stringify(def));
        _setCart(def);
      }
    }
  }, [_loggedIn]);

  pageProps._LocalEventEmitter = LocalEventEmitter;
  pageProps._loggedIn = _loggedIn;
  pageProps._setLoggedIn = _setLoggedIn;
  pageProps._stripeSecret = _stripeSecret;
  pageProps._setStripeSecret = _setStripeSecret;
  pageProps._loginError = _loginError;
  pageProps._setLoginError = _setLoginError;
  pageProps._pageError = _pageError;
  pageProps._setPageError = _setPageError;
  pageProps._toggleSingleOpenMenu = toggleSingleOpenMenu;
  pageProps._openMenu = _openMenu;
  pageProps._cart = _cart;
  pageProps = Object.assign(resolveVariables(), pageProps);

  LocalEventEmitter.unsubscribe('forceUpdateProps');
  LocalEventEmitter.subscribe('forceUpdateProps', (e) => {
    console.log(e);
    if (e) {
      if (e.dispatch === '_cart') {
        console.log('updating');
        _setCart(JSON.parse(window.localStorage.getItem('cart'))); // Should force reload of cart props
      }
    }
  });

  LocalEventEmitter.unsubscribe('global_event');
  LocalEventEmitter.subscribe('global_event', async (e) => {
    console.log(e);
    if (e) {
      if (e.action === 'buy') {
        _setPageError(null);
        if (!fetchBusy && e.item && e.style && e.option) {
          let cart = JSON.parse(localStorage.getItem('cart'));
          const res = await addToCartGlobal(
            pageProps.apiUrl,
            pageProps.domainKey,
            pageProps._loggedIn,
            cart,
            e.item,
            {
              style: e.style,
              option: e.option,
            },
            setFetchBusy
          );
          LocalEventEmitter.dispatch('cart_update', {
            dispatch: 'flashCart',
          });
          console.log('flashCart');
          if (res) {
            if (res.status === 'success') {
              updateCart(cart, res.cart);
              // Successfully added to cart, must perform purchase
              cart = JSON.parse(localStorage.getItem('cart'));
              const snapshot = calculateTotal(cart, null, { object: true });
              console.log('snapshot', snapshot);
              const res2 = await performPurchase(
                pageProps.apiUrl,
                pageProps.domainKey,
                pageProps._loggedIn,
                cart,
                setFetchBusy,
                {
                  snapshot: snapshot,
                }
              );
              if (res2) {
                if (res2.status === 'success') {
                  if (res2.data && res2.data.cart) {
                    updateCart(cart, res2.data.cart);
                  }
                  if (res2?.data?.order?.id) {
                    pageProps._LocalEventEmitter.dispatch('cart_update', {
                      dispatch: 'purchase',
                      id: res2.data.order.id,
                    });
                    console.log('Purchase Success', res2);
                  }
                } else {
                  _setPageError({
                    message: 'Purchase failed',
                    placement: 'purchase',
                  });
                }
              } else {
                console.log(res2);
                _setPageError({
                  message: 'Purchase failed',
                  placement: 'purchase',
                });
              }
              setFetchBusy(false);
            }
          }
        }
      } else if (e.action === 'add_to_cart') {
        _setPageError(null);
        if (!fetchBusy && e.item && e.style && e.option) {
          const cart = JSON.parse(localStorage.getItem('cart'));
          const res = await addToCartGlobal(
            pageProps.apiUrl,
            pageProps.domainKey,
            pageProps._loggedIn,
            cart,
            e.item,
            {
              style: e.style,
              option: e.option,
            },
            setFetchBusy
          );
          LocalEventEmitter.dispatch('cart_update', {
            dispatch: 'flashCart',
          });
          if (res) {
            if (res.status === 'success') {
              updateCart(cart, res.cart);
            }
          } else {
            _setPageError({
              message: 'Add to cart failed',
              placement: 'add_to_cart',
            });
          }
        }
      }
    }
  });

  const socketIoConfig = {
    reconnectAttempts: 1,
  };
  if (pageProps.socketpath) {
    socketIoConfig.path = pageProps.socketpath;
    socketIoConfig.port = pageProps.socketPort;
  }
  const [socket, setSocket] = React.useState(null);
  const [socketTimeout, setSocketTimeout] = React.useState(null);
  React.useEffect(() => {
    if (!socket && !socketTimeout) {
      setSocket(io(pageProps.socketUrl, socketIoConfig));
      const r = setTimeout(() => {
        setSocketTimeout(null);
      }, 20000);
      setSocketTimeout(r);
    }
  }, [socket, socketTimeout]);

  console.log(socket);

  return (
    <div>
      <Head>
        <meta
          name='google-signin-client_id'
          content='169701902623-9a74mqcbqr38uj87qm8tm3190cicaa7m.apps.googleusercontent.com'
        />
        <title>{pageProps.siteTitle}</title>
      </Head>
      <>
        <Script
          src='https://accounts.google.com/gsi/client'
          async
          defer
        ></Script>
        <Script
          strategy='lazyOnload'
          id='script_one_tap_sign_in'
          className='lazyOnload'
        >
          {`// Register google one tap sign in event to pass data to registration/login function
                    const onOneTapSignedInGoogle = data => {
                        let event = new CustomEvent("thirdparty-signin", { "detail": data });
                        document.dispatchEvent(event);
                    }
                    const doGoogleInit = (delay = 250) => {
                        try {
                            google.accounts.id.initialize({
                                client_id: '169701902623-9a74mqcbqr38uj87qm8tm3190cicaa7m.apps.googleusercontent.com',
                                callback: onOneTapSignedInGoogle
                            })
                            console.log('Google Loaded')
                            return true
                        } catch (err) {
                            // fail silently
                            setTimeout(() => {
                                doGoogleInit(delay * 2)
                            }, delay)
                        }
                    }
                    try {
                        let createdScripts = document.getElementsByClassName("lazyOnload");
                        if (createdScripts && createdScripts.length > 1) { // Remove duplicate scripts
                            for (let i = 1; i < createdScripts.length; i++) {
                            createdScripts[i].remove();
                            }
                        }
                        doGoogleInit()
                    } catch (err) {
                        // fail silently
                        setTimeout(() => {
                            doGoogleInit(500)
                        }, 250)
                    }
                    `}
        </Script>
      </>
      <SocketContainer socket={socket} {...pageProps}></SocketContainer>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        <div
          className={`${fetchBusy ? 'fetchNotBusy fetchBusy' : 'fetchNotBusy'}`}
        ></div>
        <Component socket={socket} {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
