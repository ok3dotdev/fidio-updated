import React from 'react';
import Link from 'next/link';
import {
  EmailOnboardInput,
  UsernameOnboardInput,
  GoogleSignIn,
  RegisterButton,
  PasswordOnboardInput,
} from '/modules/onboarding/signin/parts';

const Module = (props) => {
  const {
    hideSignIn,
    pageError,
    googleSignInRendered,
    handleSetLoadRegister,
    handleClearPageError,
    handleClearUsername,
    availableUsername,
  } = props;
  console.log(availableUsername);
  return (
    <React.Fragment>
      <div
        className={`SignIn_ContainerOn  bg-dashSides  p-4${
          hideSignIn || props?._loggedIn ? `display-none` : ''
        }`}
        style={{ border: '0.5px solid rgba(255, 255, 255, 0.2)' }}
      >
        <p className='text-left dark:text-white'>
          Register to create an account and access exclusive features
        </p>
        <div className='SignIn_ManualContainer_Label_Container'>
          <label className='w-full text-sm'>Username</label>
          <UsernameOnboardInput {...props} className />
          {availableUsername?.data === 'available' ? (
            <div
              style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
              onClick={handleClearUsername}
            >
              <p className={`googleSignInPromptSmall success`}>
                Username is available
              </p>
            </div>
          ) : availableUsername?.data === 'not_available' ? (
            <div style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
              <p
                className={`googleSignInPromptSmall error errorBg`}
                onClick={handleClearUsername}
              >
                Username is not available
              </p>
            </div>
          ) : null}
        </div>
        <div className='SignIn_ManualContainer_Label_Container'>
          <label className='w-full text-sm'>Email</label>
          <EmailOnboardInput {...props} />
        </div>
        <div className='SignIn_ManualContainer_Label_Container'>
          <label className='w-full text-sm'>Password</label>
          <PasswordOnboardInput {...props} />
        </div>
        <RegisterButton {...props} className='w-full dark:bg-accentY' />
      </div>
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
        Already have an account?{' '}
        <Link
          href={'/signin'}
          className='auth-link'
          style={{ display: 'inline', cursor: 'pointer', color: '#ff6deb' }}
        >
          Sign in with existing
        </Link>
      </div>
      {pageError ? (
        <div
          style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
          onClick={handleClearPageError}
        >
          <p className={`googleSignInPromptSmall error errorBg`}>{pageError}</p>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default Module;
