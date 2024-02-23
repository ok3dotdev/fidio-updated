"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _manager = require("../streaming/manager");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Module = function Module(props) {
  var _props$className, _props$managerName;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat((_props$className = props === null || props === void 0 ? void 0 : props.className) !== null && _props$className !== void 0 ? _props$className : '')
  }, props !== null && props !== void 0 && props.adminAuth ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "AdminPanel_Container ".concat(props !== null && props !== void 0 && props.adminPanelState ? 'AdminPanel_ContainerOpen' : ''),
    ref: props === null || props === void 0 ? void 0 : props.adminPanelContainerRef
  }, /*#__PURE__*/_react["default"].createElement(_manager.Manager, _extends({}, props, {
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