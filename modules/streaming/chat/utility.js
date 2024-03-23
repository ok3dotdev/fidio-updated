export const handleKeyPressChat = (e, f) => {
  if (e && e.key && (e.key == "Enter" || e.charCode == 13)) {
    e.preventDefault();
    f(e);
    return false;
  }
};
export const scrollChatDown = (node, behavior = 'smooth') => {
  if (node?.current?.scrollHeight) {
    node.current.scrollBy({
      top: node.current.scrollHeight,
      behavior: behavior
    });
  }
};