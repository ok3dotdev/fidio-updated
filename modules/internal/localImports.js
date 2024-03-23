// externalScripts.js
// Place scripts here for importing instead of placing directly in _app or document.js

import React from 'react';
import Script from 'next/script';
import { registerGoogleSignIn } from '../utility/_app';
export const SliderStyles = /*#__PURE__*/React.createElement("link", {
  href: "https://d2zsu4v7czjhvo.cloudfront.net/all/slick/1.6/slick.css",
  rel: "stylesheet"
});
export const SliderTheme = /*#__PURE__*/React.createElement("link", {
  href: "https://d2zsu4v7czjhvo.cloudfront.net/all/slick/1.6/slick_theme.min.css",
  rel: "stylesheet"
});
export const GoogleFontsLink = /*#__PURE__*/React.createElement("link", {
  href: "https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp",
  rel: "stylesheet"
});
export const PaystackScript = /*#__PURE__*/React.createElement("script", {
  src: "//js.paystack.co/v1/inline.js"
});
export const GoogleGsiClient = /*#__PURE__*/React.createElement(Script, {
  src: "https://accounts.google.com/gsi/client",
  async: true,
  defer: true
});
export const GoogleSignInRegister = /*#__PURE__*/React.createElement(Script, {
  strategy: "lazyOnload",
  id: "script_one_tap_sign_in",
  className: "lazyOnload"
}, registerGoogleSignIn);
export const ReactCarouselCss = /*#__PURE__*/React.createElement("link", {
  href: "https://d2zsu4v7czjhvo.cloudfront.net/all/react-carousel/1.30.1/react-carousel.es.min.css",
  rel: "stylesheet"
});