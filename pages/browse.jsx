import React, { useState, useEffect } from 'react';
import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
import {
  fetchTickets,
  groupByDate,
  generateDateRange,
  getDisplayDate,
} from '@/lib/utils';
import BrowseLayout from '../components/Layouts/browse/BrowseLayout';
import Ticket from '@/components/PurchaseTicketCard';
import { Loader2 } from 'lucide-react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const pageName = 'browse';

const Page = (props) => {
  const [tickets, setTickets] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadTickets = async () => {
      setLoading(true);
      const tix = await fetchTickets(props?.apiUrl);
      tix?.map((t, i) => console.log('date', t.name));
      const groupedTicketsByDate = groupByDate(tix);
      setTickets(groupedTicketsByDate);
      setLoading(false);
    };

    loadTickets();
  }, [props?.apiUrl]);

  const dateRange = generateDateRange(7);
  console.log('range', dateRange);

  return (
    <div className='w-full h-screen'>
      <BrowseLayout>
        <div>
          <h3 className='text-2xl font-semibold mb-12'>Upcoming</h3>
          {loading && (
            <div className='h-[500px] w-full flex items-center justify-center'>
              <Loader2 className='h-6 w-6 text-slate-300 animate-spin' />
            </div>
          )}
          {!loading &&
            tickets &&
            dateRange.map((_, i) => (
              <div className='flex w-full gap-4 md:gap-12 overflow-x-hidden mb-12 min-h-[250px]'>
                <div>
                  <DateComponent date={dateRange[i] + 'T00:00'} />
                </div>
                <Carousel
                  opts={{
                    align: 'start',
                  }}
                  arrows='top'
                  className='w-full'
                >
                  <div className='z-50 relative flex justify-end gap-2 mb-2'>
                    <CarouselPrevious arrows='top' className='z-24' />
                    <CarouselNext arrows='top' className='z-24' />
                  </div>
                  <CarouselContent className='z-2'>
                    {tickets[dateRange[i]]?.map((ticket, id) => (
                      <CarouselItem
                        key={id}
                        className='md:basis-1/2 lg:basis-1/3'
                      >
                        <div className='p-1'>
                          <Ticket key={id} ticket={ticket} cdn={props.cdn} />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            ))}
        </div>
      </BrowseLayout>
    </div>
  );
};

const DateComponent = ({ date }) => {
  const { month, weekday, day } = getDisplayDate(date);

  return (
    <div className='flex flex-col justify-center items-center gap-y-0'>
      <p className='text-xs text-dashtext'>{weekday}</p>
      <p className='text-2xl font-bold'>{day}</p>
      <p className='text-xs text-dashtext'>{month}</p>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  return await getServerSidePropsDefault(context, pageDefaults[pageName]);
};

export default Page;
