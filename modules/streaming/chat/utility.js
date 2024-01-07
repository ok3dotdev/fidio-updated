"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollChatDown = exports.handleKeyPressChat = void 0;
var handleKeyPressChat = function handleKeyPressChat(e, f) {
  if (e && e.key && (e.key == "Enter" || e.charCode == 13)) {
    e.preventDefault();
    f(e);
    return false;
  }
};
exports.handleKeyPressChat = handleKeyPressChat;
var scrollChatDown = function scrollChatDown(node) {
  var _node$current;
  var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'smooth';
  if (node !== null && node !== void 0 && (_node$current = node.current) !== null && _node$current !== void 0 && _node$current.scrollHeight) {
    node.current.scrollBy({
      top: node.current.scrollHeight,
      behavior: behavior
    });
  }
};
exports.scrollChatDown = scrollChatDown;