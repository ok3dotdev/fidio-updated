import React, { useState } from 'react';
import Ticket from '../components/Ticket'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Link from 'next/link';
import {cn} from '../lib/utils'
import SearchBar from './SearchBar';

const EventCreation = () => {
  const [step, setStep] = useState('draft');
  // const [tickets, setTickets] = useState([]);

  // Function to handle creating an event
  const handleCreateEvent = () => {
    // Logic to create event
    console.log('Creating event...');
  };
  const tickets = [
    {
      title: 'Asake Live in Toronto',
      date: 'Feb 28, 2024 18:00 EAT'
    },
    {
      title: 'Asake Live in Toronto',
      date: 'Feb 28, 2024 18:00 EAT'
    },
    {
      title: 'Asake Live in Toronto',
      date: 'Feb 28, 2024 18:00 EAT'
    }
  ];

  return (
    <div className='mt-6'>
      <h3 className='font-sans'>Events</h3>
      <div className='flex gap-4 my-2'>
        <div
          className={cn('p-2 rounded-[1.5rem]  font-sans ',  step === 'draft' ? 'bg-dashFg text-black' : 'text-white')}
          onClick={() => setStep('draft')}
        >
          Drafts
        </div>
        <div
          className={cn('p-2 rounded-[1.5rem]  font-sans ',  step === 'pending' ? 'bg-accentY text-black' : 'text-white')}
          onClick={() => setStep('pending')}
        >
          Pending
        </div>
        <div
          className={cn('p-2 rounded-[1.5rem]  font-sans ',  step === 'approved' ? 'bg-green-300 text-black' : 'text-white')}
          onClick={() => setStep('approved')}
        >
          Approved
        </div>
        <div
          className={cn('p-2 rounded-[1.5rem]  font-sans ',  step === 'past' ? 'bg-blue-300 text-black' : 'text-white')}
          onClick={() => setStep('past')}
        >
          Past
        </div>
      </div>
      {step === 'draft' && (
        <>
          <SearchBar/>
          <div className='flex flex-col gap-4 mt-12'>
            {tickets.map((ticket, index) => (
              <Ticket key={index} title={ticket.title} date={ticket.date} />
            ))}
          </div>
          <div className='mt-4'>
            <Link href='/studio/create'
              className='bg-dashFg rounded-[4rem] mt-4 px-3 py-2 text-black font-sans inline-flex justify-center gap-1'
              onClick={handleCreateEvent}
            >
              <AddCircleRoundedIcon/>
              Create event
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default EventCreation;