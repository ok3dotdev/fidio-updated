"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _fetch = require("/modules/utility/fetch");
function handler(_x) {
  return _handler.apply(this, arguments);
}
function _handler() {
  _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
    var useBody, res;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(body !== null && body !== void 0 && body.apiUrl)) {
            _context.next = 26;
            break;
          }
          useBody = {
            id: body.id,
            // If existing, get product matching id
            pagination: body.pagination // Paginate
          };
          if (Object.prototype.hasOwnProperty.call(body, 'meta')) {
            useBody.meta = body.meta; // If true, only get where meta matches type
          }
          if (Object.prototype.hasOwnProperty.call(body, 'extra')) {
            useBody.extra = body.extra; // Extra fields match
          }
          _context.next = 6;
          return (0, _fetch.fetchPost)(body.apiUrl + '/m/getproducts', null, null, useBody);
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
          logout();
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
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _handler.apply(this, arguments);
}