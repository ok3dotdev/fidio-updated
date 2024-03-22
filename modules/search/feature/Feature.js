"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _image = _interopRequireDefault(require("next/image"));
var _link = _interopRequireDefault(require("next/link"));
var _FeatureModule = _interopRequireDefault(require("./Feature.module.scss"));
var _router = require("next/router");
var _util = require("../../util");
var _search = require("../../utility/search");
var _uuid = require("uuid");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var isOverflown = function isOverflown(clientWidth, clientHeight, scrollWidth, scrollHeight) {
  console.log(clientWidth, clientHeight, scrollWidth, scrollHeight);
  return scrollHeight > clientHeight || scrollWidth > clientWidth;
};
var Module = function Module(props) {
  var _React$useState = _react["default"].useState(null),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    pageError = _React$useState2[0],
    setPageError = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(false),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    componentDidMount = _React$useState4[0],
    setComponentDidMount = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(null),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    componentId = _React$useState6[0],
    setComponentId = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(false),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    fetchBusy = _React$useState8[0],
    setFetchBusy = _React$useState8[1];
  var _React$useState9 = _react["default"].useState([]),
    _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
    feed = _React$useState10[0],
    setFeed = _React$useState10[1];
  var _React$useState11 = _react["default"].useState([]),
    _React$useState12 = (0, _slicedToArray2["default"])(_React$useState11, 2),
    combinedFeed = _React$useState12[0],
    setCombinedFeed = _React$useState12[1];
  var _React$useState13 = _react["default"].useState({}),
    _React$useState14 = (0, _slicedToArray2["default"])(_React$useState13, 2),
    featureData = _React$useState14[0],
    setFeatureData = _React$useState14[1];
  var _React$useState15 = _react["default"].useState({
      size: 'thin'
    }),
    _React$useState16 = (0, _slicedToArray2["default"])(_React$useState15, 2),
    featureState = _React$useState16[0],
    setFeatureState = _React$useState16[1];
  var _React$useState17 = _react["default"].useState(false),
    _React$useState18 = (0, _slicedToArray2["default"])(_React$useState17, 2),
    stagger = _React$useState18[0],
    setStagger = _React$useState18[1];
  var _React$useState19 = _react["default"].useState(null),
    _React$useState20 = (0, _slicedToArray2["default"])(_React$useState19, 2),
    checkContainerOverflownTime = _React$useState20[0],
    setCheckContainerOverflownTime = _React$useState20[1];
  var _React$useState21 = _react["default"].useState(null),
    _React$useState22 = (0, _slicedToArray2["default"])(_React$useState21, 2),
    containerOverflownInterval = _React$useState22[0],
    setContainerOverflownInterval = _React$useState22[1];
  var _React$useState23 = _react["default"].useState(false),
    _React$useState24 = (0, _slicedToArray2["default"])(_React$useState23, 2),
    useOverflown = _React$useState24[0],
    setUseOverflown = _React$useState24[1];
  var _React$useState25 = _react["default"].useState(-1),
    _React$useState26 = (0, _slicedToArray2["default"])(_React$useState25, 2),
    lastFeatureCheck = _React$useState26[0],
    setLastFeatureCheck = _React$useState26[1];
  var router = (0, _router.useRouter)();
  var staggerRef = _react["default"].useRef();
  var featureContainerRef = _react["default"].useRef();
  if (componentId) {
    props._LocalEventEmitter.unsubscribe(componentId);
    props._LocalEventEmitter.subscribe(componentId, function (d) {
      if (d && d.dispatch) {
        if (d.dispatch === 'checkContainerOverflown') {
          checkFeatureContainerOverflown();
        }
      }
    });
  }
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      setComponentDidMount(new Date().getTime());
      if (props.stagger) {
        staggerRef.current = setTimeout(function () {
          setStagger(true);
        }, props.stagger);
      } else {
        setStagger(true);
      }
      var id = (0, _uuid.v4)();
      setComponentId(id);
    }
  }, [componentDidMount, props.stagger]);
  _react["default"].useEffect(function () {
    if (componentId && props._LocalEventEmitter && !containerOverflownInterval) {
      var r = setInterval(function () {
        props._LocalEventEmitter.dispatch(componentId, {
          dispatch: 'checkContainerOverflown'
        });
      }, 5000);
      setContainerOverflownInterval(r);
    }
  }, [props._LocalEventEmitter, componentId, containerOverflownInterval]);
  _react["default"].useEffect(function () {
    if (stagger) {
      if (props.defaultSize) {
        var temp = _objectSpread({}, featureState);
        temp.size = props.defaultSize;
        setFeatureState(temp);
      }
    }
  }, [stagger]);
  var cycleFeatureSize = _react["default"].useCallback(function (e) {
    if (featureState) {
      var temp = _objectSpread({}, featureState);
      if (temp.size === 'thin') {
        temp.size = props.defaultSize !== 'thin' ? props.defaultSize : 'medium';
      } else if (temp.size === 'medium') {
        temp.size = props.defaultSize !== 'medium' ? props.defaultSize : 'thin';
      } else if (temp.size === 'large') {
        temp.size = props.defaultSize !== 'large' ? props.defaultSize : 'thin';
      }
      setFeatureState(temp);
    }
  });
  _react["default"].useEffect(function () {
    var f = /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var selector, useData, _props$s, args, res;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              selector = props.featureData ? 'featureData' : 'noSelection';
              useData = (0, _util.isObjectEmpty)(featureData) ? props[selector] : featureData;
              console.log(useData);
              if (!(useData && !fetchBusy)) {
                _context.next = 19;
                break;
              }
              console.log('Use Data!', useData);
              if (!(lastFeatureCheck < new Date().getTime() - 10000)) {
                _context.next = 19;
                break;
              }
              setLastFeatureCheck(new Date().getTime());
              setFetchBusy(true);
              if (!(!useData.user && props._loggedIn && props._loggedIn.identifier)) {
                _context.next = 17;
                break;
              }
              args = {
                identifier: props._loggedIn.identifier,
                hash: props._loggedIn.hash,
                domainKey: props.domainKey,
                params: {
                  u: props._loggedIn.identifier,
                  s: (_props$s = props.s) !== null && _props$s !== void 0 ? _props$s : ''
                }
              };
              _context.next = 12;
              return (0, _search.fetchSearchData)(props.apiUrl, ['featureData'], args);
            case 12:
              res = _context.sent;
              setFetchBusy(false);
              if (res) {
                if (res && res.data && res.data[selector]) {
                  setFeatureData(res.data[selector]);
                }
              }
              _context.next = 19;
              break;
            case 17:
              setFetchBusy(false);
              setFeatureData(props[selector]);
            case 19:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function f() {
        return _ref.apply(this, arguments);
      };
    }();
    f();
  }, [props.featureData, featureData, feed, fetchBusy, combinedFeed, props._loggedIn, props.domainKey]);
  _react["default"].useEffect(function () {
    var f = featureData.data && Array.isArray(featureData.data) ? featureData.data.concat(feed) : [];
    var update = false;
    for (var i = 0; i < combinedFeed.length; i++) {
      if (!(0, _util.compareObjects)(combinedFeed, f)) {
        update = true;
        break;
      }
    }
    if (combinedFeed.length === 0 && f.length !== 0) {
      setCombinedFeed(f);
    }
  }, [featureData]);
  var myLoader = function myLoader(_ref2) {
    var src = _ref2.src;
    if (src.match(/greythumb/)) {
      return "".concat(src);
    } else if (props.cdn && props.cdn["static"] && props.cdn["static"].length > 0) {
      return "".concat(props.cdn["static"], "/").concat(src);
    }
  };
  var checkFeatureContainerOverflown = function checkFeatureContainerOverflown() {
    if (!checkContainerOverflownTime || checkContainerOverflownTime && checkContainerOverflownTime < new Date().getTime() - 5000) {
      if (featureContainerRef.current) {
        setCheckContainerOverflownTime(new Date().getTime());
        var clientWidth = featureContainerRef.current.clientWidth;
        var clientHeight = featureContainerRef.current.clientHeight;
        var scrollWidth = featureContainerRef.current.scrollWidth;
        var scrollHeight = featureContainerRef.current.scrollHeight;
        var overflown = isOverflown(clientWidth, clientHeight, scrollWidth, scrollHeight);
        if (overflown) {
          setUseOverflown(overflown);
          return overflown;
        }
      }
      return false;
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_FeatureModule["default"].featureExternalContainer, " ").concat(combinedFeed.length > 0 ? featureState.size === 'thin' ? "FeatureContainerOpen" : featureState.size === 'medium' ? "FeatureContainerOpen ".concat(_FeatureModule["default"].featureContainerOpen, " FeatureContainerOpenMedium") : featureState.size === 'large' ? "FeatureContainerOpen ".concat(_FeatureModule["default"].featureContainerOpen, " FeatureContainerOpenLarge") : '' : '', " ").concat(props.className)
  }, !props.hideToggle && combinedFeed.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_FeatureModule["default"].sizeExpandContainer)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_FeatureModule["default"].sizeExpand),
    onClick: cycleFeatureSize
  })) : /*#__PURE__*/_react["default"].createElement("div", null), combinedFeed.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_FeatureModule["default"].featureContainer, " ").concat(featureState && featureState.size ? featureState.size === 'medium' ? _FeatureModule["default"].featureContainerMedium : featureState.size === 'large' ? _FeatureModule["default"].featureContainerLarge : '' : '', " ").concat(useOverflown ? featureState.size === 'medium' ? 'featureContainerOverflown featureContainerOverflown_medium' : featureState.size === 'large' ? 'featureContainerOverflown featureContainerOverflown_large' : '' : ''),
    ref: featureContainerRef
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_FeatureModule["default"].itemContainer, " ").concat(featureState.size === 'thin' ? _FeatureModule["default"].itemContainerThin : '')
  }, combinedFeed.map(function (item, i) {
    var _featureState$size;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_FeatureModule["default"].item, " ").concat(featureState.size === 'thin' ? _FeatureModule["default"].itemThin : "Item_ContainerMetaController Item_ContainerMetaControllerFeature", " Item_ContainerMetaControllerFeature_").concat((_featureState$size = featureState === null || featureState === void 0 ? void 0 : featureState.size) !== null && _featureState$size !== void 0 ? _featureState$size : '', " Feature_Item"),
      key: i
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "w?v=".concat(item.id)
    }, item.status === 'live' && featureState.size !== 'thin' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "LiveTag ".concat(_FeatureModule["default"].statusContainer)
    }, "LIVE", /*#__PURE__*/_react["default"].createElement("div", {
      className: "RecordingCircle RecordingCircle_Small"
    })) : '', featureState.size !== 'thin' ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_image["default"], {
      loader: myLoader,
      src: item.thumbnail && props.cdn && props.cdn["static"] ? item.thumbnail : 'img/default/greythumb.jpg',
      alt: item.title ? item.title : "",
      width: 60,
      height: 30,
      layout: "responsive",
      className: "Feature_Img Feature_Img_Border"
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "Item_GhostMeta Item_GhostMetaFeature"
    }, item.creation && !isNaN(item.creation) && !isNaN(new Date(Number(item.creation))) ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "Item_TinyMetaText Item_TinyMetaTextFeature",
      style: {
        marginBottom: '.25rem',
        textShadow: '1px 2px 6px rgb(0 0 0 / 75%)'
      }
    }, "Stream started ", new Date(Number(item.creation)).toTimeString()) : null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "Item_GhostMetaContainerInternal"
    }, /*#__PURE__*/_react["default"].createElement("div", null, item.description ? item.description : "Watch Livestream Now")))) : null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_FeatureModule["default"].itemMetaContainer, " ").concat(featureState.size === 'thin' ? _FeatureModule["default"].thinMetaContainerSize : '')
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_FeatureModule["default"].itemMetaContainerPadding)
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_FeatureModule["default"].itemMetaText)
    }, item.status === 'live' && featureState.size === 'thin' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "LiveTag ".concat(_FeatureModule["default"].statusContainerInline, " LiveTag_Thin }")
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "RecordingCircle RecordingCircle_Small"
    })) : '', /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex gap-p2 ".concat((item.title.length ? item.title.length : "".concat(item.author_username, " is Streaming Now").length) + item.author_username.length > 20 ? 'marquee' : '', " ").concat(featureState.size === 'thin' ? _FeatureModule["default"].thinMeta : '', " ").concat(_FeatureModule["default"].itemMarqueeContainer)
    }, (item.title.length ? item.title.length : "".concat(item.author_username, " is Streaming Now").length) + item.author_username.length > 20 ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "marqueeContainer ".concat((featureState === null || featureState === void 0 ? void 0 : featureState.size) === 'thin' ? "".concat(_FeatureModule["default"].marqueeContainerThin) : '')
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "marquee1"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_FeatureModule["default"].titleText)
    }, item.title ? item.title : "".concat(item.author_username, " is Streaming Now")), /*#__PURE__*/_react["default"].createElement("span", null, " - "), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_FeatureModule["default"].authorUser)
    }, item.author_username)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "marquee2"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_FeatureModule["default"].titleText)
    }, item.title ? item.title : "".concat(item.author_username, " is Streaming Now")), /*#__PURE__*/_react["default"].createElement("span", null, " - "), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_FeatureModule["default"].authorUser)
    }, item.author_username)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "marquee3"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_FeatureModule["default"].titleText)
    }, item.title ? item.title : "".concat(item.author_username, " is Streaming Now")), /*#__PURE__*/_react["default"].createElement("span", null, " - "), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_FeatureModule["default"].authorUser)
    }, item.author_username))) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_FeatureModule["default"].titleText)
    }, item.title ? item.title : "".concat(item.author_username, " is Streaming Now")), /*#__PURE__*/_react["default"].createElement("span", null, " - "), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_FeatureModule["default"].authorUser)
    }, item.author_username))))))));
  }))) : null);
};
var _default = exports["default"] = Module;