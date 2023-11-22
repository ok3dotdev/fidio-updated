import React from 'react';
// import { Menu } from '../../modules/menu';
import Menu from './Menu';
import Footer from '../features/Footer';
import HeadSEO from '../features/head-seo';
import { siteData } from './seo-data';
import AltMenu from './AltMenu';

const HomeLayout = ({ useProps, pageName, children, pageData, props }) => {
  const showMainMenu = ['Index', 'Privacy', 'Faq', 'Terms'].includes(pageName);
  return (
    <div className='relative h-full'>
      <HeadSEO site={siteData} page={pageData} />
      {showMainMenu ? <Menu {...props} classname='' /> : <AltMenu {...props} />}
      {children}
      <Footer pageName={pageName} />
    </div>
  );
};

export default HomeLayout;
