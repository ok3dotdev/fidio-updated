"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var allowedTypes = ['image/jpeg', 'image/png'];
var Module = function Module(props) {
  var _props$editing, _props$editing2, _props$product, _props$editing3;
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
  var lineupIdRef = _react["default"].useRef();
  var lineupNameRef = _react["default"].useRef();
  var lineupDescriptionRef = _react["default"].useRef();
  var lineupTimeRef = _react["default"].useRef();
  var currency = '$';
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
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
    return function (_x) {
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
  }, [props.currentLineupEditing, props.editing.id, props === null || props === void 0 || (_props$editing = props.editing) === null || _props$editing === void 0 || (_props$editing = _props$editing.detailmeta) === null || _props$editing === void 0 ? void 0 : _props$editing.lineup, lineupNameRef.current, lineupDescriptionRef.current, lineupTimeRef.current]);
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
  console.log(props.product, props.editingOptionsMeta, selectedStyle, currency);
  var currentPrice = _react["default"].useMemo(function () {
    return (0, _ecommerce.resolveCurrentPrice)(props.product, selectedStyle, currency);
  }, [props.product, selectedStyle, currency]);
  var isEditing = (props === null || props === void 0 || (_props$editing2 = props.editing) === null || _props$editing2 === void 0 ? void 0 : _props$editing2.id) && (props === null || props === void 0 || (_props$product = props.product) === null || _props$product === void 0 ? void 0 : _props$product.id) && props.editing.id === props.product.id;
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
    defaultValue: props === null || props === void 0 || (_props$editing3 = props.editing) === null || _props$editing3 === void 0 ? void 0 : _props$editing3.name
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
  }, "$")), /*#__PURE__*/_react["default"].createElement("input", {
    type: "currency",
    style: {
      width: '100%'
    },
    defaultValue: "1.00",
    ref: props.priceInput,
    onChange: props.setCurrentPrice
  }), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
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
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "tagItem"
    }, d ? (0, _util.getFormattedDate)(d, {
      pretty: true
    }) : '');
  })) : /*#__PURE__*/_react["default"].createElement("div", null), props.product.detailmeta.livestreamDef.tags.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "tagContainer",
    style: {
      marginTop: '.25rem'
    }
  }, props.product.detailmeta.livestreamDef.tags.map(function (d) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "tagItem"
    }, d);
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
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "tagItem"
    }, d ? (0, _util.getFormattedDate)(d, {
      pretty: true
    }) : '');
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
    style: {
      fontSize: '.8rem',
      fontWeight: 600
    }
  }, currentPrice), /*#__PURE__*/_react["default"].createElement("div", {
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
var _default = exports["default"] = Module;