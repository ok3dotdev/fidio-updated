"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _link = _interopRequireDefault(require("next/link"));
var _MenuModule = _interopRequireDefault(require("../Menu.module.scss"));
var _li;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  return <_react.default.Fragment>
            <_link.default href="/p?a=golive" className={"menuLinkSelector slideGradient"} onClick={props === null || props === void 0 ? void 0 : props.handleToggleSettings} style={{
      position: 'relative',
      alignSelf: 'center'
    }}>
                {_li || (_li = <li>
                    <div className={"material-icons"}>stream</div>
                    <div>Go Live</div>
                </li>)}
            </_link.default>
        </_react.default.Fragment>;
};
var _default = exports["default"] = Module;