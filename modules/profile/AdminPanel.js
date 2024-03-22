"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _manager = require("../streaming/manager");
var Module = function Module(props) {
  var _props$className, _props$managerName;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat((_props$className = props === null || props === void 0 ? void 0 : props.className) !== null && _props$className !== void 0 ? _props$className : '')
  }, props !== null && props !== void 0 && props.adminAuth ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "AdminPanel_Container ".concat(props !== null && props !== void 0 && props.adminPanelState ? 'AdminPanel_ContainerOpen' : ''),
    ref: props === null || props === void 0 ? void 0 : props.adminPanelContainerRef
  }, /*#__PURE__*/_react["default"].createElement(_manager.Manager, (0, _extends2["default"])({}, props, {
    adminPanelState: props === null || props === void 0 ? void 0 : props.adminPanelState
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: 'absolute',
      right: '.5rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: props === null || props === void 0 ? void 0 : props.toggleAdminPanel
  }, props !== null && props !== void 0 && props.adminPanelState ? 'Close' : 'Open', " ", (_props$managerName = props === null || props === void 0 ? void 0 : props.managerName) !== null && _props$managerName !== void 0 ? _props$managerName : 'Manager'))) : null);
};
var _default = exports["default"] = Module;