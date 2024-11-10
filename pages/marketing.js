import React from 'react';
import MarketingHeader from '../components/Layouts/marketing/MarketingHeader';
import { MoveUpRight } from 'lucide-react';

const pageName = 'marketing';

export default function Page() {
  return (
    <div className='font-lexend'>
      <MarketingHeader />
      <div className='bg-[url("/img/internal/marketing-header-bg.png")] min-h-[600px] bg-cover bg-black bg-no-repeat bg-fixed dark:border-[#D0D5DD] border-[0.5px] pt-12'>
        <div className='text-center z-40 flex  max-w-3xl mx-auto items-center flex-col'>
          <div className='flex gap-4 items-center p-2 rounded-[20px] dark:border-dashtext border-[1px] bg-gradient-to-r from-[#191919] to-[#323130] w-fit px-2'>
            <div className='p-1 h-5 w-5 rounded-full bg-[#373737] text-xs flex items-center justify-center'>
              🔥
            </div>
            <p>Crafted Visual Narratives That Captivate and Convert</p>
          </div>
          <h1 className='font-bold font-sora text-4xl mt-8'>
            {'Elevate Your Brand'}
            <br />
            {'with Professional Video Production.'}
          </h1>
          <p className='mt-4'>
            Fidio offers comprehensive video production services designed to
            elevate your brand and engage your audience.{' '}
          </p>
          <div className='rounded-3xl bg-white flex'>
            <p className='text-black'>Schedule a call</p>
            <div className='bg-gradient-to-br from-[#C13315] to-[#F7731B]'>
              <MoveUpRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
