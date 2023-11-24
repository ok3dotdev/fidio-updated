import React, { useState, useEffect } from 'react';

function Countdown({ eventDate }) {
  // ('eventdate', eventDate);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const timeDifference = new Date(eventDate) - now;

      if (timeDifference <= 0) {
        clearInterval(intervalId);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [eventDate]);

  return !timeLeft ? (
    ''
  ) : (
    <div className='absolute top-0 lg:top-24 right-0 lg:right-10 mt-0 lg:mt-[150px] flex flex-col lg:flex-row gap-4 text-xl sm:text-2xl font-bold text-white p-2 lg:p-6 rounded-lg bg-black bg-opacity-70'>
      <div className='flex flex-col items-center'>
        <span className='text-md sm:text-md text-gray-400 font-sans'>
          {timeLeft.days}
        </span>
        <span className='text-md sm:text-md text-gray-400 font-sans'>
          {timeLeft.days > 1 ? 'Days' : 'Day'}
        </span>
      </div>
      <div className='flex flex-col items-center'>
        <span className='text-md sm:text-md text-gray-400 font-sans'>
          {timeLeft.hours}
        </span>
        <span className='text-md sm:text-md text-gray-400 font-sans'>
          Hours
        </span>
      </div>
      <div className='flex flex-col items-center'>
        <span className='text-md sm:text-md text-gray-400 font-sans'>
          {timeLeft.minutes}
        </span>
        <span className='text-md sm:text-md text-gray-400 font-sans'>
          Minutes{' '}
        </span>
      </div>
      <div className='flex flex-col items-center'>
        <span className='text-md sm:text-md text-gray-400 font-sans'>
          {timeLeft.seconds}{' '}
        </span>
        <span className='text-md sm:text-md text-gray-400 font-sans'>
          Seconds
        </span>
      </div>
    </div>
  );
}

export default Countdown;
