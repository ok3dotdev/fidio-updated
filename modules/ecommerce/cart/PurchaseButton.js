"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  var _props$cart, _props$pageError, _props$pageError2, _props$pageError$mess, _props$pageError3;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, (props !== null && props !== void 0 && props.validCc || props !== null && props !== void 0 && props.free) && (props === null || props === void 0 || (_props$cart = props.cart) === null || _props$cart === void 0 || (_props$cart = _props$cart.items) === null || _props$cart === void 0 ? void 0 : _props$cart.length) > 0 ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      width: '100%',
      marginBottom: '.25rem'
    },
    onClick: props === null || props === void 0 ? void 0 : props.handlePerformPurchase
  }, props !== null && props !== void 0 && props.free ? 'Get Now' : 'Purchase'), props !== null && props !== void 0 && (_props$pageError = props.pageError) !== null && _props$pageError !== void 0 && _props$pageError.message && (props === null || props === void 0 || (_props$pageError2 = props.pageError) === null || _props$pageError2 === void 0 ? void 0 : _props$pageError2.placement) == 'purchase' ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "error",
    style: {
      marginBottom: '.125rem'
    },
    onClick: props === null || props === void 0 ? void 0 : props.handleClearError
  }, (_props$pageError$mess = props === null || props === void 0 || (_props$pageError3 = props.pageError) === null || _props$pageError3 === void 0 ? void 0 : _props$pageError3.message) !== null && _props$pageError$mess !== void 0 ? _props$pageError$mess : '') : null) : null);
};
var _default = exports["default"] = Module;