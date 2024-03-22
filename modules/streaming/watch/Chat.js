"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _WatchPageModule = _interopRequireDefault(require("./WatchPage.module.scss"));
var _chat = require("../chat");
var Module = function Module(props) {
  var _props$className, _props$watchData, _props$watchData2;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat((_props$className = props === null || props === void 0 ? void 0 : props.className) !== null && _props$className !== void 0 ? _props$className : '', " ").concat(_WatchPageModule["default"].chatContainer, " ").concat(props !== null && props !== void 0 && props.chatState ? "".concat(_WatchPageModule["default"].chatOpen) : "".concat(_WatchPageModule["default"].chatClosed), " ").concat(!(props !== null && props !== void 0 && props.chatState) && props !== null && props !== void 0 && props._isMobile ? "".concat(_WatchPageModule["default"].chatClosedMobile) : null, " WatchPage_ChatContainer")
  }, /*#__PURE__*/_react["default"].createElement(_chat.Chat, (0, _extends2["default"])({}, props, {
    setMobileStyleConfigs: props === null || props === void 0 ? void 0 : props.handleSetMobileStyleConfigs,
    chatFor: props === null || props === void 0 || (_props$watchData = props.watchData) === null || _props$watchData === void 0 ? void 0 : _props$watchData.id,
    videoStatus: props === null || props === void 0 || (_props$watchData2 = props.watchData) === null || _props$watchData2 === void 0 ? void 0 : _props$watchData2.status,
    chatState: props === null || props === void 0 ? void 0 : props.chatState
  })));
};
var _default = exports["default"] = Module;