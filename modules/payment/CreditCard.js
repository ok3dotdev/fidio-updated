"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactStripeJs = require("@stripe/react-stripe-js");
var _stripeJs = require("@stripe/stripe-js");
var _index = require("../utility/payment/index");
var _SignIn = require("../utility/onboarding/SignIn");
var _button;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DEFAULT_SOLUTION = {
  payment: 'stripe'
};
var Module = function Module(props) {
  var _props$paymentConfig2;
  var nameOnCard = _react["default"].useRef();
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    stagger = _React$useState4[0],
    setStagger = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    validCc = _React$useState6[0],
    setValidCc = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    fetchingCc = _React$useState8[0],
    setFetchingCc = _React$useState8[1];
  var _React$useState9 = _react["default"].useState(null),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    stripePromise = _React$useState10[0],
    setStripePromise = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(false),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    registerNewCard = _React$useState12[0],
    setRegisterNewCard = _React$useState12[1];
  var _React$useState13 = _react["default"].useState(false),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    fetchBusy = _React$useState14[0],
    setFetchBusy = _React$useState14[1];
  var _React$useState15 = _react["default"].useState(DEFAULT_SOLUTION),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    solution = _React$useState16[0],
    setSolution = _React$useState16[1];
  var staggerRef = _react["default"].useRef();
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      // TODO on mount. If user logged in but no locationData must request location data from server to see if it has been loaded and load it to _loggedIn
      if (props.setSolution) {
        props.setSolution(solution);
      }
      if (props.stagger) {
        staggerRef.current = setTimeout(function () {
          setStagger(true);
        }, props.stagger);
      }
      setComponentDidMount(true);
    }
  }, [componentDidMount, props.stagger, solution]);

  /**
   * Sets payment solution based off of users current location
   */
  _react["default"].useEffect(function () {
    var _props$_loggedIn;
    if (props !== null && props !== void 0 && (_props$_loggedIn = props._loggedIn) !== null && _props$_loggedIn !== void 0 && (_props$_loggedIn = _props$_loggedIn.meta) !== null && _props$_loggedIn !== void 0 && _props$_loggedIn.location && props !== null && props !== void 0 && props.regionsData) {
      if (props.regionsData[props._loggedIn.meta.location]) {
        var useSolution = props.regionsData[props._loggedIn.meta.location];
        if (useSolution.payment !== solution.payment || !solution || solution && !solution.payment) {
          setSolution(useSolution);
          if (props.setSolution) {
            props.setSolution(useSolution);
          }
          if (props.setShowContent) {
            props.setShowContent(['stripe'].indexOf(useSolution.payment) > -1);
          }
        }
      }
    }
  }, [props._loggedIn, props.regionsData, solution, props.setSolution]);
  _react["default"].useEffect(function () {
    var _props$paymentConfig;
    console.log(props.useAdmin, props.paymentConfig);
    if (props !== null && props !== void 0 && props.useAdmin) {
      // Register with Admin Payment Client Stripe Key
      var prom = (0, _stripeJs.loadStripe)(props.useAdmin);
      if (prom) {
        setStripePromise(prom);
      }
    } else if (props !== null && props !== void 0 && (_props$paymentConfig = props.paymentConfig) !== null && _props$paymentConfig !== void 0 && (_props$paymentConfig = _props$paymentConfig.keys) !== null && _props$paymentConfig !== void 0 && _props$paymentConfig.stripe && !stripePromise) {
      // Register with normal Payment Client Stripe Key
      var _prom = (0, _stripeJs.loadStripe)(props.paymentConfig.keys.stripe);
      if (_prom) {
        setStripePromise(_prom);
      }
    }
  }, [props === null || props === void 0 || (_props$paymentConfig2 = props.paymentConfig) === null || _props$paymentConfig2 === void 0 || (_props$paymentConfig2 = _props$paymentConfig2.keys) === null || _props$paymentConfig2 === void 0 ? void 0 : _props$paymentConfig2.stripe, props.useAdmin]);
  _react["default"].useEffect(function () {
    function fn() {
      return _fn.apply(this, arguments);
    }
    function _fn() {
      _fn = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(solution.payment === 'stripe')) {
                _context.next = 19;
                break;
              }
              if (!(!validCc && props._loggedIn && !fetchingCc && !props._stripeSecret)) {
                _context.next = 19;
                break;
              }
              _context.prev = 2;
              setFetchingCc(true);
              _context.next = 6;
              return (0, _index.getStripeSecretData)(props.apiUrl, props.domainKey, props._loggedIn, {
                useAdmin: props === null || props === void 0 ? void 0 : props.useAdmin
              });
            case 6:
              data = _context.sent;
              if (!(data && data.client_secret && data.card)) {
                _context.next = 12;
                break;
              }
              props._setStripeSecret(data);
              setFetchingCc(false);
              _context.next = 13;
              break;
            case 12:
              throw new Error();
            case 13:
              _context.next = 19;
              break;
            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](2);
              console.log(_context.t0);
              setFetchingCc(false);
            case 19:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[2, 15]]);
      }));
      return _fn.apply(this, arguments);
    }
    fn();
  }, [props._loggedIn, props._stripeSecret, solution, props.useAdmin]);
  var handleSaveBillingInfo = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e, elements, stripe, nameOnCard) {
      var user, data, res;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            e.preventDefault();
            console.log(e, elements, stripe, nameOnCard);
            if (fetchBusy) {
              _context2.next = 23;
              break;
            }
            setFetchBusy(true);
            setTimeout(function () {
              setFetchBusy(false);
            }, 15000);
            user = (0, _SignIn.checkSignedInAndPrompt)();
            if (!user) {
              _context2.next = 23;
              break;
            }
            if (!(nameOnCard && nameOnCard.current && nameOnCard.current.value)) {
              _context2.next = 21;
              break;
            }
            data = {
              fullName: "",
              result: null,
              stripeSecret: props._stripeSecret
            };
            data.fullName = nameOnCard.current.value;
            _context2.next = 13;
            return stripe.confirmCardSetup(props._stripeSecret.client_secret, {
              // Stores credit card on users account
              payment_method: {
                card: elements.getElement(_reactStripeJs.CardElement),
                billing_details: {
                  name: data.fullName
                }
              }
            });
          case 13:
            data.result = _context2.sent;
            console.log('Stripe Payment', data, props);
            _context2.next = 17;
            return (0, _index.saveCreditCardInfo)(props.apiUrl, props.domainKey, data, _SignIn.checkSignedIn, {
              useAdmin: props === null || props === void 0 ? void 0 : props.useAdmin
            });
          case 17:
            res = _context2.sent;
            if (!res) {
              props._setPageError("Failed to save Credit Card");
              setFetchBusy(false);
            } else if (res == "disauthenticated") {
              props._setLoggedIn(false);
              props._setStripeSecret(false);
              (0, _SignIn.logout)();
              setFetchBusy(false);
            } else if (res.status == "success" && res.newSecret) {
              setRegisterNewCard(false);
              // On successfull credit card received, purchase phone number and then update locally
              props._setStripeSecret(res.newSecret);
              setFetchBusy(false);
            }
            _context2.next = 23;
            break;
          case 21:
            props._setPageError("Please type in your Full Name as it appears on your Credit Card");
            setFetchBusy(false);
          case 23:
            _context2.next = 29;
            break;
          case 25:
            _context2.prev = 25;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0); // fail silently
            setFetchBusy(false);
          case 29:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 25]]);
    }));
    return function handleSaveBillingInfo(_x, _x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }();
  _react["default"].useEffect(function () {
    buildValidCc(props._stripeSecret);
  }, [props._stripeSecret]);
  var buildValidCc = function buildValidCc(secret) {
    var _secret$card, _secret$card$data$, _secret$card$data$2;
    if (secret !== null && secret !== void 0 && (_secret$card = secret.card) !== null && _secret$card !== void 0 && _secret$card.data && secret.card.data[0] && (_secret$card$data$ = secret.card.data[0]) !== null && _secret$card$data$ !== void 0 && _secret$card$data$.card && (_secret$card$data$2 = secret.card.data[0]) !== null && _secret$card$data$2 !== void 0 && _secret$card$data$2.billing_details) {
      var _secret$card$data$0$c, _secret$card$data$0$c2, _secret$card$data$0$c3;
      if ((_secret$card$data$0$c = secret.card.data[0].card) !== null && _secret$card$data$0$c !== void 0 && _secret$card$data$0$c.last4 && (_secret$card$data$0$c2 = secret.card.data[0].card) !== null && _secret$card$data$0$c2 !== void 0 && _secret$card$data$0$c2.exp_month && (_secret$card$data$0$c3 = secret.card.data[0].card) !== null && _secret$card$data$0$c3 !== void 0 && _secret$card$data$0$c3.exp_year) {
        var convExp = function convExp(exp) {
          try {
            var temp = exp.toString();
            if (temp.length === 4) {
              return temp.substring(2, 4);
            }
            throw new Error();
          } catch (err) {
            return exp;
          }
        };
        setValidCc({
          name: secret.card.data[0].billing_details.name ? secret.card.data[0].billing_details.name : null,
          last4: secret.card.data[0].card.last4,
          exp_month: secret.card.data[0].card.exp_month,
          exp_year: convExp(secret.card.data[0].card.exp_year)
        });
      }
    }
  };
  if (props.setValidCc && props.validCc !== validCc) {
    props.setValidCc(validCc);
  }
  _react["default"].useEffect(function () {
    if (props !== null && props !== void 0 && props._stripeSecret.adminSecret && props.validCc && !props.useAdmin) {
      // Use admin is off and the stripe secret is for an admin. Turn off stripe secret. Reset
      setValidCc(false);
      props._setStripeSecret(false);
    } else if (props.useAdmin && props !== null && props !== void 0 && props._stripeSecret && !props._stripeSecret.adminSecret) {
      // Use admin is true but stripe secret does not have adminSecret flag. Turn off stripe secret. Reset
      setValidCc(false);
      props._setStripeSecret(false);
    }
  }, [props === null || props === void 0 ? void 0 : props._stripeSecret, props === null || props === void 0 ? void 0 : props.useAdmin, props === null || props === void 0 ? void 0 : props.validCc]);
  var handleRegisterNewCard = _react["default"].useCallback(function (e) {
    if (registerNewCard) {
      setRegisterNewCard(false);
      return 1;
    }
    setRegisterNewCard(true);
  });
  console.log('CC', solution, props._stripeSecret);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className),
    style: props.sx
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(fetchBusy ? 'fetchNotBusy fetchBusy' : 'fetchNotBusy')
  }), props.useAdmin ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: '#353535'
    }
  }, "Payments to Tycoon Systems Corp.") : null, !props.stagger || props.stagger && stagger ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, (solution === null || solution === void 0 ? void 0 : solution.payment) === 'stripe' ? validCc && !registerNewCard ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Ecommerce_CreditCard_Container",
    style: {
      padding: '.125rem'
    }
  }, props.purchaseDescription ? /*#__PURE__*/_react["default"].createElement("span", null, props.purchaseDescription) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Ecommerce_CreditCard_Container_Meta"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      marginBottom: .1 + "rem",
      paddingBottom: 0 + "rem",
      margin: 0
    }
  }, "Ending in ", /*#__PURE__*/_react["default"].createElement("span", null, validCc.last4)), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      marginBottom: .1 + "rem",
      paddingBottom: 0 + "rem",
      margin: 0
    }
  }, "Expiry ", /*#__PURE__*/_react["default"].createElement("span", null, validCc.exp_month, " / ", validCc.exp_year))), validCc.name ? /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      marginTop: 0,
      margin: 0
    }
  }, validCc.name) : null))) : props._stripeSecret && props._stripeSecret.client_secret ? /*#__PURE__*/_react["default"].createElement(_reactStripeJs.Elements, {
    stripe: stripePromise,
    options: {
      clientSecret: props._stripeSecret.client_secret
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactStripeJs.ElementsConsumer, null, function (_ref2) {
    var elements = _ref2.elements,
      stripe = _ref2.stripe;
    return /*#__PURE__*/_react["default"].createElement("form", {
      onSubmit: function onSubmit(e) {
        handleSaveBillingInfo(e, elements, stripe, nameOnCard);
      },
      style: {
        display: 'grid',
        gap: '.125rem'
      }
    }, /*#__PURE__*/_react["default"].createElement("input", {
      type: "text",
      placeholder: "Full Name on Card",
      ref: nameOnCard
    }), /*#__PURE__*/_react["default"].createElement(_reactStripeJs.CardElement, {
      options: {
        iconStyle: 'solid',
        style: {
          base: {
            fontSize: '16px',
            color: 'black',
            fontWeight: 500,
            '::placeholder': {
              color: 'grey'
            },
            fontSmoothing: 'antialiased',
            width: 100 + "%",
            backgroundColor: 'white'
          },
          invalid: {
            color: '#9e2146'
          }
        }
      }
    }), _button || (_button = /*#__PURE__*/_react["default"].createElement("button", {
      type: "submit"
    }, "Save Billing Info")));
  })) : null : null, (solution === null || solution === void 0 ? void 0 : solution.payment) === 'stripe' ? validCc ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'grid',
      gap: '.125rem',
      marginTop: '.125rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    onClick: handleRegisterNewCard
  }, registerNewCard ? 'Use Current Card' : 'Register New Card')) : null : null) : null, props.children);
};
var _default = exports["default"] = Module;