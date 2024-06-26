import React from 'react';
import { SignIn, Username } from '../../modules/onboarding/signin';

const Signin = (props) => {
  //   // ('signin', props);
  return (
    <div>
      <div className='w-full h-[100vh] fixed'>
        <div className='max-w-3xl mx-auto h-full w-full lg:grid grid-cols-1 gap-5 lg:gap-8 lg:grid-cols-2 flex flex-col justify-start lg:justify-center'>
          <div className='lg:flex justify-start lg:justify-center items-center col-span-1 mt-[10%] hidden'>
            <img
              src='/img/internal/frame2.png'
              alt=''
              width={'450px'}
              className='w-[300px] lg:w-[450px]'
            />
          </div>
          <div className='flex flex-col gap-y-2 justify-start lg:justify-center items-center lg:mt-0'>
            <div className='w-full lg:hidden block'>
              <img
                src='/img/internal/frame2.png'
                alt=''
                width={'250px'}
                className='w-[100px] lg:w-[250px]'
              />
            </div>
            <p className='text-2xl mb-8 font-bold'>Log In or Sign Up</p>
            <Username
              redirectOnAuth={'/browse'}
              {...props}
              prompt={'Username'}
              confirm={'Continue'}
            />
            <SignIn redirectOnAuth={'/browse'} {...props} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
