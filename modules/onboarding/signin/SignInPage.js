var _div;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { SignIn, Username } from './index';
import { IndexCta } from '../../cta';
const Module = props => {
  console.log(props);
  return /*#__PURE__*/React.createElement("div", {
    className: `${props.className}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "",
    style: {
      background: `url(${props.backgroundUrl})`
    }
  }, props.children, /*#__PURE__*/React.createElement("div", {
    className: "flex sign-in-page-container"
  }, props.imageSplash && props.imageSplash.url ? /*#__PURE__*/React.createElement("div", {
    className: "SignIn_ImageSplashContainer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "SignIn_ImageSplash",
    style: {
      background: `url(${props.imageSplash.url}) no-repeat center center / cover`
    }
  })) : _div || (_div = /*#__PURE__*/React.createElement("div", {
    className: "SignIn_ImageSplashContainer"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IndexCta, _extends({}, props, {
    marginTop: '7rem',
    definition: props.OnboardCta,
    children: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SignIn, props), /*#__PURE__*/React.createElement(Username, props)),
    ctaTopVideos: props.ctaTopVideos
  }))))));
};
export default Module;