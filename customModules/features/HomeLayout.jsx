import React from 'react';
import BrowseFooter from '@/components/Layouts/browse/BrowseFooter';
import HeadSEO from '../features/head-seo';
import { siteData } from './seo-data';
import { cn } from '@/lib/utils';
import BrowseHeader from '../../components/Layouts/browse/BrowseHeader';

const HomeLayout = ({ children, pageData, props, className }) => {
  return (
    <div className={cn('relative h-full', className)}>
      <HeadSEO site={siteData} page={pageData} />
      <BrowseHeader {...props} classname='' />
      {children}
      <BrowseFooter />
    </div>
  );
};

export default HomeLayout;
