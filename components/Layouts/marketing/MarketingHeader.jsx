import Link from 'next/link';
import { Button } from '../../../components/ui/button';
import React from 'react';

const MarketingHeader = () => {
  return (
    <div className='bg-black'>
      <div className='flex justify-between items-center max-w-screen-xl mx-auto py-5 px-4'>
        <Link href={'/'}>
          <img
            src='/img/internal/frame2.png'
            alt='Logo'
            className='lg:w-[100px] w-[80px] h-auto'
          />
        </Link>
        <Link
          target='_blank'
          href={'https://cal.com/fidio-admin-vuj8dq/30min'}
          className='bg-gradient-to-br from-[#C13315] to-[#F7731B] rounded-[52px] text-md py-3 px-6 dark:text-white font-medium'
        >
          Schedule a call
        </Link>
      </div>
    </div>
  );
};

export default MarketingHeader;
