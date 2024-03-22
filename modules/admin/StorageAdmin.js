"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _util = require("../util");
var _uuid = require("uuid");
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _PhotoCamera = _interopRequireDefault(require("@mui/icons-material/PhotoCamera"));
var _AdminModule = _interopRequireDefault(require("./Admin.module.scss"));
var _SignIn = require("../utility/onboarding/SignIn");
var _fetch = require("../utility/fetch");
var _event = require("../utility/utility/event");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml', 'image/webp', 'image/bmp', 'image/tiff'];
var moduleName = 'StreamAdmin';
var USE_OFFSET_INTERVAL = 200;
var DO_SEARCH_DELAY = 1500;
var DEFAULT_VIEW_IMAGE = {
  location: 'img/default/greythumb_product.jpg',
  internal: true
};
var Module = function Module(props) {
  var _props$siteTitle, _currentImage$locatio, _currentImage$locatio2, _currentImage$locatio3;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(null),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    componentId = _React$useState4[0],
    setComponentId = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(null),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    pageError = _React$useState6[0],
    setPageError = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(null),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    storageFiles = _React$useState8[0],
    setStorageFiles = _React$useState8[1];
  var _React$useState9 = _react["default"].useState([]),
    _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
    folders = _React$useState10[0],
    setFolders = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(''),
    _React$useState12 = (0, _slicedToArray2["default"])(_React$useState11, 2),
    currentDir = _React$useState12[0],
    setCurrentDir = _React$useState12[1];
  var _React$useState13 = _react["default"].useState(DEFAULT_VIEW_IMAGE),
    _React$useState14 = (0, _slicedToArray2["default"])(_React$useState13, 2),
    currentImage = _React$useState14[0],
    setCurrentImage = _React$useState14[1];
  var _React$useState15 = _react["default"].useState(0),
    _React$useState16 = (0, _slicedToArray2["default"])(_React$useState15, 2),
    itemOffset = _React$useState16[0],
    setItemOffset = _React$useState16[1];
  var uploadFile = _react["default"].useRef();
  var searchRef = _react["default"].useRef();
  props._LocalEventEmitter.unsubscribe(moduleName);
  props._LocalEventEmitter.subscribe(moduleName, function (e) {
    if (e) {
      if (e.dispatch === 'loadDefault') {
        loadDefault();
      }
    }
  });
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      var id = (0, _uuid.v4)();
      setComponentId(id);
      loadDefault();
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  var loadDefault = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(search) {
      var body, res, _res$folders;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            body = {
              domainKey: props.domainKey,
              hash: props._loggedIn.hash,
              identifier: props._loggedIn.identifier,
              directory: currentDir,
              itemOffset: itemOffset * USE_OFFSET_INTERVAL
            };
            if (search !== undefined) {
              body.search = search;
            }
            _context.next = 4;
            return (0, _fetch.fetchPost)(props.apiUrl + '/a/getstoragefiles', null, null, body);
          case 4:
            res = _context.sent;
            if (res) {
              _context.next = 9;
              break;
            }
            return _context.abrupt("return", false);
          case 9:
            if (!res.hasOwnProperty('status')) {
              _context.next = 22;
              break;
            }
            if (!(res.status == "disauthenticated")) {
              _context.next = 15;
              break;
            }
            (0, _SignIn.logout)();
            return _context.abrupt("return", "disauthenticated");
          case 15:
            if (!(res.status == "failed")) {
              _context.next = 19;
              break;
            }
            return _context.abrupt("return", false);
          case 19:
            if (!(res.status == "success")) {
              _context.next = 22;
              break;
            }
            if (res.contents) {
              setFolders((_res$folders = res.folders) !== null && _res$folders !== void 0 ? _res$folders : []);
              setStorageFiles(res.contents);
            }
            return _context.abrupt("return", res);
          case 22:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function loadDefault(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var handleItemInteraction = _react["default"].useCallback(function (e) {
    var modif = e.currentTarget.getAttribute('modif');
    var useKey = e.currentTarget.getAttribute('usekey');
    if (modif && useKey) {
      handleUpdate(useKey, modif);
    }
  });
  var handleGoBack = _react["default"].useCallback(function (e) {
    var useDir = currentDir.match(/([^\/]+)\/$/);
    if (useDir && useDir[1]) {
      var useNewDir = currentDir.replace(useDir[1] + '/', '');
      setCurrentDir(useNewDir);
      setTimeout(function () {
        props._LocalEventEmitter.dispatch(moduleName, {
          dispatch: 'loadDefault'
        });
      }, 150);
    }
  });
  var handleUpdate = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(key, modif) {
      var useOffset, useDir, temp, body, res, _res$folders2;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            useOffset = itemOffset;
            useDir = currentDir;
            if (modif === 'goto') {
              // If entering directory, restart at 0 index
              setItemOffset(0);
              useOffset = 0;
              useDir = key;
              setCurrentDir(key);
            } else if (modif === 'delete') {
              temp = _objectSpread({}, currentImage);
              temp = Object.assign({}, DEFAULT_VIEW_IMAGE);
              setCurrentImage(temp);
            }
            body = {
              domainKey: props.domainKey,
              hash: props._loggedIn.hash,
              identifier: props._loggedIn.identifier,
              key: key,
              modif: modif,
              directory: useDir,
              itemOffset: useOffset * USE_OFFSET_INTERVAL
            };
            _context2.next = 6;
            return (0, _fetch.fetchPost)(props.apiUrl + '/a/storagecrudupdate', null, null, body);
          case 6:
            res = _context2.sent;
            if (res) {
              _context2.next = 11;
              break;
            }
            return _context2.abrupt("return", false);
          case 11:
            if (!res.hasOwnProperty('status')) {
              _context2.next = 24;
              break;
            }
            if (!(res.status == "disauthenticated")) {
              _context2.next = 17;
              break;
            }
            (0, _SignIn.logout)();
            return _context2.abrupt("return", "disauthenticated");
          case 17:
            if (!(res.status == "failed")) {
              _context2.next = 21;
              break;
            }
            return _context2.abrupt("return", false);
          case 21:
            if (!(res.status == "success")) {
              _context2.next = 24;
              break;
            }
            if (res.contents) {
              setFolders((_res$folders2 = res.folders) !== null && _res$folders2 !== void 0 ? _res$folders2 : []);
              setStorageFiles(res.contents);
            }
            return _context2.abrupt("return", res);
          case 24:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function handleUpdate(_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleSelectUploadFile = _react["default"].useCallback(function (e) {
    var _e$target;
    if (e !== null && e !== void 0 && (_e$target = e.target) !== null && _e$target !== void 0 && _e$target.getAttribute('modif')) {
      var modif = e.target.getAttribute('modif');
      if (modif) {
        if (modif === 'img' && uploadFile !== null && uploadFile !== void 0 && uploadFile.current) {
          uploadFile.current.click();
        }
      }
    }
  });
  var handleUploadFile = _react["default"].useCallback(function (e) {
    try {
      console.log(e.target);
      setPageError(null);
      if (e && e.target && e.target.files) {
        var files = e.target.files;
        console.log(files);
        if (files && files.length > 0) {
          var filesRenamed = Array.from(files).slice(0, files.length > 1 ? 1 : files.length).filter(function (m) {
            var goodType = m.type && allowedTypes.indexOf(m.type) > -1;
            if (!goodType) {
              setPageError('Some types that were uploaded were not allowed. Please check that you are uploading the appropriate types for any file upload');
            }
            return goodType;
          }).map(function (m) {
            var nameSplit = m.name.split('.');
            var originalName = nameSplit[0].replace(/\s/g, '');
            var extension = nameSplit.pop();
            var blob = m.slice(0, m.size, m.type);
            return new File([blob], "".concat(originalName, ".").concat(extension), {
              type: m.type
            });
          });
          var f = /*#__PURE__*/function () {
            var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
              var _e$target2, formData, modif, res;
              return _regenerator["default"].wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(!props.fetchBusy && props.apiUrl && props.domainKey && props._loggedIn)) {
                      _context3.next = 32;
                      break;
                    }
                    formData = new FormData();
                    if (filesRenamed) {
                      filesRenamed.forEach(function (file) {
                        formData.append("file", file);
                      });
                    }
                    if (e !== null && e !== void 0 && (_e$target2 = e.target) !== null && _e$target2 !== void 0 && _e$target2.getAttribute('modif')) {
                      modif = e.target.getAttribute('modif');
                    }
                    formData.append('domainKey', props.domainKey);
                    formData.append('hash', props._loggedIn.hash);
                    formData.append('identifier', props._loggedIn.identifier);
                    formData.append('directory', currentDir);
                    formData.append('modif', modif);
                    if (props.setFetchBusy) {
                      props.setFetchBusy(true);
                      setTimeout(function () {
                        props.setFetchBusy(false);
                      }, 30000);
                    }
                    if (!(modif && modif === 'image')) {
                      _context3.next = 32;
                      break;
                    }
                    _context3.next = 13;
                    return (0, _fetch.fetchPost)(props.apiUrl + '/a/uploadfile', null, null, formData, {
                      formData: true
                    });
                  case 13:
                    res = _context3.sent;
                    if (res) {
                      _context3.next = 18;
                      break;
                    }
                    return _context3.abrupt("return", false);
                  case 18:
                    if (!res.hasOwnProperty('status')) {
                      _context3.next = 32;
                      break;
                    }
                    if (!(res.status == "disauthenticated")) {
                      _context3.next = 24;
                      break;
                    }
                    (0, _SignIn.logout)();
                    return _context3.abrupt("return", "disauthenticated");
                  case 24:
                    if (!(res.status == "failed")) {
                      _context3.next = 28;
                      break;
                    }
                    return _context3.abrupt("return", false);
                  case 28:
                    if (!(res.status == "success")) {
                      _context3.next = 32;
                      break;
                    }
                    props.setFetchBusy(false);
                    setTimeout(function () {
                      props._LocalEventEmitter.dispatch(moduleName, {
                        dispatch: 'loadDefault'
                      });
                    }, 150);
                    return _context3.abrupt("return", res);
                  case 32:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            }));
            return function f() {
              return _ref3.apply(this, arguments);
            };
          }();
          f();
        }
      }
    } catch (err) {
      console.log(err);
      setWarning({
        message: 'There was an issue uploading images'
      });
    }
  });
  var handleSetPagination = _react["default"].useCallback(function (e) {
    var scope = e.currentTarget.getAttribute('scope');
    if (scope) {
      var nextValue = e.currentTarget.getAttribute('i');
      if (scope === 'itemOffset') {
        setItemOffset(Number(nextValue));
      }
      setTimeout(function () {
        props._LocalEventEmitter.dispatch(moduleName, {
          dispatch: 'loadDefault'
        });
      }, 150);
    }
  });
  var handleCloseError = function handleCloseError() {
    setPageError(null);
  };
  var handleDoLoad = _react["default"].useCallback(function (e) {
    var _e$currentTarget;
    if (e !== null && e !== void 0 && (_e$currentTarget = e.currentTarget) !== null && _e$currentTarget !== void 0 && _e$currentTarget.getAttribute) {
      var useKey = e.currentTarget.getAttribute('useKey');
      if (useKey) {
        var _props$cdn$static, _props$cdn;
        var temp = _objectSpread({}, currentImage);
        temp.location = "".concat((_props$cdn$static = props === null || props === void 0 || (_props$cdn = props.cdn) === null || _props$cdn === void 0 ? void 0 : _props$cdn["static"]) !== null && _props$cdn$static !== void 0 ? _props$cdn$static : '', "/").concat(useKey);
        temp.internal = false;
        setCurrentImage(temp);
        (0, _event.selectThisText)(e);
      }
    }
  });
  var itemOffsetPages = [itemOffset - 2, itemOffset - 1, itemOffset, itemOffset + 1, itemOffset + 2];
  var handleDoSearch = _react["default"].useCallback((0, _util.debounce)(function (e) {
    if (e !== null && e !== void 0 && e.target) {
      var value = e.target.value;
      if (value !== undefined) {
        loadDefault(value);
      }
    }
  }, DO_SEARCH_DELAY), []); // Debounce Search

  console.log(storageFiles, folders, props, currentDir, currentImage);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className, " ").concat(moduleName, "_Container")
  }, pageError ? /*#__PURE__*/_react["default"].createElement("p", {
    className: "error",
    style: {
      marginTop: '.5rem'
    },
    onClick: handleCloseError
  }, pageError) : null, !(props !== null && props !== void 0 && props.vert) ? /*#__PURE__*/_react["default"].createElement("h3", null, "Storage") : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].containerTwoSmallRight, " ").concat(props !== null && props !== void 0 && props.vert ? "".concat(_AdminModule["default"].vertView) : null)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(moduleName, "_InternalContainer")
  }, /*#__PURE__*/_react["default"].createElement("section", null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "See Storage for ".concat((_props$siteTitle = props.siteTitle) !== null && _props$siteTitle !== void 0 ? _props$siteTitle : 'your Platform', " below"),
    placement: "bottom"
  }, /*#__PURE__*/_react["default"].createElement("h4", null, "Files")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].storageActionContainer, " flex gap-p2"),
    style: {
      marginBottom: '.25rem'
    }
  }, currentDir !== '' ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Go back"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2 al-cen pointer ".concat(_AdminModule["default"].itemContainer),
    onClick: handleGoBack,
    style: {
      width: 'fit-content',
      fontWeight: '600'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "material-icons",
    style: {
      fontSize: '1rem'
    }
  }, "arrow_back"), /*#__PURE__*/_react["default"].createElement("div", null, "back"))), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Upload New File to this Directory"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleSelectUploadFile,
    modif: "img"
  }, "Upload New Image"))) : null, /*#__PURE__*/_react["default"].createElement("input", {
    placeholder: "Search",
    ref: searchRef,
    style: {
      borderRadius: '1rem',
      borderWidth: 0,
      padding: '.0rem .5rem'
    },
    onChange: handleDoSearch
  })), /*#__PURE__*/_react["default"].createElement("input", {
    type: "file",
    modif: "image",
    style: {
      display: 'none'
    },
    ref: uploadFile,
    onChange: handleUploadFile
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].listContainer),
    style: {
      maxHeight: "".concat(props.vert ? '200px' : '65vh')
    }
  }, folders !== null && folders !== void 0 && folders.map ? folders.map(function (m, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_AdminModule["default"].itemContainer, " pointer"),
      key: i,
      modif: "goto",
      usekey: "".concat(m.Prefix),
      onClick: handleItemInteraction
    }, /*#__PURE__*/_react["default"].createElement("div", null, m.Prefix), /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex gap-p2"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: "material-icons",
      style: {
        fontSize: '1rem'
      }
    }, "arrow_forward")));
  }) : null, storageFiles !== null && storageFiles !== void 0 && storageFiles.map ? storageFiles.map(function (m, i) {
    var _props$cdn$static2, _props$cdn2, _props$cdn$static3, _props$cdn3;
    return m.Key !== currentDir ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_AdminModule["default"].itemContainer),
      key: i
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(props !== null && props !== void 0 && props.vert ? "".concat(_AdminModule["default"].shortened) : null),
      selectValue: "".concat((_props$cdn$static2 = props === null || props === void 0 || (_props$cdn2 = props.cdn) === null || _props$cdn2 === void 0 ? void 0 : _props$cdn2["static"]) !== null && _props$cdn$static2 !== void 0 ? _props$cdn$static2 : '', "/").concat(m.Key),
      onClick: handleDoLoad,
      useKey: "".concat(m.Key),
      style: {
        cursor: 'pointer'
      }
    }, m.Key), /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex gap-p2"
    }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
      title: "Copy URL",
      placement: "left"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: "material-icons",
      modif: "copy_url",
      usekey: "".concat(m.Key),
      selectValue: "".concat((_props$cdn$static3 = props === null || props === void 0 || (_props$cdn3 = props.cdn) === null || _props$cdn3 === void 0 ? void 0 : _props$cdn3["static"]) !== null && _props$cdn$static3 !== void 0 ? _props$cdn$static3 : '', "/").concat(m.Key),
      onClick: _event.selectThisText,
      style: {
        fontSize: '1rem'
      }
    }, "link")), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
      title: "Delete",
      placement: "left"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: "material-icons",
      modif: "delete",
      usekey: "".concat(m.Key),
      onClick: handleItemInteraction,
      style: {
        fontSize: '1rem'
      }
    }, "delete")))) : null;
  }) : null), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "PaginationContainer"
  }, itemOffsetPages.map(function (m, i) {
    return m > -1 ? /*#__PURE__*/_react["default"].createElement("li", {
      className: "".concat(m == itemOffset ? 'ActivePage' : ''),
      scope: "itemOffset",
      key: i,
      i: m,
      onClick: handleSetPagination
    }, m + 1) : null;
  }))), !(props !== null && props !== void 0 && props.vert) ? /*#__PURE__*/_react["default"].createElement("section", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2"
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Platform Storage Status:"), /*#__PURE__*/_react["default"].createElement("div", null, "Good")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2"
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Platform Content Delivery Network Status:"), /*#__PURE__*/_react["default"].createElement("div", null, "Good"))) : null), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontWeight: '600'
    }
  }, "View"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Click to Copy URL"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    style: {
      backgroundImage: "url(".concat((_currentImage$locatio = currentImage === null || currentImage === void 0 ? void 0 : currentImage.location) !== null && _currentImage$locatio !== void 0 ? _currentImage$locatio : null),
      height: "".concat(props.vert ? '200px' : '400px'),
      width: '100%',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    },
    selectValue: "".concat((_currentImage$locatio2 = currentImage === null || currentImage === void 0 ? void 0 : currentImage.location) !== null && _currentImage$locatio2 !== void 0 ? _currentImage$locatio2 : null),
    onClick: _event.selectThisText
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2 shareButton",
    selectValue: "".concat((_currentImage$locatio3 = currentImage === null || currentImage === void 0 ? void 0 : currentImage.location) !== null && _currentImage$locatio3 !== void 0 ? _currentImage$locatio3 : null),
    onClick: _event.selectThisText
  }, /*#__PURE__*/_react["default"].createElement(_PhotoCamera["default"], null), /*#__PURE__*/_react["default"].createElement("div", null, "Copy URL")))))));
};
var _default = exports["default"] = Module;