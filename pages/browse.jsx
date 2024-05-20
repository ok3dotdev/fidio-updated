import React, { useState, useEffect } from 'react';
import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
import { fetchTickets } from '@/lib/utils';
import BrowseLayout from '../components/Layouts/browse/BrowseLayout';
import Ticket from '@/components/PurchaseTicketCard';

const pageName = 'browse';

const Page = (props) => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadTickets = async () => {
      setLoading(true);
      const tix = await fetchTickets(props?.apiUrl);
      setTickets(tix);
      setLoading(false);
    };

    loadTickets();
  }, [props?.apiUrl]);

  return (
    <div className='w-full h-screen'>
      <BrowseLayout>
        <div>
          <h3 className='text-2xl font-semibold'>Upcoming</h3>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-y-12 gap-x-4 items-center mt-6'>
            {!loading &&
              tickets &&
              tickets
                .slice(0, 20)
                .map((ticket, id) => (
                  <Ticket key={id} ticket={ticket} cdn={props.cdn} />
                ))}
          </div>
        </div>
      </BrowseLayout>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  return await getServerSidePropsDefault(context, pageDefaults[pageName]);
};

export default Page;
