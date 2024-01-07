"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _router = require("next/router");
var _SignIn = require("../../utility/onboarding/SignIn");
var _index = require("../../utility/payment/index");
var _fetch = require("../../utility/fetch");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// import RegisterUsername from './RegisterUsername.js'

var Module = function Module(props) {
  var router = (0, _router.useRouter)();
  var query = router.query,
    asPath = router.asPath;
  var googleSignIn = _react["default"].useRef();
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    didCheckAdminAuth = _React$useState4[0],
    setDidCheckAdminAuth = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    registerUsernameOn = _React$useState6[0],
    setRegisterUsernameOn = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    googleSignInRendered = _React$useState8[0],
    googleSignInRenderedSet = _React$useState8[1];
  var _React$useState9 = _react["default"].useState(false),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    hideGoogleSignIn = _React$useState10[0],
    setHideGoogleSignIn = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(null),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    pageError = _React$useState12[0],
    setPageError = _React$useState12[1];
  _react["default"].useEffect(function () {
    setComponentDidMount(true);
  }, [componentDidMount]);
  props._LocalEventEmitter.unsubscribe('showSignIn');
  props._LocalEventEmitter.subscribe('showSignIn', function (e) {
    setHideGoogleSignIn(false);
    buildButtonAndTryPrompt(500);
  });
  _react["default"].useEffect(function () {
    var muteLoginErr = function muteLoginErr() {
      setPageError(null);
    };
    document.addEventListener('mute-login-error', muteLoginErr, {
      once: true
    });
  }, []);
  var buildLoginAndUpdate = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
      var status;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _SignIn.attemptThirdPartySignIn)(data, props.apiUrl, props.domainKey);
          case 2:
            status = _context.sent;
            if (status && status.hasOwnProperty('username')) {
              if (!status.username) {
                setRegisterUsernameOn(true);
              }
            }
            console.log(status);
            (0, _index.setStripeSecretData)(props.apiUrl, props.domainKey, status, props._setStripeSecret);
            props._setLoggedIn(status);
            console.log(props.redirectOnAuth, status.username);
            if (props.redirectOnAuth && status.username && asPath !== props.redirectOnAuth) {
              router.push(props.redirectOnAuth);
            }
            setTimeout(function () {
              setPageError(null);
            }, 20000);
            setTimeout(function () {
              setHideGoogleSignIn(true);
            });
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function buildLoginAndUpdate(_x2) {
      return _ref.apply(this, arguments);
    };
  }();
  console.log(props, query, asPath, router);
  var buildButtonAndTryPrompt = function buildButtonAndTryPrompt(delay) {
    try {
      var googleBtn = {
        theme: 'outline',
        size: 'medium',
        logo_alignment: 'center'
      };
      setTimeout(function () {
        try {
          var signInStatus = (0, _SignIn.checkSignedIn)();
          if (!signInStatus) {
            google.accounts.id.renderButton(googleSignIn.current, googleBtn);
            googleSignInRenderedSet(true);
            google.accounts.id.prompt(function (notification) {
              console.log('on prompt notification', notification);
            });
          } else {
            props._setLoggedIn(signInStatus);
          }
        } catch (err) {
          setTimeout(function () {
            try {
              var _signInStatus = (0, _SignIn.checkSignedIn)();
              if (!_signInStatus) {
                // @ts-ignore
                google.accounts.id.renderButton(googleSignIn.current, googleBtn);
                googleSignInRenderedSet(true);
                // @ts-ignore
                google.accounts.id.prompt(function (notification) {
                  console.log('on prompt notification', notification);
                });
              } else {
                props._setLoggedIn(_signInStatus);
              }
            } catch (err) {
              console.log(err); // fail silently
            }
          }, 10000);
        }
      }, delay);
    } catch (err) {
      console.log(err); // fail silently
    }
  };

  // Register google sign in button. Necessary for register CC and login
  _react["default"].useEffect(function () {
    document.addEventListener('thirdparty-signin', buildLoginAndUpdate);
    buildButtonAndTryPrompt(500);
  }, []);
  var getAdminAuth = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(uri, identifier, hash, domainKey) {
      var res;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!identifier) {
              _context2.next = 20;
              break;
            }
            _context2.next = 3;
            return (0, _fetch.fetchPost)(uri + '/m/checkadminauth', null, null, {
              identifier: identifier,
              hash: hash,
              domainKey: domainKey
            });
          case 3:
            res = _context2.sent;
            if (res) {
              _context2.next = 8;
              break;
            }
            return _context2.abrupt("return", false);
          case 8:
            if (!res.hasOwnProperty('status')) {
              _context2.next = 20;
              break;
            }
            if (!(res.status == "disauthenticated")) {
              _context2.next = 14;
              break;
            }
            logout();
            return _context2.abrupt("return", "disauthenticated");
          case 14:
            if (!(res.status == "failed")) {
              _context2.next = 18;
              break;
            }
            return _context2.abrupt("return", false);
          case 18:
            if (!(res.status == "success")) {
              _context2.next = 20;
              break;
            }
            return _context2.abrupt("return", res);
          case 20:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function getAdminAuth(_x3, _x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Handles check to see if user is admin
   * @param {*} force 
   */
  var handleGetAdminAuth = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(force) {
      var _props$_loggedIn, _props$_loggedIn2, res;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!(props !== null && props !== void 0 && props.path.match(/\/admin/) && !didCheckAdminAuth || force)) {
              _context3.next = 7;
              break;
            }
            if (!(props !== null && props !== void 0 && (_props$_loggedIn = props._loggedIn) !== null && _props$_loggedIn !== void 0 && _props$_loggedIn.identifier && props !== null && props !== void 0 && (_props$_loggedIn2 = props._loggedIn) !== null && _props$_loggedIn2 !== void 0 && _props$_loggedIn2.hash && props !== null && props !== void 0 && props.domainKey && !props._adminAuth && props !== null && props !== void 0 && props._setAdminAuth)) {
              _context3.next = 7;
              break;
            }
            setDidCheckAdminAuth(true);
            _context3.next = 5;
            return getAdminAuth(props.apiUrl, props._loggedIn.identifier, props._loggedIn.hash, props.domainKey);
          case 5:
            res = _context3.sent;
            if (res !== null && res !== void 0 && res.admin) {
              props._setAdminAuth(res.admin);
            }
          case 7:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function handleGetAdminAuth(_x7) {
      return _ref3.apply(this, arguments);
    };
  }();
  _react["default"].useEffect(function () {
    var _props$_loggedIn3, _props$_adminAuth;
    if (props !== null && props !== void 0 && (_props$_loggedIn3 = props._loggedIn) !== null && _props$_loggedIn3 !== void 0 && _props$_loggedIn3.identifier && props !== null && props !== void 0 && (_props$_adminAuth = props._adminAuth) !== null && _props$_adminAuth !== void 0 && _props$_adminAuth.userid && props._loggedIn.identifier !== props._adminAuth.userid) {
      props._setAdminAuth(null);
    }
  }, [props._loggedIn, props._adminAuth]);
  handleGetAdminAuth();
  var checkGoogleSignInIsLoaded = function checkGoogleSignInIsLoaded() {
    try {
      var container = document.getElementsByClassName('google-sign-in-btn');
      if (container && container[0]) {
        if (container[0].children.length > 0) {
          if (container[0].children[0]) {
            console.log(container[0].children[0]);
            return true;
          }
        }
      }
      return false;
    } catch (err) {
      // fail silently
      return false;
    }
  };
  var googleSignInIsLoaded = checkGoogleSignInIsLoaded();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.classNameAlways, " ").concat(props._loggedIn || !googleSignInIsLoaded ? '' : props.className)
  }, " ", /*#__PURE__*/_react["default"].createElement("div", {
    className: hideGoogleSignIn || !googleSignInIsLoaded ? "display-none" : null,
    style: {
      maxWidth: '170px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: googleSignInRendered ? "googleSignInContainer googleSignInContainer-padding" : "googleSignInContainer"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g_id_signin google-sign-in-btn",
    ref: googleSignIn,
    "data-size": "medium",
    "data-logo_alignment": "center",
    "data-theme": "outline"
  }))), pageError ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      paddingLeft: 1 + 'rem',
      paddingRight: 1 + 'rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "googleSignInPromptSmall error errorBg"
  }, pageError)) : null);
};
var _default = Module;
exports["default"] = _default;