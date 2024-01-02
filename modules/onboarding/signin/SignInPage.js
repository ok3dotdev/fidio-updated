"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = require("./index");
var _cta = require("../../cta");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Module = function Module(props) {
  var styleSafety = props.StyleSafety;
  console.log(props);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "",
    style: {
      background: "url(".concat(props.backgroundUrl, ")"),
      padding: styleSafety ? styleSafety.padding : 0,
      margin: styleSafety ? styleSafety.margin : 0
    }
  }, props.children, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex sign-in-page-container"
  }, props.imageSplash && props.imageSplash.url ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "SignIn_ImageSplashContainer"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "SignIn_ImageSplash",
    style: {
      background: "url(".concat(props.imageSplash.url, ") no-repeat center center / cover")
    }
  })) : /*#__PURE__*/_react["default"].createElement("div", {
    className: "SignIn_ImageSplashContainer"
  }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_cta.IndexCta, _extends({}, props, {
    marginTop: '7rem',
    definition: props.OnboardCta,
    children: /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_index.SignIn, props), /*#__PURE__*/_react["default"].createElement(_index.Username, props)),
    ctaTopVideos: props.ctaTopVideos
  }))))));
};
var _default = exports["default"] = Module;