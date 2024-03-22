"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _WatchPageModule = _interopRequireDefault(require("./WatchPage.module.scss"));
var Module = function Module(props) {
  var _props$className;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat((_props$className = props === null || props === void 0 ? void 0 : props.className) !== null && _props$className !== void 0 ? _props$className : '', " ").concat(_WatchPageModule["default"].videoContainer, " ").concat(props !== null && props !== void 0 && props.mobileStyleConfigs ? "".concat(_WatchPageModule["default"].mobileVideoPlayer) : null, " WatchPage_VideoContainer")
  }, /*#__PURE__*/_react["default"].createElement("video", {
    id: "my-player",
    "class": "".concat(_WatchPageModule["default"].videoPlayer, " video-js WatchPage_VideoPlayer"),
    style: {
      maxHeight: "calc(100vh - ".concat(props === null || props === void 0 ? void 0 : props.menuHeight)
    },
    controls: true,
    preload: "auto",
    playsInline: true,
    poster: props === null || props === void 0 ? void 0 : props.currentPoster
  }, /*#__PURE__*/_react["default"].createElement("p", {
    "class": "vjs-no-js"
  }, "To view this video please enable JavaScript, and consider upgrading to a web browser that", /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://videojs.com/html5-video-support/",
    target: "_blank"
  }, "supports HTML5 video"))));
};
var _default = exports["default"] = Module;