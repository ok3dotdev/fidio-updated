import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TicketClaimedPopup from './TicketPopup';
import FreePopUp from './FreePopUp';
import Countdown from './CountDown';
import { FetchHandler } from '../../modules/utility/fetch';
import { fireGlobalEvent } from '../../modules/utility/utility';

const FeaturedEvent = (props) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [showPop, setShowPop] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTicketClaim = React.useCallback(async (e) => {
    fireGlobalEvent(e, props._LocalEventEmitter);
  });

  const handleFreeTicketClaim = (e) => {
    setShowPop(true);
  };

  function convertTimestamp(timestamp) {
    const dateObj = new Date(timestamp);

    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
    };

    const formattedDateTime = dateObj.toLocaleString('en-US', options);
    return formattedDateTime;
  }

  const handlePopupClose = () => {
    setIsPopupVisible(false);
    setShowPop(false);
  };

  const handleCarouselChange = (index) => {
    setCurrentIndex(index);
  };

  const handleFireGlobalEvent = React.useCallback(async (e) => {
    fireGlobalEvent(e, props._LocalEventEmitter);
    setIsPopupVisible(true);
  });

  // const getLocaLDate = (date)=>{
  //   const date
  //   return
  // }

  const carouselItems = [
    {
      backgroundImageDesktop: 'url(/img/internal/home-banner.png)',
      backgroundImageMobile: 'url(/img/internal/home-banner-mobile1.png)',
      artist: 'TINY’S CONDO SESSION',
      event: 'Live from Lagos',
      date: ' January 14, 2024 4:00PM WAT',
      id: 'tinys-condo-session',
    },
    {
      backgroundImageDesktop: 'url(/img/internal/home-banner.png)',
      backgroundImageMobile: 'url(/img/internal/home-banner-mobile1.png)',
      artist: 'TINY’S CONDO SESSION',
      event: 'Live from Lagos',
      date: ' January 14, 2024 4:00PM WAT',
      id: 'tinys-condo-session',
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
    <div className='relative'>
      <Carousel
        selectedItem={currentIndex}
        onChange={handleCarouselChange}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        interval={3000}
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
            {/* <div className='absolute inset-0 bg-black min-h-[700px] opacity-80'></div> */}
            <div className='self-end w-full px-4 lg:px-8 py-12 pb-12 bg-gradient-to-b from-transparent to-black z-20 '>
              <h2 className='text-3xl lg:text-6xl font-bold font-Archivo'>
                {item.artist}
              </h2>
              <h2 className='text-3xl lg:text-6xl font-bold font-Archivo'>
                {item.event}
              </h2>
              <p className='lg:text-xl text-white mt-4'>{item.date}</p>
              <div className='flex gap-4 mt-4 items-center flex-wrap'>
                <button
                  onClick={handleFreeTicketClaim}
                  className='bg-[#FDB000] text-black rounded-[28px] px-5 py-4 text-xs lg:text-xl font-sans font-bold'
                >
                  Reserve my seat for free
                </button>
                <a
                  className='bg-gray-600 text-white rounded-[28px] px-5 py-4 text-xs lg:text-xl font-sans font-bold'
                  href={`/events/${item.id}`}
                >
                  View event
                </a>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      {showPop && <FreePopUp onClose={handlePopupClose} />}
      {isPopupVisible && <TicketClaimedPopup onClose={handlePopupClose} />}
      {props.showTimer ? (
        <Countdown eventDate='2024-01-14T15:00:00.000Z' />
      ) : (
        ''
      )}
    </div>
  );
};
export default FeaturedEvent;
