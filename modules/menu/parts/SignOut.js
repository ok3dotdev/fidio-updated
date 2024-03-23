"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _div, _div2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, props._loggedIn ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("li", {
    onClick: props === null || props === void 0 ? void 0 : props.handleLogout
  }, _div || (_div = /*#__PURE__*/_react["default"].createElement("div", {
    className: "material-icons"
  }, "logout")), _div2 || (_div2 = /*#__PURE__*/_react["default"].createElement("div", null, "Sign Out")))) : null);
};
var _default = exports["default"] = Module;