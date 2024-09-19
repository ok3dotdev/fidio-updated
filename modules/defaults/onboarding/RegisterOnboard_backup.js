import React from 'react'
import { EmailOnboardInput, UsernameOnboardInput, GoogleSignIn, RegisterButton, PasswordOnboardInput } from '/modules/onboarding/signin/parts'

const Module = props => {
    const { hideSignIn, pageError, googleSignInRendered, handleSetLoadRegister, handleClearPageError, handleClearUsername, availableUsername } = props
    return (
        <React.Fragment>
            <div className={`SignIn_ManualContainer ${hideSignIn || props?._loggedIn ? `display-none` : null}`}>
                <div>
                    <div className='SignIn_ManualContainer_Label_Container'>
                        <label>Username</label>
                        <UsernameOnboardInput { ...props } />
                    </div>
                    {
                        availableUsername?.data === 'available'
                            ? <div style={{ paddingLeft: 1 + 'rem', paddingRight: 1 + 'rem' }} onClick={handleClearUsername}>
                                <p className={`googleSignInPromptSmall success`}>Username is available</p> 
                            </div>
                        : availableUsername?.data === 'not_available' 
                            ? <div style={{ paddingLeft: 1 + 'rem', paddingRight: 1 + 'rem' }}>
                                <p className={`googleSignInPromptSmall error errorBg`} onClick={handleClearUsername}>Username is not available</p> 
                            </div>
                            : null
                    }
                </div>
                <div className='SignIn_ManualContainer_Label_Container'>
                    <label>Email</label>
                    <EmailOnboardInput { ...props } />
                </div>
                <div className='SignIn_ManualContainer_Label_Container'>
                    <label>Password</label>
                    <PasswordOnboardInput { ...props } />
                </div>
                <RegisterButton { ...props } />
            </div>
            {
                googleSignInRendered
                    ? <div style={{ textAlign: 'center' }}>
                        <h4 style={{ fontWeight: 400, margin: '.5rem 0' }}>Or</h4>
                    </div>
                    : null
            }
            <GoogleSignIn { ...props } />
            <div style={{ fontSize: '.9rem', textAlign: 'center', marginTop: '.5rem' }}>Already have an account? <div onClick={handleSetLoadRegister} style={{ display: 'inline', cursor: 'pointer', color: '#ff6deb' }}>Sign in with existing</div></div>
            {
                pageError ?
                    <div style={{ paddingLeft: 1 + 'rem', paddingRight: 1 + 'rem' }} onClick={handleClearPageError}>
                        <p className={`googleSignInPromptSmall error errorBg`}>{pageError}</p> 
                    </div>
                : null
            }
        </React.Fragment>
    )
}

export default Module