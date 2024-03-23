"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _link = _interopRequireDefault(require("next/link"));
var _NotificationsModule = _interopRequireDefault(require("./Notifications.module.scss"));
var _PresentationModule = _interopRequireDefault(require("../presentation/Presentation.module.scss"));
var _utility = require("../utility/utility");
var _utility2 = require("../presentation/utility");
var _div;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
  var _props$_openMenu4, _props$menuConfig, _notificationsFeed$no;
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
  var _React$useState7 = _react["default"].useState(null),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    notificationsFeed = _React$useState8[0],
    setNotificationsFeed = _React$useState8[1];
  var _React$useState9 = _react["default"].useState([]),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    cartMessages = _React$useState10[0],
    setCartMessages = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(false),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    tempOveride = _React$useState12[0],
    setTempOveride = _React$useState12[1];
  var _React$useState13 = _react["default"].useState(false),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    menuOpen = _React$useState14[0],
    setMenuOpen = _React$useState14[1];
  var _React$useState15 = _react["default"].useState(false),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    closing = _React$useState16[0],
    setClosing = _React$useState16[1];
  var container = _react["default"].useRef();
  var closeTimeoutRef = _react["default"].useRef();
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      container.current.addEventListener('mouseover', mouseOverContainer);
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  var mouseOverContainer = function mouseOverContainer() {
    props._LocalEventEmitter.dispatch('notification', {
      dispatch: 'mouseOver'
    });
  };
  props._LocalEventEmitter.unsubscribe('notification');
  props._LocalEventEmitter.subscribe('notification', function (e) {
    var temp = _toConsumableArray(cartMessages);
    if (e) {
      console.log('Notification Update', e);
      if (e.dispatch === 'notification') {
        setTempOveride(true);
        if (props.passOveride) {
          props.passOveride('notifications');
        }
        setTimeout(function () {
          // Only keep override open for very short period of time. Sub 2 seconds
          setTempOveride(false);
        }, 1500);
      } else if (e.dispatch === 'mouseOver') {
        var _props$_openMenu;
        console.log('Did mouse over', props, closing);
        if ((props === null || props === void 0 || (_props$_openMenu = props._openMenu) === null || _props$_openMenu === void 0 ? void 0 : _props$_openMenu.currentMenu) === 'notifications') {
          if (!closing && props._toggleSingleOpenMenu) {
            props._toggleSingleOpenMenu(null, 'notifications', true);
          }
        }
      }
    }
  });
  _react["default"].useEffect(function () {
    var _props$_openMenu2, _props$_openMenu3;
    if (((props === null || props === void 0 || (_props$_openMenu2 = props._openMenu) === null || _props$_openMenu2 === void 0 ? void 0 : _props$_openMenu2.currentMenu) === 'notifications' || tempOveride) && !menuOpen) {
      setMenuOpen(true);
      setClosing(false);
      if (closeTimeoutRef !== null && closeTimeoutRef !== void 0 && closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    } else if ((props === null || props === void 0 || (_props$_openMenu3 = props._openMenu) === null || _props$_openMenu3 === void 0 ? void 0 : _props$_openMenu3.currentMenu) !== 'notifications' && !tempOveride && menuOpen) {
      // We track open state internally because we want to animate the cart closing as opposed to destroying it immediately
      setClosing(true);
      var r = setTimeout(function () {
        setClosing(false);
        setMenuOpen(false);
        closeTimeoutRef.current = null;
      }, 500);
      closeTimeoutRef.current = r;
    }
  }, [props === null || props === void 0 || (_props$_openMenu4 = props._openMenu) === null || _props$_openMenu4 === void 0 ? void 0 : _props$_openMenu4.currentMenu, closing, menuOpen, closeTimeoutRef === null || closeTimeoutRef === void 0 ? void 0 : closeTimeoutRef.current]);
  _react["default"].useEffect(function () {
    if (props !== null && props !== void 0 && props.notificationsData) {
      setNotificationsFeed(props.notificationsData);
    }
  }, [props === null || props === void 0 ? void 0 : props.notificationsData]);
  var handleClose = _react["default"].useCallback(function (e) {
    setClosing(true);
    props._toggleSingleOpenMenu(null, 'notifications', false);
  });
  var handleFireGlobalEvent = _react["default"].useCallback( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var _e$currentTarget;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (e !== null && e !== void 0 && (_e$currentTarget = e.currentTarget) !== null && _e$currentTarget !== void 0 && _e$currentTarget.getAttribute('ctaAfter')) {
              e.currentTarget.innerHTML = e.currentTarget.getAttribute('ctaAfter');
            }
            (0, _utility.fireGlobalEvent)(e, props._LocalEventEmitter);
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
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

  // TODO, store locally all notifications user has viewed
  // Show Notifications that user has not viewed by default should be unviewed
  // Show red notif icon to show user has new notifications after having checked for all seen notifications
  // Chat in notifications
  // link in notifications

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Misc_Container Misc_Container_Bigger ".concat(props.className, " ").concat(props.open || menuOpen && !closing ? 'Misc_Container_Visible' : ''),
    ref: container,
    style: {
      top: props !== null && props !== void 0 && (_props$menuConfig = props.menuConfig) !== null && _props$menuConfig !== void 0 && _props$menuConfig.height && !isNaN(Number(props.menuConfig.height)) ? Number(props.menuConfig.height) + 'px' : ''
    }
  }, props.open || menuOpen ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(fetchBusy ? 'fetchNotBusy fetchBusy' : 'fetchNotBusy')
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "Misc_Internal_Container",
    style: {
      paddingTop: '.5rem',
      paddingBottom: '.5rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    className: "Misc_Label",
    style: {
      marginTop: 0
    }
  }, "Notifications"), /*#__PURE__*/_react["default"].createElement("div", null, notificationsFeed !== null && notificationsFeed !== void 0 && (_notificationsFeed$no = notificationsFeed.notifications) !== null && _notificationsFeed$no !== void 0 && _notificationsFeed$no.map ? notificationsFeed.notifications.map(function (m) {
    var _m$meta, _m$meta2, _m$meta3, _m$meta$message, _m$meta4, _m$meta5, _m$meta6, _props$cdn2, _m$meta7, _props$classes$produc, _props$classes, _m$product2, _m$product3, _m$meta8, _m$meta9;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_NotificationsModule["default"].notifContainer)
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_NotificationsModule["default"].notifInternalContainer)
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_NotificationsModule["default"].detailContainer)
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_NotificationsModule["default"].author, " Misc_P")
    }, m !== null && m !== void 0 && (_m$meta = m.meta) !== null && _m$meta !== void 0 && _m$meta.fromAdmin && props !== null && props !== void 0 && props.siteTitle ? props.siteTitle : null), m !== null && m !== void 0 && (_m$meta2 = m.meta) !== null && _m$meta2 !== void 0 && _m$meta2.verb ? /*#__PURE__*/_react["default"].createElement("span", {
      className: "Misc_P"
    }, m.meta.verb) : null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "Misc_P"
    }, m !== null && m !== void 0 && (_m$meta3 = m.meta) !== null && _m$meta3 !== void 0 && _m$meta3.quotes ? '"' : '', (_m$meta$message = m === null || m === void 0 || (_m$meta4 = m.meta) === null || _m$meta4 === void 0 ? void 0 : _m$meta4.message) !== null && _m$meta$message !== void 0 ? _m$meta$message : null, m !== null && m !== void 0 && (_m$meta5 = m.meta) !== null && _m$meta5 !== void 0 && _m$meta5.quotes ? '"' : '')), /*#__PURE__*/_react["default"].createElement("div", null, m !== null && m !== void 0 && (_m$meta6 = m.meta) !== null && _m$meta6 !== void 0 && _m$meta6.image && props !== null && props !== void 0 && (_props$cdn2 = props.cdn) !== null && _props$cdn2 !== void 0 && _props$cdn2["static"] ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_NotificationsModule["default"].icon),
      style: {
        background: "url(".concat(props.cdn["static"], "/").concat(m.meta.image, ")"),
        backgroundSize: 'contain'
      }
    }) : m !== null && m !== void 0 && (_m$meta7 = m.meta) !== null && _m$meta7 !== void 0 && _m$meta7.icon ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_NotificationsModule["default"].icon),
      style: {
        background: "url(".concat(props.cdn["static"], "/").concat(m.meta.icon, ")"),
        backgroundSize: 'contain'
      }
    }) : null)), m !== null && m !== void 0 && m.product ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_NotificationsModule["default"].notifBox, " ").concat(_NotificationsModule["default"].notifProduct, " flex gap-p5")
    }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_NotificationsModule["default"].notifImageContainer),
      style: {
        backgroundImage: resolveOrderImg(m) ? "url(".concat(resolveOrderImg(m), ")") : null
      }
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: 'img/default/greythumb_product.jpg',
      className: "Product_img",
      style: {
        width: '75px',
        maxHeight: '60px',
        opacity: resolveOrderImg(m) ? 0 : 1
      }
    }))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: (0, _utility2.resolveMainLink)(m === null || m === void 0 ? void 0 : m.product),
      onClick: handleClose
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_NotificationsModule["default"].productName, " ").concat((_props$classes$produc = props === null || props === void 0 || (_props$classes = props.classes) === null || _props$classes === void 0 ? void 0 : _props$classes.productName) !== null && _props$classes$produc !== void 0 ? _props$classes$produc : ''),
      style: {
        fontSize: '.9rem',
        fontWeight: '600'
      }
    }, m === null || m === void 0 || (_m$product2 = m.product) === null || _m$product2 === void 0 ? void 0 : _m$product2.name)), /*#__PURE__*/_react["default"].createElement("button", {
      className: "".concat(_PresentationModule["default"].CtaButton, " ").concat(props.ctaClassName),
      onClick: handleFireGlobalEvent,
      action: 'add_to_cart',
      item: m === null || m === void 0 || (_m$product3 = m.product) === null || _m$product3 === void 0 ? void 0 : _m$product3.id,
      selectedstyle: m === null || m === void 0 || (_m$meta8 = m.meta) === null || _m$meta8 === void 0 ? void 0 : _m$meta8.productStyle,
      currentoption: m === null || m === void 0 || (_m$meta9 = m.meta) === null || _m$meta9 === void 0 ? void 0 : _m$meta9.productOption,
      ctaAfter: 'Added To Cart'
    }, "Add To Cart"))) : null);
  }) : _div || (_div = /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Misc_P"
  }, "All Caught Up")))))) : null));
};
var _default = exports["default"] = Module;