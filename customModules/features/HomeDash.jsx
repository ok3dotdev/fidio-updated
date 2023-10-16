import React from 'react';
import { Feature } from '../../modules/search/feature';
import EventsGrid from './EventsGrid';
import { SliderBasic } from '../../modules/indexing/';
import FeaturedEvent from './FeaturedEvent';
import Upcoming from './Upcoming';
import MarqueeComponent from './Marquee';
import Footer from './Footer';
import { FetchHandler } from '../../modules/utility/fetch';
import { fireGlobalEvent } from '../../modules/utility/utility';

const items = [
  {
    img: '/img/internal/sharon.png',
    width: '100%',
    heading: 'Teriya Live in Concert',
    description: 'Nov 24 2023',
    buttonLink: '....',
    status: 'UPCOMING',
  },
  {
    img: '/img/internal/sharon3.png',
    width: '100%',
    heading: ' Lokay Live from Monaco Theatre',
    description: 'Oct 25 2023',
    buttonLink: '....',
    status: 'UPCOMING',
  },
  {
    img: '/img/internal/sharon5.png',
    width: '100%',
    heading: 'SummerTop Band Live from SoftRock Hall',
    description: 'Oct 31 2023',
    buttonLink: '....',
    status: 'UPCOMING',
  },
];

const HomeDash = (props) => {
  const receiveData = (data) => {
    console.log('data1111', data);
  };

  const handleFireGlobalEvent = React.useCallback(async (e) => {
    fireGlobalEvent(e, props._LocalEventEmitter);
  });

  return (
    <div className='w-full h-full pb-24 '>
      <Feature {...props} />
      <FeaturedEvent />
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
              'b208c40c-6503-491a-a0ca-f1ce85d02d17',
              'bed6d9f6-7760-4d70-82fc-badd7d43635a',
            ],
          },
        ]}
        receiveData={receiveData}
      />
      {/* <MarqueeComponent /> */}
      {/* <Footer /> */}
      {/* <SliderBasic items={items} /> */}
      <button
        onClick={handleFireGlobalEvent}
        item={'b208c40c-6503-491a-a0ca-f1ce85d02d17'}
        selectedstyle={'0441f2a2-4f6c-47b6-bb42-831708287de7'}
        currentoption={'70756244-2924-48b1-898f-eb7e4228b5cb'}
        action='add_to_cart'
      >
        Add To Cart
      </button>
    </div>
  );
};

export default HomeDash;

{
  /* <button onClick={handleFireGlobalEvent} item={props.product.id} selectedstyle={selectedStyle} currentoption={currentOption} action='buy'>Buy Now</button> */
}
