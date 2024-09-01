import React from 'react';
import Link from 'next/link';
import {
  EmailOnboardInput,
  GoogleSignIn,
  SignInButton,
  PasswordOnboardInput,
} from '/modules/onboarding/signin/parts';

const Module = (props) => {
  const {
    hideSignIn,
    pageError,
    googleSignInRendered,
    handleSetLoadRegister,
    handleClearPageError,
    handleSetResetPassword,
  } = props;
  return (
    <React.Fragment>
      <React.Fragment>
        <div
          className={`bg-dashSides SignIn_ManualContainer p-4 ${
            hideSignIn || props?._loggedIn ? `display-none` : null
          }`}
          style={{ border: '0.5px solid rgba(255, 255, 255, 0.2)' }}
        >
          <p className='text-left dark:text-white'>
            Sign in to access your tickets, viewed events and much more
          </p>
          <div className='SignIn_ManualContainer_Label_Container'>
            <label className='w-full text-sm'>Email</label>
            <EmailOnboardInput {...props} />
          </div>
          <div className='SignIn_ManualContainer_Label_Container'>
            <label className='w-full text-sm'>Password</label>
            <PasswordOnboardInput {...props} />
          </div>
          <SignInButton {...props} />
        </div>
      </React.Fragment>
      <div>
        {googleSignInRendered ? (
          <div style={{ textAlign: 'center' }}>
            <h4
              style={{ fontWeight: 400, margin: '.5rem 0' }}
              className='text-dashtext'
            >
              Or
            </h4>
          </div>
        ) : null}
        <GoogleSignIn {...props} />
        <div
          style={{ fontSize: '.9rem', textAlign: 'center', marginTop: '.5rem' }}
        >
          New here?{' '}
          <Link
            href='/signup'
            className='auth-link'
            style={{ display: 'inline', cursor: 'pointer', color: '#ff6deb' }}
          >
            Sign up instead
          </Link>
        </div>
      </div>

      {pageError ? (
        <div
          style={{ paddingLeft: 1 + 'rem', paddingRight: 1 + 'rem' }}
          onClick={handleClearPageError}
        >
          <p className={`googleSignInPromptSmall error errorBg`}>{pageError}</p>
        </div>
      ) : null}
      {pageError?.match(/password/) ? (
        <div
          style={{ fontSize: '.9rem', textAlign: 'center', marginTop: '.5rem' }}
        >
          Forgot your password?{' '}
          <div
            onClick={handleSetResetPassword}
            style={{ display: 'inline', cursor: 'pointer', color: '#ff6deb' }}
          >
            Send reset email
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default Module;
