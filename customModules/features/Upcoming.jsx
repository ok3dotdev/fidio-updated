import React, { useRef } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import { FetchHandler } from '../../modules/utility/fetch';
// import { fireGlobalEvent } from '../../modules/utility/utility';

// {
//   name: 'Tropical Vibes Night',
//   date: 'Nov 5th, 2023',
//   venue: 'Accra, Ghana',
//   img: '/img/internal/sharon5.png',
// },
// {
//   name: 'Rainforest Groovers Live',
//   date: 'Oct 30th, 2023',
//   venue: 'Kinshasa, DR Congo',
//   img: '/img/internal/sharon5.png',
// },
// {
//   name: 'Saharan Dreams Orchestra',
//   date: 'Nov 12th, 2023',
//   venue: 'Timbuktu, Mali',
//   img: '/img/internal/sharon5.png',
// },
// ];

{
  /* <FetchHandler
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
/>  */
}

const Upcoming = (props) => {
  // console.log('proppsssss', props);
  const scrollRef = useRef(null);

  const smoothScroll = (distance) => {
    const container = scrollRef.current;
    const startScrollPosition = container.scrollLeft;
    const targetScrollPosition = startScrollPosition + distance;
    let start = null;
    const duration = 500;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const timeFunction = Math.sin((progress / duration) * (Math.PI / 2));
      const currentDistance = timeFunction * distance;
      container.scrollLeft = startScrollPosition + currentDistance;
      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const scroll = (direction) => {
    const distance = direction === 'left' ? -350 : 350;
    smoothScroll(distance);
  };

  return (
    <div className='w-full mb-12 mt-12 relative '>
      <h2 className='text-2xl font-bold'>{props.title}</h2>
      <div
        className='flex gap-8 w-full overflow-x-auto relative no-scrollbar pt-8'
        ref={scrollRef}
      >
        {props.events.map(({ img, date, venue, name }, id) => (
          <Event img={img} date={date} venue={venue} key={id} name={name} />
        ))}
      </div>
      {props.events.length > 1 && (
        <div className='hidden lg:flex absolute top-1/2 transform -translate-y-1/2 left-0 right-0 justify-between px-4'>
          <button
            className='bg-gray-500 p-2 rounded-full opacity-70 hover:opacity-100'
            onClick={() => scroll('left')}
          >
            <ChevronLeftIcon />
          </button>
          <button
            className='bg-gray-500 p-2 rounded-full opacity-70 hover:opacity-100'
            onClick={() => scroll('right')}
          >
            <ChevronRightIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default Upcoming;

const Event = ({ img, name, venue, date }) => {
  return (
    <div className='min-w-[300px] min-h-[400px] lg:min-w-[339px] lg:min-h-[480px] inset-0 rounded-2xl overflow-hidden relative transform transition-transform duration-300 hover:-translate-y-1.5 flex flex-col justify-end items-center pb-12 hover:bg-black/40'>
      <div
        className='absolute rounded-2xl inset-0 bg-cover bg-center transform transition-transform duration-300 transition-filter hover:filter[blur(10px)]'
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>
      <div className='absolute top-0 left-0 mt-4 ml-4 bg-orange-300 rounded-md px-3 py-3 text-black'>
        <p className='text-xs'>{date.slice(0, 6)}</p>
      </div>
      <div className='absolute inset-0 bg-black opacity-40 transition-opacity hover:opacity-20'></div>
      <div className='z-10 relative text-orange-300'>
        {' '}
        <p className='text-lg lg:text-2xl font-black'>{name}</p>
        <p className='text-lg lg:text-xl font-black'>{venue}</p>
      </div>
    </div>
  );
};
