"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _signin = require("../../onboarding/signin");
var Module = function Module(props) {
  var _props$siteTitle;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, props._openMenu && props._openMenu.currentMenu && props._openMenu.currentMenu == 'main_settings' ? !props._loggedIn ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
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
  }, /*#__PURE__*/_react["default"].createElement(_signin.SignIn, (0, _extends2["default"])({}, props, {
    maxWidth: '100%'
  })))) : null : null);
};
var _default = exports["default"] = Module;