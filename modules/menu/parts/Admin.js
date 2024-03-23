var _li;
import React from 'react';
import Link from 'next/link';
const Module = props => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, props?._adminAuth?.adminc?.admin && props?._adminAuth.userid && props._loggedIn.identifier && props._adminAuth.userid === props._loggedIn.identifier ? /*#__PURE__*/React.createElement(Link, {
    href: "/admin",
    className: `menuLinkSelector`,
    onClick: props?.handleToggleSettings,
    style: {
      position: 'relative',
      alignSelf: 'center'
    }
  }, _li || (_li = /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("div", {
    className: `material-icons`
  }, "key"), /*#__PURE__*/React.createElement("div", null, "Admin")))) : null);
};
export default Module;