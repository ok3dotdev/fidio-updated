"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _uuid = require("uuid");
var _SurveyModule = _interopRequireDefault(require("./Survey.module.scss"));
var _reactTextareaAutosize = _interopRequireDefault(require("react-textarea-autosize"));
var _mail = require("../utility/mail");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // Survey.js
var Module = function Module(props) {
  var _backStageItem$bg, _backStageItem$color, _backStageItem$input, _backStageItem$input2, _backStageItem$input3, _backStageItem$input4, _backStageItem$input5, _backStageItem$input6, _backStageItem$confir, _currentStageItem$bg, _currentStageItem$col, _currentStageItem$inp, _currentStageItem$inp2, _currentStageItem$inp3, _currentStageItem$inp4, _currentStageItem$inp5, _backStageItem$input7, _currentStageItem$con, _currentStageItem$con2, _nextStageItem$bg, _nextStageItem$color, _nextStageItem$input, _nextStageItem$input2, _nextStageItem$input3, _nextStageItem$input4, _nextStageItem$input5, _backStageItem$input8, _nextStageItem$confir;
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
  var _React$useState19 = _react["default"].useState(false),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    submitted = _React$useState20[0],
    setSubmitted = _React$useState20[1];
  var inputRef = _react["default"].useRef();
  var useData = props.survey;
  _react["default"].useEffect(function () {
    var _useData$stages;
    if (!currentStage && useData !== null && useData !== void 0 && (_useData$stages = useData.stages) !== null && _useData$stages !== void 0 && _useData$stages.index) {
      setCurrentStage('index');
    }
  }, [useData, currentStage]);
  var handleOptionClickConfirm = _react["default"].useCallback(function (e) {
    var _e$currentTarget, _e$currentTarget2;
    var _goto = e === null || e === void 0 || (_e$currentTarget = e.currentTarget) === null || _e$currentTarget === void 0 ? void 0 : _e$currentTarget.getAttribute('goto');
    var question = e === null || e === void 0 || (_e$currentTarget2 = e.currentTarget) === null || _e$currentTarget2 === void 0 ? void 0 : _e$currentTarget2.getAttribute('question');
    var value = inputRef.current.value;
    optionClick(_goto, question, value);
  });
  var handleOptionClick = _react["default"].useCallback(function (e) {
    var _e$currentTarget3, _e$currentTarget4, _e$currentTarget$getA, _e$currentTarget5;
    var _goto2 = e === null || e === void 0 || (_e$currentTarget3 = e.currentTarget) === null || _e$currentTarget3 === void 0 ? void 0 : _e$currentTarget3.getAttribute('goto');
    var question = e === null || e === void 0 || (_e$currentTarget4 = e.currentTarget) === null || _e$currentTarget4 === void 0 ? void 0 : _e$currentTarget4.getAttribute('question');
    var value = (_e$currentTarget$getA = e === null || e === void 0 || (_e$currentTarget5 = e.currentTarget) === null || _e$currentTarget5 === void 0 ? void 0 : _e$currentTarget5.getAttribute('value')) !== null && _e$currentTarget$getA !== void 0 ? _e$currentTarget$getA : e.currentTarget.value;
    optionClick(_goto2, question, value);
  });
  var optionClick = function optionClick(_goto3, question, value) {
    setNext(_goto3);
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
          var temp = answers;
          if (!temp[currentStage]) {
            temp[currentStage] = {};
          }
          temp[currentStage].question = question;
          temp[currentStage].answer = value;
          setAnswers(temp);
        }
        if (useData !== null && useData !== void 0 && (_useData$stages$_goto = useData.stages[_goto3]) !== null && _useData$stages$_goto !== void 0 && _useData$stages$_goto.input && inputRef !== null && inputRef !== void 0 && inputRef.current) {
          if (Object.prototype.hasOwnProperty.call(useData === null || useData === void 0 ? void 0 : useData.stages[_goto3].input, 'default')) {
            inputRef.current.value = useData.stages[_goto3].input["default"];
          }
          if (Object.prototype.hasOwnProperty.call(useData === null || useData === void 0 ? void 0 : useData.stages[_goto3].input, 'placeholder')) {
            inputRef.current.placeholder = useData.stages[_goto3].input.placeholder;
          }
        }
        setCurrentStage(_goto3);
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
          setCurrentStage(_next);
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
  var currentStageItem = useData === null || useData === void 0 ? void 0 : useData.stages[currentStage];
  var nextStageItem = useData === null || useData === void 0 ? void 0 : useData.stages[next];
  var backStageItem = useData === null || useData === void 0 ? void 0 : useData.stages[back];
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
          var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ans) {
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
            return _ref.apply(this, arguments);
          };
        }();
        f(answers); // Schedule outbound email back to Businesses admin
        setSubmitted(true);
      }
    }
  }, [currentStageItem, submitted]);
  var handleKeyDown = _react["default"].useCallback(function (e) {
    if (e) {
      if (e.keyCode === 13) {
        var _e$currentTarget6, _e$currentTarget7;
        e.preventDefault();
        var _goto4 = e === null || e === void 0 || (_e$currentTarget6 = e.currentTarget) === null || _e$currentTarget6 === void 0 ? void 0 : _e$currentTarget6.getAttribute('goto');
        var question = e === null || e === void 0 || (_e$currentTarget7 = e.currentTarget) === null || _e$currentTarget7 === void 0 ? void 0 : _e$currentTarget7.getAttribute('question');
        var value = inputRef.current.value;
        console.log(value, question, _goto4);
        optionClick(_goto4, question, value);
      }
    }
  });
  console.log(currentStage, answers, backList, next, submitted, props);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _SurveyModule["default"].survey__container,
    style: {
      height: props !== null && props !== void 0 && props.height ? "".concat(props.height, "px") : '100vh'
    }
  }, backStageItem ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_SurveyModule["default"].backItem, " ").concat(_SurveyModule["default"].item, " ").concat(animatingBack ? "".concat(_SurveyModule["default"].animatingBackBack) : null),
    style: {
      background: (_backStageItem$bg = backStageItem === null || backStageItem === void 0 ? void 0 : backStageItem.bg) !== null && _backStageItem$bg !== void 0 ? _backStageItem$bg : null,
      color: (_backStageItem$color = backStageItem === null || backStageItem === void 0 ? void 0 : backStageItem.color) !== null && _backStageItem$color !== void 0 ? _backStageItem$color : null
    }
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: _SurveyModule["default"].survey__title
  }, backStageItem === null || backStageItem === void 0 ? void 0 : backStageItem.label), backStageItem !== null && backStageItem !== void 0 && backStageItem.pipeline ? /*#__PURE__*/_react["default"].createElement("div", null, "Handle List Inputs Here") : (backStageItem === null || backStageItem === void 0 || (_backStageItem$input = backStageItem.input) === null || _backStageItem$input === void 0 ? void 0 : _backStageItem$input.type) === 'select' ? /*#__PURE__*/_react["default"].createElement("ul", {
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
  })) : null, backStageItem !== null && backStageItem !== void 0 && backStageItem.confirm ? /*#__PURE__*/_react["default"].createElement("button", {
    className: _SurveyModule["default"].survey__confirmButton,
    onClick: handleOptionClick,
    "goto": backStageItem === null || backStageItem === void 0 || (_backStageItem$confir = backStageItem.confirm) === null || _backStageItem$confir === void 0 ? void 0 : _backStageItem$confir["goto"],
    label: backStageItem === null || backStageItem === void 0 ? void 0 : backStageItem.label,
    value: 'confirm',
    question: backStageItem === null || backStageItem === void 0 ? void 0 : backStageItem.label
  }, "Confirm") : null, backList && backList.length > 0 && !submitted ? /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleGoBack,
    className: "".concat(_SurveyModule["default"].backButton)
  }, "Back") : null) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_SurveyModule["default"].currentItem, " ").concat(_SurveyModule["default"].item, " ").concat(animatingNext ? "".concat(_SurveyModule["default"].animatingNextCurrent) : null, " ").concat(animatingBack ? "".concat(_SurveyModule["default"].animatingBackCurrent) : null, " ").concat(keepCurrent ? "".concat(_SurveyModule["default"].keepCurrent, " ").concat(_SurveyModule["default"].backToOriginal) : null),
    style: {
      background: (_currentStageItem$bg = currentStageItem === null || currentStageItem === void 0 ? void 0 : currentStageItem.bg) !== null && _currentStageItem$bg !== void 0 ? _currentStageItem$bg : null,
      color: (_currentStageItem$col = currentStageItem === null || currentStageItem === void 0 ? void 0 : currentStageItem.color) !== null && _currentStageItem$col !== void 0 ? _currentStageItem$col : null
    }
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: _SurveyModule["default"].survey__title
  }, currentStageItem === null || currentStageItem === void 0 ? void 0 : currentStageItem.label), currentStageItem !== null && currentStageItem !== void 0 && currentStageItem.pipeline ? /*#__PURE__*/_react["default"].createElement("div", null, "Handle List Inputs Here") : (currentStageItem === null || currentStageItem === void 0 || (_currentStageItem$inp = currentStageItem.input) === null || _currentStageItem$inp === void 0 ? void 0 : _currentStageItem$inp.type) === 'select' ? /*#__PURE__*/_react["default"].createElement("ul", {
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
    placeholder: backStageItem === null || backStageItem === void 0 || (_backStageItem$input7 = backStageItem.input) === null || _backStageItem$input7 === void 0 ? void 0 : _backStageItem$input7["default"],
    minRows: 3,
    ref: inputRef,
    onKeyDown: handleKeyDown,
    "goto": currentStageItem === null || currentStageItem === void 0 || (_currentStageItem$con = currentStageItem.confirm) === null || _currentStageItem$con === void 0 ? void 0 : _currentStageItem$con["goto"],
    question: currentStageItem === null || currentStageItem === void 0 ? void 0 : currentStageItem.label
  })) : null, currentStageItem !== null && currentStageItem !== void 0 && currentStageItem.confirm ? /*#__PURE__*/_react["default"].createElement("button", {
    className: _SurveyModule["default"].survey__confirmButton,
    onClick: handleOptionClickConfirm,
    "goto": currentStageItem === null || currentStageItem === void 0 || (_currentStageItem$con2 = currentStageItem.confirm) === null || _currentStageItem$con2 === void 0 ? void 0 : _currentStageItem$con2["goto"],
    label: currentStageItem === null || currentStageItem === void 0 ? void 0 : currentStageItem.label,
    value: 'confirm',
    question: currentStageItem === null || currentStageItem === void 0 ? void 0 : currentStageItem.label
  }, "Confirm") : null, backList && backList.length > 0 && !(currentStageItem !== null && currentStageItem !== void 0 && currentStageItem.submit) && !submitted ? /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleGoBack,
    className: "".concat(_SurveyModule["default"].backButton)
  }, "Back") : null), nextStageItem ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_SurveyModule["default"].nextItem, " ").concat(_SurveyModule["default"].item, " ").concat(animatingNext ? "".concat(_SurveyModule["default"].animatingNextNext) : null),
    style: {
      background: (_nextStageItem$bg = nextStageItem === null || nextStageItem === void 0 ? void 0 : nextStageItem.bg) !== null && _nextStageItem$bg !== void 0 ? _nextStageItem$bg : null,
      color: (_nextStageItem$color = nextStageItem === null || nextStageItem === void 0 ? void 0 : nextStageItem.color) !== null && _nextStageItem$color !== void 0 ? _nextStageItem$color : null
    }
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: _SurveyModule["default"].survey__title
  }, nextStageItem === null || nextStageItem === void 0 ? void 0 : nextStageItem.label), nextStageItem !== null && nextStageItem !== void 0 && nextStageItem.pipeline ? /*#__PURE__*/_react["default"].createElement("div", null, "Handle List Inputs Here") : (nextStageItem === null || nextStageItem === void 0 || (_nextStageItem$input = nextStageItem.input) === null || _nextStageItem$input === void 0 ? void 0 : _nextStageItem$input.type) === 'select' ? /*#__PURE__*/_react["default"].createElement("ul", {
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
    placeholder: backStageItem === null || backStageItem === void 0 || (_backStageItem$input8 = backStageItem.input) === null || _backStageItem$input8 === void 0 ? void 0 : _backStageItem$input8["default"],
    minRows: 3
  })) : null, nextStageItem !== null && nextStageItem !== void 0 && nextStageItem.confirm ? /*#__PURE__*/_react["default"].createElement("button", {
    className: _SurveyModule["default"].survey__confirmButton,
    onClick: handleOptionClick,
    "goto": nextStageItem === null || nextStageItem === void 0 || (_nextStageItem$confir = nextStageItem.confirm) === null || _nextStageItem$confir === void 0 ? void 0 : _nextStageItem$confir["goto"],
    label: nextStageItem === null || nextStageItem === void 0 ? void 0 : nextStageItem.label,
    value: 'confirm',
    question: nextStageItem === null || nextStageItem === void 0 ? void 0 : nextStageItem.label
  }, "Confirm") : null, backList && backList.length > 0 && !(nextStageItem !== null && nextStageItem !== void 0 && nextStageItem.submit) && !submitted ? /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleGoBack,
    className: "".concat(_SurveyModule["default"].backButton)
  }, "Back") : null) : null);
};
var _default = exports["default"] = Module;