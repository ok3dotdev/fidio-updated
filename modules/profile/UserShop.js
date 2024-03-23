"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _shop = require("../ecommerce/shop");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  return <div>
            <_shop.Shop {...Object.assign({}, props, {
      profile: true
    })}></_shop.Shop>
        </div>;
};
var _default = exports["default"] = Module;