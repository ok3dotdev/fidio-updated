import React from 'react'
import SalesCard from '../../components/SalesCard'
import EventStep from '../EventStep'

const StudioDash = () => {
  const user = {
    name: 'Sinmidele', 
    avatarUrl: '/path/to/avatar.png'
  };
  const ticketSales = {
    title: 'Tickets Sold',
    amount: '50'
  };
  const ticketRevenue = {
    title: 'Ticket revenue',
    amount: '$300,000'
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
    <div className='md:mx-[8rem]'>
      <h1 className="text-2xl mb-8 font-sans">Hi, {user.name}</h1>
      <div className="">
        <SalesCard {...ticketSales}/>
        <SalesCard {...ticketRevenue}/>
      </div>
      <EventStep/>
    </div>
  )
}

export default StudioDash