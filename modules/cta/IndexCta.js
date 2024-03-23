var _span;
var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
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
  return /*#__PURE__*/_jsx("div", {
    className: "IndexCta_ExternalContainer"
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: "IndexCta_Container"
  }, void 0, props.definition ? /*#__PURE__*/_jsx(React.Fragment, {}, void 0, /*#__PURE__*/_jsx("div", {
    className: `IndexCta_LeadContainer ${props.className}`
  }, void 0, props.ctaTopVideos ? <WideFeature image1={props.ctaTopVideos.image1} {...props} /> : '', /*#__PURE__*/_jsx("img", {
    src: props.definition.logo,
    className: "IndexCta_MyLogo"
  }), /*#__PURE__*/_jsx("h1", {
    className: "IndexCta_Lead1_5 pointer IndexCta_Lead_First"
  }, void 0, normalizeText(props.definition.lead)), <h1 className='IndexCta_Lead2 pointer IndexCta_Lead_Second' ref={Lead2}>{normalizeText(props.definition.lead2)} {_span || (_span = /*#__PURE__*/_jsx("span", {
      className: "IndexCta_RecordingCircle"
    }))}</h1>, /*#__PURE__*/_jsx("div", {
    className: "IndexCta_Description"
  }, void 0, props.definition.description), props.children, !props._loggedIn ? <div className='IndexCta_AfterSignIn' ref={AfterSignIn}>{props.definition.afterSignIn}</div> : /*#__PURE__*/_jsx("div", {
    style: {
      display: 'flex',
      gap: '.5rem',
      alignItems: 'center'
    }
  }, void 0, <button className='IndexCta_ButtonStyle ButtonGlowing' ref={ButtonAction}>{props.definition.buttonAfterSignIn}</button>)), /*#__PURE__*/_jsx("div", {
    className: "IndexCta_DetailContainer"
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: "IndexCta_Detail"
  }, void 0, props.definition.detail))) : null));
};
export default Module;