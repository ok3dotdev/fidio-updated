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
var _socket = require("../../utility/socket");
var _util = require("../../util");
var _ChatModule = _interopRequireDefault(require("./Chat.module.scss"));
var _utility = require("./utility");
var _Close = _interopRequireDefault(require("@mui/icons-material/Close"));
var _Reply = _interopRequireDefault(require("@mui/icons-material/Reply"));
var _ArrowUpward = _interopRequireDefault(require("@mui/icons-material/ArrowUpward"));
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _React$Fragment, _div;
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
var CONNECT_THRESHOLD = 12500;
var ADHOC_BLOCK_CHAT = 1500;
var RECENT_CHAT_THRESHOLD = 20000;
var RECENT_CHAT_TIMEOUT = 10000;
var MAX_RECENT_CHATS = 9;
var Module = function Module(props) {
  var _props$chatConfig$men, _props$chatConfig2, _props$chatConfig3;
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
    fetchBusy = _React$useState6[0],
    setFetchBusy = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    chatMaybeReady = _React$useState8[0],
    setChatMaybeReady = _React$useState8[1];
  var _React$useState9 = _react["default"].useState({}),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    lastChatInitialization = _React$useState10[0],
    setLastChatInitialization = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(false),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    currentChat = _React$useState12[0],
    setCurrentChat = _React$useState12[1];
  var _React$useState13 = _react["default"].useState(null),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    chatLog = _React$useState14[0],
    setChatLog = _React$useState14[1];
  var _React$useState15 = _react["default"].useState(false),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    blockChat = _React$useState16[0],
    setBlockChat = _React$useState16[1];
  var _React$useState17 = _react["default"].useState(false),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    blockSend = _React$useState18[0],
    setBlockSend = _React$useState18[1];
  var _React$useState19 = _react["default"].useState(false),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    blockSendForce = _React$useState20[0],
    setBlockSendForce = _React$useState20[1];
  var _React$useState21 = _react["default"].useState(-1),
    _React$useState22 = _slicedToArray(_React$useState21, 2),
    lastAdhocTimeout = _React$useState22[0],
    setLastAdhocTimeout = _React$useState22[1];
  var _React$useState23 = _react["default"].useState([]),
    _React$useState24 = _slicedToArray(_React$useState23, 2),
    recentChats = _React$useState24[0],
    setRecentChats = _React$useState24[1];
  var _React$useState25 = _react["default"].useState(null),
    _React$useState26 = _slicedToArray(_React$useState25, 2),
    recentChatTimeout = _React$useState26[0],
    setRecentChatTimeout = _React$useState26[1];
  var _React$useState27 = _react["default"].useState({}),
    _React$useState28 = _slicedToArray(_React$useState27, 2),
    modPower = _React$useState28[0],
    setModPower = _React$useState28[1];
  var _React$useState29 = _react["default"].useState(null),
    _React$useState30 = _slicedToArray(_React$useState29, 2),
    userDisplay = _React$useState30[0],
    setUserDisplay = _React$useState30[1];
  var _React$useState31 = _react["default"].useState(null),
    _React$useState32 = _slicedToArray(_React$useState31, 2),
    currentBanTable = _React$useState32[0],
    setCurrentBanTable = _React$useState32[1];
  var _React$useState33 = _react["default"].useState(-1),
    _React$useState34 = _slicedToArray(_React$useState33, 2),
    lastBanTableCheck = _React$useState34[0],
    setLastBanTableCheck = _React$useState34[1];
  var _React$useState35 = _react["default"].useState(null),
    _React$useState36 = _slicedToArray(_React$useState35, 2),
    replyToId = _React$useState36[0],
    setReplyToId = _React$useState36[1];
  var _React$useState37 = _react["default"].useState(null),
    _React$useState38 = _slicedToArray(_React$useState37, 2),
    replyToUsername = _React$useState38[0],
    setReplyToUsername = _React$useState38[1];
  var _React$useState39 = _react["default"].useState([]),
    _React$useState40 = _slicedToArray(_React$useState39, 2),
    replyToContent = _React$useState40[0],
    setReplyToContent = _React$useState40[1];
  var _React$useState41 = _react["default"].useState(null),
    _React$useState42 = _slicedToArray(_React$useState41, 2),
    highlightedChat = _React$useState42[0],
    setHighlightedChat = _React$useState42[1];
  var _React$useState43 = _react["default"].useState(-1),
    _React$useState44 = _slicedToArray(_React$useState43, 2),
    highlightedChatTimeout = _React$useState44[0],
    setHighlightedChatTimeout = _React$useState44[1];
  var _React$useState45 = _react["default"].useState(false),
    _React$useState46 = _slicedToArray(_React$useState45, 2),
    mobileStyleConfigs = _React$useState46[0],
    setMobileStyleConfigs = _React$useState46[1];
  var chatInputRef = _react["default"].useRef();
  var scrollChatRef = _react["default"].useRef();
  var scrollChatInnerRef = _react["default"].useRef();
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      var id = (0, _uuid.v4)();
      setComponentId(id);
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  _react["default"].useEffect(function () {
    if (props._LocalEventEmitter) {
      props._LocalEventEmitter.unsubscribe('receive_chat');
      props._LocalEventEmitter.subscribe('receive_chat', function (e) {
        if (e) {
          var chats = Object.entries(e);
          var _loop = function _loop() {
            if (chats[i][0] && chats[i][0] === currentChat && chats[i][1]) {
              console.log(chats[i][1], chatLog);
              var forceScroll = !chatLog || chatLog.length < 50;
              var offset = chatLog !== null && chatLog !== void 0 && chatLog.length ? chats[i][1].length - chatLog.length : 0;
              setTimeout(function () {
                if (checkScrollThreshold(offset) || forceScroll) {
                  (0, _utility.scrollChatDown)(scrollChatRef, !chatLog ? 'instant' : 'smooth');
                }
              }, 50);
              setChatLog(chats[i][1]);
              return 1; // break
            }
          };
          for (var i = 0; i < chats.length; i++) {
            if (_loop()) break;
          }
        }
      });
    }
  }, [props._LocalEventEmitter, props.chatConfig, currentChat, scrollChatRef.current, scrollChatInnerRef.current, chatLog]);
  _react["default"].useEffect(function () {
    if (props._LocalEventEmitter) {
      props._LocalEventEmitter.unsubscribe('receive_ban_table');
      props._LocalEventEmitter.subscribe('receive_ban_table', function (e) {
        console.log(e);
        if (e) {
          var chats = Object.entries(e);
          for (var i = 0; i < Object.entries(chats).length; i++) {
            var streamKey = "".concat(props.chatFor, "-chat-").concat(props.dborigin);
            if (chats[i][0] && chats[i][0] === streamKey) {
              var _chats$i$;
              console.log('Setting ban table', chats[i][1]);
              setCurrentBanTable((_chats$i$ = chats[i][1]) !== null && _chats$i$ !== void 0 ? _chats$i$ : {});
              break;
            }
          }
        }
      });
    }
  }, [props._LocalEventEmitter, props.chatFor, props.dborigin]);
  _react["default"].useEffect(function () {
    if (props._LocalEventEmitter) {
      props._LocalEventEmitter.unsubscribe('join_chat_waiting');
      props._LocalEventEmitter.subscribe('join_chat_waiting', function (e) {
        var useRoom = "".concat(props.chatFor, "-chat");
        attemptInitChat(useRoom);
      });
    }
  }, [fetchBusy, props._socket, props.dborigin, props._rooms, props.chatFor, props._loggedIn, props.dborigin, chatMaybeReady, lastChatInitialization, currentChat]);
  _react["default"].useEffect(function () {
    var _props$_loggedIn, _props$_loggedIn2;
    var goodStatus = ['live'];
    if (props !== null && props !== void 0 && props.videoStatus && props !== null && props !== void 0 && (_props$_loggedIn = props._loggedIn) !== null && _props$_loggedIn !== void 0 && _props$_loggedIn.identifier && props !== null && props !== void 0 && (_props$_loggedIn2 = props._loggedIn) !== null && _props$_loggedIn2 !== void 0 && _props$_loggedIn2.hash && props.chatFor && goodStatus.indexOf(props.videoStatus) > -1) {
      setChatMaybeReady(true); // Based on frontend data, it is possible that there is a valid chat and user is logged in
    } else {
      setChatMaybeReady(false);
    }
  }, [props._loggedIn, props.chatFor, props.videoStatus, chatMaybeReady]);
  var manageRecentChats = function manageRecentChats(newChat) {
    console.log('Manage Chats', newChat, recentChats);
    var temp = recentChats;
    if (newChat) {
      temp.push({
        chat: newChat,
        time: new Date().getTime()
      });
    }
    for (var i = 0; i < temp.length; i++) {
      if (temp[i].time < new Date().getTime() - RECENT_CHAT_THRESHOLD) {
        temp.splice(i, 1);
      }
    }
    setRecentChats(temp);
    setRecentChatsBlock(temp);
  };
  _react["default"].useEffect(function () {
    console.log(fetchBusy, props._rooms, props._socket, props.chatFor);
    var useRoom = "".concat(props.chatFor, "-chat");
    attemptInitChat(useRoom);
    handleSetCurrentChat();
    manageRecentChats();
  }, [fetchBusy, props._socket, props.dborigin, props._rooms, props.chatFor, props._loggedIn, props.dborigin, chatMaybeReady, lastChatInitialization, currentChat, manageRecentChats]);

  /**
   * Will attempt to join user to chat in manner that does not overwhelm server
   * @param {*} useRoom 
   */
  var attemptInitChat = function attemptInitChat(useRoom) {
    try {
      if (!currentChat || "".concat(props.chatFor, "-chat-").concat(props.dborigin) !== currentChat || !chatLog) {
        console.log(props._rooms.rooms.indexOf("".concat(useRoom, "-").concat(props.dborigin)), props._rooms, "".concat(useRoom, "-").concat(props.dborigin));
        if (!fetchBusy && props._rooms && chatMaybeReady && (!props._rooms.rooms || props._rooms.rooms.indexOf("".concat(useRoom, "-").concat(props.dborigin)) < 0 || !chatLog)) {
          if ((0, _util.isObjectEmpty)(lastChatInitialization) || lastChatInitialization.time < new Date().getTime() - CONNECT_THRESHOLD && lastChatInitialization.attempt < 5) {
            var _lastChatInitializati, _lastChatInitializati2;
            setFetchBusy(true);
            setTimeout(function () {
              setFetchBusy(false);
              setTimeout(function () {
                props._LocalEventEmitter.dispatch('join_chat_waiting', {});
              }, 500);
            }, ((_lastChatInitializati = lastChatInitialization.attempt) !== null && _lastChatInitializati !== void 0 ? _lastChatInitializati : 1) * CONNECT_THRESHOLD);
            (0, _socket.joinChat)(props._socket, props._loggedIn, props.dborigin, useRoom, (_lastChatInitializati2 = lastChatInitialization.attempt) !== null && _lastChatInitializati2 !== void 0 ? _lastChatInitializati2 : 1);
            setLastChatInitialization({
              time: new Date().getTime(),
              attempt: lastChatInitialization.attempt ? lastChatInitialization.attempt + 1 : 2
            });
          }
        }
      }
    } catch (err) {
      // fail silently
    }
  };
  var handleSetCurrentChat = function handleSetCurrentChat() {
    if (props.chatFor) {
      var _props$_rooms;
      var useRoom = "".concat(props.chatFor, "-chat");
      if (props.dborigin && (props === null || props === void 0 || (_props$_rooms = props._rooms) === null || _props$_rooms === void 0 || (_props$_rooms = _props$_rooms.rooms) === null || _props$_rooms === void 0 ? void 0 : _props$_rooms.indexOf("".concat(useRoom, "-").concat(props.dborigin))) > -1 && currentChat !== "".concat(useRoom, "-").concat(props.dborigin)) {
        setCurrentChat("".concat(useRoom, "-").concat(props.dborigin));
      }
    }
  };
  var handleSendChat = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var _chatInputRef$current;
      var _props$_loggedIn3, _props$_loggedIn4, _props$_loggedIn5, newChat, useRoom;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (chatInputRef !== null && chatInputRef !== void 0 && (_chatInputRef$current = chatInputRef.current) !== null && _chatInputRef$current !== void 0 && _chatInputRef$current.value && !blockChat) {
              newChat = chatInputRef.current.value;
              console.log('Chat To Send', newChat);
              // Do not update local chat due to nature of multi-participant chat
              if (props.chatFor && props._socket && props !== null && props !== void 0 && (_props$_loggedIn3 = props._loggedIn) !== null && _props$_loggedIn3 !== void 0 && _props$_loggedIn3.username && props !== null && props !== void 0 && (_props$_loggedIn4 = props._loggedIn) !== null && _props$_loggedIn4 !== void 0 && _props$_loggedIn4.identifier && props !== null && props !== void 0 && (_props$_loggedIn5 = props._loggedIn) !== null && _props$_loggedIn5 !== void 0 && _props$_loggedIn5.hash && props.dborigin) {
                useRoom = "".concat(props.chatFor, "-chat");
                manageRecentChats(newChat);
                (0, _socket.sendChat)(props._socket, props._loggedIn, props.dborigin, useRoom, newChat, replyToId, replyToUsername); // Send chat to server and server will immediately return newest chat
                setReplyToId(null);
                setReplyToUsername(null);
              }
              setBlockSend(true); // Prevent new chats for x seconds assuming newest chats will have returned by then to prevent user duplicate actions
              setLastAdhocTimeout(new Date().getTime());
              setTimeout(function () {
                setBlockSend(false);
                setTimeout(function () {
                  if (chatInputRef !== null && chatInputRef !== void 0 && chatInputRef.current) {
                    chatInputRef.current.select();
                  }
                }, 50);
              }, ADHOC_BLOCK_CHAT);
              setTimeout(function () {
                (0, _utility.scrollChatDown)(scrollChatRef, 'smooth'); // Scroll Chat Down
              }, 250);
              chatInputRef.current.value = ''; // Reset chat value
              chatInputRef.current.setAttribute('style', 'height: 1.35rem'); // Reset chat styles
            }
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleSendChat(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Checks if threshold for scrolling down is surpassed. Allow users to read all messages without issue. Calculates offset for large amount of incoming chats difference with current chat
   * @returns 
   */
  var checkScrollThreshold = function checkScrollThreshold() {
    var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    if (scrollChatRef !== null && scrollChatRef !== void 0 && scrollChatRef.current && scrollChatInnerRef !== null && scrollChatInnerRef !== void 0 && scrollChatInnerRef.current) {
      var _props$chatConfig$cha, _props$chatConfig;
      var chatItemHeight = (_props$chatConfig$cha = props === null || props === void 0 || (_props$chatConfig = props.chatConfig) === null || _props$chatConfig === void 0 ? void 0 : _props$chatConfig.chatItemHeight) !== null && _props$chatConfig$cha !== void 0 ? _props$chatConfig$cha : 17.5;
      var calcOffset = offset * chatItemHeight;
      console.log(scrollChatRef.current.scrollTop, scrollChatInnerRef.current.clientHeight - scrollChatRef.current.clientHeight, offset, calcOffset, scrollChatRef.current.scrollTop + calcOffset);
      var useChatHeight = scrollChatRef.current.clientHeight + 100;
      console.log(scrollChatRef.current.scrollTop + calcOffset, scrollChatInnerRef.current.clientHeight - useChatHeight);
      if (scrollChatRef.current.scrollTop + calcOffset > scrollChatInnerRef.current.clientHeight - useChatHeight) {
        return true;
      }
    }
    return false;
  };
  var setRecentChatsBlock = function setRecentChatsBlock(chats) {
    var useChats = chats !== null && chats !== void 0 ? chats : recentChats;
    if (useChats.length > MAX_RECENT_CHATS && !recentChatTimeout) {
      setBlockChat(true);
      setBlockSendForce(true);
      var r = setTimeout(function () {
        setBlockChat(false);
        setBlockSendForce(false);
        setRecentChatTimeout(null);
      }, RECENT_CHAT_TIMEOUT);
      if (recentChatTimeout !== null && recentChatTimeout !== void 0 && recentChatTimeout.r) {
        clearTimeout(recentChatTimeout.r);
      }
      setRecentChatTimeout({
        r: r,
        time: new Date().getTime() + RECENT_CHAT_TIMEOUT
      });
    }
  };
  var handleChatTextChange = function handleChatTextChange(e) {};
  _react["default"].useEffect(function () {
    var _props$watchData, _props$_loggedIn6;
    var temp = modPower;
    var change = false;
    if ((props === null || props === void 0 || (_props$watchData = props.watchData) === null || _props$watchData === void 0 ? void 0 : _props$watchData.author) === ((_props$_loggedIn6 = props._loggedIn) === null || _props$_loggedIn6 === void 0 ? void 0 : _props$_loggedIn6.identifier) && !modPower.canBan) {
      change = true;
      temp.canBan = true;
      if (!currentBanTable && lastBanTableCheck < new Date().getTime() - 10) {
        setLastBanTableCheck(new Date().getTime());
        var useRoom = "".concat(props.chatFor, "-chat");
        (0, _socket.requestBanTable)(props._socket, props._loggedIn, props.dborigin, useRoom);
      }
    }
    if (change) {
      setModPower(temp);
    }
  }, [props.watchData, props._loggedIn, modPower, currentBanTable, props.chatFor, props._socket, props.dborigin, lastBanTableCheck]);
  var handleSetUserDisplay = function handleSetUserDisplay(e) {
    var _e$target, _e$target2;
    if (e !== null && e !== void 0 && (_e$target = e.target) !== null && _e$target !== void 0 && _e$target.getAttribute('username') && e !== null && e !== void 0 && (_e$target2 = e.target) !== null && _e$target2 !== void 0 && _e$target2.getAttribute('author')) {
      var user = e.target.getAttribute('username');
      var userId = e.target.getAttribute('author');
      setUserDisplay({
        user: user,
        id: userId
      });
      if (checkScrollThreshold()) {
        (0, _utility.scrollChatDown)(scrollChatRef, 'instant'); // Scroll Chat Down
      }
    }
  };
  var handleSetUserDisplayOff = function handleSetUserDisplayOff(e) {
    setUserDisplay(null);
  };
  var handleAttemptBanUser = function handleAttemptBanUser(e) {
    var _e$target3;
    if (e !== null && e !== void 0 && (_e$target3 = e.target) !== null && _e$target3 !== void 0 && _e$target3.getAttribute('userid')) {
      var useRoom = "".concat(props.chatFor, "-chat");
      (0, _socket.attemptBanUserChat)(props._socket, props._loggedIn, props.dborigin, useRoom, e.target.getAttribute('userid'));
    }
  };
  var handleAttemptUnBanUser = function handleAttemptUnBanUser(e) {
    var _e$target4;
    if (e !== null && e !== void 0 && (_e$target4 = e.target) !== null && _e$target4 !== void 0 && _e$target4.getAttribute('userid')) {
      var useRoom = "".concat(props.chatFor, "-chat");
      (0, _socket.attemptBanUserChat)(props._socket, props._loggedIn, props.dborigin, useRoom, e.target.getAttribute('userid'), {
        unban: true
      });
    }
  };
  var handleReplyTo = function handleReplyTo(e) {
    var root = e !== null && e !== void 0 && e.target.getAttribute('logid') ? e.target : e.target.parentElement;
    root = e !== null && e !== void 0 && e.target.getAttribute('logid') ? e.target : e.target.parentElement;
    console.log(e);
    if (root.getAttribute('logid') && root.getAttribute('username') && root.getAttribute('author')) {
      var logid = root.getAttribute('logid');
      var username = root.getAttribute('username');
      var author = root.getAttribute('author');
      /* ALLOW USERS TO RESPOND TO THEMSELVES */
      if (logid && username && author) {
        setReplyToId(logid);
        setReplyToUsername(username);
        var found = chatLog.find(function (m) {
          return m.id === logid;
        });
        if (found !== null && found !== void 0 && found.content && found !== null && found !== void 0 && found.username) {
          var _found$replyLogid;
          var chatThread = [];
          chatThread.push({
            id: logid,
            username: found.username,
            content: found.content,
            replyLogid: (_found$replyLogid = found.replyLogid) !== null && _found$replyLogid !== void 0 ? _found$replyLogid : null
          });
          var _loop2 = function _loop2(i) {
            var _chatThread$i;
            if ((_chatThread$i = chatThread[i]) !== null && _chatThread$i !== void 0 && _chatThread$i.replyLogid) {
              var f = chatLog.find(function (m) {
                var _chatThread$i2;
                return m.id === ((_chatThread$i2 = chatThread[i]) === null || _chatThread$i2 === void 0 ? void 0 : _chatThread$i2.replyLogid);
              });
              if (f) {
                var _f$replyLogid;
                chatThread.push({
                  id: f.id,
                  username: f.username,
                  content: f.content,
                  replyLogid: (_f$replyLogid = f.replyLogid) !== null && _f$replyLogid !== void 0 ? _f$replyLogid : null
                });
              } else {
                return 1; // break
              }
            }
          };
          for (var i = 0; i < 3; i++) {
            if (_loop2(i)) break;
          }
          setReplyToContent(chatThread);
        }
      }
    }
  };
  var handleCancelReplyTo = function handleCancelReplyTo(e) {
    setReplyToId(null);
    setReplyToUsername(null);
  };
  var handleGoToPost = function handleGoToPost(e) {
    var root = e !== null && e !== void 0 && e.target.getAttribute('logid') ? e.target : e.target.parentElement;
    root = e !== null && e !== void 0 && e.target.getAttribute('logid') ? e.target : e.target.parentElement;
    console.log(root);
    if (root.getAttribute('logid')) {
      var logid = root.getAttribute('logid');
      var found = document.querySelector("div[logid='".concat(logid, "']"));
      console.log(found);
      if (found !== null && found !== void 0 && found.scrollIntoView) {
        setHighlightedChat(logid);
        if (highlightedChatTimeout > -1) {
          clearTimeout(highlightedChatTimeout);
        }
        var r = setTimeout(function () {
          setHighlightedChat(null);
        }, 10000);
        setHighlightedChatTimeout(r);
        found.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    }
  };
  var checkMobileStyling = function checkMobileStyling() {
    if (componentDidMount && props !== null && props !== void 0 && props._isMobile) {
      var _document, _document2;
      if (((_document = document) === null || _document === void 0 ? void 0 : _document.activeElement) === (chatInputRef === null || chatInputRef === void 0 ? void 0 : chatInputRef.current) && !mobileStyleConfigs) {
        setMobileStyleConfigs(true);
        if (window) {
          // Scroll upwards to ensure video and chat is in view
          setTimeout(function () {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }, 250);
        }
        if (props !== null && props !== void 0 && props.setMobileStyleConfigs) {
          props.setMobileStyleConfigs(true);
        }
      } else if ((!document || !document.activeElement || ((_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.activeElement) !== (chatInputRef === null || chatInputRef === void 0 ? void 0 : chatInputRef.current)) && mobileStyleConfigs) {
        setMobileStyleConfigs(false);
        if (props !== null && props !== void 0 && props.setMobileStyleConfigs) {
          props.setMobileStyleConfigs(false);
        }
      }
    }
  };
  var handleRunTasks = function handleRunTasks() {
    checkMobileStyling();
  };
  checkMobileStyling();
  var useThreadOffset = (_props$chatConfig$men = props === null || props === void 0 || (_props$chatConfig2 = props.chatConfig) === null || _props$chatConfig2 === void 0 ? void 0 : _props$chatConfig2.menuThreadOffset) !== null && _props$chatConfig$men !== void 0 ? _props$chatConfig$men : 2.85;
  var replyOff = props === null || props === void 0 || (_props$chatConfig3 = props.chatConfig) === null || _props$chatConfig3 === void 0 ? void 0 : _props$chatConfig3.replyOff;

  // Chat should have 1000 last chats

  console.log('Chat Log', chatLog, Array.isArray(chatLog), props.className, recentChats, props, userDisplay, currentBanTable, useThreadOffset, blockSend, blockChat);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className, " ").concat(_ChatModule["default"].chatContainer, " Chat_ChatContainer"),
    onClick: handleRunTasks
  }, userDisplay ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ChatModule["default"].userDisplayContainer, " Chat_UserDisplayContainer")
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Chat_UserDisplayInternalContainer",
    style: {
      display: 'flex',
      gap: '.25rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Chat_UserDisplayUser"
  }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/p?u=".concat(userDisplay.user),
    style: {
      alignSelf: 'center'
    }
  }, userDisplay.user)), modPower !== null && modPower !== void 0 && modPower.canBan && userDisplay.id !== props._loggedIn.identifier ? currentBanTable && currentBanTable[userDisplay.id] ? /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      fontSize: '.75rem',
      padding: '.125rem .25rem'
    },
    onClick: handleAttemptUnBanUser,
    userid: "".concat(userDisplay.id)
  }, "Unban User") : /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      fontSize: '.75rem',
      padding: '.125rem .25rem'
    },
    onClick: handleAttemptBanUser,
    userid: "".concat(userDisplay.id)
  }, "Ban User") : null)), /*#__PURE__*/_react["default"].createElement(_Close["default"], {
    className: "".concat(_ChatModule["default"].close),
    onClick: handleSetUserDisplayOff,
    modif: "close"
  })) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ChatModule["default"].chatLogExternalContainer, " ").concat(mobileStyleConfigs ? "".concat(_ChatModule["default"].mobileChatLogExternalContainer) : null, " Chat_ChatLogExternalContainer"),
    ref: scrollChatRef
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ChatModule["default"].chatLogContainer, " Chat_ChatLogContainer"),
    ref: scrollChatInnerRef
  }, chatLog && Array.isArray(chatLog) ? chatLog.map(function (m, i) {
    var _m$replyLogid;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "Chat_ChatLogItemContainer",
      key: i,
      index: i
    }, m.id && m.content && m.author ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "Chat_ChatLogItemInternalContainer",
      logid: m.id,
      time: m.time,
      author: m.author,
      replylogid: (_m$replyLogid = m.replyLogid) !== null && _m$replyLogid !== void 0 ? _m$replyLogid : null,
      replyusername: m.replyUsername
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_ChatModule["default"].chatLogMain, " ").concat(highlightedChat === m.id ? "".concat(_ChatModule["default"].highlightedChat) : '', " Chat_ChatLogMain")
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_ChatModule["default"].username, " ").concat(_ChatModule["default"].usernameChat, " Chat_ChatUsername"),
      username: m.username,
      author: m.author,
      onClick: handleSetUserDisplay
    }, m.username), replyOff ? null : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, m.replyLogid && m.replyUsername ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_ChatModule["default"].replyMeta)
    }, /*#__PURE__*/_react["default"].createElement("div", null, "Chat is Reply to ", /*#__PURE__*/_react["default"].createElement("b", null, "@", m.replyUsername))) : /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_ChatModule["default"].replyMeta)
    }, /*#__PURE__*/_react["default"].createElement("div", null, "Reply to ", /*#__PURE__*/_react["default"].createElement("b", null, "@", m.username)))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "Chat_Content"
    }, m.content), replyOff ? null : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, m.replyLogid ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_ChatModule["default"].viewReplyTo, " Chat_ViewReplyTo"),
      onClick: handleGoToPost,
      logid: m.replyLogid,
      style: {
        marginTop: '.25rem'
      }
    }, /*#__PURE__*/_react["default"].createElement(_ArrowUpward["default"], {
      logid: m.replyLogid
    })) : null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_ChatModule["default"].replyTo, " Chat_ReplyTo"),
      onClick: handleReplyTo,
      logid: m.id,
      username: m.username,
      author: m.author,
      style: {
        marginTop: '.25rem'
      }
    }, /*#__PURE__*/_react["default"].createElement(_Reply["default"], {
      logid: m.id,
      username: m.username,
      author: m.author
    }))))) : _React$Fragment || (_React$Fragment = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)));
  }) : _div || (_div = /*#__PURE__*/_react["default"].createElement("div", null)))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ChatModule["default"].chatInputContainer, " ").concat(!props.chatState ? "".concat(_ChatModule["default"].forceHideChat) : null, " Chat_ChatInputContainer")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ChatModule["default"].chatInputInternalContainer, " Chat_ChatInputInternalContainer")
  }, recentChatTimeout ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ChatModule["default"].chatWarningContainer, " Chat_ChatWarningContainer")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ChatModule["default"].warningText, " Chat_WarningText")
  }, recentChatTimeout ? 'Timed Out' : ''), recentChats !== null && recentChats !== void 0 && recentChats.length ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ChatModule["default"].warningBody),
    style: {
      fontSize: '.85rem'
    }
  }, "You have sent ", recentChats.length, " recent chats") : null) : null, replyToId && replyToUsername ? /*#__PURE__*/_react["default"].createElement("div", null, replyToContent && Array.isArray(replyToContent) && replyToContent.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ChatModule["default"].replyToRepliesContainer, " Chat_ReplyToRepliesContainer"),
    style: {
      top: "-".concat(replyToContent.length > 4 ? 4 + useThreadOffset : replyToContent.length + useThreadOffset, "rem")
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ChatModule["default"].threadLabel, " Chat_ThreadLabel")
  }, "Thread"), replyToContent.slice(0).reverse().map(function (m, i) {
    var _m$username, _m$content;
    return i < 4 ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_ChatModule["default"].replyToRepliesThread, " Chat_ReplyToRepliesThread"),
      style: {
        display: 'flex',
        gap: '.25rem'
      },
      key: i,
      index: i
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "Chat_ReplyToRepliesUsername"
    }, /*#__PURE__*/_react["default"].createElement("b", null, (_m$username = m.username) !== null && _m$username !== void 0 ? _m$username : '')), /*#__PURE__*/_react["default"].createElement("div", {
      className: "Chat_ReplyToRepliesContent"
    }, (_m$content = m.content) !== null && _m$content !== void 0 ? _m$content : '')) : null;
  })) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ChatModule["default"].replyToContainer, " Chat_ReplyToContainer"),
    replytoid: replyToId
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Chat_ReplyingToUsername"
  }, "Replying to ", /*#__PURE__*/_react["default"].createElement("b", null, "@", replyToUsername)), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Cancel Reply",
    placement: "top"
  }, /*#__PURE__*/_react["default"].createElement(_Close["default"], {
    onClick: handleCancelReplyTo,
    className: "".concat(_ChatModule["default"].chatCancelReplyTo),
    sx: {
      height: '17.5px'
    }
  })))) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ChatModule["default"].chatInputSendContainer, " Chat_ChatInputSendContainer")
  }, /*#__PURE__*/_react["default"].createElement(_reactTextareaAutosize["default"], {
    className: "".concat(_ChatModule["default"].textChatInput, " ").concat(_ChatModule["default"].highlightBorder, " Chat_TextChatInput"),
    ref: chatInputRef,
    onKeyPress: function onKeyPress(e) {
      (0, _utility.handleKeyPressChat)(e, handleSendChat);
    },
    onChange: handleChatTextChange,
    disabled: blockChat || !currentChat
  }), /*#__PURE__*/_react["default"].createElement("button", {
    className: "".concat(_ChatModule["default"].send, " ").concat(_ChatModule["default"].highlightBorder, " Chat_Send"),
    onClick: handleSendChat,
    disabled: blockSend || blockSendForce
  }, "Send")))));
};
var _default = exports["default"] = Module;