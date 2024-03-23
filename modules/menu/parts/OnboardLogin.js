"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _signin = require("../../onboarding/signin");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  var _props$siteTitle;
  return <_react.default.Fragment>
            {props._openMenu && props._openMenu.currentMenu && props._openMenu.currentMenu == 'main_settings' ? !props._loggedIn ? <_react.default.Fragment>
                            <div style={{
        padding: '.5rem .5rem .125rem'
      }}>Sign In to {(_props$siteTitle = props === null || props === void 0 ? void 0 : props.siteTitle) !== null && _props$siteTitle !== void 0 ? _props$siteTitle : 'Tycoon'} Below</div>
                            <div style={{
        borderTop: '3px solid grey',
        margin: '.25rem 0'
      }}></div>
                            <div style={{
        padding: '.5rem',
        paddingTop: '0'
      }}>
                                <_signin.SignIn {...Object.assign({}, props, {
          maxWidth: '100%'
        })}></_signin.SignIn>
                            </div>
                        </_react.default.Fragment> : null : null}
        </_react.default.Fragment>;
};
var _default = exports["default"] = Module;