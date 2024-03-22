"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _index = require("../utility/socket/index");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var SocketContainer = function SocketContainer(props) {
  var _socket = props._socket;
  var socketRef = (0, _react.useRef)(false);
  var initializeTimer = (0, _react.useRef)(null);
  var _React$useState = _react["default"].useState(null),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    reconnectScheduled = _React$useState2[0],
    setReconnectScheduled = _React$useState2[1];
  (0, _react.useEffect)(function () {
    if (!socketRef.current && props._loggedIn && props.dborigin) {
      buildConnection();
    }
  }, [_socket, socketRef.current, props._loggedIn, props.dborigin]);
  var buildConnection = function buildConnection() {
    return new Promise(function (resolve, reject) {
      /* Sometimes no explicit Connect event fired. Run if connected true */
      if (_socket.connected && props._loggedIn && props.dborigin) {
        (0, _index.initialize)(_socket, props._loggedIn, props.dborigin);
      }
      _socket.on('connect', function (data) {
        console.log('Connected to socket ∞¦∞', _socket);
        socketRef.current = true;
        setTimeout(function () {
          (0, _index.initialize)(_socket, props._loggedIn, props.dborigin);
        }, 300);
      }, {
        'reconnectionAttempts': 5
      });
      _socket.on("disconnect", function (reason) {
        // Handles disconnects
        console.log('Disconnected from socket', _socket);
        if (!reconnectScheduled) {
          if (reason === "io server disconnect") {
            socketRef.current = false;
            var temp = setTimeout(function () {
              // disconnect initiated by server. Manually reconnect
              _socket.connect();
              setReconnectScheduled(null);
            }, 5000);
            setReconnectScheduled(temp);
          }
        }
      });
      _socket.on("connect_error", function (err) {
        console.log('Connection failed', err);
        socketRef.current = false;
        var temp = setTimeout(function () {
          reconnect();
          setReconnectScheduled(null);
        }, 5000);
        setReconnectScheduled(temp);
      });
      var reconnect = function reconnect() {
        var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5000;
        setTimeout(function () {
          _socket.connect();
        }, time);
      };
      return resolve();
    });
  };
  (0, _react.useEffect)(function () {
    if (_socket) {
      var returnInitialize = function returnInitialize(payload) {
        console.log(payload);
        if (props.setRooms) {
          props.setRooms(payload);
        }
      };
      var returnNotify = function returnNotify(payload) {
        console.log(payload);
      };
      var joinChat = function joinChat(payload) {
        if (props.setRooms) {
          console.log('Rooms', payload);
          props.setRooms(payload);
        }
        setTimeout(function () {
          if (payload !== null && payload !== void 0 && payload.log) {
            props._LocalEventEmitter.dispatch('receive_chat', payload.log);
          }
        }, 250);
      };
      var receiveChat = function receiveChat(payload) {
        console.log('Receive', payload);
        if (payload !== null && payload !== void 0 && payload.log) {
          props._LocalEventEmitter.dispatch('receive_chat', payload.log);
        }
      };
      var receiveBanTable = function receiveBanTable(payload) {
        console.log(payload);
        if (payload !== null && payload !== void 0 && payload.tables) {
          props._LocalEventEmitter.dispatch('receive_ban_table', payload.tables);
        }
      };
      _socket.on('returnInitialize', returnInitialize);
      _socket.on('returnNotify', returnNotify);
      _socket.on('joinChat', joinChat);
      _socket.on('receiveChat', receiveChat);
      _socket.on('receiveBanTable', receiveBanTable);
      return function () {
        _socket.off('returnInitialize', returnInitialize);
        _socket.off('returnNotify', returnNotify);
        _socket.off('joinChat', joinChat);
        _socket.off('receiveChat', receiveChat);
        _socket.off('receiveBanTable', receiveBanTable);
      };
    }
  }, [props._loggedIn, props.setRooms]);
  return /*#__PURE__*/_react["default"].createElement("div", null);
};
var _default = exports["default"] = SocketContainer;