"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _ecommerce = require("../../utility/ecommerce");
var _utility = require("../../utility/utility");
var _util = require("../../util");
var _AllInclusive = _interopRequireDefault(require("@mui/icons-material/AllInclusive"));
var _ConfirmationNumber = _interopRequireDefault(require("@mui/icons-material/ConfirmationNumber"));
var _Stadium = _interopRequireDefault(require("@mui/icons-material/Stadium"));
var _ = require(".");
var _ProductImageManagerModule = _interopRequireDefault(require("./ProductImageManager.module.scss"));
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
var allowedTypes = ['image/jpeg', 'image/png'];
var Module = function Module(props) {
  var _props$editing, _props$editing$detail, _props$editing2, _props$product, _props$editing3, _props$currentDefineP, _props$currentDefineP2, _props$currentDefineP3, _props$priceInput, _props$priceInput$cur, _props$currentDefineP4, _props$currentDefineP5, _props$priceInput2, _props$priceInput2$cu, _ref3, _props$currentDefineP6, _props$currentDefineP7, _isEditing$meta, _props$currentDefineP8, _props$currentDefineP9, _currentPrice$symbol, _currentPrice$price, _currentPrice$currenc;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState({}),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    selectedStyle = _React$useState4[0],
    setSelectedStyle = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(null),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    currentOption = _React$useState6[0],
    setCurrentOption = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(null),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    warning = _React$useState8[0],
    setWarning = _React$useState8[1];
  var optionSelect = _react["default"].useRef();
  var styleSelect = _react["default"].useRef();
  var isTicketRef = _react["default"].useRef();
  var isLivestreamRef = _react["default"].useRef();
  var _React$useState9 = _react["default"].useState(null),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    uploadingForLineupId = _React$useState10[0],
    setUploadingForLineupId = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(null),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    currentLineupId = _React$useState12[0],
    setCurrentLineupId = _React$useState12[1];
  var _React$useState13 = _react["default"].useState(false),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    isSettingCurrency = _React$useState14[0],
    setIsSettingCurrency = _React$useState14[1];
  var lineupIdRef = _react["default"].useRef();
  var lineupNameRef = _react["default"].useRef();
  var lineupDescriptionRef = _react["default"].useRef();
  var lineupTimeRef = _react["default"].useRef();
  var currentCurrencyRef = _react["default"].useRef();
  var currency = '$';
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      props.setDefaultPriceHtml();
      setComponentDidMount(true);
    }
  }, [componentDidMount, setComponentDidMount, props.product]);
  (0, _ecommerce.resolveDefaultStyle)(props.product, selectedStyle, setSelectedStyle, currentOption, setCurrentOption);
  var updateLineup = _react["default"].useCallback(function (e) {
    if (e.currentTarget) {
      if (e.currentTarget.getAttribute('option')) {
        var temp = _objectSpread({}, props.product.detailmeta);
        if (e.currentTarget.getAttribute('option') === 'add') {
          if (temp.lineup && temp.lineup.length < 10) {
            temp.lineup.push(props.defaultLineup());
            props.setCurrentLineupEditing(temp.lineup.length - 1);
            setCurrentLineupId(temp.lineup[temp.lineup.length - 1].id);
            lineupNameRef.current.value = '';
            lineupDescriptionRef.current.value = '';
            lineupTimeRef.current.value = null;
          }
        } else if (e.currentTarget.getAttribute('option') === 'remove') {
          // TODO Must update to delete at current index and delete value on server
          if (temp.lineup && temp.lineup.length > 0) {
            temp.lineup.pop();
            props.setCurrentLineupEditing(temp.lineup.length - 1 > -1 ? temp.lineup.length - 1 : null);
            if (temp.lineup.length !== 0) {
              setCurrentLineupId(temp.lineup[temp.lineup.length - 1].id);
            }
            lineupNameRef.current.value = '';
            lineupDescriptionRef.current.value = '';
            lineupTimeRef.current.value = null;
          }
        } else if (e.currentTarget.getAttribute('option') === 'setSelected') {
          var index = e.currentTarget.getAttribute('index');
          if (!isNaN(index)) {
            props.setCurrentLineupEditing(index);
            setCurrentLineupId(temp.lineup[index].id);
            lineupNameRef.current.value = temp.lineup[index].title;
            lineupDescriptionRef.current.value = temp.lineup[index].description;
            lineupTimeRef.current.value = temp.lineup[index].time;
          }
        }
      }
    }
  });
  var setSelectedStyleHandler = _react["default"].useCallback(function (e) {
    if (e && e.currentTarget) {
      if (e.currentTarget.value) {
        setSelectedStyle(e.currentTarget.value);
        var currentStyleObject = props.product.styles.find(function (m) {
          return m.sid === e.currentTarget.value;
        });
        console.log(currentStyleObject);
        if (currentStyleObject && currentStyleObject.option && currentStyleObject.option[0] && currentStyleObject.option[0].sid) {
          setCurrentOption(currentStyleObject.option[0].sid);
        }
      }
    }
  });
  var changeCurrentOption = _react["default"].useCallback(function (e) {
    setCurrentOption(e.currentTarget.value);
  });
  var handleEdit = _react["default"].useCallback(function (e) {
    console.log(e, 'edit');
    if (e && e.currentTarget && e.currentTarget.getAttribute && e.currentTarget.getAttribute('modif')) {
      var modif = e.currentTarget.getAttribute('modif');
      if (modif === 'edit' && props.handleEdit) {
        props.handleEdit(props.product);
        setTimeout(function () {
          props.nameRef.current.value = props.product.name;
          if (props.product.styles && props.product.styles[0]) {
            props.styleInput.current.value = props.product.styles[0].style;
            props.setEditingSelectedStyle(props.product.styles[0].sid);
            setTimeout(function () {
              console.log(props, props.product.styles[0].option && props.product.styles[0].option[0]);
              if (props.product.styles[0].option && props.product.styles[0].option[0]) {
                if (props.optionInput.current) {
                  props.optionInput.current.value = props.product.styles[0].option[0].option;
                }
                props.setEditingSelectedOption(props.product.styles[0].option[0].sid);
                props.quantityInput.current.value = props.product.styles[0].option[0].quantity;
                props.priceInput.current.value = props.product.styles[0].price;
                console.log(props.product.detailmeta);
                if (props.product.detailmeta) {
                  isTicketRef.current.value = props.product.detailmeta.ticket;
                  isLivestreamRef.current.value = props.product.detailmeta.livestream;
                }
                props.setEditingOptionsMeta(props.product.detailmeta);
              }
            }, 250);
          }
        }, 250);
      }
    }
  });
  var handleFireGlobalEvent = _react["default"].useCallback( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            (0, _utility.fireGlobalEvent)(e, props._LocalEventEmitter);
          case 1:
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
    var useCur = props.currentLineupEditing;
    if (props.currentLineupEditing === null) {
      props.setCurrentLineupEditing(0);
      useCur = 0;
    }
    if (props.editing && props.editing.detailmeta && props.editing.detailmeta.lineup && props.editing.detailmeta.lineup.length > 0 && props.editing.detailmeta.lineup[useCur]) {
      if (lineupNameRef.current) {
        setCurrentLineupId(props.editing.detailmeta.lineup[useCur].id);
        lineupNameRef.current.value = props.editing.detailmeta.lineup[useCur].title;
        lineupDescriptionRef.current.value = props.editing.detailmeta.lineup[useCur].description;
        lineupTimeRef.current.value = props.editing.detailmeta.lineup[useCur].time;
      }
    }
  }, [props.currentLineupEditing, props.editing.id, props === null || props === void 0 ? void 0 : (_props$editing = props.editing) === null || _props$editing === void 0 ? void 0 : (_props$editing$detail = _props$editing.detailmeta) === null || _props$editing$detail === void 0 ? void 0 : _props$editing$detail.lineup, lineupNameRef.current, lineupDescriptionRef.current, lineupTimeRef.current]);
  var fileInput = _react["default"].useRef();
  var handleUploadImage = _react["default"].useCallback(function (e) {
    setWarning(null);
    setUploadingForLineupId(e.currentTarget.getAttribute('lineupid'));
    if (fileInput.current) {
      fileInput.current.click(); // Prompt file upload
    }
  });

  var handleNewFile = _react["default"].useCallback(function (e) {
    try {
      if (e && e.target && e.target.files) {
        var files = e.target.files;
        if (files && files.length > 0) {
          var filesRenamed = Array.from(files).slice(0, files.length > 1 ? 1 : files.length).filter(function (m) {
            return m.type && allowedTypes.indexOf(m.type) > -1;
          }).map(function (m) {
            var blob = m.slice(0, m.size, m.type);
            var ext = allowedTypes[allowedTypes.indexOf(m.type)].match(/\/([a-zA-Z0-9].*)/)[1];
            return new File([blob], "".concat((0, _uuid.v4)(), ".").concat(ext), {
              type: m.type
            });
          });
          var f = /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var formData, imgNames, data, _f;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(!props.fetchBusy && props.apiUrl && props.domainKey && props._loggedIn && props.editing)) {
                      _context2.next = 15;
                      break;
                    }
                    formData = new FormData();
                    imgNames = [];
                    if (filesRenamed) {
                      filesRenamed.forEach(function (img) {
                        formData.append("image", img);
                        imgNames.push(img.name);
                      });
                      formData.append('imgNames', JSON.stringify(imgNames));
                    }
                    formData.append('domainKey', props.domainKey);
                    formData.append('hash', props._loggedIn.hash);
                    formData.append('identifier', props._loggedIn.identifier);
                    formData.append('product', props.editing.id);
                    formData.append('detailmeta', JSON.stringify(props.editing.detailmeta));
                    formData.append('lineupid', uploadingForLineupId);
                    if (props.setFetchBusy) {
                      props.setFetchBusy(true);
                      setTimeout(function () {
                        props.setFetchBusy(false);
                      }, 10000);
                    }
                    _context2.next = 13;
                    return (0, _ecommerce.doUploadImageForLineupParticipant)(props.apiUrl, props.domainKey, props.editing.id, props._loggedIn, formData);
                  case 13:
                    data = _context2.sent;
                    if (data && data.product && data.product.products) {
                      fileInput.current.value = null;
                      if (props.setFetchBusy) {
                        props.setFetchBusy(false);
                      }
                      if (props.setShopProducts && props.setCombinedFeed) {
                        console.log('Set Combined Feed', data.product.products, props.setCombinedFeed);
                        props.setShopProducts(data.product.products);
                        props.setCombinedFeed(data.product.products);
                        if (props.setEditing) {
                          _f = data.product.products.find(function (m) {
                            return m.id === props.editing.id;
                          });
                          if (_f) {
                            props.setEditing(_f);
                          }
                        }
                      }
                    } else {
                      fileInput.current = null;
                    }
                  case 15:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }));
            return function f() {
              return _ref2.apply(this, arguments);
            };
          }();
          f();
        }
      }
    } catch (err) {
      console.log(err);
      setWarning({
        message: 'There was an issue uploading images'
      });
    }
  });
  var handleSetIsSettingCurrency = _react["default"].useCallback(function (e) {
    if (isSettingCurrency) {
      setIsSettingCurrency(false);
      return false;
    }
    setIsSettingCurrency(true);
    return true;
  });
  var handleChangeCurrentCurrency = _react["default"].useCallback(function (e) {
    var v = props.changeCurrentCurrency(props.editing, e.currentTarget.value);
    if (v) {
      currentCurrencyRef.current.innerHTML = v;
      var f = Object.entries(props.regionsData).find(function (m) {
        return m[1].currency === v;
      });
      if (f && f[1]) {
        props.setCurrentDefinePriceCurrency(f[1]);
        props.setDefaultPriceHtml(f[1]);
      }
    }
  });
  var validStyleObject = selectedStyle && props.product && props.product.styles && props.product.styles.find(function (m) {
    return m.sid === selectedStyle;
  }) ? props.product.styles.find(function (m) {
    return m.sid === selectedStyle;
  }) : null;
  var validOptionObject = validStyleObject && validStyleObject.option ? currentOption ? validStyleObject.option.find(function (m) {
    return m.sid === currentOption;
  }) : validStyleObject.option[0] ? validStyleObject.option[0] : null : null;

  // console.log(props.product, props._loggedIn, currentOption, selectedStyle, props)
  var isAdmin = props.product && props.product.owner && props._loggedIn && props._loggedIn.identifier && props._loggedIn.identifier === props.product.owner;
  console.log(props.product, props.editingOptionsMeta, selectedStyle, currency, props.currentDefinePriceCurrency, props.priceInput, validStyleObject);
  var currentPrice = _react["default"].useMemo(function () {
    return (0, _ecommerce.resolveRegionBasedPrice)(props, validStyleObject);
  }, [props.product, validStyleObject, currency]);
  var isEditing = (props === null || props === void 0 ? void 0 : (_props$editing2 = props.editing) === null || _props$editing2 === void 0 ? void 0 : _props$editing2.id) && (props === null || props === void 0 ? void 0 : (_props$product = props.product) === null || _props$product === void 0 ? void 0 : _props$product.id) && props.editing.id === props.product.id;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(isEditing ? _ProductImageManagerModule["default"].currentlyEditingProductContainer : 'Product_col', " ").concat(props.className),
    id: props.product && props.product.id ? props.product.id : '',
    selectedstyle: validStyleObject !== null && validStyleObject !== void 0 && validStyleObject.sid ? validStyleObject.sid : '',
    currentoption: validOptionObject !== null && validOptionObject !== void 0 && validOptionObject.sid ? validOptionObject.sid : ''
  }, isEditing ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].currentEditingProductInnerContainer)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].currentlyEditingProductContent)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].productImgContainer, " ").concat(!isEditing ? 'Product_img_container' : '', " Product_img_container_large")
  }, /*#__PURE__*/_react["default"].createElement(_.ProductImageManager, props)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].productMetaContainer, " Product_meta_container")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].currentEditingProductCommandBar, " ").concat(_ProductImageManagerModule["default"].commandBar)
  }, /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: props.handleCancelProduct,
    modif: "save"
  }, props.editing["new"] ? 'Abandon' : 'Cancel'))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Name of Product",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    name: "name",
    placeholder: "Product Name",
    style: {
      fontWeight: '600',
      width: '100%'
    },
    onChange: props.setCurrentName,
    ref: props.nameRef,
    modif: "product_name",
    defaultValue: props === null || props === void 0 ? void 0 : (_props$editing3 = props.editing) === null || _props$editing3 === void 0 ? void 0 : _props$editing3.name
  })), props.pageError.location && props.pageError.location === 'product_name' ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "error"
  }, props.pageError.message) : null), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "If your product has multiple styles, set them here. A style should be an alternate design or color for a single product that you want to track as single product. For example you might have white, black, grey for t-shirts as individual styles.",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: 600
    }
  }, "Style:"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown_input"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    ref: props.styleInput,
    onChange: props.setCurrentStyleName
  }), /*#__PURE__*/_react["default"].createElement("select", {
    id: props.editing.id + '_styles',
    name: props.editing.id + '_styles',
    style: {
      width: '100%'
    },
    onChange: props.changeCurrentStyle
  }, props.resolveStyles(props.editing).map(function (style, i) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      value: style.sid,
      className: "style_option",
      key: i
    }, style.style);
  }))))), props.selectedStyle && props.selectedStyle.option.length > 0 && props.selectedStyle.option[0] && Object.hasOwnProperty.call(props.selectedStyle.option[0], 'option') ? /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "If your product has options, set them here. An option should be a sizing or format choice that exists for all or most styles. For example you might have sizes XS, S, M, L, XL or OS as individual options per style.",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: 600
    }
  }, "Option:"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown_input"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    ref: props.optionInput,
    onChange: props.setCurrentOptionName
  }), /*#__PURE__*/_react["default"].createElement("select", {
    id: props.editing.id + '_options',
    name: props.editing.id + '_options',
    style: {
      width: '100%'
    },
    onChange: props.changeCurrentOption,
    ref: props.optionSelect
  }, props.editing.styles.find(function (m) {
    return m.sid === props.editingSelectedStyle;
  }).option.map(function (option, i) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      value: option.sid,
      className: "option_option",
      key: i
    }, option.option);
  }))))) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Set the price for the currently selected Style"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: 600
    }
  }, (_props$currentDefineP = (_props$currentDefineP2 = props.currentDefinePriceCurrency) === null || _props$currentDefineP2 === void 0 ? void 0 : _props$currentDefineP2.symbol) !== null && _props$currentDefineP !== void 0 ? _props$currentDefineP : '$')), /*#__PURE__*/_react["default"].createElement("input", {
    type: "currency",
    style: {
      width: '100%'
    },
    defaultValue: "1.00",
    ref: props.priceInput,
    onChange: props.setCurrentPrice
  }), validStyleObject && ((_props$currentDefineP3 = props.currentDefinePriceCurrency) === null || _props$currentDefineP3 === void 0 ? void 0 : _props$currentDefineP3.currency) === 'USD' && (validStyleObject === null || validStyleObject === void 0 ? void 0 : validStyleObject.price) != (props === null || props === void 0 ? void 0 : (_props$priceInput = props.priceInput) === null || _props$priceInput === void 0 ? void 0 : (_props$priceInput$cur = _props$priceInput.current) === null || _props$priceInput$cur === void 0 ? void 0 : _props$priceInput$cur.value) || ((_props$currentDefineP4 = props.currentDefinePriceCurrency) === null || _props$currentDefineP4 === void 0 ? void 0 : _props$currentDefineP4.currency) !== 'USD' && (!validStyleObject.priceTable || validStyleObject.priceTable && !validStyleObject.priceTable[props.currentDefinePriceCurrency.currency] || props !== null && props !== void 0 && (_props$currentDefineP5 = props.currentDefinePriceCurrency) !== null && _props$currentDefineP5 !== void 0 && _props$currentDefineP5.currency && validStyleObject.priceTable && Object.prototype.hasOwnProperty.call(validStyleObject.priceTable, props.currentDefinePriceCurrency.currency) && validStyleObject.priceTable[props.currentDefinePriceCurrency.currency] != props.priceInput.current.value) ? /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "The price displayed is currently not set for this product style. Click here to set it"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: props.setCurrentPrice,
    value: (_props$priceInput2 = props.priceInput) === null || _props$priceInput2 === void 0 ? void 0 : (_props$priceInput2$cu = _props$priceInput2.current) === null || _props$priceInput2$cu === void 0 ? void 0 : _props$priceInput2$cu.value,
    style: {
      whiteSpace: 'nowrap'
    }
  }, "Set Price")) : null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "You can set pricing in multiple currencies. Although the value you keep selected here will be the primary currency. Use the currency selector to choose a currency to begin setting prices in the respective currency. Countries that users reside in for which you have not set a currency will be presented the closest relevant currency you have defined a pricepoint in"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].currencyLabel, " ").concat(isSettingCurrency ? "".concat(_ProductImageManagerModule["default"].currencyLabelActive) : null),
    onClick: handleSetIsSettingCurrency,
    ref: currentCurrencyRef
  }, (_ref3 = (_props$currentDefineP6 = (_props$currentDefineP7 = props.currentDefinePriceCurrency) === null || _props$currentDefineP7 === void 0 ? void 0 : _props$currentDefineP7.currency) !== null && _props$currentDefineP6 !== void 0 ? _props$currentDefineP6 : isEditing === null || isEditing === void 0 ? void 0 : (_isEditing$meta = isEditing.meta) === null || _isEditing$meta === void 0 ? void 0 : _isEditing$meta.currency) !== null && _ref3 !== void 0 ? _ref3 : 'USD')), isSettingCurrency ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].setCurrencyExternalContainer)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].setCurrencyContainer)
  }, /*#__PURE__*/_react["default"].createElement("select", {
    id: props.editing.id + '_setCurrency',
    name: props.editing.id + '_setCurrency',
    style: {
      width: '100%'
    },
    onChange: handleChangeCurrentCurrency,
    ref: props.setCurrencySelect,
    defaultValue: (_props$currentDefineP8 = (_props$currentDefineP9 = props.currentDefinePriceCurrency) === null || _props$currentDefineP9 === void 0 ? void 0 : _props$currentDefineP9.currency) !== null && _props$currentDefineP8 !== void 0 ? _props$currentDefineP8 : 'USD'
  }, props !== null && props !== void 0 && props.regionsData ? Object.entries(props.regionsData).map(function (m) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      className: "".concat(_ProductImageManagerModule["default"].setCurrencyOption, " ").concat(m[1].currency !== 'USD' && validStyleObject !== null && validStyleObject !== void 0 && validStyleObject.priceTable && Object.prototype.hasOwnProperty.call(validStyleObject.priceTable, m[1].currency) ? _ProductImageManagerModule["default"].currencyOptionUsed : null, " ").concat(m[1].currency === 'USD' ? _ProductImageManagerModule["default"].currencyOptionUsed : null),
      value: m[1].currency
    }, /*#__PURE__*/_react["default"].createElement("div", null, m[1].currency), /*#__PURE__*/_react["default"].createElement("div", null, "\xA0"), /*#__PURE__*/_react["default"].createElement("div", null, m[1].name), /*#__PURE__*/_react["default"].createElement("div", null, "\xA0"), /*#__PURE__*/_react["default"].createElement("div", null, m[1].symbol));
  }) : null))) : null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Set the quantity for the currently selected Style & Option combo"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: 600,
      display: props.selectedOption && props.selectedOption.quantity && props.selectedOption.quantity === 10000000 ? 'none' : 'block'
    }
  }, "Qty")), /*#__PURE__*/_react["default"].createElement("input", {
    type: "number",
    style: {
      width: '100%',
      display: props.selectedOption && props.selectedOption.quantity && props.selectedOption.quantity === 10000000 ? 'none' : 'block'
    },
    defaultValue: "1",
    ref: props.quantityInput,
    onChange: props.setCurrentQuantity
  }), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Infinite stock"
  }, /*#__PURE__*/_react["default"].createElement(_AllInclusive["default"], {
    style: {
      width: '15px'
    }
  })), /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    style: {
      margin: 0
    },
    onChange: props.setInfinity,
    checked: props.selectedOption && props.selectedOption.quantity && props.selectedOption.quantity === 10000000
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2 Product_admin_choice_container"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: props.addStyle
  }, "Add Style"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: props.addOption
  }, "Add Option")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      alignItems: 'center',
      height: '18px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Set the product type"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: 600,
      paddingTop: '.2rem'
    }
  }, "Type: ")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      fontSize: '.8rem',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "radio",
    id: "virtual",
    name: "fav_language",
    value: "virtual",
    defaultChecked: true,
    onChange: props.onProductTypeChange
  }), /*#__PURE__*/_react["default"].createElement("label", {
    "for": "virtual"
  }, "Virtual"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "radio",
    id: "physical",
    name: "fav_language",
    value: "physical",
    onChange: props.onProductTypeChange
  }), /*#__PURE__*/_react["default"].createElement("label", {
    "for": "physical"
  }, "Physical"))), props.product.detailmeta && props.product.detailmeta.productType === 'virtual' ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2 promptContainer",
    style: {
      alignItems: 'center',
      height: '20px',
      borderRadius: '.5rem',
      margin: '.25rem 0'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Ticketed Products offer universally unique ids that are unique across the product being sold and can be stamped onto Virtual Ticket Images",
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    },
    placement: "bottom"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem'
    }
  }, "Is this a ticket?"), /*#__PURE__*/_react["default"].createElement(_ConfirmationNumber["default"], {
    style: {
      width: '15px'
    }
  })), /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    style: {
      margin: 0
    },
    value: props.product.detailmeta.ticket,
    defaultChecked: props.product.detailmeta.ticket,
    onChange: props.setOptionsMetaData,
    option: "ticket",
    ref: isTicketRef
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "promptContainer",
    style: {
      borderRadius: '.5rem',
      margin: '.25rem 0'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      alignItems: 'center',
      height: '20px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "You can use a date to authorize all users that purchase this ticket for access to your livestreams on that day. Or you can use a tag that you must include in the livestream tags field when you create it. Please use this if you want to put your livestream behind this paywalled purchase",
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    },
    placement: "bottom"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem'
    }
  }, "Is this for a livestream?"), /*#__PURE__*/_react["default"].createElement(_Stadium["default"], {
    style: {
      width: '15px'
    }
  })), /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    style: {
      margin: 0
    },
    value: props.product.detailmeta.livestream,
    defaultChecked: props.product.detailmeta.livestream,
    onChange: props.setOptionsMetaData,
    option: "livestream",
    ref: isLivestreamRef
  })), props.product.detailmeta.livestream ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      paddingBottom: '.25rem'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Enter dates or words for matching authorization. Enter dates in the following format MON-DD-YYYY-HH:MM or they will not be parsed as dates. Time must be input in 24 H military time. Values that do not match dates will be parsed as tags that can be added to livestreams. Any matches will authorize viewership of the stream for purchases of this ticket",
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
    placeholder: "Date in DD/MM/YY format or a tag",
    onInput: props.setOptionsMetaData,
    option: "livestreamDef",
    option2: "input",
    defaultValue: props.product.detailmeta.livestreamDef.input
  })), props.product.detailmeta.livestreamDef.dates.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "tagContainer",
    style: {
      marginTop: '.25rem'
    }
  }, props.product.detailmeta.livestreamDef.dates.map(function (d) {
    return d !== '' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "tagItem"
    }, d ? (0, _util.getFormattedDate)(d, {
      pretty: true
    }) : '') : /*#__PURE__*/_react["default"].createElement("div", null);
  })) : /*#__PURE__*/_react["default"].createElement("div", null), props.product.detailmeta.livestreamDef.tags.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "tagContainer",
    style: {
      marginTop: '.25rem'
    }
  }, props.product.detailmeta.livestreamDef.tags.map(function (d) {
    return d !== '' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "tagItem"
    }, d) : /*#__PURE__*/_react["default"].createElement("div", null);
  })) : /*#__PURE__*/_react["default"].createElement("div", null)) : null, props.product.detailmeta.ticket ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem'
    }
  }, "Date for Event"), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Enter dates in the following format MON-DD-YYYY-HH:MM or they will not be parsed as dates. Time must be input in 24 H military time. Values that do not match dates will be parsed as tags that can be added to livestreams. Any matches will authorize viewership of the stream for purchases of this ticket",
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
    placeholder: "Date in MON-DD-YYYY-HH:MM format. If the ticket does not have an event date leave empty",
    onInput: props.setOptionsMetaData,
    option: "eventDateDef",
    option2: "input",
    defaultValue: props.product.detailmeta.eventDateDef.input
  })), props.product.detailmeta.eventDateDef.dates.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "tagContainer",
    style: {
      marginTop: '.25rem'
    }
  }, props.product.detailmeta.eventDateDef.dates.map(function (d) {
    return d !== '' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "tagItem"
    }, d ? (0, _util.getFormattedDate)(d, {
      pretty: true
    }) : '') : /*#__PURE__*/_react["default"].createElement("div", null);
  })) : /*#__PURE__*/_react["default"].createElement("div", null)) : null, props.product.detailmeta.livestream ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: '#222222',
      marginTop: '.25rem',
      marginBottom: '.25rem',
      borderRadius: '.25rem',
      padding: '.25rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: '600'
    }
  }, "Lineup"), props.product.detailmeta.lineup || !props.product.detailmeta.lineup ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.6rem'
    },
    ref: lineupIdRef
  }, currentLineupId !== null && currentLineupId !== void 0 ? currentLineupId : ''), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Enter participants name",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: "Name",
    style: {
      fontSize: '.8rem',
      width: '100%'
    },
    onInput: props.setOptionsMetaData,
    option: "lineupTemp",
    option2: "title",
    ref: lineupNameRef
  })), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Optional: Enter description of participant",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: "Description",
    style: {
      fontSize: '.8rem',
      width: '100%'
    },
    onInput: props.setOptionsMetaData,
    option: "lineupTemp",
    option2: "description",
    ref: lineupDescriptionRef
  })), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Optional: Enter expected time for lineup participant to be performing",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "time",
    placeholder: "Time",
    style: {
      fontSize: '.8rem',
      width: '100%'
    },
    onInput: props.setOptionsMetaData,
    option: "lineupTemp",
    option2: "time",
    ref: lineupTimeRef
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    }
  }, props.product.detailmeta.lineup && props.product.detailmeta.lineup.length < 10 && props.product.detailmeta.lineup.length > 0 ? /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Add another Lineup Participant",
    placement: "bottom"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      width: '100%'
    },
    onClick: updateLineup,
    option: "add"
  }, "Add")) : null, props.product.detailmeta.lineup && props.product.detailmeta.lineup[props.currentLineupEditing] ? /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Remove this Lineup Participant",
    placement: "bottom"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      width: '100%'
    },
    onClick: updateLineup,
    option: "remove"
  }, "Remove")) : null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      overflowX: 'auto',
      overflowY: 'hidden',
      marginTop: '.125rem'
    }
  }, props.product.detailmeta.lineup && props.product.detailmeta.lineup.map ? props.product.detailmeta.lineup.map(function (m, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "lineupItem_editing ".concat(m.id === currentLineupId ? 'lineupItem_current' : ''),
      style: {
        maxWidth: '75px'
      },
      onClick: updateLineup,
      option: 'setSelected',
      index: i,
      key: i
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        fontSize: '.7rem',
        fontWeight: '600',
        overflowWrap: 'anywhere'
      }
    }, m.title !== '' ? m.title : /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        opacity: '.7'
      }
    }, "Participant")), /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        marginTop: '.125rem'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "ProductImageManager_container",
      style: {
        position: 'relative',
        width: '68px',
        height: '68px'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_ProductImageManagerModule["default"].productImageListThumbnailContainer),
      style: {
        backgroundImage: "url(".concat(props.cdn["static"], "/").concat(m.image, ")"),
        height: '68px',
        backgroundSize: 'cover',
        borderRadius: '1rem'
      }
    }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
      title: "Click here to upload an image for your lineup participant",
      placement: "bottom"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_ProductImageManagerModule["default"].changeImageButtonSmall, " image material-icons"),
      onClick: handleUploadImage,
      lineupid: m.id
    }, "image")), /*#__PURE__*/_react["default"].createElement("img", {
      src: "".concat((0, _ecommerce.resolveImg)(null)),
      className: "Product_img",
      style: {
        width: '68px',
        height: '68px',
        borderRadius: '1rem',
        opacity: m.image ? 0 : 1
      }
    })))), m.time ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "lineupItem_time",
      style: {
        fontSize: '1rem'
      }
    }, (0, _util.getFormattedTime)(m.time, {
      simple: true
    })) : null);
  }) : null)) : null) : null), warning && warning.message ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].warning)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].warningItemContainer)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].warningItem)
  }, warning.message))) : null, /*#__PURE__*/_react["default"].createElement("input", {
    type: "file",
    style: {
      display: 'none'
    },
    ref: fileInput,
    onChange: handleNewFile
  })) : /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2 Product_admin_choice_container",
    style: {
      marginTop: '.125rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: props.handlePublishProduct,
    modif: "publish",
    existing: "true"
  }, "Publish"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: props.handlePublishProduct,
    modif: "save",
    existing: "true"
  }, "Save"), props.editing ? /*#__PURE__*/_react["default"].createElement("button", {
    onClick: props.handleCancelProduct,
    modif: "save"
  }, props.editing["new"] ? 'Abandon' : 'Cancel') : null)))) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Product_img_container"
  }, /*#__PURE__*/_react["default"].createElement(_.ProductImageManager, {
    cdn: props.cdn,
    product: props.product,
    _loggedIn: props._loggedIn,
    domainKey: props.domainKey,
    apiUrl: props.apiUrl,
    setShopProducts: props.setShopProducts,
    setCombinedFeed: props.setCombinedFeed
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "Product_meta_container"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, props.product.name)), props.product && props.product.styles && props.product.styles.length > 1 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("select", {
    id: props.product.id + '_styles',
    name: props.product.id + '_styles',
    style: {
      width: '100%'
    },
    onChange: setSelectedStyleHandler,
    ref: styleSelect
  }, (0, _ecommerce.resolveStyles)(props.product).map(function (style, i) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      value: style.sid,
      className: "style_option",
      key: i
    }, style.style);
  }))) : null, validStyleObject && validStyleObject.option && validStyleObject.option[0] && validStyleObject.option[0].option // Only show if base option is named (non default option for tracking quantity)
  ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown_input"
  }, /*#__PURE__*/_react["default"].createElement("select", {
    id: props.product.id + '_options',
    name: props.product.id + '_options',
    style: {
      width: '100%'
    },
    onChange: changeCurrentOption,
    ref: optionSelect
  }, props.product.styles.find(function (m) {
    return m.sid === selectedStyle;
  }).option.map(function (option, i) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      value: option.sid,
      className: "option_option",
      key: i
    }, option.option);
  })))) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: 600
    }
  }, /*#__PURE__*/_react["default"].createElement("span", null, (_currentPrice$symbol = currentPrice === null || currentPrice === void 0 ? void 0 : currentPrice.symbol) !== null && _currentPrice$symbol !== void 0 ? _currentPrice$symbol : null), /*#__PURE__*/_react["default"].createElement("span", null, (_currentPrice$price = currentPrice === null || currentPrice === void 0 ? void 0 : currentPrice.price) !== null && _currentPrice$price !== void 0 ? _currentPrice$price : null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "Product_CurrencyLabel",
    style: {
      fontSize: '.7rem',
      fontWeight: 600,
      background: 'rgba(150, 150, 150, .5)',
      padding: '.075rem',
      borderRadius: '.25rem'
    }
  }, (_currentPrice$currenc = currentPrice === null || currentPrice === void 0 ? void 0 : currentPrice.currency) !== null && _currentPrice$currenc !== void 0 ? _currentPrice$currenc : 'USD')), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'none',
      fontSize: '.8rem',
      fontWeight: 600
    }
  }, validOptionObject && validOptionObject.quantity ? validOptionObject.quantity : '')), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2 Product_admin_choice_container",
    style: {
      marginTop: '.125rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleFireGlobalEvent,
    item: props.product.id,
    selectedstyle: selectedStyle,
    currentoption: currentOption,
    action: "buy"
  }, "Buy Now"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleFireGlobalEvent,
    item: props.product.id,
    selectedstyle: selectedStyle,
    currentoption: currentOption,
    action: "add_to_cart"
  }, "Add To Cart"), isAdmin ? /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleEdit,
    modif: "edit",
    alt: "edit"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "edit material-icons",
    style: {
      fontSize: '1rem'
    }
  }, "edit")) : null))));
};
var _default = Module;
exports["default"] = _default;