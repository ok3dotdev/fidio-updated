import React from 'react';

const Footer = () => {
  return (
    <div className='w-full'>
      <div className='flex flex-wrap justify-between pt-8 w-full pb-6 lg:grid-cols-5 md:pb-14 order-0 sm:gap-6 sm:grid sm:grid-cols-4 max-w-[110rem] mx-auto px-4 text-gray-400 gap-y-12 text-xs'>
        <div className='text-center col-span-1 lg:col-span-2 w-full'>
          <img src='/img/features/logo.png' alt='' className='h-auto' />
        </div>
        <div className='col-span-1'>
          <p className='mb-4 text-gray-400'>LEGAL</p>
          <ul className='flex flex-col gap-4 text-white'>
            <li>
              <a href='/terms'>Terms of Service</a>
            </li>
            <li>
              <a href='/privacy'>Privacy Policy</a>
            </li>
            <li>
              <a href='#'>Faq</a>
            </li>
          </ul>
        </div>
        <div>
          <p className='mb-4 text-gray-400'>COMPANY</p>
          <ul className='flex flex-col gap-4 text-white'>
            <li>
              <a href=''>Artist & Managers</a>
            </li>
            <li>
              <a href=''>Clubs & Venues</a>
            </li>
            <li>
              <a href=''>Partners</a>
            </li>
            <li>
              <a href=''>Sponsors</a>
            </li>
          </ul>
        </div>
        <div>
          <p className='mb-4 text-gray-400'>FOLLOW US</p>
          <ul className='flex flex-col gap-4 text-white'>
            <li>
              <a href=''>Instagram</a>
            </li>
            <li>
              <a href=''>Facebook</a>
            </li>
            <li>
              <a href=''>Twitter</a>
            </li>
            <li>
              <a href=''>LinedIn</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='w-full p-7 max-w-[110rem] mx-auto'>
        <hr className='border-gray-400 mb-4' />
        <div className='flex justify-between text-gray-400 text-xs'>
          <p>©2023 Fidio.</p>
          <p> CA(CAD)</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
