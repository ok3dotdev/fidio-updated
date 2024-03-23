import React from 'react';
const Module = props => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, (props?.validCc || props?.free) && props?.cart?.items?.length > 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    style: {
      width: '100%',
      marginBottom: '.25rem'
    },
    onClick: props?.handlePerformPurchase
  }, props?.free ? 'Get Now' : 'Purchase'), props?.pageError?.message && props?.pageError?.placement == 'purchase' ? /*#__PURE__*/React.createElement("div", {
    className: "error",
    style: {
      marginBottom: '.125rem'
    },
    onClick: props?.handleClearError
  }, props?.pageError?.message ?? '') : null) : null);
};
export default Module;