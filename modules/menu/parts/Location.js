"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _link = _interopRequireDefault(require("next/link"));
var _div;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  var _props$_loggedIn, _props$_loggedIn2;
  return <_react.default.Fragment>
            {(_props$_loggedIn = props._loggedIn) !== null && _props$_loggedIn !== void 0 && (_props$_loggedIn = _props$_loggedIn.meta) !== null && _props$_loggedIn !== void 0 && (_props$_loggedIn = _props$_loggedIn.locationMeta) !== null && _props$_loggedIn !== void 0 && _props$_loggedIn.city && (_props$_loggedIn2 = props._loggedIn) !== null && _props$_loggedIn2 !== void 0 && (_props$_loggedIn2 = _props$_loggedIn2.meta) !== null && _props$_loggedIn2 !== void 0 && (_props$_loggedIn2 = _props$_loggedIn2.locationMeta) !== null && _props$_loggedIn2 !== void 0 && _props$_loggedIn2.country ? <_react.default.Fragment>
                        <_link.default href="/settings?t=location" className={"menuLinkSelector"} onClick={props === null || props === void 0 ? void 0 : props.handleToggleSettings} style={{
        position: 'relative',
        alignSelf: 'center'
      }}>
                            <li>
                                {_div || (_div = <div className={"material-icons"}>flag</div>)}
                                <div>Location:&nbsp;
                                    {/* <span>{props?._loggedIn?.meta?.locationMeta?.city ?? null}</span><span>, </span> */}
                                    <span>{props === null || props === void 0 ? void 0 : props.resolvedCountry}</span>
                                </div>
                            </li>
                        </_link.default>
                    </_react.default.Fragment> : null}
        </_react.default.Fragment>;
};
var _default = exports["default"] = Module;