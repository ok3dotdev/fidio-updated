"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _elasticlunr = _interopRequireDefault(require("../utility/utility/elasticlunr"));
var _SettingsModule = _interopRequireDefault(require("../settings/Settings.module.scss"));
var _Close = _interopRequireDefault(require("@mui/icons-material/Close"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Module = function Module(props) {
  var _props$_openMenu2, _props$menuConfig, _queryRef$current;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    fetchBusy = _React$useState4[0],
    setFetchBusy = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(null),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    pageError = _React$useState6[0],
    setPageError = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(true),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    validCc = _React$useState8[0],
    setValidCc = _React$useState8[1];
  var _React$useState9 = _react["default"].useState(false),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    menuOpen = _React$useState10[0],
    setMenuOpen = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(false),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    closing = _React$useState12[0],
    setClosing = _React$useState12[1];
  var _React$useState13 = _react["default"].useState(-1),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    firstInput = _React$useState14[0],
    setFirstInput = _React$useState14[1];
  var _React$useState15 = _react["default"].useState(null),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    currentIndex = _React$useState16[0],
    setCurrentIndex = _React$useState16[1];
  var _React$useState17 = _react["default"].useState([]),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    currentResults = _React$useState18[0],
    setCurrentResults = _React$useState18[1];
  var closeTimeoutRef = _react["default"].useRef();
  var queryRef = _react["default"].useRef();
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  if (componentDidMount) {
    if (_elasticlunr["default"] && props.helpIndex && !currentIndex) {
      var fullTextSearchIndex = (0, _elasticlunr["default"])(function () {
        var _this = this;
        this.ref('id');
        this.field('question');
        this.field('answer');
        this.field('a');
        this.field('meta');
        if (Array.isArray(props.helpIndex)) {
          props.helpIndex.forEach(function (doc, i) {
            doc.id = i;
            _this.add(doc);
          });
        }
      });
      setCurrentIndex(fullTextSearchIndex);
    }
  }
  _react["default"].useEffect(function () {
    if (props !== null && props !== void 0 && props.open) {
      setMenuOpen(true);
      setClosing(true);
      if (closeTimeoutRef !== null && closeTimeoutRef !== void 0 && closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    } else if (!props || !(props !== null && props !== void 0 && props.open)) {
      // We track open state internally because we want to animate the cart closing as opposed to destroying it immediately
      setClosing(true);
      setMenuOpen(false);
      var r = setTimeout(function () {
        setClosing(false);
        if (queryRef !== null && queryRef !== void 0 && queryRef.current) {
          queryRef.current.value = '';
        }
        closeTimeoutRef.current = null;
      }, 1500);
      closeTimeoutRef.current = r;
    }
  }, [closing, menuOpen, props === null || props === void 0 ? void 0 : props.open, closeTimeoutRef === null || closeTimeoutRef === void 0 ? void 0 : closeTimeoutRef.current, queryRef === null || queryRef === void 0 ? void 0 : queryRef.current]);
  var handleUpdateSearch = _react["default"].useCallback(function (e) {
    var _e$currentTarget;
    setFirstInput(new Date().getTime());
    var query = e === null || e === void 0 || (_e$currentTarget = e.currentTarget) === null || _e$currentTarget === void 0 ? void 0 : _e$currentTarget.value;
    console.log(query);
    if (query !== null && query !== '' && currentIndex && props.helpIndex) {
      var results = currentIndex.search(query, {
        expand: true
      });
      var useIndex = props.helpIndex.map(function (doc, i) {
        doc.id = i;
        return doc;
      });
      console.log(useIndex, results);
      var resultRecords = results.map(function (result) {
        return useIndex.find(function (doc) {
          return doc.id == result.ref;
        });
      }); // Id may or may not be number depending on user definition. Soft comparison
      setCurrentResults(resultRecords);
    } else {
      setPinned();
    }
  });
  var handleClose = _react["default"].useCallback(function (e) {
    if (props !== null && props !== void 0 && props.setHelpOpen) {
      props.setHelpOpen(false);
    }
  });
  var setPinned = function setPinned() {
    var _props$helpIndex;
    if (queryRef !== null && queryRef !== void 0 && queryRef.current && props !== null && props !== void 0 && (_props$helpIndex = props.helpIndex) !== null && _props$helpIndex !== void 0 && _props$helpIndex.filter) {
      var value = queryRef.current.value;
      if (!value || value === '') {
        var pinned = props.helpIndex.filter(function (m) {
          return m.pinned;
        });
        if (pinned.length > 0) {
          setCurrentResults(pinned);
        }
      }
    }
  };
  _react["default"].useEffect(function () {
    setPinned();
  }, [currentIndex]);
  _react["default"].useEffect(function () {
    var _props$_openMenu;
    console.log(props._openMenu);
    if ((props === null || props === void 0 || (_props$_openMenu = props._openMenu) === null || _props$_openMenu === void 0 ? void 0 : _props$_openMenu.currentMenu) !== 'main_settings') {
      props.setHelpOpen(false);
    }
  }, [props === null || props === void 0 || (_props$_openMenu2 = props._openMenu) === null || _props$_openMenu2 === void 0 ? void 0 : _props$_openMenu2.currentMenu]);
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Misc_Container ".concat(props.className, " ").concat(menuOpen && closing ? 'Misc_Container_Visible' : ''),
    style: {
      top: props !== null && props !== void 0 && (_props$menuConfig = props.menuConfig) !== null && _props$menuConfig !== void 0 && _props$menuConfig.height && !isNaN(Number(props.menuConfig.height)) ? Number(props.menuConfig.height) + 'px' : ''
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Misc_Internal_Container",
    style: {
      paddingTop: '.5rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: 'sticky',
      top: '.5rem',
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/_react["default"].createElement(_Close["default"], {
    className: "".concat(_SettingsModule["default"].Close),
    style: {
      margin: '0rem 0',
      "float": 'right'
    },
    onClick: handleClose
  })), /*#__PURE__*/_react["default"].createElement("h5", {
    className: "Misc_Label",
    style: {
      marginTop: 0
    }
  }, "Help"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: 'sticky',
      top: '.5rem',
      margin: '.5rem 0',
      marginTop: '0'
    }
  }, /*#__PURE__*/_react["default"].createElement("input", {
    onChange: handleUpdateSearch,
    ref: queryRef,
    style: {
      border: '0px',
      borderRadius: '.5rem',
      width: '87.5%',
      fontSize: '1.25rem',
      padding: '0 .5rem'
    },
    placeholder: "How can we help?"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: '.25rem 0rem',
      display: 'grid',
      gap: '.5rem'
    }
  }, Array.isArray(currentResults) && currentResults.length > 0 ? currentResults.map(function (m, i) {
    return m !== null && m !== void 0 && m.a ? /*#__PURE__*/_react["default"].createElement("a", {
      href: m.a,
      style: {
        cursor: 'pointer'
      },
      key: i
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "Misc_Item_Container Misc_Item_DarkContainerHover",
      style: {
        padding: '.5rem',
        display: 'grid',
        gap: '.25rem'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        fontWeight: '500'
      }
    }, m.question), /*#__PURE__*/_react["default"].createElement("pre", {
      style: {
        fontSize: '.85rem',
        lineHeight: 'normal'
      }
    }, m.answer))) : /*#__PURE__*/_react["default"].createElement("div", {
      className: "Misc_Item_Container",
      style: {
        padding: '.5rem',
        display: 'grid',
        gap: '.25rem'
      },
      key: i
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        fontWeight: '500'
      }
    }, m.question), /*#__PURE__*/_react["default"].createElement("pre", {
      style: {
        fontSize: '.85rem',
        lineHeight: 'normal'
      }
    }, m.answer));
  }) : (queryRef === null || queryRef === void 0 || (_queryRef$current = queryRef.current) === null || _queryRef$current === void 0 ? void 0 : _queryRef$current.value) !== '' ? /*#__PURE__*/_react["default"].createElement("div", null) : /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      textAlign: 'center',
      fontSize: '.95rem'
    }
  }, "Try Searching for something")))));
};
var _default = exports["default"] = Module;