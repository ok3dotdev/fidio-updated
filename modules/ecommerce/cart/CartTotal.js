"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _ecommerce = require("/modules/utility/ecommerce/ecommerce.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  var _props$useCartOfCurre, _props$useCartOfCurre2, _props$useCartOfCurre3, _props$useCartOfCurre4;
  return <div className='flex Ecommerce_Price'>
            {props !== null && props !== void 0 && props.free ? <div className='Ecommerce_FreeBanner' style={{
      fontSize: '1.25rem'
    }}>Free</div> : <_react.default.Fragment>
                    <div style={{
        lineHeight: '1.4rem'
      }}>Cart Total:&nbsp;</div>
                    <div style={{
        fontSize: '1.25rem'
      }}>{(_props$useCartOfCurre = props === null || props === void 0 || (_props$useCartOfCurre2 = props.useCartOfCurrency) === null || _props$useCartOfCurre2 === void 0 || (_props$useCartOfCurre2 = _props$useCartOfCurre2.currency) === null || _props$useCartOfCurre2 === void 0 ? void 0 : _props$useCartOfCurre2.symbol) !== null && _props$useCartOfCurre !== void 0 ? _props$useCartOfCurre : null}{(0, _ecommerce.resolveMoneyFormat)((0, _ecommerce.calculateTotal)(props === null || props === void 0 ? void 0 : props.useCartOfCurrency, null, {
          region: (_props$useCartOfCurre3 = props === null || props === void 0 || (_props$useCartOfCurre4 = props.useCartOfCurrency) === null || _props$useCartOfCurre4 === void 0 ? void 0 : _props$useCartOfCurre4.currency) !== null && _props$useCartOfCurre3 !== void 0 ? _props$useCartOfCurre3 : null
        }, props))}</div>
                </_react.default.Fragment>}
        </div>;
};
var _default = exports["default"] = Module;