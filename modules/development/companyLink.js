"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireDefault(require("react"));
var _documentationModule = _interopRequireDefault(require("./documentation.module.scss"));
var Module = function Module(props) {
  var _props$_adminAuth, _props$dborigin;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className, " CompanyLink_Container"),
    style: {
      alignSelf: 'center'
    }
  }, props !== null && props !== void 0 && (_props$_adminAuth = props._adminAuth) !== null && _props$_adminAuth !== void 0 && (_props$_adminAuth = _props$_adminAuth.adminc) !== null && _props$_adminAuth !== void 0 && _props$_adminAuth.admin && props !== null && props !== void 0 && props._loggedIn ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_documentationModule["default"].companyLink),
    style: {
      background: 'grey',
      borderRadius: '1rem',
      padding: '.25rem 2rem'
    }
  }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "".concat(props.devLocal ? "".concat(props.devAddress, "/admin") : "https://".concat(props.domainUrl, "/admin"))
  }, props !== null && props !== void 0 && props.dborigin && props !== null && props !== void 0 && (_props$dborigin = props.dborigin) !== null && _props$dborigin !== void 0 && _props$dborigin.charAt ? "".concat(props.dborigin.charAt(0).toUpperCase()).concat(props.dborigin.slice(1, props.dborigin.length)) : null)) : null);
};
var _default = exports["default"] = Module;