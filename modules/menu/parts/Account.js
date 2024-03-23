var _div, _div2;
var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
import React from 'react';
import Link from 'next/link';
import menuStyle from '../Menu.module.scss';
const Module = props => {
  return /*#__PURE__*/_jsx(React.Fragment, {}, void 0, props._loggedIn ? /*#__PURE__*/_jsx(React.Fragment, {}, void 0, /*#__PURE__*/_jsx(Link, {
    href: "/p",
    className: `menuLinkSelector`,
    onClick: props?.handleToggleSettings,
    style: {
      position: 'relative',
      alignSelf: 'center'
    }
  }, void 0, /*#__PURE__*/_jsx("li", {
    style: {
      padding: '.75rem'
    }
  }, void 0, /*#__PURE__*/_jsx("img", {
    className: `${menuStyle.profileIcon}`,
    src: props?._loggedIn?.icon ?? ''
  }), /*#__PURE__*/_jsx("div", {
    className: `${menuStyle.profileItemDataContainer}`
  }, void 0, /*#__PURE__*/_jsx("div", {
    style: {
      fontWeight: '700'
    }
  }, void 0, "@", props._loggedIn.username), /*#__PURE__*/_jsx("a", {
    href: "/p",
    className: "a",
    style: {
      alignItems: 'center',
      display: 'flex',
      gap: '.25rem'
    }
  }, void 0, _div || (_div = /*#__PURE__*/_jsx("div", {
    className: `material-icons`
  }, void 0, "account_box")), _div2 || (_div2 = /*#__PURE__*/_jsx("div", {}, void 0, "View Your Profile"))))))) : null);
};
export default Module;