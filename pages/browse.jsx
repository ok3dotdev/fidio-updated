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

const pageName = 'browse';

const Page = (props) => {
  const [tickets, setTickets] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadTickets = async () => {
      setLoading(true);
      const tix = await fetchTickets(props?.apiUrl);
      const groupedTicketsByDate = groupByDate(tix);
      setTickets(groupedTicketsByDate);
      setLoading(false);
    };

    loadTickets();
  }, [props?.apiUrl]);

  const dateRange = generateDateRange(7);

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
            dateRange.map(
              (_, i) =>
                tickets[dateRange[i]] &&
                tickets[dateRange[i]].length > 0 && (
                  <div className='flex w-full gap-12 '>
                    <div>
                      <DateComponent date={dateRange[0] + 'T00:00'} />
                    </div>
                    <div>
                      {tickets[dateRange[i]].map((ticket, id) => (
                        <Ticket key={id} ticket={ticket} cdn={props.cdn} />
                      ))}
                    </div>
                  </div>
                )
            )}
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
