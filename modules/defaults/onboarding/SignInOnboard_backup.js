import React from 'react'
import { EmailOnboardInput, GoogleSignIn, SignInButton, PasswordOnboardInput } from '/modules/onboarding/signin/parts'

const Module = props => {
    const { hideSignIn, pageError, googleSignInRendered, handleSetLoadRegister, handleClearPageError, handleSetResetPassword } = props
    return (
        <React.Fragment>
            <div className={`SignIn_ManualContainer ${hideSignIn || props?._loggedIn ? `display-none` : null}`}>
                <div className='SignIn_ManualContainer_Label_Container'>
                    <label>Email</label>
                    <EmailOnboardInput { ...props } />
                </div>
                <div className='SignIn_ManualContainer_Label_Container'>
                    <label>Password</label>
                    <PasswordOnboardInput { ...props } />
                </div>
                <SignInButton { ...props } />
            </div>
            {
                googleSignInRendered
                    ? <div style={{ textAlign: 'center' }}>
                        <h4 style={{ fontWeight: 400, margin: '.5rem 0' }}>Or</h4>
                    </div>
                    : null
            }
            <GoogleSignIn { ...props } />
            <div style={{ fontSize: '.9rem', textAlign: 'center', marginTop: '.5rem' }}>New here? <div onClick={handleSetLoadRegister} style={{ display: 'inline', cursor: 'pointer', color: '#ff6deb' }}>Sign up instead</div></div>
            {
                pageError ?
                    <div style={{ paddingLeft: 1 + 'rem', paddingRight: 1 + 'rem' }} onClick={handleClearPageError}>
                        <p className={`googleSignInPromptSmall error errorBg`}>{pageError}</p>
                    </div>
                : null
            }
            {
                pageError?.match(/password/)
                    ? <div style={{ fontSize: '.9rem', textAlign: 'center', marginTop: '.5rem' }}>Forgot your password? <div onClick={handleSetResetPassword} style={{ display: 'inline', cursor: 'pointer', color: '#ff6deb' }}>Send reset email</div></div>
                    : null
            }
        </React.Fragment>
    )
}

export default Module