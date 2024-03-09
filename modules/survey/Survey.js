"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _SurveyModule = _interopRequireDefault(require("./Survey.module.scss"));
var _reactTextareaAutosize = _interopRequireDefault(require("react-textarea-autosize"));
var _mail = require("../utility/mail");
var _product = require("../ecommerce/product");
var _util = require("../util");
var _ecommerce = require("../utility/ecommerce");
var _defaults = require("../ecommerce/product/defaults");
var _Functions = require("../ecommerce/shop/Functions");
var _uuid = require("uuid");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // Survey.js
var Module = function Module(props) {
  var _backStageItem$bg, _backStageItem$color, _backStageItem$input, _backStageItem$input2, _backStageItem$input3, _backStageItem$input4, _backStageItem$input5, _backStageItem$input6, _backStageItem$confir, _backStageItem$confir2, _backStageItem$confir3, _currentStageItem$bg, _currentStageItem$col, _currentStageItem$inp, _currentStageItem$inp2, _currentStageItem$inp3, _currentStageItem$inp4, _currentStageItem$inp5, _currentStageItem$inp6, _currentStageItem$con, _currentStageItem$pip4, _currentStageItem$con2, _currentStageItem$con3, _currentStageItem$con4, _nextStageItem$bg, _nextStageItem$color, _nextStageItem$input, _nextStageItem$input2, _nextStageItem$input3, _nextStageItem$input4, _nextStageItem$input5, _nextStageItem$input6, _nextStageItem$confir, _nextStageItem$confir2, _nextStageItem$confir3;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    initial = _React$useState2[0],
    setInitial = _React$useState2[1];
  var _React$useState3 = _react["default"].useState([]),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    backList = _React$useState4[0],
    setBackList = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(null),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    currentStage = _React$useState6[0],
    setCurrentStage = _React$useState6[1];
  var _React$useState7 = _react["default"].useState({}),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    answers = _React$useState8[0],
    setAnswers = _React$useState8[1];
  var _React$useState9 = _react["default"].useState(null),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    next = _React$useState10[0],
    setNext = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(null),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    back = _React$useState12[0],
    setBack = _React$useState12[1];
  var _React$useState13 = _react["default"].useState(null),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    animatingNext = _React$useState14[0],
    setAnimatingNext = _React$useState14[1];
  var _React$useState15 = _react["default"].useState(null),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    animatingBack = _React$useState16[0],
    setAnimatingBack = _React$useState16[1];
  var _React$useState17 = _react["default"].useState(false),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    keepCurrent = _React$useState18[0],
    setKeepCurrent = _React$useState18[1];
  var _React$useState19 = _react["default"].useState({}),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    pipelineObject = _React$useState20[0],
    setPipelineObject = _React$useState20[1];
  var _React$useState21 = _react["default"].useState({}),
    _React$useState22 = _slicedToArray(_React$useState21, 2),
    pipelineDbItem = _React$useState22[0],
    setPipelineDbItem = _React$useState22[1];
  var _React$useState23 = _react["default"].useState(false),
    _React$useState24 = _slicedToArray(_React$useState23, 2),
    submitted = _React$useState24[0],
    setSubmitted = _React$useState24[1];
  var _React$useState25 = _react["default"].useState(0),
    _React$useState26 = _slicedToArray(_React$useState25, 2),
    currentLineupEditing = _React$useState26[0],
    setCurrentLineupEditing = _React$useState26[1];
  var _React$useState27 = _react["default"].useState(_defaults.defaultDefinePriceCurrency),
    _React$useState28 = _slicedToArray(_React$useState27, 2),
    currentDefinePriceCurrency = _React$useState28[0],
    setCurrentDefinePriceCurrency = _React$useState28[1];
  var _React$useState29 = _react["default"].useState(new FormData()),
    _React$useState30 = _slicedToArray(_React$useState29, 2),
    imgCache = _React$useState30[0],
    setImgCache = _React$useState30[1];
  var _React$useState31 = _react["default"].useState([]),
    _React$useState32 = _slicedToArray(_React$useState31, 2),
    imgFor = _React$useState32[0],
    setImgFor = _React$useState32[1];
  var _React$useState33 = _react["default"].useState({}),
    _React$useState34 = _slicedToArray(_React$useState33, 2),
    errorLog = _React$useState34[0],
    setErrorLog = _React$useState34[1];
  var inputRef = _react["default"].useRef();
  var currentError = _react["default"].useRef();
  var useData = props.survey;
  var currentStageItem = useData === null || useData === void 0 ? void 0 : useData.stages[currentStage];
  var nextStageItem = useData === null || useData === void 0 ? void 0 : useData.stages[next];
  var backStageItem = useData === null || useData === void 0 ? void 0 : useData.stages[back];
  var setCurrentStageProxy = function setCurrentStageProxy(stage) {
    var _useData$stages$stage;
    if (props.setCurrentStage) {
      props.setCurrentStage(stage);
    }
    setCurrentStage(stage);
    if (useData !== null && useData !== void 0 && useData.stages && useData.stages[stage] && typeof ((_useData$stages$stage = useData.stages[stage]) === null || _useData$stages$stage === void 0 ? void 0 : _useData$stages$stage.func) === 'function') {
      useData.stages[stage].func();
    }
  };
  _react["default"].useEffect(function () {
    var _useData$stages;
    if (!currentStage && useData !== null && useData !== void 0 && (_useData$stages = useData.stages) !== null && _useData$stages !== void 0 && _useData$stages.index) {
      setCurrentStageProxy('index');
    }
  }, [useData, currentStage]);
  var setPipelineDbItemProxy = function setPipelineDbItemProxy(item) {
    if (props !== null && props !== void 0 && props.setPipelineDbItem) {
      props.setPipelineDbItem(item);
    }
    setPipelineDbItem(item);
  };
  var setPipelineObjectProxy = function setPipelineObjectProxy(item) {
    if (props !== null && props !== void 0 && props.setPipelineObject) {
      props.setPipelineObject(item);
    }
    setPipelineObject(item);
  };
  _react["default"].useEffect(function () {
    if (useData !== null && useData !== void 0 && useData.pipelineDbItemDefault && !(0, _util.isObjectEmpty)(useData.pipelineDbItemDefault) && (0, _util.isObjectEmpty)(pipelineDbItem)) {
      setPipelineDbItemProxy(useData.pipelineDbItemDefault);
    }
  }, [pipelineDbItem, useData === null || useData === void 0 ? void 0 : useData.pipelineDbItemDefault]);
  var handleOptionClickConfirm = _react["default"].useCallback(function (e) {
    var _e$currentTarget, _e$currentTarget2, _ref, _inputRef$current$val, _inputRef$current, _e$current, _e$currentTarget3;
    var _goto = e === null || e === void 0 || (_e$currentTarget = e.currentTarget) === null || _e$currentTarget === void 0 ? void 0 : _e$currentTarget.getAttribute('goto');
    var question = e === null || e === void 0 || (_e$currentTarget2 = e.currentTarget) === null || _e$currentTarget2 === void 0 ? void 0 : _e$currentTarget2.getAttribute('question');
    var value = (_ref = (_inputRef$current$val = inputRef === null || inputRef === void 0 || (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.value) !== null && _inputRef$current$val !== void 0 ? _inputRef$current$val : e === null || e === void 0 || (_e$current = e.current) === null || _e$current === void 0 ? void 0 : _e$current.value) !== null && _ref !== void 0 ? _ref : e === null || e === void 0 || (_e$currentTarget3 = e.currentTarget) === null || _e$currentTarget3 === void 0 ? void 0 : _e$currentTarget3.value;
    optionClick(_goto, question, value);
  });
  var handleOptionClick = _react["default"].useCallback(function (e) {
    var _e$currentTarget4, _e$currentTarget5, _e$currentTarget$getA, _e$currentTarget6;
    var _goto2 = e === null || e === void 0 || (_e$currentTarget4 = e.currentTarget) === null || _e$currentTarget4 === void 0 ? void 0 : _e$currentTarget4.getAttribute('goto');
    var question = e === null || e === void 0 || (_e$currentTarget5 = e.currentTarget) === null || _e$currentTarget5 === void 0 ? void 0 : _e$currentTarget5.getAttribute('question');
    var value = (_e$currentTarget$getA = e === null || e === void 0 || (_e$currentTarget6 = e.currentTarget) === null || _e$currentTarget6 === void 0 ? void 0 : _e$currentTarget6.getAttribute('value')) !== null && _e$currentTarget$getA !== void 0 ? _e$currentTarget$getA : e.currentTarget.value;
    optionClick(_goto2, question, value);
  });
  var doClear = function doClear(elements) {
    console.log('Do Clear', elements);
    if (elements) {
      for (var i = 0; i < elements.length; i++) {
        var _elements$i, _elements$i2;
        console.log((_elements$i = elements[i]) === null || _elements$i === void 0 ? void 0 : _elements$i.getAttribute('surveyclear'));
        if ((_elements$i2 = elements[i]) !== null && _elements$i2 !== void 0 && _elements$i2.getAttribute('surveyclear')) {
          elements[i].value = '';
          console.log(elements[i]);
          if (elements[i].getAttribute('usedefault')) {
            elements[i].value = elements[i].getAttribute('usedefault');
          }
        }
      }
    }
  };
  var optionClick = function optionClick(_goto3, question, value) {
    var _currentStageItem$pip;
    console.log(currentStageItem);
    setErrorLog({}); // Reset Error Log every attempt
    if (currentError !== null && currentError !== void 0 && currentError.current) {
      currentError.current.innerHTML = '';
      currentError.current.style.opacity = 0;
    }
    if (currentStageItem !== null && currentStageItem !== void 0 && currentStageItem.validation && typeof currentStageItem.validation === 'function') {
      var message = currentStageItem.validation(currentStageItem, value);
      console.log(message);
      if (message) {
        var temp = errorLog;
        temp[currentStage] = message;
        setErrorLog(temp);
        if (currentError !== null && currentError !== void 0 && currentError.current) {
          currentError.current.innerHTML = message;
          currentError.current.style.opacity = 1;
        }
        return null; // Prevent further inputs bad info
      }
    }
    if (currentStageItem !== null && currentStageItem !== void 0 && (_currentStageItem$pip = currentStageItem.pipeline) !== null && _currentStageItem$pip !== void 0 && _currentStageItem$pip.length) {
      for (var i = 0; i < currentStageItem.pipeline.length; i++) {
        var _currentStageItem$pip2, _currentStageItem$pip3;
        console.log(_typeof(currentStageItem.pipeline[i].input.validation));
        if ((_currentStageItem$pip2 = currentStageItem.pipeline[i]) !== null && _currentStageItem$pip2 !== void 0 && _currentStageItem$pip2.input && (_currentStageItem$pip3 = currentStageItem.pipeline[i].input) !== null && _currentStageItem$pip3 !== void 0 && _currentStageItem$pip3.validation && typeof currentStageItem.pipeline[i].input.validation === 'function') {
          var message2 = currentStageItem.pipeline[i].input.validation(currentStageItem.pipeline[i], pipelineObject[currentStageItem.pipeline[i].input["var"]]);
          if (message2) {
            console.log(message2);
            var _temp = errorLog;
            _temp[currentStage] = message2;
            setErrorLog(_temp);
            if (currentError !== null && currentError !== void 0 && currentError.current) {
              currentError.current.innerHTML = message2;
              currentError.current.style.opacity = 1;
            }
            return null;
          }
        }
      }
    }
    setNext(_goto3);
    setBack(currentStage);
    setTimeout(function () {
      setAnimatingNext(true);
    }, 100);
    if (inputRef !== null && inputRef !== void 0 && inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.placeholder = '';
      inputRef.current.select();
    }
    setTimeout(function () {
      setKeepCurrent(true);
      if (_goto3) {
        var _useData$stages$_goto;
        console.log(question);
        if (question) {
          var _temp2 = answers;
          if (!_temp2[currentStage]) {
            _temp2[currentStage] = {};
          }
          _temp2[currentStage].question = question;
          _temp2[currentStage].answer = value;
          setAnswers(_temp2);
        }
        if (useData !== null && useData !== void 0 && (_useData$stages$_goto = useData.stages[_goto3]) !== null && _useData$stages$_goto !== void 0 && _useData$stages$_goto.input && inputRef !== null && inputRef !== void 0 && inputRef.current) {
          if (Object.prototype.hasOwnProperty.call(useData === null || useData === void 0 ? void 0 : useData.stages[_goto3].input, 'default')) {
            inputRef.current.value = useData.stages[_goto3].input["default"];
          }
          if (Object.prototype.hasOwnProperty.call(useData === null || useData === void 0 ? void 0 : useData.stages[_goto3].input, 'placeholder')) {
            inputRef.current.placeholder = useData.stages[_goto3].input.placeholder;
          }
        }
        setCurrentStageProxy(_goto3);
        setTimeout(function () {
          doClear(document.getElementsByTagName('textarea'));
          doClear(document.getElementsByTagName('input'));
        }, 100);
      }
      setTimeout(function () {
        setNext(null);
        setAnimatingNext(null);
        setKeepCurrent(false);
      }, 100);
    }, 450);
    updateBack(currentStage, true);
  };
  var updateBack = function updateBack(item, add) {
    var temp = backList;
    if (add && item) {
      temp.push(item);
    } else {
      temp.pop();
    }
    setBackList(temp);
  };
  var handleGoBack = _react["default"].useCallback(function (e) {
    if (backList.length > 0) {
      var _next = backList[backList.length - 1];
      console.log(_next);
      setBack(_next);
      setTimeout(function () {
        setAnimatingBack(true);
      }, 100);
      setTimeout(function () {
        var _useData$stages$_next;
        setKeepCurrent(true);
        if (_next) {
          setCurrentStageProxy(_next);
          setTimeout(function () {
            doClear(document.getElementsByTagName('textarea'));
            doClear(document.getElementsByTagName('input'));
          }, 1);
        }
        setTimeout(function () {
          setBack(null);
          setAnimatingBack(null);
          setKeepCurrent(false);
        }, 100);
        if (useData !== null && useData !== void 0 && (_useData$stages$_next = useData.stages[_next]) !== null && _useData$stages$_next !== void 0 && _useData$stages$_next.input && inputRef !== null && inputRef !== void 0 && inputRef.current) {
          if (Object.prototype.hasOwnProperty.call(useData === null || useData === void 0 ? void 0 : useData.stages[_next].input, 'default')) {
            inputRef.current.value = useData.stages[_next].input["default"];
          }
          if (Object.prototype.hasOwnProperty.call(useData === null || useData === void 0 ? void 0 : useData.stages[_next].input, 'placeholder')) {
            inputRef.current.placeholder = useData.stages[_next].input.placeholder;
          }
        }
      }, 450);
      updateBack(null, false);
    }
  });
  _react["default"].useEffect(function () {
    if (!initial) {
      if (inputRef !== null && inputRef !== void 0 && inputRef.current && currentStageItem !== null && currentStageItem !== void 0 && currentStageItem.input) {
        console.log('Running');
        setInitial(true);
        inputRef.current.value = '';
        inputRef.current.placeholder = '';
        inputRef.current.select();
        if (Object.prototype.hasOwnProperty.call(currentStageItem.input, 'default')) {
          inputRef.current.value = currentStageItem.input["default"];
        }
        if (Object.prototype.hasOwnProperty.call(currentStageItem.input, 'placeholder')) {
          inputRef.current.placeholder = currentStageItem.input.placeholder;
        }
      }
    }
  }, [initial, currentStageItem]);
  _react["default"].useEffect(function () {
    console.log(currentStageItem, submitted);
    if (currentStageItem !== null && currentStageItem !== void 0 && currentStageItem.submit || nextStageItem !== null && nextStageItem !== void 0 && nextStageItem.submit) {
      if (!submitted) {
        var f = /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ans) {
            var res;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!ans) {
                    _context.next = 5;
                    break;
                  }
                  _context.next = 3;
                  return (0, _mail.sendSurveyEmail)(props.apiUrl, props.domainKey, ans, useData.name, props._loggedIn);
                case 3:
                  res = _context.sent;
                  console.log(res);
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          return function f(_x) {
            return _ref2.apply(this, arguments);
          };
        }();
        f(answers); // Schedule outbound email back to Businesses admin
        setSubmitted(true);
      }
    }
  }, [currentStageItem, submitted]);
  var addToObject = function addToObject(useVar, value) {
    var temp = _objectSpread({}, pipelineObject);
    temp[useVar] = value;
    console.log('Temp', temp);
    var temp2 = answers;
    if (!temp2[currentStage]) {
      temp2[currentStage] = {};
    }
    if (!temp2[currentStage].pipeline) {
      temp2[currentStage].pipeline = {};
    }
    temp2[currentStage].pipeline[useVar] = value;
    setAnswers(temp2);
    setPipelineObjectProxy(temp);
  };
  var handleKeyDown = _react["default"].useCallback(function (e) {
    try {
      if (e) {
        var _e$current$value, _e$current2, _e$currentTarget7, _e$currentTarget8;
        var value = (_e$current$value = e === null || e === void 0 || (_e$current2 = e.current) === null || _e$current2 === void 0 ? void 0 : _e$current2.value) !== null && _e$current$value !== void 0 ? _e$current$value : e === null || e === void 0 || (_e$currentTarget7 = e.currentTarget) === null || _e$currentTarget7 === void 0 ? void 0 : _e$currentTarget7.value;
        if (e !== null && e !== void 0 && (_e$currentTarget8 = e.currentTarget) !== null && _e$currentTarget8 !== void 0 && _e$currentTarget8.getAttribute('pipeline')) {
          var _e$currentTarget9;
          console.log(value, 'Add to Obj');
          addToObject(e === null || e === void 0 || (_e$currentTarget9 = e.currentTarget) === null || _e$currentTarget9 === void 0 ? void 0 : _e$currentTarget9.getAttribute('var'), value);
        } else if (e.keyCode === 13) {
          var _e$currentTarget10, _e$currentTarget11;
          e.preventDefault();
          var _goto4 = e === null || e === void 0 || (_e$currentTarget10 = e.currentTarget) === null || _e$currentTarget10 === void 0 ? void 0 : _e$currentTarget10.getAttribute('goto');
          var question = e === null || e === void 0 || (_e$currentTarget11 = e.currentTarget) === null || _e$currentTarget11 === void 0 ? void 0 : _e$currentTarget11.getAttribute('question');
          console.log(value, question, _goto4);
          optionClick(_goto4, question, value);
        }
      }
    } catch (err) {
      console.log(err);
    }
  });
  var setOptionsMetaData = _react["default"].useCallback(function (e) {
    console.log(e.currentTarget.checked, e.currentTarget.getAttribute('option'));
    (0, _Functions.doSetOptionsMetaData)(e, pipelineDbItem === null || pipelineDbItem === void 0 ? void 0 : pipelineDbItem.detailmeta, pipelineDbItem, setPipelineDbItemProxy, null, currentLineupEditing, setCurrentLineupEditing);
  });
  var setCurrentPrice = _react["default"].useCallback(function (e) {
    if (e.currentTarget) {
      var _e$currentTarget12, _e$currentTarget15;
      if (e !== null && e !== void 0 && (_e$currentTarget12 = e.currentTarget) !== null && _e$currentTarget12 !== void 0 && _e$currentTarget12.getAttribute('pipeline')) {
        var _e$current$value2, _e$current3, _e$currentTarget13, _e$currentTarget14;
        var value = (_e$current$value2 = e === null || e === void 0 || (_e$current3 = e.current) === null || _e$current3 === void 0 ? void 0 : _e$current3.value) !== null && _e$current$value2 !== void 0 ? _e$current$value2 : e === null || e === void 0 || (_e$currentTarget13 = e.currentTarget) === null || _e$currentTarget13 === void 0 ? void 0 : _e$currentTarget13.value;
        console.log(value, 'Add to Obj');
        addToObject(e === null || e === void 0 || (_e$currentTarget14 = e.currentTarget) === null || _e$currentTarget14 === void 0 ? void 0 : _e$currentTarget14.getAttribute('var'), value);
      }
      var temp = _objectSpread({}, pipelineDbItem);
      if ((e === null || e === void 0 || (_e$currentTarget15 = e.currentTarget) === null || _e$currentTarget15 === void 0 ? void 0 : _e$currentTarget15.getAttribute('method')) === 'singleStyle') {
        var f = temp.styles[0] ? 0 : -1;
        console.log(f, e.currentTarget.value, !isNaN(Number(e.currentTarget.value)));
        if (f > -1) {
          if (!isNaN(Number(e.currentTarget.value))) {
            if ((currentDefinePriceCurrency === null || currentDefinePriceCurrency === void 0 ? void 0 : currentDefinePriceCurrency.currency) === 'USD') {
              temp.styles[f].price = Number(e.currentTarget.value);
            } else {
              if (!temp.styles[f].priceTable) {
                temp.styles[f].priceTable = {};
              }
              temp.styles[f].priceTable[currentDefinePriceCurrency.currency] = Number(e.currentTarget.value);
            }
            setPipelineDbItemProxy(temp);
          }
        }
      }
    }
  });
  var setCurrentQuantity = _react["default"].useCallback(function (e) {
    if (e.currentTarget) {
      var _e$currentTarget16, _e$currentTarget19;
      if (e !== null && e !== void 0 && (_e$currentTarget16 = e.currentTarget) !== null && _e$currentTarget16 !== void 0 && _e$currentTarget16.getAttribute('pipeline')) {
        var _e$current$value3, _e$current4, _e$currentTarget17, _e$currentTarget18;
        var value = (_e$current$value3 = e === null || e === void 0 || (_e$current4 = e.current) === null || _e$current4 === void 0 ? void 0 : _e$current4.value) !== null && _e$current$value3 !== void 0 ? _e$current$value3 : e === null || e === void 0 || (_e$currentTarget17 = e.currentTarget) === null || _e$currentTarget17 === void 0 ? void 0 : _e$currentTarget17.value;
        console.log(value, 'Add to Obj');
        addToObject(e === null || e === void 0 || (_e$currentTarget18 = e.currentTarget) === null || _e$currentTarget18 === void 0 ? void 0 : _e$currentTarget18.getAttribute('var'), value);
      }
      var temp = _objectSpread({}, pipelineDbItem);
      if ((e === null || e === void 0 || (_e$currentTarget19 = e.currentTarget) === null || _e$currentTarget19 === void 0 ? void 0 : _e$currentTarget19.getAttribute('method')) === 'singleStyle') {
        var f = temp.styles[0] ? 0 : -1;
        if (f > -1) {
          var f2 = 0;
          if (f2 > -1) {
            if (!isNaN(Number(e.currentTarget.value))) {
              temp.styles[f].option[f2].quantity = Number(e.currentTarget.value);
            }
          }
          setPipelineDbItemProxy(temp);
        }
      }
    }
  });
  var handleNewFile = _react["default"].useCallback(function (e) {
    var _e$currentTarget20, _e$target;
    console.log(e, 'Handle New');
    var modif = e === null || e === void 0 || (_e$currentTarget20 = e.currentTarget) === null || _e$currentTarget20 === void 0 ? void 0 : _e$currentTarget20.getAttribute('selectmodif');
    console.log('Sel', modif);
    console.log(imgCache);
    var files = e === null || e === void 0 || (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.files;
    var filesRenamed = Array.from(files).slice(0, files.length > 1 ? 1 : files.length).filter(function (m) {
      return m.type && _defaults.allowedTypes.indexOf(m.type) > -1;
    }).map(function (m) {
      var blob = m.slice(0, m.size, m.type);
      var ext = _defaults.allowedTypes[_defaults.allowedTypes.indexOf(m.type)].match(/\/([a-zA-Z0-9].*)/)[1];
      return new File([blob], "".concat((0, _uuid.v4)(), ".").concat(ext), {
        type: m.type
      });
    });
    console.log('Files Renamed', filesRenamed, imgCache);
    var useForm = imgCache;
    var imgForTemp = imgFor;
    if (filesRenamed) {
      filesRenamed.forEach(function (img) {
        useForm.append('image', img);
        fileToDataUrl(img, modif);
        var f = imgForTemp.findIndex(function (m) {
          return m.name === img.name;
        });
        if (f > -1) {
          imgForTemp.splice(f, 1);
        }
        imgForTemp.push({
          name: img.name,
          modif: modif
        });
      });
    }
    setImgFor(imgForTemp);
    setImgCache(useForm);
    if (props !== null && props !== void 0 && props.setImgCache) {
      props.setImgCache(useForm);
    }
    if (props !== null && props !== void 0 && props.setImgFor) {
      props.setImgFor(imgForTemp);
    }
  });
  var addTempFile = _react["default"].useCallback(function (e) {
    var _e$currentTarget21;
    console.log(e, 'Add Temp');
    if (e !== null && e !== void 0 && (_e$currentTarget21 = e.currentTarget) !== null && _e$currentTarget21 !== void 0 && _e$currentTarget21.getAttribute('modif')) {
      var _e$currentTarget22;
      var f = document.querySelector("input[selectmodif='".concat(e === null || e === void 0 || (_e$currentTarget22 = e.currentTarget) === null || _e$currentTarget22 === void 0 ? void 0 : _e$currentTarget22.getAttribute('modif'), "']"));
      if (f !== null && f !== void 0 && f.click) {
        f.click();
      }
    }
  });
  var fileToDataUrl = function fileToDataUrl(file, useVar) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.onload = function () {
        console.log(reader.result);
        document.querySelector("img[selectimg=".concat(useVar, "]")).style.backgroundImage = "url(".concat(reader.result, ")");
        resolve(reader.result);
      };
      reader.onerror = function () {
        reject(reader.error);
      };
      reader.readAsDataURL(file);
    });
  };
  var resolveImg = function resolveImg(m) {
    var _m$input, _props$cdn, _props$cdn2, _m$input2;
    if (imgCache.get(m === null || m === void 0 || (_m$input = m.input) === null || _m$input === void 0 ? void 0 : _m$input["var"])) {
      fileToDataUrl(imgCache.get(m.input["var"]), m.input["var"]);
    }
    var useFile = "".concat(m.input["var"] === 'featureImg' && bgImg ? "".concat(props === null || props === void 0 || (_props$cdn = props.cdn) === null || _props$cdn === void 0 ? void 0 : _props$cdn["static"], "/").concat(bgImg) : m.input["var"] === 'leadImg' && leadImg ? "".concat(props === null || props === void 0 || (_props$cdn2 = props.cdn) === null || _props$cdn2 === void 0 ? void 0 : _props$cdn2["static"], "/").concat(leadImg) : 'img/default/greythumb.jpg');
    return /*#__PURE__*/_react["default"].createElement("img", {
      style: {
        backgroundImage: "url(".concat(useFile, ")"),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%'
      },
      selectimg: m === null || m === void 0 || (_m$input2 = m.input) === null || _m$input2 === void 0 ? void 0 : _m$input2["var"]
    });
  };
  var bgImg = pipelineDbItem !== null && pipelineDbItem !== void 0 && pipelineDbItem.images ? pipelineDbItem.images.find(function (m) {
    return m === null || m === void 0 ? void 0 : m.bgImg;
  }) : null;
  var leadImg = pipelineDbItem.images ? pipelineDbItem.images.find(function (m) {
    return m === null || m === void 0 ? void 0 : m.leadImg;
  }) : null;
  console.log(currentStage, answers, backList, next, submitted, props);
  console.log('Pipeline Object', pipelineObject, pipelineDbItem, back, next);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _SurveyModule["default"].survey__container,
    style: {
      height: props !== null && props !== void 0 && props.height ? "".concat(props.height, "px") : '100vh'
    }
  }, backStageItem ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_SurveyModule["default"].backItem, " ").concat(_SurveyModule["default"].item, " ").concat(animatingBack ? "".concat(_SurveyModule["default"].animatingBackBack) : null, " ").concat(backStageItem === null || backStageItem === void 0 ? void 0 : backStageItem.className),
    style: {
      background: (_backStageItem$bg = backStageItem === null || backStageItem === void 0 ? void 0 : backStageItem.bg) !== null && _backStageItem$bg !== void 0 ? _backStageItem$bg : null,
      color: (_backStageItem$color = backStageItem === null || backStageItem === void 0 ? void 0 : backStageItem.color) !== null && _backStageItem$color !== void 0 ? _backStageItem$color : null
    }
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: _SurveyModule["default"].survey__title
  }, backStageItem === null || backStageItem === void 0 ? void 0 : backStageItem.label), backStageItem !== null && backStageItem !== void 0 && backStageItem.pipeline ? /*#__PURE__*/_react["default"].createElement("div", null) : (backStageItem === null || backStageItem === void 0 || (_backStageItem$input = backStageItem.input) === null || _backStageItem$input === void 0 ? void 0 : _backStageItem$input.type) === 'select' ? /*#__PURE__*/_react["default"].createElement("ul", {
    className: _SurveyModule["default"].survey__optionsList
  }, backStageItem === null || backStageItem === void 0 || (_backStageItem$input2 = backStageItem.input) === null || _backStageItem$input2 === void 0 ? void 0 : _backStageItem$input2.options.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: option.label
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: _SurveyModule["default"].survey__optionButton,
      onClick: handleOptionClick,
      "goto": option["goto"],
      label: option.label,
      question: backStageItem === null || backStageItem === void 0 ? void 0 : backStageItem.label,
      value: option.label
    }, option.label));
  })) : (backStageItem === null || backStageItem === void 0 || (_backStageItem$input3 = backStageItem.input) === null || _backStageItem$input3 === void 0 ? void 0 : _backStageItem$input3.type) === 'number' ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
    type: "number",
    className: "".concat(_SurveyModule["default"].numberInput),
    defaultValue: backStageItem === null || backStageItem === void 0 || (_backStageItem$input4 = backStageItem.input) === null || _backStageItem$input4 === void 0 ? void 0 : _backStageItem$input4["default"]
  })) : (backStageItem === null || backStageItem === void 0 || (_backStageItem$input5 = backStageItem.input) === null || _backStageItem$input5 === void 0 ? void 0 : _backStageItem$input5.type) === 'text' ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactTextareaAutosize["default"], {
    type: "text",
    className: "".concat(_SurveyModule["default"].textInput),
    placeholder: backStageItem === null || backStageItem === void 0 || (_backStageItem$input6 = backStageItem.input) === null || _backStageItem$input6 === void 0 ? void 0 : _backStageItem$input6["default"],
    minRows: 3
  })) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex",
    style: {
      marginTop: '.5rem',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: _SurveyModule["default"].confirmButton,
    onClick: handleOptionClick,
    "goto": backStageItem === null || backStageItem === void 0 || (_backStageItem$confir = backStageItem.confirm) === null || _backStageItem$confir === void 0 ? void 0 : _backStageItem$confir["goto"],
    label: backStageItem === null || backStageItem === void 0 ? void 0 : backStageItem.label,
    value: 'confirm',
    question: backStageItem === null || backStageItem === void 0 ? void 0 : backStageItem.label,
    style: {
      opacity: backStageItem !== null && backStageItem !== void 0 && backStageItem.confirm ? 1 : 0,
      transition: 0
    }
  }, backStageItem !== null && backStageItem !== void 0 && (_backStageItem$confir2 = backStageItem.confirm) !== null && _backStageItem$confir2 !== void 0 && _backStageItem$confir2.label ? backStageItem === null || backStageItem === void 0 ? void 0 : backStageItem.confirm.label : (backStageItem === null || backStageItem === void 0 || (_backStageItem$confir3 = backStageItem.confirm) === null || _backStageItem$confir3 === void 0 ? void 0 : _backStageItem$confir3["goto"]) === 'end' ? 'Confirm' : 'Next'), backList && backList.length > 0 && !submitted ? /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleGoBack,
    className: "".concat(_SurveyModule["default"].backButton),
    style: {
      transition: 0
    }
  }, "Back") : null)) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_SurveyModule["default"].currentItem, " ").concat(_SurveyModule["default"].item, " ").concat(animatingNext ? "".concat(_SurveyModule["default"].animatingNextCurrent) : null, " ").concat(animatingBack ? "".concat(_SurveyModule["default"].animatingBackCurrent) : null, " ").concat(keepCurrent ? "".concat(_SurveyModule["default"].keepCurrent, " ").concat(_SurveyModule["default"].backToOriginal) : null, " ").concat(currentStageItem === null || currentStageItem === void 0 ? void 0 : currentStageItem.className),
    style: {
      background: (_currentStageItem$bg = currentStageItem === null || currentStageItem === void 0 ? void 0 : currentStageItem.bg) !== null && _currentStageItem$bg !== void 0 ? _currentStageItem$bg : null,
      color: (_currentStageItem$col = currentStageItem === null || currentStageItem === void 0 ? void 0 : currentStageItem.color) !== null && _currentStageItem$col !== void 0 ? _currentStageItem$col : null
    }
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: _SurveyModule["default"].title
  }, currentStageItem === null || currentStageItem === void 0 ? void 0 : currentStageItem.label), (currentStageItem === null || currentStageItem === void 0 || (_currentStageItem$inp = currentStageItem.input) === null || _currentStageItem$inp === void 0 ? void 0 : _currentStageItem$inp.type) === 'select' ? /*#__PURE__*/_react["default"].createElement("ul", {
    className: _SurveyModule["default"].survey__optionsList
  }, currentStageItem === null || currentStageItem === void 0 || (_currentStageItem$inp2 = currentStageItem.input) === null || _currentStageItem$inp2 === void 0 ? void 0 : _currentStageItem$inp2.options.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: option.label
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: _SurveyModule["default"].survey__optionButton,
      onClick: handleOptionClick,
      "goto": option["goto"],
      label: option.label,
      question: currentStageItem === null || currentStageItem === void 0 ? void 0 : currentStageItem.label,
      value: option.label
    }, option.label));
  })) : (currentStageItem === null || currentStageItem === void 0 || (_currentStageItem$inp3 = currentStageItem.input) === null || _currentStageItem$inp3 === void 0 ? void 0 : _currentStageItem$inp3.type) === 'number' ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
    type: "number",
    className: "".concat(_SurveyModule["default"].numberInput),
    defaultValue: currentStageItem === null || currentStageItem === void 0 || (_currentStageItem$inp4 = currentStageItem.input) === null || _currentStageItem$inp4 === void 0 ? void 0 : _currentStageItem$inp4["default"],
    ref: inputRef
  })) : (currentStageItem === null || currentStageItem === void 0 || (_currentStageItem$inp5 = currentStageItem.input) === null || _currentStageItem$inp5 === void 0 ? void 0 : _currentStageItem$inp5.type) === 'text' ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactTextareaAutosize["default"], {
    type: "text",
    className: "".concat(_SurveyModule["default"].textInput),
    placeholder: currentStageItem === null || currentStageItem === void 0 || (_currentStageItem$inp6 = currentStageItem.input) === null || _currentStageItem$inp6 === void 0 ? void 0 : _currentStageItem$inp6["default"],
    minRows: 3,
    ref: inputRef,
    onKeyDown: handleKeyDown,
    "goto": currentStageItem === null || currentStageItem === void 0 || (_currentStageItem$con = currentStageItem.confirm) === null || _currentStageItem$con === void 0 ? void 0 : _currentStageItem$con["goto"],
    question: currentStageItem === null || currentStageItem === void 0 ? void 0 : currentStageItem.label
  })) : null, currentStageItem !== null && currentStageItem !== void 0 && (_currentStageItem$pip4 = currentStageItem.pipeline) !== null && _currentStageItem$pip4 !== void 0 && _currentStageItem$pip4.map ? currentStageItem.pipeline.map(function (m, i) {
    var _m$label, _m$input3, _m$input4, _m$input5, _m$input$rows, _m$input6, _m$input7, _m$input8, _m$input9, _m$input10, _m$input11, _m$input12, _pipelineDbItem$detai, _m$input13, _m$input14, _m$input15, _m$input16, _m$input17, _m$input18, _m$input19, _m$input20, _m$input21, _m$input22, _m$input23, _m$input24, _m$input25, _m$input26, _m$height, _m$width, _m$input27;
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      style: {
        marginBottom: '.5rem'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        marginBottom: '.125rem'
      }
    }, (_m$label = m === null || m === void 0 ? void 0 : m.label) !== null && _m$label !== void 0 ? _m$label : ''), /*#__PURE__*/_react["default"].createElement("div", null, (m === null || m === void 0 || (_m$input3 = m.input) === null || _m$input3 === void 0 ? void 0 : _m$input3.type) === 'text' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(m === null || m === void 0 ? void 0 : m.className)
    }, /*#__PURE__*/_react["default"].createElement(_reactTextareaAutosize["default"], {
      type: "text",
      className: "".concat(_SurveyModule["default"].textInput),
      placeholder: m === null || m === void 0 || (_m$input4 = m.input) === null || _m$input4 === void 0 ? void 0 : _m$input4["default"],
      onInput: handleKeyDown,
      "var": m === null || m === void 0 || (_m$input5 = m.input) === null || _m$input5 === void 0 ? void 0 : _m$input5["var"],
      pipeline: "true",
      minRows: (_m$input$rows = m === null || m === void 0 || (_m$input6 = m.input) === null || _m$input6 === void 0 ? void 0 : _m$input6.rows) !== null && _m$input$rows !== void 0 ? _m$input$rows : 1,
      usedefault: pipelineObject[m === null || m === void 0 || (_m$input7 = m.input) === null || _m$input7 === void 0 ? void 0 : _m$input7["var"]],
      surveyclear: "true"
    })) : (m === null || m === void 0 || (_m$input8 = m.input) === null || _m$input8 === void 0 ? void 0 : _m$input8.type) === 'datetime-local' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(m === null || m === void 0 ? void 0 : m.className)
    }, /*#__PURE__*/_react["default"].createElement("input", {
      type: "datetime-local",
      placeholder: m === null || m === void 0 || (_m$input9 = m.input) === null || _m$input9 === void 0 ? void 0 : _m$input9["default"],
      onInput: handleKeyDown,
      "var": m === null || m === void 0 || (_m$input10 = m.input) === null || _m$input10 === void 0 ? void 0 : _m$input10["var"],
      pipeline: "true",
      surveyclear: "true",
      usedefault: pipelineObject[m === null || m === void 0 || (_m$input11 = m.input) === null || _m$input11 === void 0 ? void 0 : _m$input11["var"]]
    })) : (m === null || m === void 0 || (_m$input12 = m.input) === null || _m$input12 === void 0 ? void 0 : _m$input12.type) === 'lineup' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(m === null || m === void 0 ? void 0 : m.className)
    }, /*#__PURE__*/_react["default"].createElement(_product.Lineup, _extends({}, props, {
      product: pipelineDbItem,
      editing: pipelineDbItem,
      editingOptionsMeta: (_pipelineDbItem$detai = pipelineDbItem === null || pipelineDbItem === void 0 ? void 0 : pipelineDbItem.detailmeta) !== null && _pipelineDbItem$detai !== void 0 ? _pipelineDbItem$detai : null,
      setOptionsMetaData: setOptionsMetaData,
      currentLineupEditing: currentLineupEditing,
      setCurrentLineupEditing: setCurrentLineupEditing
    }))) : (m === null || m === void 0 || (_m$input13 = m.input) === null || _m$input13 === void 0 ? void 0 : _m$input13.type) === 'price' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(m === null || m === void 0 ? void 0 : m.className, " flex gap-p2")
    }, /*#__PURE__*/_react["default"].createElement("span", null, "$"), /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("input", {
      type: "text",
      style: {
        width: '100%'
      },
      onChange: setCurrentPrice,
      "var": m === null || m === void 0 || (_m$input14 = m.input) === null || _m$input14 === void 0 ? void 0 : _m$input14["var"],
      pipeline: "true",
      surveyclear: "true",
      method: m === null || m === void 0 || (_m$input15 = m.input) === null || _m$input15 === void 0 ? void 0 : _m$input15.method,
      usedefault: !(0, _util.isObjectEmpty)(pipelineObject) && Object.prototype.hasOwnProperty.call(pipelineObject, [m === null || m === void 0 || (_m$input16 = m.input) === null || _m$input16 === void 0 ? void 0 : _m$input16["var"]]) && pipelineObject[m === null || m === void 0 || (_m$input17 = m.input) === null || _m$input17 === void 0 ? void 0 : _m$input17["var"]] !== null ? _ecommerce.westernMoneyFormat.format(pipelineObject[m === null || m === void 0 || (_m$input18 = m.input) === null || _m$input18 === void 0 ? void 0 : _m$input18["var"]]) : '10.00'
    }))) : (m === null || m === void 0 || (_m$input19 = m.input) === null || _m$input19 === void 0 ? void 0 : _m$input19.type) === 'quantity' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(m === null || m === void 0 ? void 0 : m.className, " flex gap-p2")
    }, /*#__PURE__*/_react["default"].createElement("span", null, "Qty"), /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("input", {
      type: "text",
      style: {
        width: '100%'
      },
      onChange: setCurrentQuantity,
      "var": m === null || m === void 0 || (_m$input20 = m.input) === null || _m$input20 === void 0 ? void 0 : _m$input20["var"],
      pipeline: "true",
      surveyclear: "true",
      method: m === null || m === void 0 || (_m$input21 = m.input) === null || _m$input21 === void 0 ? void 0 : _m$input21.method,
      usedefault: !(0, _util.isObjectEmpty)(pipelineObject) && Object.prototype.hasOwnProperty.call(pipelineObject, [m === null || m === void 0 || (_m$input22 = m.input) === null || _m$input22 === void 0 ? void 0 : _m$input22["var"]]) && pipelineObject[m === null || m === void 0 || (_m$input23 = m.input) === null || _m$input23 === void 0 ? void 0 : _m$input23["var"]] !== null ? pipelineObject[m === null || m === void 0 || (_m$input24 = m.input) === null || _m$input24 === void 0 ? void 0 : _m$input24["var"]] : '100'
    }))) : (m === null || m === void 0 || (_m$input25 = m.input) === null || _m$input25 === void 0 ? void 0 : _m$input25.type) === 'image' && ['leadImg', 'featureImg'].indexOf(m === null || m === void 0 || (_m$input26 = m.input) === null || _m$input26 === void 0 ? void 0 : _m$input26["var"]) > -1 ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(m === null || m === void 0 ? void 0 : m.className)
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        height: (_m$height = m === null || m === void 0 ? void 0 : m.height) !== null && _m$height !== void 0 ? _m$height : '200px',
        width: (_m$width = m === null || m === void 0 ? void 0 : m.width) !== null && _m$width !== void 0 ? _m$width : '200px'
      }
    }, resolveImg(m)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex gap-p2 ".concat(_SurveyModule["default"].pseudoButton),
      style: {
        alignItems: 'center',
        fontSize: '.8rem',
        marginTop: '.5rem'
      },
      onClick: addTempFile,
      modif: m === null || m === void 0 || (_m$input27 = m.input) === null || _m$input27 === void 0 ? void 0 : _m$input27["var"]
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "material-icons",
      style: {
        alignSelf: 'center'
      }
    }, "add"), /*#__PURE__*/_react["default"].createElement("div", null, m === null || m === void 0 ? void 0 : m.note)), /*#__PURE__*/_react["default"].createElement("input", {
      style: {
        display: 'none'
      },
      type: "file",
      onChange: handleNewFile,
      selectmodif: m.input["var"]
    })) : null));
  }) : null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "error",
    ref: currentError,
    style: {
      opacity: 0
    }
  }, errorLog[currentStage])), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex",
    style: {
      marginTop: '.5rem',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: _SurveyModule["default"].confirmButton,
    onClick: handleOptionClickConfirm,
    "goto": currentStageItem === null || currentStageItem === void 0 || (_currentStageItem$con2 = currentStageItem.confirm) === null || _currentStageItem$con2 === void 0 ? void 0 : _currentStageItem$con2["goto"],
    label: currentStageItem === null || currentStageItem === void 0 ? void 0 : currentStageItem.label,
    value: 'confirm',
    question: currentStageItem === null || currentStageItem === void 0 ? void 0 : currentStageItem.label,
    style: {
      opacity: currentStageItem !== null && currentStageItem !== void 0 && currentStageItem.confirm ? 1 : 0,
      transition: 0
    }
  }, currentStageItem !== null && currentStageItem !== void 0 && (_currentStageItem$con3 = currentStageItem.confirm) !== null && _currentStageItem$con3 !== void 0 && _currentStageItem$con3.label ? currentStageItem === null || currentStageItem === void 0 ? void 0 : currentStageItem.confirm.label : (currentStageItem === null || currentStageItem === void 0 || (_currentStageItem$con4 = currentStageItem.confirm) === null || _currentStageItem$con4 === void 0 ? void 0 : _currentStageItem$con4["goto"]) === 'end' ? 'Confirm' : 'Next'), backList && backList.length > 0 && !(currentStageItem !== null && currentStageItem !== void 0 && currentStageItem.submit) && !submitted ? /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleGoBack,
    className: "".concat(_SurveyModule["default"].backButton),
    style: {
      transition: 0
    }
  }, "Back") : null)), nextStageItem ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_SurveyModule["default"].nextItem, " ").concat(_SurveyModule["default"].item, " ").concat(animatingNext ? "".concat(_SurveyModule["default"].animatingNextNext) : null, " ").concat(nextStageItem === null || nextStageItem === void 0 ? void 0 : nextStageItem.className),
    style: {
      background: (_nextStageItem$bg = nextStageItem === null || nextStageItem === void 0 ? void 0 : nextStageItem.bg) !== null && _nextStageItem$bg !== void 0 ? _nextStageItem$bg : null,
      color: (_nextStageItem$color = nextStageItem === null || nextStageItem === void 0 ? void 0 : nextStageItem.color) !== null && _nextStageItem$color !== void 0 ? _nextStageItem$color : null
    }
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: _SurveyModule["default"].survey__title
  }, nextStageItem === null || nextStageItem === void 0 ? void 0 : nextStageItem.label), nextStageItem !== null && nextStageItem !== void 0 && nextStageItem.pipeline ? /*#__PURE__*/_react["default"].createElement("div", null) : (nextStageItem === null || nextStageItem === void 0 || (_nextStageItem$input = nextStageItem.input) === null || _nextStageItem$input === void 0 ? void 0 : _nextStageItem$input.type) === 'select' ? /*#__PURE__*/_react["default"].createElement("ul", {
    className: _SurveyModule["default"].survey__optionsList
  }, nextStageItem === null || nextStageItem === void 0 || (_nextStageItem$input2 = nextStageItem.input) === null || _nextStageItem$input2 === void 0 ? void 0 : _nextStageItem$input2.options.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: option.label
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: _SurveyModule["default"].survey__optionButton,
      onClick: handleOptionClick,
      "goto": option["goto"],
      label: option.label,
      question: nextStageItem === null || nextStageItem === void 0 ? void 0 : nextStageItem.label,
      value: option.label
    }, option.label));
  })) : (nextStageItem === null || nextStageItem === void 0 || (_nextStageItem$input3 = nextStageItem.input) === null || _nextStageItem$input3 === void 0 ? void 0 : _nextStageItem$input3.type) === 'number' ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
    type: "number",
    className: "".concat(_SurveyModule["default"].numberInput),
    defaultValue: nextStageItem === null || nextStageItem === void 0 || (_nextStageItem$input4 = nextStageItem.input) === null || _nextStageItem$input4 === void 0 ? void 0 : _nextStageItem$input4["default"]
  })) : (nextStageItem === null || nextStageItem === void 0 || (_nextStageItem$input5 = nextStageItem.input) === null || _nextStageItem$input5 === void 0 ? void 0 : _nextStageItem$input5.type) === 'text' ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactTextareaAutosize["default"], {
    type: "text",
    className: "".concat(_SurveyModule["default"].textInput),
    placeholder: nextStageItem === null || nextStageItem === void 0 || (_nextStageItem$input6 = nextStageItem.input) === null || _nextStageItem$input6 === void 0 ? void 0 : _nextStageItem$input6["default"],
    minRows: 3
  })) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex",
    style: {
      marginTop: '.5rem',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: _SurveyModule["default"].confirmButton,
    onClick: handleOptionClick,
    "goto": nextStageItem === null || nextStageItem === void 0 || (_nextStageItem$confir = nextStageItem.confirm) === null || _nextStageItem$confir === void 0 ? void 0 : _nextStageItem$confir["goto"],
    label: nextStageItem === null || nextStageItem === void 0 ? void 0 : nextStageItem.label,
    value: 'confirm',
    question: nextStageItem === null || nextStageItem === void 0 ? void 0 : nextStageItem.label,
    style: {
      opacity: nextStageItem !== null && nextStageItem !== void 0 && nextStageItem.confirm ? 1 : 0,
      transition: 0
    }
  }, nextStageItem !== null && nextStageItem !== void 0 && (_nextStageItem$confir2 = nextStageItem.confirm) !== null && _nextStageItem$confir2 !== void 0 && _nextStageItem$confir2.label ? nextStageItem === null || nextStageItem === void 0 ? void 0 : nextStageItem.confirm.label : (nextStageItem === null || nextStageItem === void 0 || (_nextStageItem$confir3 = nextStageItem.confirm) === null || _nextStageItem$confir3 === void 0 ? void 0 : _nextStageItem$confir3["goto"]) === 'end' ? 'Confirm' : 'Next'), backList && backList.length > 0 && !(nextStageItem !== null && nextStageItem !== void 0 && nextStageItem.submit) && !submitted ? /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleGoBack,
    className: "".concat(_SurveyModule["default"].backButton),
    style: {
      transition: 0
    }
  }, "Back") : null)) : null);
};
var _default = exports["default"] = Module;