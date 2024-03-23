var _li;
import React from 'react';
import Link from 'next/link';
import menuStyle from '../Menu.module.scss';
const Module = props => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Link, {
    href: "/p?a=golive",
    className: `menuLinkSelector slideGradient`,
    onClick: props?.handleToggleSettings,
    style: {
      position: 'relative',
      alignSelf: 'center'
    }
  }, _li || (_li = /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("div", {
    className: `material-icons`
  }, "stream"), /*#__PURE__*/React.createElement("div", null, "Go Live")))));
};
export default Module;