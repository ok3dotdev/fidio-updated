"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _router = require("next/router");
var _link = _interopRequireDefault(require("next/link"));
var _PresentationModule = _interopRequireDefault(require("../../Presentation.module.scss"));
var _uuid = require("uuid");
var moduleName = 'BannerHello';
var Module = function Module(props) {
  var _props$classes4, _props$img, _props$img2;
  var router = (0, _router.useRouter)();
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(null),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    componentId = _React$useState4[0],
    setComponentId = _React$useState4[1];
  var bgContainerRef = _react["default"].useRef();
  var typeContainerRef = _react["default"].useRef();
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      var id = (0, _uuid.v4)();
      setComponentId(id);
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  var resolveImage = function resolveImage(img, type) {
    if (props !== null && props !== void 0 && props.raw && type === 'img') {
      return img;
    } else if (props.cdn && props.cdn["static"] && props.cdn["static"].length > 0 && img) {
      return "".concat(props.cdn["static"], "/").concat(img);
    }
    return 'img/default/greythumb.jpg';
  };
  var resolveType = function resolveType() {
    var _props$classes, _props$classes2, _props$classes3, _props$childrenBefore, _props$children;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].TypeContainer),
      ref: typeContainerRef
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(props !== null && props !== void 0 && props.tall ? "".concat(_PresentationModule["default"].TypeContainerEnforceSpace) : null)
    }, props.lead ? /*#__PURE__*/_react["default"].createElement("h2", {
      className: "".concat(_PresentationModule["default"].Lead, " ").concat(moduleName, "_Lead ").concat(props === null || props === void 0 || (_props$classes = props.classes) === null || _props$classes === void 0 ? void 0 : _props$classes.Lead)
    }, props.lead) : null, props.leadImg ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].leadImgContainer, " ").concat(moduleName, "_LeadImg")
    }, /*#__PURE__*/_react["default"].createElement("img", {
      className: "".concat(_PresentationModule["default"].leadImg, " ").concat(moduleName, "_LeadImg_img ").concat(props === null || props === void 0 || (_props$classes2 = props.classes) === null || _props$classes2 === void 0 ? void 0 : _props$classes2.Lead),
      src: "".concat(props.leadImg)
    })) : null, props.text ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].Text, " ").concat(moduleName, "_Text ").concat(props === null || props === void 0 || (_props$classes3 = props.classes) === null || _props$classes3 === void 0 ? void 0 : _props$classes3.Text)
    }, props.text) : null, props !== null && props !== void 0 && (_props$childrenBefore = props.childrenBefore) !== null && _props$childrenBefore !== void 0 && _props$childrenBefore.map ? _react["default"].Children.map(props.childrenBefore, function (child) {
      if (child !== null) {
        if (typeof child.type === 'function') {
          var cpProps = {
            bgContainerRef: bgContainerRef,
            typeContainerRef: typeContainerRef
          };
          return /*#__PURE__*/_react["default"].cloneElement(child, cpProps);
        }
        return child;
      }
      return /*#__PURE__*/_react["default"].createElement('div');
    }) : null), /*#__PURE__*/_react["default"].createElement("div", null, props !== null && props !== void 0 && (_props$children = props.children) !== null && _props$children !== void 0 && _props$children.map ? _react["default"].Children.map(props.children, function (child) {
      if (child !== null) {
        if (typeof child.type === 'function') {
          var cpProps = {
            bgContainerRef: bgContainerRef,
            typeContainerRef: typeContainerRef
          };
          return /*#__PURE__*/_react["default"].cloneElement(child, cpProps);
        }
        return child;
      }
      return /*#__PURE__*/_react["default"].createElement('div');
    }) : null));
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].BannerHello, " ").concat(moduleName, "_Container ").concat(props.className)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].IndexBgContainerAd, " ").concat(moduleName, "_IndexBgContainerAd ").concat(props === null || props === void 0 || (_props$classes4 = props.classes) === null || _props$classes4 === void 0 ? void 0 : _props$classes4.IndexBgContainerAd, " ").concat(props !== null && props !== void 0 && props.tall ? "".concat(_PresentationModule["default"].IndexBgContainerAdTall) : '', " ").concat(props !== null && props !== void 0 && props.center ? "".concat(_PresentationModule["default"].IndexBgContainerCenter) : ''),
    ref: bgContainerRef
  }, props.href ? /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "".concat(props.href),
    draggable: false
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      backgroundImage: "url(".concat(resolveImage((_props$img = props === null || props === void 0 ? void 0 : props.img) !== null && _props$img !== void 0 ? _props$img : null, 'img'), ")"),
      height: '100%',
      backgroundSize: 'cover',
      borderRadius: '1rem',
      position: 'relative'
    }
  }, resolveType())) : /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      backgroundImage: "url(".concat(resolveImage((_props$img2 = props === null || props === void 0 ? void 0 : props.img) !== null && _props$img2 !== void 0 ? _props$img2 : null, 'img'), ")"),
      height: '100%',
      backgroundSize: 'cover',
      borderRadius: '1rem',
      position: 'relative'
    }
  }, resolveType())));
};
var _default = exports["default"] = Module;