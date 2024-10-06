import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Ticket } from 'lucide-react';

const TicketCard = ({ ticket, cdn }) => {
  // Base64 encoded SVG for a generic placeholder image
  const placeholderImage = `data:image/svg+xml;base64,${btoa(
    '<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#333"/><text x="50%" y="50%" font-family="Arial" font-size="24" fill="#666666" text-anchor="middle" dy=".3em">No Image</text></svg>'
  )}`;

  return (
    <Link href={`/events/${ticket.id}`}>
      <div className='relative'>
        <img
          src={
            ticket.images[0]
              ? `${cdn?.static}/${ticket.images[0]?.name}`
              : placeholderImage
          }
          className='aspect-square object-cover w-full rounded-[8px]'
          alt={ticket.name || 'Event placeholder'}
        />
        {ticket?.meta?.startTime && (
          <div className='absolute top-2 right-2 bg-white text-black text-xs font-bold px-2 py-1 rounded'>
            {ticket.meta.startTime}
          </div>
        )}
        <div className='absolute top-2 left-2 bg-white text-black text-xs font-bold px-2 py-1 rounded'>
          <Ticket size={14} />
        </div>
      </div>
      <div className='mt-2'>
        <p className='font-semibold'>{ticket.name}</p>
        <div className='flex w-full justify-between mt-4'>
          {ticket?.meta?.host?.title && (
            <div className='space-y-0 self-start'>
              <p className='text-xs text-dashtext'>HOST</p>
              <p className='mt-0 leading-[1rem]'>{ticket?.meta?.host?.title}</p>
            </div>
          )}
          <Button className='self-end ml-auto dark:hover:text-black'>
            {ticket?.styles?.[0]?.price === '0'
              ? 'FREE'
              : `$${ticket?.styles?.[0]?.price ?? ''}`}
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default TicketCard;
