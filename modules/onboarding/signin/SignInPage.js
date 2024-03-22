"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _index = require("./index");
var _cta = require("../../cta");
var Module = function Module(props) {
  console.log(props);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "",
    style: {
      background: "url(".concat(props.backgroundUrl, ")")
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
  }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_cta.IndexCta, (0, _extends2["default"])({}, props, {
    marginTop: '7rem',
    definition: props.OnboardCta,
    children: /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_index.SignIn, props), /*#__PURE__*/_react["default"].createElement(_index.Username, props)),
    ctaTopVideos: props.ctaTopVideos
  }))))));
};
var _default = exports["default"] = Module;