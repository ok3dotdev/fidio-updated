"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Order = _interopRequireDefault(require("./Order"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  var receiptData = props === null || props === void 0 ? void 0 : props.receiptData;
  return <div className={"".concat(props.className)}>
            <div style={{
      maxWidth: '680px',
      margin: '0 auto',
      padding: '0 1rem'
    }}>
                {receiptData ? <_Order.default {...Object.assign({
        order: receiptData,
        hideView: true,
        expanded: true
      }, props)} /> : null}
            </div>
        </div>;
};
var _default = exports["default"] = Module;