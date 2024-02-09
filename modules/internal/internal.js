"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CHECK_HANDLE_USER_DATA_THRESHOLD = 1800000;
var Internal = function Internal(usePageProps) {
  var _pageProps11;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    appDidMount = _React$useState2[0],
    setAppDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    _loggedIn = _React$useState4[0],
    _setLoggedIn = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    _stripeSecret = _React$useState6[0],
    _setStripeSecret = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    _loginError = _React$useState8[0],
    _setLoginError = _React$useState8[1];
  var _React$useState9 = _react["default"].useState(null),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    _pageError = _React$useState10[0],
    _setPageError = _React$useState10[1];
  var _React$useState11 = _react["default"].useState({}),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    _openMenu = _React$useState12[0],
    _setOpenMenu = _React$useState12[1];
  var _React$useState13 = _react["default"].useState({}),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    _cart = _React$useState14[0],
    _setCart = _React$useState14[1];
  var _React$useState15 = _react["default"].useState(false),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    fetchBusy = _React$useState16[0],
    setFetchBusy = _React$useState16[1];
  var _React$useState17 = _react["default"].useState({}),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    _rooms = _React$useState18[0],
    _setRooms = _React$useState18[1];
  var _React$useState19 = _react["default"].useState(false),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    _isMobile = _React$useState20[0],
    _setIsMobile = _React$useState20[1];
  var _React$useState21 = _react["default"].useState(null),
    _React$useState22 = _slicedToArray(_React$useState21, 2),
    _adminAuth = _React$useState22[0],
    _setAdminAuth = _React$useState22[1];
  var _React$useState23 = _react["default"].useState(false),
    _React$useState24 = _slicedToArray(_React$useState23, 2),
    _managerOpen = _React$useState24[0],
    _setManagerOpen = _React$useState24[1];
  var _React$useState25 = _react["default"].useState(false),
    _React$useState26 = _slicedToArray(_React$useState25, 2),
    _currentlyStreaming = _React$useState26[0],
    _setCurrentlyStreaming = _React$useState26[1];
  var _React$useState27 = _react["default"].useState(-1),
    _React$useState28 = _slicedToArray(_React$useState27, 2),
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
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(pageProps, runCheckUserDataCheck) {
      var res, user;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
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
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var runCheckUserDataCheck;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
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
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
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
    _React$useState30 = _slicedToArray(_React$useState29, 2),
    _socket = _React$useState30[0],
    setSocket = _React$useState30[1];
  var _React$useState31 = _react["default"].useState(null),
    _React$useState32 = _slicedToArray(_React$useState31, 2),
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
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_socket3.SocketContainer, _extends({
    _socket: _socket,
    setRooms: _setRooms
  }, pageProps)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(fetchBusy ? 'fetchNotBusy fetchBusy' : 'fetchNotBusy')
  }), /*#__PURE__*/_react["default"].createElement(_middleware.UseMiddleware, pageProps), (_pageProps11 = pageProps) !== null && _pageProps11 !== void 0 && _pageProps11.dev ? /*#__PURE__*/_react["default"].createElement(_.DeveloperHelp, pageProps) : null);
};
var _default = exports["default"] = Internal;