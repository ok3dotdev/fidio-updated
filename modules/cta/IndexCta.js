"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _utility = require("../utility/utility");
var _wideFeature = require("../search/wideFeature");
var _span;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  var AfterSignIn = _react["default"].useRef();
  var Lead2 = _react["default"].useRef();
  var ButtonAction = _react["default"].useRef();
  _react["default"].useEffect(function () {
    try {
      setTimeout(function () {
        if (Lead2.current && !Lead2.current.classList.contains('IndexCta_Lead2Trans')) {
          Lead2.current.classList.add('IndexCta_Lead2Trans');
        }
        setTimeout(function () {
          if (AfterSignIn.current && !AfterSignIn.current.classList.contains('IndexCta_AfterSignInTrans')) {
            AfterSignIn.current.classList.add('IndexCta_AfterSignInTrans');
          }
          if (ButtonAction.current && !ButtonAction.current.classList.contains('IndexCta_ButtonStyleTrans')) {
            ButtonAction.current.classList.add('IndexCta_ButtonStyleTrans');
          }
        }, 750);
      }, 1000);
    } catch (err) {
      // fail silently
    }
  }, [props._loggedIn]);
  return <div className='IndexCta_ExternalContainer'>
            <div className='IndexCta_Container'>
                {props.definition ? <_react.default.Fragment>
                        <div className={"IndexCta_LeadContainer ".concat(props.className)}>
                            {props.ctaTopVideos ? <_wideFeature.WideFeature {...Object.assign({
            image1: props.ctaTopVideos.image1
          }, props)} /> : ''}
                            <img src={props.definition.logo} className='IndexCta_MyLogo' />
                            <h1 className='IndexCta_Lead1_5 pointer IndexCta_Lead_First'>{(0, _utility.normalizeText)(props.definition.lead)}</h1>
                            <h1 className='IndexCta_Lead2 pointer IndexCta_Lead_Second' ref={Lead2}>{(0, _utility.normalizeText)(props.definition.lead2)} {_span || (_span = <span className='IndexCta_RecordingCircle'></span>)}</h1>
                            <div className='IndexCta_Description'>{props.definition.description}</div>
                            {props.children}
                            {!props._loggedIn ? <div className='IndexCta_AfterSignIn' ref={AfterSignIn}>{props.definition.afterSignIn}</div> : <div style={{
            display: 'flex',
            gap: '.5rem',
            alignItems: 'center'
          }}>
                                        <button className='IndexCta_ButtonStyle ButtonGlowing' ref={ButtonAction}>{props.definition.buttonAfterSignIn}</button>
                                    </div>}
                        </div>
                        <div className='IndexCta_DetailContainer'>
                            <div className='IndexCta_Detail'>{props.definition.detail}</div>
                        </div>
                    </_react.default.Fragment> : null}
            </div>
        </div>;
};
var _default = exports["default"] = Module;