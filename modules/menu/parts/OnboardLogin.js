"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _signin = require("../../onboarding/signin");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Module = function Module(props) {
  var _props$siteTitle;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, props._openMenu && props._openMenu.currentMenu && props._openMenu.currentMenu == 'main_settings' ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropMenu"
  }, /*#__PURE__*/_react["default"].createElement("ul", null, !props._loggedIn ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: '.5rem .5rem .125rem'
    }
  }, "Sign In to ", (_props$siteTitle = props === null || props === void 0 ? void 0 : props.siteTitle) !== null && _props$siteTitle !== void 0 ? _props$siteTitle : 'Tycoon', " Below"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      borderTop: '3px solid grey',
      margin: '.25rem 0'
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: '.5rem',
      paddingTop: '0'
    }
  }, /*#__PURE__*/_react["default"].createElement(_signin.SignIn, _extends({}, props, {
    maxWidth: '100%'
  })))) : null)) : null);
};
var _default = exports["default"] = Module;