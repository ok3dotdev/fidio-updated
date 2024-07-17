import React from 'react';
import Menu from './Menu';
import Footer from '../features/Footer';
import BrowseFooter from '@/components/Layouts/browse/BrowseFooter';
import HeadSEO from '../features/head-seo';
import { siteData } from './seo-data';
import AltMenu from './AltMenu';
import { cn } from '@/lib/utils';
import BrowseHeader from '../../components/Layouts/browse/BrowseHeader';

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
  const showMainFooter = ['Index'].includes(pageName);
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
      {showMainMenu ? (
        <BrowseHeader {...props} classname='' />
      ) : (
        <AltMenu {...props} />
      )}
      {children}
      {showMainFooter ? (
        <BrowseFooter />
      ) : (
        showFooter && <Footer pageName={pageName} />
      )}
    </div>
  );
};

export default HomeLayout;
