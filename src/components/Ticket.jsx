import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

const Ticket = ({ info, ticketData }) => {
  const { name, created, time, meta, detailmeta, images } = ticketData;
  console.log('Ddd', ticketData);

  return (
    <div
      className='flex flex-col rounded-[8px] py-4 px-8 shadow-Txl gap-2'
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.94), rgba(0, 0, 0, 0)) , url(${info?.cdn?.static}/${images[0]?.name})`,
        backgroundSize: 'cover',
      }}
    >
      <h3 className='font-bold text-2xl text-white'>
        {name ? name : 'No title'}
      </h3>
      <div className='text-dashtext flex gap-4 text-sm'>
        <div className='flex items-center gap-1'>
          <CalendarTodayOutlinedIcon className='w-3' />
          <p className='text-black font-sans text-dashtext'>
            {created?.split(' ')[0]}
          </p>
        </div>
        <div className='flex items-center gap-1'>
          <AccessTimeOutlinedIcon className='w-3' />
          <p className='text-black font-sans text-dashtext'>
            {detailmeta?.eventDateDef?.dates[0]?.split('T')[1]}
          </p>
        </div>
        <div className='flex items-center gap-1'>
          <FmdGoodOutlinedIcon className='w-3' />
          <p className='text-black font-sans text-dashtext'>{meta?.venue}</p>
        </div>
        <span className='border-r-[1px] border-dashtext w-1 '></span>
        <p className='text-sm'>Upcoming event</p>
      </div>
    </div>
  );
};

export default Ticket;
