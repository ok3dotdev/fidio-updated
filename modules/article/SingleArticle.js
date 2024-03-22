"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _ArticleModule = _interopRequireDefault(require("./Article.module.scss"));
var Module = function Module(props) {
  var _props$articleData, _props$htmlRef;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, props !== null && props !== void 0 && props.articleHtml && props !== null && props !== void 0 && (_props$articleData = props.articleData) !== null && _props$articleData !== void 0 && _props$articleData.approved ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    dangerouslySetInnerHTML: props !== null && props !== void 0 && props.createMarkup ? props.createMarkup() : null,
    ref: (_props$htmlRef = props === null || props === void 0 ? void 0 : props.htmlRef) !== null && _props$htmlRef !== void 0 ? _props$htmlRef : null
  })) : null);
};
var _default = exports["default"] = Module;