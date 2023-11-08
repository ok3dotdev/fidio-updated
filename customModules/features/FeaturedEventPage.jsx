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

  const carouselItems = [
    {
      backgroundImageDesktop: 'url(/img/internal/altsound.png)',
      backgroundImageMobile: 'url(/img/internal/altsound.png)',
      title: 'Alternate Sound',
      date: 'NOV 04, 2023 | 06:00 PM EST',
    },
  ];

  const receiveData = (data) => {
    // ('data', data);
    setEvent(data.data.fetchedData[0].productReq);
  };

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
          >
            {/* <div className='absolute inset-0 bg-black min-h-[700px] opacity-10'></div> */}
            <img
              src={`${props.cdn.static}/${props?.data[0]?.images[0]?.name}`}
              alt='Event Background'
              className='absolute inset-0 object-cover z-10 min-h-[520px] lg:min-h-[700px]'
            />
            <div className='self-end w-full px-4 lg:px-8 py-12 pb-12 bg-gradient-to-b from-transparent to-black z-20'>
              <h2 className='text-5xl lg:text-8xl font-bold'>{item.name}</h2>
              <div className='flex gap-4 mt-4 items-center flex-wrap'>
                <button
                  onClick={handleFreeTicketClaim}
                  className='bg-orange-800 text-white rounded-md px-4 py-4 text-xs lg:text-xl'
                >
                  Claim free ticket
                </button>
                <p className='lg:text-xl text-white'>{item.date}</p>
              </div>
            </div>
            {isPopupVisible && (
              <TicketClaimedPopup onClose={handlePopupClose} />
            )}
            {showPop && <FreePopUp onClose={handlePopupClose} />}
          </div>
        ))}
      </Carousel>
      {props?.data[0]?.detailmeta?.eventDateDef?.dates[0] ? (
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
