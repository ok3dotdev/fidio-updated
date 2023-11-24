import React from 'react';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import Upcoming from './Upcoming';

const events = [
  {
    name: 'Afro Fusion Night',
    date: 'Nov 29th, 2023',
    venue: 'Lagos, Nigeria',
    img: '/img/internal/sharon5.png',
  },
  // {
  //   name: 'Safari Beats Live',
  //   date: 'Dec 05th, 2023',
  //   venue: 'Nairobi, Kenya',
  //   img: '/img/internal/sharon6.png',
  // },
  // {
  //   name: 'Jungle Groove Party',
  //   date: 'Jan 01, 2023',
  //   venue: 'Cape Town, South Africa',
  //   img: '/img/internal/sharon7.png',
  // },
  // {
  //   name: 'Desert Rhythms Concert',
  //   date: 'Nov 28th, 2023',
  //   venue: 'Marrakech, Morocco',
  //   img: '/img/internal/sharon8.png',
  // },
  // {
  //   name: 'Savannah Soundscape Live',
  //   date: 'Dec 20th, 2023',
  //   venue: 'Nairobi, Kenya',
  //   img: '/img/internal/sharon5.png',
  // },
];

const EventsDetails = (props) => {
  // const data = props?.data?.detailmeta?.lineup;
  // ('cdn', data);
  const data = [
    {
      image: '/img/internal/odu-portrait.png',
      title: 'ODUMODU BLVCK',
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
    <div className=' pt-[20px] pb-[20px] text-2xl lg:px-8 px-4 overflow-x-hidden'>
      <div className='flex flex-col lg:flex-row gap-4 w-full justify-between mb-8'>
        <div className='w-full '>
          <h2 className='text-xl'>About</h2>
          <p className='font-sans text-xl mb-4 lg:w-[70%]'>
            Join ODUMODU BLVCK live from Birmingham, UK. Powered by FRIDAES at
            Cave.
          </p>
          <p className='font-sans text-xl mb-4 lg:w-[70%]'>
            ODUMODUBLVCK is one of the most exciting voices out of the Nigeria.
            Whilst being a pioneering voice of Drill music in Nigeria, he
            operates under a self-defined genre he calls Okporoko Rhythms: a
            form of Hip-Hop that takes influences from Grime, Fela Kuti’s
            Afrobeat, and Progressive R&B. Since the release of his first single
            in 2017, ODUMODUBLVCK has been on a one-man-mission to be the author
            of his own story.
          </p>
          <div className='lg:grid lg:grid-cols-2 gap-y-8 mt-8 flex flex-col'>
            <div className=' border-t pt-4 border-[#2F333A] lg:border-none'>
              <h3 className='text-lg'>Host</h3>
              <p className='font-sans text-sm mb-1'>FRIDAES at Cave</p>
            </div>
            <div className=' border-t pt-4 border-[#2F333A] lg:border-none'>
              <h3 className='text-lg'>Ticket price</h3>
              <p className='font-sans text-sm'>Free</p>
            </div>
            <div className=' border-t py-3 border-[#2F333A] lg:border-none'>
              <h3 className='text-lg'>Genre</h3>
              <p className='font-sans text-sm'>Afrobeats, Okporoko rythms</p>
            </div>
            <div className=' border-t pt-4 border-[#2F333A] lg:border-none'>
              <h3 className='text-lg'>Date</h3>
              <p className='font-sans text-sm'>Friday, November 24, 2023</p>
            </div>
            <div className=' border-t pt-4  border-[#2F333A] lg:border-none'>
              <h3 className='text-lg'>Location</h3>
              <p className='font-sans text-sm'>Birmingham, England</p>
            </div>
            <div className='border-b py-6 border-t pt-4 border-[#2F333A] lg:border-none'>
              <h3 className='text-lg'>Time</h3>
              <p className='font-sans text-sm'>2:00 AM GMT</p>
            </div>
          </div>
          <div className='flex flex-col items-start mt-8'>
            <div>
              <h2 className='text-center lg:text-left mb-4'>Line Up</h2>
              <div className='flex flex-col gap-8 lg:flex-row justify-between '>
                {data?.slice(0, 5).map((item, index) => {
                  return (
                    <div key={index} className='flex flex-col items-center'>
                      <img
                        src={item.image}
                        className='lg:h-24 lg:w-24 h-24 w-24 rounded-full object-cover'
                      ></img>
                      <span className='text-sm mt-2 font-sans'>
                        {item.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <h2 className='text-center lg:text-left mt-12 mb-4'>Host</h2>
              <div className='flex flex-col lg:flex-row'>
                <div className='flex flex-col items-center'>
                  <div className='lg:h-24 lg:w-24 h-24 w-24 rounded-full '>
                    <img
                      src='/img/internal/frideas.png'
                      className='h-24 w-48 object-cover'
                    ></img>{' '}
                  </div>
                  <span className='text-sm mt-2 font-sans'>
                    FRIDAES at Cave
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:max-w-[50%] mt-8'>
          <div className='bg-[#222428] opacity-[87%] rounded-[20px] p-4 lg:mt-[100px]'>
            <div className='flex gap-2 items-center opacity-100'>
              <div className='bg-[#2F333A] rounded-[20px] p-2 px-4 flex justify-center items-center'>
                <VolunteerActivismOutlinedIcon className='w-[16px] h-[16px]' />
              </div>
              <h3 className='font-sans font-bold text-xl opacity-100'>
                Support our mission
              </h3>
            </div>
            <p className='font-sans font-normal text-sm mt-4 mb-4 opacity-100'>
              This event is free so that everyone can enjoy live Afrobeats this
              Christmas season. If you love our mission of bringing live African
              performances to the world, consider supporting us. Thank you.{' '}
            </p>
            <a
              className='bg-white text-black rounded-xl px-4 py-2 text-sm mt-12 font-sans opacity-100 font-bold'
              href='https://donate.stripe.com/9AQfYZeX66lZ1yM28b'
              target='_blank'
            >
              Donate
            </a>
          </div>
        </div>
      </div>
      {/* <div>
        <Upcoming events={events} title={'More Like This'} />
      </div> */}
    </div>
  );
};

export default EventsDetails;

{
  /* <div className='px-2 pt-4 max-w-4xl text-lg lg:text-2xl'>
        <h2 className='text-center lg:text-left mt-8 mb-4'>Event Details</h2>
        <p className='font-sans font-normal'>
          Join ODUMODUBLVCK live from Birmingham, UK. Powered by FRIDAES at
          Cave.
        </p>
        <p className='font-sans mt-2 font-normal'>
          ODUMODUBLVCK is one of the most exciting voices out of the Nigeria.
          Whilst being a pioneering voice of Drill music in Nigeria, he operates
          under a self-defined genre he calls Okporoko Rhythms: a form of
          Hip-Hop that takes influences from Grime, Fela Kuti’s Afrobeat, and
          Progressive R&B. Since the release of his first single in 2017,
          ODUMODUBLVCK has been on a one-man-mission to be the author of his own
          story.
        </p>
      </div>
      <div className='flex flex-col lg:flex-row w-full justify-between items-center mb-12'>
        <div>
          <div>
            <h2 className='text-center lg:text-left mt-8 mb-4'>Line Up</h2>
            <div className='flex flex-col gap-8 lg:flex-row justify-between '>
              {data?.slice(0, 5).map((item, index) => {
                return (
                  <div key={index} className='flex flex-col items-center'>
                    <img
                src={`${props.cdn.static}/${item.image}`}
                className='h-24 w-24 rounded-full bg-green-600 object-cover'
              ></img>
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
          <div>
            <div className='bg-gray-800 rounded-lg p-2'>
              <div>
                <h3>Support our mission</h3>
              </div>
              <p className='font-sans font-light text-sm'>
                This event is free so everyone can enjoy some live Afrobeats
                this Christmas season. However, if you love our mission of
                bringing live Afrobeats entartainment to the world, consider
                supporting us with a dontation. <a href='#'>stipelink</a>
              </p>
            </div>
          </div>
        </div>
      </div> */
}

{
  /* <div>
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
        </div> */
}

{
  /* <div className='flex flex-col gap-8 lg:flex-row justify-between '>
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
      </div> */
}
{
  /* <h2 className='text-center lg:text-left mt-12 mb-4'>Host</h2>
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
      </div> */
}
