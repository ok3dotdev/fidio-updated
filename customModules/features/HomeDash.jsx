import React from 'react';
import { Feature } from '../../modules/search/feature';
import EventsGrid from './EventsGrid';
import { SliderBasic } from '../../modules/indexing/';
import FeaturedEvent from './FeaturedEvent';
import Upcoming from './Upcoming';
import MarqueeComponent from './Marquee';
import Footer from './Footer';

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
  return (
    <div className='w-full h-full pb-24 '>
      <Feature {...props} />
      <FeaturedEvent />
      <div className='relative'>
        <Upcoming />
      </div>
      <EventsGrid />
      {/* <MarqueeComponent /> */}
      {/* <Footer /> */}
      {/* <SliderBasic items={items} /> */}
    </div>
  );
};

export default HomeDash;
