"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = require("../../payment/index.js");
var _SignIn = require("/modules/utility/onboarding/SignIn.js");
var _ecommerce = require("/modules/utility/ecommerce/ecommerce.js");
var _Inventory = _interopRequireDefault(require("@mui/icons-material/Inventory"));
var _uuid = require("uuid");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Module = function Module(props) {
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    fetchBusy = _React$useState4[0],
    setFetchBusy = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(null),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    pageError = _React$useState6[0],
    setPageError = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(true),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    validCc = _React$useState8[0],
    setValidCc = _React$useState8[1];
  var _React$useState9 = _react["default"].useState([]),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    cartMessages = _React$useState10[0],
    setCartMessages = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(false),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    tempOveride = _React$useState12[0],
    setTempOveride = _React$useState12[1];
  var _React$useState13 = _react["default"].useState(true),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    showContent = _React$useState14[0],
    setShowContent = _React$useState14[1];
  var _React$useState15 = _react["default"].useState(null),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    solution = _React$useState16[0],
    setSolution = _React$useState16[1];
  var container = _react["default"].useRef();
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      container.current.addEventListener('mouseover', mouseOverContainer);
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  var mouseOverContainer = function mouseOverContainer() {
    console.log('Did mouse over', props);
    if (props._toggleSingleOpenMenu) {
      props._toggleSingleOpenMenu(null, 'cart', true);
    }
  };
  props._LocalEventEmitter.unsubscribe('cart_update');
  props._LocalEventEmitter.subscribe('cart_update', function (e) {
    var temp = _toConsumableArray(cartMessages);
    if (e) {
      console.log('Cart Update', e);
      if (e.dispatch === 'purchase') {
        temp = temp.filter(function (m) {
          return m && m.type !== 'purchase';
        });
        var domain = props.devLocal ? props.devAddress : 'https://' + props.domainUrl;
        temp.push({
          message: 'Purchase success',
          href: "".concat(domain, "/r?o=").concat(e.id),
          hrefCta: 'View your Receipt Here',
          type: 'purchase'
        });
        setCartMessages(temp);
      } else if (e.dispatch === 'flashCart') {
        // Attempts to flash cart showing cart based on recent interaction
        setTempOveride(true);
        if (props.passOveride) {
          props.passOveride();
        }
        setTimeout(function () {
          setTempOveride(false);
        }, 10000);
      } else if (e.dispatch === 'purchaseComplete') {
        if (e.type === 'paystack') {
          console.log('paystack purchase', e);
          var r = setTimeout(function () {
            setFetchBusy(false);
          }, 20000);
          completePurchase(e.data.snapshot, e.data.cart, r, e.data);
        }
      }
    }
  });
  var handleClearError = _react["default"].useCallback(function (e) {
    setPageError(null);
  });
  var handleUpdateQuantity = _react["default"].useCallback( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var style, option, quantity, productId, options, product, _cart, res, returnProduct;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            console.log(e.currentTarget.getAttribute, fetchBusy);
            if (!(!fetchBusy && e && e.currentTarget && e.currentTarget.getAttribute)) {
              _context.next = 18;
              break;
            }
            setFetchBusy(true);
            style = e.currentTarget.getAttribute('styleId');
            option = e.currentTarget.getAttribute('optionId');
            quantity = e.currentTarget.getAttribute('quantity');
            productId = e.currentTarget.getAttribute('productId');
            options = {};
            if (Number(e.currentTarget.value) < Number(quantity)) {
              options.decrement = true;
            }
            _cart = JSON.parse(localStorage.getItem('cart'));
            if (productId && _cart && _cart.items) {
              product = _cart.items.find(function (item) {
                return item.product.id === productId;
              });
            }
            if (!product) {
              _context.next = 17;
              break;
            }
            _context.next = 15;
            return (0, _ecommerce.addToCart)(props.apiUrl, props.domainKey, props._loggedIn, _cart, product.product, {
              style: style,
              option: option
            }, setFetchBusy, options);
          case 15:
            res = _context.sent;
            if (res) {
              if (res.status === 'success') {
                (0, _ecommerce.updateCart)(_cart, res.cart);
                if (res.cart && res.cart.items) {
                  returnProduct = res.cart.items.find(function (item) {
                    return item.product.id === productId;
                  });
                  if (returnProduct) {
                    e.target.value = returnProduct.quantity;
                  }
                }
              }
            }
          case 17:
            setFetchBusy(false);
          case 18:
            _context.next = 24;
            break;
          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            setFetchBusy(false);
          case 24:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 20]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  var cart = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart')) : null;
  var completePurchase = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(snapshot, cart, r) {
      var extra,
        res,
        temp,
        domain,
        _args2 = arguments;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            extra = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : {};
            _context2.next = 3;
            return (0, _ecommerce.performPurchase)(props.apiUrl, props.domainKey, props._loggedIn, cart, setFetchBusy, {
              snapshot: snapshot,
              extra: extra
            });
          case 3:
            res = _context2.sent;
            console.log(res);
            if (res) {
              if (r) {
                clearTimeout(r);
              }
              setFetchBusy(false);
              console.log(res);
              if (res.status === 'success') {
                if (res.data && res.data.cart) {
                  (0, _ecommerce.updateCart)(props._cart, res.data.cart);
                }
                temp = _toConsumableArray(cartMessages);
                temp = temp.filter(function (m) {
                  return m && m.type !== 'purchase';
                });
                domain = props.devLocal ? props.devAddress : 'https://' + props.domainUrl;
                temp.push({
                  message: 'Purchase success',
                  href: "".concat(domain, "/r?o=").concat(res.data.order.id),
                  hrefCta: 'View your Receipt Here',
                  type: 'purchase'
                });
                setCartMessages(temp);
                console.log('Purchase Success', res);
              } else {
                setPageError({
                  message: 'Purchase failed',
                  placement: 'purchase'
                });
              }
            } else {
              if (r) {
                clearTimeout(r);
              }
              setFetchBusy(false);
              setPageError({
                message: 'Purchase failed',
                placement: 'purchase'
              });
            }
          case 6:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function completePurchase(_x2, _x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handlePerformPurchase = _react["default"].useCallback( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e) {
      var r, snapshot, _props$paymentConfig, _props$_loggedIn, _props$paymentConfig$, _props$paymentConfig2, transactionRef, handler;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            if (fetchBusy) {
              _context3.next = 24;
              break;
            }
            setFetchBusy(true);
            r = setTimeout(function () {
              setFetchBusy(false);
            }, 20000);
            setPageError(null);
            console.log(cart);
            snapshot = (0, _ecommerce.calculateTotal)(cart, null, {
              object: true
            });
            console.log('snapshot', snapshot, solution);
            if (!solution) {
              _context3.next = 22;
              break;
            }
            if (!(solution.payment === 'stripe')) {
              _context3.next = 13;
              break;
            }
            completePurchase(snapshot, cart, r, {
              type: 'stripe'
            });
            _context3.next = 20;
            break;
          case 13:
            if (!(solution.payment === 'paystack' && PaystackPop && props !== null && props !== void 0 && (_props$paymentConfig = props.paymentConfig) !== null && _props$paymentConfig !== void 0 && (_props$paymentConfig = _props$paymentConfig.keys) !== null && _props$paymentConfig !== void 0 && _props$paymentConfig.paystack && props !== null && props !== void 0 && (_props$_loggedIn = props._loggedIn) !== null && _props$_loggedIn !== void 0 && _props$_loggedIn.email)) {
              _context3.next = 20;
              break;
            }
            transactionRef = (0, _uuid.v4)();
            clearTimeout(r);
            _context3.next = 18;
            return PaystackPop.setup({
              key: props.paymentConfig.keys.paystack,
              // Replace with your public key
              email: props._loggedIn.email,
              amount: snapshot.total * 100,
              // the amount value is multiplied by 100 to convert to the lowest currency unit
              currency: (_props$paymentConfig$ = (_props$paymentConfig2 = props.paymentConfig) === null || _props$paymentConfig2 === void 0 || (_props$paymentConfig2 = _props$paymentConfig2.currency) === null || _props$paymentConfig2 === void 0 ? void 0 : _props$paymentConfig2.paystack) !== null && _props$paymentConfig$ !== void 0 ? _props$paymentConfig$ : 'USD',
              // Use GHS for Ghana Cedis or USD for US Dollars
              ref: transactionRef,
              // Replace with a reference you generated
              callback: function callback(response) {
                // Success payment
                props._LocalEventEmitter.dispatch('cart_update', {
                  // Update Server with Purchase transaction. Assume payment received by Paystack approval
                  dispatch: 'purchaseComplete',
                  type: 'paystack',
                  data: {
                    cart: cart,
                    paystackResponse: response,
                    snapshot: snapshot,
                    status: 'payment_complete',
                    transactionRef: transactionRef,
                    type: 'paystack'
                  }
                });
              },
              onClose: function onClose() {
                // Failed payment
                setFetchBusy(false);
                setPageError({
                  message: 'Purchase failed',
                  placement: 'purchase'
                });
              }
            });
          case 18:
            handler = _context3.sent;
            handler.openIframe();
          case 20:
            _context3.next = 24;
            break;
          case 22:
            setFetchBusy(false);
            setPageError({
              message: 'Purchase currently not supported in your Country',
              placement: 'purchase'
            });
          case 24:
            _context3.next = 29;
            break;
          case 26:
            _context3.prev = 26;
            _context3.t0 = _context3["catch"](0);
            setFetchBusy(false);
          case 29:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 26]]);
    }));
    return function (_x5) {
      return _ref3.apply(this, arguments);
    };
  }());
  console.log(props, props._cart);
  var total = (0, _ecommerce.calculateTotal)(cart, null, {
    object: true
  });
  var free = total && Object.prototype.hasOwnProperty.call(total, 'total') && total.total === 0;
  console.log('Cart', cart, total, validCc);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Ecommerce_Cart_Container ".concat(props.className, " ").concat(props.open || props._openMenu && props._openMenu.currentMenu && props._openMenu.currentMenu == 'cart' || tempOveride ? 'Ecommerce_Cart_Container_Visible' : ''),
    ref: container
  }, props.open || props._openMenu && props._openMenu.currentMenu && props._openMenu.currentMenu == 'cart' || tempOveride ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(fetchBusy ? 'fetchNotBusy fetchBusy' : 'fetchNotBusy')
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "Ecommerce_Cart_Internal_Container"
  },
  // this must go into cart module
  !cart || cart && !cart.items || cart && cart.items && cart.items.length === 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "Ecommerce_Prompt"
  }, "Your cart is empty.") : /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p3",
    style: {
      flexDirection: 'column',
      marginTop: '.3rem',
      marginBottom: '.3rem'
    }
  }, cart.items.map(function (item, i) {
    var _item$product, _props$cdn;
    var current = (0, _ecommerce.resolveCurrentStyle)(item.product, item.style);
    var currentOption = (0, _ecommerce.resolveCurrentOption)(current, item.option);
    var price = current && Object.prototype.hasOwnProperty.call(current, 'price') ? current.price : '';
    var useImage = item !== null && item !== void 0 && (_item$product = item.product) !== null && _item$product !== void 0 && _item$product.images && item.product.images[0] && item.product.images[0].name ? item.product.images[0].name : null;
    console.log(item);
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "gap-p2 Ecommerce_Item_Container",
      key: i
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: 'flex',
        gap: '.5rem'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "Ecommerce_Item_Image_Container",
      style: {
        backgroundImage: useImage && props !== null && props !== void 0 && (_props$cdn = props.cdn) !== null && _props$cdn !== void 0 && _props$cdn["static"] ? "url(".concat(props.cdn["static"], "/").concat(useImage, ")") : null
      }
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: (0, _ecommerce.resolveImg)(props.editing, props.cdn),
      className: "Product_img",
      style: {
        width: '45px',
        opacity: useImage ? 0 : 1
      }
    })), /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex gap-p2 Ecommerce_Cart_Title_Main_Container"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "Ecommerce_Title"
    }, item.product.name), /*#__PURE__*/_react["default"].createElement("div", {
      className: "Ecommerce_Cart_Price_Container"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "Ecommerce_Price"
    }, "$", (0, _ecommerce.resolveMoneyFormat)(price)))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex",
      style: {
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
      className: "flex",
      style: {
        fontSize: '.7rem',
        color: 'grey'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", null, current && current.style ? current.style : ''), /*#__PURE__*/_react["default"].createElement("span", null, "\xA0~\xA0"), /*#__PURE__*/_react["default"].createElement("div", null, currentOption && currentOption.option ? "".concat(currentOption.option) : '')), /*#__PURE__*/_react["default"].createElement("div", {
      className: "Ecommerce_Cart_Quantity_Container"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: 'flex',
        alignSelf: 'center'
      }
    }, /*#__PURE__*/_react["default"].createElement(_Inventory["default"], {
      sx: {
        width: '.85rem',
        height: '.9rem',
        marginRight: '.25rem'
      }
    })), /*#__PURE__*/_react["default"].createElement("input", {
      type: "number",
      value: item.quantity,
      style: {
        height: '1.125rem',
        maxWidth: '3rem'
      },
      onChange: handleUpdateQuantity,
      styleId: item.style,
      optionId: item.option,
      productId: item.product.id,
      quantity: item.quantity
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "Ecommerce_Cart_Side_Meta_Container"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        color: 'grey',
        fontSize: '.7rem',
        height: '17px',
        textAlign: 'right'
      }
    }, "Subtotal:"), /*#__PURE__*/_react["default"].createElement("div", {
      className: "Ecommerce_Price"
    }, "$", (0, _ecommerce.resolveMoneyFormat)(item.quantity * price)))))));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '1rem',
      lineHeight: '1.25rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex Ecommerce_Price"
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Items:\xA0"), /*#__PURE__*/_react["default"].createElement("div", null, (0, _ecommerce.resolveMoneyFormat)((0, _ecommerce.calculateTotal)(cart)))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex Ecommerce_Price"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      lineHeight: '1.4rem'
    }
  }, "Cart Total:\xA0"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '1.25rem'
    }
  }, (0, _ecommerce.resolveMoneyFormat)((0, _ecommerce.calculateTotal)(cart)))), (validCc || free) && cart && cart.items && cart.items.length > 0 ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      width: '100%',
      marginBottom: '.25rem'
    },
    onClick: handlePerformPurchase
  }, "Purchase"), pageError && pageError.message && pageError.placement == 'purchase' ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "error",
    style: {
      marginBottom: '.125rem'
    },
    onClick: handleClearError
  }, pageError.message) : null) : null, cartMessages && cartMessages.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p3",
    style: {
      paddingBottom: '.25rem'
    }
  }, cartMessages.map(function (m) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: _defineProperty({
        background: '#4c4c4c',
        padding: '.25rem',
        width: '-webkit-fill-available',
        textAlign: 'center'
      }, "width", '100%')
    }, /*#__PURE__*/_react["default"].createElement("div", null, m.message), m.href ? /*#__PURE__*/_react["default"].createElement("span", null, "\xA0", /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        background: '#eaeaea',
        color: '#000000',
        padding: '.125rem',
        borderRadius: '.125rem'
      }
    }, /*#__PURE__*/_react["default"].createElement("a", {
      href: m.href
    }, /*#__PURE__*/_react["default"].createElement("button", null, m.hrefCta)))) : null);
  })) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Ecommerce_Credit_Card_Module_Container ".concat(validCc ? 'slide_hide slide_hide_do_full_show' : 'slide_hide slide_hide_visible', " ").concat(props.forceShowCc || props._isMobile ? 'slide_hide_do_force_show' : ''),
    style: {
      marginBottom: '.25rem'
    }
  }, showContent ? validCc ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "hover_show ".concat(props.forceShowCc || props._isMobile ? 'hover_show_Cc_force' : '', " Ecommerce_Credit_Card_Label"),
    style: {
      textAlign: 'center'
    }
  }, "Credit Card") : cart && cart.items && cart.items.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.65rem'
    }
  }, free ? '' : 'Add a Credit Card to fulfill Purchase') : null : null, /*#__PURE__*/_react["default"].createElement(_index.CreditCard, _extends({}, props, {
    stagger: 500,
    validCc: validCc,
    setValidCc: setValidCc,
    setShowContent: setShowContent,
    setSolution: setSolution,
    sx: {
      marginBottom: '.5rem',
      marginTop: '.25rem'
    },
    children: props.ccChildren
  }))), validCc && cart && cart.items && cart.items.length > 0 || free ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.65rem',
      lineHeight: '.7rem',
      marginBottom: '.25rem'
    }
  }, "Placing your order above will fulfill payment to the shop vendors and confirms your agreement with ", props.siteTitle, " terms and conditions") : null))) : null));
};
var _default = exports["default"] = Module;