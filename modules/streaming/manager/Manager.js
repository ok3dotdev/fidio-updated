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
var _router = require("next/router");
var _streaming = require("../../utility/streaming");
var _SignIn = require("../../utility/onboarding/SignIn");
var _ecommerce = require("../../utility/ecommerce");
var _event = require("../../utility/utility/event");
var _uuid = require("uuid");
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _ManagerModule = _interopRequireDefault(require("./Manager.module.scss"));
var _LinearProgress = _interopRequireDefault(require("@mui/material/LinearProgress"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Module = function Module(props) {
  var _React$useState = _react["default"].useState(null),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    pageError = _React$useState2[0],
    setPageError = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(false),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    componentDidMount = _React$useState4[0],
    setComponentDidMount = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(null),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    componentId = _React$useState6[0],
    setComponentId = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(false),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    didCheckStream = _React$useState8[0],
    setDidCheckStream = _React$useState8[1];
  var _React$useState9 = _react["default"].useState(false),
    _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
    currentlyStreaming = _React$useState10[0],
    setCurrentlyStreaming = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(null),
    _React$useState12 = (0, _slicedToArray2["default"])(_React$useState11, 2),
    streamKey = _React$useState12[0],
    setStreamKey = _React$useState12[1];
  var _React$useState13 = _react["default"].useState(null),
    _React$useState14 = (0, _slicedToArray2["default"])(_React$useState13, 2),
    streamTo = _React$useState14[0],
    setStreamTo = _React$useState14[1];
  var _React$useState15 = _react["default"].useState(false),
    _React$useState16 = (0, _slicedToArray2["default"])(_React$useState15, 2),
    fetchBusy = _React$useState16[0],
    setFetchBusy = _React$useState16[1];
  var _React$useState17 = _react["default"].useState('stream'),
    _React$useState18 = (0, _slicedToArray2["default"])(_React$useState17, 2),
    openMenu = _React$useState18[0],
    setOpenMenu = _React$useState18[1];
  var _React$useState19 = _react["default"].useState({}),
    _React$useState20 = (0, _slicedToArray2["default"])(_React$useState19, 2),
    creatingShop = _React$useState20[0],
    setCreatingShop = _React$useState20[1];
  var _React$useState21 = _react["default"].useState({
      password: null,
      "private": false,
      dates: [],
      tags: [],
      input: ''
    }),
    _React$useState22 = (0, _slicedToArray2["default"])(_React$useState21, 2),
    streamSettings = _React$useState22[0],
    setStreamSettings = _React$useState22[1];
  var _React$useState23 = _react["default"].useState(false),
    _React$useState24 = (0, _slicedToArray2["default"])(_React$useState23, 2),
    askEndStream = _React$useState24[0],
    setAskEndStream = _React$useState24[1];
  var _React$useState25 = _react["default"].useState(false),
    _React$useState26 = (0, _slicedToArray2["default"])(_React$useState25, 2),
    updatingStreamConfig = _React$useState26[0],
    setUpdatingStreamConfig = _React$useState26[1];
  var _React$useState27 = _react["default"].useState(false),
    _React$useState28 = (0, _slicedToArray2["default"])(_React$useState27, 2),
    canStream = _React$useState28[0],
    setCanStream = _React$useState28[1];
  var _React$useState29 = _react["default"].useState(false),
    _React$useState30 = (0, _slicedToArray2["default"])(_React$useState29, 2),
    didAskStream = _React$useState30[0],
    setDidAskStream = _React$useState30[1];
  var fetchTimeoutRef = _react["default"].useRef();
  var proposedShopName = _react["default"].useRef();
  var proposedShopDesc = _react["default"].useRef();
  var privateRef = _react["default"].useRef();
  var privateRef2 = _react["default"].useRef();
  var passwordRef = _react["default"].useRef();
  var passwordRef2 = _react["default"].useRef();
  var titleRef = _react["default"].useRef();
  var descriptionRef = _react["default"].useRef();
  var myTagsRef = _react["default"].useRef();
  if (componentId) {
    props._LocalEventEmitter.unsubscribe(componentId);
    props._LocalEventEmitter.subscribe(componentId, function (d) {
      if (d && d.dispatch) {
        if (d.dispatch === 'paintStreamData') {
          setStreamData(currentlyStreaming);
        }
      }
    });
  }
  props._LocalEventEmitter.unsubscribe('manager');
  props._LocalEventEmitter.subscribe('manager', function (d) {
    if (d && d.dispatch) {
      if (d.dispatch === 'setMenu') {
        if ((d === null || d === void 0 ? void 0 : d.menu) === 'stream') {
          setOpenMenu('stream');
        }
      }
    }
  });
  var router = (0, _router.useRouter)();
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      var id = (0, _uuid.v4)();
      setComponentId(id);
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  _react["default"].useEffect(function () {
    if (props._loggedIn && props._loggedIn.username && !didCheckStream) {
      setDidCheckStream(true);
      checkStream(true);
    }
  }, [props._loggedIn, didCheckStream]);
  var checkStream = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var dontForce,
        data,
        res,
        d,
        _args = arguments;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            dontForce = _args.length > 0 && _args[0] !== undefined ? _args[0] : false;
            _context.prev = 1;
            if (fetchBusy) {
              _context.next = 19;
              break;
            }
            setFetchBusy(true);
            fetchTimeoutRef.current = setTimeout(function () {
              setFetchBusy(false);
            }, 10000);
            data = {
              stripeSecret: props._stripeSecret,
              dontForce: dontForce,
              streamSettings: streamSettings
            };
            _context.next = 8;
            return (0, _streaming.beginStream)(props.apiUrl, props.domainKey, data, _SignIn.checkSignedIn);
          case 8:
            res = _context.sent;
            if (fetchTimeoutRef.current) {
              clearTimeout(fetchTimeoutRef.current);
            }
            if (res) {
              _context.next = 18;
              break;
            }
            if (!dontForce) {
              _context.next = 14;
              break;
            }
            setFetchBusy(false);
            return _context.abrupt("return");
          case 14:
            props._setPageError("Failed to save begin stream");
            setFetchBusy(false);
            _context.next = 19;
            break;
          case 18:
            if (res == "disauthenticated") {
              props._setLoggedIn(false);
              props._setStripeSecret(false);
              setFetchBusy(false);
              (0, _SignIn.logout)();
            } else if (res.status == 'success') {
              // On successfull credit card received, purchase phone number and then update locally
              setFetchBusy(false);
              console.log('check stream', res);
              setCanStream(res.canStream);
              if (res.askStream) {
                setDidAskStream(true);
              }
              if (res.data && res.data.status == 'streaming' && res.data.stream) {
                setCurrentlyStreaming(res.data.stream);
                if (props !== null && props !== void 0 && props._setCurrentlyStreaming) {
                  props._setCurrentlyStreaming(res.data.stream);
                }
                setStreamData(res.data.stream);
                if (res.data.key) {
                  setStreamKey(res.data.key);
                }
                if (res.data.streamTo) {
                  setStreamTo(res.data.streamTo);
                }
                if (res.data.stream.meta && res.data.stream.meta.streamSettings) {
                  d = res.data.stream.meta.streamSettings;
                  setStreamSettings(d);
                }
                if (props._LocalEventEmitter) {
                  props._LocalEventEmitter.dispatch('refetchDefaults', {
                    dispatch: 'simple'
                  });
                }
              }
            }
          case 19:
            _context.next = 25;
            break;
          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](1);
            if (fetchTimeoutRef.current) {
              clearTimeout(fetchTimeoutRef.current);
            }
            setFetchBusy(false);
          case 25:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 21]]);
    }));
    return function checkStream() {
      return _ref.apply(this, arguments);
    };
  }();
  var setStreamData = function setStreamData(stream) {
    try {
      if (stream) {
        titleRef.current.value = stream.title;
        descriptionRef.current.value = stream.description;
        myTagsRef.current.value = stream.tags;
      }
    } catch (err) {
      // fail silently
    }
  };
  var updateStreamConfig = _react["default"].useCallback(function (e) {
    updateStreamConfigFn();
  });
  var updateStreamConfigFn = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      var streamData, data, res, d;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            if (fetchBusy) {
              _context2.next = 12;
              break;
            }
            setFetchBusy(true);
            setUpdatingStreamConfig(true);
            fetchTimeoutRef.current = setTimeout(function () {
              setFetchBusy(false);
              setUpdatingStreamConfig(false);
            }, 10000);
            streamData = {
              title: titleRef.current && titleRef.current.value ? titleRef.current.value : null,
              description: descriptionRef.current && descriptionRef.current.value ? descriptionRef.current.value : null,
              tags: myTagsRef.current && myTagsRef.current.value ? myTagsRef.current.value : null
            };
            data = {
              stream: currentlyStreaming.id,
              streamData: streamData,
              streamSettings: streamSettings
            };
            _context2.next = 9;
            return (0, _streaming.updateStreamConfigRequest)(props.apiUrl, props.domainKey, data, _SignIn.checkSignedIn);
          case 9:
            res = _context2.sent;
            if (fetchTimeoutRef.current) {
              clearTimeout(fetchTimeoutRef.current);
            }
            if (!res) {
              props._setPageError("Failed to save begin stream");
              setFetchBusy(false);
              setUpdatingStreamConfig(false);
            } else if (res == "disauthenticated") {
              props._setLoggedIn(false);
              props._setStripeSecret(false);
              setFetchBusy(false);
              setUpdatingStreamConfig(false);
              (0, _SignIn.logout)();
            } else if (res.status == 'success') {
              // On successfull credit card received, purchase phone number and then update locally
              console.log('check stream', res);
              setFetchBusy(false);
              setUpdatingStreamConfig(false);
              if (res.data && res.data.status == 'streaming') {
                setCurrentlyStreaming(res.data.stream);
                if (props !== null && props !== void 0 && props._setCurrentlyStreaming) {
                  props._setCurrentlyStreaming(res.data.stream);
                }
                if (res.data.key) {
                  setStreamKey(res.data.key);
                }
                if (res.data.streamTo) {
                  setStreamTo(res.data.streamTo);
                }
                if (res.data.stream) {
                  if (res.data.stream.meta && res.data.stream.meta.streamSettings) {
                    d = res.data.stream.meta.streamSettings;
                    setStreamSettings(d);
                  }
                }
              }
            }
          case 12:
            _context2.next = 20;
            break;
          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            if (fetchTimeoutRef.current) {
              clearTimeout(fetchTimeoutRef.current);
            }
            setFetchBusy(false);
            setUpdatingStreamConfig(false);
          case 20:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 14]]);
    }));
    return function updateStreamConfigFn() {
      return _ref2.apply(this, arguments);
    };
  }();
  var beginStreaming = _react["default"].useCallback(function (e) {
    checkStream();
  });
  var handleSetAdminMenu = _react["default"].useCallback(function (e) {
    try {
      if (e.target.getAttribute('menu')) {
        var menu = e.target.getAttribute('menu');
        setOpenMenu(menu);
      }
    } catch (err) {
      // fail silently
    }
  });
  _react["default"].useEffect(function () {
    if (streamSettings) {
      resolveState(streamSettings);
      props._LocalEventEmitter.dispatch(componentId, {
        dispatch: 'paintStreamData'
      });
    }
  }, [componentId, props._LocalEventEmitter, props.adminPanelState, streamSettings]);
  var resolveState = function resolveState(d) {
    var useSettings = d ? d : streamSettings;
    privateRef.current ? privateRef.current.checked = useSettings["private"] : null;
    privateRef2.current ? privateRef2.current.checked = useSettings["private"] : null;
    passwordRef.current ? passwordRef.current.value = useSettings.password : null;
    passwordRef2.current ? passwordRef2.current.value = useSettings.password : null;
  };
  console.log(props, streamSettings);
  var handleCreateShop = _react["default"].useCallback( /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(e) {
      var phase, res;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            setPageError(null);
            if (!e.target.getAttribute('phase')) {
              _context3.next = 19;
              break;
            }
            phase = e.target.getAttribute('phase');
            if (!(phase == '1')) {
              _context3.next = 8;
              break;
            }
            setCreatingShop({
              status: 'start'
            });
            _context3.next = 19;
            break;
          case 8:
            if (!(phase == 'end')) {
              _context3.next = 19;
              break;
            }
            console.log('Run request create shop', proposedShopName.current);
            setFetchBusy(true);
            if (!(proposedShopName.current && proposedShopName.current.value)) {
              _context3.next = 18;
              break;
            }
            _context3.next = 14;
            return (0, _ecommerce.createShop)(props.apiUrl, props.domainKey, props._loggedIn, {
              shopName: proposedShopName.current.value,
              shopDescription: proposedShopDesc.current.value
            });
          case 14:
            res = _context3.sent;
            if (res) {
              console.log(res);
              router.reload(window.location.pathname);
            } else {
              setPageError({
                message: 'Shop creation submission failed',
                placement: 'openshop'
              });
            }
            _context3.next = 19;
            break;
          case 18:
            setPageError({
              message: 'Please fill out a Shop Name',
              placement: 'description'
            });
          case 19:
            _context3.next = 24;
            break;
          case 21:
            _context3.prev = 21;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0); // fail silently
          case 24:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 21]]);
    }));
    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }());
  var handleClearError = _react["default"].useCallback(function (e) {
    setPageError(null);
  });
  var updateTags = _react["default"].useCallback(function (e) {
    var temp = _objectSpread({}, streamSettings);
    var values = e.currentTarget.value.split(' ');
    var dates = [];
    var tags = [];
    values.map(function (v) {
      if (!isNaN(new Date(v))) {
        dates.push(new Date(v));
      } else {
        tags.push(v);
      }
    });
    temp.dates = dates;
    temp.tags = tags;
    setStreamSettings(temp);
  });
  var setPrivate = _react["default"].useCallback(function (e) {
    var temp = _objectSpread({}, streamSettings);
    temp["private"] = e.currentTarget.checked;
    setStreamSettings(temp);
  });
  var setPassword = _react["default"].useCallback(function (e) {
    var temp = _objectSpread({}, streamSettings);
    temp.password = e.currentTarget.value;
    setStreamSettings(temp);
  });
  var handleAskEndStream = _react["default"].useCallback(function (e) {
    if (e.currentTarget.getAttribute('modif')) {
      var m = e.currentTarget.getAttribute('modif');
      if (m == 'yes') {
        // end stream
        try {
          var f = /*#__PURE__*/function () {
            var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
              var data, res;
              return _regenerator["default"].wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    console.log('end st', fetchBusy);
                    if (fetchBusy) {
                      _context4.next = 10;
                      break;
                    }
                    setFetchBusy(true);
                    fetchTimeoutRef.current = setTimeout(function () {
                      setFetchBusy(false);
                    }, 10000);
                    data = {
                      stream: currentlyStreaming.id
                    };
                    _context4.next = 7;
                    return (0, _streaming.endStream)(props.apiUrl, props.domainKey, data, _SignIn.checkSignedIn);
                  case 7:
                    res = _context4.sent;
                    if (fetchTimeoutRef.current) {
                      clearTimeout(fetchTimeoutRef.current);
                    }
                    if (!res) {
                      setAskEndStream(false);
                      props._setPageError("Failed to end stream");
                      setFetchBusy(false);
                    } else if (res == "disauthenticated") {
                      setAskEndStream(false);
                      props._setLoggedIn(false);
                      props._setStripeSecret(false);
                      setFetchBusy(false);
                      (0, _SignIn.logout)();
                    } else if (res.status == 'success') {
                      setAskEndStream(false);
                      // On successfull credit card received, purchase phone number and then update locally
                      setFetchBusy(false);
                      setCurrentlyStreaming(false);
                      if (props !== null && props !== void 0 && props._setCurrentlyStreaming) {
                        props._setCurrentlyStreaming(false);
                      }
                      setStreamKey(null);
                      setStreamTo(null);
                      setStreamSettings({
                        password: null,
                        "private": false,
                        dates: [],
                        tags: [],
                        input: ''
                      });
                      if (props._LocalEventEmitter) {
                        props._LocalEventEmitter.dispatch('refetchDefaults', {
                          dispatch: 'simple'
                        });
                      }
                    }
                  case 10:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4);
            }));
            return function f() {
              return _ref4.apply(this, arguments);
            };
          }();
          f();
        } catch (err) {
          setAskEndStream(false);
          if (fetchTimeoutRef.current) {
            clearTimeout(fetchTimeoutRef.current);
          }
          setFetchBusy(false);
        }
      } else {
        setAskEndStream(false);
      }
    } else if (!askEndStream) {
      setAskEndStream(true);
    }
  });
  var handleAskForStreamingPermissions = _react["default"].useCallback(function (e) {
    try {
      var f = /*#__PURE__*/function () {
        var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
          var res, _res$data;
          return _regenerator["default"].wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                if (fetchBusy) {
                  _context5.next = 8;
                  break;
                }
                setFetchBusy(true);
                fetchTimeoutRef.current = setTimeout(function () {
                  setFetchBusy(false);
                }, 10000);
                _context5.next = 5;
                return (0, _streaming.requestStreamingPermissions)(props.apiUrl, props.domainKey, _SignIn.checkSignedIn);
              case 5:
                res = _context5.sent;
                if (fetchTimeoutRef.current) {
                  clearTimeout(fetchTimeoutRef.current);
                }
                if (!res) {
                  setAskEndStream(false);
                  setFetchBusy(false);
                } else if (res == "disauthenticated") {
                  setAskEndStream(false);
                  props._setLoggedIn(false);
                  props._setStripeSecret(false);
                  setFetchBusy(false);
                  (0, _SignIn.logout)();
                } else if (res.status == 'success') {
                  setAskEndStream(false);
                  // On successfull credit card received, purchase phone number and then update locally
                  setFetchBusy(false);
                  if (res !== null && res !== void 0 && (_res$data = res.data) !== null && _res$data !== void 0 && _res$data.created) {
                    setDidAskStream(true);
                  }
                  if (props._LocalEventEmitter) {
                    props._LocalEventEmitter.dispatch('refetchDefaults', {
                      dispatch: 'simple'
                    });
                  }
                }
              case 8:
              case "end":
                return _context5.stop();
            }
          }, _callee5);
        }));
        return function f() {
          return _ref5.apply(this, arguments);
        };
      }();
      f();
    } catch (err) {
      if (fetchTimeoutRef.current) {
        clearTimeout(fetchTimeoutRef.current);
      }
      setFetchBusy(false);
    }
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ManagerModule["default"].container, " ").concat(props.className)
  }, pageError && pageError.message && !pageError.placement ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "error",
    style: {
      margin: '.25rem',
      marginBottom: '0'
    },
    onClick: handleClearError
  }, pageError.message) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ManagerModule["default"].innerContainer, " flex gap-p2"),
    style: {
      flexDirection: 'column'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ManagerModule["default"].itemsContainer, " flex Manager_Items"),
    style: {
      padding: '.5rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "".concat(openMenu == 'stream' ? _ManagerModule["default"].activeItem : '', " ").concat(_ManagerModule["default"].item),
    onClick: handleSetAdminMenu,
    menu: "stream"
  }, "Stream"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "".concat(openMenu == 'shop' ? _ManagerModule["default"].activeItem : '', " ").concat(_ManagerModule["default"].item),
    onClick: handleSetAdminMenu,
    menu: "shop"
  }, "Shop")), openMenu === 'stream' ? props._loggedIn && props._loggedIn.username ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ManagerModule["default"].settingsSectionContainer, " flex gap-p5"),
    style: {
      padding: '.25rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ManagerModule["default"].settingContainer, " ").concat(_ManagerModule["default"].streamingInfoContainer, " ").concat(currentlyStreaming ? "".concat(_ManagerModule["default"].isStreamingContainer) : '')
  }, !fetchBusy && didCheckStream && didAskStream ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '.25rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.85rem',
      marginBottom: '.25rem'
    }
  }, "You have asked for permission to stream. Please check back soon.")) : !fetchBusy && didCheckStream && !canStream ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '.25rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.85rem',
      marginBottom: '.25rem'
    }
  }, "You are currently not authorized to stream"), /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      borderRadius: '.25rem'
    },
    onClick: handleAskForStreamingPermissions
  }, "Ask For Streaming Permissions?")) : null, !currentlyStreaming && canStream ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '1rem',
      fontWeight: '600',
      paddingTop: '0',
      paddingBottom: '.125rem',
      textAlign: 'center'
    }
  }, "Stream on ", props.siteTitle, " Now"), !fetchBusy ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      alignItems: 'center',
      marginBottom: '.125rem',
      height: 'inherit'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "".concat(_ManagerModule["default"].streamingButton),
    onClick: beginStreaming,
    style: {
      padding: '.125rem 2rem',
      fontSize: '1.5rem',
      paddingTop: '.125rem',
      width: '-webkit-fill-available',
      height: '75px'
    }
  }, "Begin Stream"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      background: 'black',
      padding: '0 .25rem',
      borderRadius: '.25rem',
      marginTop: '.25rem',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("label", {
    style: {
      fontSize: '.8rem'
    }
  }, "Private"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    onChange: setPrivate,
    ref: privateRef
  })), streamSettings["private"] ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("label", {
    style: {
      fontSize: '.8rem'
    }
  }, "Password"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    onChange: setPassword,
    style: {
      maxWidth: '100px',
      maxHeight: '16px',
      fontSize: '.85rem',
      marginLeft: '.25rem',
      borderRadius: '.25rem'
    },
    ref: passwordRef
  })) : null)) : /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.85rem'
    }
  }, "Please wait...")) : currentlyStreaming ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ManagerModule["default"].streamingButtonStreaming, " importantPrompt")
  }, "Now Streaming ", /*#__PURE__*/_react["default"].createElement("div", {
    className: "RecordingCircle RecordingCircle_Small"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.85rem',
      overflowWrap: 'anywhere'
    }
  }, /*#__PURE__*/_react["default"].createElement("b", null, "Share your stream link:"), " ", /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      background: 'black',
      padding: '0 .125rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "".concat(props.devLocal ? props.devAddress : 'https://' + props.domainUrl, "/w?u=").concat(props._loggedIn.username),
    onClick: _event.selectThisText,
    selectValue: "".concat(props.devLocal ? props.devAddress : props.domainUrl, "/w?u=").concat(props._loggedIn.username)
  }, "".concat(props.devLocal ? props.devAddress : props.domainUrl, "/w?u=").concat(props._loggedIn.username)))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.85rem',
      fontWeight: 600,
      color: '#94ff94',
      overflowWrap: 'anywhere'
    }
  }, "Stream Endpoint: ", /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontWeight: 400,
      background: 'black',
      padding: '0 .125rem'
    },
    onClick: _event.selectThisText,
    selectValue: streamTo
  }, streamTo)), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.85rem',
      fontWeight: 600,
      color: '#ff81ca',
      overflowWrap: 'anywhere'
    }
  }, "Private Stream Key: ", /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontWeight: 400,
      background: 'black',
      padding: '0 .125rem'
    },
    onClick: _event.selectThisText,
    selectValue: streamKey
  }, streamKey))) : null, currentlyStreaming ? !askEndStream ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !updatingStreamConfig ? /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      width: '100%',
      marginTop: '.25rem',
      lineHeight: '12.5px',
      fontSize: '.8rem'
    },
    onClick: updateStreamConfig
  }, "Update Changed Settings") : /*#__PURE__*/_react["default"].createElement(_LinearProgress["default"], {
    color: "inherit",
    style: {
      height: '18.25px',
      marginTop: '.25rem'
    }
  }), /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      width: '100%',
      marginTop: '.25rem',
      lineHeight: '12.5px',
      fontSize: '.8rem'
    },
    onClick: handleAskEndStream
  }, "Terminate Stream")) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontWeight: 600,
      textAlign: 'center',
      marginTop: '.42rem'
    }
  }, "Terminate the Stream?"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      width: '100%',
      marginTop: '.25rem',
      lineHeight: '12.5px',
      fontSize: '.8rem'
    },
    onClick: handleAskEndStream,
    modif: "yes"
  }, "Yes"), /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      width: '100%',
      marginTop: '.25rem',
      lineHeight: '12.5px',
      fontSize: '.8rem'
    },
    onClick: handleAskEndStream,
    modif: "no"
  }, "No"))) : null), /*#__PURE__*/_react["default"].createElement("div", {
    className: _ManagerModule["default"].settingContainer
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    modif: 'title',
    ref: titleRef,
    placeholder: "Title",
    style: {
      width: '100%'
    }
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("textarea", {
    modif: 'description',
    ref: descriptionRef,
    placeholder: "Description",
    style: {
      maxWidth: '100%',
      marginTop: '.25rem',
      width: '100%',
      height: '90px'
    }
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    modif: 'tags',
    ref: myTagsRef,
    placeholder: "Tags",
    style: {
      width: '100%'
    }
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: _ManagerModule["default"].settingContainer
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem',
      marginBottom: '.125rem',
      marginTop: '.125rem'
    }
  }, "Create your own Auth Keys to provide authorization to watch the stream for any tickets with matching tags"), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Enter dates in the following format MON-DD-YYYY or they will not be parsed as dates. Values that do not match dates will be parsed as tags that can be added to livestreams. Any matches will authorize viewership of tickets with matching tags for the stream",
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    },
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    style: {
      marginBottom: '.125rem',
      width: '-webkit-fill-available'
    },
    placeholder: "Date in DD/MM/YY format or a Tag",
    onInput: updateTags,
    option: "livestreamDef",
    defaultValue: streamSettings.input
  })), streamSettings.dates.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "tagContainer",
    style: {
      marginTop: '.25rem'
    }
  }, streamSettings.dates.map(function (d, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "tagItem",
      key: i
    }, d && d.toLocaleString ? d.toLocaleString("en-US", {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    }) : '');
  })) : /*#__PURE__*/_react["default"].createElement("div", null), streamSettings.tags.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "tagContainer",
    style: {
      marginTop: '.25rem'
    }
  }, streamSettings.tags.map(function (d, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "tagItem",
      key: i
    }, d);
  })) : /*#__PURE__*/_react["default"].createElement("div", null), currentlyStreaming ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      background: 'black',
      padding: '0 .25rem',
      borderRadius: '.25rem',
      marginTop: '.25rem',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("label", {
    style: {
      fontSize: '.8rem'
    }
  }, "Private"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    onChange: setPrivate,
    ref: privateRef2
  })), streamSettings && streamSettings["private"] ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("label", {
    style: {
      fontSize: '.8rem'
    }
  }, "Password"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    onChange: setPassword,
    style: {
      maxWidth: '100px',
      maxHeight: '16px',
      fontSize: '.85rem',
      marginLeft: '.25rem',
      borderRadius: '.25rem'
    },
    ref: passwordRef2
  })) : null) : null)) : /*#__PURE__*/_react["default"].createElement("div", null, props._loggedIn ? !props._loggedIn.username ? 'Please register Username to begin streaming' : 'Please login to begin streaming' : null) : openMenu === 'shop' ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: '.25rem'
    }
  }, props.shopProfileData && props.shopProfileData.shop && props.shopProfileData.shop.status && props.shopProfileData.shop.status == 'nonexistent' ? /*#__PURE__*/_react["default"].createElement("div", null, !creatingShop.status ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '.25rem',
      paddingTop: '.25rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.85rem'
    }
  }, "You do not currently own a shop. Would you like to request to open one?"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleCreateShop,
    phase: "1"
  }, "Start Creating Shop"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.85rem'
    }
  }, "A shop allows for you to sell products on ", props.siteTitle, " with ease to all customers, fans, collectors, enthusiasts and passerbys utilizing all the tools offered on the platform. You will be able to track pending orders that have yet to be completed, products in carts, your personal inventory, sales and much more as well as sell products in such a way that makes it easier for your customers.")) : creatingShop.status && creatingShop.status == 'start' ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '.25rem',
      paddingTop: '.25rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.85rem'
    }
  }, "Name your Shop"), /*#__PURE__*/_react["default"].createElement("input", {
    ref: proposedShopName,
    type: "text",
    placeholder: "Shop Name",
    className: "simpleTextInput"
  }), /*#__PURE__*/_react["default"].createElement("textarea", {
    rows: "5",
    style: {
      height: 'auto',
      resize: 'none'
    },
    ref: proposedShopDesc,
    type: "text",
    placeholder: "You can describe your Shop here. You might put a company slogan, introduce your business, describe the products you sell or nothing at all. It is up to you and your stakeholders.",
    className: "simpleTextInput"
  }), pageError && pageError.message && pageError.placement == 'description' ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "error",
    onClick: handleClearError
  }, pageError.message) : null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.75rem',
      background: 'black',
      padding: '.125rem'
    }
  }, "When creating your shop, you must set up your vendor account. Please have your banking details ready for direct deposit setup. If you don't have banking details prepared at the moment, you can always set them up later. Once your shop is created, you can start creating products and showcasing them to the public. For all physical products, it is your responsibility to ensure that you have sufficient inventory available for direct-to-consumer sales through the platform. If any products offered for sale are out of stock, any payments received must be fully refunded to customers without exceptions. As a shop owner, you will be subject to platform fees, which will be deducted from your total revenues on the platform. ", props.siteTitle, " reserves the right to close any shop that is suspected of operating in a manner that jeopardizes the quality of service and integrity of the platform. All transactions on ", props.siteTitle, " are handled using Tycoon Systems Ecommerce Services. Any disputes on ", props.siteTitle, " are settled by the ", props.siteTitle, " platform. By submitting a request to open your shop below, you agree to the above terms and conditions."), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleCreateShop,
    phase: "end"
  }, "Open Shop"), pageError && pageError.message && pageError.placement == 'openshop' ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "error",
    onClick: handleClearError
  }, pageError.message) : null) : null) : props.shopProfileData && props.shopProfileData.shop && props.shopProfileData.shop.name ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.85rem'
    }
  }, props.shopProfileData.shop.name)) : null) : null));
};
var _default = exports["default"] = Module;