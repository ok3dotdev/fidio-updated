"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _div, _div2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("li", {
    onClick: props === null || props === void 0 ? void 0 : props.fireShareBug
  }, _div || (_div = /*#__PURE__*/_react["default"].createElement("div", {
    className: "material-icons"
  }, "bug_report")), _div2 || (_div2 = /*#__PURE__*/_react["default"].createElement("div", null, "Report Bug"))));
};
var _default = exports["default"] = Module;