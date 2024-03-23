import { sendUserAnalytics } from './analytics';
import { resolveVariables } from '/app.config';
export const isObjectEmpty = obj => {
  return obj // 👈 null and undefined check
  && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype;
};
export let debounce = function (a, b, c) {
  var d, e;
  return function () {
    function h() {
      d = null, c || (e = a.apply(f, g));
    }
    var f = this,
      g = arguments;
    return clearTimeout(d), d = setTimeout(h, b), c && !d && (e = a.apply(f, g)), e;
  };
};
export const detectAllowEditingFlag = (data, loggedIn) => {
  if (data && data.author && loggedIn && loggedIn.identifier && data.author === loggedIn.identifier) {
    return true;
  }
  return false;
};
export const getFormattedTime = (time, options = {}) => {
  try {
    // Format the time (-HH:MMAM/PM)
    if (options.simple) {
      const [hours, minutes] = time.split(':').map(Number);
      const period = hours < 12 ? 'AM' : 'PM';
      const hours12 = hours % 12 || 12;
      const formattedTime = `${hours12}:${minutes.toString().padStart(2, '0')}${period}`;
      return formattedTime;
    }
    const timeOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };
    const timeFormatter = new Intl.DateTimeFormat('en-US', timeOptions);
    const formattedTime = timeFormatter.format(time);
    return formattedTime;
  } catch (err) {
    console.log(err);
    return time;
  }
};
export const getFormattedDate = (date, options = {}) => {
  if (options.pretty) {
    try {
      const dateOptions = {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      };
      const dateFormatter = new Intl.DateTimeFormat('en-US', dateOptions);
      const formattedDate = dateFormatter.format(new Date(date));
      const formattedTime = getFormattedTime(new Date(date));
      console.log('Formatted Time Date', formattedDate, formattedTime);
      // Combine date and time
      if (!options.date && !options.time || options.date && options.time) {
        return formattedDate + '-' + formattedTime;
      }
      let d = '';
      if (options.date) {
        d += formattedDate;
      }
      if (options.time) {
        if (d.length !== 0) {
          d += '-';
        }
        d += formattedTime;
      }
      return d;
    } catch (err) {
      console.log(err);
      return date;
    }
  }
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');
  return month + '/' + day + '/' + year;
};
export function compareObjects(obj1, obj2) {
  if (obj1 === obj2) return true;
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 == null || obj2 == null) {
    return false;
  }
  const keysA = Object.keys(obj1);
  const keysB = Object.keys(obj2);
  if (keysA.length !== keysB.length) {
    return false;
  }
  let result = true;
  keysA.forEach(key => {
    if (!keysB.includes(key)) {
      result = false;
    }
    if (typeof obj1[key] === 'function' || typeof obj2[key] === 'function') {
      if (obj1[key].toString() !== obj2[key].toString()) {
        result = false;
      }
    }
    if (!compareObjects(obj1[key], obj2[key])) {
      result = false;
    }
  });
  return result;
}
export function registerCheckLocalStorageSize(window) {
  if (window?.Storage) {
    if (window.Storage.prototype && !window.Storage.prototype.size) {
      window.Storage.prototype.size = function (units) {
        'use strict';

        units = units ? units.toUpperCase() : 'MB';
        var size = unescape(encodeURIComponent(JSON.stringify(this))).length;
        switch (units) {
          case 'B':
            return [size, 'B'].join(' ');
          case 'KB':
            return [+(size / 1024).toFixed(3), 'KB'].join(' ');
          default:
            return [+(size / 1024 / 1024).toFixed(3), 'MB'].join(' ');
        }
      };
      return true;
    }
  }
  return false;
}

/**
 * Cleans logs to ensure that sensitive config variables are not exposed on prod
 * @param {*} window 
 */
