var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
import React from 'react';
import { calculateTotal, resolveMoneyFormat } from '/modules/utility/ecommerce/ecommerce.js';
const Module = props => {
  return /*#__PURE__*/_jsx("div", {
    className: "flex Ecommerce_Price"
  }, void 0, props?.free ? /*#__PURE__*/_jsx("div", {
    className: "Ecommerce_FreeBanner",
    style: {
      fontSize: '1.25rem'
    }
  }, void 0, "Free") : /*#__PURE__*/_jsx(React.Fragment, {}, void 0, /*#__PURE__*/_jsx("div", {
    style: {
      lineHeight: '1.4rem'
    }
  }, void 0, "Cart Total:\xA0"), /*#__PURE__*/_jsx("div", {
    style: {
      fontSize: '1.25rem'
    }
  }, void 0, props?.useCartOfCurrency?.currency?.symbol ?? null, resolveMoneyFormat(calculateTotal(props?.useCartOfCurrency, null, {
    region: props?.useCartOfCurrency?.currency ?? null
  }, props)))));
};
export default Module;