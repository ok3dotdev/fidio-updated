import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ResourceCards = ({ title, img, footer }) => {
  return (
    <div className='p-4 w-[370px] h-[220px] bg-dashSides rounded-[8px] cursor-pointer'>
      {img}
      <p className='text-2xl mt-8 font-bold'>{title}</p>
      <div className='flex justify-between items-center mt-2'>
        <p>{footer}</p>
        <ArrowForwardIcon />
      </div>
    </div>
  );
};

export default ResourceCards;
