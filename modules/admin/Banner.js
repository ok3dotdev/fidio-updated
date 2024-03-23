import React from 'react';
import Link from 'next/link';
import AdminStyles from './Admin.module.scss';
const Module = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: `${AdminStyles.adminBannerContainer} Admin_BannerContainer`,
    style: {
      fontSize: '.85rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: `${AdminStyles.adminBannerInternalContainer}`
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      textWrap: 'nowrap'
    }
  }, "Welcome ", /*#__PURE__*/React.createElement(Link, {
    href: `/p?u=${props?._loggedIn?.username ?? props?._loggedIn?.identifier}`,
    style: {
      fontWeight: '600'
    }
  }, props?._loggedIn?.username ?? props?._loggedIn?.identifier))), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-p5",
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Link, {
    href: "/",
    style: {
      fontWeight: '600'
    }
  }, props.domainUrl), /*#__PURE__*/React.createElement("div", {
    style: {
      textWrap: 'nowrap'
    }
  }, props?._adminAuth?.adminc?.access ? `(admin access: ${props?._adminAuth?.adminc?.access})` : ''))));
};
export default Module;