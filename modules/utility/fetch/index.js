"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "FetchHandler", {
  enumerable: true,
  get: function get() {
    return _FetchHandler["default"];
  }
});
Object.defineProperty(exports, "fetchGet", {
  enumerable: true,
  get: function get() {
    return _fetch.fetchGet;
  }
});
Object.defineProperty(exports, "fetchPost", {
  enumerable: true,
  get: function get() {
    return _fetch.fetchPost;
  }
});
Object.defineProperty(exports, "retrieveUrlParams", {
  enumerable: true,
  get: function get() {
    return _fetch.retrieveUrlParams;
  }
});
var _fetch = require("./fetch");
var _FetchHandler = _interopRequireDefault(require("./FetchHandler"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }