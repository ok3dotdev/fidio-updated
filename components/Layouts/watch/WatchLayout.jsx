import WatchHeader from './WatchHeader';

const WatchLayout = ({ id, children }) => {
  return (
    <div id='watchPage' className='bg-dashBg font-lexend relative'>
      <WatchHeader />
      <div className='md:px-4 min-h-screen pb-12'>{children}</div>
    </div>
  );
};

export default WatchLayout;
