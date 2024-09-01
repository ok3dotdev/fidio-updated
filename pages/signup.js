/* eslint-disable react-hooks/rules-of-hooks */
// If you want to use this as a template for another page, copy entire file and rename "pageName". Use pageDefault variable in app.config.js appropriately.

import React from 'react';
import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
import { SignIn, Username } from '/modules/onboarding/signin';
import Link from 'next/link';

const pageName = 'Signup';

export const Page = (props) => {
  return (
    <>
      {props._loggedIn ? ( // Check if user is logged in
        <div className='flex justify-center items-center h-screen bg-dashSides font-lexend'>
          <p className='text-xl mb-2 font-bold'>
            Already signed in.{' '}
            <a href='/browse' className='text-accentY underline'>
              Return to browse
            </a>
          </p>
        </div>
      ) : (
        <div className=''>
          <div className='font-lexend bg-dashBg'>
            <div className='w-full h-full overflow-scroll fixed flex justify-center flex-col items-center bg-dashBg px-4'>
              <div className='mb-8 w-full md:max-w-[400px] min-w-[250px] max-h-[508px] pl-4 text-center'>
                <Link href='/'>
                  <img
                    src='/img/internal/frame2.png'
                    alt='Logo'
                    className='lg:w-[70px] w-[90px] h-auto'
                  />
                </Link>
              </div>
              <p className='text-xl mb-2 font-bold md:max-w-[400px] min-w-[250px] max-h-[508px] w-full pl-4'>
                Sign Up
              </p>
              <div className='p-2 md:max-w-[400px] min-w-[250px] max-h-[508px] signin-form-container rounded'>
                <Username
                  redirectOnAuth={'/browse'}
                  {...props}
                  prompt={'Username'}
                  confirm={'Continue'}
                />
                <SignIn
                  redirectOnAuth={'/browse'}
                  {...props}
                  loadRegister={true}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const getServerSideProps = async (context) => {
  return await getServerSidePropsDefault(context, pageDefaults[pageName]);
};

export default Page;
