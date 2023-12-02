"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _image = _interopRequireDefault(require("next/image"));
var _link = _interopRequireDefault(require("next/link"));
var _FeatureModule = _interopRequireDefault(require("./Feature.module.scss"));
var _router = require("next/router");
var _util = require("../../util");
var _search = require("../../utility/search");
var _uuid = require("uuid");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var isOverflown = function isOverflown(clientWidth, clientHeight, scrollWidth, scrollHeight) {
  console.log(clientWidth, clientHeight, scrollWidth, scrollHeight);
  return scrollHeight > clientHeight || scrollWidth > clientWidth;
};
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
    fetchBusy = _React$useState8[0],
    setFetchBusy = _React$useState8[1];
  var _React$useState9 = _react["default"].useState([]),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    feed = _React$useState10[0],
    setFeed = _React$useState10[1];
  var _React$useState11 = _react["default"].useState([]),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    combinedFeed = _React$useState12[0],
    setCombinedFeed = _React$useState12[1];
  var _React$useState13 = _react["default"].useState({}),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    featureData = _React$useState14[0],
    setFeatureData = _React$useState14[1];
  var _React$useState15 = _react["default"].useState({
      size: 'thin'
    }),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    featureState = _React$useState16[0],
    setFeatureState = _React$useState16[1];
  var _React$useState17 = _react["default"].useState(false),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    stagger = _React$useState18[0],
    setStagger = _React$useState18[1];
  var _React$useState19 = _react["default"].useState(null),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    checkContainerOverflownTime = _React$useState20[0],
    setCheckContainerOverflownTime = _React$useState20[1];
  var _React$useState21 = _react["default"].useState(null),
    _React$useState22 = _slicedToArray(_React$useState21, 2),
    containerOverflownInterval = _React$useState22[0],
    setContainerOverflownInterval = _React$useState22[1];
  var _React$useState23 = _react["default"].useState(false),
    _React$useState24 = _slicedToArray(_React$useState23, 2),
    useOverflown = _React$useState24[0],
    setUseOverflown = _React$useState24[1];
  var router = (0, _router.useRouter)();
  var staggerRef = _react["default"].useRef();
  var featureContainerRef = _react["default"].useRef();
  if (componentId) {
    props._LocalEventEmitter.unsubscribe(componentId);
    props._LocalEventEmitter.subscribe(componentId, function (d) {
      if (d && d.dispatch) {
        if (d.dispatch === 'checkContainerOverflown') {
          checkFeatureContainerOverflown();
        }
      }
    });
  }
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      setComponentDidMount(new Date().getTime());
      if (props.stagger) {
        staggerRef.current = setTimeout(function () {
          setStagger(true);
        }, props.stagger);
      } else {
        setStagger(true);
      }
      var id = (0, _uuid.v4)();
      setComponentId(id);
    }
  }, [componentDidMount, props.stagger]);
  _react["default"].useEffect(function () {
    if (componentId && props._LocalEventEmitter && !containerOverflownInterval) {
      var r = setInterval(function () {
        props._LocalEventEmitter.dispatch(componentId, {
          dispatch: 'checkContainerOverflown'
        });
      }, 5000);
      setContainerOverflownInterval(r);
    }
  }, [props._LocalEventEmitter, componentId, containerOverflownInterval]);
  _react["default"].useEffect(function () {
    if (stagger) {
      if (props.defaultSize) {
        var temp = _objectSpread({}, featureState);
        temp.size = props.defaultSize;
        setFeatureState(temp);
      }
    }
  }, [stagger]);
  var cycleFeatureSize = _react["default"].useCallback(function (e) {
    if (featureState) {
      var temp = _objectSpread({}, featureState);
      if (temp.size === 'thin') {
        temp.size = props.defaultSize !== 'thin' ? props.defaultSize : 'medium';
      } else if (temp.size === 'medium') {
        temp.size = props.defaultSize !== 'medium' ? props.defaultSize : 'thin';
      } else if (temp.size === 'large') {
        temp.size = props.defaultSize !== 'large' ? props.defaultSize : 'thin';
      }
      setFeatureState(temp);
    }
  });
  _react["default"].useEffect(function () {
    var f = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var selector, useData, _props$s, args, res;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              selector = props.featureData ? 'featureData' : 'noSelection';
              useData = (0, _util.isObjectEmpty)(featureData) ? props[selector] : featureData;
              if (!(useData && !fetchBusy)) {
                _context.next = 13;
                break;
              }
              console.log('Use Data!', useData);
              if (!(!useData.user && props._loggedIn && props._loggedIn.identifier)) {
                _context.next = 12;
                break;
              }
              args = {
                identifier: props._loggedIn.identifier,
                hash: props._loggedIn.hash,
                domainKey: props.domainKey,
                params: {
                  u: props._loggedIn.identifier,
                  s: (_props$s = props.s) !== null && _props$s !== void 0 ? _props$s : ''
                }
              };
              _context.next = 8;
              return (0, _search.fetchSearchData)(props.apiUrl, ['featureData'], args);
            case 8:
              res = _context.sent;
              if (res) {
                if (res && res.data && res.data[selector]) {
                  setFeatureData(res.data[selector]);
                }
              }
              _context.next = 13;
              break;
            case 12:
              setFeatureData(props[selector]);
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function f() {
        return _ref.apply(this, arguments);
      };
    }();
    f();
  }, [props.featureData, feed, fetchBusy, combinedFeed, props._loggedIn, props.domainKey]);
  _react["default"].useEffect(function () {
    var f = featureData.data && Array.isArray(featureData.data) ? featureData.data.concat(feed) : [];
    var update = false;
    for (var i = 0; i < combinedFeed.length; i++) {
      if (!(0, _util.compareObjects)(combinedFeed, f)) {
        update = true;
        break;
      }
    }
    if (combinedFeed.length === 0 && f.length !== 0) {
      setCombinedFeed(f);
    }
  }, [featureData]);
  var myLoader = function myLoader(_ref2) {
    var src = _ref2.src;
    if (src.match(/greythumb/)) {
      return "".concat(src);
    } else if (props.cdn && props.cdn["static"] && props.cdn["static"].length > 0) {
      return "".concat(props.cdn["static"], "/").concat(src);
    }
  };
  var checkFeatureContainerOverflown = function checkFeatureContainerOverflown() {
    if (!checkContainerOverflownTime || checkContainerOverflownTime && checkContainerOverflownTime < new Date().getTime() - 5000) {
      if (featureContainerRef.current) {
        setCheckContainerOverflownTime(new Date().getTime());
        var clientWidth = featureContainerRef.current.clientWidth;
        var clientHeight = featureContainerRef.current.clientHeight;
        var scrollWidth = featureContainerRef.current.scrollWidth;
        var scrollHeight = featureContainerRef.current.scrollHeight;
        var overflown = isOverflown(clientWidth, clientHeight, scrollWidth, scrollHeight);
        if (overflown) {
          setUseOverflown(overflown);
          return overflown;
        }
      }
      return false;
    }
  };
  console.log(combinedFeed);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_FeatureModule["default"].featureExternalContainer, " ").concat(combinedFeed.length > 0 ? featureState.size === 'thin' ? "FeatureContainerOpen" : featureState.size === 'medium' ? "FeatureContainerOpen ".concat(_FeatureModule["default"].featureContainerOpen, " FeatureContainerOpenMedium") : featureState.size === 'large' ? "FeatureContainerOpen ".concat(_FeatureModule["default"].featureContainerOpen, " FeatureContainerOpenLarge") : '' : '', " ").concat(props.className)
  }, !props.hideToggle && combinedFeed.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_FeatureModule["default"].sizeExpandContainer)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_FeatureModule["default"].sizeExpand),
    onClick: cycleFeatureSize
  })) : /*#__PURE__*/_react["default"].createElement("div", null), combinedFeed.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_FeatureModule["default"].featureContainer, " ").concat(featureState && featureState.size ? featureState.size === 'medium' ? _FeatureModule["default"].featureContainerMedium : featureState.size === 'large' ? _FeatureModule["default"].featureContainerLarge : '' : '', " ").concat(useOverflown ? featureState.size === 'medium' ? 'featureContainerOverflown featureContainerOverflown_medium' : featureState.size === 'large' ? 'featureContainerOverflown featureContainerOverflown_large' : '' : ''),
    ref: featureContainerRef
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_FeatureModule["default"].itemContainer, " ").concat(featureState.size === 'thin' ? _FeatureModule["default"].itemContainerThin : '')
  }, combinedFeed.map(function (item, i) {
    var _featureState$size;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_FeatureModule["default"].item, " ").concat(featureState.size === 'thin' ? _FeatureModule["default"].itemThin : "Item_ContainerMetaController Item_ContainerMetaControllerFeature", " Item_ContainerMetaControllerFeature_").concat((_featureState$size = featureState === null || featureState === void 0 ? void 0 : featureState.size) !== null && _featureState$size !== void 0 ? _featureState$size : '', " Feature_Item"),
      key: i
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "w?v=".concat(item.id)
    }, item.status === 'live' && featureState.size !== 'thin' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "LiveTag ".concat(_FeatureModule["default"].statusContainer)
    }, "LIVE", /*#__PURE__*/_react["default"].createElement("div", {
      className: "RecordingCircle RecordingCircle_Small"
    })) : '', featureState.size !== 'thin' ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_image["default"], {
      loader: myLoader,
      src: item.thumbnail && props.cdn && props.cdn["static"] ? item.thumbnail : 'img/default/greythumb.jpg',
      alt: item.title ? item.title : "",
      width: 60,
      height: 30,
      layout: "responsive",
      className: "Feature_Img Feature_Img_Border"
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "Item_GhostMeta Item_GhostMetaFeature"
    }, item.creation && !isNaN(item.creation) && !isNaN(new Date(Number(item.creation))) ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "Item_TinyMetaText Item_TinyMetaTextFeature",
      style: {
        marginBottom: '.25rem',
        textShadow: '1px 2px 6px rgb(0 0 0 / 75%)'
      }
    }, "Stream started ", new Date(Number(item.creation)).toTimeString()) : null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "Item_GhostMetaContainerInternal"
    }, /*#__PURE__*/_react["default"].createElement("div", null, item.description ? item.description : "Watch Livestream Now")))) : null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_FeatureModule["default"].itemMetaContainer, " ").concat(featureState.size === 'thin' ? _FeatureModule["default"].thinMetaContainerSize : '')
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_FeatureModule["default"].itemMetaContainerPadding)
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_FeatureModule["default"].itemMetaText)
    }, item.status === 'live' && featureState.size === 'thin' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "LiveTag ".concat(_FeatureModule["default"].statusContainerInline, " LiveTag_Thin }")
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "RecordingCircle RecordingCircle_Small"
    })) : '', /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex gap-p2 ".concat((item.title.length ? item.title.length : "".concat(item.author_username, " is Streaming Now").length) + item.author_username.length > 20 ? 'marquee' : '', " ").concat(featureState.size === 'thin' ? _FeatureModule["default"].thinMeta : '', " ").concat(_FeatureModule["default"].itemMarqueeContainer)
    }, (item.title.length ? item.title.length : "".concat(item.author_username, " is Streaming Now").length) + item.author_username.length > 20 ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "marqueeContainer ".concat((featureState === null || featureState === void 0 ? void 0 : featureState.size) === 'thin' ? "".concat(_FeatureModule["default"].marqueeContainerThin) : '')
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "marquee1"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_FeatureModule["default"].titleText)
    }, item.title ? item.title : "".concat(item.author_username, " is Streaming Now")), /*#__PURE__*/_react["default"].createElement("span", null, " - "), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_FeatureModule["default"].authorUser)
    }, item.author_username)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "marquee2"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_FeatureModule["default"].titleText)
    }, item.title ? item.title : "".concat(item.author_username, " is Streaming Now")), /*#__PURE__*/_react["default"].createElement("span", null, " - "), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_FeatureModule["default"].authorUser)
    }, item.author_username)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "marquee3"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_FeatureModule["default"].titleText)
    }, item.title ? item.title : "".concat(item.author_username, " is Streaming Now")), /*#__PURE__*/_react["default"].createElement("span", null, " - "), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_FeatureModule["default"].authorUser)
    }, item.author_username))) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_FeatureModule["default"].titleText)
    }, item.title ? item.title : "".concat(item.author_username, " is Streaming Now")), /*#__PURE__*/_react["default"].createElement("span", null, " - "), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_FeatureModule["default"].authorUser)
    }, item.author_username))))))));
  }))) : null);
};
var _default = Module;
exports["default"] = _default;