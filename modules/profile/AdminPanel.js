"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _manager = require("../streaming/manager");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  var _props$className, _props$managerName;
  return <div className={"".concat((_props$className = props === null || props === void 0 ? void 0 : props.className) !== null && _props$className !== void 0 ? _props$className : '')}>
            {props !== null && props !== void 0 && props.adminAuth ? <div>
                        <div className={"AdminPanel_Container ".concat(props !== null && props !== void 0 && props.adminPanelState ? 'AdminPanel_ContainerOpen' : '')} ref={props === null || props === void 0 ? void 0 : props.adminPanelContainerRef}>
                            <_manager.Manager {...Object.assign({}, props, {
          adminPanelState: props === null || props === void 0 ? void 0 : props.adminPanelState
        })}></_manager.Manager>
                        </div>
                        <div style={{
        position: 'absolute',
        right: '.5rem'
      }}>
                            <button onClick={props === null || props === void 0 ? void 0 : props.toggleAdminPanel}>{props !== null && props !== void 0 && props.adminPanelState ? 'Close' : 'Open'} {(_props$managerName = props === null || props === void 0 ? void 0 : props.managerName) !== null && _props$managerName !== void 0 ? _props$managerName : 'Manager'}</button>
                        </div>
                    </div> : null}
        </div>;
};
var _default = exports["default"] = Module;