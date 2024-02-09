"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _link = _interopRequireDefault(require("next/link"));
var _MenuModule = _interopRequireDefault(require("../Menu.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  var _props$_loggedIn;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, props._loggedIn ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, (_props$_loggedIn = props._loggedIn) !== null && _props$_loggedIn !== void 0 && _props$_loggedIn.username ? /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/p?a=golive",
    className: "menuLinkSelector slideGradient",
    onClick: props === null || props === void 0 ? void 0 : props.handleToggleSettings,
    style: {
      position: 'relative',
      alignSelf: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "material-icons"
  }, "stream"), /*#__PURE__*/_react["default"].createElement("div", null, "Go Live"))) : null) : null);
};
var _default = exports["default"] = Module;