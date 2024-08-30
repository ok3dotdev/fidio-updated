import WatchHeader from './WatchHeader';

const WatchLayout = (props) => {
  return (
    <div id='watchPage' className='bg-dashBg font-lexend relative'>
      <WatchHeader {...props} />
      <div className='md:px-0 min-h-screen pb-12 mt-4'>{props.children}</div>
    </div>
  );
};

export default WatchLayout;
