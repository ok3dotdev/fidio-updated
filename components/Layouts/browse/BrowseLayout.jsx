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
  const { children, headerAbsolute = 'absolute' } = props;

  return (
    <div className='relative bg-[#171717] font-lexend'>
      <HeadSEO site={siteData} page={browsePageData} />
      <div className='min-h-[500px] '>
        <BrowseHeader {...props} className={headerAbsolute} />
        <FeaturedEventSlider {...props} />
      </div>
      <div className='p-4 py-8 max-w-screen-xl mx-auto'>{children}</div>
      <div className='px-2'>
        <SubscribeForm />
      </div>
      <BrowseFooter />
    </div>
  );
};

export default BrowseLayout;
