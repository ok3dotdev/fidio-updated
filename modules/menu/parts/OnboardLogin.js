function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { SignIn } from '../../onboarding/signin';
const Module = props => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, props._openMenu && props._openMenu.currentMenu && props._openMenu.currentMenu == 'main_settings' ? !props._loggedIn ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '.5rem .5rem .125rem'
    }
  }, "Sign In to ", props?.siteTitle ?? 'Tycoon', " Below"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '3px solid grey',
      margin: '.25rem 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '.5rem',
      paddingTop: '0'
    }
  }, /*#__PURE__*/React.createElement(SignIn, _extends({}, props, {
    maxWidth: '100%'
  })))) : null : null);
};
export default Module;