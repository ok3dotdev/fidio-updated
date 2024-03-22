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
var _script = _interopRequireDefault(require("next/script"));
var _link = _interopRequireDefault(require("next/link"));
var _uuid = require("uuid");
var _AdminModule = _interopRequireDefault(require("./Admin.module.scss"));
var _BuildAdmin = _interopRequireDefault(require("./BuildAdmin"));
var _StreamAdmin = _interopRequireDefault(require("./StreamAdmin"));
var _PostAdmin = _interopRequireDefault(require("./PostAdmin"));
var _BillingAdmin = _interopRequireDefault(require("./BillingAdmin"));
var _StorageAdmin = _interopRequireDefault(require("./StorageAdmin"));
var _index = require("/modules/onboarding/signin/index.js");
var _util = require("/modules/util");
var _ = require(".");
var _admin = _interopRequireDefault(require("/customModules/admin"));
var Module = function Module(props) {
  var _props$_adminAuth;
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
    page = _React$useState8[0],
    setPage = _React$useState8[1];
  var Auth_Table = {
    BuildAdmin: ['full'],
    StreamAdmin: ['full', 'administrative'],
    PostAdmin: ['full', 'administrative', 'marketing', 'writer'],
    BillingAdmin: ['full', 'administrative'],
    StorageAdmin: ['full', 'administrative', 'marketing', 'writer']
  };
  var resolveAuth = function resolveAuth(page, auth) {
    var _auth$adminc;
    if (auth !== null && auth !== void 0 && (_auth$adminc = auth.adminc) !== null && _auth$adminc !== void 0 && _auth$adminc.access && Auth_Table[page].indexOf(auth.adminc.access) > -1) {
      return true;
    }
    return false;
  };
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      var id = (0, _uuid.v4)();
      setComponentId(id);
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  var handleSetPage = _react["default"].useCallback( /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(e) {
      var _e$target;
      var page, _e$children$;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            page = e === null || e === void 0 || (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.getAttribute('modif');
            if (!page && e !== null && e !== void 0 && e.children && e !== null && e !== void 0 && e.children[0]) {
              page = e === null || e === void 0 || (_e$children$ = e.children[0]) === null || _e$children$ === void 0 ? void 0 : _e$children$.getAttribute('modif');
            }
            if (page) {
              setPage(page);
            }
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  console.log(page, props);
  var doShowSignIn = !props || !props._loggedIn || (0, _util.isObjectEmpty)(props === null || props === void 0 ? void 0 : props._loggedIn) || !(props !== null && props !== void 0 && props._loggedIn.identifier);
  var isAdmin = (props === null || props === void 0 || (_props$_adminAuth = props._adminAuth) === null || _props$_adminAuth === void 0 || (_props$_adminAuth = _props$_adminAuth.adminc) === null || _props$_adminAuth === void 0 ? void 0 : _props$_adminAuth.admin) && (props === null || props === void 0 ? void 0 : props._loggedIn);
  console.log(isAdmin);
  var paintCustomAdmin = function paintCustomAdmin(useComponent) {
    if (useComponent && useComponent[1] && typeof useComponent[1] === 'function') {
      var UseComponentDom = useComponent[1];
      return /*#__PURE__*/_react["default"].createElement(UseComponentDom, props);
    }
    return /*#__PURE__*/_react["default"].createElement("div", null);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className, " ").concat(_AdminModule["default"].container, " Admin_Container")
  }, /*#__PURE__*/_react["default"].createElement(_script["default"], {
    src: "https://d2zsu4v7czjhvo.cloudfront.net/all/quill/1.3.6/quill.min.js"
  }), /*#__PURE__*/_react["default"].createElement("link", {
    href: "https://d2zsu4v7czjhvo.cloudfront.net/all/quill/1.3.6/quill.snow.css",
    rel: "stylesheet"
  }), props !== null && props !== void 0 && props._LocalEventEmitter ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(doShowSignIn && !isAdmin ? 'simpleCenter' : '')
  }, /*#__PURE__*/_react["default"].createElement(_index.SignIn, props), /*#__PURE__*/_react["default"].createElement(_index.Username, props)) : null, isAdmin ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].internalContainer, " Admin_InternalContainer")
  }, /*#__PURE__*/_react["default"].createElement(_.Banner, props), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].bodyContainer, " Admin_BodyContainer")
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "".concat(_AdminModule["default"].adminMenuContainer, " Admin_MenuContainer")
  }, resolveAuth('StreamAdmin', props._adminAuth) ? /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleSetPage,
    modif: "stream"
  }, "Stream")) : null, resolveAuth('PostAdmin', props._adminAuth) ? /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleSetPage,
    modif: "post"
  }, "Post")) : null, resolveAuth('StorageAdmin', props._adminAuth) ? /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleSetPage,
    modif: "storage"
  }, "Storage")) : null, resolveAuth('BuildAdmin', props._adminAuth) ? /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleSetPage,
    modif: "build"
  }, "Build")) : null, resolveAuth('BillingAdmin', props._adminAuth) ? /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleSetPage,
    modif: "billing"
  }, "Billing")) : null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("button", null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/documentation"
  }, "Documentation")))), Object.entries(_admin["default"]).length > 0 ? /*#__PURE__*/_react["default"].createElement("ul", {
    className: "".concat(_AdminModule["default"].adminMenuContainer, " ").concat(_AdminModule["default"].adminMenuContainerCustom, " Admin_MenuContainerCustom")
  }, Object.entries(_admin["default"]).map(function (m, i) {
    var _m$, _m$2;
    return /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("button", {
      onClick: handleSetPage,
      modif: m[0]
    }, (_m$ = m[0]) !== null && _m$ !== void 0 && _m$.slice(1, m[0].length) && ((_m$2 = m[0]) === null || _m$2 === void 0 ? void 0 : _m$2.length) > 1 ? m[0].charAt(0).toUpperCase() + m[0].slice(1, m[0].length) : m[0]));
  })) : null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].contentBodyContainer, " Admin_ContentBodyContainer")
  }, page ? page === 'build' && resolveAuth('BuildAdmin', props._adminAuth) ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_BuildAdmin["default"], props)) : page === 'stream' && resolveAuth('StreamAdmin', props._adminAuth) ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_StreamAdmin["default"], props)) : page === 'post' && resolveAuth('PostAdmin', props._adminAuth) ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_PostAdmin["default"], props)) : page === 'billing' && resolveAuth('BillingAdmin', props._adminAuth) ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_BillingAdmin["default"], props)) : page === 'storage' && resolveAuth('StorageAdmin', props._adminAuth) ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_StorageAdmin["default"], props)) : Object.entries(_admin["default"]).findIndex(function (m) {
    return m[0] === page;
  }) > -1 // Leverage Custom Admin Pages
  ? paintCustomAdmin(Object.entries(_admin["default"]).find(function (m) {
    return m[0] === page;
  })) : null : null))) : null);
};
var _default = exports["default"] = Module;