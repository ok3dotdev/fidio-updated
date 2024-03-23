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
var _h, _h2, _h3, _h4;
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
var moduleName = 'StreamAdmin';
var Module = function Module(props) {
  var _props$siteTitle, _props$siteTitle2;
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
    canStream = _React$useState6[0],
    setCanStream = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(null),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    askStream = _React$useState8[0],
    setAskStream = _React$useState8[1];
  var _React$useState9 = _react["default"].useState(0),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    canStreamOffset = _React$useState10[0],
    setCanStreamOffset = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(0),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    askStreamOffset = _React$useState12[0],
    setAskStreamOffset = _React$useState12[1];
  props._LocalEventEmitter.unsubscribe(moduleName);
  props._LocalEventEmitter.subscribe(moduleName, function (e) {
    if (e) {
      if (e.dispatch === 'loadDefault') {
        loadDefault();
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
  var loadDefault = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var body, res;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            body = {
              domainKey: props.domainKey,
              hash: props._loggedIn.hash,
              identifier: props._loggedIn.identifier,
              askStreamOffset: askStreamOffset * 50,
              canStreamOffset: canStreamOffset * 50
            };
            _context.next = 3;
            return (0, _fetch.fetchPost)(props.apiUrl + '/a/streampage', null, null, body);
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
              _context.next = 18;
              break;
            }
            return _context.abrupt("return", false);
          case 18:
            if (!(res.status == "success")) {
              _context.next = 22;
              break;
            }
            if (res.askStream) {
              setAskStream(res.askStream);
            }
            if (res.canStream) {
              setCanStream(res.canStream);
            }
            return _context.abrupt("return", res);
          case 22:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function loadDefault() {
      return _ref.apply(this, arguments);
    };
  }();
  var handleChangeStreamAuth = _react["default"].useCallback(function (e) {
    var modif = e.currentTarget.getAttribute('modif');
    var id = e.currentTarget.getAttribute('userid');
    if (modif && id) {
      changeAuth(id, modif);
    }
  });
  var changeAuth = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(useId, modif) {
      var body, res;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            body = {
              domainKey: props.domainKey,
              hash: props._loggedIn.hash,
              identifier: props._loggedIn.identifier,
              useId: useId,
              modif: modif,
              askStreamOffset: askStreamOffset * 50,
              canStreamOffset: canStreamOffset * 50
            };
            _context2.next = 3;
            return (0, _fetch.fetchPost)(props.apiUrl + '/a/changestreamauth', null, null, body);
          case 3:
            res = _context2.sent;
            if (res) {
              _context2.next = 8;
              break;
            }
            return _context2.abrupt("return", false);
          case 8:
            if (!res.hasOwnProperty('status')) {
              _context2.next = 22;
              break;
            }
            if (!(res.status == "disauthenticated")) {
              _context2.next = 14;
              break;
            }
            (0, _SignIn.logout)();
            return _context2.abrupt("return", "disauthenticated");
          case 14:
            if (!(res.status == "failed")) {
              _context2.next = 18;
              break;
            }
            return _context2.abrupt("return", false);
          case 18:
            if (!(res.status == "success")) {
              _context2.next = 22;
              break;
            }
            if (res.askStream) {
              setAskStream(res.askStream);
            }
            if (res.canStream) {
              setCanStream(res.canStream);
            }
            return _context2.abrupt("return", res);
          case 22:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function changeAuth(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleSetPagination = _react["default"].useCallback(function (e) {
    var scope = e.currentTarget.getAttribute('scope');
    if (scope) {
      var nextValue = e.currentTarget.getAttribute('i');
      console.log(nextValue);
      if (scope === 'askStreamOffset') {
        setAskStreamOffset(Number(nextValue));
      } else if (scope === 'canStreamOffset') {
        setCanStreamOffset(Number(nextValue));
      }
      setTimeout(function () {
        props._LocalEventEmitter.dispatch(moduleName, {
          dispatch: 'loadDefault'
        });
      }, 250);
    }
  });
  var askStreamOffsetPages = [askStreamOffset - 2, askStreamOffset - 1, askStreamOffset, askStreamOffset + 1, askStreamOffset + 2];
  var canStreamOffsetPages = [canStreamOffset - 2, canStreamOffset - 1, canStreamOffset, canStreamOffset + 1, canStreamOffset + 2];
  return <div className={"".concat(props.className, " ").concat(moduleName, "_Container")}>
            {_h || (_h = <h3>Stream</h3>)}
            <div className={"".concat(moduleName, "_InternalContainer")}>
                <section>
                    <_Tooltip.default title={"The Users below have asked to Stream on ".concat((_props$siteTitle = props.siteTitle) !== null && _props$siteTitle !== void 0 ? _props$siteTitle : 'your Platform')} placement='bottom'>
                        {_h2 || (_h2 = <h4>Asking</h4>)}
                    </_Tooltip.default>
                    <div className={"".concat(_AdminModule["default"].listContainer)} style={{
          maxHeight: '65vh'
        }}>
                        {askStream !== null && askStream !== void 0 && askStream.map ? askStream.map(function (m, i) {
            var _m$username, _m$username2;
            return <div className={"".concat(_AdminModule["default"].itemContainer)} key={i}>
                                        <_link.default href={"/p?u=".concat((_m$username = m.username) !== null && _m$username !== void 0 ? _m$username : m.id)} className={"menuLinkSelector"} style={{
                position: 'relative',
                alignSelf: 'center'
              }}>
                                            <div>{(_m$username2 = m.username) !== null && _m$username2 !== void 0 ? _m$username2 : m.id}</div>
                                        </_link.default>
                                        <button modif='authorize_streamer' userid={"".concat(m.id)} onClick={handleChangeStreamAuth}>Allow</button>
                                    </div>;
          }) : null}
                    </div>
                    <ul className={"PaginationContainer"}>
                        {askStreamOffsetPages.map(function (m, i) {
            return m > -1 ? <li className={"".concat(m == askStreamOffset ? 'ActivePage' : '')} scope='askStreamOffset' key={i} i={m} onClick={handleSetPagination}>{m + 1}</li> : null;
          })}
                    </ul>
                </section>
                <section>
                    <_Tooltip.default title={"The Users below currently have access to Stream on ".concat((_props$siteTitle2 = props.siteTitle) !== null && _props$siteTitle2 !== void 0 ? _props$siteTitle2 : 'your Platform')} placement='bottom'>
                        {_h3 || (_h3 = <h4>Streamers</h4>)}
                    </_Tooltip.default>
                    <div className={"".concat(_AdminModule["default"].listContainer)} style={{
          maxHeight: '65vh'
        }}>
                        {canStream !== null && canStream !== void 0 && canStream.map ? canStream.map(function (m, i) {
            var _m$username3, _m$username4;
            return <div className={"".concat(_AdminModule["default"].itemContainer)} key={i}>
                                        <_link.default href={"/p?u=".concat((_m$username3 = m.username) !== null && _m$username3 !== void 0 ? _m$username3 : m.id)} className={"menuLinkSelector"} style={{
                position: 'relative',
                alignSelf: 'center'
              }}>
                                            <div>{(_m$username4 = m.username) !== null && _m$username4 !== void 0 ? _m$username4 : m.id}</div>
                                        </_link.default>
                                        <button modif='disable_streamer' userid={"".concat(m.id)} onClick={handleChangeStreamAuth}>Disable</button>
                                    </div>;
          }) : null}
                    </div>
                    <ul className={"PaginationContainer"}>
                        {canStreamOffsetPages.map(function (m, i) {
            return m > -1 ? <li className={"".concat(m == canStreamOffset ? 'ActivePage' : '')} scope='canStreamOffset' key={i} i={m} onClick={handleSetPagination}>{m + 1}</li> : null;
          })}
                    </ul>
                </section>
                <section>
                    {_h4 || (_h4 = <h4>Platform Stream Status</h4>)}
                    <div className='gradient_style_bg_3' style={{
          fontSize: '.9rem',
          fontWeight: 700,
          width: 'fit-content',
          padding: '0.125rem 5rem'
        }}>LIVE</div>
                    <div style={{
          fontSize: '.75rem',
          marginTop: '.25rem'
        }}>Contact admin@tycoon.systems for any current Livestreaming Issues</div>
                </section>
            </div>
        </div>;
};
var _default = exports["default"] = Module;