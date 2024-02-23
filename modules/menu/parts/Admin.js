"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _link = _interopRequireDefault(require("next/link"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  var _props$_adminAuth;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, props !== null && props !== void 0 && (_props$_adminAuth = props._adminAuth) !== null && _props$_adminAuth !== void 0 && (_props$_adminAuth = _props$_adminAuth.adminc) !== null && _props$_adminAuth !== void 0 && _props$_adminAuth.admin && props !== null && props !== void 0 && props._adminAuth.userid && props._loggedIn.identifier && props._adminAuth.userid === props._loggedIn.identifier ? /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/admin",
    className: "menuLinkSelector",
    onClick: props === null || props === void 0 ? void 0 : props.handleToggleSettings,
    style: {
      position: 'relative',
      alignSelf: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "material-icons"
  }, "key"), /*#__PURE__*/_react["default"].createElement("div", null, "Admin"))) : null);
};
var _default = exports["default"] = Module;