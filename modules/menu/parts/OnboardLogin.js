import React from 'react';
import { SignIn } from '../../onboarding/signin';
const Module = props => {
  return <React.Fragment>
            {props._openMenu && props._openMenu.currentMenu && props._openMenu.currentMenu == 'main_settings' ? !props._loggedIn ? <React.Fragment>
                            <div style={{
        padding: '.5rem .5rem .125rem'
      }}>Sign In to {props?.siteTitle ?? 'Tycoon'} Below</div>
                            <div style={{
        borderTop: '3px solid grey',
        margin: '.25rem 0'
      }}></div>
                            <div style={{
        padding: '.5rem',
        paddingTop: '0'
      }}>
                                <SignIn {...props} maxWidth={'100%'}></SignIn>
                            </div>
                        </React.Fragment> : null : null}
        </React.Fragment>;
};
export default Module;