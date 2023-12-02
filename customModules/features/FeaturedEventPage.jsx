import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TicketClaimedPopup from './TicketPopup';
import { fireGlobalEvent } from '../../modules/utility/utility';
import Countdown from './CountDown';
import { FetchHandler } from '../../modules/utility/fetch';
import { useRouter } from 'next/router';
import FreePopUp from './FreePopUp';

const FeaturedEvent = (props, showTimer, data) => {
  // ('leee', `${props.cdn.static}/${props?.data[0]?.images[0]?.name}`);
  const router = useRouter();
  const [showPop, setShowPop] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [event, setEvent] = useState([]);

  const handleTicketClaim = () => {
    setIsPopupVisible(true);
  };

  const handlePopupClose = () => {
    setIsPopupVisible(false);
    setShowPop(false);
  };

  const handleCarouselChange = (index) => {
    setCurrentIndex(index);
  };

  const handleFreeTicketClaim = (e) => {
    setShowPop(true);
  };

  const handleFireGlobalEvent = React.useCallback(async (e) => {
    fireGlobalEvent(e, props._LocalEventEmitter);
    // setIsPopupVisible(true);
  });

  // const carouselItems = [
  //   {
  //     backgroundImageDesktop: '/img/internal/home-banner.png',
  //     backgroundImageMobile: '/img/internal/home-banner-mobile.png',
  //     artist: 'Odumodu Blvck',
  //     event: 'Live in Birmingham',
  //     date: 'NOV 24, 2023 02:00AM GMT -5',
  //     id: 'odumodublvck-live-in-birmingham',
  //   },
  // ];

  const receiveData = (data) => {
    // ('data', data);
    setEvent(data.data.fetchedData[0].productReq);
  };

  const carouselItems = [
    {
      backgroundImageDesktop: 'url(/img/internal/home-banner.png)',
      backgroundImageMobile: 'url(/img/internal/home-banner-mobile.png)',
      artist: 'STORIES UNTOLD',
      event: '',
      date: ' November 26, 2023 07:00PM WAT',
      id: 'stories-untold-show',
    },
  ];

  // const receiveData = (data) => {
  //   // ('data', data);
  //   setEvetsData(data.data.fetchedData[0].productReq);
  // };
  // <FetchHandler
  //   {...props}
  //   handlerName='my_handler'
  //   handlerArgs={[
  //     {
  //       productReq: [
  //         '1da050fa-6be1-4926-9e10-cf0a9ee575a8',
  //         '68f37cef-a4f8-40d2-96aa-cdf57b0a220a',
  //       ],
  //     },
  //   ]}
  //   receiveData={receiveData}
  // />;

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      const backgroundImage = isMobile
        ? carouselItems[currentIndex].backgroundImageMobile
        : carouselItems[currentIndex].backgroundImageDesktop;
      const carouselItem = document.querySelector(
        `#carousel-item-${currentIndex}`
      );
      if (carouselItem) {
        carouselItem.style.backgroundImage = backgroundImage;
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [currentIndex, carouselItems]);

  return (
    <div>
      <Carousel
        selectedItem={currentIndex}
        onChange={handleCarouselChange}
        showThumbs={false}
        showArrows={true}
        showStatus={false}
      >
        {carouselItems.map((item, index) => (
          <div
            id={`carousel-item-${index}`}
            key={index}
            className='flex flex-col justify-end relative w-full min-h-[520px] lg:h-[80vh] max-w-full carousel-image'
            style={{
              backgroundSize: 'cover',
              objectFit: 'cover',
              backgroundRepeat: 'no-repeat',
              textAlign: 'left', // Align title to the left
              backgroundImage: item.backgroundImageDesktop, // Set initial desktop image
            }}
          >
            <div className=' flex flex-col w-full px-4 lg:px-8 py-12 pb-12 bg-gradient-to-b from-transparent to-black z-20'>
              <h2 className='text-3xl lg:text-6xl font-black text-left font-sans lg:max-w-[80%]'>
                {item.artist}
              </h2>
              <h2 className='text-3xl lg:text-6xl font-black text-left font-sans lg:max-w-[80%]'>
                {item.event}
              </h2>
              <p className='lg:text-xl text-white text-left font-sans font-bold mt-4'>
                {item.date}
              </p>
              <div className='flex gap-4 mt-4 items-center flex-wrap'>
                <button
                  onClick={handleFreeTicketClaim}
                  className='bg-[#FDB000] text-black rounded-[28px] px-5 py-4 text-[16px] lg:text-xl font-sans font-bold'
                >
                  Reserve my seat for free
                </button>
              </div>
            </div>
            {isPopupVisible && (
              <TicketClaimedPopup onClose={handlePopupClose} />
            )}
            {showPop && <FreePopUp onClose={handlePopupClose} />}
          </div>
        ))}
      </Carousel>
      {/* {carouselItems[0].date ? (
        <Countdown eventDate={'2023-11-24T02:00:00.000Z'} />
      ) : (
        ''
      )} */}
      <FetchHandler
        {...props}
        handlerName='my_handler'
        handlerArgs={[
          {
            productReq: [`${router.query.slug}`],
          },
        ]}
        receiveData={receiveData}
      />
    </div>
  );
};
export default FeaturedEvent;
