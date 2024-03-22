"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _Order = _interopRequireDefault(require("./Order"));
var Module = function Module(props) {
  var receiptData = props === null || props === void 0 ? void 0 : props.receiptData;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      maxWidth: '680px',
      margin: '0 auto',
      padding: '0 1rem'
    }
  }, receiptData ? /*#__PURE__*/_react["default"].createElement(_Order["default"], (0, _extends2["default"])({
    order: receiptData,
    hideView: true,
    expanded: true
  }, props)) : null));
};
var _default = exports["default"] = Module;