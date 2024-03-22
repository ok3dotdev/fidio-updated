"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var Module = function Module(props) {
  var _props$cart;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, props !== null && props !== void 0 && props.validCc && (props === null || props === void 0 || (_props$cart = props.cart) === null || _props$cart === void 0 || (_props$cart = _props$cart.items) === null || _props$cart === void 0 ? void 0 : _props$cart.length) > 0 && props !== null && props !== void 0 && props._loggedIn || props !== null && props !== void 0 && props.free ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: '#222222',
      borderRadius: '.5rem',
      fontSize: '.75rem',
      lineHeight: '.7rem',
      marginBottom: '.25rem',
      padding: '.25rem .5rem'
    }
  }, "Placing your order above will fulfill payment to the shop vendors and confirms your agreement with ", props.siteTitle, " terms and conditions") : null);
};
var _default = exports["default"] = Module;