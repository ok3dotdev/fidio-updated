"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendChat = exports.requestBanTable = exports.joinChat = exports.initialize = exports.attemptBanUserChat = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var initialize = function initialize(_socket, loggedIn, dborigin) {
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
exports.initialize = initialize;
var joinChat = function joinChat(_socket, loggedIn, dborigin, room) {
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
exports.joinChat = joinChat;
var sendChat = function sendChat(_socket, loggedIn, dborigin, room, newChat, replyToId, replyToUsername) {
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
exports.sendChat = sendChat;
var attemptBanUserChat = function attemptBanUserChat(_socket, loggedIn, dborigin, room, banId) {
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
exports.attemptBanUserChat = attemptBanUserChat;
var requestBanTable = function requestBanTable(_socket, loggedIn, dborigin, room) {
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
exports.requestBanTable = requestBanTable;