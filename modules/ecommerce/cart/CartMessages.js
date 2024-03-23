"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Module = function Module(props) {
  var _props$cartMessages;
  return <_react.default.Fragment>
            {(props === null || props === void 0 || (_props$cartMessages = props.cartMessages) === null || _props$cartMessages === void 0 ? void 0 : _props$cartMessages.length) > 0 ? <div className='flex gap-p3' style={{
      paddingBottom: '.25rem'
    }}>
                        {props.cartMessages.map(function (m) {
        return <div style={_defineProperty({
          background: 'rgba(34, 34, 34, 1)',
          borderRadius: '.5rem',
          padding: '.25rem',
          width: '-webkit-fill-available',
          textAlign: 'center'
        }, "width", '100%')}>
                                    <div>{m.message}</div>
                                    {m.href ? <span>&nbsp;
                                                <span>
                                                    <a href={m.href}>
                                                        <button style={{
                  padding: '.25rem 1rem'
                }}>{m.hrefCta}</button>
                                                    </a>
                                                </span>
                                            </span> : null}
                                </div>;
      })}
                    </div> : null}
        </_react.default.Fragment>;
};
var _default = exports["default"] = Module;