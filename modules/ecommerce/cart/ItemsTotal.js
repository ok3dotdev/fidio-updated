var _div;
import React from 'react';
import { calculateTotal, resolveMoneyFormat } from '/modules/utility/ecommerce/ecommerce.js';
const Module = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex Ecommerce_Price"
  }, _div || (_div = /*#__PURE__*/React.createElement("div", null, "Items:\xA0")), /*#__PURE__*/React.createElement("div", null, props?.useCartOfCurrency?.currency?.symbol ?? null, resolveMoneyFormat(calculateTotal(props?.useCartOfCurrency, null, {
    region: props?.useCartOfCurrency?.currency ?? null
  }, props))));
};
export default Module;