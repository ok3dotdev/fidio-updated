"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var Module = function Module(props) {
  var _props$cartMessages;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, (props === null || props === void 0 || (_props$cartMessages = props.cartMessages) === null || _props$cartMessages === void 0 ? void 0 : _props$cartMessages.length) > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p3",
    style: {
      paddingBottom: '.25rem'
    }
  }, props.cartMessages.map(function (m) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: (0, _defineProperty2["default"])({
        background: 'rgba(34, 34, 34, 1)',
        borderRadius: '.5rem',
        padding: '.25rem',
        width: '-webkit-fill-available',
        textAlign: 'center'
      }, "width", '100%')
    }, /*#__PURE__*/_react["default"].createElement("div", null, m.message), m.href ? /*#__PURE__*/_react["default"].createElement("span", null, "\xA0", /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("a", {
      href: m.href
    }, /*#__PURE__*/_react["default"].createElement("button", {
      style: {
        padding: '.25rem 1rem'
      }
    }, m.hrefCta)))) : null);
  })) : null);
};
var _default = exports["default"] = Module;