import React from 'react';
import Link from 'next/link';
const Module = props => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, props._loggedIn && props.mustBeLoggedIn || !props.mustBeLoggedIn ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Link, {
    href: `${props.href}`,
    className: `menuLinkSelector`,
    onClick: props?.handleToggleSettings,
    style: {
      position: 'relative',
      alignSelf: 'center'
    }
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("div", {
    className: `material-icons`
  }, props.materialIcon), /*#__PURE__*/React.createElement("div", null, props.text)))) : null);
};
export default Module;