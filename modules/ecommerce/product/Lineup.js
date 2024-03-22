"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _ecommerce = require("../../utility/ecommerce");
var _util = require("../../util");
var _ProductImageManagerModule = _interopRequireDefault(require("./ProductImageManager.module.scss"));
var _defaults = require("./defaults");
var _uuid = require("uuid");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Module = function Module(props) {
  var _props$editing, _props$editing2, _props$product2, _props$editingOptions;
  var _React$useState = _react["default"].useState({}),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    selectedStyle = _React$useState2[0],
    setSelectedStyle = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(null),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    currentOption = _React$useState4[0],
    setCurrentOption = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(null),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    uploadingForLineupId = _React$useState6[0],
    setUploadingForLineupId = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(null),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    currentLineupId = _React$useState8[0],
    setCurrentLineupId = _React$useState8[1];
  var lineupIdRef = _react["default"].useRef();
  var lineupNameRef = _react["default"].useRef();
  var lineupDescriptionRef = _react["default"].useRef();
  var lineupTimeRef = _react["default"].useRef();
  var currency = '$';
  (0, _ecommerce.resolveDefaultStyle)(props.product, selectedStyle, setSelectedStyle, currentOption, setCurrentOption);
  var updateLineup = _react["default"].useCallback(function (e) {
    if (e.currentTarget) {
      if (e.currentTarget.getAttribute('option')) {
        var temp = _objectSpread({}, props.product.detailmeta);
        if (e.currentTarget.getAttribute('option') === 'add') {
          if (temp.lineup && temp.lineup.length < 10) {
            temp.lineup.push((0, _defaults.defaultLineup)());
            props.setCurrentLineupEditing(temp.lineup.length - 1);
            setCurrentLineupId(temp.lineup[temp.lineup.length - 1].id);
            lineupNameRef.current.value = '';
            lineupDescriptionRef.current.value = '';
            lineupTimeRef.current.value = null;
          }
        } else if (e.currentTarget.getAttribute('option') === 'remove') {
          // TODO Must update to delete at current index and delete value on server
          if (temp.lineup && temp.lineup.length > 0) {
            temp.lineup.pop();
            props.setCurrentLineupEditing(temp.lineup.length - 1 > -1 ? temp.lineup.length - 1 : null);
            if (temp.lineup.length !== 0) {
              setCurrentLineupId(temp.lineup[temp.lineup.length - 1].id);
            }
            lineupNameRef.current.value = '';
            lineupDescriptionRef.current.value = '';
            lineupTimeRef.current.value = null;
          }
        } else if (e.currentTarget.getAttribute('option') === 'setSelected') {
          var index = e.currentTarget.getAttribute('index');
          if (!isNaN(index)) {
            props.setCurrentLineupEditing(index);
            setCurrentLineupId(temp.lineup[index].id);
            lineupNameRef.current.value = temp.lineup[index].title;
            lineupDescriptionRef.current.value = temp.lineup[index].description;
            lineupTimeRef.current.value = temp.lineup[index].time;
          }
        }
      }
    }
  });
  _react["default"].useEffect(function () {
    var useCur = props.currentLineupEditing;
    if (props.currentLineupEditing === null) {
      props.setCurrentLineupEditing(0);
      useCur = 0;
    }
    if (props.editing && props.editing.detailmeta && props.editing.detailmeta.lineup && props.editing.detailmeta.lineup.length > 0 && props.editing.detailmeta.lineup[useCur]) {
      if (lineupNameRef.current) {
        setCurrentLineupId(props.editing.detailmeta.lineup[useCur].id);
        lineupNameRef.current.value = props.editing.detailmeta.lineup[useCur].title;
        lineupDescriptionRef.current.value = props.editing.detailmeta.lineup[useCur].description;
        lineupTimeRef.current.value = props.editing.detailmeta.lineup[useCur].time;
      }
    }
  }, [props.currentLineupEditing, props.editing.id, props === null || props === void 0 || (_props$editing = props.editing) === null || _props$editing === void 0 || (_props$editing = _props$editing.detailmeta) === null || _props$editing === void 0 ? void 0 : _props$editing.lineup, lineupNameRef.current, lineupDescriptionRef.current, lineupTimeRef.current]);
  var fileInput = _react["default"].useRef();
  var handleUploadImage = _react["default"].useCallback(function (e) {
    if (props !== null && props !== void 0 && props.setWarning) {
      props.setWarning(null);
    }
    setUploadingForLineupId(e.currentTarget.getAttribute('lineupid'));
    setTimeout(function () {
      if (fileInput.current) {
        fileInput.current.click(); // Prompt file upload
      }
    }, 1);
  });
  var handleNewFile = _react["default"].useCallback(function (e) {
    try {
      if (e && e.target && e.target.files) {
        var files = e.target.files;
        if (files && files.length > 0) {
          var _props$product;
          var filesRenamed = Array.from(files).slice(0, files.length > 1 ? 1 : files.length).filter(function (m) {
            return m.type && _defaults.allowedTypes.indexOf(m.type) > -1;
          }).map(function (m) {
            var blob = m.slice(0, m.size, m.type);
            var ext = _defaults.allowedTypes[_defaults.allowedTypes.indexOf(m.type)].match(/\/([a-zA-Z0-9].*)/)[1];
            return new File([blob], "".concat((0, _uuid.v4)(), ".").concat(ext), {
              type: m.type
            });
          });
          var f = /*#__PURE__*/function () {
            var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
              var formData, imgNames, promise;
              return _regenerator["default"].wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!props.fetchBusy && props.apiUrl && props.domainKey && props._loggedIn && props.editing) {
                      if (props.publishProduct) {
                        formData = new FormData();
                        imgNames = [];
                        if (filesRenamed) {
                          filesRenamed.forEach(function (img) {
                            formData.append("image", img);
                            imgNames.push({
                              name: img.name,
                              modif: 'lineup'
                            });
                          });
                          formData.append('imgNames', JSON.stringify(imgNames));
                        }
                        formData.append('domainKey', props.domainKey);
                        formData.append('hash', props._loggedIn.hash);
                        formData.append('identifier', props._loggedIn.identifier);
                        formData.append('product', props.editing.id);
                        formData.append('detailmeta', JSON.stringify(props.editing.detailmeta));
                        formData.append('lineupid', uploadingForLineupId);
                        promise = function promise() {
                          return new Promise( /*#__PURE__*/function () {
                            var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(resolve, reject) {
                              var complete;
                              return _regenerator["default"].wrap(function _callee$(_context) {
                                while (1) switch (_context.prev = _context.next) {
                                  case 0:
                                    _context.prev = 0;
                                    _context.next = 3;
                                    return props.publishProduct('publish', 'true', true);
                                  case 3:
                                    complete = _context.sent;
                                    resolve(complete);
                                    _context.next = 10;
                                    break;
                                  case 7:
                                    _context.prev = 7;
                                    _context.t0 = _context["catch"](0);
                                    resolve(null);
                                  case 10:
                                  case "end":
                                    return _context.stop();
                                }
                              }, _callee, null, [[0, 7]]);
                            }));
                            return function (_x, _x2) {
                              return _ref2.apply(this, arguments);
                            };
                          }());
                        };
                        promise().then( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
                          var data, _fileInput$current, _f;
                          return _regenerator["default"].wrap(function _callee2$(_context2) {
                            while (1) switch (_context2.prev = _context2.next) {
                              case 0:
                                if (props.setFetchBusy) {
                                  props.setFetchBusy(true);
                                  setTimeout(function () {
                                    props.setFetchBusy(false);
                                  }, 10000);
                                }
                                console.log(props.editing);
                                _context2.next = 4;
                                return (0, _ecommerce.doUploadImageForLineupParticipant)(props.apiUrl, props.domainKey, props.editing.id, props._loggedIn, formData);
                              case 4:
                                data = _context2.sent;
                                if (data && data.product && data.product.products) {
                                  if (fileInput !== null && fileInput !== void 0 && (_fileInput$current = fileInput.current) !== null && _fileInput$current !== void 0 && _fileInput$current.value) {
                                    fileInput.current.value = null;
                                  }
                                  if (props.setFetchBusy) {
                                    props.setFetchBusy(false);
                                  }
                                  if (props.setCombinedFeed) {
                                    console.log('Set Combined Feed', data.product.products, props.setCombinedFeed);
                                    props.setCombinedFeed(data.product.products);
                                    if (props.setEditing) {
                                      _f = data.product.products.find(function (m) {
                                        return m.id === props.editing.id;
                                      });
                                      if (_f) {
                                        props.setEditing(_f);
                                        if (_f.detailmeta) {
                                          props.setEditingOptionsMeta(_f.detailmeta);
                                        }
                                      }
                                    }
                                  }
                                } else {
                                  fileInput.current = null;
                                }
                              case 6:
                              case "end":
                                return _context2.stop();
                            }
                          }, _callee2);
                        })));
                      }
                    }
                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            }));
            return function f() {
              return _ref.apply(this, arguments);
            };
          }();
          if (props !== null && props !== void 0 && (_props$product = props.product) !== null && _props$product !== void 0 && _props$product["new"] && props !== null && props !== void 0 && props.appendFormData) {
            props.appendFormData(filesRenamed, 'lineup', uploadingForLineupId);
          } else {
            f();
          }
        }
      }
    } catch (err) {
      console.log(err);
      if (props !== null && props !== void 0 && props.setWarning) {
        props.setWarning({
          message: 'There was an issue uploading images'
        });
      }
    }
  });
  var validStyleObject = selectedStyle && props.product && props.product.styles && props.product.styles.find(function (m) {
    return m.sid === selectedStyle;
  }) ? props.product.styles.find(function (m) {
    return m.sid === selectedStyle;
  }) : null;
  var validOptionObject = validStyleObject && validStyleObject.option ? currentOption ? validStyleObject.option.find(function (m) {
    return m.sid === currentOption;
  }) : validStyleObject.option[0] ? validStyleObject.option[0] : null : null;

  // console.log(props.product, props._loggedIn, currentOption, selectedStyle, props)
  var isAdmin = props.product && props.product.owner && props._loggedIn && props._loggedIn.identifier && props._loggedIn.identifier === props.product.owner;
  console.log(props.product, props.editingOptionsMeta, selectedStyle, currency, props.currentDefinePriceCurrency, props.priceInput, validStyleObject, props.editing, props.currentLineupEditing);
  var isEditing = (props === null || props === void 0 || (_props$editing2 = props.editing) === null || _props$editing2 === void 0 ? void 0 : _props$editing2.id) && (props === null || props === void 0 || (_props$product2 = props.product) === null || _props$product2 === void 0 ? void 0 : _props$product2.id) && props.editing.id === props.product.id;
  var useEditingOptions = isEditing && (props === null || props === void 0 ? void 0 : props.editingOptionsMeta) || !isEditing && props.product.detailmeta;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className),
    id: props.product && props.product.id ? props.product.id : '',
    selectedstyle: validStyleObject !== null && validStyleObject !== void 0 && validStyleObject.sid ? validStyleObject.sid : '',
    currentoption: validOptionObject !== null && validOptionObject !== void 0 && validOptionObject.sid ? validOptionObject.sid : ''
  }, (props === null || props === void 0 || (_props$editingOptions = props.editingOptionsMeta) === null || _props$editingOptions === void 0 ? void 0 : _props$editingOptions.productType) === 'virtual' ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, useEditingOptions.livestream ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: '#222222',
      marginTop: '.25rem',
      marginBottom: '.25rem',
      borderRadius: '.25rem',
      padding: '.25rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: '600'
    }
  }, "Lineup"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.6rem'
    },
    ref: lineupIdRef
  }, currentLineupId !== null && currentLineupId !== void 0 ? currentLineupId : ''), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Enter participants name",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: "Name",
    style: {
      fontSize: '.8rem',
      width: '100%'
    },
    onInput: props.setOptionsMetaData,
    option: "lineupTemp",
    option2: "title",
    ref: lineupNameRef
  })), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Optional: Enter description of participant",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: "Description",
    style: {
      fontSize: '.8rem',
      width: '100%'
    },
    onInput: props.setOptionsMetaData,
    option: "lineupTemp",
    option2: "description",
    ref: lineupDescriptionRef
  })), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Optional: Enter expected time for lineup participant to be performing",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "time",
    placeholder: "Time",
    style: {
      fontSize: '.8rem',
      width: '100%'
    },
    onInput: props.setOptionsMetaData,
    option: "lineupTemp",
    option2: "time",
    ref: lineupTimeRef
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      alignItems: 'center',
      marginTop: '.125rem'
    }
  }, props.product.detailmeta.lineup && props.product.detailmeta.lineup.length < 10 && props.product.detailmeta.lineup.length > -1 ? /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Add another Lineup Participant",
    placement: "bottom"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      width: '100%',
      padding: '.125rem 0'
    },
    onClick: updateLineup,
    option: "add"
  }, "Add")) : null, props.product.detailmeta.lineup && props.product.detailmeta.lineup[props.currentLineupEditing] ? /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Remove this Lineup Participant",
    placement: "bottom"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      width: '100%',
      padding: '.125rem 0'
    },
    onClick: updateLineup,
    option: "remove"
  }, "Remove")) : null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      overflowX: 'auto',
      overflowY: 'hidden',
      marginTop: '.125rem'
    }
  }, props.product.detailmeta.lineup && props.product.detailmeta.lineup.map ? props.product.detailmeta.lineup.map(function (m, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "lineupItem_editing ".concat(m.id === currentLineupId ? 'lineupItem_current' : ''),
      style: {
        maxWidth: '75px'
      },
      onClick: updateLineup,
      option: 'setSelected',
      index: i,
      key: i
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        fontSize: '.7rem',
        fontWeight: '600',
        overflowWrap: 'anywhere'
      }
    }, m.title !== '' ? m.title : /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        opacity: '.7'
      }
    }, "Participant")), /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        marginTop: '.125rem'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "ProductImageManager_container",
      style: {
        position: 'relative',
        width: '68px',
        height: '68px'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_ProductImageManagerModule["default"].productImageListThumbnailContainer),
      style: {
        backgroundImage: "url(".concat(props.cdn["static"], "/").concat(m.image, ")"),
        height: '68px',
        backgroundSize: 'cover',
        borderRadius: '1rem'
      }
    }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
      title: "Click here to upload an image for your lineup participant",
      placement: "bottom"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_ProductImageManagerModule["default"].changeImageButtonSmall, " image material-icons"),
      onClick: handleUploadImage,
      lineupid: m.id
    }, "image")), /*#__PURE__*/_react["default"].createElement("img", {
      src: "".concat((0, _ecommerce.resolveImg)(null)),
      className: "Product_img",
      style: {
        width: '68px',
        height: '68px',
        borderRadius: '1rem',
        opacity: m.image ? 0 : 1
      }
    })))), m.time ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "lineupItem_time",
      style: {
        fontSize: '1rem'
      }
    }, (0, _util.getFormattedTime)(m.time, {
      simple: true
    })) : null);
  }) : null)), /*#__PURE__*/_react["default"].createElement("input", {
    type: "file",
    style: {
      display: 'none'
    },
    ref: fileInput,
    onChange: handleNewFile
  })) : null)) : /*#__PURE__*/_react["default"].createElement("div", null));
};
var _default = exports["default"] = Module;