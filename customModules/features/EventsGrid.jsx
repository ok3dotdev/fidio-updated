import React from 'react';
import { upcomingEvents } from './data';
import Marquee from 'react-fast-marquee';

const EventsGrid = () => {
  // Duplicate the first and last elements to create a loop effect
  const eventsWithLoop = [
    ...upcomingEvents,
    upcomingEvents[0],
    upcomingEvents[upcomingEvents.length - 1],
  ];

  return (
    <div className='w-full mb-12 mt-12 px-2 lg:px-8'>
      <h2 className='text-2xl font-bold'>Past Shows</h2>
      <div className='mt-8'>
        <Marquee
          style={{
            display: 'flex-wrap',
            gap: '0',
            marginLeft: '-16px',
            marginRight: '-16px',
          }}
          className='w-full flex '
          pauseOnClick={true}
          speed={20}
        >
          {eventsWithLoop.map(({ img, title, artist, date, price }, index) => (
            <Events
              key={index}
              title={title}
              artist={artist}
              date={date}
              price={price}
              img={img}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default EventsGrid;

const Events = ({ title, artist, date, price, img }) => {
  return (
    <div className='max-w-[200px] lg:max-w-[400px] mr-4 transition-transform duration-300 overflow-hidden font-Archivo'>
      <div className='h-[200px] rounded-md mb-2 min-h-[200px] overflow-hidden relative transform transition-transform duration-300'>
        <img className='w-full object-cover h-full' src={img} alt='' />
        <div className='absolute inset-0 bg-black opacity-30 transition-opacity hover:opacity-20'></div>
        <div className='absolute top-0 left-0 mt-4 ml-4 bg-orange-300 rounded-md p-2'>
          <div className='absolute inset-0 bg-black opacity-40 transition-opacity hover:opacity-20 rounded-md'></div>
          <p className='text-xs text-black z-20'>{date.slice(0, 6)}</p>
        </div>
        <div className='absolute bottom-0 left-0 mb-4 ml-4'>
          <h3 className='text-white text-lg font-Archivo'>{title}</h3>
          {/* <p className='text-gray-900'>{artist}</p>
          <p className='text-gray-900'>${price}</p> */}
        </div>
      </div>
    </div>
  );
};
