"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _div, _div2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  return <_react.default.Fragment>
            <li onClick={props === null || props === void 0 ? void 0 : props.fireShareFeedback}>
                {_div || (_div = <div className={"material-icons"}>feedback</div>)}
                {_div2 || (_div2 = <div>Share Feedback</div>)}
            </li>
        </_react.default.Fragment>;
};
var _default = exports["default"] = Module;