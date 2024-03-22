"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = api;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _createProduct = _interopRequireDefault(require("./product/createProduct"));
var _getProducts = _interopRequireDefault(require("./product/getProducts"));
var _sendEmail = _interopRequireDefault(require("./email/sendEmail"));
function api(_x, _x2) {
  return _api.apply(this, arguments);
}
function _api() {
  _api = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(url, args) {
    var u;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          u = url !== null && url !== void 0 && url.toLowerCase ? url.toLowerCase() : url;
          _context.t0 = u;
          _context.next = _context.t0 === '/product/createproduct' ? 4 : _context.t0 === '/product/getproducts' ? 7 : _context.t0 === '/email/sendemail' ? 10 : 13;
          break;
        case 4:
          _context.next = 6;
          return (0, _createProduct["default"])(args);
        case 6:
          return _context.abrupt("return", _context.sent);
        case 7:
          _context.next = 9;
          return (0, _getProducts["default"])(args);
        case 9:
          return _context.abrupt("return", _context.sent);
        case 10:
          _context.next = 12;
          return (0, _sendEmail["default"])(args);
        case 12:
          return _context.abrupt("return", _context.sent);
        case 13:
          return _context.abrupt("return", 'No Request Called');
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _api.apply(this, arguments);
}