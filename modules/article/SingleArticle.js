"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _ArticleModule = _interopRequireDefault(require("./Article.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  var _props$articleData, _props$htmlRef;
  return <_react.default.Fragment>
            {props !== null && props !== void 0 && props.articleHtml && props !== null && props !== void 0 && (_props$articleData = props.articleData) !== null && _props$articleData !== void 0 && _props$articleData.approved ? <div>
                        <div dangerouslySetInnerHTML={props !== null && props !== void 0 && props.createMarkup ? props.createMarkup() : null} ref={(_props$htmlRef = props === null || props === void 0 ? void 0 : props.htmlRef) !== null && _props$htmlRef !== void 0 ? _props$htmlRef : null}></div>
                    </div> : null}
        </_react.default.Fragment>;
};
var _default = exports["default"] = Module;