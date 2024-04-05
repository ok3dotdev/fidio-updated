import React from 'react';
// import { Menu } from '../../modules/menu';
import Menu from './Menu';
import Footer from '../features/Footer';
import HeadSEO from '../features/head-seo';
import { siteData } from './seo-data';
import AltMenu from './AltMenu';
// import {Archivo} from 'next/font/google'

// const archivo = Archivo({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']});

const HomeLayout = ({ useProps, pageName, children, pageData, props }) => {
  const showMainMenu = ['Index', 'Privacy', 'Faq', 'Terms', 'Blog'].includes(
    pageName
  );
  const showFooter = ['Index', 'Privacy', 'Faq', 'Terms', 'Blog'].includes(
    pageName
  );
  return (
    <div className='relative h-full'>
      <HeadSEO site={siteData} page={pageData} />
      {showMainMenu ? <Menu {...props} classname='' /> : <AltMenu {...props} />}
      {children}
      {showFooter && <Footer pageName={pageName} />}
    </div>
  );
};

export default HomeLayout;
