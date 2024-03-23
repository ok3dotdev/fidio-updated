var _div;
import React from 'react';
import { SignIn, Username } from './index';
import { IndexCta } from '../../cta';
const Module = props => {
  console.log(props);
  return <div className={`${props.className}`}>
            <div className='' style={{
      background: `url(${props.backgroundUrl})`
    }}>
                {props.children}
                <div className='flex sign-in-page-container'>
                    {props.imageSplash && props.imageSplash.url ? <div className='SignIn_ImageSplashContainer'>
                            <div className='SignIn_ImageSplash' style={{
            background: `url(${props.imageSplash.url}) no-repeat center center / cover`
          }}>

                            </div>
                        </div> : _div || (_div = <div className='SignIn_ImageSplashContainer'></div>)}
                    <div>
                        <IndexCta {...props} marginTop={'7rem'} definition={props.OnboardCta} children={<div><SignIn {...props} /><Username {...props} /></div>} ctaTopVideos={props.ctaTopVideos}></IndexCta>
                    </div>
                </div>
            </div>
        </div>;
};
export default Module;