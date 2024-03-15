import React from 'react';
import UserMenu from '../../../customModules/features/UserMenu';

const StudioNav = (props) => {
  return (
    <div className='bg-dashSides text-white p-4 flex justify-between items-center shadow-lg shadow-[0px 4px 4px 1px rgba(153, 152, 150, 0.33)]'>
      <div>
        <img src='/img/internal/frame2.png' alt='Logo' className='h-8 w-auto' />
      </div>
      <div className='flex'>
        <UserMenu {...props} />
      </div>
    </div>
  );
};

export default StudioNav;
