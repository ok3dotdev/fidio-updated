import React from 'react';
const Module = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: `${props?.className ?? ''} PagePadding pTop ProfilePage_MetaContainer`
  }, /*#__PURE__*/React.createElement("img", {
    className: "ProfilePage_Icon",
    src: props.profileData && props.profileData.user && props.profileData.user.icon ? props.profileData.user.icon : ''
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ProfilePage_ProfileName"
  }, props.profileData.user.username))));
};
export default Module;