import React from 'react';
import Link from 'next/link';

const Footer = (props) => {
  const { pageName } = props;
  return (
    <div
      className={`w-full bg-black relative z-1 ${
        pageName === 'Index' ? '' : ''
      }`}
    >
      <hr className='border-gray-[#333333] mb-4 max-w-7xl mx-auto' />
      <div className='flex flex-wrap justify-between pt-8 w-full pb-1 lg:grid-cols-5 md:pb-14 order-0 sm:gap-6 sm:grid sm:grid-cols-4 max-w-7xl mx-auto px-4 text-gray-400 gap-y-12 text-xs'>
        {/* <div className='text-center col-span-1 lg:col-span-2 w-full flex justify-center lg:block'>
          <img
            src='/img/internal/frame2.png'
            alt=''
            className='h-auto w-[160px] lg:w-[260px]'
          />
        </div> */}
        <div className='col-span-1'>
          <p className='mb-4 text-white'>LEGAL</p>
          <ul className='flex flex-col gap-4 text-gray-400 font-sans'>
            <li>
              <Link className='font-sans' href='/terms'>
                Terms of Service
              </Link>
            </li>
            <li>
              <Link className='font-sans' href='/privacy'>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className='font-sans' href='/faq'>
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className='mb-4 text-white'>COMPANY</p>
          <ul className='flex flex-col gap-4 text-gray-400 font-sans'>
            <li>
              <a
                className='font-sans'
                target='_blank'
                href='mailto:admin@fidio.ca'
              >
                Artist & Managers
              </a>
            </li>
            <li>
              <a
                className='cursor-pointer font-sans'
                target='_blank'
                href='mailto:admin@fidio.ca'
              >
                Clubs & Venues
              </a>
            </li>
            <li>
              <a
                className='font-sans'
                target='_blank'
                href='mailto:admin@fidio.ca'
              >
                Partners
              </a>
            </li>
            <li>
              <a
                className='font-sans'
                target='_blank'
                href='mailto:admin@fidio.ca'
              >
                Sponsors
              </a>
            </li>
            <li>
              <a className='font-sans' target='_blank' href='/blog'>
                blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className='mb-4 text-white'>FOLLOW US</p>
          <ul className='flex flex-col gap-4 text-gray-400 font-sans'>
            <li>
              <a
                className='font-sans'
                target='_blank'
                href='https://www.instagram.com/fidio_official/?igshid=MWZjMTM2ODFkZg%3D%3D/'
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                className='font-sans'
                target='_blank'
                href='https://www.facebook.com/Fidioafrica'
              >
                Facebook
              </a>
            </li>
            <li>
              <Link className='font-sans' target='_blank' href='#'>
                Twitter
              </Link>
            </li>
            <li>
              <a
                className='font-sans'
                target='_blank'
                href='https://www.linkedin.com/company/fidio-inc/'
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='w-full p-7 max-w-7xl mx-auto'>
        <hr className='border-gray-[#333333] mb-4' />
        <div className='flex flex-col text-gray-400 text-xs'>
          <p>©2023 Fidio.</p>
          <p className='text-white'>Made with love, in Canada</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
