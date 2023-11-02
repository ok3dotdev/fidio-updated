import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TicketClaimedPopup from './TicketPopup';
import Countdown from './CountDown';
import { FetchHandler } from '../../modules/utility/fetch';
import { fireGlobalEvent } from '../../modules/utility/utility';

const FeaturedEvent = (props, showTimer, data) => {
  console.log('le props', props);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTicketClaim = React.useCallback(async (e) => {
    fireGlobalEvent(e, props._LocalEventEmitter);
    setIsPopupVisible(true);
  });

  function convertTimestamp(timestamp) {
    // Parse the original timestamp
    const [date, time] = timestamp.split('-');
    const [day, month, year] = date.split('-');
    const [hour, minute] = time.split(':');

    // Create a Date object from the parsed values
    const dateObj = new Date(year, month - 1, day, hour, minute);

    // Format the date
    const monthNames = [
      'JAN',
      'FEB',
      'MAR',
      'APR',
      'MAY',
      'JUN',
      'JUL',
      'AUG',
      'SEP',
      'OCT',
      'NOV',
      'DEC',
    ];
    const formattedDate = `${
      monthNames[dateObj.getMonth()]
    } ${dateObj.getDate()}, ${dateObj.getFullYear()}`;

    // Format the time
    const formattedTime =
      dateObj.getHours() > 12
        ? `${dateObj.getHours() - 12}:${
            dateObj.getMinutes() < 10 ? '0' : ''
          }${dateObj.getMinutes()} PM`
        : `${dateObj.getHours()}:${
            dateObj.getMinutes() < 10 ? '0' : ''
          }${dateObj.getMinutes()} AM`;

    // Combine the formatted date and time with the timezone
    return `${formattedDate} | ${formattedTime} EST`;
  }

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
    setEvetsData(data.data.fetchedData[0].productReq);
  };
  <FetchHandler
    {...props}
    handlerName='my_handler'
    handlerArgs={[
      {
        productReq: [
          '1da050fa-6be1-4926-9e10-cf0a9ee575a8',
          'bed6d9f6-7760-4d70-82fc-badd7d43635a',
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
      >
        {props.data.map((item, index) => (
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
                  action='buy'
                  className='bg-orange-800 text-white rounded-md px-4 py-4 text-xs lg:text-xl'
                >
                  Buy Livestream ${item.styles[0].price}
                </button>
                <a
                  className='bg-gray-600 text-white rounded-md px-4 py-4 text-xs lg:text-xl'
                  href={`/events/${item.id}`}
                >
                  View event
                </a>
                <p className='lg:text-xl text-white'>
                  {item.detailmeta?.eventDateDef?.input}
                </p>
              </div>
            </div>
            {isPopupVisible && (
              <TicketClaimedPopup onClose={handlePopupClose} />
            )}
          </div>
        ))}
      </Carousel>
      {props.showTimer ? <Countdown eventDate='2023-11-04T16:00:00Z' /> : ''}
    </div>
  );
};
export default FeaturedEvent;
