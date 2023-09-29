import React from 'react';
import Menu from '../../modules/menu/Menu';
import Sidebar from './Sidebar';
// import Menu from '../features/Menu';

const Layout = ({ props, children }) => {
  return (
    <div className='bg-red-200 relative h-screen overflow-hidden'>
      <Menu {...props} page={'home'} />
      <div className='bg-black  h-full flex'>
        <Sidebar {...props} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
