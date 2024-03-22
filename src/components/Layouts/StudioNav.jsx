import React from 'react';
import Link from 'next/link';
import UserMenu from '../../../customModules/features/UserMenu';

const StudioNav = (props) => {
  return (
    <div className='bg-dashBg text-white px-4 flex justify-between items-center shadow-lg border-b-[1px] border-[rgba(64, 64, 64, 1)] h-[60px] md:h-[80px] relative'>
      <div className='absolute right-0 px-[2rem] gap-4 hidden md:flex'>
        <button className='border-[1px] border-dashBorder p-3 font-lexend font-medium rounded-[6px] flex justify-center items-center'>
          Start instant stream
        </button>
        <Link
          href='/studio/events/create'
          className='bg-accentY hover:bg-accentY p-3 font-lexend font-medium rounded-[6px] flex justify-center items-center'
        >
          Create new event
        </Link>
      </div>
    </div>
  );
};

export default StudioNav;
