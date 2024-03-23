var _span;
import React from 'react';
import { normalizeText } from '../utility/utility';
import { WideFeature } from '../search/wideFeature';
const Module = props => {
  const AfterSignIn = React.useRef();
  const Lead2 = React.useRef();
  const ButtonAction = React.useRef();
  React.useEffect(() => {
    try {
      setTimeout(() => {
        if (Lead2.current && !Lead2.current.classList.contains('IndexCta_Lead2Trans')) {
          Lead2.current.classList.add('IndexCta_Lead2Trans');
        }
        setTimeout(() => {
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
                {props.definition ? <React.Fragment>
                        <div className={`IndexCta_LeadContainer ${props.className}`}>
                            {props.ctaTopVideos ? <WideFeature image1={props.ctaTopVideos.image1} {...props} /> : ''}
                            <img src={props.definition.logo} className='IndexCta_MyLogo' />
                            <h1 className='IndexCta_Lead1_5 pointer IndexCta_Lead_First'>{normalizeText(props.definition.lead)}</h1>
                            <h1 className='IndexCta_Lead2 pointer IndexCta_Lead_Second' ref={Lead2}>{normalizeText(props.definition.lead2)} {_span || (_span = <span className='IndexCta_RecordingCircle'></span>)}</h1>
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
                    </React.Fragment> : null}
            </div>
        </div>;
};
export default Module;