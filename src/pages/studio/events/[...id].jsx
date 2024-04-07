import React, { useState, useEffect } from 'react';
import StudioLayout from '@/components/Layouts/StudioLayout';

import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
import { getServerSidePropsFunc } from '/appServer/serverProps';

import { useRouter } from 'next/router';
import apiReq from '/modules/utility/api/apiReq';
import TicketLoadingSkeleton from '@/components/skeletons/TicketLoadingSkeleton';

import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { format } from 'date-fns';

const pageName = 'create';

const EventView = (props) => {
  const [ticket, setTicket] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
        id: router.query.id,
      });
      if (res && res.products) {
        setTicket(res.products[0] || []);
      }
      setLoading(false);
    }
  };

  if (!loading && ticket) {
    console.log('values', ticket);
  }

  return (
    <StudioLayout {...props}>
      <div className='px-2 md:px-8'>
        {!loading && ticket && (
          <div>
            <div className='relative  mb-[12rem]'>
              <div
                className='flex flex-col rounded-[8px] py-4 px-8 shadow-Txl gap-2 h-52 items-center justify-center bg-red-100'
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.94), rgba(0, 0, 0, 0)) ,url(${
                    props?.cdn?.static
                  }/${
                    ticket?.images &&
                    ticket?.images[0] &&
                    ticket?.images[0]?.name
                  })`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>

              <div className='grid grid-cols-1 xl:grid-cols-3 w-full  xl:gap-x-12 xl:space-y-8 mt-8 gap-y-4 md:items-start'>
                <div className='col-span-2'>
                  <div className='mb-4 flex justify-between xl:w-[80%]'>
                    <h1 className='text-3xl md:text-4xl font-bold '>
                      {ticket.name}
                    </h1>
                    <div>
                      <div className='bg-dashSides rounded-full p-1 flex justify-center items-center'>
                        <DriveFileRenameOutlineIcon className='w-8 h-8 p-1' />
                      </div>
                    </div>
                  </div>
                  <p className='text-dashtext mb-8 md:w-[80%]'>
                    {ticket?.detailmeta?.description}
                  </p>
                  <div className='mb-8'>
                    <p className='mb-2 font-semibold'> Date, time and venue</p>
                    <div className='text-dashtext flex gap-4 text-sm'>
                      <div className='flex items-center gap-1'>
                        <CalendarTodayOutlinedIcon
                          className='w-3'
                          style={{ width: '0.75rem' }}
                        />
                        <p className='font-medium'>
                          {ticket?.created?.split(' ')[0]}
                        </p>
                      </div>
                      <div className='flex items-center gap-1'>
                        <AccessTimeOutlinedIcon
                          className='w-3'
                          style={{ width: '0.75rem' }}
                        />
                        <p className='font-medium'>
                          {ticket?.meta?.startTime} - {ticket?.meta?.endTime}
                        </p>
                      </div>
                      <div className='flex items-center gap-1'>
                        <FmdGoodOutlinedIcon
                          className='w-3'
                          style={{ width: '0.75rem' }}
                        />
                        <p className='font-medium'>{ticket?.meta?.venue}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className='mb-4 font-semibold'>Performers</p>
                    <div className='text-white grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-4 text-sm'>
                      {ticket?.detailmeta?.lineup?.map((art, idx) => (
                        <div
                          key={idx}
                          className='flex flex-col gap-2 items-center max-w-[12rem]'
                        >
                          <div className='w-full rounded-full'>
                            <img
                              alt=''
                              src={`${props?.cdn?.static}/${art?.image}`}
                              className='w-full h-full rounded-[50%] object-cover aspect-square'
                            />
                          </div>
                          <p className='text-lg'>{art?.title || 'No name'}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {ticket?.meta?.host && (
                    <div className='mt-8'>
                      <p className='mb-4 font-semibold'>About the host</p>
                      <div className='text-white space-y-2 text-sm bg-dashSides p-4 px-4 rounded-[6px] md:max-w-[70%]'>
                        <p className='font-semibold'>
                          {ticket?.meta?.host?.title}
                        </p>
                        <p className='text-dashtext'>
                          {ticket?.meta?.host?.bio}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div className=''>
                  <div className='border-dashed border-[1px] border-dashBorder border-opacity-[0.3] rounded-lg p-4 md:mt-0 mt-8 md:h-[50%]'>
                    <p className='text-dashtext font-medium'>
                      TICKET INFORMATION
                    </p>
                    <div className='flex justify-between mt-8 items-center border-b-[1px] border-dashed py-4 mb-4 border-dashBorder'>
                      <p className='font-semibold'>Price</p>
                      <p className='font-bold text-xl'>
                        $
                        {ticket?.styles &&
                          ticket?.styles[0] &&
                          ticket?.styles[0]?.price}
                      </p>
                    </div>
                  </div>
                  <div className='mt-8 mx-auto'>
                    <div className='flex flex-col space-y-4 items-center bg-dashSides rounded-[8px] p-8'>
                      <p className='text-dashtext font-semibold'>
                        THIS EVENT BEGINS IN
                      </p>
                      <p className='text-3xl font-semibold'>45mins 29s</p>
                      <button className='bg-dashBorder py-2 rounded-[6px] w-full dark:hover:opacity-[0.9] dark:hover:bg-accentY dark:hover:outline-[0] dark:hover:shadow-none opacity-[0.3] font-semibold'>
                        Start stream
                      </button>
                      <p className='text-dashtext text-sm'>
                        You can go live on your event{' '}
                        <span className='text-white'>1 hour </span>before the
                        official start time. For more details, check out our
                        <span className='text-white '>Terms of Use.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </StudioLayout>
  );
};

export const getServerSideProps = async (context) => {
  let currentProps = await getServerSidePropsDefault(
    context,
    pageDefaults[pageName]
  );
  return await getServerSidePropsFunc(currentProps, context);
};

export default EventView;
