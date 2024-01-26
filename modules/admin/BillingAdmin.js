"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _link = _interopRequireDefault(require("next/link"));
var _uuid = require("uuid");
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _AdminModule = _interopRequireDefault(require("./Admin.module.scss"));
var _SignIn = require("../utility/onboarding/SignIn");
var _fetch = require("../utility/fetch");
var _date = require("../utility/utility/date");
var _ecommerce = require("../utility/ecommerce");
var _util = require("../util");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
var moduleName = 'BillingAdmin';
var Module = function Module(props) {
  var _invoiceData$simpleDa, _invoiceData$simpleDa2, _invoiceData$simpleDa3, _invoiceData$simpleDa4, _invoiceData$simpleDa5, _invoiceData$simpleDa6, _ref3, _invoiceData$simpleDa7, _invoiceData$simpleDa8, _invoiceData$data$pay, _invoiceData$data, _invoiceData$data$add, _invoiceData$data2, _invoiceData$data3, _invoiceData$data$pay2, _invoiceData$data4, _invoiceData$data$pay3, _invoiceData$data5, _invoiceData$data$pay4, _invoiceData$data6, _invoiceData$data$pay5, _invoiceData$data7, _invoiceData$data8, _invoiceData$data9, _invoiceData$data$pay6, _invoiceData$data10, _invoiceData$id, _invoiceData$simpleDa9, _invoiceData$data11, _invoiceData$data12, _invoiceData$data$pay7, _invoiceData$data13, _invoiceData$data$pay8, _invoiceData$data14, _invoiceData$data$pay9, _invoiceData$data15, _invoiceData$data16, _invoiceData$data17, _invoiceData$data18, _invoiceData$data19, _invoiceData$data20, _invoiceData$data21, _invoiceData$data$pay10, _invoiceData$data22, _invoiceData$simpleDa10, _invoiceData$data23, _invoiceData$simpleDa11, _invoiceData$data$pay11, _invoiceData$data24, _invoiceData$data$pay12, _invoiceData$data25, _invoiceData$simpleDa12, _invoiceData$simpleDa13, _invoiceData$simpleDa14, _invoiceData$simpleDa15, _invoiceData$simpleDa16, _invoiceData$data$pay13, _invoiceData$data26;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    componentId = _React$useState4[0],
    setComponentId = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(new Date().getMonth()),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    currentMonth = _React$useState6[0],
    setCurrentMonth = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(new Date().getFullYear()),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    currentYear = _React$useState8[0],
    setCurrentYear = _React$useState8[1];
  var _React$useState9 = _react["default"].useState(null),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    invoiceData = _React$useState10[0],
    setInvoiceData = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(null),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    outstanding = _React$useState12[0],
    setOutstanding = _React$useState12[1];
  props._LocalEventEmitter.unsubscribe(moduleName);
  props._LocalEventEmitter.subscribe(moduleName, function (e) {
    if (e) {
      if (e.dispatch === 'loadDefault') {
        // loadDefault() 
      }
    }
  });
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      var id = (0, _uuid.v4)();
      setComponentId(id);
      loadDefault();
      setComponentDidMount(true);
    }
  }, [componentDidMount]);

  /**
   * Should load initial recently created Platform Posts
   * @returns
   */
  var loadDefault = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(month, year) {
      var body, res;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            body = {
              domainKey: props.domainKey,
              hash: props._loggedIn.hash,
              identifier: props._loggedIn.identifier,
              month: month !== void 0 ? month : currentMonth,
              year: year !== void 0 ? year : currentYear
            };
            _context.next = 3;
            return (0, _fetch.fetchPost)(props.apiUrl + '/a/getplatformbillinginvoices', null, null, body);
          case 3:
            res = _context.sent;
            if (res) {
              _context.next = 8;
              break;
            }
            return _context.abrupt("return", false);
          case 8:
            if (!res.hasOwnProperty('status')) {
              _context.next = 22;
              break;
            }
            if (!(res.status == "disauthenticated")) {
              _context.next = 14;
              break;
            }
            (0, _SignIn.logout)();
            return _context.abrupt("return", "disauthenticated");
          case 14:
            if (!(res.status == "failed")) {
              _context.next = 19;
              break;
            }
            setInvoiceData(null);
            return _context.abrupt("return", false);
          case 19:
            if (!(res.status == "success")) {
              _context.next = 22;
              break;
            }
            if (res !== null && res !== void 0 && res.data) {
              setInvoiceData(res.data);
            }
            return _context.abrupt("return", res);
          case 22:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function loadDefault(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  var handleUpdateDate = _react["default"].useCallback( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
      var _e$currentTarget;
      var m, y;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!(e !== null && e !== void 0 && (_e$currentTarget = e.currentTarget) !== null && _e$currentTarget !== void 0 && _e$currentTarget.getAttribute)) {
              _context2.next = 8;
              break;
            }
            m = e.currentTarget.getAttribute('m');
            y = e.currentTarget.getAttribute('y');
            if (!(m !== void 0 && y !== void 0)) {
              _context2.next = 8;
              break;
            }
            setCurrentMonth(Number(m));
            setCurrentYear(Number(y));
            _context2.next = 8;
            return loadDefault(Number(m), Number(y));
          case 8:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }());
  var displayMonths = _react["default"].useMemo(function () {
    var useMonths = [];
    var m = new Date().getMonth();
    var y = new Date().getFullYear();
    for (var i = 0; i < 24; i++) {
      useMonths.push({
        m: m,
        y: y
      });
      if (m === 0) {
        y -= 1;
        m = 11;
      } else {
        m -= 1;
      }
    }
    return useMonths;
  }, [currentMonth, currentYear]);
  console.log(currentMonth, currentYear, invoiceData, props);

  // Run request for live public stripe key 
  // Use key local as state
  // Pass as prop to credit card
  // Process payments to Tycoon

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className, " ").concat(moduleName, "_Container")
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "Billing"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "Billing_Container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].MonthsContainer, " tagContainer tinyBar"),
    style: {
      direction: 'rtl',
      flexWrap: 'nowrap',
      overflow: 'auto',
      paddingBottom: '.25rem'
    }
  }, displayMonths.map(function (m, i) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      className: "tagItem ".concat(currentMonth === m.m && currentYear === m.y ? 'tagItemSelected' : ''),
      style: {
        whiteSpace: 'nowrap'
      },
      key: i,
      m: m.m,
      y: m.y,
      onClick: handleUpdateDate
    }, _date.MONTHS[m.m], " ", m.y);
  })), outstanding ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, "$ ", outstanding.total ? _ecommerce.westernMoneyFormat.format(outstanding.total) : "\xA0")) : null, /*#__PURE__*/_react["default"].createElement("div", null, invoiceData ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].ChargesExternalContainer),
    style: {
      marginTop: '.5rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontWeight: '600',
      fontSize: '1.5rem',
      marginBottom: '2rem',
      marginTop: '1rem'
    }
  }, "Tycoon Systems Corp. charges by service"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].ChargesContainer),
    style: {
      marginBottom: '2rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].ChargesInternalContainer)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].DetailTableContainer)
  }, /*#__PURE__*/_react["default"].createElement("table", {
    className: "".concat(_AdminModule["default"].DetailTable, " ").concat(_AdminModule["default"].DetailTableCheckered),
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "Details"), /*#__PURE__*/_react["default"].createElement("th", null, "Rate"), /*#__PURE__*/_react["default"].createElement("th", null, "Qty"), /*#__PURE__*/_react["default"].createElement("th", null, "Line Total")), invoiceData !== null && invoiceData !== void 0 && (_invoiceData$simpleDa = invoiceData.simpleData) !== null && _invoiceData$simpleDa !== void 0 && _invoiceData$simpleDa.table ? invoiceData.simpleData.table.map(function (m, i) {
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: i
    }, /*#__PURE__*/_react["default"].createElement("td", {
      className: "".concat(_AdminModule["default"].DescriptionContainer)
    }, m.description, m.customerCharged ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", null, " | "), /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        color: '#27ff27',
        fontWeight: '600'
      }
    }, "$", _ecommerce.westernMoneyFormat.format(m.customerCharged)), " USD was processed this period ", ['due', 'sent'].indexOf(invoiceData === null || invoiceData === void 0 ? void 0 : invoiceData.status) > -1 ? '' : 'so far')) : null), /*#__PURE__*/_react["default"].createElement("td", {
      className: "".concat(_AdminModule["default"].TableNumber)
    }, m.rate, "/", m.measureBy), /*#__PURE__*/_react["default"].createElement("td", {
      className: "".concat(_AdminModule["default"].TableNumber)
    }, m.qty.toFixed ? new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(m.qty) : m.qty), /*#__PURE__*/_react["default"].createElement("td", {
      className: "".concat(_AdminModule["default"].TableNumber)
    }, m.lineTotal.toFixed ? new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(m.lineTotal) : m.lineTotal));
  }) : null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p20",
    style: {
      justifyContent: 'right',
      marginTop: '1rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      maxWidth: '300px',
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex",
    style: {
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Subtotal"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w600"
  }, "$ ", invoiceData !== null && invoiceData !== void 0 && (_invoiceData$simpleDa2 = invoiceData.simpleData) !== null && _invoiceData$simpleDa2 !== void 0 && _invoiceData$simpleDa2.subTotal ? _ecommerce.westernMoneyFormat.format(invoiceData.simpleData.subTotal) : "\xA0")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex",
    style: {
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Tax"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w600"
  }, "$ ", invoiceData !== null && invoiceData !== void 0 && (_invoiceData$simpleDa3 = invoiceData.simpleData) !== null && _invoiceData$simpleDa3 !== void 0 && _invoiceData$simpleDa3.subTotal ? _ecommerce.westernMoneyFormat.format(invoiceData.simpleData.tax) : "\xA0")), /*#__PURE__*/_react["default"].createElement("div", null, "\xA0"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex",
    style: {
      borderTop: '1px solid black',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Current Bill Total"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w600"
  }, "$ ", invoiceData !== null && invoiceData !== void 0 && (_invoiceData$simpleDa4 = invoiceData.simpleData) !== null && _invoiceData$simpleDa4 !== void 0 && _invoiceData$simpleDa4.total ? _ecommerce.westernMoneyFormat.format(invoiceData.simpleData.total) : "\xA0")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.7rem'
    }
  }, "(", (_invoiceData$simpleDa5 = invoiceData === null || invoiceData === void 0 || (_invoiceData$simpleDa6 = invoiceData.simpleData) === null || _invoiceData$simpleDa6 === void 0 ? void 0 : _invoiceData$simpleDa6.currency) !== null && _invoiceData$simpleDa5 !== void 0 ? _invoiceData$simpleDa5 : "\xA0", ")"))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: '1rem'
    }
  }, (invoiceData === null || invoiceData === void 0 ? void 0 : invoiceData.status) === 'not due' ? 'This Bill is not due yet' : ['due', 'sent'].indexOf(invoiceData === null || invoiceData === void 0 ? void 0 : invoiceData.status) > -1 ? 'This Bill is due, please see Invoice' : "\xA0"))))) : /*#__PURE__*/_react["default"].createElement("div", null, "No Billing Info for this period"), ['due', 'sent'].indexOf(invoiceData === null || invoiceData === void 0 ? void 0 : invoiceData.status) === -1 && currentMonth !== void 0 && invoiceData !== null ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontWeight: '600',
      fontSize: '1.5rem',
      marginBottom: '2rem',
      marginTop: '1rem'
    }
  }, "Please see your Invoice for the month of ", (_ref3 = (_invoiceData$simpleDa7 = invoiceData === null || invoiceData === void 0 || (_invoiceData$simpleDa8 = invoiceData.simpleData) === null || _invoiceData$simpleDa8 === void 0 ? void 0 : _invoiceData$simpleDa8.period) !== null && _invoiceData$simpleDa7 !== void 0 ? _invoiceData$simpleDa7 : "".concat(_date.MONTHS[currentMonth]).concat(currentYear)) !== null && _ref3 !== void 0 ? _ref3 : "\xA0", " due below"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].InvoiceContainer),
    style: {
      marginBottom: '2rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].InvoiceInternalContainer)
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].Entity),
    style: {
      marginBottom: '.5rem'
    }
  }, (_invoiceData$data$pay = invoiceData === null || invoiceData === void 0 || (_invoiceData$data = invoiceData.data) === null || _invoiceData$data === void 0 ? void 0 : _invoiceData$data.payeeEntity) !== null && _invoiceData$data$pay !== void 0 ? _invoiceData$data$pay : "\xA0"), /*#__PURE__*/_react["default"].createElement("div", null, (_invoiceData$data$add = invoiceData === null || invoiceData === void 0 || (_invoiceData$data2 = invoiceData.data) === null || _invoiceData$data2 === void 0 ? void 0 : _invoiceData$data2.address) !== null && _invoiceData$data$add !== void 0 ? _invoiceData$data$add : "\xA0"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2"
  }, /*#__PURE__*/_react["default"].createElement("div", null, invoiceData !== null && invoiceData !== void 0 && (_invoiceData$data3 = invoiceData.data) !== null && _invoiceData$data3 !== void 0 && _invoiceData$data3.payeeCity ? invoiceData.data.payeeCity + ', ' : "\xA0"), /*#__PURE__*/_react["default"].createElement("div", null, (_invoiceData$data$pay2 = invoiceData === null || invoiceData === void 0 || (_invoiceData$data4 = invoiceData.data) === null || _invoiceData$data4 === void 0 ? void 0 : _invoiceData$data4.payeeState) !== null && _invoiceData$data$pay2 !== void 0 ? _invoiceData$data$pay2 : "\xA0"), /*#__PURE__*/_react["default"].createElement("div", null, (_invoiceData$data$pay3 = invoiceData === null || invoiceData === void 0 || (_invoiceData$data5 = invoiceData.data) === null || _invoiceData$data5 === void 0 ? void 0 : _invoiceData$data5.payeePostalCode) !== null && _invoiceData$data$pay3 !== void 0 ? _invoiceData$data$pay3 : "\xA0")), /*#__PURE__*/_react["default"].createElement("div", null, (_invoiceData$data$pay4 = invoiceData === null || invoiceData === void 0 || (_invoiceData$data6 = invoiceData.data) === null || _invoiceData$data6 === void 0 ? void 0 : _invoiceData$data6.payeeCountry) !== null && _invoiceData$data$pay4 !== void 0 ? _invoiceData$data$pay4 : "\xA0"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2"
  }, /*#__PURE__*/_react["default"].createElement("div", null, (_invoiceData$data$pay5 = invoiceData === null || invoiceData === void 0 || (_invoiceData$data7 = invoiceData.data) === null || _invoiceData$data7 === void 0 ? void 0 : _invoiceData$data7.payeeNumber) !== null && _invoiceData$data$pay5 !== void 0 ? _invoiceData$data$pay5 : "\xA0"), /*#__PURE__*/_react["default"].createElement("div", null, invoiceData !== null && invoiceData !== void 0 && (_invoiceData$data8 = invoiceData.data) !== null && _invoiceData$data8 !== void 0 && _invoiceData$data8.payeeNumber && invoiceData !== null && invoiceData !== void 0 && (_invoiceData$data9 = invoiceData.data) !== null && _invoiceData$data9 !== void 0 && _invoiceData$data9.payeeWebsite ? '|' : "\xA0"), /*#__PURE__*/_react["default"].createElement("div", null, (_invoiceData$data$pay6 = invoiceData === null || invoiceData === void 0 || (_invoiceData$data10 = invoiceData.data) === null || _invoiceData$data10 === void 0 ? void 0 : _invoiceData$data10.payeeWebsite) !== null && _invoiceData$data$pay6 !== void 0 ? _invoiceData$data$pay6 : "\xA0"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].QuoteContainer)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].InvoiceLabel)
  }, "INVOICE"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex",
    style: _defineProperty(_defineProperty({
      justifyContent: 'right'
    }, "justifyContent", 'space-between'), "marginLeft", '25%')
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Invoice #"), /*#__PURE__*/_react["default"].createElement("div", null, (_invoiceData$id = invoiceData === null || invoiceData === void 0 ? void 0 : invoiceData.id) !== null && _invoiceData$id !== void 0 ? _invoiceData$id : "\xA0")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex",
    style: _defineProperty(_defineProperty({
      justifyContent: 'right'
    }, "justifyContent", 'space-between'), "marginLeft", '25%')
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Date"), /*#__PURE__*/_react["default"].createElement("div", null, invoiceData !== null && invoiceData !== void 0 && (_invoiceData$simpleDa9 = invoiceData.simpleData) !== null && _invoiceData$simpleDa9 !== void 0 && _invoiceData$simpleDa9.dateIssued ? "".concat(new Date(invoiceData.simpleData.dateIssued).toLocaleDateString(), " ").concat(new Date(invoiceData.simpleData.dateIssued).toTimeString()) : "\xA0")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontWeight: '600'
    }
  }, "Bill To"), /*#__PURE__*/_react["default"].createElement("div", null, invoiceData !== null && invoiceData !== void 0 && (_invoiceData$data11 = invoiceData.data) !== null && _invoiceData$data11 !== void 0 && _invoiceData$data11.payerEntity ? invoiceData.data.payerEntity.toUpperCase() : ''), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2"
  }, /*#__PURE__*/_react["default"].createElement("div", null, invoiceData !== null && invoiceData !== void 0 && (_invoiceData$data12 = invoiceData.data) !== null && _invoiceData$data12 !== void 0 && _invoiceData$data12.payerCity ? invoiceData.data.payerCity + ', ' : ''), /*#__PURE__*/_react["default"].createElement("div", null, (_invoiceData$data$pay7 = invoiceData === null || invoiceData === void 0 || (_invoiceData$data13 = invoiceData.data) === null || _invoiceData$data13 === void 0 ? void 0 : _invoiceData$data13.payerState) !== null && _invoiceData$data$pay7 !== void 0 ? _invoiceData$data$pay7 : ''), /*#__PURE__*/_react["default"].createElement("div", null, (_invoiceData$data$pay8 = invoiceData === null || invoiceData === void 0 || (_invoiceData$data14 = invoiceData.data) === null || _invoiceData$data14 === void 0 ? void 0 : _invoiceData$data14.payerPostalCode) !== null && _invoiceData$data$pay8 !== void 0 ? _invoiceData$data$pay8 : '')), /*#__PURE__*/_react["default"].createElement("div", null, (_invoiceData$data$pay9 = invoiceData === null || invoiceData === void 0 || (_invoiceData$data15 = invoiceData.data) === null || _invoiceData$data15 === void 0 ? void 0 : _invoiceData$data15.payerCountry) !== null && _invoiceData$data$pay9 !== void 0 ? _invoiceData$data$pay9 : ''), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2"
  }, invoiceData !== null && invoiceData !== void 0 && (_invoiceData$data16 = invoiceData.data) !== null && _invoiceData$data16 !== void 0 && _invoiceData$data16.payerNumber ? /*#__PURE__*/_react["default"].createElement("div", null, invoiceData === null || invoiceData === void 0 || (_invoiceData$data17 = invoiceData.data) === null || _invoiceData$data17 === void 0 ? void 0 : _invoiceData$data17.payerNumber) : null, invoiceData !== null && invoiceData !== void 0 && (_invoiceData$data18 = invoiceData.data) !== null && _invoiceData$data18 !== void 0 && _invoiceData$data18.payerNumber && invoiceData !== null && invoiceData !== void 0 && (_invoiceData$data19 = invoiceData.data) !== null && _invoiceData$data19 !== void 0 && _invoiceData$data19.payerWebsite ? /*#__PURE__*/_react["default"].createElement("div", null, invoiceData !== null && invoiceData !== void 0 && (_invoiceData$data20 = invoiceData.data) !== null && _invoiceData$data20 !== void 0 && _invoiceData$data20.payerNumber && invoiceData !== null && invoiceData !== void 0 && (_invoiceData$data21 = invoiceData.data) !== null && _invoiceData$data21 !== void 0 && _invoiceData$data21.payerWebsite ? '|' : '') : null, /*#__PURE__*/_react["default"].createElement("div", null, (_invoiceData$data$pay10 = invoiceData === null || invoiceData === void 0 || (_invoiceData$data22 = invoiceData.data) === null || _invoiceData$data22 === void 0 ? void 0 : _invoiceData$data22.payerWebsite) !== null && _invoiceData$data$pay10 !== void 0 ? _invoiceData$data$pay10 : "\xA0"))), invoiceData !== null && invoiceData !== void 0 && (_invoiceData$simpleDa10 = invoiceData.simpleData) !== null && _invoiceData$simpleDa10 !== void 0 && _invoiceData$simpleDa10.total && invoiceData !== null && invoiceData !== void 0 && (_invoiceData$data23 = invoiceData.data) !== null && _invoiceData$data23 !== void 0 && _invoiceData$data23.currency ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '.25rem'
    }
  }, "TOTAL AMOUNT DUE IN ", invoiceData.data.currency), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '2rem',
      textAlign: 'right',
      fontWeight: '600',
      background: 'blue',
      color: 'white'
    }
  }, "$ ", _ecommerce.westernMoneyFormat.format(invoiceData.simpleData.total))) : null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].DetailTableContainer)
  }, /*#__PURE__*/_react["default"].createElement("table", {
    className: "".concat(_AdminModule["default"].DetailTable)
  }, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "Details"), /*#__PURE__*/_react["default"].createElement("th", null, "Rate"), /*#__PURE__*/_react["default"].createElement("th", null, "Qty"), /*#__PURE__*/_react["default"].createElement("th", null, "Line Total")), invoiceData !== null && invoiceData !== void 0 && (_invoiceData$simpleDa11 = invoiceData.simpleData) !== null && _invoiceData$simpleDa11 !== void 0 && _invoiceData$simpleDa11.table ? invoiceData.simpleData.table.map(function (m, i) {
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: i
    }, /*#__PURE__*/_react["default"].createElement("td", {
      className: "".concat(_AdminModule["default"].DescriptionContainer)
    }, m.description, " ", m.customerCharged ? "| $".concat(_ecommerce.westernMoneyFormat.format(m.customerCharged), " USD was processed this period") : ''), /*#__PURE__*/_react["default"].createElement("td", {
      className: "".concat(_AdminModule["default"].TableNumber)
    }, m.rate, "/", m.measureBy), /*#__PURE__*/_react["default"].createElement("td", {
      className: "".concat(_AdminModule["default"].TableNumber)
    }, m.qty.toFixed ? new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(m.qty) : m.qty), /*#__PURE__*/_react["default"].createElement("td", {
      className: "".concat(_AdminModule["default"].TableNumber)
    }, m.lineTotal.toFixed ? new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(m.lineTotal) : m.lineTotal));
  }) : null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p20",
    style: {
      justifyContent: 'space-between',
      marginTop: '1rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w600",
    style: {
      fontSize: '.8rem'
    }
  }, "Payment Method"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.75rem'
    }
  }, (_invoiceData$data$pay11 = invoiceData === null || invoiceData === void 0 || (_invoiceData$data24 = invoiceData.data) === null || _invoiceData$data24 === void 0 ? void 0 : _invoiceData$data24.paymentMethod) !== null && _invoiceData$data$pay11 !== void 0 ? _invoiceData$data$pay11 : "\xA0"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.75rem',
      marginTop: '1rem'
    }
  }, (_invoiceData$data$pay12 = invoiceData === null || invoiceData === void 0 || (_invoiceData$data25 = invoiceData.data) === null || _invoiceData$data25 === void 0 ? void 0 : _invoiceData$data25.payeeNote) !== null && _invoiceData$data$pay12 !== void 0 ? _invoiceData$data$pay12 : "\xA0")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex",
    style: {
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Subtotal"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w600"
  }, "$ ", invoiceData !== null && invoiceData !== void 0 && (_invoiceData$simpleDa12 = invoiceData.simpleData) !== null && _invoiceData$simpleDa12 !== void 0 && _invoiceData$simpleDa12.subTotal ? _ecommerce.westernMoneyFormat.format(invoiceData.simpleData.subTotal) : "\xA0")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex",
    style: {
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Tax"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w600"
  }, "$ ", invoiceData !== null && invoiceData !== void 0 && (_invoiceData$simpleDa13 = invoiceData.simpleData) !== null && _invoiceData$simpleDa13 !== void 0 && _invoiceData$simpleDa13.subTotal ? _ecommerce.westernMoneyFormat.format(invoiceData.simpleData.tax) : "\xA0")), /*#__PURE__*/_react["default"].createElement("div", null, "\xA0"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex",
    style: {
      borderTop: '1px solid black',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Total Due"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w600"
  }, "$ ", invoiceData !== null && invoiceData !== void 0 && (_invoiceData$simpleDa14 = invoiceData.simpleData) !== null && _invoiceData$simpleDa14 !== void 0 && _invoiceData$simpleDa14.total ? _ecommerce.westernMoneyFormat.format(invoiceData.simpleData.total) : "\xA0")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.7rem'
    }
  }, "(", (_invoiceData$simpleDa15 = invoiceData === null || invoiceData === void 0 || (_invoiceData$simpleDa16 = invoiceData.simpleData) === null || _invoiceData$simpleDa16 === void 0 ? void 0 : _invoiceData$simpleDa16.currency) !== null && _invoiceData$simpleDa15 !== void 0 ? _invoiceData$simpleDa15 : "\xA0", ")"))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].millerText),
    style: {
      textAlign: 'right',
      fontStyle: 'italic'
    }
  }, (_invoiceData$data$pay13 = invoiceData === null || invoiceData === void 0 || (_invoiceData$data26 = invoiceData.data) === null || _invoiceData$data26 === void 0 ? void 0 : _invoiceData$data26.paymentThankyou) !== null && _invoiceData$data$pay13 !== void 0 ? _invoiceData$data$pay13 : "\xA0"))))) : null)));
};
var _default = exports["default"] = Module;