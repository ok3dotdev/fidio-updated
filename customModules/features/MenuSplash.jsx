import React from 'react';

const Menu = () => {
  return (
    <div className='bg-gradient-to-r from-purple-500 to-pink-500 fixed top-0 left-0 right-0 z-40'>
      <div className='max-w-[110rem] mx-auto flex justify-between p-4 items-center'>
        <div>
          <img src='/img/features/logo.png' alt='' width='' />
        </div>
        <div className='lg:flex gap-4 hidden'>
          <button className='bg-yellow-500 px-6 py-2 rounded-md'>
            Membership
          </button>
          <button className='bg-yellow-500 px-6 py-2 rounded-md'>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
