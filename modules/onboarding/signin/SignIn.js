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
var _router = require("next/router");
var _SignIn = require("../../utility/onboarding/SignIn");
var _index = require("../../utility/payment/index");
var _fetch = require("../../utility/fetch");
// import RegisterUsername from './RegisterUsername.js'

var Module = function Module(props) {
  var _props$maxWidth;
  var router = (0, _router.useRouter)();
  var query = router.query,
    asPath = router.asPath;
  var googleSignIn = _react["default"].useRef();
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(false),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    didCheckAdminAuth = _React$useState4[0],
    setDidCheckAdminAuth = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(false),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    registerUsernameOn = _React$useState6[0],
    setRegisterUsernameOn = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(false),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    googleSignInRendered = _React$useState8[0],
    googleSignInRenderedSet = _React$useState8[1];
  var _React$useState9 = _react["default"].useState(false),
    _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
    hideGoogleSignIn = _React$useState10[0],
    setHideGoogleSignIn = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(null),
    _React$useState12 = (0, _slicedToArray2["default"])(_React$useState11, 2),
    pageError = _React$useState12[0],
    setPageError = _React$useState12[1];
  _react["default"].useEffect(function () {
    setComponentDidMount(true);
  }, [componentDidMount]);
  props._LocalEventEmitter.unsubscribe('showSignIn');
  props._LocalEventEmitter.subscribe('showSignIn', function (e) {
    setHideGoogleSignIn(false);
    buildButtonAndTryPrompt(500);
  });
  props._LocalEventEmitter.unsubscribe('checkAdminAuth');
  props._LocalEventEmitter.subscribe('checkAdminAuth', function (e) {
    handleGetAdminAuth(true);
  });
  _react["default"].useEffect(function () {
    var muteLoginErr = function muteLoginErr() {
      setPageError(null);
    };
    document.addEventListener('mute-login-error', muteLoginErr, {
      once: true
    });
  }, []);
  var buildLoginAndUpdate = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
      var status;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _SignIn.attemptThirdPartySignIn)(data, props.apiUrl, props.domainKey, props._LocalEventEmitter, props._setAdminAuth);
          case 2:
            status = _context.sent;
            if (status && status.hasOwnProperty('username')) {
              if (!status.username) {
                setRegisterUsernameOn(true);
              }
            }
            console.log(status);
            if (typeof status !== 'error') {
              (0, _index.setStripeSecretData)(props.apiUrl, props.domainKey, status, props._setStripeSecret);
              props._setLoggedIn(status);
              console.log(props.redirectOnAuth, status.username);
              if (asPath === '/admin') {
                setTimeout(function () {
                  props._LocalEventEmitter.dispatch('checkAdminAuth', {});
                }, 1000);
              }
              if (props.redirectOnAuth && status.username && asPath !== props.redirectOnAuth) {
                router.push(props.redirectOnAuth);
              } else if (props.redirectOnAuth && status.username && asPath === props.redirectOnAuth) {
                router.reload(props.redirectOnAuth);
              }
              setTimeout(function () {
                setPageError(null);
              }, 20000);
              setTimeout(function () {
                setHideGoogleSignIn(true);
              });
            }
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function buildLoginAndUpdate(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var buildButtonAndTryPrompt = function buildButtonAndTryPrompt(delay) {
    try {
      if (!googleSignInRendered) {
        var googleBtn = {
          theme: 'outline',
          size: 'medium',
          logo_alignment: 'center'
        };
        setTimeout(function () {
          try {
            var signInStatus = (0, _SignIn.checkSignedIn)();
            if (!signInStatus) {
              google.accounts.id.renderButton(googleSignIn.current, googleBtn);
              googleSignInRenderedSet(true);
              google.accounts.id.prompt(function (notification) {
                console.log('on prompt notification', notification);
              });
            } else {
              props._setLoggedIn(signInStatus);
            }
          } catch (err) {
            setTimeout(function () {
              try {
                var _signInStatus = (0, _SignIn.checkSignedIn)();
                if (!_signInStatus) {
                  // @ts-ignore
                  google.accounts.id.renderButton(googleSignIn.current, googleBtn);
                  googleSignInRenderedSet(true);
                  // @ts-ignore
                  google.accounts.id.prompt(function (notification) {
                    console.log('on prompt notification', notification);
                  });
                } else {
                  props._setLoggedIn(_signInStatus);
                }
              } catch (err) {
                console.log(err); // fail silently
              }
            }, 10000);
          }
        }, delay);
      }
    } catch (err) {
      console.log(err); // fail silently
    }
  };

  // Register google sign in button. Necessary for register CC and login
  _react["default"].useEffect(function () {
    document.removeEventListener('thirdparty-signin', buildLoginAndUpdate); // Without this a request for Sign in can fire multiple times
    document.addEventListener('thirdparty-signin', buildLoginAndUpdate);
    buildButtonAndTryPrompt(500);
  }, []);
  var getAdminAuth = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(uri, identifier, hash, domainKey) {
      var res;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!identifier) {
              _context2.next = 20;
              break;
            }
            _context2.next = 3;
            return (0, _fetch.fetchPost)(uri + '/m/checkadminauth', null, null, {
              identifier: identifier,
              hash: hash,
              domainKey: domainKey
            });
          case 3:
            res = _context2.sent;
            if (res) {
              _context2.next = 8;
              break;
            }
            return _context2.abrupt("return", false);
          case 8:
            if (!res.hasOwnProperty('status')) {
              _context2.next = 20;
              break;
            }
            if (!(res.status == "disauthenticated")) {
              _context2.next = 14;
              break;
            }
            logout();
            return _context2.abrupt("return", "disauthenticated");
          case 14:
            if (!(res.status == "failed")) {
              _context2.next = 18;
              break;
            }
            return _context2.abrupt("return", false);
          case 18:
            if (!(res.status == "success")) {
              _context2.next = 20;
              break;
            }
            return _context2.abrupt("return", res);
          case 20:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function getAdminAuth(_x2, _x3, _x4, _x5) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Handles check to see if user is admin
   * @param {*} force 
   */
  var handleGetAdminAuth = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(force) {
      var _props$_loggedIn, _props$_loggedIn2, res;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!(props !== null && props !== void 0 && props.path.match(/\/admin/) && !didCheckAdminAuth || force)) {
              _context3.next = 8;
              break;
            }
            console.log(props);
            if (!(props !== null && props !== void 0 && (_props$_loggedIn = props._loggedIn) !== null && _props$_loggedIn !== void 0 && _props$_loggedIn.identifier && props !== null && props !== void 0 && (_props$_loggedIn2 = props._loggedIn) !== null && _props$_loggedIn2 !== void 0 && _props$_loggedIn2.hash && props !== null && props !== void 0 && props.domainKey && !props._adminAuth && props !== null && props !== void 0 && props._setAdminAuth)) {
              _context3.next = 8;
              break;
            }
            setDidCheckAdminAuth(true);
            _context3.next = 6;
            return getAdminAuth(props.apiUrl, props._loggedIn.identifier, props._loggedIn.hash, props.domainKey);
          case 6:
            res = _context3.sent;
            if (res !== null && res !== void 0 && res.admin) {
              props._setAdminAuth(res.admin);
            }
          case 8:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function handleGetAdminAuth(_x6) {
      return _ref3.apply(this, arguments);
    };
  }();
  _react["default"].useEffect(function () {
    var _props$_loggedIn3, _props$_adminAuth;
    if (props !== null && props !== void 0 && (_props$_loggedIn3 = props._loggedIn) !== null && _props$_loggedIn3 !== void 0 && _props$_loggedIn3.identifier && props !== null && props !== void 0 && (_props$_adminAuth = props._adminAuth) !== null && _props$_adminAuth !== void 0 && _props$_adminAuth.userid && props._loggedIn.identifier !== props._adminAuth.userid) {
      props._setAdminAuth(null);
    }
  }, [props._loggedIn, props._adminAuth]);
  handleGetAdminAuth();
  var checkGoogleSignInIsLoaded = function checkGoogleSignInIsLoaded() {
    try {
      var container = document.getElementsByClassName('google-sign-in-btn');
      if (container && container[0]) {
        if (container[0].children.length > 0) {
          if (container[0].children[0]) {
            console.log(container[0].children[0]);
            return true;
          }
        }
      }
      return false;
    } catch (err) {
      // fail silently
      return false;
    }
  };
  var googleSignInIsLoaded = checkGoogleSignInIsLoaded();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.classNameAlways, " ").concat(props._loggedIn || !googleSignInIsLoaded ? '' : props.className)
  }, " ", /*#__PURE__*/_react["default"].createElement("div", {
    className: hideGoogleSignIn || !googleSignInIsLoaded ? "display-none" : null,
    style: {
      maxWidth: (_props$maxWidth = props.maxWidth) !== null && _props$maxWidth !== void 0 ? _props$maxWidth : '170px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: googleSignInRendered ? "googleSignInContainer googleSignInContainer-padding" : "googleSignInContainer"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g_id_signin google-sign-in-btn",
    ref: googleSignIn,
    "data-size": "medium",
    "data-logo_alignment": "center",
    "data-theme": "outline"
  }))), pageError ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      paddingLeft: 1 + 'rem',
      paddingRight: 1 + 'rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "googleSignInPromptSmall error errorBg"
  }, pageError)) : null);
};
var _default = exports["default"] = Module;