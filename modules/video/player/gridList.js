"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _util = require("../../util.js");
var _gridListModule = _interopRequireDefault(require("./gridList.module.scss"));
var _videoItem = _interopRequireDefault(require("./videoItem.js"));
var GridList = function GridList(props) {
  var isMounted = _react["default"].useRef(false);
  var _React$useState = _react["default"].useState(-1),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    activeItem = _React$useState2[0],
    setActiveItem = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(null),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    activeItemData = _React$useState4[0],
    setActiveItemData = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(null),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    previousActiveItemData = _React$useState6[0],
    setPreviousActiveItemData = _React$useState6[1];
  var ACTIVE_ITEM_DELAY = 1000;
  _react["default"].useEffect(function () {
    if (!isMounted.current && props.cdn) {
      isMounted.current = true;
    }
    return function () {};
  }, [props.cdn]);
  var delayedSetActiveItem = _react["default"].useCallback((0, _util.debounce)(function (e, i, d, p) {
    return handleSetActiveItem(e, i, d, p);
  }, ACTIVE_ITEM_DELAY), []); // Debounce activation of highlighted list item after mouseover
  var handleSetActiveItem = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(e, i, d, p) {
      var gc, mvc, allowPlayback, r;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setActiveItemData(d);
            gc = getGhostContainerOfIndex(i, 'ghostVideoItem');
            if (!(gc && moveableVideoComponent && moveableVideoComponent.current && d && videoComponent && videoComponent.current)) {
              _context.next = 19;
              break;
            }
            gc.appendChild(moveableVideoComponent.current);
            mvc = document && document.getElementsByClassName('moveableVideoContainer') && document.getElementsByClassName('moveableVideoContainer')[0] ? document.getElementsByClassName('moveableVideoContainer')[0] : null;
            if (!mvc) {
              _context.next = 19;
              break;
            }
            mvc.style.display = "block";
            if (p != d) {
              videoContainer.current.style.transition = 0 + "ms";
              mvc.style.opacity = "0";
            }
            setPreviousActiveItemData(d);
            videoContainer.current.style.transition = 200 + "ms";
            setTimeout(function () {
              setActiveItem(i); // Sets active grid item for highlight and playback
              mvc.style.opacity = "1";
            }, 750);
            allowPlayback = checkAllowedPlayback(d);
            if (allowPlayback) {
              _context.next = 15;
              break;
            }
            return _context.abrupt("return");
          case 15:
            _context.next = 17;
            return videoPlayer.current.loadMedia(d, cdnData.videoCdn, "/video/", true, true);
          case 17:
            r = _context.sent;
            // Get config: videoPlayer.current.player.getConfiguration()
            videoComponent.current.play();
          case 19:
            _context.next = 23;
            break;
          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](0);
          case 23:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 21]]);
    }));
    return function handleSetActiveItem(_x, _x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }();

  // transition in opacity slowly during playback
  // stop, freeze, disappear on mouseout

  /**
   * Initialize moveable Video Component
   * @param {*} cdn 
   */
  var initializeVideoPlayer = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(cdn) {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            videoPlayer.current = new VideoPlayer();
            videoPlayer.current.initPlayer(videoComponent.current).then( /*#__PURE__*/function () {
              var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(data) {
                return _regenerator["default"].wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      if (videoComponent && videoPlayer && videoPlayer.current) {
                        videoPlayer.current.cdn = cdn;
                        //let a = await videoPlayer.current.player.configure('abr.defaultBandwidthEstimate', 1);
                        // const uiConfig = {};
                        // uiConfig['controlPanelElements'] = ['time_and_duration', 'spacer'];
                        // const ui = new videoPlayer.current.shaka.ui.Overlay(videoPlayer.current.player, videoContainer.current, videoComponent.current);
                        // ui.configure(uiConfig);
                        // ui.getControls();
                        // let r = await videoPlayer.current.loadMedia({
                        //     mpd: '847f6af4d6454924ae606335143bfc74-mpd.mpd',
                        //     hls: "847f6af4d6454924ae606335143bfc74-hls.m3u8"
                        // }, cdnData.videoCdn, "/video/");
                        // videoComponent.current.play();
                        moveableVideoComponent.current = videoContainer.current;
                        videoContainer.current.style.opacity = "0";
                        videoContainer.current.remove();
                      }
                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2);
              }));
              return function (_x6) {
                return _ref3.apply(this, arguments);
              };
            }());
          case 2:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function initializeVideoPlayer(_x5) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_gridListModule["default"].leadContainer)
  }, props._gridItems && props._gridItems.map ? props._gridListType == 'video' ? props._gridItems.map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_gridListModule["default"].col),
      key: i
    }, /*#__PURE__*/_react["default"].createElement(_videoItem["default"], (0, _extends2["default"])({
      item: item,
      index: i,
      setActive: function setActive(e, i, d, p) {
        delayedSetActiveItem(e, i, d, p);
      },
      unsetActiveItem: function unsetActiveItem(i) {
        // setActiveItem(-1);
        setActiveItemData(null);
      },
      activeItem: activeItem,
      previousActiveItemData: previousActiveItemData,
      allowEditingFlag: (0, _util.detectAllowEditingFlag)(item, props._loggedIn)
    }, props)));
  }) : props._gridListType == 'product' ? props._gridItems.map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_gridListModule["default"].col),
      key: i
    }, "Product");
  }) : null : null);
};
var _default = exports["default"] = GridList;