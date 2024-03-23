"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  return <div>
            {props.useAppConfigLayout && props.appConfigLayout ? <_react.default.Fragment>{props.appConfigLayout}</_react.default.Fragment> : null}
		</div>;
};
var _default = exports["default"] = Module;