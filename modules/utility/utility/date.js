"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retrieveMonth = exports.retrieveDay = exports.getTimeRemaining = exports.MONTHS = exports.DAYS = void 0;
var getTimeRemaining = exports.getTimeRemaining = function getTimeRemaining(targetDate, now) {
  if (now && targetDate) {
    // Calculate the time difference in milliseconds
    var timeDiff = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    var hours = Math.floor(timeDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(timeDiff % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(timeDiff % (1000 * 60) / 1000);
    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }
  return null;
};
var MONTHS = exports.MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
var DAYS = exports.DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/**
 * Based on users location get month in countries main language
 * @param {*} m 
 * @param {*} location 
 */
var retrieveMonth = exports.retrieveMonth = function retrieveMonth(m, location) {
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
var retrieveDay = exports.retrieveDay = function retrieveDay(m, location) {
  if (m <= DAYS.length) {
    return DAYS[m];
  }
  return '';
};