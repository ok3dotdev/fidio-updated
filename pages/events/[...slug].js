/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
import { getServerSidePropsFunc } from '/appServer/serverProps';
import Cart from '/modules/ecommerce/cart/CartInternal';

import HomeLayout from '/customModules/features/HomeLayout';
import apiReq from '/modules/utility/api/apiReq';
import EventPageHero from '../../components/common/EventPageHero';

import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import ShareIcon from '@mui/icons-material/Share';
import { fireGlobalEvent } from '/modules/utility/utility';

import Button from '@/components/ui/button';
import { fontFamily } from '@mui/system';
const pageName = 'events';

export const Page = (props) => {
  const [ticket, setTicket] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    fetchTickets();
  }, [props?._loggedIn?.identifier]);

<<<<<<< HEAD
  console.log('slug', router.query.slug);
=======
  // props._toggleSingleOpenMenu(e, 'cart');

  // //console.log('slug', router.query.slug);
>>>>>>> Fidio-resources-branch

  const fetchTickets = async () => {
    setLoading(true);
    if (props && props?._loggedIn?.identifier) {
      const res = await apiReq('/product/getProducts', {
        apiUrl: props?.apiUrl,
        pagination: 0,
        id: router.query.slug,
      });
      if (res && res.products) {
        setTicket(res.products[0] || []);
        setLoading(false);
      } else {
        setError(true);
        setTicket([]);
      }
    }
  };
  const handleOpenCart = (e) => {
    handleAddProduct(e);
    props._toggleSingleOpenMenu(e, 'cart');
    if (props?._openMenu?.currentMenu === 'cart') {
      setCartOpen(false);
    } else {
      setTimeout(() => {
        setCartOpen(true);
      }, 150);
    }
  };
  const handleAddProduct = React.useCallback(async (e) => {
    fireGlobalEvent(e, props._LocalEventEmitter); // Dependent on {...props} in this component use
  });
  if (!loading && ticket) {
    // //console.log('values', ticket);
  }

  return (
    <div className='relative'>
      <HomeLayout pageName={pageName} pageData={''} props={props}>
        <div
          style={{
            display: cartOpen ? 'block' : 'none',
            fontFamily: 'lexend !important',
          }}
        >
          {<Cart {...props} />}
        </div>
        {error && (
          <h1>There was an error with this page. We are looking into it.</h1>
        )}
        {ticket && (
          <>
            <EventPageHero info={props} ticket={ticket} />
            <div className='bg-dashBg py-12 px-4 md:px-8 font-lexend'>
              <div className='flex flex-col md:flex-row w-full justify-between max-w-6xl mx-auto'>
                <div className='col-span-2 md:w-[600px]'>
                  <div className='mb-2 flex justify-between'>
                    <h1 className='text-3xl font-bold'>{ticket.name}</h1>
                    <div>
                      <div className='bg-dashSides rounded-full p-1 flex justify-center items-center cursor-pointer z-10'>
                        <ShareIcon className='w-8 cursor-pointer' />
                      </div>
                    </div>
                  </div>
                  <p className='text-dashtext mb-8'>
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
                          {ticket?.meta?.startTime || '00'} -{' '}
                          {ticket?.meta?.endTime || '00'}
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
                    <p className='mb-2 font-semibold'>Performers</p>
                    <p className='text-dashtext mb-4'>HEADLINER</p>
                    {ticket?.detailmeta?.lineup?.length && (
                      <div className='flex gap-4 items-center w-[8rem] mb-4'>
                        <img
                          alt='headliner'
                          src={`${props?.cdn?.static}/${ticket?.detailmeta?.lineup[0].image}`}
                          className='w-full h-full rounded-[50%] object-cover aspect-square'
                        />
                        <div>
                          <p className='text-lg'>
                            {ticket?.detailmeta?.lineup[0].title || 'No name'}
                          </p>
                          <p className='text-dashtext text-sm'>
                            {ticket?.detailmeta?.lineup[0].bio || 'No bio'}
                          </p>
                        </div>
                      </div>
                    )}
                    <p className='text-dashtext mt-8  mb-4'>OTHER PERFORMERS</p>
                    <div className='text-white flex flex-wrap grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-12 space-y-4 text-sm '>
                      {ticket?.detailmeta?.lineup
                        ?.slice(1, ticket?.detailmeta?.lineup?.length)
                        .map((art, idx) => (
                          <div
                            key={idx}
                            className='flex flex-col gap-2 items-center w-[8rem]'
                          >
                            <img
                              alt=''
                              src={`${props?.cdn?.static}/${art?.image}`}
                              className='w-full h-full rounded-[50%] object-cover aspect-square'
                            />
                            <p className='text-lg'>{art?.title || 'No name'}</p>
                          </div>
                        ))}
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
                </div>
                <div className='border-dashed border-[1px] border-dashBorder border-opacity-[0.3] rounded-lg p-4 md:mt-0  md:w-[300px] h-full mt-8'>
                  <div className='flex justify-between items-center border-dashBorder'>
                    <p className='font-semibold'>Price</p>
                    <p className='font-bold text-xl'>
                      $
                      {ticket?.styles &&
                        ticket?.styles[0] &&
                        ticket?.styles[0]?.price}
                    </p>
                  </div>
                  <button
                    className='bg-accentY w-full p-2 rounded-[6px] font-semibold mt-4'
                    onClick={handleOpenCart}
                    item={ticket?.id}
                    selectedstyle={ticket?.style}
                    currentoption={ticket?.style?.opetion[0]}
                    action='add_to_cart'
                  >
                    Get tickets
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </HomeLayout>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  let currentProps = await getServerSidePropsDefault(
    context,
    pageDefaults[pageName]
  );
  return await getServerSidePropsFunc(currentProps, context);
};

export default Page;
