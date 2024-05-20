import FeaturedEventSlider from '@/components/FeaturedEventSlider';
import BrowseHeader from './BrowseHeader';
import BrowseFooter from './BrowseFooter';

const BrowseLayout = (props) => {
  const { children } = props;

  return (
    <div className='relative bg-[#171717] font-lexend'>
      <div className='min-h-[500px] '>
        <BrowseHeader />
        <FeaturedEventSlider />
      </div>
      <div className='p-4 py-8 max-w-screen-xl mx-auto'>{children}</div>
      <BrowseFooter />
    </div>
  );
};

export default BrowseLayout;
