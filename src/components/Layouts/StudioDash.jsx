import React, { useState } from 'react'
import SalesCard from '../../components/SalesCard'
import EventStatusSteps from '../steps/EventStatusSteps'

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
  
  return (
    <div className='md:mx-[8rem]'>
      <h1 className="text-2xl mb-8 font-sans">Hi, {user.name}</h1>
      <div className="">
        <SalesCard {...ticketSales}/>
        <SalesCard {...ticketRevenue}/>
      </div>
      <EventStatusSteps/>
    </div>
  )
}

export default StudioDash