import WatchHeader from './WatchHeader';

const WatchLayout = ({ children }) => {
  return (
    <div className='bg-dashBg font-lexend'>
      <WatchHeader />
      <div className='min-h-screen pb-12'>{children}</div>
    </div>
  );
};

export default WatchLayout;
