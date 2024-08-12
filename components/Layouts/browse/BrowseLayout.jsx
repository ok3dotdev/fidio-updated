import FeaturedEventSlider from '@/components/FeaturedEventSlider';
import BrowseHeader from './BrowseHeader';
import BrowseFooter from './BrowseFooter';
import SubscribeForm from '../../forms/SubscribeToNewsLetter';
import HeadSEO from '../../../customModules/features/head-seo';
import {
  browsePageData,
  siteData,
} from '../../../customModules/features/seo-data';

const BrowseLayout = (props) => {
  const { children } = props;

  return (
    <div className='relative bg-[#171717] font-lexend'>
      <HeadSEO site={siteData} page={browsePageData} />
      <div className='min-h-[500px] '>
        <BrowseHeader {...props} />
        <FeaturedEventSlider {...props} />
      </div>
      <div className='p-4 py-8 max-w-screen-xl mx-auto'>{children}</div>
      <SubscribeForm />
      <BrowseFooter />
    </div>
  );
};

export default BrowseLayout;
