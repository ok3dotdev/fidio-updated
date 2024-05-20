import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Ticket = ({ ticket, cdn }) => {
  return (
    <Link href={`/events/${ticket.id}`}>
      <img
        src={`${cdn?.static}/${ticket.images[0]?.name}`}
        className='h-[250px] aspect-square object-cover w-full rounded-[8px]'
        alt={ticket.name}
      />
      <div className='mt-2'>
        <p className='font-semibold'>{ticket.name}</p>
        <div className='flex w-full justify-between mt-4'>
          {ticket?.meta?.host?.title && (
            <div className='space-y-0 self-start'>
              <p className='text-xs text-dashtext'>HOST</p>
              <p className='mt-0 leading-[1rem]'>{ticket?.meta?.host?.title}</p>
            </div>
          )}
          <Button className='self-end ml-auto'>
            ${ticket?.styles[0]?.price}
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default Ticket;
