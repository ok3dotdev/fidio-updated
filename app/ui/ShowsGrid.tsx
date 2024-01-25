import React from 'react';
import Image from 'next/image';

const events = [
  {
    img: '/img/internal/home-banner-mobile1.png',
    date: 'Jan 14',
    title: 'TINY’S CONDO SESSION',
    location: 'Lagos, Nigeria',
    genre: 'Afrobeats, Afrolive',
  },
  {
    img: '/img/internal/home-cover-mobile.png',
    date: 'Dec 08',
    title: 'Peruzzi',
    location: 'Lagos, Nigeria',
    genre: 'Afrobeats, Afrolive, Amapiano',
  },
  {
    img: '/img/internal/altsound_comp.jpg',
    date: 'Nov 04',
    title: 'Alternate Sound',
    location: 'Lagos, Nigeria',
    genre: 'Afrobeats',
  },
  {
    img: '/img/internal/ODUMO-old.jpg',
    date: 'Nov 24',
    title: 'Odumodu Blvck',
    location: 'Birmingham, England',
    genre: 'Okporoko Rhythms',
  },
  {
    img: '/img/internal/sewa.jpg',
    date: 'Oct 22',
    title: 'Sewa',
    location: 'Toronto, Canada',
    genre: 'Afrobeats R&B',
  },
  {
    img: '/img/internal/lagosparty.jpg',
    date: 'Sep 30',
    title: 'Kris Hans & Top Striker',
    location: 'Toronto, Canada',
    genre: 'Afrobeats',
  },
];

const ShowGrid = () => {
  return (
    <div className='px-4 lg:px-6 max-w-7xl mx-auto py-24'>
      <h3 className='text-[24px] lg:text-[48px] font-bold'>Shows</h3>
      <div className='flex gap-4 overflow-x-auto no-scrollbar mt-8'>
        {events.map((event, index) => (
          <div className='bg-[#181818] rounded-[20px] p-4 relative' key={index}>
            <div className=''>
              <div className='relative rounded-[20px] h-[320px] w-[252px]'>
                <Image
                  width={500}
                  height={500}
                  className='h-full object-cover rounded-[20px]'
                  src={event.img}
                  alt=''
                />
                <p className='absolute text-sm font-sans top-4 right-4 text-black font-bold bg-white px-4 py-2 rounded-[20px]'>
                  {event.date}
                </p>
              </div>
              <p className='mt-4'>{event.title}</p>
              <p className='text-sm font-sans font-bold'>{event.location}</p>
              <p className='text-sm font-sans'>{event.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowGrid;
