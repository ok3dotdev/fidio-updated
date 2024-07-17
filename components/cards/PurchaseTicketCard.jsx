import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Ticket = ({ ticket, cdn }) => {
  console.log('price', ticket?.styles[0]?.price);
  return (
    <Link href={`/events/${ticket.id}`}>
      {ticket.images[0] ? (
        <img
          src={`${cdn?.static}/${ticket.images[0]?.name}`}
          className='aspect-square object-cover w-full rounded-[8px]'
          alt={ticket.name}
        />
      ) : (
        <img src='/img/internal/althero.png' className='rounded-[8px]' />
      )}
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

export default Ticket;
