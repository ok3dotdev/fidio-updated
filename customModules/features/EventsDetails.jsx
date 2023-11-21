import React from 'react';

const EventsDetails = (props) => {
  // const data = props?.data?.detailmeta?.lineup;
  // ('cdn', data);
  const data = [
    {
      image: '/img/internal/odumo-mobile.png',
      title: 'ODUMODUBLVCK',
      host: [
        {
          name: 'FRIDAES at Cave',
        },
      ],
      sponsors: [
        {
          name: 'Grand Oak Ltd.',
        },
      ],
    },
  ];
  return (
    <div className=' pt-[20px] pb-[20px] text-2xl lg:px-8 px-4 '>
      <div className='px-2 py-6 max-w-4xl text-lg lg:text-2xl'>
        <p className='font-sans'>
          Join ODUMODUBLVCK live from Birmingham, UK. Powered by FRIDAES at
          Cave.
        </p>
        <p className='font-sans mt-2'>
          ODUMODUBLVCK is one of the most exciting voices out of the Nigeria.
          Whilst being a pioneering voice of Drill music in Nigeria, he operates
          under a self-defined genre he calls Okporoko Rhythms: a form of
          Hip-Hop that takes influences from Grime, Fela Kuti’s Afrobeat, and
          Progressive R&B. Since the release of his first single in 2017,
          ODUMODUBLVCK has been on a one-man-mission to be the author of his own
          story.
        </p>
      </div>
      <div className='flex flex-col lg:flex-row w-full justify-between items-center max-w-3xl mb-12'>
        <div>
          <h2 className='text-center lg:text-left mt-8 mb-4'>Line Up</h2>
          <div className='flex flex-col gap-8 lg:flex-row justify-between '>
            {data?.slice(0, 5).map((item, index) => {
              return (
                <div key={index} className='flex flex-col items-center'>
                  {/* <img
                src={`${props.cdn.static}/${item.image}`}
                className='h-24 w-24 rounded-full bg-green-600 object-cover'
              ></img> */}
                  <img
                    src={item.image}
                    className='lg:h-48 lg:w-48 h-24 w-24 rounded-full object-cover'
                  ></img>
                  <span className='text-sm mt-2'>{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h2 className='text-center lg:text-left mt-12 mb-4'>Host</h2>
          <div className='flex flex-col lg:flex-row'>
            <div className='flex flex-col items-center'>
              <div className='lg:h-48 lg:w-48 h-24 w-24 rounded-full '>
                <img
                  src='/img/internal/frideas.png'
                  className='h-24 w-48 object-cover'
                ></img>{' '}
              </div>
              <span className='text-sm mt-2'>FRIDAES at Cave</span>
            </div>
          </div>
        </div>
        {/* <div>
          <h2 className='text-center lg:text-left mb-4 mt-12'>Sponsor</h2>
          <div className='flex flex-col lg:flex-row '>
            <div className='flex flex-col items-center'>
              <div className='lg:h-48 lg:w-48 h-24 w-24'>
                <img
                  src='/img/internal/GrandOakLogo.png'
                  className='lg:h-48 lg:w-48 h-24 w-24 object-cover'
                ></img>{' '}
              </div>
              <span className='text-sm mt-2'>Grand Oak Ltd.</span>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className='flex flex-col gap-8 lg:flex-row justify-between '>
        {data?.slice(0, 5).map((item, index) => {
          return (
            <div key={index} className='flex flex-col items-center'>
              <img
                src={`${props.cdn.static}/${item.image}`}
                className='h-48 w-48 rounded-full bg-green-600 object-cover'
              ></img>
              <span className='text-sm mt-2'>{item.title}</span>
            </div>
          );
        })}
      </div> */}
      {/* <h2 className='text-center lg:text-left mt-12 mb-4'>Host</h2>
      <div className='flex flex-col lg:flex-row '>
        <div className='flex flex-col items-center'>
          <div className='h-48 w-48  bg-green-600'></div>
          <span className='text-sm mt-2'>Wura sol</span>
        </div>
      </div>
      <h2 className='text-center lg:text-left mb-4 mt-12'>Sponsors</h2>
      <div className='flex flex-col lg:flex-row '>
        <div className='flex flex-col items-center'>
          <div className='h-48 w-24  bg-green-600'></div>
          <span className='text-sm mt-2'>Wura sol</span>
        </div>
      </div> */}
    </div>
  );
};

export default EventsDetails;
