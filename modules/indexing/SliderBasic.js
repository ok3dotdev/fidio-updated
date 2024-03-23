"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _uuid = require("uuid");
var _SliderModule = _interopRequireDefault(require("./Slider.module.scss"));
var _div;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Module = function Module(props) {
  var _props$height;
  var _React$useState = _react["default"].useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    componentId = _React$useState2[0],
    setComponentId = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    componentDidMount = _React$useState4[0],
    setComponentDidMount = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    stagger = _React$useState6[0],
    setStagger = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    fetching = _React$useState8[0],
    setFetching = _React$useState8[1];
  var staggerRef = _react["default"].useRef();
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      if (props.stagger) {
        staggerRef.current = setTimeout(function () {
          setStagger(true);
        }, props.stagger);
      }
      var id = (0, _uuid.v4)();
      setComponentId(id);
      setComponentDidMount(true);
    }
  }, [componentDidMount, props.stagger]);
  _react["default"].useEffect(function () {
    if (componentId && window && window.Glide) {
      new window.Glide(".glide_".concat(componentId), {
        type: 'carousel',
        perView: 3,
        focusAt: 'center',
        breakpoints: {
          1200: {
            perView: 2
          },
          480: {
            perView: 1
          }
        }
      }).mount();
    }
  }, [componentId]);

  // console.log(window.Glide)

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "glide_".concat(componentId, " ").concat(props.className)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    "data-glide-el": "track",
    className: "glide__track",
    style: {
      height: (_props$height = props.height) !== null && _props$height !== void 0 ? _props$height : '240px'
    }
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "glide__slides",
    style: {
      height: 'inherit'
    }
  }, props.items && props.items.map ? props.items.map(function (m, i) {
    var _m$buttonLink, _m$width, _m$borderRadius;
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: i,
      className: "glide_slide"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_SliderModule["default"].textContainer, " glider_text_container"),
      style: {
        position: 'absolute'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_SliderModule["default"].textOffsetContainer, " glider_text_offset_container")
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_SliderModule["default"].container1, " glider_container1")
    }, m.cta ? /*#__PURE__*/_react["default"].createElement("h2", {
      className: "".concat(_SliderModule["default"].cta, " glider_cta")
    }, m.cta) : null, m.heading ? /*#__PURE__*/_react["default"].createElement("h5", {
      className: "".concat(_SliderModule["default"].heading, " glider_heading")
    }, m.heading) : null, m.description ? /*#__PURE__*/_react["default"].createElement("h6", {
      className: "".concat(_SliderModule["default"].description, " glider_description")
    }, m.description) : null), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_SliderModule["default"].container2, " glider_container2")
    }, m.button ? /*#__PURE__*/_react["default"].createElement("a", {
      className: "".concat(_SliderModule["default"].button, " glider_button"),
      href: (_m$buttonLink = m.buttonLink) !== null && _m$buttonLink !== void 0 ? _m$buttonLink : ''
    }, /*#__PURE__*/_react["default"].createElement("button", null, m.button)) : null, m.status ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_SliderModule["default"].status, " glider_status"),
      style: {
        background: 'red'
      }
    }, m.status) : null))), /*#__PURE__*/_react["default"].createElement("img", {
      src: m.img,
      style: {
        width: (_m$width = m.width) !== null && _m$width !== void 0 ? _m$width : 'auto',
        borderRadius: (_m$borderRadius = m.borderRadius) !== null && _m$borderRadius !== void 0 ? _m$borderRadius : '1rem'
      }
    }));
  }) : _div || (_div = /*#__PURE__*/_react["default"].createElement("div", null)))));
};
var _default = exports["default"] = Module;