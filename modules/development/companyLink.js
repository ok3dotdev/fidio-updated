var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
import Link from 'next/link';
import React from 'react';
import styles from './documentation.module.scss';
const Module = props => {
  return /*#__PURE__*/_jsx("div", {
    className: `${props.className} CompanyLink_Container`,
    style: {
      alignSelf: 'center'
    }
  }, void 0, props?._adminAuth?.adminc?.admin && props?._loggedIn ? /*#__PURE__*/_jsx("div", {
    className: `${styles.companyLink}`,
    style: {
      background: 'grey',
      borderRadius: '1rem',
      padding: '.25rem 2rem'
    }
  }, void 0, /*#__PURE__*/_jsx(Link, {
    href: `${props.devLocal ? `${props.devAddress}/admin` : `https://${props.domainUrl}/admin`}`
  }, void 0, props?.dborigin && props?.dborigin?.charAt ? `${props.dborigin.charAt(0).toUpperCase()}${props.dborigin.slice(1, props.dborigin.length)}` : null)) : null);
};
export default Module;