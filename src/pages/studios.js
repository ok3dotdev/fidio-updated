/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react'
import { AppConfigLayout, PageContainer } from '/modules/internal'
import { pageDefaults } from '/app.config'
import Link from 'next/link';
import { getServerSidePropsDefault } from '/modules/utility.js'
import { getServerSidePropsFunc } from '/appServer/serverProps'
import { Menu } from '/modules/menu/'

import SalesCard from '../components/SalesCard'
import Ticket from '../components/Ticket'
import HomeLayout from '../../customModules/features/HomeLayout';

const pageName = 'studio'

export const page = props => {
  console.log("props", props)
  const user = {
    name: 'Sinmi', // Assuming the user's name is Sinmi
    avatarUrl: '/path/to/avatar.png' // Assuming you have a path to the user's avatar image
  };

  const ticketSales = {
    title: 'Tickets Sold',
    amount: '50'// Assuming this is in dollars
  };
  const ticketRevenue = {
    title: 'Ticket revenue',
    amount: '$300,000'
  }

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
  ]
	return (
    <div className="flex flex-col h-screen">
      {/* Top Navbar */}
      <div className="bg-dashSides text-white p-4 flex justify-between items-center shadow-lg shadow-[0px 4px 4px 1px rgba(153, 152, 150, 0.33)]">
        <div>
          <img src="/img/internal/frame2.png" alt="Logo" className="h-8 w-auto" />
        </div>
        <div className='flex'>
          <img src={user.avatarUrl} alt="User Avatar" className="h-8 w-8 rounded-full" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="bg-dashSides w-[240px] p-4 hidden md:block">
          <ul className="space-y-4">
            <li>
              <Link href="/dashboard">
                Studio Home
              </Link>
            </li>
            <li>
              <Link href="/events">
                Events
              </Link>
            </li>
            <li>
              <Link href="/revenue">
                Revenue
              </Link>
            </li>
            <li>
              <Link href="/settings">
                Settings
              </Link>
            </li>
            <li>
              <Link href="/logout">
                Logout
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-4 bg-dashBg">
         <div className='md:mx-[5rem]'>
          {/* Greeting */}
          <h1 className="text-2xl mb-4">Hello {user.name}</h1>

          {/* Cards for Tickets Sold and Ticket Revenue */}
          <div className="">
            <SalesCard {...ticketSales}/>
            <SalesCard {...ticketRevenue}/>
          </div>
          

          {/*Events */}
          <div className='mt-4'>
            <h3>Events</h3>
            <div className='w-full'>
              <input type="text" className='bg-dashFg w-full rounded-[4rem] px-5 py-3 mt-4' placeholder='Search for events'/>
            </div>
            <div className='flex flex-col gap-2 mt-12'>
              {tickets.map((ticket, index) => (
                <Ticket key={index} title={ticket.title} date={ticket.date} />
              ))}
            </div>
            <div>
              <button className='bg-dashFg rounded-[4rem] mt-4 px-2 py-2 text-black font-sans'>
                Create event
              </button>
            </div>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
	let currentProps = await getServerSidePropsDefault(context, pageDefaults[pageName])
  return await getServerSidePropsFunc(currentProps, context)
}

export default page