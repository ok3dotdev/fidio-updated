var _div, _div2;
import React from 'react';
import Link from 'next/link';
import menuStyle from '../Menu.module.scss';
const Module = props => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, props._loggedIn ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Link, {
    href: "/p",
    className: `menuLinkSelector`,
    onClick: props?.handleToggleSettings,
    style: {
      position: 'relative',
      alignSelf: 'center'
    }
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      padding: '.75rem'
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: `${menuStyle.profileIcon}`,
    src: props?._loggedIn?.icon ?? ''
  }), /*#__PURE__*/React.createElement("div", {
    className: `${menuStyle.profileItemDataContainer}`
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: '700'
    }
  }, "@", props._loggedIn.username), /*#__PURE__*/React.createElement("a", {
    href: "/p",
    className: "a",
    style: {
      alignItems: 'center',
      display: 'flex',
      gap: '.25rem'
    }
  }, _div || (_div = /*#__PURE__*/React.createElement("div", {
    className: `material-icons`
  }, "account_box")), _div2 || (_div2 = /*#__PURE__*/React.createElement("div", null, "View Your Profile"))))))) : null);
};
export default Module;