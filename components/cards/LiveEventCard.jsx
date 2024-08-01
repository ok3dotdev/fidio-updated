import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const LiveEventCard = ({ live, cdn }) => {
  return (
    <Link href={`/w?v=${live.id}`}>
      <div className='relative'>
        {live?.images && live?.images[0] ? (
          <img
            src={`${cdn?.static}/${live.images[0]?.name}`}
            className='aspect-square object-cover w-full rounded-[8px]'
            alt={live.name}
          />
        ) : (
          <img src='/img/internal/althero.png' className='rounded-[8px]' />
        )}
        <div className='absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded'>
          LIVE
        </div>
      </div>
      <div className='mt-2 font-lexend'>
        <p className='font-semibold'>{live.title}</p>
        <div className='flex w-full justify-between mt-4'>
          {live?.meta?.host?.title && (
            <div className='space-y-0 self-start'>
              <p className='text-xs text-dashtext'>HOST</p>
              <p className='mt-0 leading-[1rem]'>{live?.meta?.host?.title}</p>
            </div>
          )}
          <Button className='self-end ml-auto dark:hover:text-black'>
            Join Now
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default LiveEventCard;
