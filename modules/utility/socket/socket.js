"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendChat = exports.requestBanTable = exports.joinChat = exports.initialize = exports.attemptBanUserChat = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var initialize = exports.initialize = function initialize(_socket, loggedIn, dborigin) {
  if (_socket && loggedIn) {
    var payload = Object.assign(loggedIn, {
      dborigin: dborigin
    });
    _socket.emit('initialize', _objectSpread({}, payload));
    return true;
  } else {
    return false;
  }
};
var joinChat = exports.joinChat = function joinChat(_socket, loggedIn, dborigin, room) {
  var attempt = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  if (_socket && loggedIn && room) {
    var payload = Object.assign(loggedIn, {
      dborigin: dborigin,
      room: room,
      attempt: attempt
    });
    _socket.emit('join_chat', _objectSpread({}, payload));
    return true;
  } else {
    return false;
  }
};
var sendChat = exports.sendChat = function sendChat(_socket, loggedIn, dborigin, room, newChat, replyToId, replyToUsername) {
  if (_socket && loggedIn && room && newChat) {
    var payload = Object.assign(loggedIn, {
      dborigin: dborigin,
      room: room,
      newChat: newChat,
      replyToId: replyToId,
      replyToUsername: replyToUsername
    });
    _socket.emit('send_chat', _objectSpread({}, payload));
    return true;
  } else {
    return false;
  }
};
var attemptBanUserChat = exports.attemptBanUserChat = function attemptBanUserChat(_socket, loggedIn, dborigin, room, banId) {
  var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  if (_socket && loggedIn && room && banId) {
    var payload = Object.assign(loggedIn, {
      dborigin: dborigin,
      room: room,
      banId: banId,
      options: options
    });
    _socket.emit('attempt_ban_user_chat', _objectSpread({}, payload));
    return true;
  } else {
    return false;
  }
};
var requestBanTable = exports.requestBanTable = function requestBanTable(_socket, loggedIn, dborigin, room) {
  if (_socket && loggedIn && room) {
    var payload = Object.assign(loggedIn, {
      dborigin: dborigin,
      room: room
    });
    _socket.emit('request_ban_table', _objectSpread({}, payload));
    return true;
  } else {
    return false;
  }
};