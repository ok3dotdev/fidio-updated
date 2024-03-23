var _div;
var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
import React from 'react';
import { SignIn, Username } from './index';
import { IndexCta } from '../../cta';
const Module = props => {
  console.log(props);
  return /*#__PURE__*/_jsx("div", {
    className: `${props.className}`
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: "",
    style: {
      background: `url(${props.backgroundUrl})`
    }
  }, void 0, props.children, /*#__PURE__*/_jsx("div", {
    className: "flex sign-in-page-container"
  }, void 0, props.imageSplash && props.imageSplash.url ? /*#__PURE__*/_jsx("div", {
    className: "SignIn_ImageSplashContainer"
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: "SignIn_ImageSplash",
    style: {
      background: `url(${props.imageSplash.url}) no-repeat center center / cover`
    }
  })) : _div || (_div = /*#__PURE__*/_jsx("div", {
    className: "SignIn_ImageSplashContainer"
  })), /*#__PURE__*/_jsx("div", {}, void 0, <IndexCta {...props} marginTop={'7rem'} definition={props.OnboardCta} children={/*#__PURE__*/_jsx("div", {}, void 0, <SignIn {...props} />, <Username {...props} />)} ctaTopVideos={props.ctaTopVideos}></IndexCta>))));
};
export default Module;