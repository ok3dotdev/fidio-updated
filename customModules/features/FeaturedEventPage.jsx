import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TicketClaimedPopup from './TicketPopup';
import { fireGlobalEvent } from '../../modules/utility/utility';
import Countdown from './CountDown';
import { FetchHandler } from '../../modules/utility/fetch';
import { useRouter } from 'next/router';

const FeaturedEvent = (props, showTimer, data) => {
  const router = useRouter();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [event, setEvent] = useState([]);

  const handleTicketClaim = () => {
    setIsPopupVisible(true);
  };

  const handlePopupClose = () => {
    setIsPopupVisible(false);
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
    // {
    //   backgroundImageDesktop: 'url(/img/internal/2_desktop.png)',
    //   backgroundImageMobile: 'url(/img/internal/2_mobile.png)',
    //   title: 'A NIGHT WITH SEWA 2',
    //   date: 'OCT 23, 2023 | 08:00 PM EST',
    // },
  ];

  const receiveData = (data) => {
    console.log('data', data);
    setEvent(data.data.fetchedData[0].productReq);
  };

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
        {event.map((item, index) => (
          <div
            id={`carousel-item-${index}`}
            key={index}
            className='flex flex-col justify-end relative w-full min-h-[520px] lg:min-h-[700px] max-w-full'
            style={{
              backgroundSize: 'cover',
              objectFit: 'cover',
              backgroundRepeat: 'no-repeat',
              textAlign: 'left', // Align title to the left
              backgroundImage: item.backgroundImageDesktop, // Set initial desktop image
            }}
          >
            <div className='absolute inset-0 bg-black min-h-[700px] opacity-10'></div>
            <div className='self-end w-full px-4 lg:px-8 py-12 pb-12 bg-gradient-to-b from-transparent to-black z-20'>
              <h2 className='text-5xl lg:text-8xl font-bold'>{item.name}</h2>
              <div className='flex gap-4 mt-4 items-center'>
                <button
                  onClick={handleTicketClaim}
                  item={item.id}
                  selectedstyle={item?.styles[0]?.sid}
                  currentoption={item?.styles[0]?.option[0]?.sid}
                  action='add_to_cart'
                  className='bg-orange-800 text-white rounded-md px-4 py-4 text-xs lg:text-xl'
                >
                  Buy Livestream
                </button>
                <p className='lg:text-xl text-white'>{item.date}</p>
              </div>
            </div>
            {isPopupVisible && (
              <TicketClaimedPopup onClose={handlePopupClose} />
            )}
          </div>
        ))}
      </Carousel>
      {props.showTimer ? (
        <Countdown
          eventDate={props?.data[0]?.detailmeta?.eventDateDef?.dates[0]}
        />
      ) : (
        ''
      )}
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
