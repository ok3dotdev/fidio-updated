"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  return /*#__PURE__*/_react["default"].createElement("div", null, props.useAppConfigLayout && props.appConfigLayout ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, props.appConfigLayout) : null);
};
var _default = exports["default"] = Module;