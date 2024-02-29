"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _router = require("next/router");
var _gridList = _interopRequireDefault(require("../../video/player/gridList"));
var _ShopModule = _interopRequireDefault(require("./Shop.module.scss"));
var _ProductImageManagerModule = _interopRequireDefault(require("../product/ProductImageManager.module.scss"));
var _util = require("../../util");
var _uuid = require("uuid");
var _AllInclusive = _interopRequireDefault(require("@mui/icons-material/AllInclusive"));
var _ConfirmationNumber = _interopRequireDefault(require("@mui/icons-material/ConfirmationNumber"));
var _Inventory = _interopRequireDefault(require("@mui/icons-material/Inventory"));
var _Stadium = _interopRequireDefault(require("@mui/icons-material/Stadium"));
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _reactTextareaAutosize = _interopRequireDefault(require("react-textarea-autosize"));
var _ecommerce = require("../../utility/ecommerce");
var _product = require("../product");
var _signin = require("../../onboarding/signin");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
var defaultEditingOptionsMeta = {
  description: '',
  productType: 'virtual',
  ticket: false,
  livestream: false,
  livestreamDef: {
    dates: [],
    tags: [],
    input: ''
  },
  eventDateDef: {
    dates: [],
    input: ''
  },
  lineup: []
};
var defaultDefinePriceCurrency = {
  code: 'US',
  name: 'United States',
  payment: 'stripe',
  region: 'NORTH AMERICA',
  currency: 'USD',
  symbol: '$'
};
var Module = function Module(props) {
  var _selectedStyle$option, _props$_loggedIn, _editing$detailmeta, _currentDefinePriceCu, _priceInput$current, _priceInput$current2, _ref2, _currentDefinePriceCu2, _editing$meta, _currentDefinePriceCu3, _props$_loggedIn2;
  var router = (0, _router.useRouter)();
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    componentId = _React$useState4[0],
    setComponentId = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    fetchBusy = _React$useState6[0],
    setFetchBusy = _React$useState6[1];
  var _React$useState7 = _react["default"].useState({}),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    currentSelected = _React$useState8[0],
    setCurrentSelected = _React$useState8[1];
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
    editing = _React$useState14[0],
    setEditing = _React$useState14[1];
  var _React$useState15 = _react["default"].useState(null),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    editingSelectedStyle = _React$useState16[0],
    setEditingSelectedStyle = _React$useState16[1];
  var _React$useState17 = _react["default"].useState(null),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    editingSelectedOption = _React$useState18[0],
    setEditingSelectedOption = _React$useState18[1];
  var _React$useState19 = _react["default"].useState(Object.assign({}, defaultEditingOptionsMeta)),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    editingOptionsMeta = _React$useState20[0],
    setEditingOptionsMeta = _React$useState20[1];
  var _React$useState21 = _react["default"].useState(null),
    _React$useState22 = _slicedToArray(_React$useState21, 2),
    shop = _React$useState22[0],
    setShop = _React$useState22[1];
  var _React$useState23 = _react["default"].useState({}),
    _React$useState24 = _slicedToArray(_React$useState23, 2),
    pageError = _React$useState24[0],
    setPageError = _React$useState24[1];
  var _React$useState25 = _react["default"].useState(null),
    _React$useState26 = _slicedToArray(_React$useState25, 2),
    tempImagesForCurrentlyEditing = _React$useState26[0],
    setTempImagesForCurrentlyEditing = _React$useState26[1];
  var _React$useState27 = _react["default"].useState(null),
    _React$useState28 = _slicedToArray(_React$useState27, 2),
    currentLineupEditing = _React$useState28[0],
    setCurrentLineupEditing = _React$useState28[1];
  var _React$useState29 = _react["default"].useState(false),
    _React$useState30 = _slicedToArray(_React$useState29, 2),
    isSettingCurrency = _React$useState30[0],
    setIsSettingCurrency = _React$useState30[1];
  var _React$useState31 = _react["default"].useState(defaultDefinePriceCurrency),
    _React$useState32 = _slicedToArray(_React$useState31, 2),
    currentDefinePriceCurrency = _React$useState32[0],
    setCurrentDefinePriceCurrency = _React$useState32[1];
  var descriptionInputRef = _react["default"].useRef();
  var styleInput = _react["default"].useRef();
  var optionInput = _react["default"].useRef();
  var quantityInput = _react["default"].useRef();
  var priceInput = _react["default"].useRef();
  var optionSelect = _react["default"].useRef();
  var nameRef = _react["default"].useRef();
  var setCurrencySelect = _react["default"].useRef();
  var currentCurrencyRef = _react["default"].useRef();
  var lineupNameRef = _react["default"].useRef();
  var lineupDescriptionRef = _react["default"].useRef();
  var lineupTimeRef = _react["default"].useRef();
  _react["default"].useEffect(function () {
    var selector = props.profile ? 'shopProfileData' : 'shop';
    if (props && props[selector]) {
      var f = props[selector].products && Array.isArray(props[selector].products) ? props[selector].products.concat(feed) : [];
      var s = props[selector].shop;
      var update = false;
      for (var i = 0; i < combinedFeed.length; i++) {
        if (!(0, _util.compareObjects)(combinedFeed, f)) {
          update = true;
          break;
        }
      }
      if (!shop || !s || s && !s.id) {
        setShop(s);
      }
      if (combinedFeed.length === 0 && f.length !== 0) {
        setCombinedFeed(f);
      }
    }
  }, [props.shopData, props.shopProfileData, feed, combinedFeed]);
  var defaultOption = function defaultOption() {
    var addOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var o = {
      sid: (0, _uuid.v4)(),
      quantity: 100
    };
    if (addOption) {
      o.option = '';
    }
    return o;
  };
  var defaultStyle = function defaultStyle() {
    return {
      price: 10,
      currency: 'USD',
      priceTable: {},
      sid: (0, _uuid.v4)(),
      style: '',
      option: [defaultOption(false)]
    };
  };
  var defaultLineup = function defaultLineup() {
    return {
      id: (0, _uuid.v4)(),
      title: '',
      description: '',
      time: null,
      image: ''
    };
  };
  var adminAuth = props._loggedIn && props._loggedIn.identifier && props.profileData && props.profileData.user && props.profileData.user.id && props._loggedIn.identifier === props.profileData.user.id;
  var handleEdit = function handleEdit(product) {
    console.log(product);
    if (shop !== null && shop !== void 0 && shop.id || !shop && props !== null && props !== void 0 && props.forceOpenRedirectOnDone) {
      setCurrentDefinePriceCurrency(defaultDefinePriceCurrency);
      setEditing(product);
      setTimeout(function () {
        var temp = _objectSpread({}, product);
        temp.name = product.name;
        setEditing(temp);
      }, 200);
    }
  };
  var createNewProduct = _react["default"].useCallback(function (e) {
    try {
      console.log('Start');
      if ((0, _util.isObjectEmpty)(editing)) {
        if (shop !== null && shop !== void 0 && shop.id || props !== null && props !== void 0 && props.forceOpenRedirectOnDone) {
          var _shop$id;
          var style = defaultStyle();
          var product = {
            id: (0, _uuid.v4)(),
            shop: (_shop$id = shop === null || shop === void 0 ? void 0 : shop.id) !== null && _shop$id !== void 0 ? _shop$id : null,
            name: '',
            detailmeta: {},
            styles: [style],
            shipping: [],
            published: false,
            images: [],
            protype: {
              type: 'virtual',
              subscription: false
            },
            infinite: false,
            meta: {},
            files: {},
            "new": true
          };
          setCurrentDefinePriceCurrency(defaultDefinePriceCurrency);
          setEditing(product);
          setEditingSelectedStyle(style.sid);
          setCurrentLineupEditing(null);
          setTempImagesForCurrentlyEditing(null);
          var tempMeta = Object.assign({}, defaultEditingOptionsMeta);
          tempMeta.productType = 'virtual';
          setEditingOptionsMeta(tempMeta);
          setTimeout(function () {
            var _window;
            styleInput.current.value = style.style;
            if (style.option[0] && Object.hasOwnProperty.call(style.option[0], 'option')) {
              optionInput.current.value = style.option[0].option;
            }
            var currentProduct = document.getElementById(product.id);
            if (currentProduct !== null && currentProduct !== void 0 && currentProduct.offsetTop && (_window = window) !== null && _window !== void 0 && _window.scrollTo && props._isMobile) {
              window.scrollTo({
                behavior: 'smooth',
                top: currentProduct.offsetTop - 5
              });
            }
          }, 200);
        }
      }
      // create template for new product
    } catch (err) {
      console.log(err); // fail silently
    }
  });
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      var id = (0, _uuid.v4)();
      setComponentId(id);
      if (props !== null && props !== void 0 && props.forceOpenRedirectOnDone) {
        createNewProduct();
      }
      setComponentDidMount(true);
    }
  }, [componentDidMount, props === null || props === void 0 ? void 0 : props.forceOpenRedirectOnDone]);
  var handleCancelProduct = _react["default"].useCallback(function (e) {
    setCurrentDefinePriceCurrency(defaultDefinePriceCurrency);
    setEditing({});
  });
  var resolveOptions = function resolveOptions(product) {
    if (product && product.styles) {
      var f = product.styles.findIndex(function (m) {
        return m.sid === editingSelectedStyle;
      });
      if (f > -1) {
        return product.styles[f].option;
      }
    }
    return [];
  };
  var resolveOption = function resolveOption(option, prop) {
    console.log(option);
    var o = option.find(function (m) {
      return m.sid === editingSelectedOption;
    });
    if (o) {
      return o[prop];
    }
    return null;
  };
  var setCurrentStyleName = _react["default"].useCallback(function (e) {
    console.log(e.currentTarget.value);
    if (e.currentTarget) {
      var temp = _objectSpread({}, editing);
      var f = editing.styles.findIndex(function (m) {
        return m.sid === editingSelectedStyle;
      });
      if (f > -1) {
        temp.styles[f].style = e.currentTarget.value;
      }
      setEditing(temp);
    }
  });
  var setCurrentOptionName = _react["default"].useCallback(function (e) {
    console.log(e.currentTarget.value, editingSelectedOption);
    if (e.currentTarget) {
      var temp = _objectSpread({}, editing);
      var f = temp.styles.findIndex(function (m) {
        return m.sid === editingSelectedStyle;
      });
      if (f > -1) {
        if (editingSelectedOption == null) {
          setEditingSelectedOption(editing.styles[f].option && editing.styles[f].option[0] ? editing.styles[f].option[0].sid : '');
        }
        console.log(f, temp.styles[f].option, editingSelectedOption);
        var f2 = temp.styles[f].option.findIndex(function (m) {
          return m.sid === editingSelectedOption;
        });
        console.log(f2);
        if (f2 > -1) {
          temp.styles[f].option[f2].option = e.currentTarget.value;
        }
        setEditing(temp);
      }
    }
  });
  var setCurrentQuantity = _react["default"].useCallback(function (e) {
    if (e.currentTarget) {
      var temp = _objectSpread({}, editing);
      var f = temp.styles.findIndex(function (m) {
        return m.sid === editingSelectedStyle;
      });
      if (f > -1) {
        console.log(f, editingSelectedStyle, temp);
        var f2 = temp.styles[f].option.length === 1 ? 0 : temp.styles[f].option.findIndex(function (m) {
          return m.sid === editingSelectedOption;
        });
        console.log(f2);
        if (f2 > -1) {
          if (!isNaN(Number(e.currentTarget.value))) {
            temp.styles[f].option[f2].quantity = Number(e.currentTarget.value);
          }
        }
        setEditing(temp);
      }
    }
  });
  var setInfinity = _react["default"].useCallback(function (e) {
    if (e.currentTarget) {
      var temp = _objectSpread({}, editing);
      var f = temp.styles.findIndex(function (m) {
        return m.sid === editingSelectedStyle;
      });
      if (f > -1) {
        var f2 = temp.styles[f].option.length === 1 ? 0 : temp.styles[f].option.findIndex(function (m) {
          return m.sid === editingSelectedOption;
        });
        if (f2 > -1) {
          if (!Object.prototype.hasOwnProperty.call(temp.styles[f].option[f2], 'quantity') || temp.styles[f].option[f2].quantity && temp.styles[f].option[f2].quantity !== 10000000) {
            temp.styles[f].option[f2].quantity = Number(10000000);
          } else {
            temp.styles[f].option[f2].quantity = 1;
          }
        }
        setEditing(temp);
      }
    }
  });
  var setCurrentPrice = _react["default"].useCallback(function (e) {
    if (e.currentTarget) {
      var temp = _objectSpread({}, editing);
      var f = temp.styles.findIndex(function (m) {
        return m.sid === editingSelectedStyle;
      });
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
          setEditing(temp);
        }
      }
    }
  });
  var changeCurrentStyle = _react["default"].useCallback(function (e) {
    console.log(e.currentTarget.value);
    if (e.currentTarget) {
      setEditingSelectedStyle(e.currentTarget.value);
      var f = editing.styles.findIndex(function (m) {
        return m.sid === e.currentTarget.value;
      });
      styleInput.current.value = editing.styles[f].style;
      console.log(editing.styles);
      setTimeout(function () {
        if (optionInput && optionInput.current) {
          optionInput.current.value = editing.styles[f].option && editing.styles[f].option[0] ? editing.styles[f].option[0].option : '';
          setEditingSelectedOption(editing.styles[f].option && editing.styles[f].option[0] ? editing.styles[f].option[0].sid : '');
          if (optionSelect.current) {
            optionSelect.current.selectedIndex = 0;
          }
        }
      }, 250);
      quantityInput.current.value = editing.styles[f].option && editing.styles[f].option[0] ? editing.styles[f].option[0].quantity : 1;
      priceInput.current.value = editing.styles[f] ? editing.styles[f].price : 1;
    }
  });
  var changeCurrentOption = _react["default"].useCallback(function (e) {
    console.log(e.currentTarget.value);
    if (e.currentTarget) {
      var f = editing.styles.findIndex(function (m) {
        return m.sid === editingSelectedStyle;
      });
      if (f > -1) {
        var temp = editing.styles[f].option.find(function (m) {
          return m.sid === e.currentTarget.value;
        });
        console.log(temp);
        if (temp) {
          optionInput.current.value = temp.option;
          setEditingSelectedOption(temp.sid);
          quantityInput.current.value = temp.quantity;
        }
      }
    }
  });
  var addStyle = _react["default"].useCallback(function (e) {
    var temp = _objectSpread({}, editing);
    temp.styles.push(defaultStyle());
    setEditing(temp);
  });
  var addOption = _react["default"].useCallback(function (e) {
    console.log(editing, editingSelectedStyle);
    var temp = _objectSpread({}, editing);
    var f = editing.styles.findIndex(function (m) {
      return m.sid === editingSelectedStyle;
    });
    console.log(f);
    if (f > -1) {
      var o = defaultOption();
      if (editing.styles[f].option[0] && !Object.hasOwnProperty.call(editing.styles[f].option[0], 'option')) {
        editing.styles[f].option[0].option = '';
        setEditingSelectedOption(editing.styles[f].option[0].sid);
      } else {
        editing.styles[f].option.push(o);
        setEditingSelectedOption(o.sid);
      }
    }
    setEditing(temp);
  });
  var onProductTypeChange = _react["default"].useCallback(function (e) {
    if (e.currentTarget) {
      var value = e.currentTarget.value;
      var temp = _objectSpread({}, editingOptionsMeta);
      temp.productType = value;
      var tempPro = _objectSpread({}, editing);
      tempPro.protype.type = value;
      setEditing(tempPro);
      setEditingOptionsMeta(temp);
    }
  });
  var setOptionsMetaData = _react["default"].useCallback(function (e) {
    console.log(e.currentTarget.checked, e.currentTarget.getAttribute('option'));
    if (e.currentTarget) {
      if (e.currentTarget.getAttribute('option')) {
        if (Object.prototype.hasOwnProperty.call(e.currentTarget, 'checked')) {
          var temp = _objectSpread({}, editingOptionsMeta);
          temp[e.currentTarget.getAttribute('option')] = e.currentTarget.checked;
          console.log(temp);
          setEditingOptionsMeta(temp);
        } else if (e.currentTarget.getAttribute('option') === 'livestreamDef' || e.currentTarget.getAttribute('option') === 'eventDateDef') {
          var _temp = _objectSpread({}, editingOptionsMeta);
          if (e.currentTarget.getAttribute('option2')) {
            console.log(e.currentTarget);
            _temp[e.currentTarget.getAttribute('option')][e.currentTarget.getAttribute('option2')] = e.currentTarget.value;
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
            _temp[e.currentTarget.getAttribute('option')].dates = dates;
            _temp[e.currentTarget.getAttribute('option')].tags = tags;
            console.log(_temp);
            setEditingOptionsMeta(_temp);
          }
        } else if (e.currentTarget.getAttribute('option') === 'lineupTemp') {
          var _temp2 = _objectSpread({}, editingOptionsMeta);
          if (!_temp2.lineup) {
            _temp2.lineup = [];
          }
          var cur = currentLineupEditing;
          if (_temp2.lineup.length < 10) {
            var _temp2$detailmeta$lin;
            console.log(cur);
            if (cur === null) {
              cur = _temp2.lineup.length; // Set valid index for currently editing
              setCurrentLineupEditing(cur);
            }
            var temp2 = _objectSpread({}, editing);
            if (!_temp2.lineup[cur]) {
              _temp2.lineup[cur] = defaultLineup();
              if (editing && !temp2.detailmeta.lineup) {
                temp2.detailmeta.lineup = [];
              }
            }
            console.log(temp2.detailmeta.lineup[cur], _temp2.lineup[cur]);
            var retainImage = _temp2.lineup[cur].image == '' && (_temp2$detailmeta$lin = temp2.detailmeta.lineup[cur]) !== null && _temp2$detailmeta$lin !== void 0 && _temp2$detailmeta$lin.image ? temp2.detailmeta.lineup[cur].image : _temp2.lineup[cur].image;
            temp2.detailmeta.lineup[cur] = _temp2.lineup[cur];
            temp2.detailmeta.lineup[cur].image = retainImage;
            setEditing(temp2);
            _temp2.lineup[cur][e.currentTarget.getAttribute('option2')] = e.currentTarget.value;
            setEditingOptionsMeta(_temp2);
          }
        }
      }
    }
  });
  var updateLineup = _react["default"].useCallback(function (e) {
    if (e.currentTarget) {
      if (e.currentTarget.getAttribute('option')) {
        var temp = _objectSpread({}, editingOptionsMeta);
        if (e.currentTarget.getAttribute('option') === 'add') {
          if (temp.lineup && temp.lineup.length < 10) {
            temp.lineup.push(defaultLineup());
            setCurrentLineupEditing(temp.lineup.length - 1);
            lineupNameRef.current.value = '';
            lineupDescriptionRef.current.value = '';
            lineupTimeRef.current.value = null;
          }
        } else if (e.currentTarget.getAttribute('option') === 'remove') {
          if (temp.lineup && temp.lineup.length > 0) {
            temp.lineup.pop();
            setCurrentLineupEditing(temp.lineup.length - 1 > -1 ? temp.lineup.length - 1 : null);
            lineupNameRef.current.value = '';
            lineupDescriptionRef.current.value = '';
            lineupTimeRef.current.value = null;
          }
        } else if (e.currentTarget.getAttribute('option') === 'setSelected') {
          var index = e.currentTarget.getAttribute('index');
          if (!isNaN(index)) {
            setCurrentLineupEditing(index);
            lineupNameRef.current.value = temp.lineup[index].title;
            lineupDescriptionRef.current.value = temp.lineup[index].description;
            lineupTimeRef.current.value = temp.lineup[index].time;
          }
        }
      }
    }
  });
  var setCurrentName = _react["default"].useCallback(function (e) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      if (e.currentTarget.getAttribute('modif') && e.currentTarget.getAttribute('modif') === 'product_name') {
        var temp = _objectSpread({}, editing);
        temp.name = e.currentTarget.value;
        setEditing(temp);
      }
    }
  });
  var publishProduct = function publishProduct(modif, existing) {
    var dontSetProducts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    try {
      var fn = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var _shop$id2, _shop$id3, product, formData, imgNames, data, _data$product;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (fetchBusy) {
                  _context.next = 30;
                  break;
                }
                setPageError({});
                product = _objectSpread({}, editing);
                console.log(product);
                product.detailmeta = _objectSpread({}, editingOptionsMeta);
                console.log('Publish Product', product);
                if (!(product.name === '')) {
                  _context.next = 10;
                  break;
                }
                setPageError({
                  message: 'Please enter a name for your product',
                  location: 'product_name'
                });
                setFetchBusy(false);
                return _context.abrupt("return", 1);
              case 10:
                formData = new FormData();
                imgNames = [];
                if (tempImagesForCurrentlyEditing && tempImagesForCurrentlyEditing.editing === product.id) {
                  // Retrieve files for upload if matching upload image edit
                  tempImagesForCurrentlyEditing.images.forEach(function (img) {
                    console.log('Img', img);
                    formData.append("image", img);
                    imgNames.push(img.name);
                  });
                  formData.append('imgNames', JSON.stringify(imgNames));
                }
                formData.append('domainKey', props.domainKey);
                formData.append('hash', props._loggedIn.hash);
                formData.append('identifier', props._loggedIn.identifier);
                formData.append('product', JSON.stringify(product));
                formData.append('shop', (_shop$id2 = shop === null || shop === void 0 ? void 0 : shop.id) !== null && _shop$id2 !== void 0 ? _shop$id2 : null);
                formData.append('status', modif);
                formData.append('existing', existing);
                setFetchBusy(true);
                setTimeout(function () {
                  setFetchBusy(false);
                }, 10000);
                _context.next = 24;
                return (0, _ecommerce.doPublishProduct)(props.apiUrl, props.domainKey, (_shop$id3 = shop === null || shop === void 0 ? void 0 : shop.id) !== null && _shop$id3 !== void 0 ? _shop$id3 : null, props._loggedIn, product, formData);
              case 24:
                data = _context.sent;
                console.log(data);
                if (data) {
                  if (data.product) {
                    if (props !== null && props !== void 0 && props.forceOpenRedirectOnDone) {
                      if (props.redirect) {
                        router.push(props.redirect);
                      } else if (props.redirectToProduct && data !== null && data !== void 0 && (_data$product = data.product) !== null && _data$product !== void 0 && (_data$product = _data$product.product) !== null && _data$product !== void 0 && _data$product.id) {
                        router.push("/pr?p=".concat(data.product.product.id));
                      }
                    }
                    if (data.product.products) {
                      if (!dontSetProducts) {
                        // We use this if we run publishProduct then another request because some requests dont update everything publishProduct does, for example upload lineup images. Upload lineup images will return a new combined feed after so we dont need to run this here as it will interrupt the view and functions of other queued requests
                        setCombinedFeed(data.product.products);
                        setCurrentDefinePriceCurrency(defaultDefinePriceCurrency);
                        setEditing({});
                      }
                      setFetchBusy(false);
                    }
                  }
                }
                return _context.abrupt("return", data);
              case 30:
                return _context.abrupt("return", null);
              case 31:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function fn() {
          return _ref.apply(this, arguments);
        };
      }();
      return fn();
    } catch (err) {
      // fail silently
      return null;
    }
  };
  var handlePublishProduct = _react["default"].useCallback(function (e) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      if (e.currentTarget.getAttribute('modif')) {
        var modif = e.currentTarget.getAttribute('modif');
        var existing = e.currentTarget.getAttribute('existing');
        publishProduct(modif, existing);
      }
    }
  });
  var passTempImages = function passTempImages(images) {
    setTempImagesForCurrentlyEditing({
      editing: editing.id,
      images: images
    });
  };
  var handleSetIsSettingCurrency = _react["default"].useCallback(function (e) {
    if (isSettingCurrency) {
      setIsSettingCurrency(false);
      return false;
    }
    setIsSettingCurrency(true);
    return true;
  });
  var changeCurrentCurrency = function changeCurrentCurrency(product, value) {
    console.log('Product Value', product, value);
    if (product["new"]) {
      var temp = editing;
      editing.meta.currency = value;
      setEditing(temp);
      return value;
    } else {
      var _temp3 = _toConsumableArray(combinedFeed);
      var f = _temp3.findIndex(function (m) {
        return m.id === product.id;
      });
      if (f > -1) {
        _temp3[f].meta.currency = value;
        setCombinedFeed(_temp3);
        return value;
      }
    }
    return null;
  };
  var handleChangeCurrentCurrency = _react["default"].useCallback(function (e) {
    var v = changeCurrentCurrency(editing, e.currentTarget.value);
    if (v) {
      currentCurrencyRef.current.innerHTML = v;
      var f = Object.entries(props.regionsData).find(function (m) {
        return m[1].currency === v;
      });
      if (f && f[1]) {
        setCurrentDefinePriceCurrency(f[1]);
        setDefaultPriceHtml(f[1]);
      }
    }
  });
  var handleUpdateProductDescription = _react["default"].useCallback(function (e) {
    var value = e.currentTarget.value;
    console.log(value);
    if (editing) {
      var temp = _objectSpread({}, editingOptionsMeta);
      console.log(temp, editingOptionsMeta, editing);
      if (temp) {
        temp.description = value;
        var newEditing = _objectSpread({}, editing);
        newEditing.detailmeta = temp;
        setEditing(newEditing);
        if (temp) {
          setEditingOptionsMeta(temp);
        }
      }
    }
  });

  // list all shop items
  // allow for creation of shop item with
  // product name, description, options, size per option (os or custom) w/ quantity, type, publish, images
  // console.log(adminAuth, props, combinedFeed, shop, editing, editingOptionsMeta, editingOptionsMeta.productType, editingSelectedOption, editingSelectedStyle)

  var selectedStyle = editing && editing.styles ? editing.styles.find(function (m) {
    return m.sid === editingSelectedStyle;
  }) : null;
  var selectedOption = editing && selectedStyle && selectedStyle.option ? ((_selectedStyle$option = selectedStyle.option.find(function (m) {
    return m.sid === editingSelectedOption;
  })) !== null && _selectedStyle$option !== void 0 ? _selectedStyle$option : selectedStyle.option.length === 1) ? selectedStyle.option[0] : null : null;
  var setDefaultPriceHtml = function setDefaultPriceHtml(useDefinePriceCurrency) {
    var _useDefinePriceCurren;
    if (!useDefinePriceCurrency) {
      useDefinePriceCurrency = currentDefinePriceCurrency;
    }
    if (((_useDefinePriceCurren = useDefinePriceCurrency) === null || _useDefinePriceCurren === void 0 ? void 0 : _useDefinePriceCurren.currency) !== 'USD' && selectedStyle.priceTable && Object.prototype.hasOwnProperty.call(selectedStyle.priceTable, useDefinePriceCurrency.currency)) {
      priceInput.current.value = selectedStyle.priceTable[useDefinePriceCurrency.currency];
    } else if (selectedStyle !== null && selectedStyle !== void 0 && selectedStyle.price) {
      priceInput.current.value = selectedStyle.price;
    }
  };
  console.log(adminAuth, shop);
  var noShop = shop && shop.status && shop.status === 'nonexistent';
  console.log(noShop, editing, tempImagesForCurrentlyEditing, currentDefinePriceCurrency);
  console.log(editingOptionsMeta, currentLineupEditing, selectedStyle, combinedFeed);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(fetchBusy ? 'fetchNotBusy fetchBusy' : 'fetchNotBusy')
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ShopModule["default"].container, " ").concat(props.smaller ? "".concat(_ProductImageManagerModule["default"].smallContainer) : null)
  }, adminAuth && !noShop ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ShopModule["default"].adminContainer)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: 'heading'
  }, "Shop"), /*#__PURE__*/_react["default"].createElement("div", {
    className: 'flex options',
    style: {
      gap: '.25rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    disabled: !(0, _util.isObjectEmpty)(editing),
    onClick: createNewProduct
  }, "Create Product"), editing && !(0, _util.isObjectEmpty)(editing) ? /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleCancelProduct,
    modif: "save"
  }, editing["new"] ? 'Abandon' : 'Cancel') : null)) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Product_flex_container"
  }, editing !== null && editing !== void 0 && editing["new"] ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].currentlyEditingProductContainer, " ").concat(props !== null && props !== void 0 && props.noFixedPosition ? _ProductImageManagerModule["default"].currentlyEditingNoFixed : '')
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].currentEditingProductInnerContainer)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].currentlyEditingProductContent)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].productImgContainer, " Product_img_container Product_img_container_large")
  }, /*#__PURE__*/_react["default"].createElement(_product.ProductImageManager, _extends({}, props, {
    editing: editing,
    passTempImages: passTempImages
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].productMetaContainer, " Product_meta_container")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: "calc(100% - ".concat(props._loggedIn ? !(props !== null && props !== void 0 && (_props$_loggedIn = props._loggedIn) !== null && _props$_loggedIn !== void 0 && _props$_loggedIn.username) ? '100' : '25' : '40', "px)"),
      maxHeight: '75vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2"
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Name of Product",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    style: {
      fontWeight: '600'
    }
  }, "Title: ")), /*#__PURE__*/_react["default"].createElement("input", {
    name: "name",
    placeholder: "Product Title",
    style: {
      fontWeight: '600',
      width: '100%'
    },
    onChange: setCurrentName,
    ref: nameRef,
    modif: "product_name"
  })), pageError.location && pageError.location === 'product_name' ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "error"
  }, pageError.message) : null), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Product Description",
    placement: "left"
  }, /*#__PURE__*/_react["default"].createElement(_reactTextareaAutosize["default"], {
    className: "".concat(_ProductImageManagerModule["default"].textArea),
    name: "description",
    placeholder: "Description",
    defaultValue: editing === null || editing === void 0 || (_editing$detailmeta = editing.detailmeta) === null || _editing$detailmeta === void 0 ? void 0 : _editing$detailmeta.description,
    onChange: handleUpdateProductDescription,
    ref: descriptionInputRef
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Set the price for the currently selected Style",
    placement: "left"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: 600
    }
  }, (_currentDefinePriceCu = currentDefinePriceCurrency === null || currentDefinePriceCurrency === void 0 ? void 0 : currentDefinePriceCurrency.symbol) !== null && _currentDefinePriceCu !== void 0 ? _currentDefinePriceCu : '$')), /*#__PURE__*/_react["default"].createElement("input", {
    type: "currency",
    style: {
      width: '100%'
    },
    defaultValue: "10.00",
    ref: priceInput,
    onChange: setCurrentPrice
  }), selectedStyle && (currentDefinePriceCurrency === null || currentDefinePriceCurrency === void 0 ? void 0 : currentDefinePriceCurrency.currency) === 'USD' && selectedStyle.price != (priceInput === null || priceInput === void 0 || (_priceInput$current = priceInput.current) === null || _priceInput$current === void 0 ? void 0 : _priceInput$current.value) || (currentDefinePriceCurrency === null || currentDefinePriceCurrency === void 0 ? void 0 : currentDefinePriceCurrency.currency) !== 'USD' && (!selectedStyle.priceTable || selectedStyle.priceTable && !selectedStyle.priceTable[currentDefinePriceCurrency.currency] || currentDefinePriceCurrency !== null && currentDefinePriceCurrency !== void 0 && currentDefinePriceCurrency.currency && selectedStyle.priceTable && Object.prototype.hasOwnProperty.call(selectedStyle.priceTable, currentDefinePriceCurrency.currency) && selectedStyle.priceTable[currentDefinePriceCurrency.currency] != priceInput.current.value) ? /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "The price displayed is currently not set for this product style. Click here to set it"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: setCurrentPrice,
    value: priceInput === null || priceInput === void 0 || (_priceInput$current2 = priceInput.current) === null || _priceInput$current2 === void 0 ? void 0 : _priceInput$current2.value,
    style: {
      whiteSpace: 'nowrap',
      lineHeight: '.5rem',
      fontSize: '.75rem'
    }
  }, "Set Price")) : null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "You can set pricing in multiple currencies. Although the value you keep selected here will be the primary currency. Use the currency selector to choose a currency to begin setting prices in the respective currency. Countries that users reside in for which you have not set a currency will be presented the closest relevant currency you have defined a pricepoint in"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].currencyLabel, " ").concat(isSettingCurrency ? "".concat(_ProductImageManagerModule["default"].currencyLabelActive) : null),
    style: {
      lineHeight: '.5rem'
    },
    onClick: handleSetIsSettingCurrency,
    ref: currentCurrencyRef
  }, (_ref2 = (_currentDefinePriceCu2 = currentDefinePriceCurrency === null || currentDefinePriceCurrency === void 0 ? void 0 : currentDefinePriceCurrency.currency) !== null && _currentDefinePriceCu2 !== void 0 ? _currentDefinePriceCu2 : editing === null || editing === void 0 || (_editing$meta = editing.meta) === null || _editing$meta === void 0 ? void 0 : _editing$meta.currency) !== null && _ref2 !== void 0 ? _ref2 : 'USD')), isSettingCurrency ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].setCurrencyExternalContainer)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].setCurrencyContainer)
  }, /*#__PURE__*/_react["default"].createElement("select", {
    id: editing.id + '_setCurrency',
    name: editing.id + '_setCurrency',
    style: {
      width: '100%'
    },
    onChange: handleChangeCurrentCurrency,
    ref: setCurrencySelect,
    defaultValue: (_currentDefinePriceCu3 = currentDefinePriceCurrency === null || currentDefinePriceCurrency === void 0 ? void 0 : currentDefinePriceCurrency.currency) !== null && _currentDefinePriceCu3 !== void 0 ? _currentDefinePriceCu3 : 'USD'
  }, props !== null && props !== void 0 && props.regionsData ? Object.entries(props.regionsData).map(function (m) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      className: "".concat(_ProductImageManagerModule["default"].setCurrencyOption, " ").concat(m[1].currency !== 'USD' ? selectedStyle !== null && selectedStyle !== void 0 && selectedStyle.priceTable && Object.prototype.hasOwnProperty.call(selectedStyle.priceTable, m[1].currency) ? _ProductImageManagerModule["default"].currencyOptionUsed : m[1].currency === 'USD' ? _ProductImageManagerModule["default"].currencyOptionUsed : null : null),
      value: m[1].currency,
      symbol: m[1].symbol
    }, /*#__PURE__*/_react["default"].createElement("div", null, m[1].currency), /*#__PURE__*/_react["default"].createElement("div", null, "\xA0"), /*#__PURE__*/_react["default"].createElement("div", null, m[1].name), /*#__PURE__*/_react["default"].createElement("div", null, "\xA0"), /*#__PURE__*/_react["default"].createElement("div", null, m[1].symbol));
  }) : null))) : null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Set the quantity for the currently selected Style & Option combo"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: 600,
      display: selectedOption && selectedOption.quantity && selectedOption.quantity === 10000000 ? 'none' : 'block'
    }
  }, "Qty")), /*#__PURE__*/_react["default"].createElement("input", {
    type: "number",
    style: {
      width: '100%',
      display: selectedOption && selectedOption.quantity && selectedOption.quantity === 10000000 ? 'none' : 'block'
    },
    defaultValue: "100",
    ref: quantityInput,
    onChange: setCurrentQuantity
  }), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Infinite stock"
  }, /*#__PURE__*/_react["default"].createElement(_AllInclusive["default"], null)), /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    style: {
      margin: 0
    },
    onChange: setInfinity,
    checked: selectedOption && selectedOption.quantity && selectedOption.quantity === 10000000
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      border: '1px solid #484848',
      marginTop: '.125rem',
      marginBottom: '.25rem'
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex",
    style: {
      flexWrap: 'wrap',
      gap: '.05rem 0.2rem',
      marginBottom: '.125rem'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
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
  }, "Style"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown_input"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    ref: styleInput,
    onChange: setCurrentStyleName
  }), /*#__PURE__*/_react["default"].createElement("select", {
    id: editing.id + '_styles',
    name: editing.id + '_styles',
    style: {
      width: '100%'
    },
    onChange: changeCurrentStyle
  }, (0, _ecommerce.resolveStyles)(editing).map(function (style, i) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      value: style.sid,
      className: "style_option",
      key: i
    }, style.style);
  }))))), selectedStyle && selectedStyle.option.length > 0 && selectedStyle.option[0] && Object.hasOwnProperty.call(selectedStyle.option[0], 'option') ? /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
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
  }, "Option"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown_input"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    ref: optionInput,
    onChange: setCurrentOptionName
  }), /*#__PURE__*/_react["default"].createElement("select", {
    id: editing.id + '_options',
    name: editing.id + '_options',
    style: {
      width: '100%'
    },
    onChange: changeCurrentOption,
    ref: optionSelect
  }, editing.styles.find(function (m) {
    return m.sid === editingSelectedStyle;
  }).option.map(function (option, i) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      value: option.sid,
      className: "option_option",
      key: i
    }, option.option);
  }))))) : null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2 Product_admin_choice_container"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: addStyle
  }, "Add Style"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: addOption
  }, "Add Option"), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Set the product type",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      fontSize: '.8rem',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "flex"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "radio",
    id: "virtual",
    name: "fav_language",
    value: "virtual",
    defaultChecked: true,
    onChange: onProductTypeChange
  }), /*#__PURE__*/_react["default"].createElement("label", {
    "for": "virtual"
  }, "Virtual")), /*#__PURE__*/_react["default"].createElement("span", {
    className: "flex"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "radio",
    id: "physical",
    name: "fav_language",
    value: "physical",
    onChange: onProductTypeChange
  }), /*#__PURE__*/_react["default"].createElement("label", {
    "for": "physical"
  }, "Physical"))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "promptContainer",
    style: {
      alignItems: 'center',
      borderRadius: '.5rem',
      margin: '.25rem 0'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2"
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Ticketed Products offer universally unique ids that are unique across the product being sold and can be stamped onto Ticket Images. Virtual Tickets are for Virtual Events. Physical Tickets serve Virtual Tickets for your own In Person Events.",
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    },
    placement: "left"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem'
    }
  }, "Is this a ticket?"), /*#__PURE__*/_react["default"].createElement(_ConfirmationNumber["default"], {
    style: {
      width: '15px',
      height: '15px'
    }
  })), /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    style: {
      margin: 0
    },
    value: editingOptionsMeta.ticket,
    defaultChecked: editingOptionsMeta.ticket,
    onChange: setOptionsMetaData,
    option: "ticket"
  })), editingOptionsMeta.ticket ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Please add dates your event is happening. Enter dates in the following format MON-DD-YYYY-HH:MM or they will not be parsed as dates.",
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    },
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '.8rem',
      fontWeight: '600',
      whiteSpace: 'nowrap'
    }
  }, "Date for Event"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    style: {
      marginBottom: '.125rem',
      width: '-webkit-fill-available'
    },
    placeholder: "Date in MON-DD-YYYY-HH:MM format. If the ticket does not have an event date leave empty",
    onInput: setOptionsMetaData,
    option: "eventDateDef",
    option2: "input",
    defaultValue: editingOptionsMeta.eventDateDef.input
  })), editingOptionsMeta.eventDateDef.dates.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "tagContainer",
    style: {
      marginTop: '.25rem',
      marginBottom: '.25rem'
    }
  }, editingOptionsMeta.eventDateDef.dates.map(function (d, i) {
    return d !== '' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "tagItem",
      key: i
    }, d ? (0, _util.getFormattedDate)(d, {
      pretty: true
    }) : '') : /*#__PURE__*/_react["default"].createElement("div", null);
  })) : /*#__PURE__*/_react["default"].createElement("div", null)) : null), editingOptionsMeta && editingOptionsMeta.productType === 'virtual' ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
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
    placement: "left",
    paddin: true
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
    value: editingOptionsMeta.livestream,
    defaultChecked: editingOptionsMeta.livestream,
    onChange: setOptionsMetaData,
    option: "livestream"
  })), editingOptionsMeta.livestream ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Enter dates or words for matching authorization. Enter dates in the following format MON-DD-YYYY-HH:MM. Time must be input in 24 H military time. Values that do not match dates will be parsed as Tags that can be added to livestreams. Any matches will authorize viewership of the stream for purchases of this ticket",
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    },
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '.8rem',
      fontWeight: '600',
      whiteSpace: 'nowrap'
    }
  }, "Auth Keys | Tags"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    style: {
      marginBottom: '.125rem',
      width: '-webkit-fill-available'
    },
    placeholder: "Date in DD/MM/YY format or a Tag",
    onInput: setOptionsMetaData,
    option: "livestreamDef",
    option2: "input",
    defaultValue: editingOptionsMeta.livestreamDef.input
  })), /*#__PURE__*/_react["default"].createElement("span", {
    className: "flex gap-p2",
    style: {
      marginBottom: '.25rem'
    }
  }, editingOptionsMeta.livestreamDef.dates.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "tagContainer",
    style: {
      marginTop: '.25rem'
    }
  }, editingOptionsMeta.livestreamDef.dates.map(function (d, i) {
    return d !== '' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "tagItem",
      key: i
    }, d ? (0, _util.getFormattedDate)(d, {
      pretty: true
    }) : '') : /*#__PURE__*/_react["default"].createElement("div", null);
  })) : /*#__PURE__*/_react["default"].createElement("div", null), editingOptionsMeta.livestreamDef.tags.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "tagContainer",
    style: {
      marginTop: '.25rem'
    }
  }, editingOptionsMeta.livestreamDef.tags.map(function (d, i) {
    return d !== '' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "tagItem",
      key: i
    }, d) : /*#__PURE__*/_react["default"].createElement("div", null);
  })) : /*#__PURE__*/_react["default"].createElement("div", null))) : null, editingOptionsMeta.livestream ? /*#__PURE__*/_react["default"].createElement("div", {
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
  }, "Lineup"), editingOptionsMeta.lineup && editingOptionsMeta.lineup.length < 10 || !editingOptionsMeta.lineup ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Enter participants name",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: "Name",
    style: {
      fontSize: '.8rem',
      width: '100%'
    },
    onInput: setOptionsMetaData,
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
    onInput: setOptionsMetaData,
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
    onInput: setOptionsMetaData,
    option: "lineupTemp",
    option2: "time",
    ref: lineupTimeRef
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.75rem',
      padding: '.125rem',
      paddingTop: '.25rem'
    }
  }, "After you publish this product you will be able to add Lineup participant images"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    }
  }, editingOptionsMeta.lineup && editingOptionsMeta.lineup.length < 10 && editingOptionsMeta.lineup.length > 0 ? /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Add another Lineup Participant",
    placement: "bottom"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      width: '100%'
    },
    onClick: updateLineup,
    option: "add"
  }, "Add")) : null, editingOptionsMeta.lineup && editingOptionsMeta.lineup[currentLineupEditing] ? /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
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
      overflow: 'auto'
    }
  }, editingOptionsMeta.lineup && editingOptionsMeta.lineup.map ? editingOptionsMeta.lineup.map(function (m, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "lineupItem_editing",
      style: {
        maxWidth: '75px'
      },
      onClick: updateLineup,
      option: 'setSelected',
      index: i,
      key: i
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "lineupItem_id",
      style: {
        fontSize: '.5rem',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      }
    }, m.id), /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        fontSize: '.7rem',
        fontWeight: '600',
        overflowWrap: 'anywhere'
      }
    }, m.title), m.time ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "lineupItem_time",
      style: {
        fontSize: '1rem'
      }
    }, (0, _util.getFormattedTime)(m.time, {
      simple: true
    })) : null);
  }) : null)) : null) : null)) : /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2 promptContainer",
    style: {
      alignItems: 'center',
      height: '20px',
      borderRadius: '.5rem',
      margin: '.25rem 0'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Allow for your customers to subscribe to your product. This is a guarantee by your company that you will continue to deliver your Product to any subscribed customers. Subscriptions will charge monthly by default.",
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    },
    placement: "left"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem'
    }
  }, "Is this a subscription?"), /*#__PURE__*/_react["default"].createElement(_Inventory["default"], {
    style: {
      width: '15px'
    }
  })), /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    style: {
      margin: 0
    },
    value: editingOptionsMeta.subscription,
    defaultChecked: editingOptionsMeta.subscription,
    onChange: setOptionsMetaData,
    option: "subscription"
  }))), !(props !== null && props !== void 0 && props._loggedIn) || !(props !== null && props !== void 0 && (_props$_loggedIn2 = props._loggedIn) !== null && _props$_loggedIn2 !== void 0 && _props$_loggedIn2.username) ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_signin.SignIn, props), /*#__PURE__*/_react["default"].createElement(_signin.Username, props)) : /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2 Product_admin_choice_container",
    style: {
      marginTop: '.125rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handlePublishProduct,
    modif: "publish"
  }, "Publish"), !(props !== null && props !== void 0 && props.forceOpenRedirectOnDone) ? /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handlePublishProduct,
    modif: "save"
  }, "Save") : null, editing && !(props !== null && props !== void 0 && props.forceOpenRedirectOnDone) ? /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleCancelProduct,
    modif: "save"
  }, editing["new"] ? 'Abandon' : 'Cancel') : null))))) : null, combinedFeed && combinedFeed.map && !props.hideFeed ? combinedFeed.map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement(_product.Product, _extends({}, props, {
      product: item,
      key: i,
      apiUrl: props.apiUrl,
      domainKey: props.domainKey,
      _loggedIn: props._loggedIn,
      fetchBusy: fetchBusy,
      setFetchBusy: setFetchBusy,
      _setLoggedIn: props._setLoggedIn,
      handleEdit: handleEdit,
      editing: editing,
      setEditing: setEditing,
      setCurrentName: setCurrentName,
      pageError: pageError,
      styleInput: styleInput,
      setCurrentStyleName: setCurrentStyleName,
      changeCurrentStyle: changeCurrentStyle,
      resolveStyles: _ecommerce.resolveStyles,
      selectedStyle: selectedStyle,
      setCurrentOptionName: setCurrentOptionName,
      optionInput: optionInput,
      changeCurrentOption: changeCurrentOption,
      optionSelect: optionSelect,
      editingSelectedStyle: editingSelectedStyle,
      priceInput: priceInput,
      setCurrentPrice: setCurrentPrice,
      selectedOption: selectedOption,
      quantityInput: quantityInput,
      setCurrentQuantity: setCurrentQuantity,
      setInfinity: setInfinity,
      addStyle: addStyle,
      addOption: addOption,
      onProductTypeChange: onProductTypeChange,
      editingOptionsMeta: editingOptionsMeta,
      setEditingOptionsMeta: setEditingOptionsMeta,
      setOptionsMetaData: setOptionsMetaData,
      handlePublishProduct: handlePublishProduct,
      publishProduct: publishProduct,
      handleCancelProduct: handleCancelProduct,
      nameRef: nameRef,
      setEditingSelectedStyle: setEditingSelectedStyle,
      setEditingSelectedOption: setEditingSelectedOption,
      setCombinedFeed: setCombinedFeed,
      setCurrentLineupEditing: setCurrentLineupEditing,
      currentLineupEditing: currentLineupEditing,
      defaultLineup: defaultLineup,
      setCurrencySelect: setCurrencySelect,
      changeCurrentCurrency: changeCurrentCurrency,
      currentDefinePriceCurrency: currentDefinePriceCurrency,
      setCurrentDefinePriceCurrency: setCurrentDefinePriceCurrency,
      setDefaultPriceHtml: setDefaultPriceHtml
    }));
  }) : null)));
};
var _default = exports["default"] = Module;