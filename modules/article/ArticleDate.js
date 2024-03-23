"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _ArticleModule = _interopRequireDefault(require("./Article.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  var _props$articleData;
  var useDate = props !== null && props !== void 0 && (_props$articleData = props.articleData) !== null && _props$articleData !== void 0 && _props$articleData.publish && !isNaN(Number(props.articleData.publish)) && !isNaN(new Date(Number(props.articleData.publish))) ? new Date(Number(props.articleData.publish)) : null;
  var dateFormatted = useDate ? useDate.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }) : null;
  return <_react.default.Fragment>
            {dateFormatted ? <div>{dateFormatted} at {useDate.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric'
      })}</div> : null}
        </_react.default.Fragment>;
};
var _default = exports["default"] = Module;