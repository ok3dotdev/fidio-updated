import React from 'react';
import SalesCard from '@/components/SalesCard';
import EventStatusSteps from '@/components/steps/EventStatusSteps';

const StudioDash = (props) => {
  const ticketSales = {
    title: 'Tickets Sold',
    amount: '0.00',
  };
  const ticketRevenue = {
    title: 'Ticket revenue',
    amount: '$0.00',
  };
  const { username } = props?._loggedIn;
  const capitalizedUsername = username
    ? username.charAt(0).toUpperCase() + username.slice(1)
    : '';

  return (
    <div className='md:mx-[8rem]'>
      <h1 className='text-2xl mb-8 font-sans'>Hi, {capitalizedUsername}</h1>
      <div className='mb-8'>
        <SalesCard {...ticketSales} />
        <SalesCard {...ticketRevenue} />
      </div>
      <EventStatusSteps {...props} />
    </div>
  );
};

export default StudioDash;
