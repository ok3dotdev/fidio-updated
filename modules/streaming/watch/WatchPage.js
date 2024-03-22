"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _script = _interopRequireDefault(require("next/script"));
var _WatchPageModule = _interopRequireDefault(require("./WatchPage.module.scss"));
var _onboarding = require("../../utility/onboarding");
var _streaming = require("../../utility/streaming");
var _utility = require("../../video/player/utility");
var _uuid = require("uuid");
var _util = require("../../util");
var _layout = require("/layout");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var defaultPoster = 'img/internal/videoposter.png';
var Module = function Module(props) {
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(null),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    componentId = _React$useState4[0],
    setComponentId = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(false),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    fetchBusy = _React$useState6[0],
    setFetchBusy = _React$useState6[1];
  var _React$useState7 = _react["default"].useState({
      action: 'page_loaded',
      trying: 'play_video',
      src: ''
    }),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    intent = _React$useState8[0],
    setIntent = _React$useState8[1];
  var _React$useState9 = _react["default"].useState(false),
    _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
    authorized = _React$useState10[0],
    setAuthorized = _React$useState10[1];
  var _React$useState11 = _react["default"].useState({}),
    _React$useState12 = (0, _slicedToArray2["default"])(_React$useState11, 2),
    authRequirement = _React$useState12[0],
    setAuthRequirement = _React$useState12[1];
  var _React$useState13 = _react["default"].useState({}),
    _React$useState14 = (0, _slicedToArray2["default"])(_React$useState13, 2),
    streamLeadPrompt = _React$useState14[0],
    setStreamLeadPrompt = _React$useState14[1];
  var _React$useState15 = _react["default"].useState(null),
    _React$useState16 = (0, _slicedToArray2["default"])(_React$useState15, 2),
    password = _React$useState16[0],
    setPassword = _React$useState16[1];
  var _React$useState17 = _react["default"].useState({}),
    _React$useState18 = (0, _slicedToArray2["default"])(_React$useState17, 2),
    relevantTicket = _React$useState18[0],
    setRelevantTicket = _React$useState18[1];
  var _React$useState19 = _react["default"].useState(defaultPoster),
    _React$useState20 = (0, _slicedToArray2["default"])(_React$useState19, 2),
    currentPoster = _React$useState20[0],
    setCurrentPoster = _React$useState20[1];
  var _React$useState21 = _react["default"].useState(true),
    _React$useState22 = (0, _slicedToArray2["default"])(_React$useState21, 2),
    chatState = _React$useState22[0],
    setChatState = _React$useState22[1];
  var _React$useState23 = _react["default"].useState(false),
    _React$useState24 = (0, _slicedToArray2["default"])(_React$useState23, 2),
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
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var data;
        return _regenerator["default"].wrap(function _callee$(_context) {
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
    if (!componentDidMount && window.videojs) {
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
    if (!videoPlayer.current && window.videojs) {
      var players = window.videojs.players;
      if (players && Object.keys(players).length) {
        if (players['my-player']) {
          players['my-player'].dispose();
        }
      }
      videoPlayer.current = window.videojs('my-player', options, /*#__PURE__*/function () {
        var _onPlayerReady = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
          var chatButton, chatButtonDom, dispatchSetVideoSetChatState, src, temp;
          return _regenerator["default"].wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                window.videojs.log('Your player is ready!');
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
                  window.videojs.log('Awww...over so soon?!');
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
  }, /*#__PURE__*/_react["default"].createElement(_script["default"], {
    src: "https://d2zsu4v7czjhvo.cloudfront.net/all/videojs/8.9.0/video.min.js"
  }), /*#__PURE__*/_react["default"].createElement(_layout.Watch, (0, _extends2["default"])({}, props, {
    chatState: chatState,
    handleSetMobileStyleConfigs: handleSetMobileStyleConfigs,
    menuHeight: menuHeight,
    currentPoster: currentPoster,
    streamLeadPrompt: streamLeadPrompt,
    authContainer: authContainer,
    WatchPageStyles: _WatchPageModule["default"]
  })));
};
var _default = exports["default"] = Module;