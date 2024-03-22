"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setStripeSecretData = exports.saveCreditCardInfo = exports.getStripeSecretData = exports.fetchStripeSecret = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _fetch = require("../fetch/fetch");
var _SignIn = require("/modules/utility/onboarding/SignIn.js");
// Will fetch stripe secret using id or username
var fetchStripeSecret = exports.fetchStripeSecret = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(uri, domainKey, user) {
    var options,
      fetchBody,
      res,
      _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          options = _args.length > 3 && _args[3] !== undefined ? _args[3] : {};
          if (!(user && user.identifier && user.hash && domainKey)) {
            _context.next = 7;
            break;
          }
          fetchBody = Object.assign((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({
            domainKey: domainKey
          }, "domainKey", domainKey), "hash", user.hash), "identifier", user.identifier), options);
          _context.next = 5;
          return (0, _fetch.fetchPost)(uri + '/m/getclientsecret', null, null, fetchBody);
        case 5:
          res = _context.sent;
          return _context.abrupt("return", res);
        case 7:
          return _context.abrupt("return", false);
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function fetchStripeSecret(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var getStripeSecretData = exports.getStripeSecretData = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(uri, domainKey, data, options) {
    var secret;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return fetchStripeSecret(uri, domainKey, data, options);
        case 2:
          secret = _context2.sent;
          if (!secret) {
            _context2.next = 5;
            break;
          }
          return _context2.abrupt("return", secret);
        case 5:
          return _context2.abrupt("return", false);
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getStripeSecretData(_x4, _x5, _x6, _x7) {
    return _ref2.apply(this, arguments);
  };
}();
var setStripeSecretData = exports.setStripeSecretData = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(uri, domainKey, data, f) {
    var secret;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return getStripeSecretData(uri, domainKey, data);
        case 2:
          secret = _context3.sent;
          if (secret) {
            f(secret);
          }
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function setStripeSecretData(_x8, _x9, _x10, _x11) {
    return _ref3.apply(this, arguments);
  };
}();

/**
* Save single Credit card information to backend
* @param {*} data 
* @returns 
*/
var saveCreditCardInfo = exports.saveCreditCardInfo = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(uri, domainKey, data, checkSignedIn) {
    var options,
      user,
      fetchBody,
      res,
      _args4 = arguments;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          options = _args4.length > 4 && _args4[4] !== undefined ? _args4[4] : {};
          user = checkSignedIn();
          if (!user) {
            _context4.next = 31;
            break;
          }
          if (!(user.identifier && user.hash)) {
            _context4.next = 28;
            break;
          }
          fetchBody = Object.assign({
            cus_id: data.stripeSecret.user,
            domainKey: domainKey,
            hash: user.hash,
            identifier: user.identifier
          }, options);
          if (data.result && data.result.setupIntent && data.result.setupIntent.payment_method) {
            fetchBody.payment_id = data.result.setupIntent.payment_method;
          }
          _context4.next = 8;
          return (0, _fetch.fetchPost)(uri + '/m/saveccinfo', null, null, fetchBody);
        case 8:
          res = _context4.sent;
          if (res) {
            _context4.next = 13;
            break;
          }
          return _context4.abrupt("return", false);
        case 13:
          if (!res.hasOwnProperty('status')) {
            _context4.next = 25;
            break;
          }
          if (!(res.status == "disauthenticated")) {
            _context4.next = 19;
            break;
          }
          (0, _SignIn.logout)();
          return _context4.abrupt("return", "disauthenticated");
        case 19:
          if (!(res.status == "failed")) {
            _context4.next = 23;
            break;
          }
          return _context4.abrupt("return", false);
        case 23:
          if (!(res.status == "success")) {
            _context4.next = 25;
            break;
          }
          return _context4.abrupt("return", res);
        case 25:
          return _context4.abrupt("return", false);
        case 28:
          return _context4.abrupt("return", false);
        case 29:
          _context4.next = 32;
          break;
        case 31:
          return _context4.abrupt("return", false);
        case 32:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function saveCreditCardInfo(_x12, _x13, _x14, _x15) {
    return _ref4.apply(this, arguments);
  };
}();