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
      backgroundImageDesktop: 'url(/img/internal/altsound.png)',
      backgroundImageMobile: 'url(/img/internal/altsound.png)',
      title: 'Alternate Sound',
      date: 'NOV 04, 2023 | 06:00 PM EST',
    },
    {
      backgroundImageDesktop: 'url(/img/internal/tinycafe.jpeg)',
      backgroundImageMobile: 'url(/img/internal/tinycafe.jpeg)',
      title: 'A NIGHT WITH SEWA 2',
      date: 'OCT 23, 2023 | 08:00 PM EST',
    },
  ];

  const receiveData = (data) => {
    console.log('data', data);
    setEvetsData(data.data.fetchedData[0].productReq);
  };
  <FetchHandler
    {...props}
    handlerName='my_handler'
    handlerArgs={[
      {
        productReq: [
          '1da050fa-6be1-4926-9e10-cf0a9ee575a8',
          '68f37cef-a4f8-40d2-96aa-cdf57b0a220a',
        ],
      },
    ]}
    receiveData={receiveData}
  />;

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
        interval={3000}
      >
        {props.data.map((item, index) => (
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
            <div className='absolute inset-0 bg-black min-h-[700px] opacity-80'></div>
            <div className='self-end w-full px-4 lg:px-8 py-12 pb-12 bg-gradient-to-b from-transparent to-black z-20'>
              <h2 className='text-5xl lg:text-8xl font-bold'>{item.name}</h2>
              <div className='flex gap-4 mt-4 items-center'>
                {item.styles[0].price <= 0 ? (
                  <button
                    onClick={handleFreeTicketClaim}
                    className='bg-orange-800 text-white rounded-md px-4 py-4 text-xs lg:text-xl'
                  >
                    Claim free ticket
                  </button>
                ) : (
                  <button
                    onClick={handleTicketClaim}
                    item={item.id}
                    selectedstyle={item?.styles[0]?.sid}
                    currentoption={item?.styles[0]?.option[0]?.sid}
                    action='buy'
                    className='bg-orange-800 text-white rounded-md px-4 py-4 text-xs lg:text-xl'
                  >
                    Buy Livestream ${item.styles[0].price}
                  </button>
                )}
                <a
                  className='bg-gray-600 text-white rounded-md px-4 py-4 text-xs lg:text-xl'
                  href={`/events/${item.id}`}
                >
                  View event
                </a>
                <p className='lg:text-xl text-white'>
                  {convertTimestamp(item.detailmeta?.eventDateDef?.dates[0])}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      {isPopupVisible && <TicketClaimedPopup onClose={handlePopupClose} />}
      {showPop && <FreePopUp onClose={handlePopupClose} />}
      {props.showTimer ? <Countdown eventDate='2023-11-04T16:00:00Z' /> : ''}
    </div>
  );
};
export default FeaturedEvent;
