function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Manager } from '../streaming/manager';
const Module = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: `${props?.className ?? ''}`
  }, props?.adminAuth ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: `AdminPanel_Container ${props?.adminPanelState ? 'AdminPanel_ContainerOpen' : ''}`,
    ref: props?.adminPanelContainerRef
  }, /*#__PURE__*/React.createElement(Manager, _extends({}, props, {
    adminPanelState: props?.adminPanelState
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: '.5rem'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: props?.toggleAdminPanel
  }, props?.adminPanelState ? 'Close' : 'Open', " ", props?.managerName ?? 'Manager'))) : null);
};
export default Module;