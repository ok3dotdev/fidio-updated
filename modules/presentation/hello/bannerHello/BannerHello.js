"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _router = require("next/router");
var _link = _interopRequireDefault(require("next/link"));
var _PresentationModule = _interopRequireDefault(require("../../Presentation.module.scss"));
var _uuid = require("uuid");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var moduleName = 'BannerHello';
var Module = function Module(props) {
  var _props$classes3, _props$img, _props$img2;
  var router = (0, _router.useRouter)();
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
  var resolveImage = function resolveImage(img, type) {
    if (props !== null && props !== void 0 && props.raw && type === 'img') {
      return img;
    } else if (props.cdn && props.cdn["static"] && props.cdn["static"].length > 0 && img) {
      return "".concat(props.cdn["static"], "/").concat(img);
    }
    return 'img/default/greythumb.jpg';
  };
  var resolveType = function resolveType() {
    var _props$classes, _props$classes2;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].TypeContainer)
    }, props.lead ? /*#__PURE__*/_react["default"].createElement("h2", {
      className: "".concat(_PresentationModule["default"].Lead, " ").concat(moduleName, "_Lead ").concat(props === null || props === void 0 || (_props$classes = props.classes) === null || _props$classes === void 0 ? void 0 : _props$classes.Lead)
    }, props.lead) : null, props.text ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].Text, " ").concat(moduleName, "_Text ").concat(props === null || props === void 0 || (_props$classes2 = props.classes) === null || _props$classes2 === void 0 ? void 0 : _props$classes2.Text)
    }, props.text) : null);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].BannerHello, " ").concat(moduleName, "_Container ").concat(props.className)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].IndexBgContainerAd, " ").concat(moduleName, "_IndexBgContainerAd ").concat(props === null || props === void 0 || (_props$classes3 = props.classes) === null || _props$classes3 === void 0 ? void 0 : _props$classes3.IndexBgContainerAd)
  }, props.href ? /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "".concat(props.href),
    draggable: false
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      backgroundImage: "url(".concat(resolveImage((_props$img = props === null || props === void 0 ? void 0 : props.img) !== null && _props$img !== void 0 ? _props$img : null, 'img'), ")"),
      height: '100%',
      backgroundSize: 'cover',
      borderRadius: '1rem'
    }
  }, resolveType())) : /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      backgroundImage: "url(".concat(resolveImage((_props$img2 = props === null || props === void 0 ? void 0 : props.img) !== null && _props$img2 !== void 0 ? _props$img2 : null, 'img'), ")"),
      height: '100%',
      backgroundSize: 'cover',
      borderRadius: '1rem'
    }
  }, resolveType())));
};
var _default = exports["default"] = Module;