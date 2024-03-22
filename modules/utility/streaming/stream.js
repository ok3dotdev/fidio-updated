"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateStreamConfigRequest = exports.requestStreamingPermissions = exports.endStream = exports.doFetchAuthForStream = exports.beginStream = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _fetch = require("/modules/utility/fetch/fetch.js");
var _SignIn = require("/modules/utility/onboarding/SignIn.js");
/**
* Begin single live stream
* @param {string} uri
* @param {string} domainKey
* @param {*} data
* @param {function} checkSignedIn
* @returns 
*/
var beginStream = exports.beginStream = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(apiUrl, domainKey, data, checkSignedIn) {
    var user, fetchBody, res;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          user = checkSignedIn();
          if (!user) {
            _context.next = 29;
            break;
          }
          if (!(user.identifier && user.hash)) {
            _context.next = 26;
            break;
          }
          fetchBody = {
            cus_id: data.stripeSecret.user,
            dontForce: data.dontForce,
            streamSettings: data.streamSettings,
            domainKey: domainKey,
            hash: user.hash,
            identifier: user.identifier
          };
          _context.next = 6;
          return (0, _fetch.fetchPost)(apiUrl + '/m/beginstream', null, null, fetchBody);
        case 6:
          res = _context.sent;
          if (res) {
            _context.next = 11;
            break;
          }
          return _context.abrupt("return", false);
        case 11:
          if (!res.hasOwnProperty('status')) {
            _context.next = 23;
            break;
          }
          if (!(res.status == "disauthenticated")) {
            _context.next = 17;
            break;
          }
          (0, _SignIn.logout)();
          return _context.abrupt("return", "disauthenticated");
        case 17:
          if (!(res.status == "failed")) {
            _context.next = 21;
            break;
          }
          return _context.abrupt("return", false);
        case 21:
          if (!(res.status == "success")) {
            _context.next = 23;
            break;
          }
          return _context.abrupt("return", res);
        case 23:
          return _context.abrupt("return", false);
        case 26:
          return _context.abrupt("return", false);
        case 27:
          _context.next = 30;
          break;
        case 29:
          return _context.abrupt("return", false);
        case 30:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function beginStream(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

/**
* Begin single live stream
* @param {string} uri
* @param {string} domainKey
* @param {*} data
* @param {function} checkSignedIn
* @returns 
*/
var endStream = exports.endStream = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(apiUrl, domainKey, data, checkSignedIn) {
    var user, fetchBody, res;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          user = checkSignedIn();
          if (!user) {
            _context2.next = 29;
            break;
          }
          if (!(user.identifier && user.hash)) {
            _context2.next = 26;
            break;
          }
          fetchBody = {
            stream: data.stream,
            domainKey: domainKey,
            hash: user.hash,
            identifier: user.identifier
          };
          _context2.next = 6;
          return (0, _fetch.fetchPost)(apiUrl + '/m/endstream', null, null, fetchBody);
        case 6:
          res = _context2.sent;
          if (res) {
            _context2.next = 11;
            break;
          }
          return _context2.abrupt("return", false);
        case 11:
          if (!res.hasOwnProperty('status')) {
            _context2.next = 23;
            break;
          }
          if (!(res.status == "disauthenticated")) {
            _context2.next = 17;
            break;
          }
          (0, _SignIn.logout)();
          return _context2.abrupt("return", "disauthenticated");
        case 17:
          if (!(res.status == "failed")) {
            _context2.next = 21;
            break;
          }
          return _context2.abrupt("return", false);
        case 21:
          if (!(res.status == "success")) {
            _context2.next = 23;
            break;
          }
          return _context2.abrupt("return", res);
        case 23:
          return _context2.abrupt("return", false);
        case 26:
          return _context2.abrupt("return", false);
        case 27:
          _context2.next = 30;
          break;
        case 29:
          return _context2.abrupt("return", false);
        case 30:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function endStream(_x5, _x6, _x7, _x8) {
    return _ref2.apply(this, arguments);
  };
}();

/**
* Check auth for stream
* @param {string} uri
* @param {string} domainKey
* @param {*} stream
* @param {function} checkSignedIn
* @returns 
*/
var doFetchAuthForStream = exports.doFetchAuthForStream = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(apiUrl, domainKey, stream, checkSignedIn) {
    var user, fetchBody, res;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          user = checkSignedIn();
          if (!user) {
            _context3.next = 29;
            break;
          }
          if (!(user.identifier && user.hash)) {
            _context3.next = 26;
            break;
          }
          fetchBody = {
            stream: stream,
            domainKey: domainKey,
            hash: user.hash,
            identifier: user.identifier
          };
          _context3.next = 6;
          return (0, _fetch.fetchPost)(apiUrl + '/m/getauthforstream', null, null, fetchBody);
        case 6:
          res = _context3.sent;
          if (res) {
            _context3.next = 11;
            break;
          }
          return _context3.abrupt("return", false);
        case 11:
          if (!res.hasOwnProperty('status')) {
            _context3.next = 23;
            break;
          }
          if (!(res.status == "disauthenticated")) {
            _context3.next = 17;
            break;
          }
          (0, _SignIn.logout)();
          return _context3.abrupt("return", "disauthenticated");
        case 17:
          if (!(res.status == "failed")) {
            _context3.next = 21;
            break;
          }
          return _context3.abrupt("return", false);
        case 21:
          if (!(res.status == "success")) {
            _context3.next = 23;
            break;
          }
          return _context3.abrupt("return", res);
        case 23:
          return _context3.abrupt("return", false);
        case 26:
          return _context3.abrupt("return", false);
        case 27:
          _context3.next = 30;
          break;
        case 29:
          return _context3.abrupt("return", false);
        case 30:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function doFetchAuthForStream(_x9, _x10, _x11, _x12) {
    return _ref3.apply(this, arguments);
  };
}();

/**
* Begin single live stream
* @param {string} uri
* @param {string} domainKey
* @param {*} data
* @param {function} checkSignedIn
* @returns 
*/
var updateStreamConfigRequest = exports.updateStreamConfigRequest = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(apiUrl, domainKey, data, checkSignedIn) {
    var user, fetchBody, res;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          user = checkSignedIn();
          if (!user) {
            _context4.next = 30;
            break;
          }
          if (!(user.identifier && user.hash)) {
            _context4.next = 27;
            break;
          }
          fetchBody = {
            stream: data.stream,
            streamData: data.streamData,
            streamSettings: data.streamSettings,
            domainKey: domainKey,
            hash: user.hash,
            identifier: user.identifier
          };
          console.log(fetchBody);
          _context4.next = 7;
          return (0, _fetch.fetchPost)(apiUrl + '/m/updatestreamconfig', null, null, fetchBody);
        case 7:
          res = _context4.sent;
          if (res) {
            _context4.next = 12;
            break;
          }
          return _context4.abrupt("return", false);
        case 12:
          if (!res.hasOwnProperty('status')) {
            _context4.next = 24;
            break;
          }
          if (!(res.status == "disauthenticated")) {
            _context4.next = 18;
            break;
          }
          (0, _SignIn.logout)();
          return _context4.abrupt("return", "disauthenticated");
        case 18:
          if (!(res.status == "failed")) {
            _context4.next = 22;
            break;
          }
          return _context4.abrupt("return", false);
        case 22:
          if (!(res.status == "success")) {
            _context4.next = 24;
            break;
          }
          return _context4.abrupt("return", res);
        case 24:
          return _context4.abrupt("return", false);
        case 27:
          return _context4.abrupt("return", false);
        case 28:
          _context4.next = 31;
          break;
        case 30:
          return _context4.abrupt("return", false);
        case 31:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function updateStreamConfigRequest(_x13, _x14, _x15, _x16) {
    return _ref4.apply(this, arguments);
  };
}();

/**
* Begin single live stream
* @param {string} uri
* @param {string} domainKey
* @param {*} data
* @param {function} checkSignedIn
* @returns 
*/
var requestStreamingPermissions = exports.requestStreamingPermissions = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(apiUrl, domainKey, checkSignedIn) {
    var user, fetchBody, res;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          user = checkSignedIn();
          if (!user) {
            _context5.next = 30;
            break;
          }
          if (!(user.identifier && user.hash)) {
            _context5.next = 27;
            break;
          }
          fetchBody = {
            domainKey: domainKey,
            hash: user.hash,
            identifier: user.identifier
          };
          console.log(fetchBody);
          _context5.next = 7;
          return (0, _fetch.fetchPost)(apiUrl + '/m/requeststreamingpermissions', null, null, fetchBody);
        case 7:
          res = _context5.sent;
          if (res) {
            _context5.next = 12;
            break;
          }
          return _context5.abrupt("return", false);
        case 12:
          if (!res.hasOwnProperty('status')) {
            _context5.next = 24;
            break;
          }
          if (!(res.status == "disauthenticated")) {
            _context5.next = 18;
            break;
          }
          (0, _SignIn.logout)();
          return _context5.abrupt("return", "disauthenticated");
        case 18:
          if (!(res.status == "failed")) {
            _context5.next = 22;
            break;
          }
          return _context5.abrupt("return", false);
        case 22:
          if (!(res.status == "success")) {
            _context5.next = 24;
            break;
          }
          return _context5.abrupt("return", res);
        case 24:
          return _context5.abrupt("return", false);
        case 27:
          return _context5.abrupt("return", false);
        case 28:
          _context5.next = 31;
          break;
        case 30:
          return _context5.abrupt("return", false);
        case 31:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function requestStreamingPermissions(_x17, _x18, _x19) {
    return _ref5.apply(this, arguments);
  };
}();