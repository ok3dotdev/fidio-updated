"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _uuid = require("uuid");
var _router = require("next/router");
var _admin = require("../admin");
var _elasticlunr = _interopRequireDefault(require("../utility/utility/elasticlunr"));
var _devIndex = _interopRequireDefault(require("./devIndex"));
var _documentationModule = _interopRequireDefault(require("./documentation.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Module = function Module(props) {
  var _queryRef$current;
  var router = (0, _router.useRouter)();
  var query = router.query,
    asPath = router.asPath;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    componentId = _React$useState4[0],
    setComponentId = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    fetchBusy = _React$useState6[0],
    setFetchBusy = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(null),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    currentIndex = _React$useState8[0],
    setCurrentIndex = _React$useState8[1];
  var _React$useState9 = _react["default"].useState([]),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    currentResults = _React$useState10[0],
    setCurrentResults = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(-1),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    firstInput = _React$useState12[0],
    setFirstInput = _React$useState12[1];
  var queryRef = _react["default"].useRef();
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      var id = (0, _uuid.v4)();
      setComponentId(id);
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  var runSearch = function runSearch(query, passedIndex) {
    if (currentIndex || passedIndex) {
      var results = passedIndex ? passedIndex.search(query, {
        expand: true
      }) : currentIndex.search(query, {
        expand: true
      });
      var useIndex = _devIndex["default"].map(function (doc, i) {
        doc.id = i;
        return doc;
      });
      var resultRecords = results.map(function (result) {
        return useIndex.find(function (doc) {
          return doc.id == result.ref;
        });
      }); // Id may or may not be number depending on user definition. Soft comparison
      setCurrentResults(resultRecords);
    }
  };
  if (componentDidMount) {
    if (_elasticlunr["default"] && _devIndex["default"] && !currentIndex) {
      var _router$query;
      var fullTextSearchIndex = (0, _elasticlunr["default"])(function () {
        var _this = this;
        this.ref('id');
        this.field('lead');
        this.field('text');
        this.field('code');
        this.field('response');
        this.field('meta');
        if (Array.isArray(_devIndex["default"])) {
          _devIndex["default"].forEach(function (doc, i) {
            doc.id = i;
            _this.add(doc);
          });
        }
      });
      setCurrentIndex(fullTextSearchIndex);
      if (router !== null && router !== void 0 && (_router$query = router.query) !== null && _router$query !== void 0 && _router$query.q) {
        queryRef.current.value = router.query.q;
        runSearch(router.query.q, fullTextSearchIndex);
      }
    }
  }
  var handleUpdateSearch = _react["default"].useCallback(function (e) {
    var _e$currentTarget;
    setFirstInput(new Date().getTime());
    var query = e === null || e === void 0 || (_e$currentTarget = e.currentTarget) === null || _e$currentTarget === void 0 ? void 0 : _e$currentTarget.value;
    if (query !== null && query !== '' && currentIndex && _devIndex["default"]) {
      runSearch(query);
    } else {
      setPinned();
    }
  });
  _react["default"].useEffect(function () {
    setPinned();
  }, [currentIndex]);
  var setPinned = function setPinned() {
    if (queryRef !== null && queryRef !== void 0 && queryRef.current && _devIndex["default"] !== null && _devIndex["default"] !== void 0 && _devIndex["default"].filter) {
      var value = queryRef.current.value;
      if (!value || value === '') {
        var pinned = _devIndex["default"] === null || _devIndex["default"] === void 0 ? void 0 : _devIndex["default"].filter(function (m) {
          return m.pinned;
        });
        if (pinned.length > 0) {
          setCurrentResults(pinned);
        }
      }
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className, " Documentation_Container")
  }, /*#__PURE__*/_react["default"].createElement(_admin.Banner, props), /*#__PURE__*/_react["default"].createElement("h5", {
    className: "Misc_Label",
    style: {
      marginTop: 0
    }
  }, "Tycoon Documentation"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: 'sticky',
      top: '1.5rem',
      margin: '.5rem 0',
      marginTop: '0'
    }
  }, /*#__PURE__*/_react["default"].createElement("input", {
    onChange: handleUpdateSearch,
    ref: queryRef,
    style: {
      border: '0px',
      borderRadius: '.5rem',
      width: 'calc(100% - 1rem)',
      fontSize: '1.25rem',
      padding: '0 .5rem',
      margin: '0 .5rem'
    },
    placeholder: "Search the docs"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: '.25rem 0rem',
      paddingTop: '0',
      display: 'grid',
      gap: '.5rem'
    }
  }, Array.isArray(currentResults) && currentResults.length > 0 ? currentResults.map(function (m, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex gap-p5 ".concat(_documentationModule["default"].container),
      key: i
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_documentationModule["default"].quadrant, " Misc_Item_Container Misc_Item_DarkContainerHover"),
      style: {
        padding: '.5rem'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_documentationModule["default"].lead)
    }, m.lead), /*#__PURE__*/_react["default"].createElement("pre", {
      className: "".concat(_documentationModule["default"].text),
      style: {
        fontSize: '.85rem',
        lineHeight: 'normal'
      }
    }, m.text)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_documentationModule["default"].quadrant2)
    }, /*#__PURE__*/_react["default"].createElement("code", null, /*#__PURE__*/_react["default"].createElement("pre", {
      className: "".concat(_documentationModule["default"].codePre)
    }, m.code)), /*#__PURE__*/_react["default"].createElement("div", null, m.response)));
  }) : (queryRef === null || queryRef === void 0 || (_queryRef$current = queryRef.current) === null || _queryRef$current === void 0 ? void 0 : _queryRef$current.value) !== '' ? /*#__PURE__*/_react["default"].createElement("div", null) : /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      textAlign: 'center',
      fontSize: '.95rem'
    }
  }, "Try Searching for something")));
};
var _default = exports["default"] = Module;