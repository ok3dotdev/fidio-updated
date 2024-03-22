"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchSearchData = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _fetch = require("../fetch");
/**
* Begin single live stream
* @param {string} uri
* @param {string} domainKey
* @param {*} data
* @param {function} checkSignedIn
* @returns 
*/
var fetchSearchData = exports.fetchSearchData = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(apiUrl, dataFetch, args) {
    var body, i, defaults;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          body = args;
          for (i = 0; i < dataFetch.length; i++) {
            body[dataFetch[i] + 'Req'] = true;
          }
          body["function"] = 'fetchSearchData';
          _context.next = 5;
          return (0, _fetch.fetchPost)(apiUrl + '/m/pagedefaults', null, null, body);
        case 5:
          defaults = _context.sent;
          return _context.abrupt("return", defaults);
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function fetchSearchData(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();