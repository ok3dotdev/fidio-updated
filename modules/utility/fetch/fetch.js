"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retrieveUrlParams = exports.fetchPost = exports.fetchGet = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _app = require("/app.config");
var fetchPost = exports.fetchPost = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(route, headers, cred) {
    var body,
      options,
      updatedBody,
      payload,
      _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          body = _args.length > 3 && _args[3] !== undefined ? _args[3] : {};
          options = _args.length > 4 && _args[4] !== undefined ? _args[4] : {};
          if (!headers && !options.formData) {
            headers = {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            };
          }
          if (!cred) {
            cred = (0, _app.resolveVariables)().corsdefault;
          }
          console.log(route, fetch);
          updatedBody = body;
          if (options.formData) {
            body.append('dborigin', (0, _app.resolveVariables)().dborigin);
            if (body.has('domainKey')) {
              body["delete"]('domainKey');
            }
            body.append('domainKey', (0, _app.resolveVariables)().domainKey);
          } else {
            updatedBody.dborigin = (0, _app.resolveVariables)().dborigin;
            updatedBody.domainKey = (0, _app.resolveVariables)().domainKey;
          }
          console.log('Form Data', options.formData);
          payload = {
            method: "POST",
            cred: cred,
            body: options.formData ? body : JSON.stringify(updatedBody)
          };
          if (headers) {
            payload.headers = headers;
          }
          _context.next = 12;
          return fetch(route, payload).then(function (response) {
            return response.json();
          }).then(function (data) {
            return data;
          })["catch"](function (err) {
            console.log(err);
            return err;
          });
        case 12:
          return _context.abrupt("return", _context.sent);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function fetchPost(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var fetchGet = exports.fetchGet = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(route, headers, cred, options) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!headers) {
            headers = {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            };
          }
          if (!cred) {
            cred = (0, _app.resolveVariables)().corsdefault;
          }
          _context2.next = 4;
          return fetch(route, {
            method: "GET",
            headers: headers,
            cred: cred
          }).then(function (response) {
            return response.json();
          }).then(function (data) {
            return data;
          })["catch"](function (err) {
            return err;
          });
        case 4:
          return _context2.abrupt("return", _context2.sent);
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function fetchGet(_x4, _x5, _x6, _x7) {
    return _ref2.apply(this, arguments);
  };
}();
var retrieveUrlParams = exports.retrieveUrlParams = function retrieveUrlParams() {
  return new Proxy(new URLSearchParams(window.location.search), {
    get: function get(searchParams, prop) {
      return searchParams.get(prop);
    }
  });
};