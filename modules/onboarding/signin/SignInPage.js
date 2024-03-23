"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = require("./index");
var _cta = require("../../cta");
var _div;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  console.log(props);
  return <div className={"".concat(props.className)}>
            <div className='' style={{
      background: "url(".concat(props.backgroundUrl, ")")
    }}>
                {props.children}
                <div className='flex sign-in-page-container'>
                    {props.imageSplash && props.imageSplash.url ? <div className='SignIn_ImageSplashContainer'>
                            <div className='SignIn_ImageSplash' style={{
            background: "url(".concat(props.imageSplash.url, ") no-repeat center center / cover")
          }}>

                            </div>
                        </div> : _div || (_div = <div className='SignIn_ImageSplashContainer'></div>)}
                    <div>
                        <_cta.IndexCta {...Object.assign({}, props, {
            marginTop: '7rem',
            definition: props.OnboardCta,
            children: <div><_index.SignIn {...props} /><_index.Username {...props} /></div>,
            ctaTopVideos: props.ctaTopVideos
          })}></_cta.IndexCta>
                    </div>
                </div>
            </div>
        </div>;
};
var _default = exports["default"] = Module;