var _div;
import React from 'react';
import Link from 'next/link';
const Module = props => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, props._loggedIn?.meta?.locationMeta?.city && props._loggedIn?.meta?.locationMeta?.country ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Link, {
    href: "/settings?t=location",
    className: `menuLinkSelector`,
    onClick: props?.handleToggleSettings,
    style: {
      position: 'relative',
      alignSelf: 'center'
    }
  }, /*#__PURE__*/React.createElement("li", null, _div || (_div = /*#__PURE__*/React.createElement("div", {
    className: `material-icons`
  }, "flag")), /*#__PURE__*/React.createElement("div", null, "Location:\xA0", /*#__PURE__*/React.createElement("span", null, props?.resolvedCountry))))) : null);
};
export default Module;