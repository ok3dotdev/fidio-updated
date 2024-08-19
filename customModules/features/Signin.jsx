import React from 'react';
import { SignIn, Username } from '../../modules/onboarding/signin';

const Signin = (props) => {
  //   // ('signin', props);
  return (
    <div className='font-lexend bg-dashBg'>
      <div className='w-full h-[100vh] fixed flex justify-center flex-col items-center bg-dashBg'>
        <p className='text-lg mb-8 font-bold'>Log In or Sign Up</p>
        <div
          className='p-2 max-w-[305px] md:max-w-[400px] min-w-[250px] max-h-[508px] bg-dashSides  signin-form-container rounded'
          style={{ border: '0.5px solid rgba(255, 255, 255, 0.2)' }}
        >
          <p className='text-left p-2 '>
            Sign in to access your tickets, viewed events and much more
          </p>

          <Username
            redirectOnAuth={'/browse'}
            {...props}
            prompt={'Username'}
            confirm={'Continue'}
          />

          <SignIn redirectOnAuth={'/browse'} {...props} />
        </div>
        <p className='p-4'>
          New here?{' '}
          <a href=''>
            <span className='text-accentY'>Sign up instead</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signin;
