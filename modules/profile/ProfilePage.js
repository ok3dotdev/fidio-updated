"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _gridList = _interopRequireDefault(require("../video/player/gridList"));
var _manager = require("../streaming/manager");
var _shop = require("../ecommerce/shop");
var _router = require("next/router");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OPEN_PANEL_OFFSET = 1000;
var Module = function Module(props) {
  var router = (0, _router.useRouter)();
  var query = router.query,
    asPath = router.asPath;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState({}),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    currentLive = _React$useState4[0],
    setCurrentLive = _React$useState4[1];
  var _React$useState5 = _react["default"].useState([]),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    feed = _React$useState6[0],
    setFeed = _React$useState6[1];
  var _React$useState7 = _react["default"].useState([]),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    combinedFeed = _React$useState8[0],
    setCombinedFeed = _React$useState8[1];
  var _React$useState9 = _react["default"].useState(false),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    adminPanelState = _React$useState10[0],
    setAdminPanelState = _React$useState10[1];
  var adminPanelContainerRef = _react["default"].useRef();
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      console.log(query);
      if ((query === null || query === void 0 ? void 0 : query.a) === 'openbeginstream') {
        setTimeout(function () {
          setAdminPanelState(true);
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }, OPEN_PANEL_OFFSET);
      }
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  var styleSafety = props.StyleSafety;
  _react["default"].useEffect(function () {
    if (props && props.profileData && props.profileData.currentLive) {
      setCurrentLive(props.profileData.currentLive);
      setCombinedFeed([props.profileData.currentLive].concat(feed));
    }
  }, [props.profileData, feed]);
  var adminAuth = props._loggedIn && props._loggedIn.identifier && props.profileData && props.profileData.user && props.profileData.user.id && props._loggedIn.identifier === props.profileData.user.id;
  var toggleAdminPanel = _react["default"].useCallback(function (e) {
    var temp = adminPanelState;
    console.log(temp);
    if (temp) {
      temp = false;
    } else {
      temp = true;
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    setAdminPanelState(temp);
  }, [adminPanelState]);
  console.log(props, adminPanelState);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className)
  }, adminAuth ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "AdminPanel_Container ".concat(adminPanelState ? 'AdminPanel_ContainerOpen' : ''),
    ref: adminPanelContainerRef
  }, /*#__PURE__*/_react["default"].createElement(_manager.Manager, _extends({}, props, {
    adminPanelState: adminPanelState
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: 'absolute',
      right: '.5rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      height: '20px',
      padding: '.25rem 1rem',
      borderRadius: '.125rem',
      paddingTop: '.125rem'
    },
    onClick: toggleAdminPanel
  }, adminPanelState ? 'Close' : 'Open', " Manager"))) : null, props.children, props.profileData && props.profileData.user && !props.hideDefault ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "",
    style: {
      padding: styleSafety ? styleSafety.padding : 0,
      margin: styleSafety ? styleSafety.margin : 0
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "PagePadding PagePaddingTop ProfilePage_MetaContainer"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "ProfilePage_Icon",
    src: props.profileData && props.profileData.user && props.profileData.user.icon ? props.profileData.user.icon : ''
  }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "ProfilePage_ProfileName"
  }, props.profileData.user.username)))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "ProfilePage_Feed"
  }, /*#__PURE__*/_react["default"].createElement(_gridList["default"], _extends({
    loggedIn: props._loggedIn,
    _gridItems: combinedFeed,
    _gridListType: 'video'
  }, props))), /*#__PURE__*/_react["default"].createElement(_shop.Shop, _extends({}, props, {
    profile: true
  }))) : /*#__PURE__*/_react["default"].createElement("div", null, "No User here :/"));
};
var _default = Module;
exports["default"] = _default;