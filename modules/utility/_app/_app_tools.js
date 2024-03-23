import { addToCartGlobal, calculateTotal, updateCart, performPurchase } from '../../utility/ecommerce';
import { isObjectEmpty } from '/modules/util';
export const handleSetLoggedIn = (pageProps, checkSignedIn, _setLoggedIn) => {
  if (pageProps._loggedIn) {
    _setLoggedIn(pageProps._loggedIn);
  } else {
    const signedIn = checkSignedIn();
    if (signedIn) {
      _setLoggedIn(signedIn);
    }
  }
};
export const toggleSingleOpenMenu = (e, menu, _openMenu, _setOpenMenu, force) => {
  if (force) {
    _setOpenMenu({
      currentMenu: menu
    });
  } else if (_openMenu && _openMenu.currentMenu) {
    if (_openMenu.currentMenu == menu) {
      _setOpenMenu({});
    } else {
      _setOpenMenu({
        currentMenu: menu
      });
    }
  } else {
    _setOpenMenu({
      currentMenu: menu
    });
  }
};
export const handleCheckUserData = async (pageProps, _loggedIn) => {
  if (pageProps && _loggedIn) {
    const mustCheck = {
      ip: !_loggedIn.meta || isObjectEmpty(_loggedIn.meta) || (_loggedIn.meta.ip && _loggedIn.meta.ip) != '::ffff:127.0.0.1' ? false : true,
      location: !_loggedIn.meta || isObjectEmpty(_loggedIn.meta) || _loggedIn.meta.location ? false : true
    };
    console.log('Must Check', mustCheck);
    let runRequest = false;
    for (let i = 0; i < Object.entries(mustCheck).length; i++) {
      if (Object.entries(mustCheck)[i][1]) {
        runRequest = true;
        break;
      }
    }
    if (runRequest) {
      return mustCheck;
    }
  }
  return false;
};
export const handleSetCart = (_loggedIn, _setCart) => {
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
      const def = {
        user: _loggedIn,
        cart: []
      };
      localStorage.setItem('cart', JSON.stringify(def));
      _setCart(def);
    }
  }
};
export const forceUpdateProps = (e, _setCart) => {
  if (e) {
    if (e.dispatch === '_cart') {
      _setCart(JSON.parse(window.localStorage.getItem('cart'))); // Should force reload of cart props
    }
  }
};
export const registerSocket = (io, _socket, setSocket, socketTimeout, pageProps, setSocketTimeout) => {
  if (!_socket && !socketTimeout) {
    const socketIoConfig = {
      reconnectAttempts: 1
    };
    if (pageProps.socketpath) {
      socketIoConfig.path = pageProps.socketpath;
      socketIoConfig.port = pageProps.socketPort;
    }
    setSocket(io(pageProps.socketUrl, socketIoConfig));
    const r = setTimeout(() => {
      setSocketTimeout(null);
    }, 20000);
    setSocketTimeout(r);
  }
};
export const handleGlobalEvent = async (e, pageProps, fetchBusy, setFetchBusy) => {
  if (e) {
    if (e.action === 'buy') {
      pageProps._setPageError(null);
      if (!fetchBusy && e.item && e.style && e.option) {
        let cart = JSON.parse(localStorage.getItem('cart'));
        const res = await addToCartGlobal(pageProps.apiUrl, pageProps.domainKey, pageProps._loggedIn, cart, e.item, {
          style: e.style,
          option: e.option
        }, setFetchBusy);
        pageProps._LocalEventEmitter.dispatch('cart_update', {
          dispatch: 'flashCart'
        });
        if (res) {
          if (res.status === 'success') {
            updateCart(cart, res.cart);
            // Successfully added to cart, must perform purchase
            cart = JSON.parse(localStorage.getItem('cart'));
            const snapshot = calculateTotal(cart, null, {
              object: true
            });
            console.log('snapshot', snapshot);
            const res2 = await performPurchase(pageProps.apiUrl, pageProps.domainKey, pageProps._loggedIn, cart, setFetchBusy, {
              snapshot: snapshot
            });
            if (res2) {
              if (res2.status === 'success') {
                if (res2.data && res2.data.cart) {
                  updateCart(cart, res2.data.cart);
                }
                if (res2?.data?.order?.id) {
                  pageProps._LocalEventEmitter.dispatch('cart_update', {
                    dispatch: 'purchase',
                    id: res2.data.order.id
                  });
                  console.log('Purchase Success', res2);
                }
              } else {
                pageProps._setPageError({
                  message: 'Purchase failed',
                  placement: 'purchase'
                });
              }
            } else {
              console.log(res2);
              pageProps._setPageError({
                message: 'Purchase failed',
                placement: 'purchase'
              });
            }
            setFetchBusy(false);
          }
        }
      }
    } else if (e.action === 'add_to_cart') {
      pageProps._setPageError(null);
      if (!fetchBusy && e.item && e.style && e.option) {
        const cart = JSON.parse(localStorage.getItem('cart'));
        const res = await addToCartGlobal(pageProps.apiUrl, pageProps.domainKey, pageProps._loggedIn, cart, e.item, {
          style: e.style,
          option: e.option
        }, setFetchBusy);
        pageProps._LocalEventEmitter.dispatch('cart_update', {
          dispatch: 'flashCart'
        });
        if (res) {
          if (res.status === 'success') {
            updateCart(cart, res.cart);
          }
        } else {
          pageProps._setPageError({
            message: 'Add to cart failed',
            placement: 'add_to_cart'
          });
        }
      }
    } else if (e.action === 'add_to_cart_subscribe') {
      pageProps._setPageError(null);
      if (!fetchBusy && e.item && e.style && e.option) {
        const cart = JSON.parse(localStorage.getItem('cart'));
        const res = await addToCartGlobal(pageProps.apiUrl, pageProps.domainKey, pageProps._loggedIn, cart, e.item, {
          style: e.style,
          option: e.option
        }, setFetchBusy, {
          subscribe: 'monthly'
        });
        pageProps._LocalEventEmitter.dispatch('cart_update', {
          dispatch: 'flashCart'
        });
        if (res) {
          if (res.status === 'success') {
            updateCart(cart, res.cart);
          }
        } else {
          pageProps._setPageError({
            message: 'Add to cart failed',
            placement: 'add_to_cart'
          });
        }
      }
    } else if (e.action === 'logout') {
      // Enforces logout globally
      if (pageProps._setLoggedIn) {
        pageProps._setLoggedIn(false);
      }
    }
  }
};
export const registerGoogleSignIn = `// Register google one tap sign in event to pass data to registration/login function
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
    }`;