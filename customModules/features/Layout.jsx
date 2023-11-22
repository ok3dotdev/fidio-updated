import React from 'react';
<<<<<<< HEAD
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
=======
import Menu from '../../modules/menu/Menu';
import Sidebar from './Sidebar';
// import Menu from '../features/Menu';

const Layout = ({ props, children }) => {
  return (
    <div className='bg-red-200 relative h-screen overflow-hidden'>
      <Menu {...props} page={'home'} />
      <div className='bg-black  h-full flex'>
        <Sidebar {...props} />
>>>>>>> pull-branch
        {children}
      </div>
    </div>
  );
};

export default Layout;
