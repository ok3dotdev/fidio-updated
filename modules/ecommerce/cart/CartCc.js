function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { CreditCard } from '../../payment';
const Module = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: `Ecommerce_Credit_Card_Module_Container ${props?.validCc ? 'slide_hide slide_hide_do_full_show' : 'slide_hide slide_hide_visible'} ${props.forceShowCc || props._isMobile ? 'slide_hide_do_force_show' : ''}`,
    style: {
      marginBottom: '.25rem'
    }
  }, props?.showContent ? props?.validCc && props._loggedIn ? /*#__PURE__*/React.createElement("div", {
    className: `hover_show ${props.forceShowCc || props._isMobile ? 'hover_show_Cc_force' : ''} Ecommerce_Credit_Card_Label`,
    style: {
      textAlign: 'center'
    }
  }, "Credit Card") : props?.cart?.items?.length > 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.75rem'
    }
  }, props?.free ? '' : 'Add a Credit Card to fulfill Purchase') : null : null, !props._loggedIn ? /*#__PURE__*/React.createElement("button", {
    onClick: props?.handleToggleSettings,
    style: {
      fontSize: '.75rem',
      width: '100%'
    }
  }, "Please Sign In") : null, /*#__PURE__*/React.createElement(CreditCard, _extends({}, props, {
    stagger: 500,
    validCc: props?.validCc,
    setValidCc: props?.setValidCc,
    setShowContent: props?.setShowContent,
    setSolution: props?.setSolution,
    sx: {
      marginBottom: '.5rem',
      marginTop: '.25rem'
    },
    children: props.ccChildren
  })));
};
export default Module;