"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderTheme = exports.SliderStyles = exports.ReactCarouselCss = exports.PaystackScript = exports.GoogleSignInRegister = exports.GoogleGsiClient = exports.GoogleFontsLink = void 0;
var _react = _interopRequireDefault(require("react"));
var _script = _interopRequireDefault(require("next/script"));
var _app = require("../utility/_app");
// externalScripts.js
// Place scripts here for importing instead of placing directly in _app or document.js

var SliderStyles = exports.SliderStyles = /*#__PURE__*/_react["default"].createElement("link", {
  href: "https://d2zsu4v7czjhvo.cloudfront.net/all/slick/1.6/slick.css",
  rel: "stylesheet"
});
var SliderTheme = exports.SliderTheme = /*#__PURE__*/_react["default"].createElement("link", {
  href: "https://d2zsu4v7czjhvo.cloudfront.net/all/slick/1.6/slick_theme.min.css",
  rel: "stylesheet"
});
var GoogleFontsLink = exports.GoogleFontsLink = /*#__PURE__*/_react["default"].createElement("link", {
  href: "https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp",
  rel: "stylesheet"
});
var PaystackScript = exports.PaystackScript = /*#__PURE__*/_react["default"].createElement("script", {
  src: "//js.paystack.co/v1/inline.js"
});
var GoogleGsiClient = exports.GoogleGsiClient = /*#__PURE__*/_react["default"].createElement(_script["default"], {
  src: "https://accounts.google.com/gsi/client",
  async: true,
  defer: true
});
var GoogleSignInRegister = exports.GoogleSignInRegister = /*#__PURE__*/_react["default"].createElement(_script["default"], {
  strategy: "lazyOnload",
  id: "script_one_tap_sign_in",
  className: "lazyOnload"
}, _app.registerGoogleSignIn);
var ReactCarouselCss = exports.ReactCarouselCss = /*#__PURE__*/_react["default"].createElement("link", {
  href: "https://d2zsu4v7czjhvo.cloudfront.net/all/react-carousel/1.30.1/react-carousel.es.min.css",
  rel: "stylesheet"
});