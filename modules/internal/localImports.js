"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderTheme = exports.SliderStyles = exports.ReactCarouselCss = exports.PaystackScript = exports.GoogleSignInRegister = exports.GoogleGsiClient = exports.GoogleFontsLink = void 0;
var _react = _interopRequireDefault(require("react"));
var _script = _interopRequireDefault(require("next/script"));
var _app = require("../utility/_app");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// externalScripts.js
// Place scripts here for importing instead of placing directly in _app or document.js

var SliderStyles = exports.SliderStyles = <link href='https://d2zsu4v7czjhvo.cloudfront.net/all/slick/1.6/slick.css' rel='stylesheet'></link>;
var SliderTheme = exports.SliderTheme = <link href='https://d2zsu4v7czjhvo.cloudfront.net/all/slick/1.6/slick_theme.min.css' rel='stylesheet'></link>;
var GoogleFontsLink = exports.GoogleFontsLink = <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet"></link>;
var PaystackScript = exports.PaystackScript = <script src="//js.paystack.co/v1/inline.js"></script>;
var GoogleGsiClient = exports.GoogleGsiClient = <_script.default src="https://accounts.google.com/gsi/client" async defer></_script.default>;
var GoogleSignInRegister = exports.GoogleSignInRegister = <_script.default strategy="lazyOnload" id='script_one_tap_sign_in' className="lazyOnload">
		{_app.registerGoogleSignIn}
	</_script.default>;
var ReactCarouselCss = exports.ReactCarouselCss = <link href="https://d2zsu4v7czjhvo.cloudfront.net/all/react-carousel/1.30.1/react-carousel.es.min.css" rel="stylesheet"></link>;