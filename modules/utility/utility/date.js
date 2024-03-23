export const getTimeRemaining = (targetDate, now) => {
  if (now && targetDate) {
    // Calculate the time difference in milliseconds
    const timeDiff = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(timeDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes = Math.floor(timeDiff % (1000 * 60 * 60) / (1000 * 60));
    const seconds = Math.floor(timeDiff % (1000 * 60) / 1000);
    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }
  return null;
};
export const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
export const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/**
 * Based on users location get month in countries main language
 * @param {*} m 
 * @param {*} location 
 */
export const retrieveMonth = (m, location) => {
  if (m <= MONTHS.length) {
    return MONTHS[m];
  }
  return '';
};

/**
 * Based on users location get day in countries main language
 * @param {*} m 
 * @param {*} location 
 */
export const retrieveDay = (m, location) => {
  if (m <= DAYS.length) {
    return DAYS[m];
  }
  return '';
};