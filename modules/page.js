"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.page = exports.getServerSideProps = exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _router = require("next/router");
var _app = _interopRequireWildcard(require("/app.config"));
var _utility = require("/modules/utility.js");
var _util = require("/modules/util");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var page = exports.page = function page(props) {
  var router = (0, _router.useRouter)();
  var query = router.query,
    asPath = router.asPath;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    fetching = _React$useState2[0],
    setFetching = _React$useState2[1];
  var _React$useState3 = _react["default"].useState({}),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    mergeProps = _React$useState4[0],
    setMergeProps = _React$useState4[1];
  var resolvedDefinition = props.resolvedDefinition;
  var variables = (0, _app.resolveVariables)();
  var config = (0, _app["default"])(variables, props);
  var resolvedPage = (0, _utility.resolvePage)(config, props.path);
  resolvedDefinition = resolvedPage && resolvedPage.data; // Access the `data` property

  _react["default"].useEffect(function () {
    var getDefaults = /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var defaults, newProps;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _utility.resolveDefaults)(resolvedPage.url, props, variables, query, asPath, setFetching);
            case 2:
              defaults = _context.sent;
              if (!(0, _util.isObjectEmpty)(defaults)) {
                newProps = Object.assign(_objectSpread({}, props), defaults);
                setMergeProps(newProps);
              }
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function getDefaults() {
        return _ref.apply(this, arguments);
      };
    }();
    if (resolvedPage && resolvedPage.url && !fetching && (0, _util.isObjectEmpty)(mergeProps)) {
      getDefaults();
    }
  }, [fetching, mergeProps, resolvedPage]);
  var useProps = (0, _util.isObjectEmpty)(mergeProps) ? props : mergeProps;
  config = (0, _app["default"])(variables, useProps);
  resolvedPage = (0, _utility.resolvePage)(config, useProps.path);
  resolvedDefinition = resolvedPage && resolvedPage.data; // Access the `data` property
  var components = (0, _utility.generateComponent)(resolvedDefinition);
  return /*#__PURE__*/_react["default"].createElement("div", null, components);
};
var getServerSideProps = exports.getServerSideProps = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(context) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _utility.getServerSidePropsDefault)(context);
        case 2:
          return _context2.abrupt("return", _context2.sent);
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getServerSideProps(_x) {
    return _ref2.apply(this, arguments);
  };
}();
var _default = exports["default"] = page;