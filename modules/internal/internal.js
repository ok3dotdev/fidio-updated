"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CHECK_HANDLE_USER_DATA_THRESHOLD = 1800000;
var Internal = function Internal(usePageProps) {
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
  var _React$useState23 = _react["default"].useState(-1),
    _React$useState24 = _slicedToArray(_React$useState23, 2),
    lastCheckHandleUserData = _React$useState24[0],
    setLastCheckHandleUserData = _React$useState24[1];

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
              _context.next = 17;
              break;
            }
            user = _loggedIn;
            console.log(res, user);
            if (!(res.identifier && res.username && res.hash)) {
              _context.next = 17;
              break;
            }
            user.username = res.username;
            user.hash = res.hash;
            user.identifier = res.identifier;
            user.ip = res.ip;
            user.location = res.location;
            user.locationMeta = res.locationMeta;
            console.log(user);
            (0, _SignIn.updateLocalLoginSession)(user);
            _setLoggedIn(user);
            return _context.abrupt("return", true);
          case 17:
            return _context.abrupt("return", false);
          case 18:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function resolveCheckUserData(_x2, _x3) {
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
  pageProps._cart = _cart;
  pageProps._rooms = _rooms;
  pageProps._isMobile = _isMobile;
  pageProps._adminAuth = _adminAuth;
  pageProps._setAdminAuth = _setAdminAuth;
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
            console.log(e);
            (0, _app2.handleGlobalEvent)(e, pageProps, fetchBusy, setFetchBusy);
          case 2:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function (_x4) {
      return _ref3.apply(this, arguments);
    };
  }());
  var _React$useState25 = _react["default"].useState(null),
    _React$useState26 = _slicedToArray(_React$useState25, 2),
    _socket = _React$useState26[0],
    setSocket = _React$useState26[1];
  var _React$useState27 = _react["default"].useState(null),
    _React$useState28 = _slicedToArray(_React$useState27, 2),
    socketTimeout = _React$useState28[0],
    setSocketTimeout = _React$useState28[1];
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
      router.events.off('routeChangeComplete', _util.handleRouteChange);
    };
  }, [router.events, pageProps._loggedIn, pageProps.apiUrl, pageProps.domainKey]);
  console.log('Socket', _socket);
  pageProps._socket = _socket;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_socket3.SocketContainer, _extends({
    _socket: _socket,
    setRooms: _setRooms
  }, pageProps)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(fetchBusy ? 'fetchNotBusy fetchBusy' : 'fetchNotBusy')
  }), /*#__PURE__*/_react["default"].createElement(_middleware.UseMiddleware, pageProps));
};
var _default = Internal;
exports["default"] = _default;