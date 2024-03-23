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
  var _props$classes4, _props$img, _props$img2;
  var router = (0, _router.useRouter)();
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
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
    return <div className={"".concat(_PresentationModule["default"].TypeContainer)} ref={typeContainerRef}>
                <div className={"".concat(props !== null && props !== void 0 && props.tall ? "".concat(_PresentationModule["default"].TypeContainerEnforceSpace) : null)}>
                    {props.lead ? <h2 className={"".concat(_PresentationModule["default"].Lead, " ").concat(moduleName, "_Lead ").concat(props === null || props === void 0 || (_props$classes = props.classes) === null || _props$classes === void 0 ? void 0 : _props$classes.Lead)}>{props.lead}</h2> : null}
                    {props.leadImg ? <div className={"".concat(_PresentationModule["default"].leadImgContainer, " ").concat(moduleName, "_LeadImg")}>
                                <img className={"".concat(_PresentationModule["default"].leadImg, " ").concat(moduleName, "_LeadImg_img ").concat(props === null || props === void 0 || (_props$classes2 = props.classes) === null || _props$classes2 === void 0 ? void 0 : _props$classes2.Lead)} src={"".concat(props.leadImg)} />
                            </div> : null}
                    {props.text ? <div className={"".concat(_PresentationModule["default"].Text, " ").concat(moduleName, "_Text ").concat(props === null || props === void 0 || (_props$classes3 = props.classes) === null || _props$classes3 === void 0 ? void 0 : _props$classes3.Text)}>{props.text}</div> : null}
                    {props !== null && props !== void 0 && (_props$childrenBefore = props.childrenBefore) !== null && _props$childrenBefore !== void 0 && _props$childrenBefore.map ? _react["default"].Children.map(props.childrenBefore, function (child) {
          if (child !== null) {
            if (typeof child.type === 'function') {
              var cpProps = {
                bgContainerRef: bgContainerRef,
                typeContainerRef: typeContainerRef
              };
              return _react["default"].cloneElement(child, cpProps);
            }
            return child;
          }
          return _react["default"].createElement('div');
        }) : null}
                </div>
                <div>
                    {props !== null && props !== void 0 && (_props$children = props.children) !== null && _props$children !== void 0 && _props$children.map ? _react["default"].Children.map(props.children, function (child) {
          if (child !== null) {
            if (typeof child.type === 'function') {
              var cpProps = {
                bgContainerRef: bgContainerRef,
                typeContainerRef: typeContainerRef
              };
              return _react["default"].cloneElement(child, cpProps);
            }
            return child;
          }
          return _react["default"].createElement('div');
        }) : null}
                </div>
            </div>;
  };
  return <div className={"".concat(_PresentationModule["default"].BannerHello, " ").concat(moduleName, "_Container ").concat(props.className)}>
            <div className={"".concat(_PresentationModule["default"].IndexBgContainerAd, " ").concat(moduleName, "_IndexBgContainerAd ").concat(props === null || props === void 0 || (_props$classes4 = props.classes) === null || _props$classes4 === void 0 ? void 0 : _props$classes4.IndexBgContainerAd, " ").concat(props !== null && props !== void 0 && props.tall ? "".concat(_PresentationModule["default"].IndexBgContainerAdTall) : '', " ").concat(props !== null && props !== void 0 && props.center ? "".concat(_PresentationModule["default"].IndexBgContainerCenter) : '')} ref={bgContainerRef}>
                {props.href ? <_link.default href={"".concat(props.href)} draggable={false}>
                            <div style={{
          backgroundImage: "url(".concat(resolveImage((_props$img = props === null || props === void 0 ? void 0 : props.img) !== null && _props$img !== void 0 ? _props$img : null, 'img'), ")"),
          height: '100%',
          backgroundSize: 'cover',
          borderRadius: '1rem',
          position: 'relative'
        }}>
                                {resolveType()}
                            </div>
                        </_link.default> : <div style={{
        backgroundImage: "url(".concat(resolveImage((_props$img2 = props === null || props === void 0 ? void 0 : props.img) !== null && _props$img2 !== void 0 ? _props$img2 : null, 'img'), ")"),
        height: '100%',
        backgroundSize: 'cover',
        borderRadius: '1rem',
        position: 'relative'
      }}>
                            {resolveType()}
                        </div>}
            </div>
        </div>;
};
var _default = exports["default"] = Module;