"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _payment = require("../../payment");
var Module = function Module(props) {
  var _props$cart;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "Ecommerce_Credit_Card_Module_Container ".concat(props !== null && props !== void 0 && props.validCc ? 'slide_hide slide_hide_do_full_show' : 'slide_hide slide_hide_visible', " ").concat(props.forceShowCc || props._isMobile ? 'slide_hide_do_force_show' : ''),
    style: {
      marginBottom: '.25rem'
    }
  }, props !== null && props !== void 0 && props.showContent ? props !== null && props !== void 0 && props.validCc && props._loggedIn ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "hover_show ".concat(props.forceShowCc || props._isMobile ? 'hover_show_Cc_force' : '', " Ecommerce_Credit_Card_Label"),
    style: {
      textAlign: 'center'
    }
  }, "Credit Card") : (props === null || props === void 0 || (_props$cart = props.cart) === null || _props$cart === void 0 || (_props$cart = _props$cart.items) === null || _props$cart === void 0 ? void 0 : _props$cart.length) > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.75rem'
    }
  }, props !== null && props !== void 0 && props.free ? '' : 'Add a Credit Card to fulfill Purchase') : null : null, !props._loggedIn ? /*#__PURE__*/_react["default"].createElement("button", {
    onClick: props === null || props === void 0 ? void 0 : props.handleToggleSettings,
    style: {
      fontSize: '.75rem',
      width: '100%'
    }
  }, "Please Sign In") : null, /*#__PURE__*/_react["default"].createElement(_payment.CreditCard, (0, _extends2["default"])({}, props, {
    stagger: 500,
    validCc: props === null || props === void 0 ? void 0 : props.validCc,
    setValidCc: props === null || props === void 0 ? void 0 : props.setValidCc,
    setShowContent: props === null || props === void 0 ? void 0 : props.setShowContent,
    setSolution: props === null || props === void 0 ? void 0 : props.setSolution,
    sx: {
      marginBottom: '.5rem',
      marginTop: '.25rem'
    },
    children: props.ccChildren
  })));
};
var _default = exports["default"] = Module;