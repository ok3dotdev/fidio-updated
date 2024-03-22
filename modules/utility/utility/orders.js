"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOrders = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _fetch = require("../fetch");
var getOrders = exports.getOrders = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(uri, domainKey, user, sortField, sort, offset, limit) {
    var body, res;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(user.identifier && user.hash && domainKey)) {
            _context.next = 24;
            break;
          }
          body = {
            identifier: user.identifier,
            hash: user.hash,
            domainKey: domainKey,
            sortField: sortField,
            sort: sort,
            offset: offset,
            limit: limit
          };
          _context.next = 4;
          return (0, _fetch.fetchPost)(uri + '/m/getorders', null, null, body);
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
          logout();
          return _context.abrupt("return", "disauthenticated");
        case 15:
          if (!(res.status == "failed")) {
            _context.next = 19;
            break;
          }
          return _context.abrupt("return", false);
        case 19:
          if (!(res.status == "success" && res.data)) {
            _context.next = 21;
            break;
          }
          return _context.abrupt("return", res);
        case 21:
          return _context.abrupt("return", false);
        case 24:
          return _context.abrupt("return", false);
        case 25:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getOrders(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
    return _ref.apply(this, arguments);
  };
}();