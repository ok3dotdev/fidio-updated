import React from 'react';
import { calculateTotal, resolveMoneyFormat } from '/modules/utility/ecommerce/ecommerce.js';
const Module = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex Ecommerce_Price"
  }, props?.free ? /*#__PURE__*/React.createElement("div", {
    className: "Ecommerce_FreeBanner",
    style: {
      fontSize: '1.25rem'
    }
  }, "Free") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: '1.4rem'
    }
  }, "Cart Total:\xA0"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.25rem'
    }
  }, props?.useCartOfCurrency?.currency?.symbol ?? null, resolveMoneyFormat(calculateTotal(props?.useCartOfCurrency, null, {
    region: props?.useCartOfCurrency?.currency ?? null
  }, props)))));
};
export default Module;