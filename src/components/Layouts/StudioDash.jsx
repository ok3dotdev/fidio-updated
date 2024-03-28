import React, { useState, useEffect } from 'react';
import SalesCard from '@/components/SalesCard';
import EventStatusSteps from '@/components/steps/EventStatusSteps';
import apiReq from '/modules/utility/api/apiReq';
import TicketLoadingSkeleton from '@/components/skeletons/TicketLoadingSkeleton';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Input } from '@/components/ui/input';
import Ticket from '../Ticket';

const StudioDash = (props) => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const ticketSales = {
    title: 'Tickets Sold',
    amount: '$1234.00',
  };
  const ticketRevenue = {
    title: 'Ticket revenue',
    amount: '12',
  };
  const { username } = props?._loggedIn;
  const capitalizedUsername = username
    ? username.charAt(0).toUpperCase() + username.slice(1)
    : '';

  useEffect(() => {
    fetchTickets();
  }, [props?._loggedIn?.identifier]);

  const fetchTickets = async () => {
    setLoading(true);
    if (props && props?._loggedIn?.identifier) {
      const res = await apiReq('/product/getProducts', {
        apiUrl: props?.apiUrl,
        pagination: 0,
        extra: {
          owner: props?._loggedIn?.identifier,
        },
      });
      if (res && res.products) {
        const tix = res.products.sort((a, b) => {
          const dateA = new Date(a.created);
          const dateB = new Date(b.created);
          return dateB - dateA;
        });
        setTickets(tix || []);
        if (tickets) {
          console.log('tix', tickets);
          setLoading(false);
        }
      }
    }
  };
  return (
    <div className='mt-[2rem] mb-12'>
      <div className='mb-2 grid xl:grid-cols-4 gap-2 md:grid-cols-2 grid-cols-2'>
        <Card className='rounded-[8px] font-lexend font-normal text-dashtext dark:bg-dashSides'>
          <CardHeader>
            <CardTitle className='font-lexend font-normal text-dashtext'>
              Total Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className='font-lexend text-3xl font-bold'>
              {/* {ticketRevenue.amount} */}
              $2,500.00
            </p>
          </CardContent>
        </Card>
        <Card className='rounded-[8px] font-lexend font-normal text-dashtext dark:bg-dashSides'>
          <CardHeader>
            <CardTitle className='font-lexend font-normal text-dashtext'>
              Events Hosted
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className='font-lexend text-3xl font-bold'>
              {/* {ticketSales.amount} */}
              50
            </p>
          </CardContent>
        </Card>
        <Card className='rounded-[8px] font-lexend font-normal text-dashtext dark:bg-dashSides'>
          <CardHeader>
            <CardTitle className='font-lexend font-normal text-dashtext'>
              Tickets sold
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className='font-lexend text-3xl font-bold'>131</p>
          </CardContent>
        </Card>
        <Card className='rounded-[8px] font-lexend font-normal text-dashtext dark:bg-dashSides'>
          <CardHeader>
            <CardTitle className='font-lexend font-normal text-dashtext'>
              Total streamers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className='font-lexend text-3xl font-bold'>300K</p>
          </CardContent>
        </Card>
      </div>
      <div className='grid xl:grid-cols-2 gap-2'>
        <div className='dark:bg-dashSides h-[300px] p-4 font-lexend rounded-[8px]'>
          Revenue growth
        </div>
        <div className='dark:bg-dashSides h-[300px] p-4 font-lexend rounded-[8px] '>
          Audience growth
        </div>
      </div>
      <div className='mt-8 flex justify-between p-1 items-center'>
        <h3 className='font-lexend font-medium'>YOUR EVENTS</h3>
        <div className='flex items-center gap-2'>
          <p className='font-lexend'>Sort by:</p>
          <div className='flex gap-2'>
            <Select className='font-lexend'>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Please choose' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='apple'>Most recent</SelectItem>
                  <SelectItem value='banana'>Banana</SelectItem>
                  <SelectItem value='blueberry'>Blueberry</SelectItem>
                  <SelectItem value='grapes'>Grapes</SelectItem>
                  <SelectItem value='pineapple'>Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className='relative'>
              <Input
                placeholder='Search'
                className='text-muted-foreground font-lexend'
              />
              <SearchOutlinedIcon className='absolute right-2 top-2.5 h-4 w-4 text-muted-foreground' />
            </div>
          </div>
        </div>
      </div>
      {!loading && tickets.length && (
        <div className='my-8 space-y-2 mb-12'>
          {tickets.map((m, index) => (
            <Ticket info={props} ticketData={m} key={index} />
          ))}
        </div>
      )}
      {loading && (
        <div className='mt-12 space-y-4'>
          <TicketLoadingSkeleton />
          <TicketLoadingSkeleton />
          <TicketLoadingSkeleton />
        </div>
      )}
    </div>
  );
};

export default StudioDash;
