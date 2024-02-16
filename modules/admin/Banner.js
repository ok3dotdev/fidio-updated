"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _link = _interopRequireDefault(require("next/link"));
var _AdminModule = _interopRequireDefault(require("./Admin.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  var _props$_loggedIn$user, _props$_loggedIn, _props$_loggedIn2, _props$_loggedIn$user2, _props$_loggedIn3, _props$_loggedIn4, _props$_adminAuth, _props$_adminAuth2;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].adminBannerContainer, " Admin_BannerContainer"),
    style: {
      fontSize: '.85rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].adminBannerInternalContainer)
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      textWrap: 'nowrap'
    }
  }, "Welcome ", /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/p?u=".concat((_props$_loggedIn$user = props === null || props === void 0 || (_props$_loggedIn = props._loggedIn) === null || _props$_loggedIn === void 0 ? void 0 : _props$_loggedIn.username) !== null && _props$_loggedIn$user !== void 0 ? _props$_loggedIn$user : props === null || props === void 0 || (_props$_loggedIn2 = props._loggedIn) === null || _props$_loggedIn2 === void 0 ? void 0 : _props$_loggedIn2.identifier),
    style: {
      fontWeight: '600'
    }
  }, (_props$_loggedIn$user2 = props === null || props === void 0 || (_props$_loggedIn3 = props._loggedIn) === null || _props$_loggedIn3 === void 0 ? void 0 : _props$_loggedIn3.username) !== null && _props$_loggedIn$user2 !== void 0 ? _props$_loggedIn$user2 : props === null || props === void 0 || (_props$_loggedIn4 = props._loggedIn) === null || _props$_loggedIn4 === void 0 ? void 0 : _props$_loggedIn4.identifier))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p5",
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/",
    style: {
      fontWeight: '600'
    }
  }, props.domainUrl), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      textWrap: 'nowrap'
    }
  }, props !== null && props !== void 0 && (_props$_adminAuth = props._adminAuth) !== null && _props$_adminAuth !== void 0 && (_props$_adminAuth = _props$_adminAuth.adminc) !== null && _props$_adminAuth !== void 0 && _props$_adminAuth.access ? "(admin access: ".concat(props === null || props === void 0 || (_props$_adminAuth2 = props._adminAuth) === null || _props$_adminAuth2 === void 0 || (_props$_adminAuth2 = _props$_adminAuth2.adminc) === null || _props$_adminAuth2 === void 0 ? void 0 : _props$_adminAuth2.access, ")") : ''))));
};
var _default = exports["default"] = Module;