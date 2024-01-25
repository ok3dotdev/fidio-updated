"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaystackScript = exports.GoogleSignInRegister = exports.GoogleGsiClient = exports.GoogleFontsLink = exports.GlideScript = void 0;
var _script = _interopRequireDefault(require("next/script"));
var _app = require("../utility/_app");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// externalScripts.js

var GlideScript = exports.GlideScript = /*#__PURE__*/React.createElement(_script["default"], {
  src: "https://unpkg.com/@glidejs/glide",
  crossorigin: "anonymous",
  strategy: "beforeInteractive"
});
var GoogleFontsLink = exports.GoogleFontsLink = /*#__PURE__*/React.createElement("link", {
  href: "https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp",
  rel: "stylesheet"
});
var PaystackScript = exports.PaystackScript = /*#__PURE__*/React.createElement("script", {
  src: "//js.paystack.co/v1/inline.js"
});
var GoogleGsiClient = exports.GoogleGsiClient = /*#__PURE__*/React.createElement(_script["default"], {
  src: "https://accounts.google.com/gsi/client",
  async: true,
  defer: true
});
var GoogleSignInRegister = exports.GoogleSignInRegister = /*#__PURE__*/React.createElement(_script["default"], {
  strategy: "lazyOnload",
  id: "script_one_tap_sign_in",
  className: "lazyOnload"
}, _app.registerGoogleSignIn);