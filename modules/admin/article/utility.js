"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publishArticle = exports.loadArticle = exports.deleteArticle = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _fetch = require("../../utility/fetch");
var loadArticle = exports.loadArticle = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(props, id, editorRef, titleRef, groupsRef, tagsRef, setUseGroups, setUseTags, setPublished, setApproved, approvedRef, setMeta, setInHtmlImages) {
    var body, res, data, delta;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          if (props.fetchBusy) {
            _context.next = 28;
            break;
          }
          props.setFetchBusy(true);
          setTimeout(function () {
            props.setFetchBusy(false);
          }, 10000);
          if (!id) {
            _context.next = 28;
            break;
          }
          body = {
            domainKey: props.domainKey,
            hash: props._loggedIn.hash,
            identifier: props._loggedIn.identifier,
            id: id
          };
          _context.next = 8;
          return (0, _fetch.fetchPost)(props.apiUrl + '/a/getarticle', null, null, body);
        case 8:
          res = _context.sent;
          if (res) {
            _context.next = 14;
            break;
          }
          props.setFetchBusy(false);
          return _context.abrupt("return", false);
        case 14:
          if (!res.hasOwnProperty('status')) {
            _context.next = 28;
            break;
          }
          props.setFetchBusy(false);
          if (!(res.status == "disauthenticated")) {
            _context.next = 21;
            break;
          }
          logout();
          return _context.abrupt("return", "disauthenticated");
        case 21:
          if (!(res.status == "failed")) {
            _context.next = 25;
            break;
          }
          return _context.abrupt("return", false);
        case 25:
          if (!(res.status == "success")) {
            _context.next = 28;
            break;
          }
          if (res !== null && res !== void 0 && res.data) {
            data = res.data;
            if (data.contents && JSON.parse(data.contents)) {
              delta = editorRef.current.clipboard.convert(JSON.parse(data.contents));
              editorRef.current.setContents(delta, 'silent');
            }
            if (data.title) {
              titleRef.current.value = data.title;
            }
            if (data.groups) {
              groupsRef.current.value = data.groups.join(' ');
              setUseGroups(data.groups);
            }
            if (data.tags) {
              tagsRef.current.value = data.tags.join(' ');
              setUseTags(data.tags);
            }
            if (Object.prototype.hasOwnProperty.call(data, 'approved')) {
              setApproved(data.approved);
              if (approvedRef !== null && approvedRef !== void 0 && approvedRef.current) {
                approvedRef.current.checked = data.approved;
              }
            }
            if (data.meta) {
              setMeta(data.meta);
            }
            if (data.images) {
              setInHtmlImages(data.images);
            }
            setPublished(res.data);
          }
          return _context.abrupt("return", res);
        case 28:
          _context.next = 34;
          break;
        case 30:
          _context.prev = 30;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          props.setFetchBusy(false);
        case 34:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 30]]);
  }));
  return function loadArticle(_x, _x2, _x3, _x4, _x5, _x6, _x7, _x8, _x9, _x10, _x11, _x12, _x13) {
    return _ref.apply(this, arguments);
  };
}();
var publishArticle = exports.publishArticle = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(props, published, titleRef, useGroups, useTags, setUseTags, setUseGroups, tagsRef, groupsRef, editorRef, meta, setDidPublishThisSession, setPublished, loadDefault, useDefaultText, approved, setApproved, approvedRef, inHtmlImages) {
    var safeContents, body, res;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          if (props.fetchBusy) {
            _context2.next = 30;
            break;
          }
          props.setFetchBusy(true);
          setTimeout(function () {
            props.setFetchBusy(false);
          }, 10000);
          safeContents = editorRef.current.root.innerHTML;
          if (!safeContents) {
            _context2.next = 30;
            break;
          }
          body = {
            domainKey: props.domainKey,
            hash: props._loggedIn.hash,
            identifier: props._loggedIn.identifier,
            published: published,
            title: titleRef.current.value,
            contents: safeContents,
            groups: useGroups,
            tags: useTags,
            images: inHtmlImages,
            meta: meta,
            approved: approved
          };
          _context2.next = 9;
          return (0, _fetch.fetchPost)(props.apiUrl + '/a/publisharticle', null, null, body);
        case 9:
          res = _context2.sent;
          if (res) {
            _context2.next = 15;
            break;
          }
          props.setFetchBusy(false);
          return _context2.abrupt("return", false);
        case 15:
          if (!res.hasOwnProperty('status')) {
            _context2.next = 30;
            break;
          }
          props.setFetchBusy(false);
          if (!(res.status == "disauthenticated")) {
            _context2.next = 22;
            break;
          }
          logout();
          return _context2.abrupt("return", "disauthenticated");
        case 22:
          if (!(res.status == "failed")) {
            _context2.next = 26;
            break;
          }
          return _context2.abrupt("return", false);
        case 26:
          if (!(res.status == "success")) {
            _context2.next = 30;
            break;
          }
          console.log(res);
          if (res !== null && res !== void 0 && res.published) {
            setUseTags(null);
            setUseGroups(null);
            tagsRef !== null && tagsRef !== void 0 && tagsRef.current ? tagsRef.current.value = '' : null;
            groupsRef !== null && groupsRef !== void 0 && groupsRef.current ? groupsRef.current.value = '' : null;
            if (editorRef !== null && editorRef !== void 0 && editorRef.current) {
              editorRef.current.setContents([{
                insert: useDefaultText
              }]);
            }
            titleRef !== null && titleRef !== void 0 && titleRef.current ? titleRef.current.value = '' : null;
            localStorage.setItem('cached_post_admin', null);
            if (approvedRef !== null && approvedRef !== void 0 && approvedRef.current) {
              approvedRef.current.checked = true;
            }
            if (setApproved) {
              setApproved(true);
            }
            setDidPublishThisSession(true);
            setPublished(res.published);
            loadDefault();
          }
          return _context2.abrupt("return", res);
        case 30:
          _context2.next = 36;
          break;
        case 32:
          _context2.prev = 32;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          props.setFetchBusy(false);
        case 36:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 32]]);
  }));
  return function publishArticle(_x14, _x15, _x16, _x17, _x18, _x19, _x20, _x21, _x22, _x23, _x24, _x25, _x26, _x27, _x28, _x29, _x30, _x31, _x32) {
    return _ref2.apply(this, arguments);
  };
}();
var deleteArticle = exports.deleteArticle = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(props, published, titleRef, setUseTags, setUseGroups, tagsRef, groupsRef, editorRef, setPublished, loadDefault, useDefaultText) {
    var body, res;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          if (props.fetchBusy) {
            _context3.next = 36;
            break;
          }
          props.setFetchBusy(true);
          setTimeout(function () {
            props.setFetchBusy(false);
          }, 10000);
          if (!(published !== null && published !== void 0 && published.id)) {
            _context3.next = 36;
            break;
          }
          body = {
            domainKey: props.domainKey,
            hash: props._loggedIn.hash,
            identifier: props._loggedIn.identifier,
            id: published.id
          };
          _context3.next = 8;
          return (0, _fetch.fetchPost)(props.apiUrl + '/a/deletearticle', null, null, body);
        case 8:
          res = _context3.sent;
          if (res) {
            _context3.next = 14;
            break;
          }
          props.setFetchBusy(false);
          return _context3.abrupt("return", false);
        case 14:
          if (!res.hasOwnProperty('status')) {
            _context3.next = 36;
            break;
          }
          props.setFetchBusy(false);
          if (!(res.status == "disauthenticated")) {
            _context3.next = 21;
            break;
          }
          logout();
          return _context3.abrupt("return", "disauthenticated");
        case 21:
          if (!(res.status == "failed")) {
            _context3.next = 25;
            break;
          }
          return _context3.abrupt("return", false);
        case 25:
          if (!(res.status == "success")) {
            _context3.next = 36;
            break;
          }
          setUseTags(null);
          setUseGroups(null);
          tagsRef !== null && tagsRef !== void 0 && tagsRef.current ? tagsRef.current.value = '' : null;
          groupsRef !== null && groupsRef !== void 0 && groupsRef.current ? groupsRef.current.value = '' : null;
          if (editorRef !== null && editorRef !== void 0 && editorRef.current) {
            editorRef.current.setContents([{
              insert: useDefaultText
            }]);
          }
          titleRef !== null && titleRef !== void 0 && titleRef.current ? titleRef.current.value = '' : null;
          localStorage.setItem('cached_post_admin', null);
          setPublished(false);
          loadDefault();
          return _context3.abrupt("return", res);
        case 36:
          _context3.next = 41;
          break;
        case 38:
          _context3.prev = 38;
          _context3.t0 = _context3["catch"](0);
          props.setFetchBusy(false);
        case 41:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 38]]);
  }));
  return function deleteArticle(_x33, _x34, _x35, _x36, _x37, _x38, _x39, _x40, _x41, _x42, _x43) {
    return _ref3.apply(this, arguments);
  };
}();