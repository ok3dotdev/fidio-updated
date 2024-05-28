import React from 'react';
import Menu from './Menu';
import Footer from '../features/Footer';
import HeadSEO from '../features/head-seo';
import { siteData } from './seo-data';
import AltMenu from './AltMenu';
import { cn } from '@/lib/utils';

const HomeLayout = ({
  useProps,
  pageName,
  children,
  pageData,
  props,
  className,
}) => {
  const showMainMenu = ['Index', 'Privacy', 'Faq', 'Terms', 'Blog'].includes(
    pageName
  );
  const showFooter = [
    'Index',
    'Privacy',
    'Faq',
    'Terms',
    'blog',
    'ar',
  ].includes(pageName);
  return (
    <div className={cn('relative h-full', className)}>
      <HeadSEO site={siteData} page={pageData} />
      {showMainMenu ? <Menu {...props} classname='' /> : <AltMenu {...props} />}
      {children}
      {showFooter && <Footer pageName={pageName} />}
    </div>
  );
};

export default HomeLayout;
