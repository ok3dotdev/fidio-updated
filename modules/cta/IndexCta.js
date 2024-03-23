var _span;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { normalizeText } from '../utility/utility';
import { WideFeature } from '../search/wideFeature';
const Module = props => {
  const AfterSignIn = React.useRef();
  const Lead2 = React.useRef();
  const ButtonAction = React.useRef();
  React.useEffect(() => {
    try {
      setTimeout(() => {
        if (Lead2.current && !Lead2.current.classList.contains('IndexCta_Lead2Trans')) {
          Lead2.current.classList.add('IndexCta_Lead2Trans');
        }
        setTimeout(() => {
          if (AfterSignIn.current && !AfterSignIn.current.classList.contains('IndexCta_AfterSignInTrans')) {
            AfterSignIn.current.classList.add('IndexCta_AfterSignInTrans');
          }
          if (ButtonAction.current && !ButtonAction.current.classList.contains('IndexCta_ButtonStyleTrans')) {
            ButtonAction.current.classList.add('IndexCta_ButtonStyleTrans');
          }
        }, 750);
      }, 1000);
    } catch (err) {
      // fail silently
    }
  }, [props._loggedIn]);
  return /*#__PURE__*/React.createElement("div", {
    className: "IndexCta_ExternalContainer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "IndexCta_Container"
  }, props.definition ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: `IndexCta_LeadContainer ${props.className}`
  }, props.ctaTopVideos ? /*#__PURE__*/React.createElement(WideFeature, _extends({
    image1: props.ctaTopVideos.image1
  }, props)) : '', /*#__PURE__*/React.createElement("img", {
    src: props.definition.logo,
    className: "IndexCta_MyLogo"
  }), /*#__PURE__*/React.createElement("h1", {
    className: "IndexCta_Lead1_5 pointer IndexCta_Lead_First"
  }, normalizeText(props.definition.lead)), /*#__PURE__*/React.createElement("h1", {
    className: "IndexCta_Lead2 pointer IndexCta_Lead_Second",
    ref: Lead2
  }, normalizeText(props.definition.lead2), " ", _span || (_span = /*#__PURE__*/React.createElement("span", {
    className: "IndexCta_RecordingCircle"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "IndexCta_Description"
  }, props.definition.description), props.children, !props._loggedIn ? /*#__PURE__*/React.createElement("div", {
    className: "IndexCta_AfterSignIn",
    ref: AfterSignIn
  }, props.definition.afterSignIn) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '.5rem',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "IndexCta_ButtonStyle ButtonGlowing",
    ref: ButtonAction
  }, props.definition.buttonAfterSignIn))), /*#__PURE__*/React.createElement("div", {
    className: "IndexCta_DetailContainer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "IndexCta_Detail"
  }, props.definition.detail))) : null));
};
export default Module;