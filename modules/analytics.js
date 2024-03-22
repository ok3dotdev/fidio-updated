"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendUserAnalytics = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _fetch = require("./utility/fetch");
var sendUserAnalytics = exports.sendUserAnalytics = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(uri, domainKey, user, ledger, force) {
    var body, res;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(user.identifier && user.hash && domainKey && ledger)) {
            _context.next = 25;
            break;
          }
          if (!(ledger !== null && ledger !== void 0 && ledger.ledger && (ledger.ledger.length % 25 === 0 || force))) {
            _context.next = 22;
            break;
          }
          body = {
            domainKey: domainKey,
            hash: user.hash,
            identifier: user.identifier,
            ledger: ledger
          };
          _context.next = 5;
          return (0, _fetch.fetchPost)(uri + '/m/senduseranalytics', null, null, body);
        case 5:
          res = _context.sent;
          if (res) {
            _context.next = 10;
            break;
          }
          return _context.abrupt("return", false);
        case 10:
          if (!res.hasOwnProperty('status')) {
            _context.next = 22;
            break;
          }
          if (!(res.status == "disauthenticated")) {
            _context.next = 16;
            break;
          }
          logout();
          return _context.abrupt("return", "disauthenticated");
        case 16:
          if (!(res.status == "failed")) {
            _context.next = 20;
            break;
          }
          return _context.abrupt("return", false);
        case 20:
          if (!(res.status == "success")) {
            _context.next = 22;
            break;
          }
          return _context.abrupt("return", res);
        case 22:
          return _context.abrupt("return", false);
        case 25:
          return _context.abrupt("return", false);
        case 26:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function sendUserAnalytics(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();