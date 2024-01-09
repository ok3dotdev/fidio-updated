"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _uuid = require("uuid");
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _AdminModule = _interopRequireDefault(require("./Admin.module.scss"));
var _fetch = require("../utility/fetch");
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
var allowedTypes = ['application/gzip'];
var Module = function Module(props) {
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
    msg1 = _React$useState6[0],
    setMsg1 = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(null),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    msg2 = _React$useState8[0],
    setMsg2 = _React$useState8[1];
  var _React$useState9 = _react["default"].useState(null),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    msg3 = _React$useState10[0],
    setMsg3 = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(null),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    msg4 = _React$useState12[0],
    setMsg4 = _React$useState12[1];
  var _React$useState13 = _react["default"].useState(null),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    msg5 = _React$useState14[0],
    setMsg5 = _React$useState14[1];
  var _React$useState15 = _react["default"].useState(null),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    msg6 = _React$useState16[0],
    setMsg6 = _React$useState16[1];
  var _React$useState17 = _react["default"].useState(null),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    msg7 = _React$useState18[0],
    setMsg7 = _React$useState18[1];
  var _React$useState19 = _react["default"].useState(null),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    packages = _React$useState20[0],
    setPackages = _React$useState20[1];
  var _React$useState21 = _react["default"].useState(-1),
    _React$useState22 = _slicedToArray(_React$useState21, 2),
    lastFetchPackages = _React$useState22[0],
    setLastFetchPackages = _React$useState22[1];
  var buildInput = _react["default"].useRef();
  var buildInput2 = _react["default"].useRef();
  var installPackageRef = _react["default"].useRef();
  var uninstallPackageRef = _react["default"].useRef();
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      var id = (0, _uuid.v4)();
      setComponentId(id);
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  _react["default"].useEffect(function () {
    if (lastFetchPackages === -1 && !packages && props.apiUrl && props.domainKey && props._loggedIn) {
      setLastFetchPackages(new Date().getTime());
      getPackages(props.apiUrl, props.domainKey, props._loggedIn);
    }
  }, [componentId, props.apiUrl, props.domainKey, props._loggedIn]);
  var getPackages = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(uri, domainKey, user) {
      var body, res, stringified;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(user.identifier && user.hash && domainKey)) {
              _context.next = 27;
              break;
            }
            body = {
              identifier: user.identifier,
              hash: user.hash,
              domainKey: domainKey
            };
            _context.next = 4;
            return (0, _fetch.fetchPost)(uri + '/a/getpackages', null, null, body);
          case 4:
            res = _context.sent;
            if (res) {
              _context.next = 9;
              break;
            }
            return _context.abrupt("return", false);
          case 9:
            if (!res.hasOwnProperty('status')) {
              _context.next = 24;
              break;
            }
            if (!(res.status == "disauthenticated")) {
              _context.next = 15;
              break;
            }
            logout();
            return _context.abrupt("return", "disauthenticated");
          case 15:
            if (!(res.status == "failed")) {
              _context.next = 19;
              break;
            }
            return _context.abrupt("return", false);
          case 19:
            if (!(res.status == "success" && res.data)) {
              _context.next = 24;
              break;
            }
            console.log(res.data);
            stringified = res.data.toString();
            if (stringified && JSON.parse(stringified)) {
              setPackages(JSON.parse(stringified));
            }
            return _context.abrupt("return", res);
          case 24:
            return _context.abrupt("return", false);
          case 27:
            return _context.abrupt("return", false);
          case 28:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getPackages(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
  var installPackage = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(uri, domainKey, user, pkg) {
      var options,
        r,
        body,
        res,
        _res$report,
        _res$report2,
        _args2 = arguments;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            options = _args2.length > 4 && _args2[4] !== undefined ? _args2[4] : {};
            if (!(user.identifier && user.hash && domainKey)) {
              _context2.next = 31;
              break;
            }
            if (props.setFetchBusy) {
              props.setFetchBusy(true);
              r = setTimeout(function () {
                props.setFetchBusy(false);
              }, 10000);
            }
            if (options !== null && options !== void 0 && options.uninstall) {
              setMsg4(null);
            } else {
              setMsg3(null);
            }
            body = {
              identifier: user.identifier,
              hash: user.hash,
              username: user.username,
              domainKey: domainKey,
              "package": pkg,
              options: options
            };
            _context2.next = 7;
            return (0, _fetch.fetchPost)(uri + '/a/installpackage', null, null, body);
          case 7:
            res = _context2.sent;
            clearTimeout(r);
            props.setFetchBusy(false);
            if (res) {
              _context2.next = 14;
              break;
            }
            return _context2.abrupt("return", false);
          case 14:
            if (!res.hasOwnProperty('status')) {
              _context2.next = 28;
              break;
            }
            if (!(res.status == "disauthenticated")) {
              _context2.next = 20;
              break;
            }
            logout();
            return _context2.abrupt("return", "disauthenticated");
          case 20:
            if (!(res.status == "failed")) {
              _context2.next = 25;
              break;
            }
            if (res.data) {
              if (options !== null && options !== void 0 && options.uninstall) {
                setMsg4(res.data);
              } else {
                setMsg3(res.data);
              }
            }
            return _context2.abrupt("return", false);
          case 25:
            if (!(res.status == "success" && res.data)) {
              _context2.next = 28;
              break;
            }
            if (options !== null && options !== void 0 && options.uninstall) {
              setMsg4((_res$report = res.report) !== null && _res$report !== void 0 ? _res$report : 'done');
            } else {
              setMsg3((_res$report2 = res.report) !== null && _res$report2 !== void 0 ? _res$report2 : 'done');
            }
            return _context2.abrupt("return", res);
          case 28:
            return _context2.abrupt("return", false);
          case 31:
            return _context2.abrupt("return", false);
          case 32:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function installPackage(_x4, _x5, _x6, _x7) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleNewBuild = _react["default"].useCallback(function (e) {
    try {
      console.log(e.target);
      if (e && e.target && e.target.files) {
        var files = e.target.files;
        if (files && files.length > 0) {
          var filesRenamed = Array.from(files).slice(0, files.length > 1 ? 1 : files.length).filter(function (m) {
            return m.type && allowedTypes.indexOf(m.type) > -1;
          }).map(function (m) {
            var blob = m.slice(0, m.size, m.type);
            return new File([blob], "".concat((0, _uuid.v4)(), ".tar.gz"), {
              type: m.type
            });
          });
          var f = /*#__PURE__*/function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _e$target, formData, modif, data;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(!props.fetchBusy && props.apiUrl && props.domainKey && props._loggedIn)) {
                      _context3.next = 20;
                      break;
                    }
                    formData = new FormData();
                    if (filesRenamed) {
                      filesRenamed.forEach(function (file) {
                        formData.append("file", file);
                      });
                    }
                    formData.append('domainKey', props.domainKey);
                    formData.append('hash', props._loggedIn.hash);
                    formData.append('identifier', props._loggedIn.identifier);
                    if (props.setFetchBusy) {
                      props.setFetchBusy(true);
                      setTimeout(function () {
                        props.setFetchBusy(false);
                      }, 10000);
                    }
                    if (e !== null && e !== void 0 && (_e$target = e.target) !== null && _e$target !== void 0 && _e$target.getAttribute('modif')) {
                      modif = e.target.getAttribute('modif');
                    }
                    if (!(modif && modif === 'public')) {
                      _context3.next = 14;
                      break;
                    }
                    _context3.next = 11;
                    return doUploadBuildPublic(props.apiUrl, props.domainKey, props._loggedIn, formData);
                  case 11:
                    _context3.t0 = _context3.sent;
                    _context3.next = 17;
                    break;
                  case 14:
                    _context3.next = 16;
                    return doUploadBuild(props.apiUrl, props.domainKey, props._loggedIn, formData);
                  case 16:
                    _context3.t0 = _context3.sent;
                  case 17:
                    data = _context3.t0;
                    if (data) {
                      if (props.setFetchBusy) {
                        props.setFetchBusy(false);
                      }
                      if (data.status === 'success') {
                        if (modif && modif === 'public') {
                          setMsg2("Build Uploaded at ".concat(new Date().toDateString(), " ").concat(new Date().toTimeString()));
                        } else {
                          setMsg1("Build Uploaded at ".concat(new Date().toDateString(), " ").concat(new Date().toTimeString()));
                        }
                      }
                    }
                    if (buildInput.current) {
                      buildInput.current.value = '';
                    }
                  case 20:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            }));
            return function f() {
              return _ref3.apply(this, arguments);
            };
          }();
          f();
        }
      }
    } catch (err) {
      console.log(err);
      setWarning({
        message: 'There was an issue uploading images'
      });
    }
  });
  var doUploadBuild = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(uri, domainKey, user, body) {
      var res;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (!(user.identifier && user.hash && domainKey)) {
              _context4.next = 23;
              break;
            }
            _context4.next = 3;
            return (0, _fetch.fetchPost)(uri + '/a/uploadbuild', null, null, body, {
              formData: true
            });
          case 3:
            res = _context4.sent;
            if (res) {
              _context4.next = 8;
              break;
            }
            return _context4.abrupt("return", false);
          case 8:
            if (!res.hasOwnProperty('status')) {
              _context4.next = 20;
              break;
            }
            if (!(res.status == "disauthenticated")) {
              _context4.next = 14;
              break;
            }
            logout();
            return _context4.abrupt("return", "disauthenticated");
          case 14:
            if (!(res.status == "failed")) {
              _context4.next = 18;
              break;
            }
            return _context4.abrupt("return", false);
          case 18:
            if (!(res.status == "success")) {
              _context4.next = 20;
              break;
            }
            return _context4.abrupt("return", res);
          case 20:
            return _context4.abrupt("return", false);
          case 23:
            return _context4.abrupt("return", false);
          case 24:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function doUploadBuild(_x8, _x9, _x10, _x11) {
      return _ref4.apply(this, arguments);
    };
  }();
  var doUploadBuildPublic = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(uri, domainKey, user, body) {
      var res;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            if (!(user.identifier && user.hash && domainKey)) {
              _context5.next = 23;
              break;
            }
            _context5.next = 3;
            return (0, _fetch.fetchPost)(uri + '/a/uploadbuildpublic', null, null, body, {
              formData: true
            });
          case 3:
            res = _context5.sent;
            if (res) {
              _context5.next = 8;
              break;
            }
            return _context5.abrupt("return", false);
          case 8:
            if (!res.hasOwnProperty('status')) {
              _context5.next = 20;
              break;
            }
            if (!(res.status == "disauthenticated")) {
              _context5.next = 14;
              break;
            }
            logout();
            return _context5.abrupt("return", "disauthenticated");
          case 14:
            if (!(res.status == "failed")) {
              _context5.next = 18;
              break;
            }
            return _context5.abrupt("return", false);
          case 18:
            if (!(res.status == "success")) {
              _context5.next = 20;
              break;
            }
            return _context5.abrupt("return", res);
          case 20:
            return _context5.abrupt("return", false);
          case 23:
            return _context5.abrupt("return", false);
          case 24:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function doUploadBuildPublic(_x12, _x13, _x14, _x15) {
      return _ref5.apply(this, arguments);
    };
  }();
  var handleUploadNewBuild = _react["default"].useCallback(function (e) {
    var _e$target2;
    console.log(e.target);
    if (e !== null && e !== void 0 && (_e$target2 = e.target) !== null && _e$target2 !== void 0 && _e$target2.getAttribute('modif')) {
      var modif = e.target.getAttribute('modif');
      if (modif) {
        if (modif === 'public' && buildInput2.current) {
          buildInput2.current.click();
        }
      }
    } else if (buildInput.current) {
      buildInput.current.click(); // Prompt file upload
    }
  });
  var handleInstall = _react["default"].useCallback(function (e) {
    var _e$target3, _installPackageRef$cu;
    console.log(e);
    if (e !== null && e !== void 0 && (_e$target3 = e.target) !== null && _e$target3 !== void 0 && _e$target3.getAttribute('modif')) {
      var modif = e.target.getAttribute('modif');
      if (modif) {
        var _uninstallPackageRef$;
        if (modif === 'uninstall' && uninstallPackageRef !== null && uninstallPackageRef !== void 0 && (_uninstallPackageRef$ = uninstallPackageRef.current) !== null && _uninstallPackageRef$ !== void 0 && _uninstallPackageRef$.value) {
          installPackage(props.apiUrl, props.domainKey, props._loggedIn, uninstallPackageRef.current.value, {
            uninstall: true
          });
        }
      }
    } else if (installPackageRef !== null && installPackageRef !== void 0 && (_installPackageRef$cu = installPackageRef.current) !== null && _installPackageRef$cu !== void 0 && _installPackageRef$cu.value) {
      installPackage(props.apiUrl, props.domainKey, props._loggedIn, installPackageRef.current.value);
    }
  });
  var daemonBuild = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(uri, domainKey, user) {
      var r, body, res;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            if (!(user.identifier && user.hash && domainKey)) {
              _context6.next = 30;
              break;
            }
            if (props.setFetchBusy) {
              props.setFetchBusy(true);
              r = setTimeout(function () {
                props.setFetchBusy(false);
              }, 10000);
            }
            setMsg7(null);
            body = {
              identifier: user.identifier,
              hash: user.hash,
              username: user.username,
              domainKey: domainKey
            };
            _context6.next = 6;
            return (0, _fetch.fetchPost)(uri + '/a/daemonbuild', null, null, body);
          case 6:
            res = _context6.sent;
            clearTimeout(r);
            props.setFetchBusy(false);
            if (res) {
              _context6.next = 13;
              break;
            }
            return _context6.abrupt("return", false);
          case 13:
            if (!res.hasOwnProperty('status')) {
              _context6.next = 27;
              break;
            }
            if (!(res.status == "disauthenticated")) {
              _context6.next = 19;
              break;
            }
            logout();
            return _context6.abrupt("return", "disauthenticated");
          case 19:
            if (!(res.status == "failed")) {
              _context6.next = 24;
              break;
            }
            setMsg7('Daemon Failed');
            return _context6.abrupt("return", false);
          case 24:
            if (!(res.status == "success" && res.data)) {
              _context6.next = 27;
              break;
            }
            setMsg7('Attempted to Daemon Build. Refresh on another tab to check');
            return _context6.abrupt("return", res);
          case 27:
            return _context6.abrupt("return", false);
          case 30:
            return _context6.abrupt("return", false);
          case 31:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return function daemonBuild(_x16, _x17, _x18) {
      return _ref6.apply(this, arguments);
    };
  }();
  var handleDaemonBuild = _react["default"].useCallback(function (e) {
    daemonBuild(props.apiUrl, props.domainKey, props._loggedIn);
  });
  var handleSetCurrentBuildAsSafe = _react["default"].useCallback(function (e) {
    console.log(e);
  });
  var handleRecover = _react["default"].useCallback(function (e) {
    console.log(e);
  });
  var strippedUrl = props !== null && props !== void 0 && props.domainUrl ? props.domainUrl.replace(/(?:www\.)?/, '') : '';
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className, " Admin_Build_Container")
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "Build"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "Admin_Build_InternalContainer"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "file",
    style: {
      display: 'none'
    },
    ref: buildInput,
    onChange: handleNewBuild
  }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 'fit-content'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Upload your new build in .next.tar.gz format. Use makebuild script to create new build",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '.125rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("b", null, "Push New Build")))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleUploadNewBuild
  }, "Upload Build"), msg1 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "admin_update"
  }, msg1) : null)), /*#__PURE__*/_react["default"].createElement("input", {
    type: "file",
    style: {
      display: 'none'
    },
    ref: buildInput2,
    onChange: handleNewBuild,
    modif: "public"
  }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 'fit-content'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Upload your new public folder in public.tar.gz format. Use makebuild script to create public folder tar",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '.125rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("b", null, "Push New Public Folder")))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleUploadNewBuild,
    modif: "public"
  }, "Upload Public Folder"), msg2 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "admin_update"
  }, msg2) : null)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 'fit-content'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Daemons current build uploaded to client server directory",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '.125rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("b", null, "Run Build")))), /*#__PURE__*/_react["default"].createElement("p", {
    className: "admin_prompt"
  }, "Caution: Running a bad build will bring down the platform immediately. Running new builds without having installed packages will cause the platform to be taken offline as well. This is temporary until platform at sys.", strippedUrl, " can be run to serve builds when ", props.domainUrl, " is offline."), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleDaemonBuild,
    modif: "public"
  }, "Deploy Build"), msg7 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "admin_update"
  }, msg7) : null)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 'fit-content'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Currently installed Packages",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '.125rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("b", null, "Installed Client Packages")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "admin_container",
    style: {
      maxHeight: '300px',
      overflow: 'auto'
    }
  }, packages !== null && packages !== void 0 && packages.dependencies && Object.entries(packages.dependencies) ? Object.entries(packages.dependencies).map(function (m, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex gap-p5",
      key: i
    }, /*#__PURE__*/_react["default"].createElement("div", null, m[0]), /*#__PURE__*/_react["default"].createElement("div", null, m[1]));
  }) : null)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 'fit-content'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Install NPM Package here. Use Package@Version syntax for specific Version if required. Request must be approved by repo if package not already whitelisted",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '.125rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("b", null, "Run Install")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "admin_pair"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: "NPM Package",
    ref: installPackageRef
  }), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleInstall
  }, "Install")), msg3 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "admin_update"
  }, msg3) : null), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 'fit-content'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Will uninstall package referenced here. Ensure to upload new build before uninstalling packages that current build relies on. Otherwise platform will go down",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '.125rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("b", null, "Run Uninstall")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "admin_pair"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: "NPM Package",
    ref: uninstallPackageRef
  }), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleInstall,
    modif: "uninstall"
  }, "Uninstall")), msg4 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "admin_update"
  }, msg4) : null)));
};
var _default = exports["default"] = Module;