import WatchHeader from './WatchHeader';

const WatchLayout = ({ children }) => {
  return (
    <div className='bg-dashBg'>
      <WatchHeader />
      <div className='px-4'>{children}</div>
    </div>
  );
};

export default WatchLayout;
