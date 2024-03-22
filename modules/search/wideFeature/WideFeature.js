"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _image = _interopRequireDefault(require("next/image"));
var _link = _interopRequireDefault(require("next/link"));
var Module = function Module(props) {
  var _React$useState = _react["default"].useState(null),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    pageError = _React$useState2[0],
    setPageError = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(false),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    componentDidMount = _React$useState4[0],
    setComponentDidMount = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(null),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    componentId = _React$useState6[0],
    setComponentId = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(false),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
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