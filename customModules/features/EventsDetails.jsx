import React from 'react';

const EventsDetails = (props) => {
  const data = props?.data?.detailmeta?.lineup;
  return (
    <div className=' pt-[20px] pb-[20px] text-2xl lg:px-8 px-4 max-w-3xl mx-auto'>
      <h2 className='text-center lg:text-left mt-8 mb-4'>Line Up</h2>
      <div className='flex flex-col gap-8 lg:flex-row justify-between '>
        {data?.slice(0, 5).map((item, index) => {
          return (
            <div key={index} className='flex flex-col items-center'>
              <div className='h-24 w-24 rounded-full bg-green-600'></div>
              <span className='text-sm mt-2'>{item.title}</span>
            </div>
          );
        })}
      </div>
      {/* <h2 className='text-center lg:text-left mt-12 mb-4'>Host</h2>
      <div className='flex flex-col lg:flex-row '>
        <div className='flex flex-col items-center'>
          <div className='h-24 w-24  bg-green-600'></div>
          <span className='text-sm mt-2'>Wura sol</span>
        </div>
      </div>
      <h2 className='text-center lg:text-left mb-4 mt-12'>Sponsors</h2>
      <div className='flex flex-col lg:flex-row '>
        <div className='flex flex-col items-center'>
          <div className='h-24 w-24  bg-green-600'></div>
          <span className='text-sm mt-2'>Wura sol</span>
        </div>
      </div> */}
    </div>
  );
};

export default EventsDetails;
