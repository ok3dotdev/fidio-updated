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
  var _props$_adminAuth;
  return <_react.default.Fragment>
            {props !== null && props !== void 0 && (_props$_adminAuth = props._adminAuth) !== null && _props$_adminAuth !== void 0 && (_props$_adminAuth = _props$_adminAuth.adminc) !== null && _props$_adminAuth !== void 0 && _props$_adminAuth.admin && props !== null && props !== void 0 && props._adminAuth.userid && props._loggedIn.identifier && props._adminAuth.userid === props._loggedIn.identifier ? <_link.default href="/admin" className={"menuLinkSelector"} onClick={props === null || props === void 0 ? void 0 : props.handleToggleSettings} style={{
      position: 'relative',
      alignSelf: 'center'
    }}>
                        {_li || (_li = <li>
                            <div className={"material-icons"}>key</div>
                            <div>Admin</div>
                        </li>)}
                    </_link.default> : null}
        </_react.default.Fragment>;
};
var _default = exports["default"] = Module;