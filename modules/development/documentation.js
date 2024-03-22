"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _uuid = require("uuid");
var _router = require("next/router");
var _admin = require("../admin");
var _elasticlunr = _interopRequireDefault(require("../utility/utility/elasticlunr"));
var _documentationModule = _interopRequireDefault(require("./documentation.module.scss"));
var _fetch = require("../utility/fetch");
var _dompurify = _interopRequireDefault(require("dompurify"));
var _util = require("../util");
var _ = require(".");
var Module = function Module(props) {
  var _queryRef$current, _detectFlags3, _detectFlags4;
  var router = (0, _router.useRouter)();
  var query = router.query,
    asPath = router.asPath;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(null),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    componentId = _React$useState4[0],
    setComponentId = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(false),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    fetchBusy = _React$useState6[0],
    setFetchBusy = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(null),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    currentIndex = _React$useState8[0],
    setCurrentIndex = _React$useState8[1];
  var _React$useState9 = _react["default"].useState([]),
    _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
    currentResults = _React$useState10[0],
    setCurrentResults = _React$useState10[1];
  var _React$useState11 = _react["default"].useState([]),
    _React$useState12 = (0, _slicedToArray2["default"])(_React$useState11, 2),
    devIndex = _React$useState12[0],
    setDevIndex = _React$useState12[1];
  var _React$useState13 = _react["default"].useState(-1),
    _React$useState14 = (0, _slicedToArray2["default"])(_React$useState13, 2),
    firstInput = _React$useState14[0],
    setFirstInput = _React$useState14[1];
  var _React$useState15 = _react["default"].useState({}),
    _React$useState16 = (0, _slicedToArray2["default"])(_React$useState15, 2),
    currentDoc = _React$useState16[0],
    setCurrentDoc = _React$useState16[1];
  var _React$useState17 = _react["default"].useState(0),
    _React$useState18 = (0, _slicedToArray2["default"])(_React$useState17, 2),
    currentMenu = _React$useState18[0],
    setCurrentMenu = _React$useState18[1];
  var _React$useState19 = _react["default"].useState([]),
    _React$useState20 = (0, _slicedToArray2["default"])(_React$useState19, 2),
    menu = _React$useState20[0],
    setMenu = _React$useState20[1];
  var _React$useState21 = _react["default"].useState(null),
    _React$useState22 = (0, _slicedToArray2["default"])(_React$useState21, 2),
    currentMenuDocsList = _React$useState22[0],
    setCurrentMenuDocsList = _React$useState22[1];
  var _React$useState23 = _react["default"].useState([]),
    _React$useState24 = (0, _slicedToArray2["default"])(_React$useState23, 2),
    currentMenuResults = _React$useState24[0],
    setCurrentMenuResults = _React$useState24[1];
  var _React$useState25 = _react["default"].useState(false),
    _React$useState26 = (0, _slicedToArray2["default"])(_React$useState25, 2),
    usingQuery = _React$useState26[0],
    setUsingQuery = _React$useState26[1];
  var queryRef = _react["default"].useRef();
  var searchWillClose = _react["default"].useRef();
  var resolveDefault = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(useData) {
      var allJustMenu, menuItems, res, _allJustMenu, _menuItems;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(props !== null && props !== void 0 && props.apiUrl)) {
              _context.next = 12;
              break;
            }
            if (!useData) {
              _context.next = 7;
              break;
            }
            setDevIndex(useData);
            allJustMenu = useData.map(function (m) {
              return m.menu;
            });
            menuItems = allJustMenu.filter(function (m, i) {
              return allJustMenu.indexOf(m) === i;
            });
            setMenu(menuItems);
            return _context.abrupt("return", 1);
          case 7:
            _context.next = 9;
            return (0, _fetch.fetchPost)(props.apiUrl + '/m/getdocumentation', null, null, {
              spec: 'all'
            });
          case 9:
            res = _context.sent;
            if (res.hasOwnProperty('status')) {
              if (res.status == "success" && res.data) {
                setDevIndex(res.data);
                _allJustMenu = res.data.map(function (m) {
                  return m.menu;
                });
                _menuItems = _allJustMenu.filter(function (m, i) {
                  return _allJustMenu.indexOf(m) === i;
                });
                setMenu(_menuItems);
              }
            }
            return _context.abrupt("return", false);
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function resolveDefault(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      var id = (0, _uuid.v4)();
      setComponentId(id);
      resolveDefault(props === null || props === void 0 ? void 0 : props.documentationData);
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
      var useIndex = devIndex.map(function (doc, i) {
        doc.id = i;
        return doc;
      });
      var resultRecords = results.map(function (result) {
        return useIndex.find(function (doc) {
          return doc.id == result.ref;
        });
      }); // Id may or may not be number depending on user definition. Soft comparison
      setCurrentResults(resultRecords);
      if (resultRecords && resultRecords[0]) {
        if (resultRecords[0].menu) {
          setCurrentMenu(menu.indexOf(resultRecords[0].menu));
        }
        setCurrentDoc(resultRecords[0]);
      }
    }
  };
  _react["default"].useEffect(function () {
    if (componentDidMount && (devIndex === null || devIndex === void 0 ? void 0 : devIndex.length) > 0) {
      if (_elasticlunr["default"] && devIndex && !currentIndex) {
        var _router$query;
        var fullTextSearchIndex = (0, _elasticlunr["default"])(function () {
          var _this = this;
          this.ref('id');
          this.field('lead');
          this.field('html');
          this.field('code');
          this.field('response');
          this.field('meta');
          if (Array.isArray(devIndex)) {
            devIndex.forEach(function (doc, i) {
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
  }, [devIndex, componentDidMount]);
  _react["default"].useEffect(function () {
    if (componentDidMount && (devIndex === null || devIndex === void 0 ? void 0 : devIndex.length) > 0) {
      if (_elasticlunr["default"] && devIndex) {
        var useIndex = devIndex.filter(function (m) {
          return m.menu === menu[currentMenu];
        });
        console.log(useIndex);
        setCurrentMenuDocsList(useIndex);
      }
    }
  }, [currentMenu, menu, devIndex, componentDidMount]);
  var handleUpdateSearch = _react["default"].useCallback(function (e) {
    var _e$currentTarget;
    setFirstInput(new Date().getTime());
    var query = e === null || e === void 0 || (_e$currentTarget = e.currentTarget) === null || _e$currentTarget === void 0 ? void 0 : _e$currentTarget.value;
    if (query !== null && query !== '' && currentIndex && devIndex) {
      runSearch(query);
    } else {
      setPinned();
    }
  });
  _react["default"].useEffect(function () {
    setPinned();
  }, [currentIndex]);
  var setPinned = function setPinned() {
    if (queryRef !== null && queryRef !== void 0 && queryRef.current && devIndex !== null && devIndex !== void 0 && devIndex.filter) {
      var value = queryRef.current.value;
      if (!value || value === '') {
        var pinned = devIndex === null || devIndex === void 0 ? void 0 : devIndex.filter(function (m) {
          return m.pinned;
        });
        if (pinned.length > 0) {
          setCurrentResults(pinned);
        }
      }
    }
  };
  var resolvePaint = function resolvePaint(m, field) {
    try {
      if (m && m[field]) {
        var _m$field;
        return {
          __html: _dompurify["default"].sanitize((_m$field = m[field]) !== null && _m$field !== void 0 ? _m$field : '')
        };
      }
      return '';
    } catch (err) {
      return '';
    }
  };
  var handleSetCurrentMenu = _react["default"].useCallback(function (e) {
    var _e$currentTarget2;
    if (e !== null && e !== void 0 && (_e$currentTarget2 = e.currentTarget) !== null && _e$currentTarget2 !== void 0 && _e$currentTarget2.getAttribute('modif')) {
      var modif = e.currentTarget.getAttribute('modif');
      if (modif) {
        var i = menu.indexOf(modif);
        if (i > -1) {
          setCurrentDoc({});
          setCurrentMenu(i);
        }
      }
    }
  });
  var handleSetCurrentRecord = _react["default"].useCallback(function (e) {
    var _e$currentTarget3;
    if (e !== null && e !== void 0 && (_e$currentTarget3 = e.currentTarget) !== null && _e$currentTarget3 !== void 0 && _e$currentTarget3.getAttribute) {
      // Is number cannot resolve true 
      var modif = e.currentTarget.getAttribute('modif');
      if (modif > -1) {
        var _e$currentTarget4;
        console.log(currentMenuDocsList, modif);
        if (e !== null && e !== void 0 && (_e$currentTarget4 = e.currentTarget) !== null && _e$currentTarget4 !== void 0 && _e$currentTarget4.getAttribute('currentresults')) {
          setCurrentDoc(currentResults[modif]);
        } else {
          setCurrentDoc(currentMenuDocsList[modif]);
        }
      }
    }
  });
  var handleSetSearchFocus = _react["default"].useCallback(function (e) {
    if (searchWillClose !== null && searchWillClose !== void 0 && searchWillClose.current) {
      clearTimeout(searchWillClose.current);
    }
    setUsingQuery(true);
  });
  var handleSetSearchFocusOff = _react["default"].useCallback(function (e) {
    try {
      searchWillClose.current = setTimeout(function () {
        setUsingQuery(false);
      }, 500);
    } catch (err) {
      // fail silently
    }
  });
  var detectFlags = function detectFlags(doc) {
    var o = {};
    var flags = ['manual', 'simple'];
    console.log(devIndex, doc, (0, _typeof2["default"])(doc));
    if (typeof doc === 'string') {
      doc = devIndex.find(function (m) {
        return m.lead === doc;
      });
    }
    flags.map(function (m) {
      var _doc;
      o[m] = ((_doc = doc) === null || _doc === void 0 ? void 0 : _doc.meta.indexOf(m)) > -1;
    });
    return o;
  };
  console.log('Menu Items', menu, currentDoc);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className, " Documentation_Container")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex",
    style: {
      justifyContent: 'space-between',
      alignContent: 'center',
      margin: '.5rem 1.5rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    className: "Misc_Label",
    style: {
      fontSize: '1.5rem'
    }
  }, "Tycoon Documentation"), /*#__PURE__*/_react["default"].createElement(_.CompanyLink, props)), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: 'sticky',
      top: '.5rem',
      margin: '.5rem 0',
      marginTop: '0'
    }
  }, /*#__PURE__*/_react["default"].createElement("input", {
    onChange: handleUpdateSearch,
    onFocus: handleSetSearchFocus,
    onBlur: handleSetSearchFocusOff,
    className: "".concat(_documentationModule["default"].activeSearch),
    ref: queryRef,
    style: {
      border: '0px',
      borderRadius: '.5rem',
      width: 'calc(100% - 1rem)',
      fontSize: '1.25rem',
      padding: '0 .5rem',
      margin: '0 .5rem'
    },
    placeholder: "How do I?"
  }), usingQuery ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_documentationModule["default"].activeSearchResults)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: '.25rem 0rem',
      paddingTop: '.5rem',
      display: 'grid',
      gap: '.5rem'
    }
  }, Array.isArray(currentResults) && currentResults.length > 0 ? currentResults.map(function (m, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex gap-p5",
      style: {
        marginLeft: '.5rem',
        cursor: 'pointer'
      },
      key: i
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "Misc_Item_Container Misc_Item_DarkContainerHover",
      style: {
        padding: '.5rem'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_documentationModule["default"].lead),
      onClick: handleSetCurrentRecord,
      modif: i,
      currentresults: 'true'
    }, m.lead)));
  }) : (queryRef === null || queryRef === void 0 || (_queryRef$current = queryRef.current) === null || _queryRef$current === void 0 ? void 0 : _queryRef$current.value) !== '' ? /*#__PURE__*/_react["default"].createElement("div", null) : /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      textAlign: 'center',
      fontSize: '.95rem'
    }
  }, "Try Searching for something"))) : null), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "flex gap-p5 ".concat(_documentationModule["default"].menuContainer)
  }, Array.isArray(menu) && menu.length > 0 ? menu.map(function (m, i) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: i,
      style: {
        listStyle: 'none'
      },
      onClick: handleSetCurrentMenu,
      modif: m
    }, /*#__PURE__*/_react["default"].createElement("div", null, m !== null && m !== void 0 && m.charAt ? "".concat(m.charAt(0).toUpperCase()).concat(m.slice(1, m.length)) : m));
  }) : null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_documentationModule["default"].mainContainer)
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "".concat(_documentationModule["default"].menuList)
  }, Array.isArray(currentMenuDocsList) && currentMenuDocsList.length > 0 ? currentMenuDocsList.map(function (m, i) {
    var _detectFlags, _detectFlags2;
    return /*#__PURE__*/_react["default"].createElement("li", {
      className: "flex gap-p2",
      onClick: handleSetCurrentRecord,
      modif: i
    }, /*#__PURE__*/_react["default"].createElement("div", null, m === null || m === void 0 ? void 0 : m.lead), (_detectFlags = detectFlags(m)) !== null && _detectFlags !== void 0 && _detectFlags.manual ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_documentationModule["default"].tagUnmanaged, " ").concat(_documentationModule["default"].tagSmall)
    }, "m") : null, (_detectFlags2 = detectFlags(m)) !== null && _detectFlags2 !== void 0 && _detectFlags2.simple ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_documentationModule["default"].tagSimple, " ").concat(_documentationModule["default"].tagSmall)
    }, "s") : null);
  }) : null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_documentationModule["default"].contentContainer)
  }, currentDoc && !(0, _util.isObjectEmpty)(currentDoc) ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex ".concat(_documentationModule["default"].quadrant)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Misc_Item_Container Misc_Item_DarkContainerHover",
    style: {
      padding: '.5rem',
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_documentationModule["default"].lead)
  }, currentDoc.lead), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p5"
  }, (_detectFlags3 = detectFlags(currentDoc)) !== null && _detectFlags3 !== void 0 && _detectFlags3.manual ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_documentationModule["default"].tagUnmanaged, " ").concat(_documentationModule["default"].tag)
  }, "manual") : null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p5"
  }, (_detectFlags4 = detectFlags(currentDoc)) !== null && _detectFlags4 !== void 0 && _detectFlags4.simple ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_documentationModule["default"].tagSimple, " ").concat(_documentationModule["default"].tag)
  }, "simple") : null), /*#__PURE__*/_react["default"].createElement("pre", null, /*#__PURE__*/_react["default"].createElement("code", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_documentationModule["default"].htmlParseContainer),
    dangerouslySetInnerHTML: resolvePaint(currentDoc, 'html'),
    style: {
      fontSize: '.85rem',
      lineHeight: 'normal',
      lineBreak: 'auto',
      whiteSpace: 'pre-wrap'
    }
  }))))) : null), /*#__PURE__*/_react["default"].createElement("div", null, currentDoc && !(0, _util.isObjectEmpty)(currentDoc) ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex ".concat(_documentationModule["default"].container)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_documentationModule["default"].quadrant2)
  }, /*#__PURE__*/_react["default"].createElement("pre", null, /*#__PURE__*/_react["default"].createElement("code", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_documentationModule["default"].codePre)
  }, currentDoc === null || currentDoc === void 0 ? void 0 : currentDoc.code))), /*#__PURE__*/_react["default"].createElement("div", null, currentDoc.response))) : null)));
};
var _default = exports["default"] = Module;