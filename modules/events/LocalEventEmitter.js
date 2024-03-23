const _LocalEventEmitter = {
  _events: {},
  dispatch: function (event, data) {
    // console.log(event, data)
    if (!this._events[event]) return;
    this._events[event].forEach(callback => callback(data));
  },
  subscribe: function (event, callback) {
    if (!this._events[event]) this._events[event] = [];
    this._events[event].push(callback);
  },
  unsubscribe(event) {
    if (!this._events[event]) return;
    delete this._events[event];
  }
};
module.exports = {
  _LocalEventEmitter
};