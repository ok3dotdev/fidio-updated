"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _uuid = require("uuid");
var _dompurify = _interopRequireDefault(require("dompurify"));
var _ArticleModule = _interopRequireDefault(require("./Article.module.scss"));
var _templates = _interopRequireDefault(require("./templates"));
var _layout = require("/layout");
/**
 * 
 * @param {*} props
 * @param {Object} props.children JSX to render before component internals
 * @param {Object} props.childrenAfter JSX to render after component internals
 * @returns 
 */
var Module = function Module(props) {
  var _props$articleTemplat;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    fetchBusy = _React$useState2[0],
    setFetchBusy = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(false),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    componentDidMount = _React$useState4[0],
    setComponentDidMount = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(null),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    componentId = _React$useState6[0],
    setComponentId = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(null),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    articleData = _React$useState8[0],
    setArticleData = _React$useState8[1];
  var _React$useState9 = _react["default"].useState(null),
    _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
    articleHtml = _React$useState10[0],
    setArticleHtml = _React$useState10[1];
  var _React$useState11 = _react["default"].useState('basic'),
    _React$useState12 = (0, _slicedToArray2["default"])(_React$useState11, 2),
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
    var _articleData$meta;
    if (articleData !== null && articleData !== void 0 && (_articleData$meta = articleData.meta) !== null && _articleData$meta !== void 0 && _articleData$meta.template) {
      setTemplate(articleData.meta.template);
    } else if (props !== null && props !== void 0 && props.selectTemplate) {
      setTemplate(props.selectTemplate);
    }
  }, [props === null || props === void 0 ? void 0 : props.selectTemplate, articleData]);
  _react["default"].useEffect(function () {
    if (props !== null && props !== void 0 && props.articleData) {
      var _props$articleData;
      if (!articleData || articleData !== null && articleData !== void 0 && articleData.id && props !== null && props !== void 0 && (_props$articleData = props.articleData) !== null && _props$articleData !== void 0 && _props$articleData.id && articleData.id !== props.articleData.id) {
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
  var useTemplates = Object.assign(_templates["default"], (_props$articleTemplat = props === null || props === void 0 ? void 0 : props.articleTemplates) !== null && _props$articleTemplat !== void 0 ? _props$articleTemplat : {}); // Merge Database Server Article Templates with Local Defaults
  var passTemplate = template && useTemplates && useTemplates[template];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_layout.Article, (0, _extends2["default"])({}, props, {
    useTemplates: useTemplates,
    template: passTemplate,
    articleHtml: articleHtml,
    articleData: articleData,
    createMarkup: createMarkup,
    htmlRef: htmlRef,
    ArticleStyles: _ArticleModule["default"]
  })));
};
var _default = exports["default"] = Module;