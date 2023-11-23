"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _video = _interopRequireDefault(require("video.js"));
var _WatchPageModule = _interopRequireDefault(require("./WatchPage.module.scss"));
var _onboarding = require("../../utility/onboarding");
var _streaming = require("../../utility/streaming");
var _utility = require("../../video/player/utility");
var _uuid = require("uuid");
var _util = require("../../util");
var _chat = require("../chat");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var defaultPoster = 'img/internal/videoposter.png';
var Module = function Module(props) {
  var _props$watchData, _props$watchData2;
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
  var _React$useState7 = _react["default"].useState({
      action: 'page_loaded',
      trying: 'play_video',
      src: ''
    }),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    intent = _React$useState8[0],
    setIntent = _React$useState8[1];
  var _React$useState9 = _react["default"].useState(false),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    authorized = _React$useState10[0],
    setAuthorized = _React$useState10[1];
  var _React$useState11 = _react["default"].useState({}),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    authRequirement = _React$useState12[0],
    setAuthRequirement = _React$useState12[1];
  var _React$useState13 = _react["default"].useState({}),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    streamLeadPrompt = _React$useState14[0],
    setStreamLeadPrompt = _React$useState14[1];
  var _React$useState15 = _react["default"].useState(null),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    password = _React$useState16[0],
    setPassword = _React$useState16[1];
  var _React$useState17 = _react["default"].useState({}),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    relevantTicket = _React$useState18[0],
    setRelevantTicket = _React$useState18[1];
  var _React$useState19 = _react["default"].useState(defaultPoster),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    currentPoster = _React$useState20[0],
    setCurrentPoster = _React$useState20[1];
  var _React$useState21 = _react["default"].useState(true),
    _React$useState22 = _slicedToArray(_React$useState21, 2),
    chatState = _React$useState22[0],
    setChatState = _React$useState22[1];
  var _React$useState23 = _react["default"].useState(false),
    _React$useState24 = _slicedToArray(_React$useState23, 2),
    mobileStyleConfigs = _React$useState24[0],
    setMobileStyleConfigs = _React$useState24[1];
  var videoPlayer = _react["default"].useRef();
  var videoContainer = _react["default"].useRef();
  var videoComponent = _react["default"].useRef();
  var controlsContainer = _react["default"].useRef();
  var authContainer = _react["default"].useRef();
  var checkAuthThreshold = 2500;
  if (componentId) {
    props._LocalEventEmitter.unsubscribe(componentId);
    props._LocalEventEmitter.subscribe(componentId, function (d) {
      if (d && d.dispatch) {
        if (d.dispatch === 'updateAuth') {
          if (!authorized && authContainer.current) {
            var prompt = {
              type: 'auth',
              lead: 'Not Authorized',
              description: 'You have not been authorized to watch the stream'
            };
            console.log('auth req', authRequirement);
            if (authRequirement) {
              if (authRequirement.password) {
                prompt.password = 'The stream requires a password';
              }
              if (authRequirement.tags && authRequirement.dates && (authRequirement.tags.length > 0 || authRequirement.dates.length > 0)) {
                prompt.tags = "The stream has tags that authorize viewership of the stream. Please purchase tickets from the users shop to watch";
                prompt.tagsList = "".concat(authRequirement.tags.map(function (m) {
                  return m;
                }), " ").concat(authRequirement.dates.map(function (m) {
                  return m;
                }));
              }
            }
            setStreamLeadPrompt(prompt);
          }
        }
      }
    });
  }
  _react["default"].useEffect(function () {
    if (props !== null && props !== void 0 && props._LocalEventEmitter) {
      props._LocalEventEmitter.unsubscribe('video_set_chat_state');
      props._LocalEventEmitter.subscribe('video_set_chat_state', function (e) {
        console.log('Open', chatState);
        setChatState(chatState ? false : true);
      });
    }
  }, [props._LocalEventEmitter, chatState]);
  _react["default"].useEffect(function () {
    var fn = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (fetchBusy) {
                _context.next = 9;
                break;
              }
              if (!(props.watchData && props.watchData.id)) {
                _context.next = 9;
                break;
              }
              if (!(!relevantTicket.stream || relevantTicket.stream && relevantTicket.stream !== props.watchData.id)) {
                _context.next = 9;
                break;
              }
              setFetchBusy(true);
              // Make request for relevant ticket of all users purchases for this stream to get auth
              _context.next = 6;
              return (0, _streaming.doFetchAuthForStream)(props.apiUrl, props.domainKey, props.watchData.id, _onboarding.checkSignedIn);
            case 6:
              data = _context.sent;
              console.log('do fetch auth', data);
              if (data) {
                setRelevantTicket({
                  stream: props.watchData.id,
                  allowed: data.allowed ? data.allowed : false,
                  meta: data.meta
                });
              }
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function fn() {
        return _ref.apply(this, arguments);
      };
    }();
    fn();
  }, [props.watchData, relevantTicket, fetchBusy]);
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      setComponentDidMount(new Date().getTime());
      var id = (0, _uuid.v4)();
      setComponentId(id);
      setTimeout(function () {
        props._LocalEventEmitter.dispatch(id, {
          dispatch: 'updateAuth'
        });
      }, checkAuthThreshold);
      var options = {};
      if (props.cdn && props.watchData) {
        initializePlayer(options);
      }
    }
  }, [componentDidMount, videoPlayer.current, intent, props.cdn, props.watchData]);
  _react["default"].useEffect(function () {
    if (props.cdn && props.watchData) {
      console.log(props);
      var options = {};
      initializePlayer(options);
    }
  }, [videoPlayer.current, intent, props.cdn, props.watchData]);
  var initializePlayer = function initializePlayer(options) {
    if (!videoPlayer.current) {
      var players = _video["default"].players;
      if (players && Object.keys(players).length) {
        if (players['my-player']) {
          players['my-player'].dispose();
        }
      }
      videoPlayer.current = (0, _video["default"])('my-player', options, /*#__PURE__*/function () {
        var _onPlayerReady = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          var chatButton, chatButtonDom, dispatchSetVideoSetChatState, src, temp;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _video["default"].log('Your player is ready!');
                console.log(videoPlayer.current);
                // Add Chat Button
                chatButton = videoPlayer.current.controlBar.addChild('button');
                chatButtonDom = chatButton.el();
                chatButtonDom.innerHTML = 'chat';
                chatButton.addClass('chat material-icons chat-button');
                console.log(chatButton, chatButtonDom);
                dispatchSetVideoSetChatState = function dispatchSetVideoSetChatState() {
                  props._LocalEventEmitter.dispatch('video_set_chat_state', {});
                };
                chatButtonDom.removeEventListener('click', dispatchSetVideoSetChatState);
                chatButtonDom.addEventListener('click', dispatchSetVideoSetChatState);

                // In this context, `this` is the player that was created by Video.js.
                console.log(intent, props);
                if (intent.trying === 'play_video' && props.watchData) {
                  if (props.watchData.__typename == "Live") {
                    if (props.watchData.id && props.cdn && props.cdn.live) {
                      // const src = `${props.cdn.live}/${props.dborigin}_live${props.dev ? '_dev' : ''}${props.devLocal ? '_local' : ''}/${props.watchData.id}/index.m3u8`

                      if (props.watchData.meta && props.watchData.meta.channel && props.watchData.meta.channel.playbackUrl) {
                        temp = _objectSpread({}, intent);
                        src = props.watchData.meta.channel.playbackUrl;
                        temp.src = src;
                        setIntent(temp);
                        (0, _util.handleInteractMedia)(props, props.watchData, intent.trying);
                      }
                    }
                  }
                }
                this.on('error', function (e) {
                  console.log(e);
                });

                // How about an event listener?
                this.on('ended', function () {
                  _video["default"].log('Awww...over so soon?!');
                  this.dispose();
                });
                if (intent.src) {
                  (0, _utility.ensureAutoPlay)(this.play(), this);
                }
              case 15:
              case "end":
                return _context2.stop();
            }
          }, _callee2, this);
        }));
        function onPlayerReady() {
          return _onPlayerReady.apply(this, arguments);
        }
        return onPlayerReady;
      }());
    }
  };
  var resetAuthPrompt = function resetAuthPrompt() {
    if (streamLeadPrompt && streamLeadPrompt.type && streamLeadPrompt.type === 'prompt') {
      setStreamLeadPrompt({});
    }
  };
  var checkAuthorization = function checkAuthorization(video) {
    if (video && video.meta && video.meta.streamSettings) {
      var settings = video.meta.streamSettings;
      console.log('Settings', settings);
      if (settings["private"]) {
        // Stream is private. Check for auth. Private requires login
        if (props._loggedIn && props._loggedIn.identifier && video.author == props._loggedIn.identifier) {
          resetAuthPrompt();
          return true;
        } else if (relevantTicket && relevantTicket.allowed) {
          console.log('relevant ticket', relevantTicket);
          resetAuthPrompt();
          return true;
        } else {
          return false;
        }
      }
    }
    resetAuthPrompt();
    return true;
  };
  _react["default"].useEffect(function () {
    if (props.watchData && props.watchData.__typename == 'Live' && props.watchData.id && videoPlayer.current && videoPlayer.current.paused()) {
      // const src = `${props.cdn.live}/${props.dborigin}_live${props.dev ? '_dev' : ''}${props.devLocal ? '_local' : ''}/${props.watchData.id}/index.m3u8`
      console.log('source', props.watchData);
      var src;
      if (props.watchData.meta && props.watchData.meta.channel && props.watchData.meta.channel.playbackUrl) {
        if (intent.src !== props.watchData.meta.channel.playbackUrl) {
          var temp = _objectSpread({}, intent);
          src = props.watchData.meta.channel.playbackUrl;
          temp.src = src;
          setIntent(temp);
          (0, _utility.ensureAutoPlay)(videoPlayer.current.play(), videoPlayer.current);
          (0, _util.handleInteractMedia)(props, props.watchData, intent.trying);
        }
      }
    }
  }, [props.watchData, videoPlayer.current, intent]);
  _react["default"].useEffect(function () {
    if (props.watchData) {
      var auth = checkAuthorization(props.watchData);
      if (props.watchData.meta && props.watchData.meta.streamSettings) {
        setAuthRequirement(props.watchData.meta.streamSettings);
      }
      if (authorized !== auth && props.watchData && props.watchData.meta && props.watchData.meta.channel && props.watchData.meta.channel.playbackUrl && intent && intent.src === props.watchData.meta.channel.playbackUrl) {
        setAuthorized(auth);
        if (auth) {
          videoPlayer.current.src({
            src: intent.src,
            type: 'application/x-mpegURL'
          });
        }
      }
    }
  }, [intent, authorized, props.watchData, videoPlayer.current, relevantTicket]);
  var handleSetMobileStyleConfigs = function handleSetMobileStyleConfigs(status) {
    console.log(status, mobileStyleConfigs);
    if (mobileStyleConfigs !== status) {
      setMobileStyleConfigs(status);
    }
  };

  // Check if watching user is owner -> give admin access
  // Smoothly display livestream
  // Play livestream without audio if no interaction/no audio access
  // Play livestream with audio if available

  // Title, Description, Tags, Author, Author Icon, Click to go to auhor profile

  // TODO:
  // Subscribe, Purchase Ticket, Donate

  console.log(props, chatState);
  var menuHeight = props.menuConfig && props.menuConfig.height ? props.menuConfig.height + 2 + 'px' : '35px'; // Handles user menuConfig height for height of video page

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className, " WatchPage_Container")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_WatchPageModule["default"].videoQuadrant, " WatchPage_VideoQuadrant"),
    style: {
      height: "calc(100vh - ".concat(menuHeight, ")")
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_WatchPageModule["default"].streamLeadPrompt, " ").concat(!(0, _util.isObjectEmpty)(streamLeadPrompt) ? _WatchPageModule["default"].streamLeadPrompt_Visible : '', " WatchPage_StreamLeadPrompt"),
    ref: authContainer
  }, streamLeadPrompt ? /*#__PURE__*/_react["default"].createElement("div", null, streamLeadPrompt.lead ? /*#__PURE__*/_react["default"].createElement("div", null, streamLeadPrompt.lead) : null, streamLeadPrompt.description ? /*#__PURE__*/_react["default"].createElement("div", null, streamLeadPrompt.description) : null, streamLeadPrompt.password ? /*#__PURE__*/_react["default"].createElement("div", null, streamLeadPrompt.password) : null, streamLeadPrompt.tags ? /*#__PURE__*/_react["default"].createElement("div", null, streamLeadPrompt.tags) : null, streamLeadPrompt.tagsList ? /*#__PURE__*/_react["default"].createElement("div", null, streamLeadPrompt.tagsList) : null) : null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_WatchPageModule["default"].videoExternalContainer, " WatchPage_VideoExternalContainer")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_WatchPageModule["default"].videoContainer, " ").concat(mobileStyleConfigs ? "".concat(_WatchPageModule["default"].mobileVideoPlayer) : null, " WatchPage_VideoContainer")
  }, /*#__PURE__*/_react["default"].createElement("video", {
    id: "my-player",
    "class": "".concat(_WatchPageModule["default"].videoPlayer, " video-js WatchPage_VideoPlayer"),
    style: {
      maxHeight: "calc(100vh - ".concat(menuHeight)
    },
    controls: true,
    preload: "auto",
    playsInline: true,
    poster: currentPoster
  }, /*#__PURE__*/_react["default"].createElement("p", {
    "class": "vjs-no-js"
  }, "To view this video please enable JavaScript, and consider upgrading to a web browser that", /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://videojs.com/html5-video-support/",
    target: "_blank"
  }, "supports HTML5 video")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_WatchPageModule["default"].chatContainer, " ").concat(chatState ? "".concat(_WatchPageModule["default"].chatOpen) : "".concat(_WatchPageModule["default"].chatClosed), " WatchPage_ChatContainer")
  }, /*#__PURE__*/_react["default"].createElement(_chat.Chat, _extends({}, props, {
    setMobileStyleConfigs: handleSetMobileStyleConfigs,
    chatFor: props === null || props === void 0 ? void 0 : (_props$watchData = props.watchData) === null || _props$watchData === void 0 ? void 0 : _props$watchData.id,
    videoStatus: props === null || props === void 0 ? void 0 : (_props$watchData2 = props.watchData) === null || _props$watchData2 === void 0 ? void 0 : _props$watchData2.status
  }))))));
};
var _default = Module;
exports["default"] = _default;