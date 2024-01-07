"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _PresentationModule = _interopRequireDefault(require("../../Presentation.module.scss"));
var _uuid = require("uuid");
var _utility = require("../../../utility/utility");
var _image = _interopRequireDefault(require("next/image"));
var _link = _interopRequireDefault(require("next/link"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var moduleName = 'IndexBgHello';
var RESET_CTA_TIMER = 180000;
var Module = function Module(props) {
  var _props$items;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    componentId = _React$useState4[0],
    setComponentId = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(null),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    useCountdown = _React$useState6[0],
    setUseCountdown = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(0),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    currentSlide = _React$useState8[0],
    setCurrentSlide = _React$useState8[1];
  var _React$useState9 = _react["default"].useState(false),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    ctaClickedOnce = _React$useState10[0],
    setCtaClickedOnce = _React$useState10[1];
  var ctaRef = _react["default"].useRef();
  var currentGlide = _react["default"].useRef();
  props._LocalEventEmitter.unsubscribe(componentId);
  props._LocalEventEmitter.subscribe(componentId, function (d) {
    if (d && d.dispatch) {
      if (d.dispatch === 'updateCountdown') {
        var useCurrentTime = props.items && props.items[currentSlide] ? props.items[currentSlide].date : null;
        if (useCurrentTime !== null) {
          var useTime = typeof useCurrentTime === 'string' ? new Date(Number(useCurrentTime)) : _typeof(useCurrentTime) === 'object' ? new Date(useCurrentTime) : new Date(useCurrentTime);
          if (!isNaN(useTime)) {
            var timeRemaining = (0, _utility.getTimeRemaining)(useTime, new Date());
            if (timeRemaining) {
              setUseCountdown(timeRemaining);
            }
          }
        }
      }
    }
  });
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      var id = (0, _uuid.v4)();
      setComponentId(id);
      setInterval(function () {
        props._LocalEventEmitter.dispatch(id, {
          dispatch: 'updateCountdown'
        });
      }, 1000);
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  var handleFireGlobalEvent = _react["default"].useCallback( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var _e$currentTarget;
      var cta, tempRef;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setCtaClickedOnce(true);
            if (e !== null && e !== void 0 && (_e$currentTarget = e.currentTarget) !== null && _e$currentTarget !== void 0 && _e$currentTarget.getAttribute('ctaAfter')) {
              e.currentTarget.innerHTML = e.currentTarget.getAttribute('ctaAfter');
              cta = e.currentTarget.getAttribute('cta');
              tempRef = e.currentTarget;
              setTimeout(function () {
                try {
                  tempRef.innerHTML = cta;
                } catch (err) {
                  // fail silently
                }
              }, RESET_CTA_TIMER);
            }
            (0, _utility.fireGlobalEvent)(e, props._LocalEventEmitter);
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x2) {
      return _ref.apply(this, arguments);
    };
  }());
  _react["default"].useEffect(function () {
    if (componentId && window && window.Glide) {
      if (currentGlide !== null && currentGlide !== void 0 && currentGlide.current) {
        currentGlide.current.destroy();
      }
      var glide = new window.Glide(".glide_".concat(componentId), {
        type: 'carousel',
        perView: 4,
        focusAt: 0,
        breakpoints: {
          4000: {
            perView: 4
          },
          1280: {
            perView: 3
          },
          720: {
            perView: 2
          },
          540: {
            perView: 1
          }
        }
      });
      // glide.on(['build.before'], function() {
      //     document.querySelector(`.glide_${componentId}`).classList.add(`opacity1`)
      // })
      currentGlide.current = glide;
      glide.mount();
    }
  }, [componentId]);
  var resolveGoodDate = function resolveGoodDate(date) {
    try {
      var useValue = Number(date);
      return new Date(useValue).toLocaleDateString() + ' ' + new Date(useValue).toLocaleTimeString();
    } catch (err) {
      return '';
    }
  };
  var datePassed = function datePassed(date) {
    try {
      var useValue = Number(date);
      return new Date(useValue).getTime() < new Date().getTime();
    } catch (err) {
      return false;
    }
  };
  var useItems = props !== null && props !== void 0 && (_props$items = props.items) !== null && _props$items !== void 0 && _props$items.map ? props.items : [{}, {}, {}, {}];
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].IndexHelloContainer, " glide_").concat(componentId, " ").concat(moduleName, "_IndexHelloContainer ").concat(props.className)
  }, props.groupLabel ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].GroupLabelContainer, " ").concat(moduleName, "_groupLabelContainer ").concat(props.groupLabelContainerClassName)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].GroupLabel, " ").concat(moduleName, "_groupLabel ").concat(props.groupLabelClassName)
  }, props.groupLabel)) : null, /*#__PURE__*/_react["default"].createElement("div", {
    "data-glide-el": "track",
    className: "".concat(_PresentationModule["default"].GlideTrack, " glide__track")
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "".concat(_PresentationModule["default"].IndexItemsContainer, " glide__slides ").concat(moduleName, "_IndexItemsContainer ").concat(props.IndexItemsContainerClassName)
  }, useItems.map(function (m, i) {
    var _m$item, _m$iconWidth, _m$iconHeight, _m$item2, _m$item3, _m$item4, _m$item5, _m$item6, _m$item7, _m$item8, _m$item9;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].IndexItemUpperContainer, " ").concat(props.tall ? "".concat(_PresentationModule["default"].IndexItemsUpperContainerTall) : null, " ").concat(moduleName, "_Container"),
      key: i
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: m.date && !datePassed(m.date) && m !== null && m !== void 0 && (_m$item = m.item) !== null && _m$item !== void 0 && _m$item.id ? "/e?p=".concat(m.item.id) : m.streamId ? "/w?v=".concat(m.streamId) : "/w?u=".concat(m.author),
      style: {
        alignSelf: 'center'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].BgContainer, " ").concat(props.tall ? "".concat(_PresentationModule["default"].BgContainerTall) : null, " ").concat(moduleName, "_BgContainer ").concat(props.bgClassName),
      style: {
        backgroundImage: "url(".concat(m.leadBg && (m === null || m === void 0 ? void 0 : m.leadBg) !== '' ? m.leadBg : 'img/default/greythumb.jpg', ")")
      }
    }, props.children, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].FillPageContainer, " ").concat(moduleName, "_FillPageContainer")
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].TimeContainer, " ").concat(moduleName, "_TimeContainer ").concat(props.timeContainerClassName)
    }, m.showSimpleDate ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].TimeSimple, " ").concat(moduleName, "_TimeSimple ").concat(props.timeSimpleClassName, " ").concat(datePassed(m.date) ? "".concat(_PresentationModule["default"].DatePassed) : '')
    }, /*#__PURE__*/_react["default"].createElement("div", null, m !== null && m !== void 0 && m.date ? resolveGoodDate(m.date) : '')) : null)))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].MetaContainer, " ").concat(moduleName, "_MetaContainer ").concat(props.metaContainerClassName)
    }, (m === null || m === void 0 ? void 0 : m.icon) !== '' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].IconContainer, " ").concat(moduleName, "_IconContainer ").concat(props.iconContainerClassName)
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/p?u=".concat(m === null || m === void 0 ? void 0 : m.author),
      style: {
        alignSelf: 'center'
      }
    }, /*#__PURE__*/_react["default"].createElement(_image["default"], {
      loader: function loader() {
        return props.dev && m.icon ? "".concat(m.icon) : m.icon && props.cdn && props.cdn["static"] && props.cdn["static"].length > 0 ? "".concat(props.cdn["static"], "/").concat(m.icon) : 'img/default/greythumb.jpg';
      },
      src: props.dev && m.icon ? "".concat(m.icon) : m.icon && props.cdn && props.cdn["static"] && props.cdn["static"].length > 0 ? "".concat(props.cdn["static"], "/").concat(m.icon) : 'img/default/greythumb.jpg',
      style: {
        maxWidth: '60px',
        borderRadius: '4rem'
      },
      alt: m.author,
      width: (_m$iconWidth = m.iconWidth) !== null && _m$iconWidth !== void 0 ? _m$iconWidth : '60',
      height: (_m$iconHeight = m.iconHeight) !== null && _m$iconHeight !== void 0 ? _m$iconHeight : '60',
      layout: "responsive"
    }))) : null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].DataContainer, " ").concat(moduleName, "_DataContainer ").concat(props.DataContainerClassName)
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: m.date && !datePassed(m.date) && m !== null && m !== void 0 && (_m$item2 = m.item) !== null && _m$item2 !== void 0 && _m$item2.id ? "/e?p=".concat(m.item.id) : m.streamId ? "/w?v=".concat(m.streamId) : "/w?u=".concat(m.author),
      style: {
        alignSelf: 'center'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].Lead, " ").concat(moduleName, "_Lead ").concat(props.leadClassName)
    }, m.title)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].CtaHolder, " ").concat(moduleName, "_CtaHolder ").concat(props.CtaHolderClassName)
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/p?u=".concat(m === null || m === void 0 ? void 0 : m.author),
      style: {
        alignSelf: 'center'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].Author, " ").concat(moduleName, "_Author ").concat(props.authorClassName)
    }, m.author)), (m === null || m === void 0 ? void 0 : (_m$item3 = m.item) === null || _m$item3 === void 0 ? void 0 : _m$item3.type) === 'ticket' && m !== null && m !== void 0 && (_m$item4 = m.item) !== null && _m$item4 !== void 0 && _m$item4.id && m !== null && m !== void 0 && (_m$item5 = m.item) !== null && _m$item5 !== void 0 && _m$item5.style && m !== null && m !== void 0 && (_m$item6 = m.item) !== null && _m$item6 !== void 0 && _m$item6.option ? /*#__PURE__*/_react["default"].createElement("button", {
      className: "".concat(_PresentationModule["default"].CtaButton, " ").concat(moduleName, "_Cta ").concat(props.ctaClassName),
      onClick: handleFireGlobalEvent,
      action: ['add_to_cart', 'buy'].indexOf(m === null || m === void 0 ? void 0 : m.action) > -1 ? m.action : 'add_to_cart',
      item: m === null || m === void 0 ? void 0 : (_m$item7 = m.item) === null || _m$item7 === void 0 ? void 0 : _m$item7.id,
      selectedstyle: m === null || m === void 0 ? void 0 : (_m$item8 = m.item) === null || _m$item8 === void 0 ? void 0 : _m$item8.style,
      currentoption: m === null || m === void 0 ? void 0 : (_m$item9 = m.item) === null || _m$item9 === void 0 ? void 0 : _m$item9.option,
      ref: ctaRef,
      ctaAfter: m.ctaAfter,
      cta: m.cta
    }, m.cta) : null)))));
  }))));
};
var _default = Module;
exports["default"] = _default;