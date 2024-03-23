var _li;
import React from 'react';
import Link from 'next/link';
const Module = props => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, props._loggedIn ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Link, {
    href: "/offers",
    className: `menuLinkSelector`,
    onClick: props?.handleToggleSettings,
    style: {
      position: 'relative',
      alignSelf: 'center'
    }
  }, _li || (_li = /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("div", {
    className: `material-icons`
  }, "redeem"), /*#__PURE__*/React.createElement("div", null, "Offers and Gifts"))))) : null);
};
export default Module;