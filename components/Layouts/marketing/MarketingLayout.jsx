import React from 'react';
import HeadSEO from '../../../customModules/features/head-seo';
import {
  siteData,
  MediaProductionPageData,
} from '../../../customModules/features/seo-data';
import MarketingHeader from '@/components/Layouts/marketing/MarketingHeader';
import MarketingFooter from '@/components/Layouts/marketing/MarketingFooter';

const MarketingLayout = ({ children }) => {
  return (
    <div className='font-lexend scroll-smooth w-full overflow-x-hidden'>
      <HeadSEO site={siteData} page={MediaProductionPageData} />
      <MarketingHeader />
      {children}
      <MarketingFooter />
    </div>
  );
};

export default MarketingLayout;
