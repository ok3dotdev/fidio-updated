var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
import React from 'react';
import { SignIn } from '../../onboarding/signin';
const Module = props => {
  return /*#__PURE__*/_jsx(React.Fragment, {}, void 0, props._openMenu && props._openMenu.currentMenu && props._openMenu.currentMenu == 'main_settings' ? !props._loggedIn ? /*#__PURE__*/_jsx(React.Fragment, {}, void 0, /*#__PURE__*/_jsx("div", {
    style: {
      padding: '.5rem .5rem .125rem'
    }
  }, void 0, "Sign In to ", props?.siteTitle ?? 'Tycoon', " Below"), /*#__PURE__*/_jsx("div", {
    style: {
      borderTop: '3px solid grey',
      margin: '.25rem 0'
    }
  }), /*#__PURE__*/_jsx("div", {
    style: {
      padding: '.5rem',
      paddingTop: '0'
    }
  }, void 0, <SignIn {...props} maxWidth={'100%'}></SignIn>)) : null : null);
};
export default Module;