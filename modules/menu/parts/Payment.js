"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _link = _interopRequireDefault(require("next/link"));
var _li;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  return <_react.default.Fragment>
            {props._loggedIn ? <_react.default.Fragment>
                        <_link.default href="/settings?t=payment" className={"menuLinkSelector"} onClick={props === null || props === void 0 ? void 0 : props.handleToggleSettings} style={{
        position: 'relative',
        alignSelf: 'center'
      }}>
                            {_li || (_li = <li>
                                <div className={"material-icons"}>payment</div>
                                <div>Payment Methods</div>
                            </li>)}
                        </_link.default>
                    </_react.default.Fragment> : null}
        </_react.default.Fragment>;
};
var _default = exports["default"] = Module;