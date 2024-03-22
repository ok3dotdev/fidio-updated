"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compareObjects = compareObjects;
exports.isObjectEmpty = exports.handleRouteChange = exports.handleInteractMedia = exports.getFormattedTime = exports.getFormattedDate = exports.detectAllowEditingFlag = exports.debounce = void 0;
exports.registerCheckLocalStorageSize = registerCheckLocalStorageSize;
exports.registerCheckMobile = registerCheckMobile;
exports.registerProxyConsoleLog = registerProxyConsoleLog;
exports.throttleFunctionCallQueue = exports.throttleFunctionCall = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _analytics = require("./analytics");
var _app = require("/app.config");
var isObjectEmpty = exports.isObjectEmpty = function isObjectEmpty(obj) {
  return obj // 👈 null and undefined check
  && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype;
};
var debounce = exports.debounce = function debounce(a, b, c) {
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
var detectAllowEditingFlag = exports.detectAllowEditingFlag = function detectAllowEditingFlag(data, loggedIn) {
  if (data && data.author && loggedIn && loggedIn.identifier && data.author === loggedIn.identifier) {
    return true;
  }
  return false;
};
var getFormattedTime = exports.getFormattedTime = function getFormattedTime(time) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  try {
    // Format the time (-HH:MMAM/PM)
    if (options.simple) {
      var _time$split$map = time.split(':').map(Number),
        _time$split$map2 = (0, _slicedToArray2["default"])(_time$split$map, 2),
        hours = _time$split$map2[0],
        minutes = _time$split$map2[1];
      var period = hours < 12 ? 'AM' : 'PM';
      var hours12 = hours % 12 || 12;
      var _formattedTime = "".concat(hours12, ":").concat(minutes.toString().padStart(2, '0')).concat(period);
      return _formattedTime;
    }
    var timeOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };
    var timeFormatter = new Intl.DateTimeFormat('en-US', timeOptions);
    var formattedTime = timeFormatter.format(time);
    return formattedTime;
  } catch (err) {
    console.log(err);
    return time;
  }
};
var getFormattedDate = exports.getFormattedDate = function getFormattedDate(date) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (options.pretty) {
    try {
      var dateOptions = {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      };
      var dateFormatter = new Intl.DateTimeFormat('en-US', dateOptions);
      var formattedDate = dateFormatter.format(new Date(date));
      var formattedTime = getFormattedTime(new Date(date));
      console.log('Formatted Time Date', formattedDate, formattedTime);
      // Combine date and time
      if (!options.date && !options.time || options.date && options.time) {
        return formattedDate + '-' + formattedTime;
      }
      var d = '';
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
  var year = date.getFullYear();
  var month = (1 + date.getMonth()).toString().padStart(2, '0');
  var day = date.getDate().toString().padStart(2, '0');
  return month + '/' + day + '/' + year;
};
function compareObjects(obj1, obj2) {
  if (obj1 === obj2) return true;
  if ((0, _typeof2["default"])(obj1) !== 'object' || (0, _typeof2["default"])(obj2) !== 'object' || obj1 == null || obj2 == null) {
    return false;
  }
  var keysA = Object.keys(obj1);
  var keysB = Object.keys(obj2);
  if (keysA.length !== keysB.length) {
    return false;
  }
  var result = true;
  keysA.forEach(function (key) {
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
function registerCheckLocalStorageSize(window) {
  if (window !== null && window !== void 0 && window.Storage) {
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
function registerProxyConsoleLog(window) {
  if (window !== null && window !== void 0 && window.console && !window.console.override) {
    window.console.override = true;
    var variables = (0, _app.resolveVariables)();
    if (!variables.dev && !variables.doShowLogs) {
      // If user ser do show logs then they must want to show logs
      var log = window.console.log;
      // window.console.bind(window.console)
      window.console.log = function () {
        if (variables.mute) {
          return log('');
        }
        for (var _len = arguments.length, message = new Array(_len), _key = 0; _key < _len; _key++) {
          message[_key] = arguments[_key];
        }
        var handleMessage = message;
        if ((handleMessage === null || handleMessage === void 0 ? void 0 : handleMessage.length) > 0) {
          var _loop = function _loop(i) {
            Object.entries(variables).map(function (m) {
              if (handleMessage[i] && handleMessage[i][m[0]]) {
                handleMessage[i] = '--- REDACTED_SYS_INFO ---';
              }
            });
          };
          for (var i = 0; i < handleMessage.length; i++) {
            _loop(i);
          }
        }
        var fileAndLine = '';
        try {
          var err = new Error(); // Extract stack trace
          var stack = err.stack.split('\n')[2].trim();

          // Extract file name and line number from the stack trace
          var match = stack.match(/(?:\()(.+?)(?::(\d+))?(?:\))/);
          var fileName = match ? match[1] : '';
          var lineNumber = match ? match[2] : '';
          fileAndLine = "[".concat(fileName, ":").concat(lineNumber, "]");
        } catch (err) {
          // fail silently
        }
        return log.apply(void 0, handleMessage.concat([fileAndLine]));
      };
    }
  }
}
function registerCheckMobile(window) {
  if (window) {
    window.mobileCheck = function () {
      var check = false;
      (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    };
  }
  return false;
}
var defaultLedger = function defaultLedger(owner) {
  return {
    owner: owner,
    action: 'user_ledger',
    ledgertype: 'user_ledger',
    meta: {},
    ledger: []
  };
};
var handleRouteChange = exports.handleRouteChange = function handleRouteChange(props, route, context) {
  try {
    var _props$_loggedIn$iden, _props$_loggedIn;
    console.log('Route Change', props, route);
    var owner = (_props$_loggedIn$iden = props === null || props === void 0 || (_props$_loggedIn = props._loggedIn) === null || _props$_loggedIn === void 0 ? void 0 : _props$_loggedIn.identifier) !== null && _props$_loggedIn$iden !== void 0 ? _props$_loggedIn$iden : null;
    if (owner) {
      var event = {
        action: 'navigate',
        to: route,
        time: new Date(),
        meta: {
          context: context
        }
      };
      if (localStorage) {
        var ledger = localStorage.getItem('user_ledger') ? JSON.parse(localStorage.getItem('user_ledger')) : defaultLedger(owner);
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
        var lsSize = localStorage.size();
        if (lsSize && lsSize.match('MB') && Number(lsSize.split(' ')[0]) > 2.50) {
          ledger.ledger.slice(0, 100);
        }
        ledger.ledger.unshift(event);
        localStorage.setItem('user_ledger', JSON.stringify(ledger));
        if (props.apiUrl && props.domainKey && props._LocalEventEmitter) {
          throttleFunctionCallQueue(props._LocalEventEmitter, '_senduseranalyticsrequest', 1500, _analytics.sendUserAnalytics, [props.apiUrl, props.domainKey, props._loggedIn, ledger]);
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
var handleInteractMedia = exports.handleInteractMedia = function handleInteractMedia(props, media, action) {
  var meta = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  try {
    var _props$_loggedIn$iden2, _props$_loggedIn2;
    console.log('Route Change', props);
    var owner = (_props$_loggedIn$iden2 = props === null || props === void 0 || (_props$_loggedIn2 = props._loggedIn) === null || _props$_loggedIn2 === void 0 ? void 0 : _props$_loggedIn2.identifier) !== null && _props$_loggedIn$iden2 !== void 0 ? _props$_loggedIn$iden2 : null;
    if (owner) {
      var event = {
        action: action,
        media: media.id,
        time: new Date(),
        meta: meta
      };
      if (localStorage) {
        var ledger = localStorage.getItem('user_ledger') ? JSON.parse(localStorage.getItem('user_ledger')) : defaultLedger(owner);
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
        var lsSize = localStorage.size();
        if (lsSize && lsSize.match('MB') && Number(lsSize.split(' ')[0]) > 2.50) {
          ledger.ledger.slice(0, 100);
        }
        ledger.ledger.unshift(event);
        localStorage.setItem('user_ledger', JSON.stringify(ledger));
        console.log(ledger);
        if (props.apiUrl && props.domainKey && props._LocalEventEmitter) {
          throttleFunctionCallQueue(props._LocalEventEmitter, '_senduseranalyticsrequest', 1500, _analytics.sendUserAnalytics, [props.apiUrl, props.domainKey, props._loggedIn, ledger]);
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
};
var throttleFunctionCall = exports.throttleFunctionCall = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(o, store, delay, f, payload) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(!o[store] || o[store] && o[store] < new Date().getTime() - delay)) {
            _context.next = 3;
            break;
          }
          o[store] = new Date().getTime();
          return _context.abrupt("return", f.apply(void 0, (0, _toConsumableArray2["default"])(payload)));
        case 3:
          return _context.abrupt("return", null);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function throttleFunctionCall(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();
var throttleFunctionCallQueue = exports.throttleFunctionCallQueue = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(o, store, delay, f, payload) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          o[store + '_payload'] = JSON.stringify(payload);
          if (!(!o[store] || o[store] && o[store] < new Date().getTime() - delay)) {
            _context2.next = 6;
            break;
          }
          o[store] = new Date().getTime();
          return _context2.abrupt("return", f.apply(void 0, (0, _toConsumableArray2["default"])(JSON.parse(o[store + '_payload']))));
        case 6:
          if (!o[store + '_running']) {
            o[store + '_running'] = setTimeout(function () {
              o[store] = new Date().getTime();
              f.apply(void 0, (0, _toConsumableArray2["default"])(JSON.parse(o[store + '_payload'])));
              o[store + '_running'] = null;
            }, delay);
          }
        case 7:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function throttleFunctionCallQueue(_x6, _x7, _x8, _x9, _x10) {
    return _ref2.apply(this, arguments);
  };
}();