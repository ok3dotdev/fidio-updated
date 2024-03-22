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
var _uuid = require("uuid");
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _AdminModule = _interopRequireDefault(require("./Admin.module.scss"));
var _fetch = require("../utility/fetch");
var allowedTypes = ['application/gzip', 'application/x-gzip'];
var Module = function Module(props) {
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
    msg1 = _React$useState8[0],
    setMsg1 = _React$useState8[1];
  var _React$useState9 = _react["default"].useState(null),
    _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
    msg2 = _React$useState10[0],
    setMsg2 = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(null),
    _React$useState12 = (0, _slicedToArray2["default"])(_React$useState11, 2),
    msg3 = _React$useState12[0],
    setMsg3 = _React$useState12[1];
  var _React$useState13 = _react["default"].useState(null),
    _React$useState14 = (0, _slicedToArray2["default"])(_React$useState13, 2),
    msg4 = _React$useState14[0],
    setMsg4 = _React$useState14[1];
  var _React$useState15 = _react["default"].useState(null),
    _React$useState16 = (0, _slicedToArray2["default"])(_React$useState15, 2),
    msg5 = _React$useState16[0],
    setMsg5 = _React$useState16[1];
  var _React$useState17 = _react["default"].useState(null),
    _React$useState18 = (0, _slicedToArray2["default"])(_React$useState17, 2),
    msg6 = _React$useState18[0],
    setMsg6 = _React$useState18[1];
  var _React$useState19 = _react["default"].useState(null),
    _React$useState20 = (0, _slicedToArray2["default"])(_React$useState19, 2),
    msg7 = _React$useState20[0],
    setMsg7 = _React$useState20[1];
  var _React$useState21 = _react["default"].useState(null),
    _React$useState22 = (0, _slicedToArray2["default"])(_React$useState21, 2),
    packages = _React$useState22[0],
    setPackages = _React$useState22[1];
  var _React$useState23 = _react["default"].useState(-1),
    _React$useState24 = (0, _slicedToArray2["default"])(_React$useState23, 2),
    lastFetchPackages = _React$useState24[0],
    setLastFetchPackages = _React$useState24[1];
  var buildInput = _react["default"].useRef();
  var buildInput2 = _react["default"].useRef();
  var installPackageRef = _react["default"].useRef();
  var uninstallPackageRef = _react["default"].useRef();
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      var id = (0, _uuid.v4)();
      setComponentId(id);
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  _react["default"].useEffect(function () {
    if (lastFetchPackages === -1 && !packages && props.apiUrl && props.domainKey && props._loggedIn) {
      setLastFetchPackages(new Date().getTime());
      getPackages(props.apiUrl, props.domainKey, props._loggedIn);
    }
  }, [componentId, props.apiUrl, props.domainKey, props._loggedIn]);
  var getPackages = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(uri, domainKey, user) {
      var body, res, stringified;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(user.identifier && user.hash && domainKey)) {
              _context.next = 27;
              break;
            }
            body = {
              identifier: user.identifier,
              hash: user.hash,
              domainKey: domainKey
            };
            _context.next = 4;
            return (0, _fetch.fetchPost)(uri + '/a/getpackages', null, null, body);
          case 4:
            res = _context.sent;
            if (res) {
              _context.next = 9;
              break;
            }
            return _context.abrupt("return", false);
          case 9:
            if (!res.hasOwnProperty('status')) {
              _context.next = 24;
              break;
            }
            if (!(res.status == "disauthenticated")) {
              _context.next = 15;
              break;
            }
            logout();
            return _context.abrupt("return", "disauthenticated");
          case 15:
            if (!(res.status == "failed")) {
              _context.next = 19;
              break;
            }
            return _context.abrupt("return", false);
          case 19:
            if (!(res.status == "success" && res.data)) {
              _context.next = 24;
              break;
            }
            console.log(res.data);
            stringified = res.data.toString();
            if (stringified && JSON.parse(stringified)) {
              setPackages(JSON.parse(stringified));
            }
            return _context.abrupt("return", res);
          case 24:
            return _context.abrupt("return", false);
          case 27:
            return _context.abrupt("return", false);
          case 28:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getPackages(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
  var installPackage = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(uri, domainKey, user, pkg) {
      var options,
        r,
        body,
        res,
        _res$report,
        _res$report2,
        _args2 = arguments;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            options = _args2.length > 4 && _args2[4] !== undefined ? _args2[4] : {};
            setPageError(null);
            if (!(user.identifier && user.hash && domainKey)) {
              _context2.next = 32;
              break;
            }
            if (props.setFetchBusy) {
              props.setFetchBusy(true);
              r = setTimeout(function () {
                props.setFetchBusy(false);
              }, 10000);
            }
            if (options !== null && options !== void 0 && options.uninstall) {
              setMsg4(null);
            } else {
              setMsg3(null);
            }
            body = {
              identifier: user.identifier,
              hash: user.hash,
              username: user.username,
              domainKey: domainKey,
              "package": pkg,
              options: options
            };
            _context2.next = 8;
            return (0, _fetch.fetchPost)(uri + '/a/installpackage', null, null, body);
          case 8:
            res = _context2.sent;
            clearTimeout(r);
            props.setFetchBusy(false);
            if (res) {
              _context2.next = 15;
              break;
            }
            return _context2.abrupt("return", false);
          case 15:
            if (!res.hasOwnProperty('status')) {
              _context2.next = 29;
              break;
            }
            if (!(res.status == "disauthenticated")) {
              _context2.next = 21;
              break;
            }
            logout();
            return _context2.abrupt("return", "disauthenticated");
          case 21:
            if (!(res.status == "failed")) {
              _context2.next = 26;
              break;
            }
            if (res.data) {
              if (options !== null && options !== void 0 && options.uninstall) {
                setMsg4(res.data);
              } else {
                setMsg3(res.data);
              }
            }
            return _context2.abrupt("return", false);
          case 26:
            if (!(res.status == "success" && res.data)) {
              _context2.next = 29;
              break;
            }
            if (options !== null && options !== void 0 && options.uninstall) {
              setMsg4((_res$report = res.report) !== null && _res$report !== void 0 ? _res$report : 'done');
            } else {
              setMsg3((_res$report2 = res.report) !== null && _res$report2 !== void 0 ? _res$report2 : 'done');
            }
            return _context2.abrupt("return", res);
          case 29:
            return _context2.abrupt("return", false);
          case 32:
            return _context2.abrupt("return", false);
          case 33:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function installPackage(_x4, _x5, _x6, _x7) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleNewBuild = _react["default"].useCallback(function (e) {
    try {
      console.log(e.target);
      setPageError(null);
      if (e && e.target && e.target.files) {
        var files = e.target.files;
        if (files && files.length > 0) {
          var filesRenamed = Array.from(files).slice(0, files.length > 1 ? 1 : files.length).filter(function (m) {
            var goodType = m.type && allowedTypes.indexOf(m.type) > -1;
            if (!goodType) {
              setPageError('Some types that were uploaded were not allowed. Please check that you are uploading the appropriate types for any file upload');
            }
            return goodType;
          }).map(function (m) {
            var blob = m.slice(0, m.size, m.type);
            return new File([blob], "".concat((0, _uuid.v4)(), ".tar.gz"), {
              type: m.type
            });
          });
          var f = /*#__PURE__*/function () {
            var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
              var _e$target, formData, modif, data;
              return _regenerator["default"].wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(!props.fetchBusy && props.apiUrl && props.domainKey && props._loggedIn)) {
                      _context3.next = 20;
                      break;
                    }
                    formData = new FormData();
                    if (filesRenamed) {
                      filesRenamed.forEach(function (file) {
                        formData.append("file", file);
                      });
                    }
                    formData.append('domainKey', props.domainKey);
                    formData.append('hash', props._loggedIn.hash);
                    formData.append('identifier', props._loggedIn.identifier);
                    if (props.setFetchBusy) {
                      props.setFetchBusy(true);
                      setTimeout(function () {
                        props.setFetchBusy(false);
                      }, 30000);
                    }
                    if (e !== null && e !== void 0 && (_e$target = e.target) !== null && _e$target !== void 0 && _e$target.getAttribute('modif')) {
                      modif = e.target.getAttribute('modif');
                    }
                    if (!(modif && modif === 'public')) {
                      _context3.next = 14;
                      break;
                    }
                    _context3.next = 11;
                    return doUploadBuildPublic(props.apiUrl, props.domainKey, props._loggedIn, formData);
                  case 11:
                    _context3.t0 = _context3.sent;
                    _context3.next = 17;
                    break;
                  case 14:
                    _context3.next = 16;
                    return doUploadBuild(props.apiUrl, props.domainKey, props._loggedIn, formData);
                  case 16:
                    _context3.t0 = _context3.sent;
                  case 17:
                    data = _context3.t0;
                    if (data) {
                      if (props.setFetchBusy) {
                        props.setFetchBusy(false);
                      }
                      if (data.status === 'success') {
                        if (modif && modif === 'public') {
                          setMsg2("Build Uploaded at ".concat(new Date().toDateString(), " ").concat(new Date().toTimeString()));
                        } else {
                          setMsg1("Build Uploaded at ".concat(new Date().toDateString(), " ").concat(new Date().toTimeString()));
                        }
                      }
                    }
                    if (buildInput.current) {
                      buildInput.current.value = '';
                    }
                  case 20:
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
  var doUploadBuild = /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(uri, domainKey, user, body) {
      var res;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (!(user.identifier && user.hash && domainKey)) {
              _context4.next = 23;
              break;
            }
            _context4.next = 3;
            return (0, _fetch.fetchPost)(uri + '/a/uploadbuild', null, null, body, {
              formData: true
            });
          case 3:
            res = _context4.sent;
            if (res) {
              _context4.next = 8;
              break;
            }
            return _context4.abrupt("return", false);
          case 8:
            if (!res.hasOwnProperty('status')) {
              _context4.next = 20;
              break;
            }
            if (!(res.status == "disauthenticated")) {
              _context4.next = 14;
              break;
            }
            logout();
            return _context4.abrupt("return", "disauthenticated");
          case 14:
            if (!(res.status == "failed")) {
              _context4.next = 18;
              break;
            }
            return _context4.abrupt("return", false);
          case 18:
            if (!(res.status == "success")) {
              _context4.next = 20;
              break;
            }
            return _context4.abrupt("return", res);
          case 20:
            return _context4.abrupt("return", false);
          case 23:
            return _context4.abrupt("return", false);
          case 24:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function doUploadBuild(_x8, _x9, _x10, _x11) {
      return _ref4.apply(this, arguments);
    };
  }();
  var doUploadBuildPublic = /*#__PURE__*/function () {
    var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(uri, domainKey, user, body) {
      var res;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            if (!(user.identifier && user.hash && domainKey)) {
              _context5.next = 23;
              break;
            }
            _context5.next = 3;
            return (0, _fetch.fetchPost)(uri + '/a/uploadbuildpublic', null, null, body, {
              formData: true
            });
          case 3:
            res = _context5.sent;
            if (res) {
              _context5.next = 8;
              break;
            }
            return _context5.abrupt("return", false);
          case 8:
            if (!res.hasOwnProperty('status')) {
              _context5.next = 20;
              break;
            }
            if (!(res.status == "disauthenticated")) {
              _context5.next = 14;
              break;
            }
            logout();
            return _context5.abrupt("return", "disauthenticated");
          case 14:
            if (!(res.status == "failed")) {
              _context5.next = 18;
              break;
            }
            return _context5.abrupt("return", false);
          case 18:
            if (!(res.status == "success")) {
              _context5.next = 20;
              break;
            }
            return _context5.abrupt("return", res);
          case 20:
            return _context5.abrupt("return", false);
          case 23:
            return _context5.abrupt("return", false);
          case 24:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function doUploadBuildPublic(_x12, _x13, _x14, _x15) {
      return _ref5.apply(this, arguments);
    };
  }();
  var handleUploadNewBuild = _react["default"].useCallback(function (e) {
    var _e$target2;
    console.log(e.target);
    if (e !== null && e !== void 0 && (_e$target2 = e.target) !== null && _e$target2 !== void 0 && _e$target2.getAttribute('modif')) {
      var modif = e.target.getAttribute('modif');
      if (modif) {
        if (modif === 'public' && buildInput2.current) {
          buildInput2.current.click();
        }
      }
    } else if (buildInput.current) {
      buildInput.current.click(); // Prompt file upload
    }
  });
  var handleInstall = _react["default"].useCallback(function (e) {
    var _e$target3, _installPackageRef$cu;
    console.log(e);
    if (e !== null && e !== void 0 && (_e$target3 = e.target) !== null && _e$target3 !== void 0 && _e$target3.getAttribute('modif')) {
      var modif = e.target.getAttribute('modif');
      if (modif) {
        var _uninstallPackageRef$;
        if (modif === 'uninstall' && uninstallPackageRef !== null && uninstallPackageRef !== void 0 && (_uninstallPackageRef$ = uninstallPackageRef.current) !== null && _uninstallPackageRef$ !== void 0 && _uninstallPackageRef$.value) {
          installPackage(props.apiUrl, props.domainKey, props._loggedIn, uninstallPackageRef.current.value, {
            uninstall: true
          });
        }
      }
    } else if (installPackageRef !== null && installPackageRef !== void 0 && (_installPackageRef$cu = installPackageRef.current) !== null && _installPackageRef$cu !== void 0 && _installPackageRef$cu.value) {
      installPackage(props.apiUrl, props.domainKey, props._loggedIn, installPackageRef.current.value);
    }
  });
  var daemonBuild = /*#__PURE__*/function () {
    var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(uri, domainKey, user) {
      var r, body, res;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            setPageError(null);
            if (!(user.identifier && user.hash && domainKey)) {
              _context6.next = 31;
              break;
            }
            if (props.setFetchBusy) {
              props.setFetchBusy(true);
              r = setTimeout(function () {
                props.setFetchBusy(false);
              }, 10000);
            }
            setMsg7(null);
            body = {
              identifier: user.identifier,
              hash: user.hash,
              username: user.username,
              domainKey: domainKey
            };
            _context6.next = 7;
            return (0, _fetch.fetchPost)(uri + '/a/daemonbuild', null, null, body);
          case 7:
            res = _context6.sent;
            clearTimeout(r);
            props.setFetchBusy(false);
            if (res) {
              _context6.next = 14;
              break;
            }
            return _context6.abrupt("return", false);
          case 14:
            if (!res.hasOwnProperty('status')) {
              _context6.next = 28;
              break;
            }
            if (!(res.status == "disauthenticated")) {
              _context6.next = 20;
              break;
            }
            logout();
            return _context6.abrupt("return", "disauthenticated");
          case 20:
            if (!(res.status == "failed")) {
              _context6.next = 25;
              break;
            }
            setMsg7('Daemon Failed');
            return _context6.abrupt("return", false);
          case 25:
            if (!(res.status == "success" && res.data)) {
              _context6.next = 28;
              break;
            }
            setMsg7('Attempted to Daemon Build. Refresh on another tab to check');
            return _context6.abrupt("return", res);
          case 28:
            return _context6.abrupt("return", false);
          case 31:
            return _context6.abrupt("return", false);
          case 32:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return function daemonBuild(_x16, _x17, _x18) {
      return _ref6.apply(this, arguments);
    };
  }();
  var handleDaemonBuild = _react["default"].useCallback(function (e) {
    daemonBuild(props.apiUrl, props.domainKey, props._loggedIn);
  });
  var handleSetCurrentBuildAsSafe = _react["default"].useCallback(function (e) {
    console.log(e);
  });
  var handleRecover = _react["default"].useCallback(function (e) {
    console.log(e);
  });
  var handleCloseError = function handleCloseError() {
    setPageError(null);
  };
  var strippedUrl = props !== null && props !== void 0 && props.domainUrl ? props.domainUrl.replace(/(?:www\.)?/, '') : '';
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className, " Admin_Build_Container")
  }, pageError ? /*#__PURE__*/_react["default"].createElement("p", {
    className: "error",
    style: {
      marginTop: '.5rem'
    },
    onClick: handleCloseError
  }, pageError) : null, /*#__PURE__*/_react["default"].createElement("h3", null, "Build"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "Admin_Build_InternalContainer"
  }, /*#__PURE__*/_react["default"].createElement("section", null, /*#__PURE__*/_react["default"].createElement("input", {
    type: "file",
    style: {
      display: 'none'
    },
    ref: buildInput,
    onChange: handleNewBuild
  }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 'fit-content'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Upload your new build in .next.tar.gz format. Use makebuild script to create new build",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '.125rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("b", null, "Push New Build")))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleUploadNewBuild
  }, "Upload Build"), msg1 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "admin_update"
  }, msg1) : null))), /*#__PURE__*/_react["default"].createElement("section", null, /*#__PURE__*/_react["default"].createElement("input", {
    type: "file",
    style: {
      display: 'none'
    },
    ref: buildInput2,
    onChange: handleNewBuild,
    modif: "public"
  }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 'fit-content'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Upload your new public folder in public.tar.gz format. Use makebuild script to create public folder tar",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '.125rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("b", null, "Push New Public Folder")))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleUploadNewBuild,
    modif: "public"
  }, "Upload Public Folder"), msg2 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "admin_update"
  }, msg2) : null))), /*#__PURE__*/_react["default"].createElement("section", null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 'fit-content'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Daemons current build uploaded to client server directory",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '.125rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("b", null, "Run Build")))), /*#__PURE__*/_react["default"].createElement("p", {
    className: "admin_prompt"
  }, "Caution: Running a bad build will bring down the platform immediately. Running new builds without having installed packages will cause the platform to be taken offline as well. This is temporary until platform at sys.", strippedUrl, " can be run to serve builds when ", props.domainUrl, " is offline."), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleDaemonBuild,
    modif: "public"
  }, "Deploy Build"), msg7 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "admin_update"
  }, msg7) : null))), /*#__PURE__*/_react["default"].createElement("section", null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 'fit-content'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Currently installed Packages",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '.125rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("b", null, "Installed Client Packages")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "admin_container",
    style: {
      maxHeight: '300px',
      overflow: 'auto'
    }
  }, packages !== null && packages !== void 0 && packages.dependencies && Object.entries(packages.dependencies) ? Object.entries(packages.dependencies).map(function (m, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex gap-p5",
      key: i
    }, /*#__PURE__*/_react["default"].createElement("div", null, m[0]), /*#__PURE__*/_react["default"].createElement("div", null, m[1]));
  }) : null))), /*#__PURE__*/_react["default"].createElement("section", null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 'fit-content'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Install NPM Package here. Use Package@Version syntax for specific Version if required. Request must be approved by repo if package not already whitelisted",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '.125rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("b", null, "Run Install")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].adminPair, " admin_pair")
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: "NPM Package",
    ref: installPackageRef
  }), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleInstall
  }, "Install")), msg3 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "admin_update"
  }, msg3) : null)), /*#__PURE__*/_react["default"].createElement("section", null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 'fit-content'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Will uninstall package referenced here. Ensure to upload new build before uninstalling packages that current build relies on. Otherwise platform will go down",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '.125rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("b", null, "Run Uninstall")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].adminPair, " admin_pair")
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: "NPM Package",
    ref: uninstallPackageRef
  }), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleInstall,
    modif: "uninstall"
  }, "Uninstall")), msg4 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "admin_update"
  }, msg4) : null))));
};
var _default = exports["default"] = Module;