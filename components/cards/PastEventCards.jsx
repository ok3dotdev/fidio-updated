import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Ticket } from 'lucide-react';

const PastEventCard = ({ video, cdn, product }) => {
  // console.log('video meta', video, product);
  // Base64 encoded SVG for a generic placeholder image
  const placeholderImage = `data:image/svg+xml;base64,${btoa(
    '<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#333"/><text x="50%" y="50%" font-family="Arial" font-size="24" fill="#666666" text-anchor="middle" dy=".3em">No Image</text></svg>'
  )}`;

  return (
    <Link href={`/w?v=${video?.id}`}>
      <div className='relative'>
        <img
          src={
            product?.images && product.images[0]
              ? `${cdn?.static}/${product?.images[0]?.name}`
              : placeholderImage
          }
          className='aspect-square object-cover w-full rounded-[8px]'
          alt={product?.name || 'Event placeholder'}
        />
        {product?.meta?.startTime && (
          <div className='absolute top-2 right-2 bg-white text-black text-xs font-bold px-2 py-1 rounded'>
            {product.meta.startTime}
          </div>
        )}
        <div className='absolute top-2 right-2 bg-white text-black text-xs font-bold px-2 py-1 rounded'>
          <p>Rewatch</p>
        </div>
      </div>
      <div className='mt-2'>
        <p className='font-semibold'>{product?.name}</p>
        <div className='flex w-full justify-between mt-4'>
          {product?.meta?.host?.title && (
            <div className='space-y-2 self-start'>
              <p className='text-[10px] text-dashtext'>HOST</p>
              <p className='mt-0 leading-[1rem]'>
                {product?.meta?.host?.title}
              </p>
            </div>
          )}
          <Button className='self-end ml-auto dark:hover:text-black'>
            {product?.styles?.[0]?.price === '0'
              ? 'FREE'
              : `$${product?.styles?.[0]?.price ?? ''}`}
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default PastEventCard;
