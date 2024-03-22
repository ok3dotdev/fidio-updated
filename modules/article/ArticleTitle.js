"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _ArticleModule = _interopRequireDefault(require("./Article.module.scss"));
var Module = function Module(props) {
  var _props$articleData$ti, _props$articleData;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ArticleModule["default"].title)
  }, (_props$articleData$ti = props === null || props === void 0 || (_props$articleData = props.articleData) === null || _props$articleData === void 0 ? void 0 : _props$articleData.title) !== null && _props$articleData$ti !== void 0 ? _props$articleData$ti : '')));
};
var _default = exports["default"] = Module;