"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
    className: "".concat(_WatchPageModule["default"].chatContainer, " ").concat(chatState ? "".concat(_WatchPageModule["default"].chatOpen) : "".concat(_WatchPageModule["default"].chatClosed), " ").concat(!chatState && props !== null && props !== void 0 && props._isMobile ? "".concat(_WatchPageModule["default"].chatClosedMobile) : null, " WatchPage_ChatContainer")
  }, /*#__PURE__*/_react["default"].createElement(_chat.Chat, _extends({}, props, {
    setMobileStyleConfigs: handleSetMobileStyleConfigs,
    chatFor: props === null || props === void 0 || (_props$watchData = props.watchData) === null || _props$watchData === void 0 ? void 0 : _props$watchData.id,
    videoStatus: props === null || props === void 0 || (_props$watchData2 = props.watchData) === null || _props$watchData2 === void 0 ? void 0 : _props$watchData2.status,
    chatState: chatState
  }))))));
};
var _default = exports["default"] = Module;