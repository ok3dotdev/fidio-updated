"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _uuid = require("uuid");
var _AdminModule = _interopRequireDefault(require("./Admin.module.scss"));
var _BuildAdmin = _interopRequireDefault(require("./BuildAdmin"));
var _StreamAdmin = _interopRequireDefault(require("./StreamAdmin"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Module = function Module(props) {
  var _props$_adminAuth, _props$_loggedIn$user, _props$_loggedIn, _props$_loggedIn2, _props$_adminAuth2, _props$_adminAuth3;
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
  var _React$useState7 = _react["default"].useState(null),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    page = _React$useState8[0],
    setPage = _React$useState8[1];
  var Auth_Table = {
    BuildAdmin: ['full']
  };
  var resolveAuth = function resolveAuth(page, auth) {
    var _auth$adminc;
    if (auth !== null && auth !== void 0 && (_auth$adminc = auth.adminc) !== null && _auth$adminc !== void 0 && _auth$adminc.access && Auth_Table[page].indexOf(auth.adminc.access) > -1) {
      return true;
    }
    return false;
  };
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      var id = (0, _uuid.v4)();
      setComponentId(id);
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  var handleSetPage = _react["default"].useCallback(function (e) {
    var _e$target;
    var page = e === null || e === void 0 || (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.getAttribute('modif');
    if (!page && e !== null && e !== void 0 && e.children && e !== null && e !== void 0 && e.children[0]) {
      var _e$children$;
      page = e === null || e === void 0 || (_e$children$ = e.children[0]) === null || _e$children$ === void 0 ? void 0 : _e$children$.getAttribute('modif');
    }
    if (page) {
      setPage(page);
    }
  });
  console.log(page, props);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className, " ").concat(_AdminModule["default"].container, " Admin_Container")
  }, props !== null && props !== void 0 && (_props$_adminAuth = props._adminAuth) !== null && _props$_adminAuth !== void 0 && (_props$_adminAuth = _props$_adminAuth.adminc) !== null && _props$_adminAuth !== void 0 && _props$_adminAuth.admin && props !== null && props !== void 0 && props._loggedIn ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].internalContainer, " Admin_InternalContainer")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].adminBannerContainer, " Admin_BannerContainer")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].adminBannerInternalContainer)
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, "Welcome ", (_props$_loggedIn$user = props === null || props === void 0 || (_props$_loggedIn = props._loggedIn) === null || _props$_loggedIn === void 0 ? void 0 : _props$_loggedIn.username) !== null && _props$_loggedIn$user !== void 0 ? _props$_loggedIn$user : props === null || props === void 0 || (_props$_loggedIn2 = props._loggedIn) === null || _props$_loggedIn2 === void 0 ? void 0 : _props$_loggedIn2.identifier)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p5"
  }, /*#__PURE__*/_react["default"].createElement("div", null, props.domainUrl), /*#__PURE__*/_react["default"].createElement("div", null, props !== null && props !== void 0 && (_props$_adminAuth2 = props._adminAuth) !== null && _props$_adminAuth2 !== void 0 && (_props$_adminAuth2 = _props$_adminAuth2.adminc) !== null && _props$_adminAuth2 !== void 0 && _props$_adminAuth2.access ? "(admin access: ".concat(props === null || props === void 0 || (_props$_adminAuth3 = props._adminAuth) === null || _props$_adminAuth3 === void 0 || (_props$_adminAuth3 = _props$_adminAuth3.adminc) === null || _props$_adminAuth3 === void 0 ? void 0 : _props$_adminAuth3.access, ")") : '')))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].bodyContainer, " Admin_BodyContainer")
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "".concat(_AdminModule["default"].adminMenuContainer, " Admin_MenuContainer")
  }, resolveAuth('BuildAdmin', props._adminAuth) ? /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleSetPage,
    modif: "build"
  }, "Build")) : null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleSetPage,
    modif: "stream"
  }, "Stream"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].contentBodyContainer, " Admin_ContentBodyContainer")
  }, page ? page === 'build' && resolveAuth('BuildAdmin', props._adminAuth) ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_BuildAdmin["default"], props)) : page === 'stream' ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_StreamAdmin["default"], props)) : null : null))) : null);
};
var _default = exports["default"] = Module;