"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleSingleOpenMenu = exports.registerSocket = exports.registerGoogleSignIn = exports.handleSetLoggedIn = exports.handleSetCart = exports.handleGlobalEvent = exports.handleCheckUserData = exports.forceUpdateProps = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _ecommerce = require("../../utility/ecommerce");
var _util = require("/modules/util");
var handleSetLoggedIn = exports.handleSetLoggedIn = function handleSetLoggedIn(pageProps, checkSignedIn, _setLoggedIn) {
  if (pageProps._loggedIn) {
    _setLoggedIn(pageProps._loggedIn);
  } else {
    var signedIn = checkSignedIn();
    if (signedIn) {
      _setLoggedIn(signedIn);
    }
  }
};
var toggleSingleOpenMenu = exports.toggleSingleOpenMenu = function toggleSingleOpenMenu(e, menu, _openMenu, _setOpenMenu, force) {
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
var handleCheckUserData = exports.handleCheckUserData = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(pageProps, _loggedIn) {
    var mustCheck, runRequest, i;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(pageProps && _loggedIn)) {
            _context.next = 14;
            break;
          }
          mustCheck = {
            ip: !_loggedIn.meta || (0, _util.isObjectEmpty)(_loggedIn.meta) || (_loggedIn.meta.ip && _loggedIn.meta.ip) != '::ffff:127.0.0.1' ? false : true,
            location: !_loggedIn.meta || (0, _util.isObjectEmpty)(_loggedIn.meta) || _loggedIn.meta.location ? false : true
          };
          console.log('Must Check', mustCheck);
          runRequest = false;
          i = 0;
        case 5:
          if (!(i < Object.entries(mustCheck).length)) {
            _context.next = 12;
            break;
          }
          if (!Object.entries(mustCheck)[i][1]) {
            _context.next = 9;
            break;
          }
          runRequest = true;
          return _context.abrupt("break", 12);
        case 9:
          i++;
          _context.next = 5;
          break;
        case 12:
          if (!runRequest) {
            _context.next = 14;
            break;
          }
          return _context.abrupt("return", mustCheck);
        case 14:
          return _context.abrupt("return", false);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function handleCheckUserData(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var handleSetCart = exports.handleSetCart = function handleSetCart(_loggedIn, _setCart) {
  var cart = JSON.parse(localStorage.getItem('cart'));
  if (cart) {
    if (!cart.user) {
      var temp = cart;
      temp.user = _loggedIn;
      localStorage.setItem('cart', JSON.stringify(temp));
      _setCart(temp);
    }
  } else {
    if (_loggedIn) {
      var def = {
        user: _loggedIn,
        cart: []
      };
      localStorage.setItem('cart', JSON.stringify(def));
      _setCart(def);
    }
  }
};
var forceUpdateProps = exports.forceUpdateProps = function forceUpdateProps(e, _setCart) {
  if (e) {
    if (e.dispatch === '_cart') {
      _setCart(JSON.parse(window.localStorage.getItem('cart'))); // Should force reload of cart props
    }
  }
};
var registerSocket = exports.registerSocket = function registerSocket(io, _socket, setSocket, socketTimeout, pageProps, setSocketTimeout) {
  if (!_socket && !socketTimeout) {
    var socketIoConfig = {
      reconnectAttempts: 1
    };
    if (pageProps.socketpath) {
      socketIoConfig.path = pageProps.socketpath;
      socketIoConfig.port = pageProps.socketPort;
    }
    setSocket(io(pageProps.socketUrl, socketIoConfig));
    var r = setTimeout(function () {
      setSocketTimeout(null);
    }, 20000);
    setSocketTimeout(r);
  }
};
var handleGlobalEvent = exports.handleGlobalEvent = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(e, pageProps, fetchBusy, setFetchBusy) {
    var cart, res, snapshot, res2, _res2$data, _cart, _res, _cart2, _res2;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!e) {
            _context2.next = 45;
            break;
          }
          if (!(e.action === 'buy')) {
            _context2.next = 22;
            break;
          }
          pageProps._setPageError(null);
          if (!(!fetchBusy && e.item && e.style && e.option)) {
            _context2.next = 20;
            break;
          }
          cart = JSON.parse(localStorage.getItem('cart'));
          _context2.next = 7;
          return (0, _ecommerce.addToCartGlobal)(pageProps.apiUrl, pageProps.domainKey, pageProps._loggedIn, cart, e.item, {
            style: e.style,
            option: e.option
          }, setFetchBusy);
        case 7:
          res = _context2.sent;
          pageProps._LocalEventEmitter.dispatch('cart_update', {
            dispatch: 'flashCart'
          });
          if (!res) {
            _context2.next = 20;
            break;
          }
          if (!(res.status === 'success')) {
            _context2.next = 20;
            break;
          }
          (0, _ecommerce.updateCart)(cart, res.cart);
          // Successfully added to cart, must perform purchase
          cart = JSON.parse(localStorage.getItem('cart'));
          snapshot = (0, _ecommerce.calculateTotal)(cart, null, {
            object: true
          });
          console.log('snapshot', snapshot);
          _context2.next = 17;
          return (0, _ecommerce.performPurchase)(pageProps.apiUrl, pageProps.domainKey, pageProps._loggedIn, cart, setFetchBusy, {
            snapshot: snapshot
          });
        case 17:
          res2 = _context2.sent;
          if (res2) {
            if (res2.status === 'success') {
              if (res2.data && res2.data.cart) {
                (0, _ecommerce.updateCart)(cart, res2.data.cart);
              }
              if (res2 !== null && res2 !== void 0 && (_res2$data = res2.data) !== null && _res2$data !== void 0 && (_res2$data = _res2$data.order) !== null && _res2$data !== void 0 && _res2$data.id) {
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
        case 20:
          _context2.next = 45;
          break;
        case 22:
          if (!(e.action === 'add_to_cart')) {
            _context2.next = 33;
            break;
          }
          pageProps._setPageError(null);
          if (!(!fetchBusy && e.item && e.style && e.option)) {
            _context2.next = 31;
            break;
          }
          _cart = JSON.parse(localStorage.getItem('cart'));
          _context2.next = 28;
          return (0, _ecommerce.addToCartGlobal)(pageProps.apiUrl, pageProps.domainKey, pageProps._loggedIn, _cart, e.item, {
            style: e.style,
            option: e.option
          }, setFetchBusy);
        case 28:
          _res = _context2.sent;
          pageProps._LocalEventEmitter.dispatch('cart_update', {
            dispatch: 'flashCart'
          });
          if (_res) {
            if (_res.status === 'success') {
              (0, _ecommerce.updateCart)(_cart, _res.cart);
            }
          } else {
            pageProps._setPageError({
              message: 'Add to cart failed',
              placement: 'add_to_cart'
            });
          }
        case 31:
          _context2.next = 45;
          break;
        case 33:
          if (!(e.action === 'add_to_cart_subscribe')) {
            _context2.next = 44;
            break;
          }
          pageProps._setPageError(null);
          if (!(!fetchBusy && e.item && e.style && e.option)) {
            _context2.next = 42;
            break;
          }
          _cart2 = JSON.parse(localStorage.getItem('cart'));
          _context2.next = 39;
          return (0, _ecommerce.addToCartGlobal)(pageProps.apiUrl, pageProps.domainKey, pageProps._loggedIn, _cart2, e.item, {
            style: e.style,
            option: e.option
          }, setFetchBusy, {
            subscribe: 'monthly'
          });
        case 39:
          _res2 = _context2.sent;
          pageProps._LocalEventEmitter.dispatch('cart_update', {
            dispatch: 'flashCart'
          });
          if (_res2) {
            if (_res2.status === 'success') {
              (0, _ecommerce.updateCart)(_cart2, _res2.cart);
            }
          } else {
            pageProps._setPageError({
              message: 'Add to cart failed',
              placement: 'add_to_cart'
            });
          }
        case 42:
          _context2.next = 45;
          break;
        case 44:
          if (e.action === 'logout') {
            // Enforces logout globally
            if (pageProps._setLoggedIn) {
              pageProps._setLoggedIn(false);
            }
          }
        case 45:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function handleGlobalEvent(_x3, _x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
var registerGoogleSignIn = exports.registerGoogleSignIn = "// Register google one tap sign in event to pass data to registration/login function\n    const onOneTapSignedInGoogle = data => {\n        let event = new CustomEvent(\"thirdparty-signin\", { \"detail\": data });\n        document.dispatchEvent(event);\n    }\n    const doGoogleInit = (delay = 250) => {\n        try {\n            google.accounts.id.initialize({\n                client_id: '169701902623-9a74mqcbqr38uj87qm8tm3190cicaa7m.apps.googleusercontent.com',\n                callback: onOneTapSignedInGoogle\n            })\n            console.log('Google Loaded')\n            return true\n        } catch (err) {\n            // fail silently\n            setTimeout(() => {\n                doGoogleInit(delay * 2)\n            }, delay)\n        }\n    }\n    try {\n        let createdScripts = document.getElementsByClassName(\"lazyOnload\");\n        if (createdScripts && createdScripts.length > 1) { // Remove duplicate scripts\n            for (let i = 1; i < createdScripts.length; i++) {\n                createdScripts[i].remove();\n            }\n        }\n        doGoogleInit()\n    } catch (err) {\n        // fail silently\n        setTimeout(() => {\n            doGoogleInit(500)\n        }, 250)\n    }";