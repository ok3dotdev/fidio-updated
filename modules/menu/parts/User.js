"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _MenuModule = _interopRequireDefault(require("../Menu.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  return <_react.default.Fragment>
            {props._loggedIn ? <_Tooltip.default title='Profile' placement='bottom'>
                        <li className={"".concat(_MenuModule["default"].menuLink, " darkMenuLink")} onClick={props === null || props === void 0 ? void 0 : props.handleToggleSettings}>
                            <span className={"".concat(_MenuModule["default"].menuLinkText)}>
                                <div className={"".concat(_MenuModule["default"].menuText)}>{props._loggedIn && props._loggedIn.username ? props._loggedIn.username : 'Dashboard'}</div>
                                <div className={"".concat(_MenuModule["default"].menuLinkIconPair, " ").concat(_MenuModule["default"].maxIconWidth, " person material-icons")}>person</div>
                            </span>
                            <div className={"".concat(_MenuModule["default"].menuLinkIcon, " ").concat(_MenuModule["default"].maxIconWidth, " person material-icons")}>person</div>
                        </li>
                    </_Tooltip.default> : null}
        </_react.default.Fragment>;
};
var _default = exports["default"] = Module;