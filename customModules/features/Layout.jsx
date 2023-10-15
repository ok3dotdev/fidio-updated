import React from 'react';
// import Menu from '../../modules/menu/Menu';
import Sidebar from './Sidebar';
import Menu from '../features/Menu';
import Footer from './Footer';

const Layout = ({ props, children, userData }) => {
  return (
    <div className=' relative h-screen'>
      <Menu page={'home'} {...props} />
      <div className='bg-black  h-full flex'>
        {/* <Sidebar {...props} userData={userData} /> */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
