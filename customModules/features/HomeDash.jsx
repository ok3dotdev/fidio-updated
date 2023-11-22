import React from 'react';
import { Feature } from '../../modules/search/feature';
// import EventsGrid from './EventsGrid';

const HomeDash = (props) => {
  return (
    <div className='px-8 w-full h-full overflow-scroll pb-24'>
      <Feature {...props} />
      {/* <EventsGrid />
      <EventsGrid />
      <EventsGrid />
      <EventsGrid /> */}
    </div>
  );
};

export default HomeDash;
