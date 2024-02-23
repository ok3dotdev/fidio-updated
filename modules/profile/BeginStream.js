"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  var _props$profileData, _props$_loggedIn, _props$className, _props$ManagerStyles, _props$ManagerStyles2, _props$ManagerStyles3;
  var handleOpenBeginStream = _react["default"].useCallback(function (e) {
    props._LocalEventEmitter.dispatch('profilePage', {
      dispatch: 'openAdminPanel',
      menu: 'stream'
    });
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, props._adminAuth && (props === null || props === void 0 || (_props$profileData = props.profileData) === null || _props$profileData === void 0 || (_props$profileData = _props$profileData.user) === null || _props$profileData === void 0 ? void 0 : _props$profileData.id) === (props === null || props === void 0 || (_props$_loggedIn = props._loggedIn) === null || _props$_loggedIn === void 0 ? void 0 : _props$_loggedIn.identifier) && !props._currentlyStreaming ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat((_props$className = props === null || props === void 0 ? void 0 : props.className) !== null && _props$className !== void 0 ? _props$className : '')
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "".concat(props === null || props === void 0 || (_props$ManagerStyles = props.ManagerStyles) === null || _props$ManagerStyles === void 0 ? void 0 : _props$ManagerStyles.streamingButton, " ").concat(props === null || props === void 0 || (_props$ManagerStyles2 = props.ManagerStyles) === null || _props$ManagerStyles2 === void 0 ? void 0 : _props$ManagerStyles2.streamingButtonMini, " ").concat(props._managerOpen ? "".concat(props === null || props === void 0 || (_props$ManagerStyles3 = props.ManagerStyles) === null || _props$ManagerStyles3 === void 0 ? void 0 : _props$ManagerStyles3.streamingButtonOff) : ''),
    onClick: handleOpenBeginStream
  }, "Begin Stream")) : null);
};
var _default = exports["default"] = Module;