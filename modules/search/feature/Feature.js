"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _image = _interopRequireDefault(require("next/image"));
var _link = _interopRequireDefault(require("next/link"));
var _FeatureModule = _interopRequireDefault(require("./Feature.module.scss"));
var _router = require("next/router");
var _util = require("../../util");
var _search = require("../../utility/search");
var _uuid = require("uuid");
var _div, _div2, _div3, _span, _span2, _span3, _span4;
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
var isOverflown = function isOverflown(clientWidth, clientHeight, scrollWidth, scrollHeight) {
  console.log(clientWidth, clientHeight, scrollWidth, scrollHeight);
  return scrollHeight > clientHeight || scrollWidth > clientWidth;
};
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
    fetchBusy = _React$useState8[0],
    setFetchBusy = _React$useState8[1];
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
    featureData = _React$useState14[0],
    setFeatureData = _React$useState14[1];
  var _React$useState15 = _react["default"].useState({
      size: 'thin'
    }),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    featureState = _React$useState16[0],
    setFeatureState = _React$useState16[1];
  var _React$useState17 = _react["default"].useState(false),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    stagger = _React$useState18[0],
    setStagger = _React$useState18[1];
  var _React$useState19 = _react["default"].useState(null),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    checkContainerOverflownTime = _React$useState20[0],
    setCheckContainerOverflownTime = _React$useState20[1];
  var _React$useState21 = _react["default"].useState(null),
    _React$useState22 = _slicedToArray(_React$useState21, 2),
    containerOverflownInterval = _React$useState22[0],
    setContainerOverflownInterval = _React$useState22[1];
  var _React$useState23 = _react["default"].useState(false),
    _React$useState24 = _slicedToArray(_React$useState23, 2),
    useOverflown = _React$useState24[0],
    setUseOverflown = _React$useState24[1];
  var _React$useState25 = _react["default"].useState(-1),
    _React$useState26 = _slicedToArray(_React$useState25, 2),
    lastFeatureCheck = _React$useState26[0],
    setLastFeatureCheck = _React$useState26[1];
  var router = (0, _router.useRouter)();
  var staggerRef = _react["default"].useRef();
  var featureContainerRef = _react["default"].useRef();
  if (componentId) {
    props._LocalEventEmitter.unsubscribe(componentId);
    props._LocalEventEmitter.subscribe(componentId, function (d) {
      if (d && d.dispatch) {
        if (d.dispatch === 'checkContainerOverflown') {
          checkFeatureContainerOverflown();
        }
      }
    });
  }
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      setComponentDidMount(new Date().getTime());
      if (props.stagger) {
        staggerRef.current = setTimeout(function () {
          setStagger(true);
        }, props.stagger);
      } else {
        setStagger(true);
      }
      var id = (0, _uuid.v4)();
      setComponentId(id);
    }
  }, [componentDidMount, props.stagger]);
  _react["default"].useEffect(function () {
    if (componentId && props._LocalEventEmitter && !containerOverflownInterval) {
      var r = setInterval(function () {
        props._LocalEventEmitter.dispatch(componentId, {
          dispatch: 'checkContainerOverflown'
        });
      }, 5000);
      setContainerOverflownInterval(r);
    }
  }, [props._LocalEventEmitter, componentId, containerOverflownInterval]);
  _react["default"].useEffect(function () {
    if (stagger) {
      if (props.defaultSize) {
        var temp = _objectSpread({}, featureState);
        temp.size = props.defaultSize;
        setFeatureState(temp);
      }
    }
  }, [stagger]);
  var cycleFeatureSize = _react["default"].useCallback(function (e) {
    if (featureState) {
      var temp = _objectSpread({}, featureState);
      if (temp.size === 'thin') {
        temp.size = props.defaultSize !== 'thin' ? props.defaultSize : 'medium';
      } else if (temp.size === 'medium') {
        temp.size = props.defaultSize !== 'medium' ? props.defaultSize : 'thin';
      } else if (temp.size === 'large') {
        temp.size = props.defaultSize !== 'large' ? props.defaultSize : 'thin';
      }
      setFeatureState(temp);
    }
  });
  _react["default"].useEffect(function () {
    var f = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var selector, useData, _props$s, args, res;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              selector = props.featureData ? 'featureData' : 'noSelection';
              useData = (0, _util.isObjectEmpty)(featureData) ? props[selector] : featureData;
              console.log(useData);
              if (!(useData && !fetchBusy)) {
                _context.next = 19;
                break;
              }
              console.log('Use Data!', useData);
              if (!(lastFeatureCheck < new Date().getTime() - 10000)) {
                _context.next = 19;
                break;
              }
              setLastFeatureCheck(new Date().getTime());
              setFetchBusy(true);
              if (!(!useData.user && props._loggedIn && props._loggedIn.identifier)) {
                _context.next = 17;
                break;
              }
              args = {
                identifier: props._loggedIn.identifier,
                hash: props._loggedIn.hash,
                domainKey: props.domainKey,
                params: {
                  u: props._loggedIn.identifier,
                  s: (_props$s = props.s) !== null && _props$s !== void 0 ? _props$s : ''
                }
              };
              _context.next = 12;
              return (0, _search.fetchSearchData)(props.apiUrl, ['featureData'], args);
            case 12:
              res = _context.sent;
              setFetchBusy(false);
              if (res) {
                if (res && res.data && res.data[selector]) {
                  setFeatureData(res.data[selector]);
                }
              }
              _context.next = 19;
              break;
            case 17:
              setFetchBusy(false);
              setFeatureData(props[selector]);
            case 19:
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
  }, [props.featureData, featureData, feed, fetchBusy, combinedFeed, props._loggedIn, props.domainKey]);
  _react["default"].useEffect(function () {
    var f = featureData.data && Array.isArray(featureData.data) ? featureData.data.concat(feed) : [];
    var update = false;
    for (var i = 0; i < combinedFeed.length; i++) {
      if (!(0, _util.compareObjects)(combinedFeed, f)) {
        update = true;
        break;
      }
    }
    if (combinedFeed.length === 0 && f.length !== 0) {
      setCombinedFeed(f);
    }
  }, [featureData]);
  var myLoader = function myLoader(_ref2) {
    var src = _ref2.src;
    if (src.match(/greythumb/)) {
      return "".concat(src);
    } else if (props.cdn && props.cdn["static"] && props.cdn["static"].length > 0) {
      return "".concat(props.cdn["static"], "/").concat(src);
    }
  };
  var checkFeatureContainerOverflown = function checkFeatureContainerOverflown() {
    if (!checkContainerOverflownTime || checkContainerOverflownTime && checkContainerOverflownTime < new Date().getTime() - 5000) {
      if (featureContainerRef.current) {
        setCheckContainerOverflownTime(new Date().getTime());
        var clientWidth = featureContainerRef.current.clientWidth;
        var clientHeight = featureContainerRef.current.clientHeight;
        var scrollWidth = featureContainerRef.current.scrollWidth;
        var scrollHeight = featureContainerRef.current.scrollHeight;
        var overflown = isOverflown(clientWidth, clientHeight, scrollWidth, scrollHeight);
        if (overflown) {
          setUseOverflown(overflown);
          return overflown;
        }
      }
      return false;
    }
  };
  return <div className={"".concat(_FeatureModule["default"].featureExternalContainer, " ").concat(combinedFeed.length > 0 ? featureState.size === 'thin' ? "FeatureContainerOpen" : featureState.size === 'medium' ? "FeatureContainerOpen ".concat(_FeatureModule["default"].featureContainerOpen, " FeatureContainerOpenMedium") : featureState.size === 'large' ? "FeatureContainerOpen ".concat(_FeatureModule["default"].featureContainerOpen, " FeatureContainerOpenLarge") : '' : '', " ").concat(props.className)}>
            {!props.hideToggle && combinedFeed.length > 0 ? <div className={"".concat(_FeatureModule["default"].sizeExpandContainer)}>
                        <div className={"".concat(_FeatureModule["default"].sizeExpand)} onClick={cycleFeatureSize}></div>
                    </div> : _div || (_div = <div></div>)}
            {combinedFeed.length > 0 ? <div className={"".concat(_FeatureModule["default"].featureContainer, " ").concat(featureState && featureState.size ? featureState.size === 'medium' ? _FeatureModule["default"].featureContainerMedium : featureState.size === 'large' ? _FeatureModule["default"].featureContainerLarge : '' : '', " ").concat(useOverflown ? featureState.size === 'medium' ? 'featureContainerOverflown featureContainerOverflown_medium' : featureState.size === 'large' ? 'featureContainerOverflown featureContainerOverflown_large' : '' : '')} ref={featureContainerRef}>
                        <div className={"".concat(_FeatureModule["default"].itemContainer, " ").concat(featureState.size === 'thin' ? _FeatureModule["default"].itemContainerThin : '')}>
                            {combinedFeed.map(function (item, i) {
          var _featureState$size;
          return <div className={"".concat(_FeatureModule["default"].item, " ").concat(featureState.size === 'thin' ? _FeatureModule["default"].itemThin : "Item_ContainerMetaController Item_ContainerMetaControllerFeature", " Item_ContainerMetaControllerFeature_").concat((_featureState$size = featureState === null || featureState === void 0 ? void 0 : featureState.size) !== null && _featureState$size !== void 0 ? _featureState$size : '', " Feature_Item")} key={i}>
                                        <_link.default href={"w?v=".concat(item.id)}>
                                            {item.status === 'live' && featureState.size !== 'thin' ? <div className={"LiveTag ".concat(_FeatureModule["default"].statusContainer)}>LIVE{_div2 || (_div2 = <div className='RecordingCircle RecordingCircle_Small'></div>)}</div> : ''}
                                            {featureState.size !== 'thin' ? <_react.default.Fragment>
                                                        <_image.default loader={myLoader} src={item.thumbnail && props.cdn && props.cdn["static"] ? item.thumbnail : 'img/default/greythumb.jpg'} alt={item.title ? item.title : ""} width={60} height={30} layout="responsive" className='Feature_Img Feature_Img_Border' />
                                                        <div className='Item_GhostMeta Item_GhostMetaFeature'>
                                                            {item.creation && !isNaN(item.creation) && !isNaN(new Date(Number(item.creation))) ? <div className='Item_TinyMetaText Item_TinyMetaTextFeature' style={{
                    marginBottom: '.25rem',
                    textShadow: '1px 2px 6px rgb(0 0 0 / 75%)'
                  }}>Stream started {new Date(Number(item.creation)).toTimeString()}</div> : null}
                                                            <div className='Item_GhostMetaContainerInternal'>
                                                                <div>{item.description ? item.description : "Watch Livestream Now"}</div>
                                                            </div>
                                                        </div>
                                                    </_react.default.Fragment> : null}
                                            <div className={"".concat(_FeatureModule["default"].itemMetaContainer, " ").concat(featureState.size === 'thin' ? _FeatureModule["default"].thinMetaContainerSize : '')}>
                                                <div className={"".concat(_FeatureModule["default"].itemMetaContainerPadding)}>
                                                    <div className={"".concat(_FeatureModule["default"].itemMetaText)}>
                                                        {item.status === 'live' && featureState.size === 'thin' ? <div className={"LiveTag ".concat(_FeatureModule["default"].statusContainerInline, " LiveTag_Thin }")}>{_div3 || (_div3 = <div className='RecordingCircle RecordingCircle_Small'></div>)}</div> : ''}
                                                        <div className={"flex gap-p2 ".concat((item.title.length ? item.title.length : "".concat(item.author_username, " is Streaming Now").length) + item.author_username.length > 20 ? 'marquee' : '', " ").concat(featureState.size === 'thin' ? _FeatureModule["default"].thinMeta : '', " ").concat(_FeatureModule["default"].itemMarqueeContainer)}>
                                                            {(item.title.length ? item.title.length : "".concat(item.author_username, " is Streaming Now").length) + item.author_username.length > 20 ? <div className={"marqueeContainer ".concat((featureState === null || featureState === void 0 ? void 0 : featureState.size) === 'thin' ? "".concat(_FeatureModule["default"].marqueeContainerThin) : '')}>
                                                                    <div className='marquee1'>
                                                                        <div className={"".concat(_FeatureModule["default"].titleText)}>{item.title ? item.title : "".concat(item.author_username, " is Streaming Now")}</div>
                                                                        {_span || (_span = <span> - </span>)}
                                                                        <div className={"".concat(_FeatureModule["default"].authorUser)}>{item.author_username}</div>
                                                                    </div>
                                                                    <div className='marquee2'>
                                                                        <div className={"".concat(_FeatureModule["default"].titleText)}>{item.title ? item.title : "".concat(item.author_username, " is Streaming Now")}</div>
                                                                        {_span2 || (_span2 = <span> - </span>)}
                                                                        <div className={"".concat(_FeatureModule["default"].authorUser)}>{item.author_username}</div>
                                                                    </div>
                                                                    <div className='marquee3'>
                                                                        <div className={"".concat(_FeatureModule["default"].titleText)}>{item.title ? item.title : "".concat(item.author_username, " is Streaming Now")}</div>
                                                                        {_span3 || (_span3 = <span> - </span>)}
                                                                        <div className={"".concat(_FeatureModule["default"].authorUser)}>{item.author_username}</div>
                                                                    </div>
                                                                </div> : <_react.default.Fragment>
                                                                    <div className={"".concat(_FeatureModule["default"].titleText)}>{item.title ? item.title : "".concat(item.author_username, " is Streaming Now")}</div>
                                                                    {_span4 || (_span4 = <span> - </span>)}
                                                                    <div className={"".concat(_FeatureModule["default"].authorUser)}>{item.author_username}</div>
                                                                </_react.default.Fragment>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </_link.default>
                                    </div>;
        })}
                        </div>
                    </div> : null}
        </div>;
};
var _default = exports["default"] = Module;