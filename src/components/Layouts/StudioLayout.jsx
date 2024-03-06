/* eslint-disable react-hooks/rules-of-hooks */

import React, { Children } from 'react'
import { AppConfigLayout, PageContainer } from '/modules/internal'
import { pageDefaults } from '/app.config'
import { getServerSidePropsDefault } from '/modules/utility.js'
import { getServerSidePropsFunc } from '/appServer/serverProps'
import { Menu } from '/modules/menu/'

import SalesCard from '../../components/SalesCard'
import Ticket from '../../components/Ticket'
import StudioNav from './StudioNav';
import Sidebar from './Sidebar';
// import HomeLayout from '../../customModules/features/HomeLayout';

const pageName = 'studio'

const StudioLayout = (props) => {
  const {children} = props;
  
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
      <StudioNav {...props}/>
      <div className="flex flex-1">
        <Sidebar/>
        <div className="flex-1 p-4 bg-dashBg">
        {children}
        </div>
      </div>
    </div>
  );
}


export default StudioLayout