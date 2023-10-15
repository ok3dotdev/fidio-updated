import React from 'react';
import '../styles/globals.css';
import '../styles/tycoon.scss';
import '../styles/video/videoPlayer.css';
import '../styles/features/output.css';
// import 'shaka-player/dist/controls.css'
import '../styles/video/videojs.css';
import '../styles/video/videoPlayerTycoon.css';
import Head from 'next/head';
import Script from 'next/script';
import io from 'socket.io-client';
import { SocketContainer } from '/modules/socket';
import { resolveVariables } from '/app.config';
import { checkSignedIn } from '/modules/utility/onboarding/SignIn';
import { LocalEventEmitter } from '/modules/events/LocalEventEmitter';
import { isObjectEmpty } from '/modules/util';
import { Archivo_Black } from 'next/font/google';

function MyApp({ Component, pageProps }) {
  const [_loggedIn, _setLoggedIn] = React.useState(false);
  const [_stripeSecret, _setStripeSecret] = React.useState(false);
  const [_loginError, _setLoginError] = React.useState(false);
  const [_pageError, _setPageError] = React.useState(null);
  const [_openMenu, _setOpenMenu] = React.useState({});
  const [_cart, _setCart] = React.useState({});

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
      // console.log(signedIn);
      if (signedIn) {
        _setLoggedIn(signedIn);
      }
    }
  }, [_loggedIn, pageProps._loggedIn]);

  const toggleSingleOpenMenu = (e, menu) => {
    // console.log(menu, _openMenu);
    if (_openMenu && _openMenu.currentMenu) {
      if (_openMenu.currentMenu == menu) {
        _setOpenMenu({});
      } else {
        _setOpenMenu({ currentMenu: menu });
      }
    } else {
      // console.log(_openMenu, menu);
      _setOpenMenu({ currentMenu: menu });
      // console.log(_openMenu);
    }
  };

  React.useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      // console.log(cart);
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
  // console.log(_openMenu, _loggedIn);

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
    // console.log(e);
    if (e) {
      if (e.dispatch === '_cart') {
        // console.log('updating');
        _setCart(JSON.parse(window.localStorage.getItem('cart'))); // Should force reload of cart props
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

  // console.log(socket);

  // const archivoBlack = Archivo_Black({
  //   weight: '400',
  //   subsets: ['latin'],
  //   variable: '--font-archivo',
  //   style: 'normal',
  // });

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
							// console.log('Google Loaded')
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
      <main>
        <Component socket={socket} {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
