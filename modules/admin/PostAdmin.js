"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _link = _interopRequireDefault(require("next/link"));
var _uuid = require("uuid");
var _reactTextareaAutosize = _interopRequireDefault(require("react-textarea-autosize"));
var _StorageAdmin = _interopRequireDefault(require("./StorageAdmin"));
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _AdminModule = _interopRequireDefault(require("./Admin.module.scss"));
var _SignIn = require("../utility/onboarding/SignIn");
var _fetch = require("../utility/fetch");
var _util = require("../util");
var _utility = require("./article/utility");
var _event = require("../utility/utility/event");
var _toolbarOptions = _interopRequireDefault(require("./editor/toolbarOptions"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
var moduleName = 'PostAdmin';
var editorElementId = 'admin_editor_element';
var defaultText = "Let's start a conversation.";
var useToolbarOptions = _toolbarOptions["default"];
var Module = function Module(props) {
  var _ref2, _published$authorUser, _props$_loggedIn, _ref3, _published$authorUser2, _props$_loggedIn2, _meta$featuredImg, _meta$featuredImg2, _meta$featuredImg3;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    componentId = _React$useState4[0],
    setComponentId = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    editorInitialized = _React$useState6[0],
    setEditorInitialized = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(0),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    editorCreateAttempts = _React$useState8[0],
    setEditorCreateAttempts = _React$useState8[1];
  var _React$useState9 = _react["default"].useState('admin'),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    postType = _React$useState10[0],
    setPostType = _React$useState10[1];
  var _React$useState11 = _react["default"].useState([]),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    useGroups = _React$useState12[0],
    setUseGroups = _React$useState12[1];
  var _React$useState13 = _react["default"].useState([]),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    useTags = _React$useState14[0],
    setUseTags = _React$useState14[1];
  var _React$useState15 = _react["default"].useState(false),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    published = _React$useState16[0],
    setPublished = _React$useState16[1];
  var _React$useState17 = _react["default"].useState({}),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    meta = _React$useState18[0],
    setMeta = _React$useState18[1];
  var _React$useState19 = _react["default"].useState(false),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    didPublishThisSession = _React$useState20[0],
    setDidPublishThisSession = _React$useState20[1];
  var _React$useState21 = _react["default"].useState([]),
    _React$useState22 = _slicedToArray(_React$useState21, 2),
    recentArticles = _React$useState22[0],
    setRecentArticles = _React$useState22[1];
  var _React$useState23 = _react["default"].useState(0),
    _React$useState24 = _slicedToArray(_React$useState23, 2),
    postOffset = _React$useState24[0],
    setPostOffset = _React$useState24[1];
  var _React$useState25 = _react["default"].useState(true),
    _React$useState26 = _slicedToArray(_React$useState25, 2),
    approved = _React$useState26[0],
    setApproved = _React$useState26[1];
  var titleRef = _react["default"].useRef();
  var editorRef = _react["default"].useRef();
  var groupsRef = _react["default"].useRef();
  var tagsRef = _react["default"].useRef();
  var approvedRef = _react["default"].useRef();
  var featuredImgRef = _react["default"].useRef();
  var featuredImgUrlRef = _react["default"].useRef();
  var useDefaultText = defaultText;
  props._LocalEventEmitter.unsubscribe(moduleName);
  props._LocalEventEmitter.subscribe(moduleName, function (e) {
    if (e) {
      if (e.dispatch === 'loadDefault') {
        // loadDefault()
      } else if (e.dispatch === 'save') {
        if (localStorage && editorRef !== null && editorRef !== void 0 && editorRef.current) {
          var contentRaw = editorRef.current.getText();
          var currentContents = editorRef.current.getContents();
          if (contentRaw.length > useDefaultText.length + 25) {
            // If there is a rough match to default text, do not save
            if (!published) {
              // Only cache if not published for now
              if (currentContents) {
                var _titleRef$current;
                localStorage.setItem('cached_post_admin', JSON.stringify({
                  title: titleRef === null || titleRef === void 0 || (_titleRef$current = titleRef.current) === null || _titleRef$current === void 0 ? void 0 : _titleRef$current.value,
                  content: currentContents,
                  groups: useGroups,
                  tags: useTags
                }));
              }
            }
          }
        }
      }
    }
  });
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      var id = (0, _uuid.v4)();
      setComponentId(id);
      setInterval(function () {
        props._LocalEventEmitter.dispatch(moduleName, {
          dispatch: 'save'
        });
      }, 7500);
      loadDefault();
      setComponentDidMount(true);
    }
  }, [componentDidMount]);

  /**
   * Should load initial recently created Platform Posts
   * @returns 
   */
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
              postOffset: postOffset * 100
            };
            _context.next = 3;
            return (0, _fetch.fetchPost)(props.apiUrl + '/a/recentarticles', null, null, body);
          case 3:
            res = _context.sent;
            if (res) {
              _context.next = 8;
              break;
            }
            return _context.abrupt("return", false);
          case 8:
            if (!res.hasOwnProperty('status')) {
              _context.next = 21;
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
              _context.next = 21;
              break;
            }
            if (res !== null && res !== void 0 && res.data) {
              setRecentArticles(res.data);
            }
            // if (res.askStream) {
            //     setAskStream(res.askStream)
            // }
            // if (res.canStream) {
            //     setCanStream(res.canStream)
            // }
            return _context.abrupt("return", res);
          case 21:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function loadDefault() {
      return _ref.apply(this, arguments);
    };
  }();
  var initializeEditor = function initializeEditor() {
    var temp = editorCreateAttempts;
    temp = temp + 1;
    setEditorCreateAttempts(temp);
    var quill = new window.Quill("#".concat(editorElementId), {
      modules: {
        toolbar: useToolbarOptions
      },
      theme: 'snow'
    });
    if (quill) {
      if (quill.getModule) {
        var toolbar = quill.getModule('toolbar');
        toolbar.addHandler('image', imageHandler);
      }
      editorRef.current = quill;
      if (localStorage && editorRef.current) {
        // Load cached post
        var cachedPost = JSON.parse(localStorage.getItem('cached_post_admin'));
        if (cachedPost) {
          if (cachedPost.content) {
            editorRef.current.setContents(cachedPost.content);
          }
          if (cachedPost.title) {
            titleRef.current.value = cachedPost.title;
          }
          if (cachedPost.groups) {
            console.log(cachedPost.groups);
            groupsRef.current.value = cachedPost.groups.join(' ');
            setUseGroups(cachedPost.groups);
          }
          if (cachedPost.tags) {
            tagsRef.current.value = cachedPost.tags.join(' ');
            setUseTags(cachedPost.tags);
          }
        }
      }
      setEditorInitialized(true);
    }
  };
  function imageHandler() {
    console.log(document.getElementById(editorElementId));
    var range = this.quill.getSelection();
    var value = prompt('Image URL:');
    if (value) {
      this.quill.insertEmbed(range.index, 'image', value, Quill.sources.USER);
    }
  }
  _react["default"].useEffect(function () {
    var _window;
    if ((_window = window) !== null && _window !== void 0 && _window.Quill && !editorInitialized && editorCreateAttempts < 3) {
      var editorRendered = document.getElementById(editorElementId);
      if (editorRendered) {
        (0, _util.throttleFunctionCall)(props._LocalEventEmitter, '_initializeEditor', 1000, initializeEditor, []);
      }
    }
  }, [editorInitialized, editorCreateAttempts]);

  // If any nodes are recreated this will delete extra
  var destroyExtraNodes = function destroyExtraNodes() {
    try {
      if (document.getElementsByClassName('ql-toolbar')) {
        var tb = document.getElementsByClassName('ql-toolbar');
        if (tb.length > 1) {
          for (var i = 0; i < tb.length - 1; i++) {
            // Dont destroy most recently created
            if (tb[i] && tb[i].remove) {
              tb[i].remove();
            }
          }
        }
      }
    } catch (err) {
      // fail silently
    }
  };
  destroyExtraNodes();
  var handleUpdateInput = _react["default"].useCallback(function (e) {
    var _e$currentTarget;
    if (e !== null && e !== void 0 && (_e$currentTarget = e.currentTarget) !== null && _e$currentTarget !== void 0 && _e$currentTarget.getAttribute && e.currentTarget.getAttribute('modif')) {
      var _e$currentTarget2;
      var modif = e.currentTarget.getAttribute('modif');
      var value = e !== null && e !== void 0 && (_e$currentTarget2 = e.currentTarget) !== null && _e$currentTarget2 !== void 0 && (_e$currentTarget2 = _e$currentTarget2.value) !== null && _e$currentTarget2 !== void 0 && _e$currentTarget2.split ? e.currentTarget.value.split(' ') : [];
      if (modif === 'groups') {
        setUseGroups(value);
      } else if (modif === 'tags') {
        setUseTags(value);
      }
    }
  });
  var handlePublishArticle = _react["default"].useCallback(function (e) {
    (0, _utility.publishArticle)(props, published, titleRef, useGroups, useTags, setUseTags, setUseGroups, tagsRef, groupsRef, editorRef, meta, setDidPublishThisSession, setPublished, loadDefault, useDefaultText, approved, setApproved, approvedRef);
  });
  var handleDeleteArticle = _react["default"].useCallback(function (e) {
    (0, _utility.deleteArticle)(props, published, titleRef, setUseTags, setUseGroups, tagsRef, groupsRef, editorRef, setPublished, loadDefault, useDefaultText);
  });
  var handleLoadArticle = _react["default"].useCallback(function (e) {
    var _e$currentTarget3;
    if (e !== null && e !== void 0 && (_e$currentTarget3 = e.currentTarget) !== null && _e$currentTarget3 !== void 0 && _e$currentTarget3.getAttribute) {
      var article = e.currentTarget.getAttribute('article');
      if (article) {
        (0, _utility.loadArticle)(props, article, editorRef, titleRef, groupsRef, tagsRef, setUseGroups, setUseTags, setPublished, setApproved, approvedRef, setMeta);
      }
    }
  });
  var handleSetApproved = _react["default"].useCallback(function (e) {
    if (e !== null && e !== void 0 && e.currentTarget) {
      setApproved(e.currentTarget.checked);
    }
  });
  var handleSetFeaturedImage = _react["default"].useCallback(function (e) {
    if (e !== null && e !== void 0 && e.currentTarget) {
      var temp = meta;
      temp.featuredImg = e.currentTarget.value;
      setMeta(temp);
      if (featuredImgRef !== null && featuredImgRef !== void 0 && featuredImgRef.current) {
        featuredImgRef.current.style.backgroundImage = "url(".concat(temp.featuredImg, ")");
      }
    }
  });
  console.log(recentArticles, meta);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className, " ").concat(moduleName, "_Container")
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "Post"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].containerTwoSmallRight)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Editor_Container Editor_MaxWidth"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactTextareaAutosize["default"], {
    className: "".concat(_AdminModule["default"].millerText),
    type: "text",
    placeholder: "Title",
    style: {
      fontStyle: 'italic',
      width: '100%',
      fontSize: '2rem',
      fontWeight: '700'
    },
    ref: titleRef
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '1.125rem',
      marginBottom: '.25rem',
      color: '#cccccc',
      fontWeight: '600'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].millerText),
    style: {
      fontStyle: 'italic'
    }
  }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/p?u=".concat((_ref2 = (_published$authorUser = published === null || published === void 0 ? void 0 : published.authorUsername) !== null && _published$authorUser !== void 0 ? _published$authorUser : props === null || props === void 0 || (_props$_loggedIn = props._loggedIn) === null || _props$_loggedIn === void 0 ? void 0 : _props$_loggedIn.username) !== null && _ref2 !== void 0 ? _ref2 : ''),
    style: {
      alignSelf: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", null, "by:\xA0"), /*#__PURE__*/_react["default"].createElement("span", null, (_ref3 = (_published$authorUser2 = published === null || published === void 0 ? void 0 : published.authorUsername) !== null && _published$authorUser2 !== void 0 ? _published$authorUser2 : props === null || props === void 0 || (_props$_loggedIn2 = props._loggedIn) === null || _props$_loggedIn2 === void 0 ? void 0 : _props$_loggedIn2.username) !== null && _ref3 !== void 0 ? _ref3 : '')))), /*#__PURE__*/_react["default"].createElement("div", null, published !== null && published !== void 0 && published.title ? /*#__PURE__*/_react["default"].createElement("div", {
    style: _defineProperty(_defineProperty({
      background: 'rgba(55, 55, 55, 1)',
      borderRadius: '.5rem',
      padding: '.25rem',
      width: '-webkit-fill-available',
      textAlign: 'center'
    }, "width", '100%'), "marginBottom", '.25rem')
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Read\xA0"), /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "".concat(props.devLocal ? "".concat(props.devAddress, "/ar?p=").concat(published === null || published === void 0 ? void 0 : published.id) : "https://".concat(props.domainUrl, "/ar?p=").concat(published === null || published === void 0 ? void 0 : published.id))
  }, "\"", published === null || published === void 0 ? void 0 : published.title, "\""), /*#__PURE__*/_react["default"].createElement("span", null, "\xA0at\xA0"), /*#__PURE__*/_react["default"].createElement("span", {
    selectValue: "".concat(props.devLocal ? "".concat(props.devAddress, "/ar?p=").concat(published === null || published === void 0 ? void 0 : published.id) : "https://".concat(props.domainUrl, "/ar?p=").concat(published === null || published === void 0 ? void 0 : published.id)),
    onClick: _event.selectThisText
  }, "".concat(props.devLocal ? "".concat(props.devAddress, "/ar?p=").concat(published === null || published === void 0 ? void 0 : published.id) : "".concat(props.domainUrl, "/ar?p=").concat(published === null || published === void 0 ? void 0 : published.id)))) : null), /*#__PURE__*/_react["default"].createElement("div", {
    id: "".concat(editorElementId),
    className: "Editor_Platform",
    style: {
      marginBottom: '.25rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("p", null, useDefaultText)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].metaContainer, " flex gap-p2"),
    style: {
      marginBottom: '.25rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      minWidth: '150px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      whiteSpace: 'nowrap'
    }
  }, "Featured Image"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: "Featured Image Url",
    style: {
      width: '100%',
      fontWeight: '600'
    },
    defaultValue: "".concat((_meta$featuredImg = meta === null || meta === void 0 ? void 0 : meta.featuredImg) !== null && _meta$featuredImg !== void 0 ? _meta$featuredImg : ''),
    onChange: handleSetFeaturedImage,
    ref: featuredImgUrlRef
  })), /*#__PURE__*/_react["default"].createElement("img", {
    style: {
      backgroundImage: "url(".concat((_meta$featuredImg2 = meta === null || meta === void 0 ? void 0 : meta.featuredImg) !== null && _meta$featuredImg2 !== void 0 ? _meta$featuredImg2 : null),
      height: '100px',
      width: '100%',
      minWidth: '100px',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    },
    selectValue: "".concat((_meta$featuredImg3 = meta === null || meta === void 0 ? void 0 : meta.featuredImg) !== null && _meta$featuredImg3 !== void 0 ? _meta$featuredImg3 : null),
    onClick: _event.selectThisText,
    ref: featuredImgRef
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2"
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Groups"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    id: "".concat(moduleName, "_groupingInput"),
    placeholder: "Post Groups",
    style: {
      width: '100%',
      fontWeight: '600'
    },
    onInput: handleUpdateInput,
    modif: "groups",
    ref: groupsRef
  })), (useGroups === null || useGroups === void 0 ? void 0 : useGroups.length) > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "tagContainer",
    style: {
      marginTop: '.25rem'
    }
  }, useGroups.map(function (d) {
    return d !== '' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "tagItem"
    }, d) : /*#__PURE__*/_react["default"].createElement("div", null);
  })) : null), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2"
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Tags"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    id: "".concat(moduleName, "_useTagsInput"),
    placeholder: "Tags",
    style: {
      width: '100%',
      fontWeight: '600'
    },
    onInput: handleUpdateInput,
    modif: "tags",
    ref: tagsRef
  })), (useTags === null || useTags === void 0 ? void 0 : useTags.length) > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "tagContainer",
    style: {
      marginTop: '.25rem'
    }
  }, useTags.map(function (d) {
    return d !== '' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "tagItem"
    }, d) : /*#__PURE__*/_react["default"].createElement("div", null);
  })) : null))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].forceSafeBreak, " flex gap-p2")
  }, !published ? /*#__PURE__*/_react["default"].createElement("button", {
    className: "".concat(_AdminModule["default"].actionButton),
    onClick: handlePublishArticle
  }, "Post") : /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      minWidth: '200px',
      maxWidth: '90%'
    },
    onClick: handlePublishArticle
  }, "Update"), /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      minWidth: '200px',
      maxWidth: '90%'
    },
    onClick: handleDeleteArticle
  }, "Delete")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      background: 'rgb(55, 55, 55)',
      borderRadius: '1rem',
      padding: '0 2rem',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("label", null, "Approved"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    ref: approvedRef,
    defaultChecked: true,
    onChange: handleSetApproved
  }))), didPublishThisSession && published !== null && published !== void 0 && published.id ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: '.5rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: _defineProperty({
      background: 'rgba(55, 55, 55, 1)',
      borderRadius: '.5rem',
      padding: '.25rem',
      width: '-webkit-fill-available',
      textAlign: 'center'
    }, "width", '100%')
  }, "Your post was made successsfully. View at\xA0", /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "".concat(props.devLocal ? "".concat(props.devAddress, "/ar?p=").concat(published === null || published === void 0 ? void 0 : published.id) : "https://".concat(props.domainUrl, "/ar?p=").concat(published === null || published === void 0 ? void 0 : published.id))
  }, "".concat(props.devLocal ? "".concat(props.devAddress, "/ar?p=").concat(published === null || published === void 0 ? void 0 : published.id) : "".concat(props.domainUrl, "/ar?p=").concat(published === null || published === void 0 ? void 0 : published.id))))) : null), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '.5rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    style: {
      fontWeight: '600'
    }
  }, "Recent Articles"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].simpleList, " ").concat(_AdminModule["default"].simpleListShortText),
    style: {
      maxHeight: '200px',
      overflow: 'auto'
    }
  }, (recentArticles === null || recentArticles === void 0 ? void 0 : recentArticles.length) > 0 ? recentArticles.map(function (m, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        background: 'rgb(53, 53, 53)'
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        cursor: 'pointer'
      },
      article: m === null || m === void 0 ? void 0 : m.id,
      onClick: handleLoadArticle
    }, m.title), /*#__PURE__*/_react["default"].createElement("span", null, m.publish && !isNaN(Number(m.publish)) && !isNaN(new Date(Number(m.publish))) ? " - ".concat(new Date(Number(m.publish)).toDateString()) : ''));
  }) : null)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_StorageAdmin["default"], _extends({}, props, {
    vert: true
  }))))));
};
var _default = exports["default"] = Module;