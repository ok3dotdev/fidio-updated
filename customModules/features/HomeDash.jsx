<<<<<<< HEAD
import React, { useEffect } from 'react';
import { Feature } from '../../modules/search/feature';
import EventsGrid from './EventsGrid';
import { SliderBasic } from '../../modules/indexing/';
import FeaturedEvent from './FeaturedEvent';
import Upcoming from './Upcoming';
import { FetchHandler } from '../../modules/utility/fetch';
import { fireGlobalEvent } from '../../modules/utility/utility';
import LoadingSkeleton from './Skeleton';

const events = [
  {
    name: 'Afro Fusion Night',
    date: 'Nov 29th, 2023',
    venue: 'Lagos, Nigeria',
    img: '/img/internal/sharon5.png',
  },
  {
    name: 'Safari Beats Live',
    date: 'Dec 05th, 2023',
    venue: 'Nairobi, Kenya',
    img: '/img/internal/sharon6.png',
  },
  {
    name: 'Jungle Groove Party',
    date: 'Jan 1st, 2023',
    venue: 'Cape Town, South Africa',
    img: '/img/internal/sharon7.png',
  },
  {
    name: 'Desert Rhythms Concert',
    date: 'Nov 28th, 2023',
    venue: 'Marrakech, Morocco',
    img: '/img/internal/sharon8.png',
  },
  {
    name: 'Savannah Soundscape Live',
    date: 'Dec 20th, 2023',
    venue: 'Nairobi, Kenya',
    img: '/img/internal/sharon5.png',
  },
];

const HomeDash = (props) => {
  const [eventsData, setEventsData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const receiveData = (data) => {
    // ('data', data);
    setEventsData(data.data.fetchedData[0].productReq);
    setIsLoading(false);
    // ('events', eventsData);
  };

  const handleFireGlobalEvent = React.useCallback(async (e) => {
    fireGlobalEvent(e, props._LocalEventEmitter);
  });

  return (
    <div className='w-full h-full pb-8 '>
      <Feature {...props} hideToggle={true} defaultSize={'large'} />
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <FeaturedEvent {...props} data={eventsData} showTimer={true} />
      )}
      <div className='relative'>
        <div className='px-8'>
          <Upcoming events={events} title={'Coming Up'} />
        </div>
      </div>
      <EventsGrid />
      <FetchHandler
        {...props}
        handlerName='my_handler'
        handlerArgs={[
          {
            productReq: [
              '1da050fa-6be1-4926-9e10-cf0a9ee575a8',
              '68f37cef-a4f8-40d2-96aa-cdf57b0a220a',
            ],
          },
        ]}
        receiveData={receiveData}
      />
=======
import React from 'react';
import { Feature } from '../../modules/search/feature';
import EventsGrid from './EventsGrid';

const HomeDash = (props) => {
  return (
    <div className='px-8 w-full h-full overflow-scroll pb-24'>
      <Feature {...props} />
      <EventsGrid />
      <EventsGrid />
      <EventsGrid />
      <EventsGrid />
>>>>>>> pull-branch
    </div>
  );
};

export default HomeDash;
