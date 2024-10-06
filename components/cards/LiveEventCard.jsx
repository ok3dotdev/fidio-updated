import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Timer } from 'lucide-react';

const LiveEventCard = ({ live, cdn }) => {
  const { relevant_products: item } = live;
  console.log('live', live, item);
  if (!live) return;

  // Base64 encoded SVG for a generic live stream placeholder image
  const placeholderImage = `data:image/svg+xml;base64,${btoa(
    '<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#333333"/><text x="50%" y="50%" font-family="Arial" font-size="24" fill="#FFFFFF" text-anchor="middle" dy=".3em">Live Stream</text><circle cx="30" cy="30" r="10" fill="#FF0000"/></svg>'
  )}`;

  return (
    <Link href={`/w?v=${live.id}`}>
      <div className='relative'>
        <img
          src={
            item && item[0]?.images && item[0]?.images[0]
              ? `${cdn?.static}/${item[0].images[0]?.name}`
              : placeholderImage
          }
          className='aspect-square object-cover w-full rounded-[8px]'
          alt={live.name || 'Live stream placeholder'}
        />
        <div className='absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded animate-pulse'>
          LIVE
        </div>

        <div className='absolute top-2 left-2 bg-white text-black text-xs font-bold px-2 py-1 rounded'>
          <Timer size={12} />
        </div>
      </div>
      <div className='mt-2 font-lexend'>
        <p className='font-semibold'>{item && item[0] && item[0]?.title}</p>
        <div className='flex w-full justify-between mt-4'>
          {item && item[0] && item[0]?.meta?.host?.title && (
            <div className='space-y-0 self-start'>
              <p className='text-xs text-dashtext'>HOST</p>
              <p className='mt-0 leading-[1rem]'>
                {item && item[0] && item[0]?.meta?.host?.title}
              </p>
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
