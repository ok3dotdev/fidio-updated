import WatchHeader from './WatchHeader';
import WatchFooter from './WatchFooter';

const WatchLayout = (props) => {
  return (
    <div id='watchPage' className='bg-dashBg font-lexend relative'>
      <WatchHeader {...props} />
      <div className='md:px-0 min-h-screen pb-12'>{props.children}</div>
      <WatchFooter {...props} />
    </div>
  );
};

export default WatchLayout;
