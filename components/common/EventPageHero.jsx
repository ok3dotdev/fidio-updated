import React from 'react';

const EventPageHero = ({ info, ticket }) => {
  // //console.log(
  //   'info',
  //   `${info?.cdn?.static}/${
  //     ticket?.images && ticket?.images[0] && ticket?.images[0]?.name
  //   }`
  // );
  // //console.log('cdn', info);
  return (
    <div className='h-[70vh] w-full relative'>
      {info?.cdn?.static &&
        ticket?.images &&
        ticket?.images[0] &&
        ticket?.images[0]?.name && (
          <img
            src={`${info?.cdn?.static}/${
              ticket?.images && ticket?.images[0] && ticket?.images[0]?.name
            }`}
            alt=''
            className='object-cover w-full h-full bg-center'
          />
        )}
      <div className='absolute bg-gradient-to-t from-gradientLight to-gradientDark right-0 top-0  w-full h-full'></div>
    </div>
  );
};

export default EventPageHero;
