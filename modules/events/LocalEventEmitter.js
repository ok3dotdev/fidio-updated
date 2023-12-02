"use strict";

var _LocalEventEmitter = {
  _events: {},
  dispatch: function dispatch(event, data) {
    // console.log(event, data)
    if (!this._events[event]) return;
    this._events[event].forEach(function (callback) {
      return callback(data);
    });
  },
  subscribe: function subscribe(event, callback) {
    if (!this._events[event]) this._events[event] = [];
    this._events[event].push(callback);
  },
  unsubscribe: function unsubscribe(event) {
    if (!this._events[event]) return;
    delete this._events[event];
  }
};
module.exports = {
  _LocalEventEmitter: _LocalEventEmitter
};