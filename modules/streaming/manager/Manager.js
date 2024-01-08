"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _router = require("next/router");
var _streaming = require("../../utility/streaming");
var _SignIn = require("../../utility/onboarding/SignIn");
var _ecommerce = require("../../utility/ecommerce");
var _uuid = require("uuid");
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _ManagerModule = _interopRequireDefault(require("./Manager.module.scss"));
var _material = require("@mui/material");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Module = function Module(props) {
  var _React$useState = _react["default"].useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    pageError = _React$useState2[0],
    setPageError = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    componentDidMount = _React$useState4[0],
    setComponentDidMount = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(null),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    componentId = _React$useState6[0],
    setComponentId = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    didCheckStream = _React$useState8[0],
    setDidCheckStream = _React$useState8[1];
  var _React$useState9 = _react["default"].useState(false),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    currentlyStreaming = _React$useState10[0],
    setCurrentlyStreaming = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(null),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    streamKey = _React$useState12[0],
    setStreamKey = _React$useState12[1];
  var _React$useState13 = _react["default"].useState(null),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    streamTo = _React$useState14[0],
    setStreamTo = _React$useState14[1];
  var _React$useState15 = _react["default"].useState(false),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    fetchBusy = _React$useState16[0],
    setFetchBusy = _React$useState16[1];
  var _React$useState17 = _react["default"].useState('stream'),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    openMenu = _React$useState18[0],
    setOpenMenu = _React$useState18[1];
  var _React$useState19 = _react["default"].useState({}),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    creatingShop = _React$useState20[0],
    setCreatingShop = _React$useState20[1];
  var _React$useState21 = _react["default"].useState({
      password: null,
      "private": false,
      dates: [],
      tags: [],
      input: ''
    }),
    _React$useState22 = _slicedToArray(_React$useState21, 2),
    streamSettings = _React$useState22[0],
    setStreamSettings = _React$useState22[1];
  var _React$useState23 = _react["default"].useState(false),
    _React$useState24 = _slicedToArray(_React$useState23, 2),
    askEndStream = _React$useState24[0],
    setAskEndStream = _React$useState24[1];
  var _React$useState25 = _react["default"].useState(false),
    _React$useState26 = _slicedToArray(_React$useState25, 2),
    updatingStreamConfig = _React$useState26[0],
    setUpdatingStreamConfig = _React$useState26[1];
  var fetchTimeoutRef = _react["default"].useRef();
  var proposedShopName = _react["default"].useRef();
  var proposedShopDesc = _react["default"].useRef();
  var privateRef = _react["default"].useRef();
  var privateRef2 = _react["default"].useRef();
  var passwordRef = _react["default"].useRef();
  var passwordRef2 = _react["default"].useRef();
  var titleRef = _react["default"].useRef();
  var descriptionRef = _react["default"].useRef();
  var myTagsRef = _react["default"].useRef();
  if (componentId) {
    props._LocalEventEmitter.unsubscribe(componentId);
    props._LocalEventEmitter.subscribe(componentId, function (d) {
      if (d && d.dispatch) {
        if (d.dispatch === 'paintStreamData') {
          setStreamData(currentlyStreaming);
        }
      }
    });
  }
  var router = (0, _router.useRouter)();
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      var id = (0, _uuid.v4)();
      setComponentId(id);
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  _react["default"].useEffect(function () {
    if (props._loggedIn && props._loggedIn.username && !didCheckStream) {
      setDidCheckStream(true);
      checkStream(true);
    }
  }, [props._loggedIn, didCheckStream]);
  var checkStream = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var dontForce,
        data,
        res,
        d,
        _args = arguments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            dontForce = _args.length > 0 && _args[0] !== undefined ? _args[0] : false;
            _context.prev = 1;
            if (fetchBusy) {
              _context.next = 19;
              break;
            }
            setFetchBusy(true);
            fetchTimeoutRef.current = setTimeout(function () {
              setFetchBusy(false);
            }, 10000);
            data = {
              stripeSecret: props._stripeSecret,
              dontForce: dontForce,
              streamSettings: streamSettings
            };
            _context.next = 8;
            return (0, _streaming.beginStream)(props.apiUrl, props.domainKey, data, _SignIn.checkSignedIn);
          case 8:
            res = _context.sent;
            if (fetchTimeoutRef.current) {
              clearTimeout(fetchTimeoutRef.current);
            }
            if (res) {
              _context.next = 18;
              break;
            }
            if (!dontForce) {
              _context.next = 14;
              break;
            }
            setFetchBusy(false);
            return _context.abrupt("return");
          case 14:
            props._setPageError("Failed to save begin stream");
            setFetchBusy(false);
            _context.next = 19;
            break;
          case 18:
            if (res == "disauthenticated") {
              props._setLoggedIn(false);
              props._setStripeSecret(false);
              setFetchBusy(false);
              (0, _SignIn.logout)();
            } else if (res.status == 'success') {
              // On successfull credit card received, purchase phone number and then update locally
              setFetchBusy(false);
              console.log('check stream', res);
              if (res.data && res.data.status == 'streaming' && res.data.stream) {
                setCurrentlyStreaming(res.data.stream);
                setStreamData(res.data.stream);
                if (res.data.key) {
                  setStreamKey(res.data.key);
                }
                if (res.data.streamTo) {
                  setStreamTo(res.data.streamTo);
                }
                if (res.data.stream.meta && res.data.stream.meta.streamSettings) {
                  d = res.data.stream.meta.streamSettings;
                  setStreamSettings(d);
                }
                if (props._LocalEventEmitter) {
                  props._LocalEventEmitter.dispatch('refetchDefaults', {
                    dispatch: 'simple'
                  });
                }
              }
            }
          case 19:
            _context.next = 25;
            break;
          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](1);
            if (fetchTimeoutRef.current) {
              clearTimeout(fetchTimeoutRef.current);
            }
            setFetchBusy(false);
          case 25:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 21]]);
    }));
    return function checkStream() {
      return _ref.apply(this, arguments);
    };
  }();
  var setStreamData = function setStreamData(stream) {
    try {
      if (stream) {
        titleRef.current.value = stream.title;
        descriptionRef.current.value = stream.description;
        myTagsRef.current.value = stream.tags;
      }
    } catch (err) {
      // fail silently
    }
  };
  var updateStreamConfig = _react["default"].useCallback(function (e) {
    updateStreamConfigFn();
  });
  var updateStreamConfigFn = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var streamData, data, res, d;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            if (fetchBusy) {
              _context2.next = 12;
              break;
            }
            setFetchBusy(true);
            setUpdatingStreamConfig(true);
            fetchTimeoutRef.current = setTimeout(function () {
              setFetchBusy(false);
              setUpdatingStreamConfig(false);
            }, 10000);
            streamData = {
              title: titleRef.current && titleRef.current.value ? titleRef.current.value : null,
              description: descriptionRef.current && descriptionRef.current.value ? descriptionRef.current.value : null,
              tags: myTagsRef.current && myTagsRef.current.value ? myTagsRef.current.value : null
            };
            data = {
              stream: currentlyStreaming.id,
              streamData: streamData,
              streamSettings: streamSettings
            };
            _context2.next = 9;
            return (0, _streaming.updateStreamConfigRequest)(props.apiUrl, props.domainKey, data, _SignIn.checkSignedIn);
          case 9:
            res = _context2.sent;
            if (fetchTimeoutRef.current) {
              clearTimeout(fetchTimeoutRef.current);
            }
            if (!res) {
              props._setPageError("Failed to save begin stream");
              setFetchBusy(false);
              setUpdatingStreamConfig(false);
            } else if (res == "disauthenticated") {
              props._setLoggedIn(false);
              props._setStripeSecret(false);
              setFetchBusy(false);
              setUpdatingStreamConfig(false);
              (0, _SignIn.logout)();
            } else if (res.status == 'success') {
              // On successfull credit card received, purchase phone number and then update locally
              console.log('check stream', res);
              setFetchBusy(false);
              setUpdatingStreamConfig(false);
              if (res.data && res.data.status == 'streaming') {
                setCurrentlyStreaming(res.data.stream);
                if (res.data.key) {
                  setStreamKey(res.data.key);
                }
                if (res.data.streamTo) {
                  setStreamTo(res.data.streamTo);
                }
                if (res.data.stream) {
                  if (res.data.stream.meta && res.data.stream.meta.streamSettings) {
                    d = res.data.stream.meta.streamSettings;
                    setStreamSettings(d);
                  }
                }
              }
            }
          case 12:
            _context2.next = 20;
            break;
          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            if (fetchTimeoutRef.current) {
              clearTimeout(fetchTimeoutRef.current);
            }
            setFetchBusy(false);
            setUpdatingStreamConfig(false);
          case 20:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 14]]);
    }));
    return function updateStreamConfigFn() {
      return _ref2.apply(this, arguments);
    };
  }();
  var beginStreaming = _react["default"].useCallback(function (e) {
    checkStream();
  });
  var handleSetAdminMenu = _react["default"].useCallback(function (e) {
    try {
      if (e.target.getAttribute('menu')) {
        var menu = e.target.getAttribute('menu');
        setOpenMenu(menu);
      }
    } catch (err) {
      // fail silently
    }
  });
  _react["default"].useEffect(function () {
    if (streamSettings) {
      resolveState(streamSettings);
      props._LocalEventEmitter.dispatch(componentId, {
        dispatch: 'paintStreamData'
      });
    }
  }, [componentId, props._LocalEventEmitter, props.adminPanelState, streamSettings]);
  var resolveState = function resolveState(d) {
    var useSettings = d ? d : streamSettings;
    privateRef.current ? privateRef.current.checked = useSettings["private"] : null;
    privateRef2.current ? privateRef2.current.checked = useSettings["private"] : null;
    passwordRef.current ? passwordRef.current.value = useSettings.password : null;
    passwordRef2.current ? passwordRef2.current.value = useSettings.password : null;
    console.log(streamSettings);
  };
  console.log(props, streamSettings);
  var handleCreateShop = _react["default"].useCallback( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e) {
      var phase, res;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            setPageError(null);
            if (!e.target.getAttribute('phase')) {
              _context3.next = 19;
              break;
            }
            phase = e.target.getAttribute('phase');
            if (!(phase == '1')) {
              _context3.next = 8;
              break;
            }
            setCreatingShop({
              status: 'start'
            });
            _context3.next = 19;
            break;
          case 8:
            if (!(phase == 'end')) {
              _context3.next = 19;
              break;
            }
            console.log('Run request create shop', proposedShopName.current);
            setFetchBusy(true);
            if (!(proposedShopName.current && proposedShopName.current.value)) {
              _context3.next = 18;
              break;
            }
            _context3.next = 14;
            return (0, _ecommerce.createShop)(props.apiUrl, props.domainKey, props._loggedIn, {
              shopName: proposedShopName.current.value,
              shopDescription: proposedShopDesc.current.value
            });
          case 14:
            res = _context3.sent;
            if (res) {
              console.log(res);
              router.reload(window.location.pathname);
            } else {
              setPageError({
                message: 'Shop creation submission failed',
                placement: 'openshop'
              });
            }
            _context3.next = 19;
            break;
          case 18:
            setPageError({
              message: 'Please fill out a Shop Name',
              placement: 'description'
            });
          case 19:
            _context3.next = 24;
            break;
          case 21:
            _context3.prev = 21;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0); // fail silently
          case 24:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 21]]);
    }));
    return function (_x2) {
      return _ref3.apply(this, arguments);
    };
  }());
  var handleClearError = _react["default"].useCallback(function (e) {
    setPageError(null);
  });
  var updateTags = _react["default"].useCallback(function (e) {
    var temp = _objectSpread({}, streamSettings);
    var values = e.currentTarget.value.split(' ');
    var dates = [];
    var tags = [];
    values.map(function (v) {
      if (!isNaN(new Date(v))) {
        dates.push(new Date(v));
      } else {
        tags.push(v);
      }
    });
    temp.dates = dates;
    temp.tags = tags;
    setStreamSettings(temp);
  });
  var setPrivate = _react["default"].useCallback(function (e) {
    var temp = _objectSpread({}, streamSettings);
    temp["private"] = e.currentTarget.checked;
    setStreamSettings(temp);
  });
  var setPassword = _react["default"].useCallback(function (e) {
    var temp = _objectSpread({}, streamSettings);
    temp.password = e.currentTarget.value;
    setStreamSettings(temp);
  });
  var handleAskEndStream = _react["default"].useCallback(function (e) {
    if (e.currentTarget.getAttribute('modif')) {
      var m = e.currentTarget.getAttribute('modif');
      if (m == 'yes') {
        // end stream
        try {
          var f = /*#__PURE__*/function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var data, res;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    console.log('end st', fetchBusy);
                    if (fetchBusy) {
                      _context4.next = 10;
                      break;
                    }
                    setFetchBusy(true);
                    fetchTimeoutRef.current = setTimeout(function () {
                      setFetchBusy(false);
                    }, 10000);
                    data = {
                      stream: currentlyStreaming.id
                    };
                    _context4.next = 7;
                    return (0, _streaming.endStream)(props.apiUrl, props.domainKey, data, _SignIn.checkSignedIn);
                  case 7:
                    res = _context4.sent;
                    if (fetchTimeoutRef.current) {
                      clearTimeout(fetchTimeoutRef.current);
                    }
                    if (!res) {
                      setAskEndStream(false);
                      props._setPageError("Failed to end stream");
                      setFetchBusy(false);
                    } else if (res == "disauthenticated") {
                      setAskEndStream(false);
                      props._setLoggedIn(false);
                      props._setStripeSecret(false);
                      setFetchBusy(false);
                      (0, _SignIn.logout)();
                    } else if (res.status == 'success') {
                      setAskEndStream(false);
                      // On successfull credit card received, purchase phone number and then update locally
                      setFetchBusy(false);
                      setCurrentlyStreaming(false);
                      setStreamKey(null);
                      setStreamTo(null);
                      setStreamSettings({
                        password: null,
                        "private": false,
                        dates: [],
                        tags: [],
                        input: ''
                      });
                      if (props._LocalEventEmitter) {
                        props._LocalEventEmitter.dispatch('refetchDefaults', {
                          dispatch: 'simple'
                        });
                      }
                    }
                  case 10:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4);
            }));
            return function f() {
              return _ref4.apply(this, arguments);
            };
          }();
          f();
        } catch (err) {
          setAskEndStream(false);
          if (fetchTimeoutRef.current) {
            clearTimeout(fetchTimeoutRef.current);
          }
          setFetchBusy(false);
        }
      } else {
        setAskEndStream(false);
      }
    } else if (!askEndStream) {
      setAskEndStream(true);
    }
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className)
  }, pageError && pageError.message && !pageError.placement ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "error",
    style: {
      margin: '.25rem',
      marginBottom: '0'
    },
    onClick: handleClearError
  }, pageError.message) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ManagerModule["default"].itemsContainer, " Manager_Items"),
    style: {
      padding: '.5rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "".concat(openMenu == 'stream' ? _ManagerModule["default"].activeItem : '', " ").concat(_ManagerModule["default"].item),
    onClick: handleSetAdminMenu,
    menu: "stream"
  }, "Stream"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "".concat(openMenu == 'shop' ? _ManagerModule["default"].activeItem : '', " ").concat(_ManagerModule["default"].item),
    onClick: handleSetAdminMenu,
    menu: "shop"
  }, "Shop")), openMenu === 'stream' ? props._loggedIn && props._loggedIn.username ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p5",
    style: {
      padding: '.25rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: '90px',
      maxWidth: '300px'
    }
  }, !currentlyStreaming ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem',
      paddingTop: '0',
      paddingBottom: '.125rem',
      textAlign: 'center'
    }
  }, "Stream on ", props.siteTitle, " Now"), !fetchBusy ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      alignItems: 'center',
      marginBottom: '.125rem',
      height: 'inherit'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "simpleBtn",
    onClick: beginStreaming,
    style: {
      padding: '.125rem 2rem',
      fontSize: '1.5rem',
      paddingTop: '.125rem',
      width: '-webkit-fill-available',
      height: '75px'
    }
  }, "Begin Stream"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      background: 'black',
      padding: '0 .25rem',
      borderRadius: '.25rem',
      marginTop: '.25rem',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("label", {
    style: {
      fontSize: '.8rem'
    }
  }, "Private"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    onChange: setPrivate,
    ref: privateRef
  })), streamSettings["private"] ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("label", {
    style: {
      fontSize: '.8rem'
    }
  }, "Password"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    onChange: setPassword,
    style: {
      maxWidth: '100px',
      maxHeight: '16px',
      fontSize: '.85rem',
      marginLeft: '.25rem',
      borderRadius: '.25rem'
    },
    ref: passwordRef
  })) : null)) : /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.85rem'
    }
  }, "Please wait...")) : /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "importantPrompt"
  }, "Now Streaming ", /*#__PURE__*/_react["default"].createElement("div", {
    className: "RecordingCircle RecordingCircle_Small"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.85rem',
      overflowWrap: 'anywhere'
    }
  }, /*#__PURE__*/_react["default"].createElement("b", null, "Share your stream link:"), " ", /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      background: 'black',
      padding: '0 .125rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "".concat(props.devLocal ? props.devAddress : 'https://' + props.domainUrl, "/w?u=").concat(props._loggedIn.username)
  }, "".concat(props.devLocal ? props.devAddress : props.domainUrl, "/w?u=").concat(props._loggedIn.username)))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.85rem',
      fontWeight: 600,
      color: '#94ff94',
      overflowWrap: 'anywhere'
    }
  }, "Stream Endpoint: ", /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontWeight: 400,
      background: 'black',
      padding: '0 .125rem'
    }
  }, streamTo)), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.85rem',
      fontWeight: 600,
      color: '#ff81ca',
      overflowWrap: 'anywhere'
    }
  }, "Private Stream Key: ", /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontWeight: 400,
      background: 'black',
      padding: '0 .125rem'
    }
  }, streamKey)))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      paddingBottom: '.25rem',
      width: '250px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    modif: 'title',
    ref: titleRef,
    placeholder: "Title",
    style: {
      width: '100%'
    }
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("textarea", {
    modif: 'description',
    ref: descriptionRef,
    placeholder: "Description",
    style: {
      maxWidth: '100%',
      marginTop: '.25rem',
      width: '100%',
      height: '90px'
    }
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    modif: 'tags',
    ref: myTagsRef,
    placeholder: "Tags",
    style: {
      width: '100%'
    }
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      paddingBottom: '.25rem',
      maxWidth: '250px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem',
      marginBottom: '.125rem',
      marginTop: '.125rem'
    }
  }, "Create your own Auth Tags to provide authorization to watch the stream for any tickets with matching tags"), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Enter dates in the following format MON-DD-YYYY or they will not be parsed as dates. Values that do not match dates will be parsed as tags that can be added to livestreams. Any matches will authorize viewership of tickets with matching tags for the stream",
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    },
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    style: {
      marginBottom: '.125rem',
      width: '-webkit-fill-available'
    },
    placeholder: "Date in DD/MM/YY format or a Tag",
    onInput: updateTags,
    option: "livestreamDef",
    defaultValue: streamSettings.input
  })), streamSettings.dates.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "tagContainer",
    style: {
      marginTop: '.25rem'
    }
  }, streamSettings.dates.map(function (d, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "tagItem",
      key: i
    }, d && d.toLocaleString ? d.toLocaleString("en-US", {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    }) : '');
  })) : /*#__PURE__*/_react["default"].createElement("div", null), streamSettings.tags.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "tagContainer",
    style: {
      marginTop: '.25rem'
    }
  }, streamSettings.tags.map(function (d, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "tagItem",
      key: i
    }, d);
  })) : /*#__PURE__*/_react["default"].createElement("div", null), currentlyStreaming ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      background: 'black',
      padding: '0 .25rem',
      borderRadius: '.25rem',
      marginTop: '.25rem',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("label", {
    style: {
      fontSize: '.8rem'
    }
  }, "Private"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    onChange: setPrivate,
    ref: privateRef2
  })), streamSettings && streamSettings["private"] ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("label", {
    style: {
      fontSize: '.8rem'
    }
  }, "Password"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    onChange: setPassword,
    style: {
      maxWidth: '100px',
      maxHeight: '16px',
      fontSize: '.85rem',
      marginLeft: '.25rem',
      borderRadius: '.25rem'
    },
    ref: passwordRef2
  })) : null) : null, currentlyStreaming ? !askEndStream ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !updatingStreamConfig ? /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      width: '100%',
      marginTop: '.25rem',
      lineHeight: '12.5px',
      fontSize: '.8rem'
    },
    onClick: updateStreamConfig
  }, "Update") : /*#__PURE__*/_react["default"].createElement(_material.LinearProgress, {
    color: "inherit",
    style: {
      height: '18.25px',
      marginTop: '.25rem'
    }
  }), /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      width: '100%',
      marginTop: '.25rem',
      lineHeight: '12.5px',
      fontSize: '.8rem'
    },
    onClick: handleAskEndStream
  }, "Terminate Stream")) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontWeight: 600,
      textAlign: 'center',
      marginTop: '.42rem'
    }
  }, "Terminate the Stream?"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      width: '100%',
      marginTop: '.25rem',
      lineHeight: '12.5px',
      fontSize: '.8rem'
    },
    onClick: handleAskEndStream,
    modif: "yes"
  }, "Yes"), /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      width: '100%',
      marginTop: '.25rem',
      lineHeight: '12.5px',
      fontSize: '.8rem'
    },
    onClick: handleAskEndStream,
    modif: "no"
  }, "No"))) : null))) : /*#__PURE__*/_react["default"].createElement("div", null, props._loggedIn ? !props._loggedIn.username ? 'Please register Username to begin streaming' : 'Please login to begin streaming' : null) : openMenu === 'shop' ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: '.25rem'
    }
  }, props.shopProfileData && props.shopProfileData.shop && props.shopProfileData.shop.status && props.shopProfileData.shop.status == 'nonexistent' ? /*#__PURE__*/_react["default"].createElement("div", null, !creatingShop.status ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '.25rem',
      paddingTop: '.25rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.85rem'
    }
  }, "You do not currently own a shop. Would you like to request to open one?"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleCreateShop,
    phase: "1"
  }, "Start Creating Shop"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.85rem'
    }
  }, "A shop allows for you to sell products on ", props.siteTitle, " with ease to all customers, fans, collectors, enthusiasts and passerbys utilizing all the tools offered on the platform. You will be able to track pending orders that have yet to be completed, products in carts, your personal inventory, sales and much more as well as sell products in such a way that makes it easier for your customers.")) : creatingShop.status && creatingShop.status == 'start' ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '.25rem',
      paddingTop: '.25rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.85rem'
    }
  }, "Name your Shop"), /*#__PURE__*/_react["default"].createElement("input", {
    ref: proposedShopName,
    type: "text",
    placeholder: "Shop Name",
    className: "simpleTextInput"
  }), /*#__PURE__*/_react["default"].createElement("textarea", {
    rows: "5",
    style: {
      height: 'auto',
      resize: 'none'
    },
    ref: proposedShopDesc,
    type: "text",
    placeholder: "You can describe your Shop here. You might put a company slogan, introduce your business, describe the products you sell or nothing at all. It is up to you and your stakeholders.",
    className: "simpleTextInput"
  }), pageError && pageError.message && pageError.placement == 'description' ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "error",
    onClick: handleClearError
  }, pageError.message) : null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.75rem',
      background: 'black',
      padding: '.125rem'
    }
  }, "When creating your shop, you must set up your vendor account. Please have your banking details ready for direct deposit setup. If you don't have banking details prepared at the moment, you can always set them up later. Once your shop is created, you can start creating products and showcasing them to the public. For all physical products, it is your responsibility to ensure that you have sufficient inventory available for direct-to-consumer sales through the platform. If any products offered for sale are out of stock, any payments received must be fully refunded to customers without exceptions. As a shop owner, you will be subject to platform fees, which will be deducted from your total revenues on the platform. ", props.siteTitle, " reserves the right to close any shop that is suspected of operating in a manner that jeopardizes the quality of service and integrity of the platform. All transactions on ", props.siteTitle, " are handled using Tycoon Systems Ecommerce Services. Any disputes on ", props.siteTitle, " are settled by the ", props.siteTitle, " platform. By submitting a request to open your shop below, you agree to the above terms and conditions."), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleCreateShop,
    phase: "end"
  }, "Open Shop"), pageError && pageError.message && pageError.placement == 'openshop' ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "error",
    onClick: handleClearError
  }, pageError.message) : null) : null) : props.shopProfileData && props.shopProfileData.shop && props.shopProfileData.shop.name ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.85rem'
    }
  }, props.shopProfileData.shop.name)) : null) : null));
};
var _default = Module;
exports["default"] = _default;