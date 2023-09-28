import React from 'react';
import { SignIn } from '../../modules/onboarding/signin';

const Hero = (props) => {
  console.log({ props });
  return (
    <div className='min-h-screen hero'>
      <div className='absolute inset-0 bg-black opacity-70'></div>
      <div className='max-w-6xl mx-auto p-4 px-4 text-center lg:text-left lg:flex lg:pt-[200px] pt-[150px] flex flex-col lg:flex-row gap-4 h-full lg:h-auto relative z-20'>
        <div className='flex flex-col items-center lg:items-start basis-2/3 justify-center lg:justify-start'>
          <h1 className='font-black text-3xl lg:text-6xl mb-1 text-white text-center lg:text-left max-w-[600px]'>
            Unlock the Rhythm of Africa
          </h1>
          <p className='mb-8 text-white text-lg'>
            Your Gateway to Live <span className='text '>Afrobeats</span>{' '}
            Concerts
          </p>
          <SignIn redirectOnAuth={'/home'} {...props} />
        </div>
        <div className='w-full flex justify-center lg:basis-1/3 pb-32 pt-16 lg:pt-0 '>
          <div className='bg-black p-4 inline-flex flex-col rounded-lg lg:w-[590px] lg:max-w-[400px] max-w-[300px] max-h-[600px] shadow-xl'>
            <div className='h-[300px] lg:h-[400px] overflow-hidden bg-gray-400 overflow-'>
              <img
                src='/img/features/hero-live.png'
                alt=''
                className='w-full h-auto'
              />
            </div>
            <div className='flex mt-4 justify-between shadow-xl'>
              <div className='text-left'>
                <p className='font-black text-xl text-white'>BURLIN B</p>
                <p className='text-sm text-gray-600'>BORN THIS WAY TOUR</p>
                <p className='text-sm text-gray-600'>
                  7:30 - 9:30 BUDWEISER STADIUM
                </p>
              </div>
              <div className='basis-1/3 flex flex-col text-center text-white'>
                <div className='text-center'>
                  <p className='text-center font-bold'>200K</p>
                </div>
                <button className='rounded-md inline-flex justify-center items-center px-4 py-1 bg-red-500 mt-2'>
                  Live
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
