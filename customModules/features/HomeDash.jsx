import React, { useEffect } from 'react';
import { Feature } from '../../modules/search/feature';
import EventsGrid from './EventsGrid';
import { SliderBasic } from '../../modules/indexing/';
import FeaturedEvent from './FeaturedEvent';
import Upcoming from './Upcoming';
import { FetchHandler } from '../../modules/utility/fetch';
import { fireGlobalEvent } from '../../modules/utility/utility';
import LoadingSkeleton from './Skeleton';

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
        <FeaturedEvent {...props} data={eventsData} showTimer={true}/>
      )}
      <div className='relative'>
        <Upcoming />
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
    </div>
  );
};

export default HomeDash;
