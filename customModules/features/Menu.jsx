import { useState } from 'react';
import Link from 'next/link';

const Menu = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='bg-transparent absolute top-0 z-40 flex justify-center w-full'>
      <div className='max-w-8xl mx-auto flex justify-between p-2 pt-4 lg:p-4 items-center w-full'>
        <div>
          <Link href='/'>
            <img
              src='/img/internal/frame2.png'
              alt=''
              className='lg:w-[120px] w-[90px] h-auto'
            />
          </Link>
        </div>
        <div className='lg:flex gap-4 hidden'>
          {!props._loggedIn ? (
            <>
              <Link
                className='bg-white text-black py-3 px-6 font-sans rounded-[20px] flex justify-center items-center text-sm font-medium'
                href='/signin'
              >
                Log in with Google
              </Link>
            </>
          ) : (
            <div></div>
          )}
        </div>
        <div className='lg:hidden flex items-center'>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='text-white focus:outline-none'
          >
            <svg
              className='w- h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className='lg:hidden fixed inset-0 bg-black p-4 transition-transform transform-gpu translate-y-0 ease-out duration-300 flex flex-col justify-between'>
          <div>
            <div className='flex justify-between items-center mb-8'>
              <Link href='/home'>
                <img
                  src='/img/internal/frame2.png'
                  alt=''
                  className='w-[150px] h-auto cursor-pointer'
                />
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='text-white focus:outline-none'
              >
                <svg
                  className='w-8 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  ></path>
                </svg>
              </button>
            </div>
            {!props._loggedIn ? (
              <Link
                className='hover:bg-slate-700 mb-4 px-6 py-2 rounded-md flex items-center'
                href='/signin'
              >
                Home
              </Link>
            ) : (
              <Link
                className='hover:bg-slate-700 mb-4 px-6 py-2 rounded-md flex items-center'
                href='/home'
              >
                Home
              </Link>
            )}
          </div>
          <div className='space-y-4'>
            <Link
              className=' px-6 py-2 rounded-md flex justify-center items-center'
              href='/signin'
            >
              Login
            </Link>
            <Link
              className=' bg-white text-black px-6 py-2 rounded-md flex justify-center items-center'
              href='/signin'
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
