"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _router = require("next/router");
var _streaming = require("../../utility/streaming");
var _SignIn = require("../../utility/onboarding/SignIn");
var _ecommerce = require("../../utility/ecommerce");
var _uuid = require("uuid");
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _ManagerModule = _interopRequireDefault(require("./Manager.module.scss"));
var _material = require("@mui/material");
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
  var _React$useState = _react["default"].useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    pageError = _React$useState2[0],
    setPageError = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    componentDidMount = _React$useState4[0],
    setComponentDidMount = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(null),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    componentId = _React$useState6[0],
    setComponentId = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    didCheckStream = _React$useState8[0],
    setDidCheckStream = _React$useState8[1];
  var _React$useState9 = _react["default"].useState(false),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    currentlyStreaming = _React$useState10[0],
    setCurrentlyStreaming = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(null),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    streamKey = _React$useState12[0],
    setStreamKey = _React$useState12[1];
  var _React$useState13 = _react["default"].useState(null),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    streamTo = _React$useState14[0],
    setStreamTo = _React$useState14[1];
  var _React$useState15 = _react["default"].useState(false),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    fetchBusy = _React$useState16[0],
    setFetchBusy = _React$useState16[1];
  var _React$useState17 = _react["default"].useState('stream'),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    openMenu = _React$useState18[0],
    setOpenMenu = _React$useState18[1];
  var _React$useState19 = _react["default"].useState({}),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    creatingShop = _React$useState20[0],
    setCreatingShop = _React$useState20[1];
  var _React$useState21 = _react["default"].useState({
      password: null,
      "private": false,
      dates: [],
      tags: [],
      input: ''
    }),
    _React$useState22 = _slicedToArray(_React$useState21, 2),
    streamSettings = _React$useState22[0],
    setStreamSettings = _React$useState22[1];
  var _React$useState23 = _react["default"].useState(false),
    _React$useState24 = _slicedToArray(_React$useState23, 2),
    askEndStream = _React$useState24[0],
    setAskEndStream = _React$useState24[1];
  var _React$useState25 = _react["default"].useState(false),
    _React$useState26 = _slicedToArray(_React$useState25, 2),
    updatingStreamConfig = _React$useState26[0],
    setUpdatingStreamConfig = _React$useState26[1];
  var _React$useState27 = _react["default"].useState(false),
    _React$useState28 = _slicedToArray(_React$useState27, 2),
    canStream = _React$useState28[0],
    setCanStream = _React$useState28[1];
  var _React$useState29 = _react["default"].useState(false),
    _React$useState30 = _slicedToArray(_React$useState29, 2),
    didAskStream = _React$useState30[0],
    setDidAskStream = _React$useState30[1];
  var fetchTimeoutRef = _react["default"].useRef();
  var proposedShopName = _react["default"].useRef();
  var proposedShopDesc = _react["default"].useRef();
  var privateRef = _react["default"].useRef();
  var privateRef2 = _react["default"].useRef();
  var passwordRef = _react["default"].useRef();
  var passwordRef2 = _react["default"].useRef();
  var titleRef = _react["default"].useRef();
  var descriptionRef = _react["default"].useRef();
  var myTagsRef = _react["default"].useRef();
  if (componentId) {
    props._LocalEventEmitter.unsubscribe(componentId);
    props._LocalEventEmitter.subscribe(componentId, function (d) {
      if (d && d.dispatch) {
        if (d.dispatch === 'paintStreamData') {
          setStreamData(currentlyStreaming);
        }
      }
    });
  }
  var router = (0, _router.useRouter)();
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      var id = (0, _uuid.v4)();
      setComponentId(id);
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  _react["default"].useEffect(function () {
    if (props._loggedIn && props._loggedIn.username && !didCheckStream) {
      setDidCheckStream(true);
      checkStream(true);
    }
  }, [props._loggedIn, didCheckStream]);
  var checkStream = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var dontForce,
        data,
        res,
        d,
        _args = arguments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            dontForce = _args.length > 0 && _args[0] !== undefined ? _args[0] : false;
            _context.prev = 1;
            if (fetchBusy) {
              _context.next = 19;
              break;
            }
            setFetchBusy(true);
            fetchTimeoutRef.current = setTimeout(function () {
              setFetchBusy(false);
            }, 10000);
            data = {
              stripeSecret: props._stripeSecret,
              dontForce: dontForce,
              streamSettings: streamSettings
            };
            _context.next = 8;
            return (0, _streaming.beginStream)(props.apiUrl, props.domainKey, data, _SignIn.checkSignedIn);
          case 8:
            res = _context.sent;
            if (fetchTimeoutRef.current) {
              clearTimeout(fetchTimeoutRef.current);
            }
            if (res) {
              _context.next = 18;
              break;
            }
            if (!dontForce) {
              _context.next = 14;
              break;
            }
            setFetchBusy(false);
            return _context.abrupt("return");
          case 14:
            props._setPageError("Failed to save begin stream");
            setFetchBusy(false);
            _context.next = 19;
            break;
          case 18:
            if (res == "disauthenticated") {
              props._setLoggedIn(false);
              props._setStripeSecret(false);
              setFetchBusy(false);
              (0, _SignIn.logout)();
            } else if (res.status == 'success') {
              // On successfull credit card received, purchase phone number and then update locally
              setFetchBusy(false);
              console.log('check stream', res);
              setCanStream(res.canStream);
              if (res.askStream) {
                setDidAskStream(true);
              }
              if (res.data && res.data.status == 'streaming' && res.data.stream) {
                setCurrentlyStreaming(res.data.stream);
                setStreamData(res.data.stream);
                if (res.data.key) {
                  setStreamKey(res.data.key);
                }
                if (res.data.streamTo) {
                  setStreamTo(res.data.streamTo);
                }
                if (res.data.stream.meta && res.data.stream.meta.streamSettings) {
                  d = res.data.stream.meta.streamSettings;
                  setStreamSettings(d);
                }
                if (props._LocalEventEmitter) {
                  props._LocalEventEmitter.dispatch('refetchDefaults', {
                    dispatch: 'simple'
                  });
                }
              }
            }
          case 19:
            _context.next = 25;
            break;
          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](1);
            if (fetchTimeoutRef.current) {
              clearTimeout(fetchTimeoutRef.current);
            }
            setFetchBusy(false);
          case 25:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 21]]);
    }));
    return function checkStream() {
      return _ref.apply(this, arguments);
    };
  }();
  var setStreamData = function setStreamData(stream) {
    try {
      if (stream) {
        titleRef.current.value = stream.title;
        descriptionRef.current.value = stream.description;
        myTagsRef.current.value = stream.tags;
      }
    } catch (err) {
      // fail silently
    }
  };
  var updateStreamConfig = _react["default"].useCallback(function (e) {
    updateStreamConfigFn();
  });
  var updateStreamConfigFn = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var streamData, data, res, d;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            if (fetchBusy) {
              _context2.next = 12;
              break;
            }
            setFetchBusy(true);
            setUpdatingStreamConfig(true);
            fetchTimeoutRef.current = setTimeout(function () {
              setFetchBusy(false);
              setUpdatingStreamConfig(false);
            }, 10000);
            streamData = {
              title: titleRef.current && titleRef.current.value ? titleRef.current.value : null,
              description: descriptionRef.current && descriptionRef.current.value ? descriptionRef.current.value : null,
              tags: myTagsRef.current && myTagsRef.current.value ? myTagsRef.current.value : null
            };
            data = {
              stream: currentlyStreaming.id,
              streamData: streamData,
              streamSettings: streamSettings
            };
            _context2.next = 9;
            return (0, _streaming.updateStreamConfigRequest)(props.apiUrl, props.domainKey, data, _SignIn.checkSignedIn);
          case 9:
            res = _context2.sent;
            if (fetchTimeoutRef.current) {
              clearTimeout(fetchTimeoutRef.current);
            }
            if (!res) {
              props._setPageError("Failed to save begin stream");
              setFetchBusy(false);
              setUpdatingStreamConfig(false);
            } else if (res == "disauthenticated") {
              props._setLoggedIn(false);
              props._setStripeSecret(false);
              setFetchBusy(false);
              setUpdatingStreamConfig(false);
              (0, _SignIn.logout)();
            } else if (res.status == 'success') {
              // On successfull credit card received, purchase phone number and then update locally
              console.log('check stream', res);
              setFetchBusy(false);
              setUpdatingStreamConfig(false);
              if (res.data && res.data.status == 'streaming') {
                setCurrentlyStreaming(res.data.stream);
                if (res.data.key) {
                  setStreamKey(res.data.key);
                }
                if (res.data.streamTo) {
                  setStreamTo(res.data.streamTo);
                }
                if (res.data.stream) {
                  if (res.data.stream.meta && res.data.stream.meta.streamSettings) {
                    d = res.data.stream.meta.streamSettings;
                    setStreamSettings(d);
                  }
                }
              }
            }
          case 12:
            _context2.next = 20;
            break;
          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            if (fetchTimeoutRef.current) {
              clearTimeout(fetchTimeoutRef.current);
            }
            setFetchBusy(false);
            setUpdatingStreamConfig(false);
          case 20:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 14]]);
    }));
    return function updateStreamConfigFn() {
      return _ref2.apply(this, arguments);
    };
  }();
  var beginStreaming = _react["default"].useCallback(function (e) {
    checkStream();
  });
  var handleSetAdminMenu = _react["default"].useCallback(function (e) {
    try {
      if (e.target.getAttribute('menu')) {
        var menu = e.target.getAttribute('menu');
        setOpenMenu(menu);
      }
    } catch (err) {
      // fail silently
    }
  });
  _react["default"].useEffect(function () {
    if (streamSettings) {
      resolveState(streamSettings);
      props._LocalEventEmitter.dispatch(componentId, {
        dispatch: 'paintStreamData'
      });
    }
  }, [componentId, props._LocalEventEmitter, props.adminPanelState, streamSettings]);
  var resolveState = function resolveState(d) {
    var useSettings = d ? d : streamSettings;
    privateRef.current ? privateRef.current.checked = useSettings["private"] : null;
    privateRef2.current ? privateRef2.current.checked = useSettings["private"] : null;
    passwordRef.current ? passwordRef.current.value = useSettings.password : null;
    passwordRef2.current ? passwordRef2.current.value = useSettings.password : null;
    console.log(streamSettings);
  };
  console.log(props, streamSettings);
  var handleCreateShop = _react["default"].useCallback( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e) {
      var phase, res;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            setPageError(null);
            if (!e.target.getAttribute('phase')) {
              _context3.next = 19;
              break;
            }
            phase = e.target.getAttribute('phase');
            if (!(phase == '1')) {
              _context3.next = 8;
              break;
            }
            setCreatingShop({
              status: 'start'
            });
            _context3.next = 19;
            break;
          case 8:
            if (!(phase == 'end')) {
              _context3.next = 19;
              break;
            }
            console.log('Run request create shop', proposedShopName.current);
            setFetchBusy(true);
            if (!(proposedShopName.current && proposedShopName.current.value)) {
              _context3.next = 18;
              break;
            }
            _context3.next = 14;
            return (0, _ecommerce.createShop)(props.apiUrl, props.domainKey, props._loggedIn, {
              shopName: proposedShopName.current.value,
              shopDescription: proposedShopDesc.current.value
            });
          case 14:
            res = _context3.sent;
            if (res) {
              console.log(res);
              router.reload(window.location.pathname);
            } else {
              setPageError({
                message: 'Shop creation submission failed',
                placement: 'openshop'
              });
            }
            _context3.next = 19;
            break;
          case 18:
            setPageError({
              message: 'Please fill out a Shop Name',
              placement: 'description'
            });
          case 19:
            _context3.next = 24;
            break;
          case 21:
            _context3.prev = 21;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0); // fail silently
          case 24:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 21]]);
    }));
    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }());
  var handleClearError = _react["default"].useCallback(function (e) {
    setPageError(null);
  });
  var updateTags = _react["default"].useCallback(function (e) {
    var temp = _objectSpread({}, streamSettings);
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
    temp.dates = dates;
    temp.tags = tags;
    setStreamSettings(temp);
  });
  var setPrivate = _react["default"].useCallback(function (e) {
    var temp = _objectSpread({}, streamSettings);
    temp["private"] = e.currentTarget.checked;
    setStreamSettings(temp);
  });
  var setPassword = _react["default"].useCallback(function (e) {
    var temp = _objectSpread({}, streamSettings);
    temp.password = e.currentTarget.value;
    setStreamSettings(temp);
  });
  var handleAskEndStream = _react["default"].useCallback(function (e) {
    if (e.currentTarget.getAttribute('modif')) {
      var m = e.currentTarget.getAttribute('modif');
      if (m == 'yes') {
        // end stream
        try {
          var f = /*#__PURE__*/function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var data, res;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    console.log('end st', fetchBusy);
                    if (fetchBusy) {
                      _context4.next = 10;
                      break;
                    }
                    setFetchBusy(true);
                    fetchTimeoutRef.current = setTimeout(function () {
                      setFetchBusy(false);
                    }, 10000);
                    data = {
                      stream: currentlyStreaming.id
                    };
                    _context4.next = 7;
                    return (0, _streaming.endStream)(props.apiUrl, props.domainKey, data, _SignIn.checkSignedIn);
                  case 7:
                    res = _context4.sent;
                    if (fetchTimeoutRef.current) {
                      clearTimeout(fetchTimeoutRef.current);
                    }
                    if (!res) {
                      setAskEndStream(false);
                      props._setPageError("Failed to end stream");
                      setFetchBusy(false);
                    } else if (res == "disauthenticated") {
                      setAskEndStream(false);
                      props._setLoggedIn(false);
                      props._setStripeSecret(false);
                      setFetchBusy(false);
                      (0, _SignIn.logout)();
                    } else if (res.status == 'success') {
                      setAskEndStream(false);
                      // On successfull credit card received, purchase phone number and then update locally
                      setFetchBusy(false);
                      setCurrentlyStreaming(false);
                      setStreamKey(null);
                      setStreamTo(null);
                      setStreamSettings({
                        password: null,
                        "private": false,
                        dates: [],
                        tags: [],
                        input: ''
                      });
                      if (props._LocalEventEmitter) {
                        props._LocalEventEmitter.dispatch('refetchDefaults', {
                          dispatch: 'simple'
                        });
                      }
                    }
                  case 10:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4);
            }));
            return function f() {
              return _ref4.apply(this, arguments);
            };
          }();
          f();
        } catch (err) {
          setAskEndStream(false);
          if (fetchTimeoutRef.current) {
            clearTimeout(fetchTimeoutRef.current);
          }
          setFetchBusy(false);
        }
      } else {
        setAskEndStream(false);
      }
    } else if (!askEndStream) {
      setAskEndStream(true);
    }
  });
  var handleAskForStreamingPermissions = _react["default"].useCallback(function (e) {
    try {
      var f = /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
          var res, _res$data;
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                if (fetchBusy) {
                  _context5.next = 8;
                  break;
                }
                setFetchBusy(true);
                fetchTimeoutRef.current = setTimeout(function () {
                  setFetchBusy(false);
                }, 10000);
                _context5.next = 5;
                return (0, _streaming.requestStreamingPermissions)(props.apiUrl, props.domainKey, _SignIn.checkSignedIn);
              case 5:
                res = _context5.sent;
                if (fetchTimeoutRef.current) {
                  clearTimeout(fetchTimeoutRef.current);
                }
                if (!res) {
                  setAskEndStream(false);
                  setFetchBusy(false);
                } else if (res == "disauthenticated") {
                  setAskEndStream(false);
                  props._setLoggedIn(false);
                  props._setStripeSecret(false);
                  setFetchBusy(false);
                  (0, _SignIn.logout)();
                } else if (res.status == 'success') {
                  setAskEndStream(false);
                  // On successfull credit card received, purchase phone number and then update locally
                  setFetchBusy(false);
                  if (res !== null && res !== void 0 && (_res$data = res.data) !== null && _res$data !== void 0 && _res$data.created) {
                    setDidAskStream(true);
                  }
                  if (props._LocalEventEmitter) {
                    props._LocalEventEmitter.dispatch('refetchDefaults', {
                      dispatch: 'simple'
                    });
                  }
                }
              case 8:
              case "end":
                return _context5.stop();
            }
          }, _callee5);
        }));
        return function f() {
          return _ref5.apply(this, arguments);
        };
      }();
      f();
    } catch (err) {
      if (fetchTimeoutRef.current) {
        clearTimeout(fetchTimeoutRef.current);
      }
      setFetchBusy(false);
    }
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ManagerModule["default"].container, " ").concat(props.className)
  }, pageError && pageError.message && !pageError.placement ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "error",
    style: {
      margin: '.25rem',
      marginBottom: '0'
    },
    onClick: handleClearError
  }, pageError.message) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ManagerModule["default"].innerContainer, " flex gap-p2"),
    style: {
      flexDirection: 'column'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ManagerModule["default"].itemsContainer, " flex Manager_Items"),
    style: {
      padding: '.5rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "".concat(openMenu == 'stream' ? _ManagerModule["default"].activeItem : '', " ").concat(_ManagerModule["default"].item),
    onClick: handleSetAdminMenu,
    menu: "stream"
  }, "Stream"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "".concat(openMenu == 'shop' ? _ManagerModule["default"].activeItem : '', " ").concat(_ManagerModule["default"].item),
    onClick: handleSetAdminMenu,
    menu: "shop"
  }, "Shop")), openMenu === 'stream' ? props._loggedIn && props._loggedIn.username ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ManagerModule["default"].settingsSectionContainer, " flex gap-p5"),
    style: {
      padding: '.25rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ManagerModule["default"].settingContainer, " ").concat(_ManagerModule["default"].streamingInfoContainer, " ").concat(currentlyStreaming ? "".concat(_ManagerModule["default"].isStreamingContainer) : '')
  }, !fetchBusy && didCheckStream && didAskStream ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '.25rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.85rem',
      marginBottom: '.25rem'
    }
  }, "You have asked for permission to stream. Please check back soon.")) : !fetchBusy && didCheckStream && !canStream ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '.25rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.85rem',
      marginBottom: '.25rem'
    }
  }, "You are currently not authorized to stream"), /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      borderRadius: '.25rem'
    },
    onClick: handleAskForStreamingPermissions
  }, "Ask For Streaming Permissions?")) : null, !currentlyStreaming && canStream ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '1rem',
      fontWeight: '600',
      paddingTop: '0',
      paddingBottom: '.125rem',
      textAlign: 'center'
    }
  }, "Stream on ", props.siteTitle, " Now"), !fetchBusy ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      alignItems: 'center',
      marginBottom: '.125rem',
      height: 'inherit'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "".concat(_ManagerModule["default"].streamingButton),
    onClick: beginStreaming,
    style: {
      padding: '.125rem 2rem',
      fontSize: '1.5rem',
      paddingTop: '.125rem',
      width: '-webkit-fill-available',
      height: '75px'
    }
  }, "Begin Stream"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      background: 'black',
      padding: '0 .25rem',
      borderRadius: '.25rem',
      marginTop: '.25rem',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("label", {
    style: {
      fontSize: '.8rem'
    }
  }, "Private"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    onChange: setPrivate,
    ref: privateRef
  })), streamSettings["private"] ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("label", {
    style: {
      fontSize: '.8rem'
    }
  }, "Password"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    onChange: setPassword,
    style: {
      maxWidth: '100px',
      maxHeight: '16px',
      fontSize: '.85rem',
      marginLeft: '.25rem',
      borderRadius: '.25rem'
    },
    ref: passwordRef
  })) : null)) : /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.85rem'
    }
  }, "Please wait...")) : currentlyStreaming ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ManagerModule["default"].streamingButtonStreaming, " importantPrompt")
  }, "Now Streaming ", /*#__PURE__*/_react["default"].createElement("div", {
    className: "RecordingCircle RecordingCircle_Small"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.85rem',
      overflowWrap: 'anywhere'
    }
  }, /*#__PURE__*/_react["default"].createElement("b", null, "Share your stream link:"), " ", /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      background: 'black',
      padding: '0 .125rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "".concat(props.devLocal ? props.devAddress : 'https://' + props.domainUrl, "/w?u=").concat(props._loggedIn.username)
  }, "".concat(props.devLocal ? props.devAddress : props.domainUrl, "/w?u=").concat(props._loggedIn.username)))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.85rem',
      fontWeight: 600,
      color: '#94ff94',
      overflowWrap: 'anywhere'
    }
  }, "Stream Endpoint: ", /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontWeight: 400,
      background: 'black',
      padding: '0 .125rem'
    }
  }, streamTo)), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.85rem',
      fontWeight: 600,
      color: '#ff81ca',
      overflowWrap: 'anywhere'
    }
  }, "Private Stream Key: ", /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontWeight: 400,
      background: 'black',
      padding: '0 .125rem'
    }
  }, streamKey))) : null, currentlyStreaming ? !askEndStream ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !updatingStreamConfig ? /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      width: '100%',
      marginTop: '.25rem',
      lineHeight: '12.5px',
      fontSize: '.8rem'
    },
    onClick: updateStreamConfig
  }, "Update Changed Settings") : /*#__PURE__*/_react["default"].createElement(_material.LinearProgress, {
    color: "inherit",
    style: {
      height: '18.25px',
      marginTop: '.25rem'
    }
  }), /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      width: '100%',
      marginTop: '.25rem',
      lineHeight: '12.5px',
      fontSize: '.8rem'
    },
    onClick: handleAskEndStream
  }, "Terminate Stream")) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontWeight: 600,
      textAlign: 'center',
      marginTop: '.42rem'
    }
  }, "Terminate the Stream?"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      width: '100%',
      marginTop: '.25rem',
      lineHeight: '12.5px',
      fontSize: '.8rem'
    },
    onClick: handleAskEndStream,
    modif: "yes"
  }, "Yes"), /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      width: '100%',
      marginTop: '.25rem',
      lineHeight: '12.5px',
      fontSize: '.8rem'
    },
    onClick: handleAskEndStream,
    modif: "no"
  }, "No"))) : null), /*#__PURE__*/_react["default"].createElement("div", {
    className: _ManagerModule["default"].settingContainer
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    modif: 'title',
    ref: titleRef,
    placeholder: "Title",
    style: {
      width: '100%'
    }
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("textarea", {
    modif: 'description',
    ref: descriptionRef,
    placeholder: "Description",
    style: {
      maxWidth: '100%',
      marginTop: '.25rem',
      width: '100%',
      height: '90px'
    }
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    modif: 'tags',
    ref: myTagsRef,
    placeholder: "Tags",
    style: {
      width: '100%'
    }
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: _ManagerModule["default"].settingContainer
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem',
      marginBottom: '.125rem',
      marginTop: '.125rem'
    }
  }, "Create your own Auth Tags to provide authorization to watch the stream for any tickets with matching tags"), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Enter dates in the following format MON-DD-YYYY or they will not be parsed as dates. Values that do not match dates will be parsed as tags that can be added to livestreams. Any matches will authorize viewership of tickets with matching tags for the stream",
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
    placeholder: "Date in DD/MM/YY format or a Tag",
    onInput: updateTags,
    option: "livestreamDef",
    defaultValue: streamSettings.input
  })), streamSettings.dates.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "tagContainer",
    style: {
      marginTop: '.25rem'
    }
  }, streamSettings.dates.map(function (d, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "tagItem",
      key: i
    }, d && d.toLocaleString ? d.toLocaleString("en-US", {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    }) : '');
  })) : /*#__PURE__*/_react["default"].createElement("div", null), streamSettings.tags.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "tagContainer",
    style: {
      marginTop: '.25rem'
    }
  }, streamSettings.tags.map(function (d, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "tagItem",
      key: i
    }, d);
  })) : /*#__PURE__*/_react["default"].createElement("div", null), currentlyStreaming ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      background: 'black',
      padding: '0 .25rem',
      borderRadius: '.25rem',
      marginTop: '.25rem',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("label", {
    style: {
      fontSize: '.8rem'
    }
  }, "Private"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    onChange: setPrivate,
    ref: privateRef2
  })), streamSettings && streamSettings["private"] ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("label", {
    style: {
      fontSize: '.8rem'
    }
  }, "Password"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    onChange: setPassword,
    style: {
      maxWidth: '100px',
      maxHeight: '16px',
      fontSize: '.85rem',
      marginLeft: '.25rem',
      borderRadius: '.25rem'
    },
    ref: passwordRef2
  })) : null) : null)) : /*#__PURE__*/_react["default"].createElement("div", null, props._loggedIn ? !props._loggedIn.username ? 'Please register Username to begin streaming' : 'Please login to begin streaming' : null) : openMenu === 'shop' ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: '.25rem'
    }
  }, props.shopProfileData && props.shopProfileData.shop && props.shopProfileData.shop.status && props.shopProfileData.shop.status == 'nonexistent' ? /*#__PURE__*/_react["default"].createElement("div", null, !creatingShop.status ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '.25rem',
      paddingTop: '.25rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.85rem'
    }
  }, "You do not currently own a shop. Would you like to request to open one?"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleCreateShop,
    phase: "1"
  }, "Start Creating Shop"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.85rem'
    }
  }, "A shop allows for you to sell products on ", props.siteTitle, " with ease to all customers, fans, collectors, enthusiasts and passerbys utilizing all the tools offered on the platform. You will be able to track pending orders that have yet to be completed, products in carts, your personal inventory, sales and much more as well as sell products in such a way that makes it easier for your customers.")) : creatingShop.status && creatingShop.status == 'start' ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '.25rem',
      paddingTop: '.25rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.85rem'
    }
  }, "Name your Shop"), /*#__PURE__*/_react["default"].createElement("input", {
    ref: proposedShopName,
    type: "text",
    placeholder: "Shop Name",
    className: "simpleTextInput"
  }), /*#__PURE__*/_react["default"].createElement("textarea", {
    rows: "5",
    style: {
      height: 'auto',
      resize: 'none'
    },
    ref: proposedShopDesc,
    type: "text",
    placeholder: "You can describe your Shop here. You might put a company slogan, introduce your business, describe the products you sell or nothing at all. It is up to you and your stakeholders.",
    className: "simpleTextInput"
  }), pageError && pageError.message && pageError.placement == 'description' ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "error",
    onClick: handleClearError
  }, pageError.message) : null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.75rem',
      background: 'black',
      padding: '.125rem'
    }
  }, "When creating your shop, you must set up your vendor account. Please have your banking details ready for direct deposit setup. If you don't have banking details prepared at the moment, you can always set them up later. Once your shop is created, you can start creating products and showcasing them to the public. For all physical products, it is your responsibility to ensure that you have sufficient inventory available for direct-to-consumer sales through the platform. If any products offered for sale are out of stock, any payments received must be fully refunded to customers without exceptions. As a shop owner, you will be subject to platform fees, which will be deducted from your total revenues on the platform. ", props.siteTitle, " reserves the right to close any shop that is suspected of operating in a manner that jeopardizes the quality of service and integrity of the platform. All transactions on ", props.siteTitle, " are handled using Tycoon Systems Ecommerce Services. Any disputes on ", props.siteTitle, " are settled by the ", props.siteTitle, " platform. By submitting a request to open your shop below, you agree to the above terms and conditions."), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleCreateShop,
    phase: "end"
  }, "Open Shop"), pageError && pageError.message && pageError.placement == 'openshop' ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "error",
    onClick: handleClearError
  }, pageError.message) : null) : null) : props.shopProfileData && props.shopProfileData.shop && props.shopProfileData.shop.name ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.85rem'
    }
  }, props.shopProfileData.shop.name)) : null) : null));
};
var _default = exports["default"] = Module;