"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _image = _interopRequireDefault(require("next/image"));
var _link = _interopRequireDefault(require("next/link"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Module = function Module(props) {
  var _React$useState = _react["default"].useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    pageError = _React$useState2[0],
    setPageError = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    componentDidMount = _React$useState4[0],
    setComponentDidMount = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(null),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    componentId = _React$useState6[0],
    setComponentId = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    fetchBusy = _React$useState8[0],
    setFetchBusy = _React$useState8[1];
  var myLoader = function myLoader(_ref) {
    var src = _ref.src;
    if (src.match(/greythumb/)) {
      return "".concat(src);
    } else if (props.cdn && props.cdn["static"] && props.cdn["static"].length > 0) {
      return "".concat(props.cdn["static"], "/").concat(src);
    }
  };
  console.log(props, props.image1);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "WideFeatureContainer ".concat(props.className)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "WideFeatureInnerContainer"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      maxHeight: '200px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_image["default"], {
    loader: myLoader,
    src: props.image1 && props.cdn && props.cdn["static"] ? props.image1 : 'img/default/greythumb.jpg',
    width: 320,
    height: 180,
    layout: "responsive",
    style: {
      borderRadius: '1rem'
    }
  }))));
};
var _default = exports["default"] = Module;