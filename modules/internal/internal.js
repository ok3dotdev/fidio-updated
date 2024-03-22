"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _socket2 = _interopRequireDefault(require("socket.io-client"));
var _socket3 = require("/modules/socket");
var _app = require("/app.config");
var _SignIn = require("/modules/utility/onboarding/SignIn");
var _LocalEventEmitter2 = require("/modules/events/LocalEventEmitter");
var _util = require("/modules/util");
var _router = require("next/router");
var _app2 = require("/modules/utility/_app");
var _middleware = require("../../customModules/middleware");
var _ = require(".");
var CHECK_HANDLE_USER_DATA_THRESHOLD = 1800000;
var Internal = function Internal(usePageProps) {
  var _pageProps11;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    appDidMount = _React$useState2[0],
    setAppDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(false),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    _loggedIn = _React$useState4[0],
    _setLoggedIn = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(false),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    _stripeSecret = _React$useState6[0],
    _setStripeSecret = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(false),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    _loginError = _React$useState8[0],
    _setLoginError = _React$useState8[1];
  var _React$useState9 = _react["default"].useState(null),
    _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
    _pageError = _React$useState10[0],
    _setPageError = _React$useState10[1];
  var _React$useState11 = _react["default"].useState({}),
    _React$useState12 = (0, _slicedToArray2["default"])(_React$useState11, 2),
    _openMenu = _React$useState12[0],
    _setOpenMenu = _React$useState12[1];
  var _React$useState13 = _react["default"].useState({}),
    _React$useState14 = (0, _slicedToArray2["default"])(_React$useState13, 2),
    _cart = _React$useState14[0],
    _setCart = _React$useState14[1];
  var _React$useState15 = _react["default"].useState(false),
    _React$useState16 = (0, _slicedToArray2["default"])(_React$useState15, 2),
    fetchBusy = _React$useState16[0],
    setFetchBusy = _React$useState16[1];
  var _React$useState17 = _react["default"].useState({}),
    _React$useState18 = (0, _slicedToArray2["default"])(_React$useState17, 2),
    _rooms = _React$useState18[0],
    _setRooms = _React$useState18[1];
  var _React$useState19 = _react["default"].useState(false),
    _React$useState20 = (0, _slicedToArray2["default"])(_React$useState19, 2),
    _isMobile = _React$useState20[0],
    _setIsMobile = _React$useState20[1];
  var _React$useState21 = _react["default"].useState(null),
    _React$useState22 = (0, _slicedToArray2["default"])(_React$useState21, 2),
    _adminAuth = _React$useState22[0],
    _setAdminAuth = _React$useState22[1];
  var _React$useState23 = _react["default"].useState(false),
    _React$useState24 = (0, _slicedToArray2["default"])(_React$useState23, 2),
    _managerOpen = _React$useState24[0],
    _setManagerOpen = _React$useState24[1];
  var _React$useState25 = _react["default"].useState(false),
    _React$useState26 = (0, _slicedToArray2["default"])(_React$useState25, 2),
    _currentlyStreaming = _React$useState26[0],
    _setCurrentlyStreaming = _React$useState26[1];
  var _React$useState27 = _react["default"].useState(-1),
    _React$useState28 = (0, _slicedToArray2["default"])(_React$useState27, 2),
    lastCheckHandleUserData = _React$useState28[0],
    setLastCheckHandleUserData = _React$useState28[1];

  // Must assign usePageProps as it cannot be used directly
  var pageProps = Object.assign({}, usePageProps);
  var router = (0, _router.useRouter)();
  try {
    (0, _util.registerCheckLocalStorageSize)(window);
    (0, _util.registerCheckMobile)(window);
    (0, _util.registerProxyConsoleLog)(window);
  } catch (err) {
    // fail silently
  }
  _react["default"].useEffect(function () {
    if (!appDidMount) {
      setAppDidMount(true);
    } else {
      var mobile = window.mobileCheck();
      _setIsMobile(mobile);
    }
  }, [appDidMount]);
  _react["default"].useEffect(function () {
    var muteLoginErr = function muteLoginErr() {
      _setLoginError(null);
    };
    document.addEventListener("mute-login-error", muteLoginErr, {
      once: true
    });
  }, []);
  var resolveCheckUserData = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(pageProps, runCheckUserDataCheck) {
      var res, user;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _SignIn.checkUserData)(pageProps, runCheckUserDataCheck);
          case 2:
            res = _context.sent;
            if (!res) {
              _context.next = 19;
              break;
            }
            user = Object.assign({}, _loggedIn);
            console.log(res, user);
            if (!(res.identifier && res.username && res.hash)) {
              _context.next = 19;
              break;
            }
            user.username = res.username;
            user.hash = res.hash;
            user.identifier = res.identifier;
            user.ip = res.ip;
            if (!user.meta) {
              user.meta = {};
            }
            if (res.ip) {
              user.meta.ip = res.ip;
            }
            if (res.location) {
              user.meta.location = res.location;
            }
            if (res.locationMeta) {
              user.meta.locationMeta = res.locationMeta;
            }
            console.log(user);
            (0, _SignIn.updateLocalLoginSession)(user);
            _setLoggedIn(user);
            return _context.abrupt("return", true);
          case 19:
            return _context.abrupt("return", false);
          case 20:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function resolveCheckUserData(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  var handleUserDependencies = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      var runCheckUserDataCheck;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            (0, _app2.handleSetLoggedIn)(pageProps, _SignIn.checkSignedIn, _setLoggedIn);
            _context2.next = 3;
            return (0, _app2.handleCheckUserData)(pageProps, _loggedIn);
          case 3:
            runCheckUserDataCheck = _context2.sent;
            if (pageProps && _loggedIn && lastCheckHandleUserData < new Date().getTime() - CHECK_HANDLE_USER_DATA_THRESHOLD && runCheckUserDataCheck) {
              setLastCheckHandleUserData(new Date().getTime());
              resolveCheckUserData(pageProps, runCheckUserDataCheck);
            }
          case 5:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function handleUserDependencies() {
      return _ref2.apply(this, arguments);
    };
  }();
  _react["default"].useEffect(function () {
    handleUserDependencies();
  }, [_loggedIn, pageProps._loggedIn]);
  var handleToggleSingleOpenMenu = function handleToggleSingleOpenMenu(e, menu, force) {
    (0, _app2.toggleSingleOpenMenu)(e, menu, _openMenu, _setOpenMenu, force);
  };
  _react["default"].useEffect(function () {
    (0, _app2.handleSetCart)(_loggedIn, _setCart);
  }, [_loggedIn]);
  pageProps._LocalEventEmitter = _LocalEventEmitter2._LocalEventEmitter;
  pageProps._loggedIn = _loggedIn;
  pageProps._setLoggedIn = _setLoggedIn;
  pageProps._stripeSecret = _stripeSecret;
  pageProps._setStripeSecret = _setStripeSecret;
  pageProps._loginError = _loginError;
  pageProps._setLoginError = _setLoginError;
  pageProps._pageError = _pageError;
  pageProps._setPageError = _setPageError;
  pageProps._toggleSingleOpenMenu = handleToggleSingleOpenMenu;
  pageProps._openMenu = _openMenu;
  pageProps._setOpenMenu = _setOpenMenu;
  pageProps._cart = _cart;
  pageProps._rooms = _rooms;
  pageProps._isMobile = _isMobile;
  pageProps._adminAuth = _adminAuth;
  pageProps._setAdminAuth = _setAdminAuth;
  pageProps._managerOpen = _managerOpen;
  pageProps._setManagerOpen = _setManagerOpen;
  pageProps._currentlyStreaming = _currentlyStreaming;
  pageProps._setCurrentlyStreaming = _setCurrentlyStreaming;
  pageProps.fetchBusy = fetchBusy;
  pageProps.setFetchBusy = setFetchBusy;
  var _configVariables = (0, _app.resolveVariables)();
  pageProps._configVariables = _configVariables;
  pageProps = Object.assign((0, _app.resolveVariables)(), pageProps);
  _LocalEventEmitter2._LocalEventEmitter.unsubscribe('forceUpdateProps');
  _LocalEventEmitter2._LocalEventEmitter.subscribe('forceUpdateProps', function (e) {
    (0, _app2.forceUpdateProps)(e, _setCart);
  });
  _LocalEventEmitter2._LocalEventEmitter.unsubscribe('global_event');
  _LocalEventEmitter2._LocalEventEmitter.subscribe('global_event', /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(e) {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            (0, _app2.handleGlobalEvent)(e, pageProps, fetchBusy, setFetchBusy);
          case 1:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }());

  /**
   * Handles setting admin auth as required
   */
  _react["default"].useEffect(function () {
    var _pageProps, _pageProps2, _pageProps3, _pageProps$_loggedIn$, _pageProps4, _pageProps5, _pageProps6, _pageProps7, _pageProps8, _pageProps9, _pageProps10;
    console.log;
    if ((_pageProps = pageProps) !== null && _pageProps !== void 0 && (_pageProps = _pageProps._loggedIn) !== null && _pageProps !== void 0 && _pageProps.admin && !_adminAuth && (_pageProps2 = pageProps) !== null && _pageProps2 !== void 0 && _pageProps2.dborigin && (_pageProps3 = pageProps) !== null && _pageProps3 !== void 0 && (_pageProps3 = _pageProps3._loggedIn) !== null && _pageProps3 !== void 0 && _pageProps3.admin.origin && pageProps.dborigin === pageProps._loggedIn.admin.origin && (_pageProps$_loggedIn$ = pageProps._loggedIn.admin) !== null && _pageProps$_loggedIn$ !== void 0 && _pageProps$_loggedIn$.userid && (_pageProps4 = pageProps) !== null && _pageProps4 !== void 0 && (_pageProps4 = _pageProps4._loggedIn) !== null && _pageProps4 !== void 0 && _pageProps4.identifier && pageProps._loggedIn.admin.userid === pageProps._loggedIn.identifier) {
      _setAdminAuth(pageProps._loggedIn.admin);
    } else if (!(_adminAuth !== null && _adminAuth !== void 0 && _adminAuth.userid) || !((_pageProps5 = pageProps) !== null && _pageProps5 !== void 0 && _pageProps5._loggedIn) || (_pageProps6 = pageProps) !== null && _pageProps6 !== void 0 && _pageProps6._loggedIn && !pageProps._loggedIn.identifier || _adminAuth !== null && _adminAuth !== void 0 && _adminAuth.userid && (_pageProps7 = pageProps) !== null && _pageProps7 !== void 0 && (_pageProps7 = _pageProps7._loggedIn) !== null && _pageProps7 !== void 0 && _pageProps7.identifier && _adminAuth.userid !== pageProps._loggedIn.identifier || !((_pageProps8 = pageProps) !== null && _pageProps8 !== void 0 && (_pageProps8 = _pageProps8._adminAuth) !== null && _pageProps8 !== void 0 && _pageProps8.origin) || !((_pageProps9 = pageProps) !== null && _pageProps9 !== void 0 && _pageProps9.dborigin) || (_pageProps10 = pageProps) !== null && _pageProps10 !== void 0 && (_pageProps10 = _pageProps10._adminAuth) !== null && _pageProps10 !== void 0 && _pageProps10.origin && pageProps.dborigin && pageProps._adminAuth.origin !== pageProps.dborigin) {
      _setAdminAuth(null);
    }
  }, [pageProps._loggedIn, _adminAuth]);

  /**
   * Socket Initialized Here
   */
  var _React$useState29 = _react["default"].useState(null),
    _React$useState30 = (0, _slicedToArray2["default"])(_React$useState29, 2),
    _socket = _React$useState30[0],
    setSocket = _React$useState30[1];
  var _React$useState31 = _react["default"].useState(null),
    _React$useState32 = (0, _slicedToArray2["default"])(_React$useState31, 2),
    socketTimeout = _React$useState32[0],
    setSocketTimeout = _React$useState32[1];
  _react["default"].useEffect(function () {
    (0, _app2.registerSocket)(_socket2["default"], _socket, setSocket, socketTimeout, pageProps, setSocketTimeout);
  }, [_socket, socketTimeout]);

  /**
   * Tracks user Route change ***Analytics***
   */
  _react["default"].useEffect(function () {
    var doHandleRouteChange = function doHandleRouteChange(route, context) {
      (0, _util.handleRouteChange)(pageProps, route, context);
    };
    router.events.on('routeChangeComplete', doHandleRouteChange);
    return function () {
      router.events.off('routeChangeComplete', doHandleRouteChange);
    };
  }, [router.events, pageProps._loggedIn, pageProps.apiUrl, pageProps.domainKey]);
  pageProps._socket = _socket;
  console.log('Socket', _socket, pageProps);
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_socket3.SocketContainer, (0, _extends2["default"])({
    _socket: _socket,
    setRooms: _setRooms
  }, pageProps)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(fetchBusy ? 'fetchNotBusy fetchBusy' : 'fetchNotBusy')
  }), /*#__PURE__*/_react["default"].createElement(_middleware.UseMiddleware, pageProps), (_pageProps11 = pageProps) !== null && _pageProps11 !== void 0 && _pageProps11.dev ? /*#__PURE__*/_react["default"].createElement(_.DeveloperHelp, pageProps) : null);
};
var _default = exports["default"] = Internal;