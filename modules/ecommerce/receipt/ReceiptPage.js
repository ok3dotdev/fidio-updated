"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Order = _interopRequireDefault(require("./Order"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
  }, receiptData ? /*#__PURE__*/_react["default"].createElement(_Order["default"], _extends({
    order: receiptData,
    hideView: true,
    expanded: true
  }, props)) : null));
};
var _default = exports["default"] = Module;