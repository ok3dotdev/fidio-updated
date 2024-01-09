"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _SubMenu = _interopRequireDefault(require("./SubMenu.js"));
var _MenuModule = _interopRequireDefault(require("./Menu.module.scss"));
var _link = _interopRequireDefault(require("next/link"));
var _SignIn = require("/modules/utility/onboarding/SignIn.js");
var _ecommerce = require("/modules/utility/ecommerce/ecommerce.js");
var _cart2 = require("../ecommerce/cart/");
var _index = require("../onboarding/signin/index.js");
var _index2 = require("../help/index.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // import brand from '../../styles/Brand.module.scss';
var Module = function Module(props) {
  var _props$_loggedIn, _props$_loggedIn$meta, _props$_loggedIn2, _props$paymentConfig;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    fetchBusy = _React$useState2[0],
    setFetchBusy = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    pageError = _React$useState4[0],
    setPageError = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(true),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    validCc = _React$useState6[0],
    setValidCc = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    helpOpen = _React$useState8[0],
    setHelpOpen = _React$useState8[1];
  var handleClearError = _react["default"].useCallback(function (e) {
    setPageError(null);
  });
  var handleToggleSettings = _react["default"].useCallback(function (e) {
    if (e && props && props._toggleSingleOpenMenu) {
      props._toggleSingleOpenMenu(e, 'main_settings');
    }
  }, [props._openMenu]);
  var handleLogout = _react["default"].useCallback(function (e) {
    (0, _SignIn.logout)(props._setLoggedIn);
    props._toggleSingleOpenMenu(e, 'main_settings');
    setTimeout(function () {
      props._LocalEventEmitter.dispatch('showSignIn', {});
    }, 4000); // Give time to logout before firing event
  });
  var fireShowSignIn = _react["default"].useCallback(function (e) {
    props._toggleSingleOpenMenu(e, 'main_settings');
    (0, _SignIn.checkSignedInAndPrompt)();
  });
  var toggleCart = _react["default"].useCallback(function (e) {
    if (e && props && props._toggleSingleOpenMenu) {
      props._toggleSingleOpenMenu(e, 'cart');
    }
  });

  /**
   * Ensures cart is open after interaction if menuConfig.menuOpenAfterCartInteraction is set to true
   */
  var passOveride = _react["default"].useCallback(function (e) {
    if (props.menuConfig.menuOpenAfterCartInteraction) {
      props._toggleSingleOpenMenu(e, 'cart', true);
    }
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
  var handlePerformPurchase = _react["default"].useCallback( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
      var snapshot, res;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            if (fetchBusy) {
              _context2.next = 12;
              break;
            }
            setFetchBusy(true);
            setPageError(null);
            console.log(cart);
            snapshot = (0, _ecommerce.calculateTotal)(cart, null, {
              object: true
            });
            console.log('snapshot', snapshot);
            _context2.next = 9;
            return (0, _ecommerce.performPurchase)(props.apiUrl, props.domainKey, props._loggedIn, cart, setFetchBusy, {
              snapshot: snapshot
            });
          case 9:
            res = _context2.sent;
            if (res) {
              console.log(res);
              if (res.status === 'success') {
                // if (res.data && res.data.cart) {
                //     updateCart(props._cart, res.data.cart)
                // }
                console.log('Purchase Success', res);
              }
            } else {
              setPageError({
                message: 'Purchase failed',
                placement: 'purchase'
              });
            }
            setFetchBusy(false);
          case 12:
            _context2.next = 17;
            break;
          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](0);
            setFetchBusy(false);
          case 17:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 14]]);
    }));
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());
  var fireShareFeedback = _react["default"].useCallback(function (e) {
    console.log('Fire share feedback');
  });
  var fireHelp = _react["default"].useCallback(function (e) {
    if (helpOpen) {
      setHelpOpen(false);
      return;
    }
    setHelpOpen(true);
    return;
  });
  var resolvedCountry = props !== null && props !== void 0 && props.regionsData && props !== null && props !== void 0 && (_props$_loggedIn = props._loggedIn) !== null && _props$_loggedIn !== void 0 && (_props$_loggedIn = _props$_loggedIn.meta) !== null && _props$_loggedIn !== void 0 && (_props$_loggedIn = _props$_loggedIn.locationMeta) !== null && _props$_loggedIn !== void 0 && _props$_loggedIn.country && props.regionsData[props._loggedIn.meta.locationMeta.country] && props.regionsData[props._loggedIn.meta.locationMeta.country].name ? props.regionsData[props._loggedIn.meta.locationMeta.country].name : (_props$_loggedIn$meta = props === null || props === void 0 || (_props$_loggedIn2 = props._loggedIn) === null || _props$_loggedIn2 === void 0 || (_props$_loggedIn2 = _props$_loggedIn2.meta) === null || _props$_loggedIn2 === void 0 || (_props$_loggedIn2 = _props$_loggedIn2.locationMeta) === null || _props$_loggedIn2 === void 0 ? void 0 : _props$_loggedIn2.country) !== null && _props$_loggedIn$meta !== void 0 ? _props$_loggedIn$meta : null;

  // console.log('Cart', cart, props.menuConfig.right)

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 100 + "%",
      height: props.menuConfig.height ? props.menuConfig.height + 'px' : '',
      padding: props.menuConfig.padding ? props.menuConfig.padding : ''
    },
    className: "leadMenuContainer ".concat(_MenuModule["default"].container, " darkModeEnforce Menu_LeadContainer ").concat(props.className)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      paddingBottom: 0,
      paddingTop: 0,
      maxHeight: '100%'
    },
    className: "margin1600 menuContainer"
  }, /*#__PURE__*/_react["default"].createElement(_SubMenu["default"], props), /*#__PURE__*/_react["default"].createElement("ul", {
    className: !props._loggedIn ? "".concat(_MenuModule["default"].menu, " ").concat(_MenuModule["default"].menuClosed) : _MenuModule["default"].menu
  }, props.menuConfig && props.menuConfig.right ? props.menuConfig.right.map(function (c, i) {
    var _props$_loggedIn$icon, _props$_loggedIn3, _props$_loggedIn4, _props$_loggedIn5, _props$siteTitle;
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
      key: i
    }, c.type ? c.type === 'user' ? props._loggedIn ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "menuLinkSelector ".concat(c.className),
      style: {
        position: 'relative',
        alignSelf: 'center'
      },
      key: i
    }, /*#__PURE__*/_react["default"].createElement("li", {
      className: "".concat(_MenuModule["default"].menuLink, " darkMenuLink"),
      onClick: handleToggleSettings
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "".concat(_MenuModule["default"].menuLinkText)
    }, /*#__PURE__*/_react["default"].createElement("div", null, props._loggedIn && props._loggedIn.username ? props._loggedIn.username : 'Dashboard'), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_MenuModule["default"].menuLinkIconPair, " ").concat(_MenuModule["default"].maxIconWidth, " person material-icons")
    }, "person")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_MenuModule["default"].menuLinkIcon, " ").concat(_MenuModule["default"].maxIconWidth, " person material-icons")
    }, "person")), props._openMenu && props._openMenu.currentMenu && props._openMenu.currentMenu == 'main_settings' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "dropMenu"
    }, /*#__PURE__*/_react["default"].createElement("ul", null, props._loggedIn ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/p",
      className: "menuLinkSelector ".concat(c.className),
      style: {
        position: 'relative',
        alignSelf: 'center'
      },
      key: i
    }, /*#__PURE__*/_react["default"].createElement("li", {
      style: {
        padding: '.75rem'
      }
    }, /*#__PURE__*/_react["default"].createElement("img", {
      className: "".concat(_MenuModule["default"].profileIcon),
      src: (_props$_loggedIn$icon = props === null || props === void 0 || (_props$_loggedIn3 = props._loggedIn) === null || _props$_loggedIn3 === void 0 ? void 0 : _props$_loggedIn3.icon) !== null && _props$_loggedIn$icon !== void 0 ? _props$_loggedIn$icon : ''
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_MenuModule["default"].profileItemDataContainer)
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        fontWeight: '700'
      }
    }, "@", props._loggedIn.username), /*#__PURE__*/_react["default"].createElement("a", {
      href: "/p",
      className: "a",
      style: {
        alignItems: 'center',
        display: 'flex',
        gap: '.25rem'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "material-icons"
    }, "account_box"), /*#__PURE__*/_react["default"].createElement("div", null, "View Your Profile")))))) : null, props._loggedIn ? /*#__PURE__*/_react["default"].createElement(_index.Username, props) : null, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        borderTop: '1px solid grey',
        margin: '.25rem 0'
      }
    }), props._loggedIn ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/settings",
      className: "menuLinkSelector ".concat(c.className),
      onClick: handleToggleSettings,
      style: {
        position: 'relative',
        alignSelf: 'center'
      },
      key: i
    }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "material-icons"
    }, "settings"), /*#__PURE__*/_react["default"].createElement("div", null, "Settings"))), /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/settings?t=orders",
      className: "menuLinkSelector ".concat(c.className),
      onClick: handleToggleSettings,
      style: {
        position: 'relative',
        alignSelf: 'center'
      },
      key: i
    }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "material-icons"
    }, "receipt"), /*#__PURE__*/_react["default"].createElement("div", null, "Orders"))), /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/settings?t=payment",
      className: "menuLinkSelector ".concat(c.className),
      onClick: handleToggleSettings,
      style: {
        position: 'relative',
        alignSelf: 'center'
      },
      key: i
    }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "material-icons"
    }, "payment"), /*#__PURE__*/_react["default"].createElement("div", null, "Payment Methods")))) : null, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        borderTop: '1px solid grey',
        margin: '.25rem 0'
      }
    }), (_props$_loggedIn4 = props._loggedIn) !== null && _props$_loggedIn4 !== void 0 && (_props$_loggedIn4 = _props$_loggedIn4.meta) !== null && _props$_loggedIn4 !== void 0 && (_props$_loggedIn4 = _props$_loggedIn4.locationMeta) !== null && _props$_loggedIn4 !== void 0 && _props$_loggedIn4.city && (_props$_loggedIn5 = props._loggedIn) !== null && _props$_loggedIn5 !== void 0 && (_props$_loggedIn5 = _props$_loggedIn5.meta) !== null && _props$_loggedIn5 !== void 0 && (_props$_loggedIn5 = _props$_loggedIn5.locationMeta) !== null && _props$_loggedIn5 !== void 0 && _props$_loggedIn5.country ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/offers",
      className: "menuLinkSelector ".concat(c.className),
      onClick: handleToggleSettings,
      style: {
        position: 'relative',
        alignSelf: 'center'
      },
      key: i
    }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "material-icons"
    }, "redeem"), /*#__PURE__*/_react["default"].createElement("div", null, "Offers and Gifts"))), /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/settings?t=location",
      className: "menuLinkSelector ".concat(c.className),
      onClick: handleToggleSettings,
      style: {
        position: 'relative',
        alignSelf: 'center'
      },
      key: i
    }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "material-icons"
    }, "flag"), /*#__PURE__*/_react["default"].createElement("div", null, "Location:\xA0", /*#__PURE__*/_react["default"].createElement("span", null, resolvedCountry)))), /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        borderTop: '1px solid grey',
        margin: '.25rem 0'
      }
    })) : null, props._loggedIn ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("li", {
      onClick: handleLogout
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "material-icons"
    }, "logout"), /*#__PURE__*/_react["default"].createElement("div", null, "Sign Out"))) : null, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        borderTop: '1px solid grey',
        margin: '.25rem 0'
      }
    }), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("li", {
      onClick: fireHelp
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "material-icons"
    }, "help"), /*#__PURE__*/_react["default"].createElement("div", null, "Help"))), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("li", {
      onClick: fireShareFeedback
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "material-icons"
    }, "feedback"), /*#__PURE__*/_react["default"].createElement("div", null, "Share Feedback"))))) : null) : /*#__PURE__*/_react["default"].createElement("div", {
      className: "menuLinkSelector ".concat(c.className),
      style: {
        position: 'relative',
        alignSelf: 'center'
      },
      key: i
    }, /*#__PURE__*/_react["default"].createElement("li", {
      className: "".concat(_MenuModule["default"].menuLink, " darkMenuLink"),
      onClick: fireShowSignIn
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "".concat(_MenuModule["default"].menuLinkText)
    }, /*#__PURE__*/_react["default"].createElement("div", null, "Login"), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_MenuModule["default"].menuLinkIconPair, " ").concat(_MenuModule["default"].maxIconWidth, " person material-icons")
    }, "person")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_MenuModule["default"].menuLinkIcon, " ").concat(_MenuModule["default"].maxIconWidth, " person material-icons")
    }, "person")), props._openMenu && props._openMenu.currentMenu && props._openMenu.currentMenu == 'main_settings' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "dropMenu"
    }, /*#__PURE__*/_react["default"].createElement("ul", null, !props._loggedIn ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        padding: '.5rem .5rem .125rem'
      }
    }, "Sign In to ", (_props$siteTitle = props === null || props === void 0 ? void 0 : props.siteTitle) !== null && _props$siteTitle !== void 0 ? _props$siteTitle : 'Tycoon', " Below"), /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        borderTop: '3px solid grey',
        margin: '.25rem 0'
      }
    }), /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        padding: '.5rem',
        paddingTop: '0'
      }
    }, /*#__PURE__*/_react["default"].createElement(_index.SignIn, _extends({}, props, {
      maxWidth: '100%'
    })))) : null)) : null) : c.type === 'cart' ? /*#__PURE__*/_react["default"].createElement("li", {
      className: "".concat(_MenuModule["default"].menuLink, " darkMenuLink menuLinkSelector ").concat(c.className),
      onClick: toggleCart,
      style: {
        alignSelf: 'center'
      },
      key: i
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "".concat(_MenuModule["default"].menuLinkText)
    }, /*#__PURE__*/_react["default"].createElement("div", null, "Cart"), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_MenuModule["default"].menuLinkIconPair, " ").concat(_MenuModule["default"].maxIconWidth, " cart material-icons")
    }, "shopping_cart")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_MenuModule["default"].menuLinkIcon, " ").concat(_MenuModule["default"].maxIconWidth, " cart material-icons")
    }, "shopping_cart")) : c.type === 'stream' ? /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: c.href,
      className: "menuLinkSelector ".concat(c.className),
      style: {
        alignSelf: 'center'
      },
      key: i
    }, /*#__PURE__*/_react["default"].createElement("li", {
      className: "".concat(_MenuModule["default"].menuLink, " darkMenuLink menuLinkSelector ").concat(c.className),
      style: {
        alignSelf: 'center'
      },
      key: i
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "".concat(_MenuModule["default"].menuLinkText)
    }, /*#__PURE__*/_react["default"].createElement("div", null, "Stream"), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_MenuModule["default"].menuLinkIconPair, " ").concat(_MenuModule["default"].maxIconWidth, " live_tv material-icons")
    }, "live_tv")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_MenuModule["default"].menuLinkIcon, " ").concat(_MenuModule["default"].maxIconWidth, " live_tv material-icons")
    }, "live_tv"))) : c.type === 'link' ? /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: c.href,
      className: "menuLinkSelector ".concat(c.className),
      style: {
        alignSelf: 'center'
      },
      key: i
    }, /*#__PURE__*/_react["default"].createElement("li", {
      className: "".concat(_MenuModule["default"].menuLink, " darkMenuLink menuLinkSelector ").concat(c.className),
      style: {
        alignSelf: 'center'
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "".concat(_MenuModule["default"].menuLinkText)
    }, /*#__PURE__*/_react["default"].createElement("div", null, c.name)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_MenuModule["default"].menuLinkIcon, " ").concat(_MenuModule["default"].maxIconWidth, " material-icons")
    }, c.name))) : null : null);
  }) : null)), /*#__PURE__*/_react["default"].createElement(_index2.Help, _extends({}, props, {
    open: helpOpen,
    setHelpOpen: setHelpOpen
  })), /*#__PURE__*/_react["default"].createElement(_cart2.Cart, _extends({}, props, {
    passOveride: passOveride,
    forceShowCc: props === null || props === void 0 || (_props$paymentConfig = props.paymentConfig) === null || _props$paymentConfig === void 0 ? void 0 : _props$paymentConfig.forceShowCc
  })));
};
var _default = exports["default"] = Module;