import React from 'react';
// import { Menu } from '../../modules/menu';
import Menu from './Menu';
import Footer from '../features/Footer';
import HeadSEO from '../features/head-seo';
import { siteData } from './seo-data';
import AltMenu from './AltMenu';

const HomeLayout = ({ useProps, pageName, children, pageData, props }) => {
  console.log('layout', props);
  const showMainMenu = pageName === 'Index';
  const heroHeight = '80vh';
  return (
    <div>
      {' '}
      <HeadSEO site={siteData} page={pageData} />
      {showMainMenu ? <Menu {...props} classname='' /> : <AltMenu {...props} />}
      <div
        style={{
          top: props.menuConfig.height ? props.menuConfig.height + 'px' : '',
        }}
      >
        {children}
      </div>
      <Footer pageName={pageName} />
    </div>
  );
};

export default HomeLayout;
