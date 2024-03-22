"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateLocalLoginSession = exports.requestSettingsUpdate = exports.logout = exports.grabUsername = exports.checkUserData = exports.checkSignedInAndPrompt = exports.checkSignedIn = exports.attemptThirdPartySignIn = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _universalCookie = _interopRequireDefault(require("universal-cookie"));
var _fetch = require("/modules/utility/fetch/fetch.js");
var _ecommerce = require("/modules/utility/ecommerce/ecommerce.js");
var _LocalEventEmitter2 = require("/modules/events/LocalEventEmitter");
var _utility = require("../utility");
var _jwtDecode = _interopRequireDefault(require("jwt-decode"));
var cookies = new _universalCookie["default"]();
var updateLocalLoginSession = exports.updateLocalLoginSession = function updateLocalLoginSession(data) {
  cookies.set('login', data);
};
var doThirdPartySignIn = function doThirdPartySignIn() {};

/**
 * Attempt to sign in user or ask for more information (username) for register completion
 * @param {*} data 
 * @returns {*}
 */
var attemptThirdPartySignIn = exports.attemptThirdPartySignIn = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data, apiUrl, domainKey, LocalEventEmitter, setAdminAuth) {
    var decodedToken, fetchBody, res, _res$vendor, cookieObj, cart, event;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log('Running', data, apiUrl, domainKey);
          // Decode google third party sign in data and make fetch to server for info

          if (data && data.detail && data.detail.credential) {
            decodedToken = (0, _jwtDecode["default"])(data.detail.credential);
          }
          fetchBody = {
            domainKey: domainKey,
            googleData: data,
            token: decodedToken,
            encodedToken: data.detail.credential
          };
          if (data.requestedUsername) {
            fetchBody.requestedUsername = data.requestedUsername;
          }
          // Call to server to look for user
          _context.next = 7;
          return (0, _fetch.fetchPost)(apiUrl + '/m/authenticate', null, null, fetchBody);
        case 7:
          res = _context.sent;
          if (res && res.hash) {
            // Update cookie signifying login
            if (LocalEventEmitter) {
              LocalEventEmitter.dispatch('completeSignIn', {
                data: res
              });
            }
            cookieObj = (0, _defineProperty2["default"])((0, _defineProperty2["default"])({
              identifier: res.identifier,
              username: res.username,
              email: res.email,
              icon: res.icon,
              hash: res.hash,
              vendor: (_res$vendor = res.vendor) !== null && _res$vendor !== void 0 ? _res$vendor : null
            }, "icon", res.icon), "meta", res.meta); // Optionally set official minipost plan
            if (res.plan) {
              cookieObj.plan = res.plan;
            }
            if (res.cart) {
              cart = JSON.parse(localStorage.getItem('cart'));
              (0, _ecommerce.updateCart)(cart, res.cart);
            }
            if (res !== null && res !== void 0 && res.admin) {
              setAdminAuth(res.admin);
              cookieObj.admin = res.admin;
            }
            updateLocalLoginSession(cookieObj);
            event = new CustomEvent("mute-login-error", {
              "detail": true
            }); // Mutes login errors across application
            document.dispatchEvent(event);
          }
          return _context.abrupt("return", res);
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          return _context.abrupt("return", null);
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 12]]);
  }));
  return function attemptThirdPartySignIn(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();
var checkSignedIn = exports.checkSignedIn = function checkSignedIn() {
  if (!cookies.get('login')) {
    return false;
  }
  return cookies.get('login');
};
var checkSignedInAndPrompt = exports.checkSignedInAndPrompt = function checkSignedInAndPrompt(setPageError, desc) {
  try {
    var user = checkSignedIn();
    if (!user) {
      if (setPageError) {
        setPageError(desc ? desc : "Please sign in with google to register");
      }
      google.accounts.id.prompt(function (notification) {
        console.log('on prompt notification', notification);
      });
      return false;
    }
    return user;
  } catch (err) {
    return err; // fail silently
  }
};
var logout = exports.logout = function logout() {
  try {
    cookies.remove('login');
    (0, _utility.fireGlobalEvent)({
      event: 'logout'
    }, _LocalEventEmitter2._LocalEventEmitter);
    (0, _ecommerce.updateCart)('', {
      items: [],
      user: null
    });
    var onOneTapSignedInGoogle = function onOneTapSignedInGoogle(data) {
      var event = new CustomEvent("thirdparty-signin", {
        "detail": data
      });
      document.dispatchEvent(event);
    };
    var doGoogleInit = function doGoogleInit() {
      var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 250;
      try {
        google.accounts.id.initialize({
          client_id: '169701902623-9a74mqcbqr38uj87qm8tm3190cicaa7m.apps.googleusercontent.com',
          callback: onOneTapSignedInGoogle
        });
        console.log('Google Loaded');
        return true;
      } catch (err) {
        console.log(err);
        // fail silently
      }
    };
    setTimeout(function () {
      doGoogleInit();
    }, 2000);
    return true;
  } catch (err) {
    console.log(err);
    return false; // fail silently
  }
};

/**
 * Register username and assign it to currently signed in user *Protected route*
 * @param {String} desiredUsername 
 * @returns 
 */
var grabUsername = exports.grabUsername = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(apiUrl, domainKey, data, checkSignedIn, setLoggedIn) {
    var user, fetchBody, res;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          if (!checkSignedIn) {
            _context2.next = 31;
            break;
          }
          user = checkSignedIn();
          if (!(user && user.identifier && user.hash)) {
            _context2.next = 28;
            break;
          }
          fetchBody = {
            domainKey: domainKey,
            identifier: user.identifier,
            hash: user.hash,
            proposedUsername: data.proposedUsername
          };
          _context2.next = 7;
          return (0, _fetch.fetchPost)(apiUrl + '/m/grabusername', null, null, fetchBody);
        case 7:
          res = _context2.sent;
          if (res) {
            _context2.next = 12;
            break;
          }
          return _context2.abrupt("return", false);
        case 12:
          if (!(res.hasOwnProperty('status') && res.status !== 'success')) {
            _context2.next = 19;
            break;
          }
          if (!(res.status == "disauthenticated")) {
            _context2.next = 18;
            break;
          }
          logout();
          return _context2.abrupt("return", "disauthenticated");
        case 18:
          return _context2.abrupt("return", res.status);
        case 19:
          if (!(res.identifier && res.username && res.hash)) {
            _context2.next = 26;
            break;
          }
          user.username = res.username;
          user.hash = res.hash;
          user.identifier = res.identifier;
          updateLocalLoginSession(user);
          setLoggedIn(user);
          return _context2.abrupt("return", true);
        case 26:
          _context2.next = 29;
          break;
        case 28:
          return _context2.abrupt("return", false);
        case 29:
          _context2.next = 32;
          break;
        case 31:
          return _context2.abrupt("return", false);
        case 32:
          _context2.next = 37;
          break;
        case 34:
          _context2.prev = 34;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", false);
        case 37:
          return _context2.abrupt("return", false);
        case 38:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 34]]);
  }));
  return function grabUsername(_x6, _x7, _x8, _x9, _x10) {
    return _ref2.apply(this, arguments);
  };
}();
var checkUserData = exports.checkUserData = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(pageProps, checkItems) {
    var _pageProps$_loggedIn, _pageProps$_loggedIn2, fetchPending, fetchBody, res;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          console.log('Check user data', pageProps, checkItems);
          if (!checkItems) {
            _context3.next = 30;
            break;
          }
          fetchPending = Object.entries(checkItems).find(function (m) {
            return m[1] === true;
          });
          if (!(pageProps !== null && pageProps !== void 0 && (_pageProps$_loggedIn = pageProps._loggedIn) !== null && _pageProps$_loggedIn !== void 0 && _pageProps$_loggedIn.identifier && pageProps !== null && pageProps !== void 0 && (_pageProps$_loggedIn2 = pageProps._loggedIn) !== null && _pageProps$_loggedIn2 !== void 0 && _pageProps$_loggedIn2.hash && pageProps.domainKey && pageProps.apiUrl && fetchPending)) {
            _context3.next = 29;
            break;
          }
          fetchBody = {
            domainKey: pageProps.domainKey,
            identifier: pageProps._loggedIn.identifier,
            hash: pageProps._loggedIn.hash,
            ip: pageProps._loggedIn.ip,
            checkItems: checkItems
          };
          console.log(fetchBody);
          _context3.next = 8;
          return (0, _fetch.fetchPost)(pageProps.apiUrl + '/m/checkuserdata', null, null, fetchBody);
        case 8:
          res = _context3.sent;
          if (res) {
            _context3.next = 13;
            break;
          }
          return _context3.abrupt("return", false);
        case 13:
          if (!res.hasOwnProperty('status')) {
            _context3.next = 27;
            break;
          }
          if (!(res.status == "disauthenticated")) {
            _context3.next = 19;
            break;
          }
          logout();
          return _context3.abrupt("return", "disauthenticated");
        case 19:
          if (!(res.status == "failed")) {
            _context3.next = 23;
            break;
          }
          return _context3.abrupt("return", false);
        case 23:
          if (!(res.status == "success")) {
            _context3.next = 27;
            break;
          }
          console.log('Check user data', res);
          console.log('must return res');
          return _context3.abrupt("return", res);
        case 27:
          _context3.next = 30;
          break;
        case 29:
          return _context3.abrupt("return", false);
        case 30:
          return _context3.abrupt("return", null);
        case 31:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function checkUserData(_x11, _x12) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * Request settings chage *Protected route*
 * @param {String} apiUrl
 * @param {String} domainKey
 * @param {Object} change
 * @returns 
 */
var requestSettingsUpdate = exports.requestSettingsUpdate = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(apiUrl, domainKey, change) {
    var props,
      setFetchBusy,
      fetchBusy,
      user,
      r,
      fetchBody,
      res,
      _args4 = arguments;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          props = _args4.length > 3 && _args4[3] !== undefined ? _args4[3] : {};
          setFetchBusy = _args4.length > 4 ? _args4[4] : undefined;
          fetchBusy = _args4.length > 5 ? _args4[5] : undefined;
          _context4.prev = 3;
          if (!checkSignedIn) {
            _context4.next = 47;
            break;
          }
          user = checkSignedIn();
          console.log(user);
          if (!(user && user.identifier && user.hash && !fetchBusy)) {
            _context4.next = 44;
            break;
          }
          setFetchBusy(true);
          r = setTimeout(function () {
            setFetchBusy(false);
          }, 5000);
          fetchBody = {
            domainKey: domainKey,
            identifier: user.identifier,
            hash: user.hash,
            change: change
          };
          console.log('Shoot req', fetchBody);
          _context4.next = 14;
          return (0, _fetch.fetchPost)(apiUrl + '/m/settingsupdate', null, null, fetchBody);
        case 14:
          res = _context4.sent;
          console.log(res);
          if (res) {
            _context4.next = 22;
            break;
          }
          setFetchBusy(false);
          clearTimeout(r);
          return _context4.abrupt("return", false);
        case 22:
          if (!(res.hasOwnProperty('status') && res.status !== 'success')) {
            _context4.next = 33;
            break;
          }
          setFetchBusy(false);
          clearTimeout(r);
          if (!(res.status == "disauthenticated")) {
            _context4.next = 30;
            break;
          }
          logout();
          return _context4.abrupt("return", "disauthenticated");
        case 30:
          return _context4.abrupt("return", res);
        case 31:
          _context4.next = 42;
          break;
        case 33:
          if (!(res.status === 'success')) {
            _context4.next = 42;
            break;
          }
          setFetchBusy(false);
          clearTimeout(r);
          console.log(res);
          if (!res.user) {
            _context4.next = 42;
            break;
          }
          updateLocalLoginSession(res.user);
          props._setLoggedIn(res.user);
          if (props._LocalEventEmitter) {
            props._LocalEventEmitter.dispatch('refetchDefaults', {
              dispatch: 'simple'
            });
          }
          return _context4.abrupt("return", true);
        case 42:
          _context4.next = 45;
          break;
        case 44:
          return _context4.abrupt("return", false);
        case 45:
          _context4.next = 48;
          break;
        case 47:
          return _context4.abrupt("return", false);
        case 48:
          _context4.next = 54;
          break;
        case 50:
          _context4.prev = 50;
          _context4.t0 = _context4["catch"](3);
          console.log(_context4.t0);
          return _context4.abrupt("return", false);
        case 54:
          return _context4.abrupt("return", false);
        case 55:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[3, 50]]);
  }));
  return function requestSettingsUpdate(_x13, _x14, _x15) {
    return _ref4.apply(this, arguments);
  };
}();