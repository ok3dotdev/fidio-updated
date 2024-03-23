"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _MarketingSliderModule = _interopRequireDefault(require("./MarketingSlider.module.scss"));
var _reactSlick = _interopRequireDefault(require("react-slick"));
var _PresentationModule = _interopRequireDefault(require("../Presentation.module.scss"));
var _uuid = require("uuid");
var _link = _interopRequireDefault(require("next/link"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var moduleName = 'MarketingSlider';
var Module = function Module(props) {
  var _props$data, _props$sliderMaxWidth, _props$sliderMaxWidth2, _useItems$items;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    componentId = _React$useState4[0],
    setComponentId = _React$useState4[1];
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      var id = (0, _uuid.v4)();
      setComponentId(id);
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  var useItems = props !== null && props !== void 0 && (_props$data = props.data) !== null && _props$data !== void 0 && (_props$data = _props$data.items) !== null && _props$data !== void 0 && _props$data.map ? props.data : [];
  var resolveSettingsConfig = function resolveSettingsConfig(length) {
    var _props$responsive;
    return {
      infinite: false,
      speed: 500,
      swipeToSlide: true,
      arrows: false,
      // variableWidth: true,
      responsive: (_props$responsive = props === null || props === void 0 ? void 0 : props.responsive) !== null && _props$responsive !== void 0 ? _props$responsive : [{
        breakpoint: 4000,
        settings: {
          slidesToShow: length < 6 ? length : 6,
          touchThreshold: 120
        }
      }, {
        breakpoint: 1920,
        settings: {
          slidesToShow: length < 5 ? length : 5,
          touchThreshold: 100
        }
      }, {
        breakpoint: 1680,
        settings: {
          slidesToShow: length < 4 ? length : 4,
          touchThreshold: 80
        }
      }, {
        breakpoint: 1280,
        settings: {
          slidesToShow: length < 3 ? length : 3,
          touchThreshold: 60
        }
      }, {
        breakpoint: 900,
        settings: {
          slidesToShow: length < 2 ? length : 2,
          touchThreshold: 40
        }
      }, {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          touchThreshold: 20
        }
      }]
    };
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].IndexHelloContainer, " glide_").concat(componentId, " ").concat(moduleName, "_IndexHelloContainer ").concat(props.className),
    style: props === null || props === void 0 ? void 0 : props.style
  }, props.groupLabel ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].GroupLabelContainer, " ").concat(_MarketingSliderModule["default"].GroupLabelContainer, " ").concat(moduleName, "_groupLabelContainer ").concat(props.groupLabelContainerClassName),
    style: {
      maxWidth: (_props$sliderMaxWidth = props === null || props === void 0 ? void 0 : props.sliderMaxWidth) !== null && _props$sliderMaxWidth !== void 0 ? _props$sliderMaxWidth : '1800px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].GroupLabel, " ").concat(_MarketingSliderModule["default"].GroupLabel, " ").concat(moduleName, "_groupLabel ").concat(props.groupLabelClassName)
  }, props.groupLabel)) : null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: "2rem",
      maxWidth: (_props$sliderMaxWidth2 = props === null || props === void 0 ? void 0 : props.sliderMaxWidth) !== null && _props$sliderMaxWidth2 !== void 0 ? _props$sliderMaxWidth2 : '1800px'
    },
    "data-glide-el": "track",
    className: "".concat(_PresentationModule["default"].GlideTrack, " glide__track")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(moduleName, "_IndexItemsContainer ").concat(props.IndexItemsContainerClassName)
  }, useItems === null || useItems === void 0 || (_useItems$items = useItems.items) === null || _useItems$items === void 0 ? void 0 : _useItems$items.map(function (content, i) {
    var useSettings = resolveSettingsConfig(content.length);
    return /*#__PURE__*/_react["default"].createElement(_reactSlick["default"], useSettings, content !== null && content !== void 0 && content.map ? content.map(function (row, k) {
      var _row$bg, _props$itemHeight, _row$children;
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          margin: '1rem'
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(props.tall ? "".concat(_PresentationModule["default"].IndexItemsUpperContainerTall) : null, " ").concat(moduleName, "_Container ").concat(row === null || row === void 0 ? void 0 : row.className),
        key: k,
        style: {
          margin: '1rem'
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_MarketingSliderModule["default"].bgContainer, " ").concat(props.tall ? "".concat(_MarketingSliderModule["default"].BgContainerTall) : null, " ").concat(moduleName, "_BgContainer ").concat(props.bgClassName),
        style: {
          background: row !== null && row !== void 0 && row.img ? "url(".concat(row === null || row === void 0 ? void 0 : row.img, ")") : (_row$bg = row === null || row === void 0 ? void 0 : row.bg) !== null && _row$bg !== void 0 ? _row$bg : null,
          backgroundSize: 'cover !important',
          backgroundPosition: 'center',
          height: (_props$itemHeight = props === null || props === void 0 ? void 0 : props.itemHeight) !== null && _props$itemHeight !== void 0 ? _props$itemHeight : '22rem'
        }
      }, row !== null && row !== void 0 && row.upperText ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_MarketingSliderModule["default"].upperText, " MarketingSlider_UpperText")
      }, row.upperText) : null, row !== null && row !== void 0 && row.lead ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_MarketingSliderModule["default"].lead, " MarketingSlider_Lead")
      }, row.lead) : null, row !== null && row !== void 0 && row.text ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_MarketingSliderModule["default"].text, " MarketingSlider_Text")
      }, row.text) : null, row.linkText ? /*#__PURE__*/_react["default"].createElement(_link["default"], {
        href: row.link
      }, row.linkText) : null, row !== null && row !== void 0 && (_row$children = row.children) !== null && _row$children !== void 0 && _row$children.map ? _react["default"].Children.map(row.children, function (child) {
        if (child !== null) {
          if (typeof child.type === 'function') {
            return /*#__PURE__*/_react["default"].cloneElement(child, props);
          }
          return child;
        }
        return /*#__PURE__*/_react["default"].createElement('div');
      }) : null), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_PresentationModule["default"].MetaContainer, " ").concat(moduleName, "_MetaContainer ").concat(props.metaContainerClassName)
      }))));
    }) : null);
  })))));
};
var _default = exports["default"] = Module;