export function registerProxyConsoleLog(window) {
  if (window?.console && !window.console.override) {
    window.console.override = true;
    const variables = resolveVariables();
    if (!variables.dev && !variables.doShowLogs) {
      // If user ser do show logs then they must want to show logs
      const log = window.console.log;
      // window.console.bind(window.console)
      window.console.log = (...message) => {
        if (variables.mute) {
          return log('');
        }
        const handleMessage = message;
        if (handleMessage?.length > 0) {
          for (let i = 0; i < handleMessage.length; i++) {
            Object.entries(variables).map(m => {
              if (handleMessage[i] && handleMessage[i][m[0]]) {
                handleMessage[i] = '--- REDACTED_SYS_INFO ---';
              }
            });
          }
        }
        let fileAndLine = '';
        try {
          const err = new Error(); // Extract stack trace
          const stack = err.stack.split('\n')[2].trim();

          // Extract file name and line number from the stack trace
          const match = stack.match(/(?:\()(.+?)(?::(\d+))?(?:\))/);
          const fileName = match ? match[1] : '';
          const lineNumber = match ? match[2] : '';
          fileAndLine = `[${fileName}:${lineNumber}]`;
        } catch (err) {
          // fail silently
        }
        return log(...handleMessage, fileAndLine);
      };
    }
  }
}
export function registerCheckMobile(window) {
  if (window) {
    window.mobileCheck = function () {
      let check = false;
      (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    };
  }
  return false;
}
const defaultLedger = owner => {
  return {
    owner: owner,
    action: 'user_ledger',
    ledgertype: 'user_ledger',
    meta: {},
    ledger: []
  };
};
export const handleRouteChange = (props, route, context) => {
  try {
    console.log('Route Change', props, route);
    const owner = props?._loggedIn?.identifier ?? null;
    if (owner) {
      const event = {
        action: 'navigate',
        to: route,
        time: new Date(),
        meta: {
          context: context
        }
      };
      if (localStorage) {
        let ledger = localStorage.getItem('user_ledger') ? JSON.parse(localStorage.getItem('user_ledger')) : defaultLedger(owner);
        if (ledger.ledger.length > 0) {
          event.timeSinceAction = new Date().getTime() - new Date(ledger.ledger[0].time).getTime();
          event.timeSinceActionSec = event.timeSinceAction / 1000;
          event.from = ledger.ledger[0].to, event.i = Object.prototype.hasOwnProperty.call(ledger.ledger[0], 'i') && !isNaN(Number(ledger.ledger[0].i)) ? Number(ledger.ledger[0].i) + 1 : 0;
        } else {
          event.i = 0;
        }
        if (ledger.owner !== owner) {
          ledger = defaultLedger(owner);
        }
        if (ledger.ledger.length > 500) {
          // shorten
          ledger.ledger.slice(0, 500);
        }
        const lsSize = localStorage.size();
        if (lsSize && lsSize.match('MB') && Number(lsSize.split(' ')[0]) > 2.50) {
          ledger.ledger.slice(0, 100);
        }
        ledger.ledger.unshift(event);
        localStorage.setItem('user_ledger', JSON.stringify(ledger));
        if (props.apiUrl && props.domainKey && props._LocalEventEmitter) {
          throttleFunctionCallQueue(props._LocalEventEmitter, '_senduseranalyticsrequest', 1500, sendUserAnalytics, [props.apiUrl, props.domainKey, props._loggedIn, ledger]);
        }
      }
    }
    // Reset Global Manager Open to page change
    if (props._setManagerOpen) {
      props._setManagerOpen(false);
    }
  } catch (err) {
    console.log(err);
  }
};
export const handleInteractMedia = (props, media, action, meta = {}) => {
  try {
    console.log('Route Change', props);
    const owner = props?._loggedIn?.identifier ?? null;
    if (owner) {
      const event = {
        action: action,
        media: media.id,
        time: new Date(),
        meta: meta
      };
      if (localStorage) {
        let ledger = localStorage.getItem('user_ledger') ? JSON.parse(localStorage.getItem('user_ledger')) : defaultLedger(owner);
        if (ledger.ledger.length > 0) {
          event.timeSinceAction = new Date().getTime() - new Date(ledger.ledger[0].time).getTime();
          event.timeSinceActionSec = event.timeSinceAction / 1000;
          event.i = Object.prototype.hasOwnProperty.call(ledger.ledger[0], 'i') && !isNaN(Number(ledger.ledger[0].i)) ? Number(ledger.ledger[0].i) + 1 : 0;
        } else {
          event.i = 0;
        }
        if (ledger.owner !== owner) {
          ledger = defaultLedger(owner);
        }
        if (ledger.ledger.length > 500) {
          // shorten
          ledger.ledger.slice(0, 500);
        }
        const lsSize = localStorage.size();
        if (lsSize && lsSize.match('MB') && Number(lsSize.split(' ')[0]) > 2.50) {
          ledger.ledger.slice(0, 100);
        }
        ledger.ledger.unshift(event);
        localStorage.setItem('user_ledger', JSON.stringify(ledger));
        console.log(ledger);
        if (props.apiUrl && props.domainKey && props._LocalEventEmitter) {
          throttleFunctionCallQueue(props._LocalEventEmitter, '_senduseranalyticsrequest', 1500, sendUserAnalytics, [props.apiUrl, props.domainKey, props._loggedIn, ledger]);
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
};
export const throttleFunctionCall = async function (o, store, delay, f, payload) {
  if (!o[store] || o[store] && o[store] < new Date().getTime() - delay) {
    o[store] = new Date().getTime();
    return f(...payload);
  }
  return null;
};
export const throttleFunctionCallQueue = async function (o, store, delay, f, payload) {
  o[store + '_payload'] = JSON.stringify(payload);
  if (!o[store] || o[store] && o[store] < new Date().getTime() - delay) {
    o[store] = new Date().getTime();
    return f(...JSON.parse(o[store + '_payload']));
  } else if (!o[store + '_running']) {
    o[store + '_running'] = setTimeout(() => {
      o[store] = new Date().getTime();
      f(...JSON.parse(o[store + '_payload']));
      o[store + '_running'] = null;
    }, delay);
  }
};