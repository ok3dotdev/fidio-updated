"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _uuid = require("uuid");
var _dompurify = _interopRequireDefault(require("dompurify"));
var _ArticleModule = _interopRequireDefault(require("./Article.module.scss"));
var _templates = _interopRequireDefault(require("./templates"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * 
 * @param {*} props
 * @param {Object} props.children JSX to render before component internals
 * @param {Object} props.childrenAfter JSX to render after component internals
 * @returns 
 */
var Module = function Module(props) {
  var _props$templates, _articleData$title;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    fetchBusy = _React$useState2[0],
    setFetchBusy = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    componentDidMount = _React$useState4[0],
    setComponentDidMount = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(null),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    componentId = _React$useState6[0],
    setComponentId = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(null),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    articleData = _React$useState8[0],
    setArticleData = _React$useState8[1];
  var _React$useState9 = _react["default"].useState(null),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    articleHtml = _React$useState10[0],
    setArticleHtml = _React$useState10[1];
  var _React$useState11 = _react["default"].useState('basic'),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    template = _React$useState12[0],
    setTemplate = _React$useState12[1];
  var htmlRef = _react["default"].useRef();
  props._LocalEventEmitter.unsubscribe(componentId);
  props._LocalEventEmitter.subscribe(componentId, function (e) {
    if (e) {
      if (e.dispatch === 'loadDefault') {
        // loadDefault()
      } else if (e.dispatch === 'loadHtml') {}
    }
  });
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      var id = (0, _uuid.v4)();
      setComponentId(id);
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  _react["default"].useEffect(function () {
    var _props$articleData;
    if (props !== null && props !== void 0 && (_props$articleData = props.articleData) !== null && _props$articleData !== void 0 && (_props$articleData = _props$articleData.meta) !== null && _props$articleData !== void 0 && _props$articleData.template) {
      setTemplate(props.articleData.meta.template);
    } else if (props !== null && props !== void 0 && props.selectTemplate) {
      setTemplate(props.selectTemplate);
    }
  }, [props === null || props === void 0 ? void 0 : props.selectTemplate, props === null || props === void 0 ? void 0 : props.articleData]);
  _react["default"].useEffect(function () {
    if (props !== null && props !== void 0 && props.articleData) {
      var _props$articleData2;
      if (!articleData || articleData !== null && articleData !== void 0 && articleData.id && props !== null && props !== void 0 && (_props$articleData2 = props.articleData) !== null && _props$articleData2 !== void 0 && _props$articleData2.id && articleData.id !== props.articleData.id) {
        setArticleData(props.articleData);
        if (props.articleData.contents) {
          var parsedHtml = JSON.parse(props.articleData.contents);
          if (parsedHtml) {
            setArticleHtml(parsedHtml);
          }
        }
      }
    }
  }, [props === null || props === void 0 ? void 0 : props.articleData, articleData]);
  function createMarkup() {
    return {
      __html: _dompurify["default"].sanitize(articleHtml !== null && articleHtml !== void 0 ? articleHtml : '')
    };
  }
  var useTemplates = (_props$templates = props === null || props === void 0 ? void 0 : props.templates) !== null && _props$templates !== void 0 ? _props$templates : _templates["default"];
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ArticleModule["default"].container, " Article_Container ").concat(props.className),
    style: useTemplates[template].container
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ArticleModule["default"].containerInternal),
    style: useTemplates[template].internalContainer
  }, props === null || props === void 0 ? void 0 : props.children, articleHtml && articleData !== null && articleData !== void 0 && articleData.approved ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ArticleModule["default"].title)
  }, (_articleData$title = articleData === null || articleData === void 0 ? void 0 : articleData.title) !== null && _articleData$title !== void 0 ? _articleData$title : '')), /*#__PURE__*/_react["default"].createElement("div", {
    dangerouslySetInnerHTML: createMarkup(),
    ref: htmlRef
  })) : null, props === null || props === void 0 ? void 0 : props.childrenAfter));
};
var _default = exports["default"] = Module;