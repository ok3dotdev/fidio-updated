import React, { useState, useEffect } from 'react';

function Countdown({ eventDate }) {
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
    <div className='absolute top-24 right-10 mt-24 flex gap-4 text-2xl'>
      <div className='flex flex-col'>
        <span>{timeLeft.days}</span> <span>Days</span>
      </div>
      <div className='flex flex-col'>
        <span>{timeLeft.hours}</span> <span>Hours</span>
      </div>
      <div className='flex flex-col'>
        <span>{timeLeft.minutes}</span>
        <span>Minutes </span>
      </div>
      <div className='flex flex-col'>
        <span>{timeLeft.seconds} </span>
        <span>Seconds</span>
      </div>
    </div>
  );
}

export default Countdown;
