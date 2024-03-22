"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _link = _interopRequireDefault(require("next/link"));
var _MenuModule = _interopRequireDefault(require("../Menu.module.scss"));
var Module = function Module(props) {
  var _props$_loggedIn$icon, _props$_loggedIn;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, props._loggedIn ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/p",
    className: "menuLinkSelector",
    onClick: props === null || props === void 0 ? void 0 : props.handleToggleSettings,
    style: {
      position: 'relative',
      alignSelf: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("li", {
    style: {
      padding: '.75rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "".concat(_MenuModule["default"].profileIcon),
    src: (_props$_loggedIn$icon = props === null || props === void 0 || (_props$_loggedIn = props._loggedIn) === null || _props$_loggedIn === void 0 ? void 0 : _props$_loggedIn.icon) !== null && _props$_loggedIn$icon !== void 0 ? _props$_loggedIn$icon : ''
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_MenuModule["default"].profileItemDataContainer)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontWeight: '700'
    }
  }, "@", props._loggedIn.username), /*#__PURE__*/_react["default"].createElement("a", {
    href: "/p",
    className: "a",
    style: {
      alignItems: 'center',
      display: 'flex',
      gap: '.25rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "material-icons"
  }, "account_box"), /*#__PURE__*/_react["default"].createElement("div", null, "View Your Profile")))))) : null);
};
var _default = exports["default"] = Module;