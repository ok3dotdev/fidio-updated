export const initialize = (_socket, loggedIn, dborigin) => {
  if (_socket && loggedIn) {
    const payload = Object.assign(loggedIn, {
      dborigin: dborigin
    });
    _socket.emit('initialize', {
      ...payload
    });
    return true;
  } else {
    return false;
  }
};
export const joinChat = (_socket, loggedIn, dborigin, room, attempt = 0) => {
  if (_socket && loggedIn && room) {
    const payload = Object.assign(loggedIn, {
      dborigin: dborigin,
      room: room,
      attempt: attempt
    });
    _socket.emit('join_chat', {
      ...payload
    });
    return true;
  } else {
    return false;
  }
};
export const sendChat = (_socket, loggedIn, dborigin, room, newChat, replyToId, replyToUsername) => {
  if (_socket && loggedIn && room && newChat) {
    const payload = Object.assign(loggedIn, {
      dborigin: dborigin,
      room: room,
      newChat: newChat,
      replyToId: replyToId,
      replyToUsername: replyToUsername
    });
    _socket.emit('send_chat', {
      ...payload
    });
    return true;
  } else {
    return false;
  }
};
export const attemptBanUserChat = (_socket, loggedIn, dborigin, room, banId, options = {}) => {
  if (_socket && loggedIn && room && banId) {
    const payload = Object.assign(loggedIn, {
      dborigin: dborigin,
      room: room,
      banId: banId,
      options: options
    });
    _socket.emit('attempt_ban_user_chat', {
      ...payload
    });
    return true;
  } else {
    return false;
  }
};
export const requestBanTable = (_socket, loggedIn, dborigin, room) => {
  if (_socket && loggedIn && room) {
    const payload = Object.assign(loggedIn, {
      dborigin: dborigin,
      room: room
    });
    _socket.emit('request_ban_table', {
      ...payload
    });
    return true;
  } else {
    return false;
  }
};