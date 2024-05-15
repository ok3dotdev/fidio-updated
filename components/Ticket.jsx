import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import Link from 'next/link';

const Ticket = ({ info, ticketData, viewMode }) => {
  const { name, created, time, meta, detailmeta, images, id } = ticketData;
  // //console.log('Ddd', ticketData, info);

  return (
    <div
      className="flex flex-col rounded-[8px] py-4 px-8 shadow-Txl gap-2"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.94), rgba(0, 0, 0, 0)) , url(${info?.cdn?.static}/${images[0]?.name})`,
        backgroundSize: 'cover',
      }}
    >
      <Link className="cursor-pointer" href={`/studio/events/${id}`}>
        <h3 className="font-bold text-2xl text-white mb-2">
          {name ? name : 'No title'}
        </h3>
      </Link>
      <div className="text-neutralBg font-semibold flex gap-4 text-sm flex-col md:flex-row">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <div className="w-3">
              <CalendarTodayOutlinedIcon
                classes={'w-3'}
                style={{ width: '0.75rem' }}
              />
            </div>
            <p className=" font-sans text-neutralBg font-semibold">
              {created?.split(' ')[0]}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3">
              <AccessTimeOutlinedIcon
                className="w-3"
                style={{ width: '0.75rem' }}
              />
            </div>
            <p className=" font-sans text-neutralBg font-semibold">
              {meta?.startTime || '00'} - {meta?.endTime || '00'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <div className="w-3">
              <FmdGoodOutlinedIcon
                className="w-3"
                style={{ width: '0.75rem' }}
              />
            </div>
            <p className=" font-sans text-neutralBg font-semibold">
              {meta?.venue || 'Not set'}
            </p>
          </div>
          <span className="border-r-[1px] border-white w-1 h-[50%]"></span>
          <p className="text-sm">{meta?.status || 'Not set'}</p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
