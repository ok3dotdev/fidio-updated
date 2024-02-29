"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _link = _interopRequireDefault(require("next/link"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  var _props$_loggedIn, _props$_loggedIn2;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, (_props$_loggedIn = props._loggedIn) !== null && _props$_loggedIn !== void 0 && (_props$_loggedIn = _props$_loggedIn.meta) !== null && _props$_loggedIn !== void 0 && (_props$_loggedIn = _props$_loggedIn.locationMeta) !== null && _props$_loggedIn !== void 0 && _props$_loggedIn.city && (_props$_loggedIn2 = props._loggedIn) !== null && _props$_loggedIn2 !== void 0 && (_props$_loggedIn2 = _props$_loggedIn2.meta) !== null && _props$_loggedIn2 !== void 0 && (_props$_loggedIn2 = _props$_loggedIn2.locationMeta) !== null && _props$_loggedIn2 !== void 0 && _props$_loggedIn2.country ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/settings?t=location",
    className: "menuLinkSelector",
    onClick: props === null || props === void 0 ? void 0 : props.handleToggleSettings,
    style: {
      position: 'relative',
      alignSelf: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "material-icons"
  }, "flag"), /*#__PURE__*/_react["default"].createElement("div", null, "Location:\xA0", /*#__PURE__*/_react["default"].createElement("span", null, props === null || props === void 0 ? void 0 : props.resolvedCountry))))) : null);
};
var _default = exports["default"] = Module;