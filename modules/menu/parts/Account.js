"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _link = _interopRequireDefault(require("next/link"));
var _MenuModule = _interopRequireDefault(require("../Menu.module.scss"));
var _div, _div2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  var _props$_loggedIn$icon, _props$_loggedIn;
  return <_react.default.Fragment>
            {props._loggedIn ? <_react.default.Fragment>
                        <_link.default href="/p" className={"menuLinkSelector"} onClick={props === null || props === void 0 ? void 0 : props.handleToggleSettings} style={{
        position: 'relative',
        alignSelf: 'center'
      }}>
                            <li style={{
          padding: '.75rem'
        }}>
                                <img className={"".concat(_MenuModule["default"].profileIcon)} src={(_props$_loggedIn$icon = props === null || props === void 0 || (_props$_loggedIn = props._loggedIn) === null || _props$_loggedIn === void 0 ? void 0 : _props$_loggedIn.icon) !== null && _props$_loggedIn$icon !== void 0 ? _props$_loggedIn$icon : ''} />
                                <div className={"".concat(_MenuModule["default"].profileItemDataContainer)}>
                                    <div style={{
              fontWeight: '700'
            }}>@{props._loggedIn.username}</div>
                                    <a href='/p' className='a' style={{
              alignItems: 'center',
              display: 'flex',
              gap: '.25rem'
            }}>
                                        {_div || (_div = <div className={"material-icons"}>account_box</div>)}
                                        {_div2 || (_div2 = <div>View Your Profile</div>)}
                                    </a>
                                </div>
                            </li>
                        </_link.default>
                    </_react.default.Fragment> : null}
        </_react.default.Fragment>;
};
var _default = exports["default"] = Module;