"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _fetch = require("/modules/utility/fetch");
var _app = require("../../../../app.config");
function handler(_x) {
  return _handler.apply(this, arguments);
}
function _handler() {
  _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
    var _resolveVariables, useBody, handleAdd, res;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!body) {
            _context.next = 26;
            break;
          }
          useBody = {};
          handleAdd = function handleAdd(keys, b) {
            if (keys.length > 0) {
              for (var i = 0; i < keys.length; i++) {
                if (Object.prototype.hasOwnProperty.call(body, keys[i])) {
                  b[keys[i]] = body[keys[i]];
                }
              }
            }
            return b;
          };
          useBody = handleAdd(['toUserId', 'toUsername', 'toEmail', 'subject', 'content'], useBody);
          _context.next = 6;
          return (0, _fetch.fetchPost)(((_resolveVariables = (0, _app.resolveVariables)()) === null || _resolveVariables === void 0 ? void 0 : _resolveVariables.apiUrl) + '/m/sendemail', null, null, useBody);
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