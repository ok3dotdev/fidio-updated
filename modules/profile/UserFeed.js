"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _gridList = _interopRequireDefault(require("../video/player/gridList"));
var Module = function Module(props) {
  var _props$combinedFeed;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "ProfilePage_Feed"
  }, /*#__PURE__*/_react["default"].createElement(_gridList["default"], (0, _extends2["default"])({
    loggedIn: props._loggedIn,
    _gridItems: (_props$combinedFeed = props === null || props === void 0 ? void 0 : props.combinedFeed) !== null && _props$combinedFeed !== void 0 ? _props$combinedFeed : [],
    _gridListType: 'video'
  }, props)));
};
var _default = exports["default"] = Module;