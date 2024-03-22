"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _link = _interopRequireDefault(require("next/link"));
var _uuid = require("uuid");
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _AdminModule = _interopRequireDefault(require("./Admin.module.scss"));
var _SignIn = require("../utility/onboarding/SignIn");
var _fetch = require("../utility/fetch");
var moduleName = 'StreamAdmin';
var Module = function Module(props) {
  var _props$siteTitle, _props$siteTitle2;
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
    canStream = _React$useState6[0],
    setCanStream = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(null),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    askStream = _React$useState8[0],
    setAskStream = _React$useState8[1];
  var _React$useState9 = _react["default"].useState(0),
    _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
    canStreamOffset = _React$useState10[0],
    setCanStreamOffset = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(0),
    _React$useState12 = (0, _slicedToArray2["default"])(_React$useState11, 2),
    askStreamOffset = _React$useState12[0],
    setAskStreamOffset = _React$useState12[1];
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
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var body, res;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            body = {
              domainKey: props.domainKey,
              hash: props._loggedIn.hash,
              identifier: props._loggedIn.identifier,
              askStreamOffset: askStreamOffset * 50,
              canStreamOffset: canStreamOffset * 50
            };
            _context.next = 3;
            return (0, _fetch.fetchPost)(props.apiUrl + '/a/streampage', null, null, body);
          case 3:
            res = _context.sent;
            if (res) {
              _context.next = 8;
              break;
            }
            return _context.abrupt("return", false);
          case 8:
            if (!res.hasOwnProperty('status')) {
              _context.next = 22;
              break;
            }
            if (!(res.status == "disauthenticated")) {
              _context.next = 14;
              break;
            }
            (0, _SignIn.logout)();
            return _context.abrupt("return", "disauthenticated");
          case 14:
            if (!(res.status == "failed")) {
              _context.next = 18;
              break;
            }
            return _context.abrupt("return", false);
          case 18:
            if (!(res.status == "success")) {
              _context.next = 22;
              break;
            }
            if (res.askStream) {
              setAskStream(res.askStream);
            }
            if (res.canStream) {
              setCanStream(res.canStream);
            }
            return _context.abrupt("return", res);
          case 22:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function loadDefault() {
      return _ref.apply(this, arguments);
    };
  }();
  var handleChangeStreamAuth = _react["default"].useCallback(function (e) {
    var modif = e.currentTarget.getAttribute('modif');
    var id = e.currentTarget.getAttribute('userid');
    if (modif && id) {
      changeAuth(id, modif);
    }
  });
  var changeAuth = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(useId, modif) {
      var body, res;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            body = {
              domainKey: props.domainKey,
              hash: props._loggedIn.hash,
              identifier: props._loggedIn.identifier,
              useId: useId,
              modif: modif,
              askStreamOffset: askStreamOffset * 50,
              canStreamOffset: canStreamOffset * 50
            };
            _context2.next = 3;
            return (0, _fetch.fetchPost)(props.apiUrl + '/a/changestreamauth', null, null, body);
          case 3:
            res = _context2.sent;
            if (res) {
              _context2.next = 8;
              break;
            }
            return _context2.abrupt("return", false);
          case 8:
            if (!res.hasOwnProperty('status')) {
              _context2.next = 22;
              break;
            }
            if (!(res.status == "disauthenticated")) {
              _context2.next = 14;
              break;
            }
            (0, _SignIn.logout)();
            return _context2.abrupt("return", "disauthenticated");
          case 14:
            if (!(res.status == "failed")) {
              _context2.next = 18;
              break;
            }
            return _context2.abrupt("return", false);
          case 18:
            if (!(res.status == "success")) {
              _context2.next = 22;
              break;
            }
            if (res.askStream) {
              setAskStream(res.askStream);
            }
            if (res.canStream) {
              setCanStream(res.canStream);
            }
            return _context2.abrupt("return", res);
          case 22:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function changeAuth(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleSetPagination = _react["default"].useCallback(function (e) {
    var scope = e.currentTarget.getAttribute('scope');
    if (scope) {
      var nextValue = e.currentTarget.getAttribute('i');
      console.log(nextValue);
      if (scope === 'askStreamOffset') {
        setAskStreamOffset(Number(nextValue));
      } else if (scope === 'canStreamOffset') {
        setCanStreamOffset(Number(nextValue));
      }
      setTimeout(function () {
        props._LocalEventEmitter.dispatch(moduleName, {
          dispatch: 'loadDefault'
        });
      }, 250);
    }
  });
  var askStreamOffsetPages = [askStreamOffset - 2, askStreamOffset - 1, askStreamOffset, askStreamOffset + 1, askStreamOffset + 2];
  var canStreamOffsetPages = [canStreamOffset - 2, canStreamOffset - 1, canStreamOffset, canStreamOffset + 1, canStreamOffset + 2];
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className, " ").concat(moduleName, "_Container")
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "Stream"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(moduleName, "_InternalContainer")
  }, /*#__PURE__*/_react["default"].createElement("section", null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "The Users below have asked to Stream on ".concat((_props$siteTitle = props.siteTitle) !== null && _props$siteTitle !== void 0 ? _props$siteTitle : 'your Platform'),
    placement: "bottom"
  }, /*#__PURE__*/_react["default"].createElement("h4", null, "Asking")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].listContainer),
    style: {
      maxHeight: '65vh'
    }
  }, askStream !== null && askStream !== void 0 && askStream.map ? askStream.map(function (m, i) {
    var _m$username, _m$username2;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_AdminModule["default"].itemContainer),
      key: i
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/p?u=".concat((_m$username = m.username) !== null && _m$username !== void 0 ? _m$username : m.id),
      className: "menuLinkSelector",
      style: {
        position: 'relative',
        alignSelf: 'center'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", null, (_m$username2 = m.username) !== null && _m$username2 !== void 0 ? _m$username2 : m.id)), /*#__PURE__*/_react["default"].createElement("button", {
      modif: "authorize_streamer",
      userid: "".concat(m.id),
      onClick: handleChangeStreamAuth
    }, "Allow"));
  }) : null), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "PaginationContainer"
  }, askStreamOffsetPages.map(function (m, i) {
    return m > -1 ? /*#__PURE__*/_react["default"].createElement("li", {
      className: "".concat(m == askStreamOffset ? 'ActivePage' : ''),
      scope: "askStreamOffset",
      key: i,
      i: m,
      onClick: handleSetPagination
    }, m + 1) : null;
  }))), /*#__PURE__*/_react["default"].createElement("section", null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "The Users below currently have access to Stream on ".concat((_props$siteTitle2 = props.siteTitle) !== null && _props$siteTitle2 !== void 0 ? _props$siteTitle2 : 'your Platform'),
    placement: "bottom"
  }, /*#__PURE__*/_react["default"].createElement("h4", null, "Streamers")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].listContainer),
    style: {
      maxHeight: '65vh'
    }
  }, canStream !== null && canStream !== void 0 && canStream.map ? canStream.map(function (m, i) {
    var _m$username3, _m$username4;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_AdminModule["default"].itemContainer),
      key: i
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/p?u=".concat((_m$username3 = m.username) !== null && _m$username3 !== void 0 ? _m$username3 : m.id),
      className: "menuLinkSelector",
      style: {
        position: 'relative',
        alignSelf: 'center'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", null, (_m$username4 = m.username) !== null && _m$username4 !== void 0 ? _m$username4 : m.id)), /*#__PURE__*/_react["default"].createElement("button", {
      modif: "disable_streamer",
      userid: "".concat(m.id),
      onClick: handleChangeStreamAuth
    }, "Disable"));
  }) : null), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "PaginationContainer"
  }, canStreamOffsetPages.map(function (m, i) {
    return m > -1 ? /*#__PURE__*/_react["default"].createElement("li", {
      className: "".concat(m == canStreamOffset ? 'ActivePage' : ''),
      scope: "canStreamOffset",
      key: i,
      i: m,
      onClick: handleSetPagination
    }, m + 1) : null;
  }))), /*#__PURE__*/_react["default"].createElement("section", null, /*#__PURE__*/_react["default"].createElement("h4", null, "Platform Stream Status"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "gradient_style_bg_3",
    style: {
      fontSize: '.9rem',
      fontWeight: 700,
      width: 'fit-content',
      padding: '0.125rem 5rem'
    }
  }, "LIVE"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.75rem',
      marginTop: '.25rem'
    }
  }, "Contact admin@tycoon.systems for any current Livestreaming Issues"))));
};
var _default = exports["default"] = Module;