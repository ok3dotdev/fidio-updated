"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendSurveyEmail = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _fetch = require("../fetch/fetch");
var _SignIn = require("/modules/utility/onboarding/SignIn.js");
/**
* Sends single survey email
* @param {string} uri
* @param {string} domainKey
* @param {*} data 
* @param {Object} who Optional identification of user
* @returns 
*/
var sendSurveyEmail = exports.sendSurveyEmail = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(uri, domainKey, data, surveyName, who) {
    var fetchBody, res;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          fetchBody = {
            domainKey: domainKey,
            hash: who === null || who === void 0 ? void 0 : who.hash,
            identifier: who === null || who === void 0 ? void 0 : who.identifier,
            answers: data,
            surveyName: surveyName
          };
          console.log(uri, fetchBody);
          _context.next = 4;
          return (0, _fetch.fetchPost)(uri + '/m/sendsurveyemail', null, null, fetchBody);
        case 4:
          res = _context.sent;
          if (res) {
            _context.next = 9;
            break;
          }
          return _context.abrupt("return", false);
        case 9:
          if (!res.hasOwnProperty('status')) {
            _context.next = 21;
            break;
          }
          if (!(res.status == "disauthenticated")) {
            _context.next = 15;
            break;
          }
          (0, _SignIn.logout)();
          return _context.abrupt("return", "disauthenticated");
        case 15:
          if (!(res.status == "failed")) {
            _context.next = 19;
            break;
          }
          return _context.abrupt("return", false);
        case 19:
          if (!(res.status == "success")) {
            _context.next = 21;
            break;
          }
          return _context.abrupt("return", res);
        case 21:
          return _context.abrupt("return", false);
        case 22:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function sendSurveyEmail(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();