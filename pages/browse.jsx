import React, { useState, useEffect } from 'react';
import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
import { getServerSidePropsFunc } from '/appServer/serverProps';
import apiReq from '/modules/utility/api/apiReq';
import BrowseLayout from '../components/Layouts/BrowseLayout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const pageName = 'browse';

const page = (props) => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTickets = async () => {
    setLoading(true);

    let extraObject = {
      owner: props?._loggedIn?.identifier,
    };

    const res = await apiReq('/product/getProducts', {
      apiUrl: props?.apiUrl,
      pagination: 0,
    });
    if (res && res.products) {
      const tix = res.products.sort((a, b) => {
        const dateA = new Date(a.created);
        const dateB = new Date(b.created);
        return dateB - dateA;
      });
      setTickets(tix || []);
      setLoading(false);
    }
    if (!loading && tickets) {
      console.log('tix', res.products);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  console.log('props', props);
  return (
    <div className='w-full h-screen'>
      <BrowseLayout>
        <div>
          <h3 className='text-2xl font-semibold'>Upcoming</h3>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-y-12 gap-x-4  items-center mt-6'>
            {!loading &&
              tickets &&
              tickets.slice(0, 20).map((ticket, id) => (
                <Link href={`/events/${ticket.id}`}>
                  <img
                    src={`${props?.cdn?.static}/${ticket.images[0]?.name}`}
                    className='h-[250px] aspect-square object-cover w-full rounded-[8px]'
                  />
                  <div className='mt-2'>
                    <p className='font-semibold'>{ticket.name}</p>
                    <div className='flex w-full justify-between mt-4'>
                      {ticket?.meta?.host?.title && (
                        <div className=' space-y-0 self-start'>
                          <p className='text-xs text-dashtext'>HOST</p>
                          <p className='mt-0 leading-[1rem]'>
                            {ticket?.meta?.host?.title}
                          </p>
                        </div>
                      )}
                      <Button className='self-end ml-auto'>Buy</Button>
                    </div>
                  </div>
                </Link>
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

export default page;
