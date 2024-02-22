"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _util = require("../util");
var _uuid = require("uuid");
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _PhotoCamera = _interopRequireDefault(require("@mui/icons-material/PhotoCamera"));
var _AdminModule = _interopRequireDefault(require("./Admin.module.scss"));
var _SignIn = require("../utility/onboarding/SignIn");
var _fetch = require("../utility/fetch");
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
var allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml', 'image/webp', 'image/bmp', 'image/tiff'];
var moduleName = 'StreamAdmin';
var USE_OFFSET_INTERVAL = 200;
var DO_SEARCH_DELAY = 1500;
var DEFAULT_VIEW_IMAGE = {
  location: 'img/default/greythumb_product.jpg',
  internal: true
};
var Module = function Module(props) {
  var _props$siteTitle, _currentImage$locatio, _currentImage$locatio2, _currentImage$locatio3;
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
  var _React$useState7 = _react["default"].useState(null),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    storageFiles = _React$useState8[0],
    setStorageFiles = _React$useState8[1];
  var _React$useState9 = _react["default"].useState([]),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    folders = _React$useState10[0],
    setFolders = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(''),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    currentDir = _React$useState12[0],
    setCurrentDir = _React$useState12[1];
  var _React$useState13 = _react["default"].useState(DEFAULT_VIEW_IMAGE),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    currentImage = _React$useState14[0],
    setCurrentImage = _React$useState14[1];
  var _React$useState15 = _react["default"].useState(0),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    itemOffset = _React$useState16[0],
    setItemOffset = _React$useState16[1];
  var uploadFile = _react["default"].useRef();
  var searchRef = _react["default"].useRef();
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
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(search) {
      var body, res, _res$folders;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            body = {
              domainKey: props.domainKey,
              hash: props._loggedIn.hash,
              identifier: props._loggedIn.identifier,
              directory: currentDir,
              itemOffset: itemOffset * USE_OFFSET_INTERVAL
            };
            if (search !== undefined) {
              body.search = search;
            }
            _context.next = 4;
            return (0, _fetch.fetchPost)(props.apiUrl + '/a/getstoragefiles', null, null, body);
          case 4:
            res = _context.sent;
            if (res) {
              _context.next = 9;
              break;
            }
            return _context.abrupt("return", false);
          case 9:
            if (!res.hasOwnProperty('status')) {
              _context.next = 22;
              break;
            }
            if (!(res.status == "disauthenticated")) {
              _context.next = 15;
              break;
            }
            (0, _SignIn.logout)();
            return _context.abrupt("return", "disauthenticated");
          case 15:
            if (!(res.status == "failed")) {
              _context.next = 19;
              break;
            }
            return _context.abrupt("return", false);
          case 19:
            if (!(res.status == "success")) {
              _context.next = 22;
              break;
            }
            if (res.contents) {
              setFolders((_res$folders = res.folders) !== null && _res$folders !== void 0 ? _res$folders : []);
              setStorageFiles(res.contents);
            }
            return _context.abrupt("return", res);
          case 22:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function loadDefault(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var handleItemInteraction = _react["default"].useCallback(function (e) {
    var modif = e.currentTarget.getAttribute('modif');
    var useKey = e.currentTarget.getAttribute('usekey');
    if (modif && useKey) {
      handleUpdate(useKey, modif);
    }
  });
  var handleGoBack = _react["default"].useCallback(function (e) {
    var useDir = currentDir.match(/([^\/]+)\/$/);
    if (useDir && useDir[1]) {
      var useNewDir = currentDir.replace(useDir[1] + '/', '');
      setCurrentDir(useNewDir);
      setTimeout(function () {
        props._LocalEventEmitter.dispatch(moduleName, {
          dispatch: 'loadDefault'
        });
      }, 150);
    }
  });
  var handleUpdate = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(key, modif) {
      var useOffset, useDir, temp, body, res, _res$folders2;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            useOffset = itemOffset;
            useDir = currentDir;
            if (modif === 'goto') {
              // If entering directory, restart at 0 index
              setItemOffset(0);
              useOffset = 0;
              useDir = key;
              setCurrentDir(key);
            } else if (modif === 'delete') {
              temp = _objectSpread({}, currentImage);
              temp = Object.assign({}, DEFAULT_VIEW_IMAGE);
              setCurrentImage(temp);
            }
            body = {
              domainKey: props.domainKey,
              hash: props._loggedIn.hash,
              identifier: props._loggedIn.identifier,
              key: key,
              modif: modif,
              directory: useDir,
              itemOffset: useOffset * USE_OFFSET_INTERVAL
            };
            _context2.next = 6;
            return (0, _fetch.fetchPost)(props.apiUrl + '/a/storagecrudupdate', null, null, body);
          case 6:
            res = _context2.sent;
            if (res) {
              _context2.next = 11;
              break;
            }
            return _context2.abrupt("return", false);
          case 11:
            if (!res.hasOwnProperty('status')) {
              _context2.next = 24;
              break;
            }
            if (!(res.status == "disauthenticated")) {
              _context2.next = 17;
              break;
            }
            (0, _SignIn.logout)();
            return _context2.abrupt("return", "disauthenticated");
          case 17:
            if (!(res.status == "failed")) {
              _context2.next = 21;
              break;
            }
            return _context2.abrupt("return", false);
          case 21:
            if (!(res.status == "success")) {
              _context2.next = 24;
              break;
            }
            if (res.contents) {
              setFolders((_res$folders2 = res.folders) !== null && _res$folders2 !== void 0 ? _res$folders2 : []);
              setStorageFiles(res.contents);
            }
            return _context2.abrupt("return", res);
          case 24:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function handleUpdate(_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleSelectUploadFile = _react["default"].useCallback(function (e) {
    var _e$target;
    if (e !== null && e !== void 0 && (_e$target = e.target) !== null && _e$target !== void 0 && _e$target.getAttribute('modif')) {
      var modif = e.target.getAttribute('modif');
      if (modif) {
        if (modif === 'img' && uploadFile !== null && uploadFile !== void 0 && uploadFile.current) {
          uploadFile.current.click();
        }
      }
    }
  });
  var handleUploadFile = _react["default"].useCallback(function (e) {
    try {
      console.log(e.target);
      setPageError(null);
      if (e && e.target && e.target.files) {
        var files = e.target.files;
        console.log(files);
        if (files && files.length > 0) {
          var filesRenamed = Array.from(files).slice(0, files.length > 1 ? 1 : files.length).filter(function (m) {
            var goodType = m.type && allowedTypes.indexOf(m.type) > -1;
            if (!goodType) {
              setPageError('Some types that were uploaded were not allowed. Please check that you are uploading the appropriate types for any file upload');
            }
            return goodType;
          }).map(function (m) {
            var nameSplit = m.name.split('.');
            var originalName = nameSplit[0].replace(/\s/g, '');
            var extension = nameSplit.pop();
            var blob = m.slice(0, m.size, m.type);
            return new File([blob], "".concat(originalName, ".").concat(extension), {
              type: m.type
            });
          });
          var f = /*#__PURE__*/function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _e$target2, formData, modif, res;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(!props.fetchBusy && props.apiUrl && props.domainKey && props._loggedIn)) {
                      _context3.next = 32;
                      break;
                    }
                    formData = new FormData();
                    if (filesRenamed) {
                      filesRenamed.forEach(function (file) {
                        formData.append("file", file);
                      });
                    }
                    if (e !== null && e !== void 0 && (_e$target2 = e.target) !== null && _e$target2 !== void 0 && _e$target2.getAttribute('modif')) {
                      modif = e.target.getAttribute('modif');
                    }
                    formData.append('domainKey', props.domainKey);
                    formData.append('hash', props._loggedIn.hash);
                    formData.append('identifier', props._loggedIn.identifier);
                    formData.append('directory', currentDir);
                    formData.append('modif', modif);
                    if (props.setFetchBusy) {
                      props.setFetchBusy(true);
                      setTimeout(function () {
                        props.setFetchBusy(false);
                      }, 30000);
                    }
                    if (!(modif && modif === 'image')) {
                      _context3.next = 32;
                      break;
                    }
                    _context3.next = 13;
                    return (0, _fetch.fetchPost)(props.apiUrl + '/a/uploadfile', null, null, formData, {
                      formData: true
                    });
                  case 13:
                    res = _context3.sent;
                    if (res) {
                      _context3.next = 18;
                      break;
                    }
                    return _context3.abrupt("return", false);
                  case 18:
                    if (!res.hasOwnProperty('status')) {
                      _context3.next = 32;
                      break;
                    }
                    if (!(res.status == "disauthenticated")) {
                      _context3.next = 24;
                      break;
                    }
                    (0, _SignIn.logout)();
                    return _context3.abrupt("return", "disauthenticated");
                  case 24:
                    if (!(res.status == "failed")) {
                      _context3.next = 28;
                      break;
                    }
                    return _context3.abrupt("return", false);
                  case 28:
                    if (!(res.status == "success")) {
                      _context3.next = 32;
                      break;
                    }
                    props.setFetchBusy(false);
                    setTimeout(function () {
                      props._LocalEventEmitter.dispatch(moduleName, {
                        dispatch: 'loadDefault'
                      });
                    }, 150);
                    return _context3.abrupt("return", res);
                  case 32:
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
  var handleSetPagination = _react["default"].useCallback(function (e) {
    var scope = e.currentTarget.getAttribute('scope');
    if (scope) {
      var nextValue = e.currentTarget.getAttribute('i');
      if (scope === 'itemOffset') {
        setItemOffset(Number(nextValue));
      }
      setTimeout(function () {
        props._LocalEventEmitter.dispatch(moduleName, {
          dispatch: 'loadDefault'
        });
      }, 150);
    }
  });
  var handleCloseError = function handleCloseError() {
    setPageError(null);
  };
  var handleDoLoad = _react["default"].useCallback(function (e) {
    var _e$currentTarget;
    if (e !== null && e !== void 0 && (_e$currentTarget = e.currentTarget) !== null && _e$currentTarget !== void 0 && _e$currentTarget.getAttribute) {
      var useKey = e.currentTarget.getAttribute('useKey');
      if (useKey) {
        var _props$cdn$static, _props$cdn;
        var temp = _objectSpread({}, currentImage);
        temp.location = "".concat((_props$cdn$static = props === null || props === void 0 || (_props$cdn = props.cdn) === null || _props$cdn === void 0 ? void 0 : _props$cdn["static"]) !== null && _props$cdn$static !== void 0 ? _props$cdn$static : '', "/").concat(useKey);
        temp.internal = false;
        setCurrentImage(temp);
        (0, _event.selectThisText)(e);
      }
    }
  });
  var itemOffsetPages = [itemOffset - 2, itemOffset - 1, itemOffset, itemOffset + 1, itemOffset + 2];
  var handleDoSearch = _react["default"].useCallback((0, _util.debounce)(function (e) {
    if (e !== null && e !== void 0 && e.target) {
      var value = e.target.value;
      if (value !== undefined) {
        loadDefault(value);
      }
    }
  }, DO_SEARCH_DELAY), []); // Debounce Search

  console.log(storageFiles, folders, props, currentDir, currentImage);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className, " ").concat(moduleName, "_Container")
  }, pageError ? /*#__PURE__*/_react["default"].createElement("p", {
    className: "error",
    style: {
      marginTop: '.5rem'
    },
    onClick: handleCloseError
  }, pageError) : null, !(props !== null && props !== void 0 && props.vert) ? /*#__PURE__*/_react["default"].createElement("h3", null, "Storage") : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].containerTwoSmallRight, " ").concat(props !== null && props !== void 0 && props.vert ? "".concat(_AdminModule["default"].vertView) : null)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(moduleName, "_InternalContainer")
  }, /*#__PURE__*/_react["default"].createElement("section", null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "See Storage for ".concat((_props$siteTitle = props.siteTitle) !== null && _props$siteTitle !== void 0 ? _props$siteTitle : 'your Platform', " below"),
    placement: "bottom"
  }, /*#__PURE__*/_react["default"].createElement("h4", null, "Files")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].storageActionContainer, " flex gap-p2"),
    style: {
      marginBottom: '.25rem'
    }
  }, currentDir !== '' ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Go back"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2 al-cen pointer ".concat(_AdminModule["default"].itemContainer),
    onClick: handleGoBack,
    style: {
      width: 'fit-content',
      fontWeight: '600'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "material-icons",
    style: {
      fontSize: '1rem'
    }
  }, "arrow_back"), /*#__PURE__*/_react["default"].createElement("div", null, "back"))), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Upload New File to this Directory"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleSelectUploadFile,
    modif: "img"
  }, "Upload New Image"))) : null, /*#__PURE__*/_react["default"].createElement("input", {
    placeholder: "Search",
    ref: searchRef,
    style: {
      borderRadius: '1rem',
      borderWidth: 0,
      padding: '.0rem .5rem'
    },
    onChange: handleDoSearch
  })), /*#__PURE__*/_react["default"].createElement("input", {
    type: "file",
    modif: "image",
    style: {
      display: 'none'
    },
    ref: uploadFile,
    onChange: handleUploadFile
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].listContainer),
    style: {
      maxHeight: "".concat(props.vert ? '200px' : '65vh')
    }
  }, folders !== null && folders !== void 0 && folders.map ? folders.map(function (m, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_AdminModule["default"].itemContainer, " pointer"),
      key: i,
      modif: "goto",
      usekey: "".concat(m.Prefix),
      onClick: handleItemInteraction
    }, /*#__PURE__*/_react["default"].createElement("div", null, m.Prefix), /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex gap-p2"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: "material-icons",
      style: {
        fontSize: '1rem'
      }
    }, "arrow_forward")));
  }) : null, storageFiles !== null && storageFiles !== void 0 && storageFiles.map ? storageFiles.map(function (m, i) {
    var _props$cdn$static2, _props$cdn2, _props$cdn$static3, _props$cdn3;
    return m.Key !== currentDir ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_AdminModule["default"].itemContainer),
      key: i
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(props !== null && props !== void 0 && props.vert ? "".concat(_AdminModule["default"].shortened) : null),
      selectValue: "".concat((_props$cdn$static2 = props === null || props === void 0 || (_props$cdn2 = props.cdn) === null || _props$cdn2 === void 0 ? void 0 : _props$cdn2["static"]) !== null && _props$cdn$static2 !== void 0 ? _props$cdn$static2 : '', "/").concat(m.Key),
      onClick: handleDoLoad,
      useKey: "".concat(m.Key),
      style: {
        cursor: 'pointer'
      }
    }, m.Key), /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex gap-p2"
    }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
      title: "Copy URL",
      placement: "left"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: "material-icons",
      modif: "copy_url",
      usekey: "".concat(m.Key),
      selectValue: "".concat((_props$cdn$static3 = props === null || props === void 0 || (_props$cdn3 = props.cdn) === null || _props$cdn3 === void 0 ? void 0 : _props$cdn3["static"]) !== null && _props$cdn$static3 !== void 0 ? _props$cdn$static3 : '', "/").concat(m.Key),
      onClick: _event.selectThisText,
      style: {
        fontSize: '1rem'
      }
    }, "link")), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
      title: "Delete",
      placement: "left"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: "material-icons",
      modif: "delete",
      usekey: "".concat(m.Key),
      onClick: handleItemInteraction,
      style: {
        fontSize: '1rem'
      }
    }, "delete")))) : null;
  }) : null), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "PaginationContainer"
  }, itemOffsetPages.map(function (m, i) {
    return m > -1 ? /*#__PURE__*/_react["default"].createElement("li", {
      className: "".concat(m == itemOffset ? 'ActivePage' : ''),
      scope: "itemOffset",
      key: i,
      i: m,
      onClick: handleSetPagination
    }, m + 1) : null;
  }))), !(props !== null && props !== void 0 && props.vert) ? /*#__PURE__*/_react["default"].createElement("section", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2"
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Platform Storage Status:"), /*#__PURE__*/_react["default"].createElement("div", null, "Good")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2"
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Platform Content Delivery Network Status:"), /*#__PURE__*/_react["default"].createElement("div", null, "Good"))) : null), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontWeight: '600'
    }
  }, "View"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Click to Copy URL"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    style: {
      backgroundImage: "url(".concat((_currentImage$locatio = currentImage === null || currentImage === void 0 ? void 0 : currentImage.location) !== null && _currentImage$locatio !== void 0 ? _currentImage$locatio : null),
      height: "".concat(props.vert ? '200px' : '400px'),
      width: '100%',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    },
    selectValue: "".concat((_currentImage$locatio2 = currentImage === null || currentImage === void 0 ? void 0 : currentImage.location) !== null && _currentImage$locatio2 !== void 0 ? _currentImage$locatio2 : null),
    onClick: _event.selectThisText
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2 shareButton",
    selectValue: "".concat((_currentImage$locatio3 = currentImage === null || currentImage === void 0 ? void 0 : currentImage.location) !== null && _currentImage$locatio3 !== void 0 ? _currentImage$locatio3 : null),
    onClick: _event.selectThisText
  }, /*#__PURE__*/_react["default"].createElement(_PhotoCamera["default"], null), /*#__PURE__*/_react["default"].createElement("div", null, "Copy URL")))))));
};
var _default = exports["default"] = Module;