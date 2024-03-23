"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _ArticleModule = _interopRequireDefault(require("./Article.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  var _props$articleData$ti, _props$articleData;
  return <_react.default.Fragment>
            <div>
                <div className={"".concat(_ArticleModule["default"].title)}>{(_props$articleData$ti = props === null || props === void 0 || (_props$articleData = props.articleData) === null || _props$articleData === void 0 ? void 0 : _props$articleData.title) !== null && _props$articleData$ti !== void 0 ? _props$articleData$ti : ''}</div>
            </div>
        </_react.default.Fragment>;
};
var _default = exports["default"] = Module;