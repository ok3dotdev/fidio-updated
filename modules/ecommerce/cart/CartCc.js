var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
import React from 'react';
import { CreditCard } from '../../payment';
const Module = props => {
  return /*#__PURE__*/_jsx("div", {
    className: `Ecommerce_Credit_Card_Module_Container ${props?.validCc ? 'slide_hide slide_hide_do_full_show' : 'slide_hide slide_hide_visible'} ${props.forceShowCc || props._isMobile ? 'slide_hide_do_force_show' : ''}`,
    style: {
      marginBottom: '.25rem'
    }
  }, void 0, props?.showContent ? props?.validCc && props._loggedIn ? /*#__PURE__*/_jsx("div", {
    className: `hover_show ${props.forceShowCc || props._isMobile ? 'hover_show_Cc_force' : ''} Ecommerce_Credit_Card_Label`,
    style: {
      textAlign: 'center'
    }
  }, void 0, "Credit Card") : props?.cart?.items?.length > 0 ? /*#__PURE__*/_jsx("div", {
    style: {
      fontSize: '.75rem'
    }
  }, void 0, props?.free ? '' : 'Add a Credit Card to fulfill Purchase') : null : null, !props._loggedIn ? /*#__PURE__*/_jsx("button", {
    onClick: props?.handleToggleSettings,
    style: {
      fontSize: '.75rem',
      width: '100%'
    }
  }, void 0, "Please Sign In") : null, <CreditCard {...props} stagger={500} validCc={props?.validCc} setValidCc={props?.setValidCc} setShowContent={props?.setShowContent} setSolution={props?.setSolution} sx={{
    marginBottom: '.5rem',
    marginTop: '.25rem'
  }} children={props.ccChildren}></CreditCard>);
};
export default Module;