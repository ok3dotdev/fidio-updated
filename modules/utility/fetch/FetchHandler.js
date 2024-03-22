"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _fetch = require("./fetch");
var Module = function Module(props) {
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    fetchBusy = _React$useState2[0],
    setFetchBusy = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(false),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    didFetch = _React$useState4[0],
    setDidFetch = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(-1),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    lastFetch = _React$useState6[0],
    setLastFetch = _React$useState6[1];
  _react["default"].useEffect(function () {
    var f = /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _props$handlerName, fetchBody, res;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              if (!props.apiUrl) {
                _context.next = 24;
                break;
              }
              if (!(!fetchBusy && props.handlerArgs && props.domainKey && props.apiUrl && !didFetch)) {
                _context.next = 24;
                break;
              }
              setFetchBusy(true);
              setTimeout(function () {
                setFetchBusy(false);
              }, 15000);
              setLastFetch(new Date().getTime());
              setDidFetch(true);
              fetchBody = {
                domainKey: props.domainKey,
                handlerName: (_props$handlerName = props.handlerName) !== null && _props$handlerName !== void 0 ? _props$handlerName : null,
                handlerArgs: props.handlerArgs
              };
              _context.next = 10;
              return (0, _fetch.fetchPost)(props.apiUrl + '/m/fetchhandler', null, null, fetchBody);
            case 10:
              res = _context.sent;
              console.log('Handler', res);
              if (res) {
                _context.next = 17;
                break;
              }
              setFetchBusy(false);
              return _context.abrupt("return", false);
            case 17:
              if (!res.hasOwnProperty('status')) {
                _context.next = 24;
                break;
              }
              if (!(res.status == "failed")) {
                _context.next = 23;
                break;
              }
              setFetchBusy(false);
              return _context.abrupt("return", false);
            case 23:
              if (res.status == "success") {
                setFetchBusy(false);
                if (props.receiveData) {
                  props.receiveData(res);
                }
              }
            case 24:
              _context.next = 30;
              break;
            case 26:
              _context.prev = 26;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);
              setFetchBusy(false);
            case 30:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 26]]);
      }));
      return function f() {
        return _ref.apply(this, arguments);
      };
    }();
    f();
  }, [didFetch, fetchBusy, props === null || props === void 0 ? void 0 : props.handlerName, props.handlerArgs, props.domainKey]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className)
  });
};
var _default = exports["default"] = Module;