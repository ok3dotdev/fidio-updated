function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import Order from './Order';
const Module = props => {
  const receiptData = props?.receiptData;
  return /*#__PURE__*/React.createElement("div", {
    className: `${props.className}`
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '680px',
      margin: '0 auto',
      padding: '0 1rem'
    }
  }, receiptData ? /*#__PURE__*/React.createElement(Order, _extends({
    order: receiptData,
    hideView: true,
    expanded: true
  }, props)) : null));
};
export default Module;