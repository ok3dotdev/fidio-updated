var _div, _div2;
import React from 'react';
const Module = props => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, props._loggedIn ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("li", {
    onClick: props?.handleLogout
  }, _div || (_div = /*#__PURE__*/React.createElement("div", {
    className: `material-icons`
  }, "logout")), _div2 || (_div2 = /*#__PURE__*/React.createElement("div", null, "Sign Out")))) : null);
};
export default Module;