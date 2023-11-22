import React from 'react';
import '../styles/globals.css';
import '../styles/tycoon.scss';
import '../styles/video/videoPlayer.css';
// import 'shaka-player/dist/controls.css'
import '../styles/video/videojs.css';
import '../styles/video/videoPlayerTycoon.css';
import '../styles/styles.scss';
import Head from 'next/head';
import Script from 'next/script';
import io from 'socket.io-client';
import { SocketContainer } from '/modules/socket';
import { resolveVariables } from '/app.config';
import { checkSignedIn } from '/modules/utility/onboarding/SignIn';
import { LocalEventEmitter } from '/modules/events/LocalEventEmitter';
import {
  isObjectEmpty,
  handleRouteChange,
  registerCheckLocalStorageSize,
} from '/modules/util';
import {
  addToCartGlobal,
  calculateTotal,
  updateCart,
  performPurchase,
} from '/modules/utility/ecommerce';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const [_loggedIn, _setLoggedIn] = React.useState(false);
  const [_stripeSecret, _setStripeSecret] = React.useState(false);
  const [_loginError, _setLoginError] = React.useState(false);
  const [_pageError, _setPageError] = React.useState(null);
  const [_openMenu, _setOpenMenu] = React.useState({});
  const [_cart, _setCart] = React.useState({});
  const [fetchBusy, setFetchBusy] = React.useState(false);
  const [_rooms, _setRooms] = React.useState({});

  const router = useRouter();
  try {
    registerCheckLocalStorageSize(window);
  } catch (err) {
    // fail silently
  }

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
      console.log(signedIn);
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
  pageProps._rooms = _rooms;
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
  const [_socket, setSocket] = React.useState(null);
  const [socketTimeout, setSocketTimeout] = React.useState(null);
  React.useEffect(() => {
    if (!_socket && !socketTimeout) {
      setSocket(io(pageProps.socketUrl, socketIoConfig));
      const r = setTimeout(() => {
        setSocketTimeout(null);
      }, 20000);
      setSocketTimeout(r);
    }
  }, [_socket, socketTimeout]);

  /**
   * Tracks user Route change ***Analytics***
   */
  React.useEffect(() => {
    const doHandleRouteChange = (route, context) => {
      handleRouteChange(pageProps, route, context);
    };
    router.events.on('routeChangeComplete', doHandleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [
    router.events,
    pageProps._loggedIn,
    pageProps.apiUrl,
    pageProps.domainKey,
  ]);

  console.log('Socket', _socket);

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
      <SocketContainer
        _socket={_socket}
        setRooms={_setRooms}
        {...pageProps}
      ></SocketContainer>
      <div
        className={`${fetchBusy ? 'fetchNotBusy fetchBusy' : 'fetchNotBusy'}`}
      ></div>
      <Component _socket={_socket} {...pageProps} />
    </div>
  );
}

export default MyApp;
