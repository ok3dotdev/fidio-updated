"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireDefault(require("react"));
var _ArticleModule = _interopRequireDefault(require("./Article.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  var _props$articleData, _props$articleData$au, _props$articleData2;
  return <_react.default.Fragment>
            <span className={"".concat(_ArticleModule["default"].author)}><_link.default href={"/p?u=".concat(props === null || props === void 0 || (_props$articleData = props.articleData) === null || _props$articleData === void 0 || (_props$articleData = _props$articleData.authorData) === null || _props$articleData === void 0 ? void 0 : _props$articleData.id)}>{(_props$articleData$au = props === null || props === void 0 || (_props$articleData2 = props.articleData) === null || _props$articleData2 === void 0 || (_props$articleData2 = _props$articleData2.authorData) === null || _props$articleData2 === void 0 ? void 0 : _props$articleData2.username) !== null && _props$articleData$au !== void 0 ? _props$articleData$au : ''}</_link.default></span>
        </_react.default.Fragment>;
};
var _default = exports["default"] = Module;