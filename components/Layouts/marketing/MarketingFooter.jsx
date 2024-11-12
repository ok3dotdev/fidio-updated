import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import React from 'react';

const MarketingFooter = () => {
  const year = new Date().getFullYear();
  return (
    <div className='bg-black'>
      <div className='flex flex-col md:flex-row  gap-12 justify-between items-center max-w-screen-xl mx-auto py-8 px-4'>
        <Link href={'/'}>
          <img
            src='/img/internal/frame2.png'
            alt='Logo'
            className='lg:w-[200px] w-[180px] h-auto'
          />
        </Link>
        <div className='flex  flex-col items-center gap-8 md:items-end md:gap-2'>
          <div className='flex space-x-4'>
            <a
              href='https://www.facebook.com/Fidioafrica'
              target='_blank'
              rel='noopener noreferrer'
              className='p-2 rounded-full bg-gradient-to-r from-[#C13315] to-[#F7731B] flex items-center justify-center cursor-pointer'
            >
              <Facebook className='text-white w-6 h-6' />
            </a>
            <a
              href='https://x.com/fidioofficial?s=11&t=RJI0_u1ybg7iN40hIftYvw'
              target='_blank'
              rel='noopener noreferrer'
              className='p-2 rounded-full bg-gradient-to-r from-[#C13315] to-[#F7731B] flex items-center justify-center  cursor-pointer'
            >
              <Twitter className='text-white w-6 h-6' />
            </a>
            <a
              href='https://www.instagram.com/fidio_official/'
              target='_blank'
              rel='noopener noreferrer'
              className='p-2 rounded-full bg-gradient-to-r from-[#C13315] to-[#F7731B] flex items-center justify-center  cursor-pointer'
            >
              <Instagram className='text-white w-6 h-6' />
            </a>
            <a
              href='https://www.linkedin.com/company/fidio-inc'
              target='_blank'
              rel='noopener noreferrer'
              className='p-2 rounded-full bg-gradient-to-r from-[#C13315] to-[#F7731B] flex items-center justify-center  cursor-pointer'
            >
              <Linkedin className='text-white w-6 h-6' />
            </a>
          </div>
          <p className='text-sm'>
            © Copyright {year}, All Rights Reserved by Fidio
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketingFooter;
