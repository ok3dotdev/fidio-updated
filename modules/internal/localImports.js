var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
// externalScripts.js
// Place scripts here for importing instead of placing directly in _app or document.js

import React from 'react';
import Script from 'next/script';
import { registerGoogleSignIn } from '../utility/_app';
export const SliderStyles = /*#__PURE__*/_jsx("link", {
  href: "https://d2zsu4v7czjhvo.cloudfront.net/all/slick/1.6/slick.css",
  rel: "stylesheet"
});
export const SliderTheme = /*#__PURE__*/_jsx("link", {
  href: "https://d2zsu4v7czjhvo.cloudfront.net/all/slick/1.6/slick_theme.min.css",
  rel: "stylesheet"
});
export const GoogleFontsLink = /*#__PURE__*/_jsx("link", {
  href: "https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp",
  rel: "stylesheet"
});
export const PaystackScript = /*#__PURE__*/_jsx("script", {
  src: "//js.paystack.co/v1/inline.js"
});
export const GoogleGsiClient = /*#__PURE__*/_jsx(Script, {
  src: "https://accounts.google.com/gsi/client",
  async: true,
  defer: true
});
export const GoogleSignInRegister = /*#__PURE__*/_jsx(Script, {
  strategy: "lazyOnload",
  id: "script_one_tap_sign_in",
  className: "lazyOnload"
}, void 0, registerGoogleSignIn);
export const ReactCarouselCss = /*#__PURE__*/_jsx("link", {
  href: "https://d2zsu4v7czjhvo.cloudfront.net/all/react-carousel/1.30.1/react-carousel.es.min.css",
  rel: "stylesheet"
});