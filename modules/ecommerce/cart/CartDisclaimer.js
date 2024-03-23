import React from 'react';
const Module = props => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, props?.validCc && props?.cart?.items?.length > 0 && props?._loggedIn || props?.free ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#222222',
      borderRadius: '.5rem',
      fontSize: '.75rem',
      lineHeight: '.7rem',
      marginBottom: '.25rem',
      padding: '.25rem .5rem'
    }
  }, "Placing your order above will fulfill payment to the shop vendors and confirms your agreement with ", props.siteTitle, " terms and conditions") : null);
};
export default Module;