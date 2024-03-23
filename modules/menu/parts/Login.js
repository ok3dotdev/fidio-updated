import React from 'react';
import menuStyle from '../Menu.module.scss';
const Module = props => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, !props._loggedIn ? /*#__PURE__*/React.createElement("li", {
    className: `${menuStyle.menuLink} darkMenuLink`,
    onClick: props?.fireShowSignIn
  }, /*#__PURE__*/React.createElement("span", {
    className: `${menuStyle.menuLinkText}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${menuStyle.menuText}`
  }, "Login"), /*#__PURE__*/React.createElement("div", {
    className: `${menuStyle.menuLinkIconPair} ${menuStyle.maxIconWidth} person material-icons`
  }, "person")), /*#__PURE__*/React.createElement("div", {
    className: `${menuStyle.menuLinkIcon} ${menuStyle.maxIconWidth} person material-icons`
  }, "person")) : null);
};
export default Module;