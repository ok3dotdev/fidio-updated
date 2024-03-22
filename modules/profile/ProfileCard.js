"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var Module = function Module(props) {
  var _props$className;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat((_props$className = props === null || props === void 0 ? void 0 : props.className) !== null && _props$className !== void 0 ? _props$className : '', " PagePadding pTop ProfilePage_MetaContainer")
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "ProfilePage_Icon",
    src: props.profileData && props.profileData.user && props.profileData.user.icon ? props.profileData.user.icon : ''
  }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "ProfilePage_ProfileName"
  }, props.profileData.user.username))));
};
var _default = exports["default"] = Module;