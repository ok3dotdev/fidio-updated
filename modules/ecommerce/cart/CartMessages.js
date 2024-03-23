import React from 'react';
const Module = props => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, props?.cartMessages?.length > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "flex gap-p3",
    style: {
      paddingBottom: '.25rem'
    }
  }, props.cartMessages.map(m => /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(34, 34, 34, 1)',
      borderRadius: '.5rem',
      padding: '.25rem',
      width: '-webkit-fill-available',
      textAlign: 'center',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", null, m.message), m.href ? /*#__PURE__*/React.createElement("span", null, "\xA0", /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("a", {
    href: m.href
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      padding: '.25rem 1rem'
    }
  }, m.hrefCta)))) : null))) : null);
};
export default Module;