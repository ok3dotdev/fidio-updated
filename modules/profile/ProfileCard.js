"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  var _props$className;
  return <div className={"".concat((_props$className = props === null || props === void 0 ? void 0 : props.className) !== null && _props$className !== void 0 ? _props$className : '', " PagePadding pTop ProfilePage_MetaContainer")}>
            <img className='ProfilePage_Icon' src={props.profileData && props.profileData.user && props.profileData.user.icon ? props.profileData.user.icon : ''} />
            <div>
                <div><div className='ProfilePage_ProfileName'>{props.profileData.user.username}</div></div>
            </div>
        </div>;
};
var _default = exports["default"] = Module;