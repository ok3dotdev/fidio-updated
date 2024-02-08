"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _payment = require("../../payment");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
  }, "Please Sign In") : null, /*#__PURE__*/_react["default"].createElement(_payment.CreditCard, _extends({}, props, {
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