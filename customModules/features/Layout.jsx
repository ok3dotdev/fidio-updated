import React from 'react';
// import Menu from '../../modules/menu/Menu';
import Menu from '../features/Menu';

const Layout = ({ props, children }) => {
  return (
    <div className='bg-red-200 relative h-screen overflow-hidden'>
      <Menu {...props} page={'home'} />
      <div className='bg-blue-400 h-full flex'>
        <div className='text-white bg-gray-900 h-full px-2 md:w-[100px] lg:w-[130px]'>
          Sidebar
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
