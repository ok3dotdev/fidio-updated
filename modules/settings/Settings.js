"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _router = require("next/router");
var _SettingsModule = _interopRequireDefault(require("./Settings.module.scss"));
var _payment = require("../payment");
var _uuid = require("uuid");
var _Close = _interopRequireDefault(require("@mui/icons-material/Close"));
var _onboarding = require("../utility/onboarding");
var _orders = require("../utility/utility/orders");
var _ecommerce = require("../utility/ecommerce");
var _Inventory = _interopRequireDefault(require("@mui/icons-material/Inventory"));
var _ReceiptPageModule = _interopRequireDefault(require("../ecommerce/receipt/ReceiptPage.module.scss"));
var _event = require("../utility/utility/event");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Module = function Module(props) {
  var _props$settingsConfig, _props$_loggedIn3, _props$_loggedIn$meta, _props$_loggedIn4, _props$_loggedIn12, _props$_loggedIn13, _settingsConfig$tabs$2, _props$_loggedIn$icon, _props$_loggedIn14, _props$_loggedIn15, _settingsConfig$tabs$3, _settingsConfig$tabs$4;
  var router = (0, _router.useRouter)();
  var query = router.query,
    asPath = router.asPath;
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
    pageError = _React$useState6[0],
    setPageError = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(0),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    currentTab = _React$useState8[0],
    setCurrentTab = _React$useState8[1];
  var _React$useState9 = _react["default"].useState({}),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    editedInputs = _React$useState10[0],
    setEditedInputs = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(false),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    editingUsername = _React$useState12[0],
    setEditingUsername = _React$useState12[1];
  var _React$useState13 = _react["default"].useState(null),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    resolvedOrders = _React$useState14[0],
    setResolvedOrders = _React$useState14[1];
  var _React$useState15 = _react["default"].useState(false),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    fetchBusy = _React$useState16[0],
    setFetchBusy = _React$useState16[1];
  var settingsConfig = (_props$settingsConfig = props === null || props === void 0 ? void 0 : props.settingsConfig) !== null && _props$settingsConfig !== void 0 ? _props$settingsConfig : {};
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      if (query !== null && query !== void 0 && query.t) {
        var f = settingsConfig.tabs.findIndex(function (m) {
          console.log(m.label.toLowerCase(), query.t);
          if ((m === null || m === void 0 ? void 0 : m.label.toLowerCase()) === (query === null || query === void 0 ? void 0 : query.t)) {
            return true;
          }
          return false;
        });
        if (f > -1) {
          setCurrentTab(f);
        }
      }
      var id = (0, _uuid.v4)();
      setComponentId(id);
      setComponentDidMount(true);
    }
  }, [componentDidMount, currentTab]);
  _react["default"].useEffect(function () {
    var _settingsConfig$tabs$;
    if (!resolvedOrders && settingsConfig !== null && settingsConfig !== void 0 && settingsConfig.tabs && settingsConfig !== null && settingsConfig !== void 0 && settingsConfig.tabs[currentTab] && (_settingsConfig$tabs$ = settingsConfig.tabs[currentTab]) !== null && _settingsConfig$tabs$ !== void 0 && _settingsConfig$tabs$.items && !fetchBusy && props._loggedIn) {
      var indexOfOrders = settingsConfig.tabs[currentTab].items.findIndex(function (m) {
        return m.type && m.type === 'orders';
      });
      if (indexOfOrders > -1) {
        var f = /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var user, userOrders;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  user = (0, _onboarding.checkSignedIn)();
                  _context.next = 3;
                  return (0, _orders.getOrders)(props.apiUrl, props.domainKey, user, 0);
                case 3:
                  userOrders = _context.sent;
                  if (userOrders !== null && userOrders !== void 0 && userOrders.data) {
                    setResolvedOrders({
                      received: new Date().getTime(),
                      orders: userOrders.data
                    });
                  } else {
                    setResolvedOrders({});
                  }
                case 5:
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
      }
    }
  }, [resolvedOrders, settingsConfig === null || settingsConfig === void 0 ? void 0 : settingsConfig.tab, currentTab, fetchBusy]);
  var handleChange = function handleChange(e) {
    var modif = e === null || e === void 0 ? void 0 : e.currentTarget.getAttribute('modif');
    if (modif) {
      setEditedInputs(_objectSpread(_objectSpread({}, editedInputs), {}, _defineProperty({}, modif, true)));
    }
  };
  var saveChange = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
      var modif, _res, res, _document$getElementB, proposed, _document$getElementB2, _document$getElementB3, _props$_loggedIn, _document$getElementB4, _document$getElementB5, _props$_loggedIn2, _proposed, _document$getElementB6, _proposed2;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            modif = e === null || e === void 0 ? void 0 : e.currentTarget.getAttribute('modif');
            if (!modif) {
              _context2.next = 32;
              break;
            }
            setPageError(null);
            if (!(modif === 'username')) {
              _context2.next = 14;
              break;
            }
            console.log(e);
            proposed = (_document$getElementB = document.getElementById("Settings_".concat(componentId, "_Username_Input"))) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.value;
            console.log(proposed);
            if (!proposed) {
              _context2.next = 11;
              break;
            }
            _context2.next = 10;
            return (0, _onboarding.requestSettingsUpdate)(props.apiUrl, props.domainKey, {
              username: proposed
            }, props, setFetchBusy, fetchBusy);
          case 10:
            res = _context2.sent;
          case 11:
            handleChangeUsername();
            _context2.next = 30;
            break;
          case 14:
            if (!(modif === 'firstName' || modif === 'lastName')) {
              _context2.next = 24;
              break;
            }
            _proposed = {
              firstName: (_document$getElementB2 = (_document$getElementB3 = document.getElementById("Settings_".concat(componentId, "_firstName_Input"))) === null || _document$getElementB3 === void 0 ? void 0 : _document$getElementB3.value) !== null && _document$getElementB2 !== void 0 ? _document$getElementB2 : props === null || props === void 0 || (_props$_loggedIn = props._loggedIn) === null || _props$_loggedIn === void 0 || (_props$_loggedIn = _props$_loggedIn.meta) === null || _props$_loggedIn === void 0 ? void 0 : _props$_loggedIn.firstName,
              lastName: (_document$getElementB4 = (_document$getElementB5 = document.getElementById("Settings_".concat(componentId, "_lastName_Input"))) === null || _document$getElementB5 === void 0 ? void 0 : _document$getElementB5.value) !== null && _document$getElementB4 !== void 0 ? _document$getElementB4 : props === null || props === void 0 || (_props$_loggedIn2 = props._loggedIn) === null || _props$_loggedIn2 === void 0 || (_props$_loggedIn2 = _props$_loggedIn2.meta) === null || _props$_loggedIn2 === void 0 ? void 0 : _props$_loggedIn2.lastName
            };
            if (!_proposed) {
              _context2.next = 22;
              break;
            }
            _context2.next = 19;
            return (0, _onboarding.requestSettingsUpdate)(props.apiUrl, props.domainKey, {
              fullName: _proposed
            }, props, setFetchBusy, fetchBusy);
          case 19:
            res = _context2.sent;
            setEditedInputs(_objectSpread(_objectSpread({}, editedInputs), {}, {
              firstName: false
            }));
            setEditedInputs(_objectSpread(_objectSpread({}, editedInputs), {}, {
              lastName: false
            }));
          case 22:
            _context2.next = 30;
            break;
          case 24:
            if (!(modif === 'keepSubscriptionsPrivate')) {
              _context2.next = 30;
              break;
            }
            if (!document.getElementById("Settings_".concat(componentId, "_keepSubscriptionsPrivate_Input"))) {
              _context2.next = 30;
              break;
            }
            _proposed2 = (_document$getElementB6 = document.getElementById("Settings_".concat(componentId, "_keepSubscriptionsPrivate_Input"))) === null || _document$getElementB6 === void 0 ? void 0 : _document$getElementB6.checked;
            _context2.next = 29;
            return (0, _onboarding.requestSettingsUpdate)(props.apiUrl, props.domainKey, {
              keepSubscriptionsPrivate: _proposed2
            }, props, setFetchBusy, fetchBusy);
          case 29:
            res = _context2.sent;
          case 30:
            if (((_res = res) === null || _res === void 0 ? void 0 : _res.status) !== 'success' && res.message) {
              setPageError(res.message);
            }
            setEditedInputs(_objectSpread(_objectSpread({}, editedInputs), {}, _defineProperty({}, modif, false)));
          case 32:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function saveChange(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleChangeUsername = function handleChangeUsername() {
    if (editingUsername) {
      setEditingUsername(false);
      return;
    }
    setEditingUsername(true);
    return;
  };
  var handleCloseError = function handleCloseError() {
    setPageError(null);
  };
  var cancelCloseAccount = function cancelCloseAccount() {
    setEditedInputs(_objectSpread(_objectSpread({}, editedInputs), {}, {
      closeAccount: false
    }));
  };
  var resolveOrderImg = function resolveOrderImg(m) {
    var _props$cdn;
    if (m && props !== null && props !== void 0 && (_props$cdn = props.cdn) !== null && _props$cdn !== void 0 && _props$cdn["static"]) {
      var _m$product;
      if ((m === null || m === void 0 || (_m$product = m.product) === null || _m$product === void 0 || (_m$product = _m$product.images) === null || _m$product === void 0 ? void 0 : _m$product.length) > 0) {
        var useImg = m.product.images.find(function (n) {
          var _n$leadImg;
          return (_n$leadImg = n.leadImg) !== null && _n$leadImg !== void 0 ? _n$leadImg : false;
        });
        if (useImg) {
          return "".concat(props.cdn["static"], "/").concat(useImg.name);
        }
        return "".concat(props.cdn["static"], "/").concat(m.product.images[0].name);
      }
    }
    return '';
  };
  var resolvedCountry = props !== null && props !== void 0 && props.regionsData && props !== null && props !== void 0 && (_props$_loggedIn3 = props._loggedIn) !== null && _props$_loggedIn3 !== void 0 && (_props$_loggedIn3 = _props$_loggedIn3.meta) !== null && _props$_loggedIn3 !== void 0 && (_props$_loggedIn3 = _props$_loggedIn3.locationMeta) !== null && _props$_loggedIn3 !== void 0 && _props$_loggedIn3.country && props.regionsData[props._loggedIn.meta.locationMeta.country] && props.regionsData[props._loggedIn.meta.locationMeta.country].name ? props.regionsData[props._loggedIn.meta.locationMeta.country].name : (_props$_loggedIn$meta = props === null || props === void 0 || (_props$_loggedIn4 = props._loggedIn) === null || _props$_loggedIn4 === void 0 || (_props$_loggedIn4 = _props$_loggedIn4.meta) === null || _props$_loggedIn4 === void 0 || (_props$_loggedIn4 = _props$_loggedIn4.locationMeta) === null || _props$_loggedIn4 === void 0 ? void 0 : _props$_loggedIn4.country) !== null && _props$_loggedIn$meta !== void 0 ? _props$_loggedIn$meta : null;
  console.log(editedInputs, currentTab, resolvedOrders);
  var resolveCurrentItem = function resolveCurrentItem(itemType) {
    if (itemType === 'firstNameLastName') {
      var _props$_loggedIn5, _props$_loggedIn6, _props$_loggedIn7, _props$_loggedIn8;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_SettingsModule["default"].FirstName_LastName_Container)
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          maxWidth: '100%',
          width: '100%'
        }
      }, props !== null && props !== void 0 && props._loggedIn ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("label", {
        className: "".concat(_SettingsModule["default"].label)
      }, "First Name"), !editedInputs['firstName'] ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_SettingsModule["default"].hoverHighlight),
        modif: "firstName",
        onClick: handleChange
      }, props !== null && props !== void 0 && (_props$_loggedIn5 = props._loggedIn) !== null && _props$_loggedIn5 !== void 0 && (_props$_loggedIn5 = _props$_loggedIn5.meta) !== null && _props$_loggedIn5 !== void 0 && _props$_loggedIn5.firstName && (props === null || props === void 0 || (_props$_loggedIn6 = props._loggedIn) === null || _props$_loggedIn6 === void 0 || (_props$_loggedIn6 = _props$_loggedIn6.meta) === null || _props$_loggedIn6 === void 0 ? void 0 : _props$_loggedIn6.firstName) !== '' ? props._loggedIn.meta.firstName : props !== null && props !== void 0 && props._loggedIn ? 'Add First Name' : '') : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        placeholder: "First Name",
        className: "".concat(_SettingsModule["default"].input),
        id: "Settings_".concat(componentId, "_firstName_Input")
      }), /*#__PURE__*/_react["default"].createElement("button", {
        className: "".concat(_SettingsModule["default"].Save_Button),
        modif: 'firstName',
        onClick: saveChange
      }, "Save"))) : null), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          maxWidth: '100%',
          width: '100%'
        }
      }, props !== null && props !== void 0 && props._loggedIn ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("label", {
        className: "".concat(_SettingsModule["default"].label)
      }, "Last Name"), !editedInputs['lastName'] ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_SettingsModule["default"].hoverHighlight),
        modif: "lastName",
        onClick: handleChange
      }, props !== null && props !== void 0 && (_props$_loggedIn7 = props._loggedIn) !== null && _props$_loggedIn7 !== void 0 && (_props$_loggedIn7 = _props$_loggedIn7.meta) !== null && _props$_loggedIn7 !== void 0 && _props$_loggedIn7.lastName && (props === null || props === void 0 || (_props$_loggedIn8 = props._loggedIn) === null || _props$_loggedIn8 === void 0 || (_props$_loggedIn8 = _props$_loggedIn8.meta) === null || _props$_loggedIn8 === void 0 ? void 0 : _props$_loggedIn8.lastName) !== '' ? props._loggedIn.meta.lastName : props !== null && props !== void 0 && props._loggedIn ? 'Add Last Name' : '') : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        placeholder: "Last Name",
        className: "".concat(_SettingsModule["default"].input),
        id: "Settings_".concat(componentId, "_lastName_Input")
      }), /*#__PURE__*/_react["default"].createElement("button", {
        className: "".concat(_SettingsModule["default"].Save_Button),
        modif: 'lastName',
        onClick: saveChange
      }, "Save"))) : null)));
    } else if (itemType === 'username') {
      var _props$_loggedIn$user, _props$_loggedIn9;
      return /*#__PURE__*/_react["default"].createElement("div", null, props !== null && props !== void 0 && props._loggedIn ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("label", {
        className: "".concat(_SettingsModule["default"].label, " ").concat(_SettingsModule["default"].fullWidth)
      }, "Username"), editingUsername ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_SettingsModule["default"].ItemsFlex)
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        placeholder: "Username",
        className: "".concat(_SettingsModule["default"].input),
        modif: 'username',
        id: "Settings_".concat(componentId, "_Username_Input"),
        onChange: handleChange
      }), /*#__PURE__*/_react["default"].createElement(_Close["default"], {
        className: "".concat(_SettingsModule["default"].Close),
        onClick: handleChangeUsername
      })), editedInputs['username'] ? /*#__PURE__*/_react["default"].createElement("button", {
        className: "".concat(_SettingsModule["default"].Save_Button),
        modif: 'username',
        onClick: saveChange
      }, "Save") : null) : /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_SettingsModule["default"].ItemsFlex)
      }, /*#__PURE__*/_react["default"].createElement("div", null, (_props$_loggedIn$user = props === null || props === void 0 || (_props$_loggedIn9 = props._loggedIn) === null || _props$_loggedIn9 === void 0 ? void 0 : _props$_loggedIn9.username) !== null && _props$_loggedIn$user !== void 0 ? _props$_loggedIn$user : null), /*#__PURE__*/_react["default"].createElement("button", {
        className: "".concat(_SettingsModule["default"].LowProfileButton),
        onClick: handleChangeUsername
      }, "Get New Username"))) : null);
    } else if (itemType === 'handleCreditCard') {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("label", {
        className: "".concat(_SettingsModule["default"].label, " ").concat(_SettingsModule["default"].fullWidth)
      }, "Payment"), /*#__PURE__*/_react["default"].createElement(_payment.CreditCard, props));
    } else if (itemType === 'location') {
      var _props$_loggedIn$meta2, _props$_loggedIn10;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", {
        className: "".concat(_SettingsModule["default"].Read_Only_Label)
      }, "Location"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_SettingsModule["default"].Read_Only_Field)
      }, /*#__PURE__*/_react["default"].createElement("span", null, (_props$_loggedIn$meta2 = props === null || props === void 0 || (_props$_loggedIn10 = props._loggedIn) === null || _props$_loggedIn10 === void 0 || (_props$_loggedIn10 = _props$_loggedIn10.meta) === null || _props$_loggedIn10 === void 0 || (_props$_loggedIn10 = _props$_loggedIn10.locationMeta) === null || _props$_loggedIn10 === void 0 ? void 0 : _props$_loggedIn10.city) !== null && _props$_loggedIn$meta2 !== void 0 ? _props$_loggedIn$meta2 : null), /*#__PURE__*/_react["default"].createElement("span", null, resolvedCountry ? ', ' : null), /*#__PURE__*/_react["default"].createElement("span", null, resolvedCountry)));
    } else if (itemType === 'keepSubscriptionsPrivate') {
      var _props$_loggedIn11;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_SettingsModule["default"].Settings_Checkbox_Container)
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: "checkbox",
        name: "keepSubscriptionsPrivate",
        className: "".concat(_SettingsModule["default"].Settings_Checkbox),
        id: "Settings_".concat(componentId, "_keepSubscriptionsPrivate_Input"),
        modif: 'keepSubscriptionsPrivate',
        onChange: saveChange,
        defaultChecked: props === null || props === void 0 || (_props$_loggedIn11 = props._loggedIn) === null || _props$_loggedIn11 === void 0 || (_props$_loggedIn11 = _props$_loggedIn11.meta) === null || _props$_loggedIn11 === void 0 ? void 0 : _props$_loggedIn11.keepSubscriptionsPrivate
      }), /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "keepSubscriptionsPrivate",
        className: "".concat(_SettingsModule["default"].Checkbox_Label)
      }, "Keep Subscriptions Private")));
    } else if (itemType === 'closeAccount') {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_SettingsModule["default"].Close_Account_Button_Container)
      }, !editedInputs['closeAccount'] ? /*#__PURE__*/_react["default"].createElement("button", {
        className: "".concat(_SettingsModule["default"].Warning_Button),
        modif: 'closeAccount',
        onClick: handleChange
      }, "Close Account") : /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          textAlign: 'center',
          marginTop: '1rem'
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          fontWeight: '600'
        }
      }, "Are you sure you want to close your ", props === null || props === void 0 ? void 0 : props.siteTitle, " account?"), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          fontSize: '.8rem',
          marginTop: '.5rem'
        }
      }, "This action is not reversible. All your data will be deleted and forgotten."), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'center',
          gap: '10rem',
          marginTop: '1rem'
        }
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: "".concat(_SettingsModule["default"].Save_Button),
        style: {
          fontWeight: '600'
        }
      }, "Yes"), /*#__PURE__*/_react["default"].createElement("button", {
        className: "".concat(_SettingsModule["default"].Save_Button),
        onClick: cancelCloseAccount,
        style: {
          fontWeight: '600'
        }
      }, "No")))));
    } else if (itemType === 'orders') {
      var _resolvedOrders$order;
      return /*#__PURE__*/_react["default"].createElement("div", null, props !== null && props !== void 0 && props._loggedIn ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("label", {
        className: "".concat(_SettingsModule["default"].label, " ").concat(_SettingsModule["default"].fullWidth)
      }, "Orders"), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }
      }, resolvedOrders !== null && resolvedOrders !== void 0 && (_resolvedOrders$order = resolvedOrders.orders) !== null && _resolvedOrders$order !== void 0 && _resolvedOrders$order.map ? resolvedOrders.orders.map(function (m, i) {
        var _m$paymentmethoddetai, _m$paymentmethoddetai2, _m$paymentmethoddetai3, _m$paymentmethoddetai4, _m$id, _m$id2, _m$cart, _westernMoneyFormat$f, _m$totals, _m$meta, _card$brand, _card$last;
        var useSymbol;
        var card = (_m$paymentmethoddetai = m === null || m === void 0 || (_m$paymentmethoddetai2 = m.paymentmethoddetails) === null || _m$paymentmethoddetai2 === void 0 ? void 0 : _m$paymentmethoddetai2.card) !== null && _m$paymentmethoddetai !== void 0 ? _m$paymentmethoddetai : null;
        var cardBilling = (_m$paymentmethoddetai3 = m === null || m === void 0 || (_m$paymentmethoddetai4 = m.paymentmethoddetails) === null || _m$paymentmethoddetai4 === void 0 ? void 0 : _m$paymentmethoddetai4.billing_details) !== null && _m$paymentmethoddetai3 !== void 0 ? _m$paymentmethoddetai3 : null;
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "short_bottom_border",
          style: {
            paddingBottom: '1rem'
          },
          key: i,
          i: i
        }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, "Order ", /*#__PURE__*/_react["default"].createElement("span", {
          style: {
            background: '#222222',
            borderRadius: '1rem',
            padding: '.0rem .75rem'
          },
          selectValue: "".concat((_m$id = m === null || m === void 0 ? void 0 : m.id) !== null && _m$id !== void 0 ? _m$id : ''),
          onClick: _event.selectThisText
        }, "#", (_m$id2 = m === null || m === void 0 ? void 0 : m.id) !== null && _m$id2 !== void 0 ? _m$id2 : ''), " - ", m !== null && m !== void 0 && m.creation && !isNaN(Number(m.creation)) && new Date(Number(m.creation)) ? "".concat(new Date(Number(m.creation)).toDateString()) : ''), /*#__PURE__*/_react["default"].createElement("div", {
          className: "flex gap-p3",
          style: {
            flexDirection: 'column',
            marginTop: '.3rem',
            marginBottom: '.3rem'
          }
        }, m !== null && m !== void 0 && (_m$cart = m.cart) !== null && _m$cart !== void 0 && _m$cart.map ? m.cart.map(function (n, j) {
          var _priceObject$symbol, _n$product$name, _n$product, _currentStyle$style, _currentOption$option;
          var currentStyle = (0, _ecommerce.resolveCurrentStyle)(n.product, n.style);
          var currentOption = (0, _ecommerce.resolveCurrentOption)(currentStyle, n.option);
          var priceObject = (0, _ecommerce.resolveRegionBasedPrice)(props, currentStyle);
          var symbol = (_priceObject$symbol = priceObject === null || priceObject === void 0 ? void 0 : priceObject.symbol) !== null && _priceObject$symbol !== void 0 ? _priceObject$symbol : '';
          useSymbol = symbol;
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "gap-p2 Ecommerce_Item_Container",
            key: j,
            i: j
          }, /*#__PURE__*/_react["default"].createElement("div", {
            style: {
              display: 'flex',
              gap: '.5rem'
            }
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "Ecommerce_Item_Image_Container",
            style: {
              backgroundImage: resolveOrderImg(n) ? "url(".concat(resolveOrderImg(n), ")") : null
            }
          }, /*#__PURE__*/_react["default"].createElement("img", {
            src: 'img/default/greythumb_product.jpg',
            className: "Product_img",
            style: {
              width: '82.5px',
              maxHeight: '82.5px',
              opacity: resolveOrderImg(n) ? 0 : 1
            }
          })), /*#__PURE__*/_react["default"].createElement("div", {
            style: {
              width: '100%'
            }
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "flex gap-p2 Ecommerce_Cart_Title_Main_Container"
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "Ecommerce_Title"
          }, (_n$product$name = n === null || n === void 0 || (_n$product = n.product) === null || _n$product === void 0 ? void 0 : _n$product.name) !== null && _n$product$name !== void 0 ? _n$product$name : ''), /*#__PURE__*/_react["default"].createElement("div", {
            className: "Ecommerce_Cart_Price_Container"
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "Ecommerce_Price"
          }, symbol, (0, _ecommerce.resolveMoneyFormat)(n.price)))), /*#__PURE__*/_react["default"].createElement("div", {
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
          }, /*#__PURE__*/_react["default"].createElement("div", null, (_currentStyle$style = currentStyle === null || currentStyle === void 0 ? void 0 : currentStyle.style) !== null && _currentStyle$style !== void 0 ? _currentStyle$style : ''), /*#__PURE__*/_react["default"].createElement("span", null, "\xA0~\xA0"), /*#__PURE__*/_react["default"].createElement("div", null, (_currentOption$option = currentOption === null || currentOption === void 0 ? void 0 : currentOption.option) !== null && _currentOption$option !== void 0 ? _currentOption$option : '')), /*#__PURE__*/_react["default"].createElement("div", {
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
          })), /*#__PURE__*/_react["default"].createElement("div", null, Object.prototype.hasOwnProperty.call(n, 'quantity') ? n.quantity : ''))), /*#__PURE__*/_react["default"].createElement("div", {
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
          }, symbol, (0, _ecommerce.resolveMoneyFormat)(n.quantity * n.price)))))));
        }) : null), /*#__PURE__*/_react["default"].createElement("div", {
          className: "flex Ecommerce_Price",
          style: {
            justifyContent: 'space-between'
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            lineHeight: '1.4rem'
          }
        }, "Total:\xA0"), /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            fontSize: '1.25rem'
          }
        }, useSymbol, (_westernMoneyFormat$f = _ecommerce.westernMoneyFormat.format(m === null || m === void 0 || (_m$totals = m.totals) === null || _m$totals === void 0 ? void 0 : _m$totals.total)) !== null && _westernMoneyFormat$f !== void 0 ? _westernMoneyFormat$f : '')), /*#__PURE__*/_react["default"].createElement("div", null, m.paymentfulfilled ? /*#__PURE__*/_react["default"].createElement("div", null, m !== null && m !== void 0 && (_m$meta = m.meta) !== null && _m$meta !== void 0 && _m$meta.charged && m !== null && m !== void 0 && m.currency ? /*#__PURE__*/_react["default"].createElement("div", {
          className: _ReceiptPageModule["default"].pair,
          style: {
            fontSize: '.7rem'
          }
        }, /*#__PURE__*/_react["default"].createElement("div", null, "Paid ", useSymbol, (0, _ecommerce.resolveMoneyFormat)(m.amountcaptured), " ", m.currency.toUpperCase(), " on ", new Date(m.meta.charged).toLocaleDateString(), " ", new Date(m.meta.charged).toTimeString()), /*#__PURE__*/_react["default"].createElement("div", null, card ? /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            display: 'flex',
            gap: '.25rem'
          }
        }, /*#__PURE__*/_react["default"].createElement("div", null, (_card$brand = card.brand) !== null && _card$brand !== void 0 ? _card$brand : ''), /*#__PURE__*/_react["default"].createElement("div", null, (_card$last = card.last4) !== null && _card$last !== void 0 ? _card$last : ''), /*#__PURE__*/_react["default"].createElement("div", null, cardBilling !== null && cardBilling !== void 0 && cardBilling.name ? cardBilling.name : '')) : null)) : '') : /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            fontSize: '.75rem'
          }
        }, "Payment Unfulfilled")))));
      }) : null)) : null);
    } else {
      return /*#__PURE__*/_react["default"].createElement("div", null, itemType);
    }
  };
  var handleSetTab = _react["default"].useCallback(function (e) {
    var _e$currentTarget;
    var modif = e === null || e === void 0 || (_e$currentTarget = e.currentTarget) === null || _e$currentTarget === void 0 ? void 0 : _e$currentTarget.getAttribute('modif');
    if (modif) {
      setCurrentTab(settingsConfig.tabs.findIndex(function (m) {
        return m.label === modif;
      }));
    }
  });
  var resolveInitials = props !== null && props !== void 0 && (_props$_loggedIn12 = props._loggedIn) !== null && _props$_loggedIn12 !== void 0 && (_props$_loggedIn12 = _props$_loggedIn12.meta) !== null && _props$_loggedIn12 !== void 0 && _props$_loggedIn12.firstName && props !== null && props !== void 0 && (_props$_loggedIn13 = props._loggedIn) !== null && _props$_loggedIn13 !== void 0 && (_props$_loggedIn13 = _props$_loggedIn13.meta) !== null && _props$_loggedIn13 !== void 0 && _props$_loggedIn13.lastName && props._loggedIn.meta.firstName.length > 0 && props._loggedIn.meta.lastName.length > 0 ? props._loggedIn.meta.firstName.charAt(0) + props._loggedIn.meta.lastName.charAt(0) : 'AV';
  console.log('Curr', currentTab, settingsConfig.tabs, props);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(fetchBusy ? 'fetchNotBusy fetchBusy' : 'fetchNotBusy')
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_SettingsModule["default"].Settings_Container),
    style: {
      margin: '0 auto',
      width: '70vw',
      display: 'flex'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_SettingsModule["default"].Settings_InternalContainer)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_SettingsModule["default"].Settings_Menu)
  }, settingsConfig !== null && settingsConfig !== void 0 && settingsConfig.tabs ? settingsConfig.tabs.map(function (tab) {
    var _tab$label;
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_SettingsModule["default"].tab, " ").concat(settingsConfig !== null && settingsConfig !== void 0 && settingsConfig.tabs && settingsConfig.tabs[currentTab] && settingsConfig.tabs[currentTab].label === (tab === null || tab === void 0 ? void 0 : tab.label) ? _SettingsModule["default"].currentTab : ''),
      onClick: handleSetTab,
      modif: tab === null || tab === void 0 ? void 0 : tab.label
    }, (_tab$label = tab === null || tab === void 0 ? void 0 : tab.label) !== null && _tab$label !== void 0 ? _tab$label : ''));
  }) : null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_SettingsModule["default"].Settings_Data)
  }, settingsConfig !== null && settingsConfig !== void 0 && settingsConfig.tabs && settingsConfig !== null && settingsConfig !== void 0 && (_settingsConfig$tabs$2 = settingsConfig.tabs[currentTab]) !== null && _settingsConfig$tabs$2 !== void 0 && _settingsConfig$tabs$2.avatar ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_SettingsModule["default"].Settings_Profile_Picture),
    style: {
      background: "url(".concat((_props$_loggedIn$icon = props === null || props === void 0 || (_props$_loggedIn14 = props._loggedIn) === null || _props$_loggedIn14 === void 0 ? void 0 : _props$_loggedIn14.icon) !== null && _props$_loggedIn$icon !== void 0 ? _props$_loggedIn$icon : null, ")"),
      backgroundSize: 'contain'
    }
  }, !(props !== null && props !== void 0 && (_props$_loggedIn15 = props._loggedIn) !== null && _props$_loggedIn15 !== void 0 && _props$_loggedIn15.icon) ? /*#__PURE__*/_react["default"].createElement("span", {
    className: "".concat(_SettingsModule["default"].Avatar_Placeholder_Text)
  }, resolveInitials) : null) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_SettingsModule["default"].settingsItemContainer)
  }, pageError ? /*#__PURE__*/_react["default"].createElement("p", {
    className: "error",
    style: {
      marginTop: '.5rem'
    },
    onClick: handleCloseError
  }, pageError) : null, settingsConfig !== null && settingsConfig !== void 0 && settingsConfig.tabs && currentTab !== null && settingsConfig.tabs[currentTab] && (_settingsConfig$tabs$3 = settingsConfig.tabs[currentTab]) !== null && _settingsConfig$tabs$3 !== void 0 && _settingsConfig$tabs$3.items && Array.isArray((_settingsConfig$tabs$4 = settingsConfig.tabs[currentTab]) === null || _settingsConfig$tabs$4 === void 0 ? void 0 : _settingsConfig$tabs$4.items) ? settingsConfig.tabs[currentTab].items.map(function (item) {
    var avatar = settingsConfig.tabs[currentTab].avatar;
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: item.type
    }, resolveCurrentItem(item.type));
  }) : null)))));
};
var _default = exports["default"] = Module;