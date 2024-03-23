"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  return <_react.default.Fragment>
            <div>
                <div><div className='ProfilePage_ProfileName'>{props.profileData.user.username}</div></div>
            </div>
        </_react.default.Fragment>;
};
var _default = exports["default"] = Module;