function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import GridList from '../video/player/gridList';
const Module = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "ProfilePage_Feed"
  }, /*#__PURE__*/React.createElement(GridList, _extends({
    loggedIn: props._loggedIn,
    _gridItems: props?.combinedFeed ?? [],
    _gridListType: 'video'
  }, props)));
};
export default Module;