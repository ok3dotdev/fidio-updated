"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _gridList = _interopRequireDefault(require("../video/player/gridList"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Module = function Module(props) {
  var _props$combinedFeed;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "ProfilePage_Feed"
  }, /*#__PURE__*/_react["default"].createElement(_gridList["default"], _extends({
    loggedIn: props._loggedIn,
    _gridItems: (_props$combinedFeed = props === null || props === void 0 ? void 0 : props.combinedFeed) !== null && _props$combinedFeed !== void 0 ? _props$combinedFeed : [],
    _gridListType: 'video'
  }, props)));
};
var _default = exports["default"] = Module;