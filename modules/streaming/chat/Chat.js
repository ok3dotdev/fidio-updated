"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CONNECT_THRESHOLD = 12500;
var ADHOC_BLOCK_CHAT = 2000;
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
  var _React$useState19 = _react["default"].useState(-1),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    lastAdhocTimeout = _React$useState20[0],
    setLastAdhocTimeout = _React$useState20[1];
  var _React$useState21 = _react["default"].useState([]),
    _React$useState22 = _slicedToArray(_React$useState21, 2),
    recentChats = _React$useState22[0],
    setRecentChats = _React$useState22[1];
  var _React$useState23 = _react["default"].useState(null),
    _React$useState24 = _slicedToArray(_React$useState23, 2),
    recentChatTimeout = _React$useState24[0],
    setRecentChatTimeout = _React$useState24[1];
  var _React$useState25 = _react["default"].useState({}),
    _React$useState26 = _slicedToArray(_React$useState25, 2),
    modPower = _React$useState26[0],
    setModPower = _React$useState26[1];
  var _React$useState27 = _react["default"].useState(null),
    _React$useState28 = _slicedToArray(_React$useState27, 2),
    userDisplay = _React$useState28[0],
    setUserDisplay = _React$useState28[1];
  var _React$useState29 = _react["default"].useState(null),
    _React$useState30 = _slicedToArray(_React$useState29, 2),
    currentBanTable = _React$useState30[0],
    setCurrentBanTable = _React$useState30[1];
  var _React$useState31 = _react["default"].useState(-1),
    _React$useState32 = _slicedToArray(_React$useState31, 2),
    lastBanTableCheck = _React$useState32[0],
    setLastBanTableCheck = _React$useState32[1];
  var _React$useState33 = _react["default"].useState(null),
    _React$useState34 = _slicedToArray(_React$useState33, 2),
    replyToId = _React$useState34[0],
    setReplyToId = _React$useState34[1];
  var _React$useState35 = _react["default"].useState(null),
    _React$useState36 = _slicedToArray(_React$useState35, 2),
    replyToUsername = _React$useState36[0],
    setReplyToUsername = _React$useState36[1];
  var _React$useState37 = _react["default"].useState([]),
    _React$useState38 = _slicedToArray(_React$useState37, 2),
    replyToContent = _React$useState38[0],
    setReplyToContent = _React$useState38[1];
  var _React$useState39 = _react["default"].useState(null),
    _React$useState40 = _slicedToArray(_React$useState39, 2),
    highlightedChat = _React$useState40[0],
    setHighlightedChat = _React$useState40[1];
  var _React$useState41 = _react["default"].useState(-1),
    _React$useState42 = _slicedToArray(_React$useState41, 2),
    highlightedChatTimeout = _React$useState42[0],
    setHighlightedChatTimeout = _React$useState42[1];
  var _React$useState43 = _react["default"].useState(false),
    _React$useState44 = _slicedToArray(_React$useState43, 2),
    mobileStyleConfigs = _React$useState44[0],
    setMobileStyleConfigs = _React$useState44[1];
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
              return "break";
            }
          };
          for (var i = 0; i < chats.length; i++) {
            var _ret = _loop();
            if (_ret === "break") break;
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
    console.log(fetchBusy, props._rooms, props._socket);
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
      var _props$_rooms, _props$_rooms$rooms;
      var useRoom = "".concat(props.chatFor, "-chat");
      if (props.dborigin && (props === null || props === void 0 ? void 0 : (_props$_rooms = props._rooms) === null || _props$_rooms === void 0 ? void 0 : (_props$_rooms$rooms = _props$_rooms.rooms) === null || _props$_rooms$rooms === void 0 ? void 0 : _props$_rooms$rooms.indexOf("".concat(useRoom, "-").concat(props.dborigin))) > -1 && currentChat !== "".concat(useRoom, "-").concat(props.dborigin)) {
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
    return function handleSendChat(_x2) {
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
      var chatItemHeight = (_props$chatConfig$cha = props === null || props === void 0 ? void 0 : (_props$chatConfig = props.chatConfig) === null || _props$chatConfig === void 0 ? void 0 : _props$chatConfig.chatItemHeight) !== null && _props$chatConfig$cha !== void 0 ? _props$chatConfig$cha : 17.5;
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
      setBlockSend(true);
      var r = setTimeout(function () {
        setBlockChat(false);
        setBlockSend(false);
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
    if ((props === null || props === void 0 ? void 0 : (_props$watchData = props.watchData) === null || _props$watchData === void 0 ? void 0 : _props$watchData.author) === ((_props$_loggedIn6 = props._loggedIn) === null || _props$_loggedIn6 === void 0 ? void 0 : _props$_loggedIn6.identifier) && !modPower.canBan) {
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
                return "break";
              }
            }
          };
          for (var i = 0; i < 3; i++) {
            var _ret2 = _loop2(i);
            if (_ret2 === "break") break;
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
    if (componentDidMount && props._isMobile) {
      var _document, _document2;
      if (((_document = document) === null || _document === void 0 ? void 0 : _document.activeElement) === (chatInputRef === null || chatInputRef === void 0 ? void 0 : chatInputRef.current) && !mobileStyleConfigs) {
        setMobileStyleConfigs(true);
        if (window) {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
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
  var useThreadOffset = (_props$chatConfig$men = props === null || props === void 0 ? void 0 : (_props$chatConfig2 = props.chatConfig) === null || _props$chatConfig2 === void 0 ? void 0 : _props$chatConfig2.menuThreadOffset) !== null && _props$chatConfig$men !== void 0 ? _props$chatConfig$men : 2.85;
  var replyOff = props === null || props === void 0 ? void 0 : (_props$chatConfig3 = props.chatConfig) === null || _props$chatConfig3 === void 0 ? void 0 : _props$chatConfig3.replyOff;

  // Chat should have 1000 last chats

  console.log('Chat Log', chatLog, Array.isArray(chatLog), props.className, recentChats, props, userDisplay, currentBanTable, useThreadOffset);
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
  }, chatLog && Array.isArray(chatLog) ? chatLog.map(function (m) {
    var _m$replyLogid;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "Chat_ChatLogItemContainer"
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
    }))))) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null));
  }) : /*#__PURE__*/_react["default"].createElement("div", null))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ChatModule["default"].chatInputContainer, " Chat_ChatInputContainer")
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
      }
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
    disabled: blockSend
  }, "Send")))));
};
var _default = Module;
exports["default"] = _default;