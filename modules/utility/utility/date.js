"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTimeRemaining = void 0;
var getTimeRemaining = function getTimeRemaining(targetDate, now) {
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
exports.getTimeRemaining = getTimeRemaining;