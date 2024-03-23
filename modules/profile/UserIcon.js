"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  return <_react.default.Fragment>
            <img className='ProfilePage_Icon' src={props.profileData && props.profileData.user && props.profileData.user.icon ? props.profileData.user.icon : ''} />
        </_react.default.Fragment>;
};
var _default = exports["default"] = Module;