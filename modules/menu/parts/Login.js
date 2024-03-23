"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _MenuModule = _interopRequireDefault(require("../Menu.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  return <_react.default.Fragment>
            {!props._loggedIn ? <li className={"".concat(_MenuModule["default"].menuLink, " darkMenuLink")} onClick={props === null || props === void 0 ? void 0 : props.fireShowSignIn}>
                    <span className={"".concat(_MenuModule["default"].menuLinkText)}>
                        <div className={"".concat(_MenuModule["default"].menuText)}>Login</div>
                        <div className={"".concat(_MenuModule["default"].menuLinkIconPair, " ").concat(_MenuModule["default"].maxIconWidth, " person material-icons")}>person</div>
                    </span>
                    <div className={"".concat(_MenuModule["default"].menuLinkIcon, " ").concat(_MenuModule["default"].maxIconWidth, " person material-icons")}>person</div>
                </li> : null}
        </_react.default.Fragment>;
};
var _default = exports["default"] = Module;