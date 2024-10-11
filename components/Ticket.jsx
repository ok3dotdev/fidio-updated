import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import Link from 'next/link';
import Image from 'next/image';

const Ticket = ({ info, ticketData, viewMode }) => {
  const { name, created, time, meta, detailmeta, images, id } = ticketData;
  console.log(ticketData);
  if (viewMode === 'list') {
    return (
      <div
        className='flex flex-col rounded-[8px] py-4 px-8 shadow-Txl gap-2'
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.94), rgba(0, 0, 0, 0)) , url(${info?.cdn?.static}/${images[0]?.name})`,
          backgroundSize: 'cover',
        }}
      >
        <Link className='cursor-pointer' href={`/studio/events/${id}`}>
          <h3 className='font-bold text-2xl text-white mb-2'>
            {name ? name : 'No title'}
          </h3>
        </Link>
        <div className='text-neutralBg font-semibold flex gap-4 text-sm flex-col md:flex-row'>
          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-1'>
              <div className='w-3'>
                <CalendarTodayOutlinedIcon
                  classes={'w-3'}
                  style={{ width: '0.75rem' }}
                />
              </div>
              <p className=' font-sans text-neutralBg font-semibold'>
                {meta?.date?.split('T')[0] || 'No date'}
              </p>
            </div>
            <div className='flex items-center gap-1'>
              <div className='w-3'>
                <AccessTimeOutlinedIcon
                  className='w-3'
                  style={{ width: '0.75rem' }}
                />
              </div>
              <p className=' font-sans text-neutralBg font-semibold'>
                {meta?.startTime || '00'} - {meta?.endTime || '00'}
              </p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-1'>
              <div className='w-3'>
                <FmdGoodOutlinedIcon
                  className='w-3'
                  style={{ width: '0.75rem' }}
                />
              </div>
              <p className=' font-sans text-neutralBg font-semibold'>
                {meta?.venue || 'Not set'}
              </p>
            </div>
            <span className='border-r-[1px] border-white w-1 h-[50%]'></span>
            <p className='text-sm'>
              {ticketData.published ? 'Published' : 'Draft'}
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (viewMode === 'grid') {
    return (
      <div className=' rounded-lg border shadow-Txl '>
        <div class='overflow-hidden rounded-lg'>
          <div class='relative h-40'>
            <div
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.94), rgba(0, 0, 0, 0)) , url(${info?.cdn?.static}/${images[0]?.name})`,
                backgroundSize: 'cover',
              }}
              alt={name}
              className='object-cover w-full h-full absolute inset-0'
              fill
            />
            <div className='absolute top-0 right-0 mt-4 mr-4'>
              <span className='bg-white text-black text-sm font-semibold px-3 py-1 rounded'>
                New
              </span>
            </div>
          </div>
          <div className='p-3'>
            <Link className='cursor-pointer' href={`/studio/events/${id}`}>
              <h3 className='font-bold text-2xl text-white  '>
                {name ? name : 'No title'}
              </h3>
            </Link>
            <p className='text-white/40 text-sm flex items-center gap-1'>
              <div className='flex items-center'>
                <CalendarTodayOutlinedIcon
                  className={'w-3 mr-1 '}
                  style={{ width: '0.75rem' }}
                />
                {created?.split(' ')[0]}
              </div>

              <div className='mx-2 flex items-center'>
                <AccessTimeOutlinedIcon
                  className='w-3 mr-1'
                  style={{ width: '0.75rem' }}
                />
                {meta?.startTime || '00'}
              </div>
            </p>
            <hr className='my-3 border-dashed border-gray-600' />

            <div className='flex items-center gap-x-2'>
              <div className='flex-shrink-2'>
                <Image
                  src='/test2.png'
                  alt='Asake live in Toronto'
                  className='h-10 w-10 rounded-full '
                  height={100}
                  width={100}
                />
              </div>
              <div className='flex items-left flex-col'>
                <span className='text-white/40 text-sm'>Created by</span>
                <span className='text-white/90 font-medium'>
                  {meta?.host?.title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Ticket;
