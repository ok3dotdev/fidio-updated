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

  const carouselItems = [
    {
      backgroundImageDesktop: 'url(/img/internal/ODUMO.jpg)',
      backgroundImageMobile: 'url(/img/internal/odumo-mobile.png)',
      title: 'Odumodu Blvck Live in Birmingham ',
      date: 'NOV 24, 2023 | 02:00AM GMT',
      id: 'odumodublvck-live-in-birmingham',
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
        showArrows={true}
        showStatus={false}
        interval={3000}
      >
        {carouselItems.map((item, index) => (
          <div
            id={`carousel-item-${index}`}
            key={index}
            className='flex flex-col justify-end relative w-full min-h-[520px] lg:min-h-[700px] max-w-full carousel-image'
            style={{
              backgroundSize: 'cover',
              objectFit: 'cover',
              backgroundRepeat: 'no-repeat',
              textAlign: 'left', // Align title to the left
              backgroundImage: item.backgroundImageDesktop, // Set initial desktop image
            }}
          >
            {/* <div className='absolute inset-0 bg-black min-h-[700px] opacity-80'></div> */}
            <div className='self-end w-full px-4 lg:px-8 py-12 pb-12 bg-gradient-to-b from-transparent to-black z-20'>
              <h2 className='text-4xl lg:text-8xl font-bold'>{item.title}</h2>
              <div className='flex gap-4 mt-4 items-center flex-wrap'>
                <button
                  onClick={handleFreeTicketClaim}
                  className='bg-orange-800 text-white rounded-md px-4 py-4 text-xs lg:text-xl'
                >
                  Claim free ticket
                </button>
                <a
                  className='bg-gray-600 text-white rounded-md px-4 py-4 text-xs lg:text-xl'
                  href={`/events/${item.id}`}
                >
                  View event
                </a>
                <p className='lg:text-xl text-white'>
                  {item.date}
                  {/* {convertTimestamp(item.detailmeta?.eventDateDef?.dates[0])} */}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      {showPop && <FreePopUp onClose={handlePopupClose} />}
      {isPopupVisible && <TicketClaimedPopup onClose={handlePopupClose} />}
      {props.showTimer ? (
        <Countdown eventDate='2023-11-24T02:00:00.000Z' />
      ) : (
        ''
      )}
    </div>
  );
};
export default FeaturedEvent;
