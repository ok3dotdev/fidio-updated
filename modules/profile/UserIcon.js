import React from 'react';
const Module = props => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    className: "ProfilePage_Icon",
    src: props.profileData && props.profileData.user && props.profileData.user.icon ? props.profileData.user.icon : ''
  }));
};
export default Module;