"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _router = require("next/router");
var _views = require("../../views");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
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
  _react["default"].useEffect(function () {
    var _props$profileData, _props$profileData2;
    if (props !== null && props !== void 0 && (_props$profileData = props.profileData) !== null && _props$profileData !== void 0 && _props$profileData.currentLive) {
      setCurrentLive(props.profileData.currentLive);
      setCombinedFeed([props.profileData.currentLive].concat(feed));
    } else if (!(props !== null && props !== void 0 && (_props$profileData2 = props.profileData) !== null && _props$profileData2 !== void 0 && _props$profileData2.currentLive)) {
      console.log('Remove');
      var temp = _toConsumableArray(feed);
      var f = temp.findIndex(function (m) {
        var _props$profileData3;
        return (m === null || m === void 0 ? void 0 : m.author) === (props === null || props === void 0 || (_props$profileData3 = props.profileData) === null || _props$profileData3 === void 0 || (_props$profileData3 = _props$profileData3.user) === null || _props$profileData3 === void 0 ? void 0 : _props$profileData3.id) && (m === null || m === void 0 ? void 0 : m.status) === 'live';
      });
      console.log(f, temp);
      if (f > -1) {
        temp.splice(f, 1);
      }
      setCurrentLive({});
      setCombinedFeed(temp);
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
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className)
  }, /*#__PURE__*/_react["default"].createElement(_views.Profile, _extends({}, props, {
    adminAuth: adminAuth,
    combinedFeed: combinedFeed,
    adminPanelState: adminPanelState,
    toggleAdminPanel: toggleAdminPanel,
    adminPanelContainerRef: adminPanelContainerRef
  })));
};
var _default = exports["default"] = Module;