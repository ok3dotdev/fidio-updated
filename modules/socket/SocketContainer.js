var _div;
import { initialize } from '../utility/socket/index';
import React, { useRef, useEffect } from 'react';
const SocketContainer = props => {
  const {
    _socket
  } = props;
  let socketRef = useRef(false);
  let initializeTimer = useRef(null);
  const [reconnectScheduled, setReconnectScheduled] = React.useState(null);
  useEffect(() => {
    if (!socketRef.current && props._loggedIn && props.dborigin) {
      buildConnection();
    }
  }, [_socket, socketRef.current, props._loggedIn, props.dborigin]);
  const buildConnection = () => new Promise((resolve, reject) => {
    /* Sometimes no explicit Connect event fired. Run if connected true */
    if (_socket.connected && props._loggedIn && props.dborigin) {
      initialize(_socket, props._loggedIn, props.dborigin);
    }
    _socket.on('connect', data => {
      console.log('Connected to socket ∞¦∞', _socket);
      socketRef.current = true;
      setTimeout(() => {
        initialize(_socket, props._loggedIn, props.dborigin);
      }, 300);
    }, {
      'reconnectionAttempts': 5
    });
    _socket.on("disconnect", reason => {
      // Handles disconnects
      console.log('Disconnected from socket', _socket);
      if (!reconnectScheduled) {
        if (reason === "io server disconnect") {
          socketRef.current = false;
          const temp = setTimeout(() => {
            // disconnect initiated by server. Manually reconnect
            _socket.connect();
            setReconnectScheduled(null);
          }, 5000);
          setReconnectScheduled(temp);
        }
      }
    });
    _socket.on("connect_error", err => {
      console.log('Connection failed', err);
      socketRef.current = false;
      const temp = setTimeout(() => {
        reconnect();
        setReconnectScheduled(null);
      }, 5000);
      setReconnectScheduled(temp);
    });
    let reconnect = (time = 5000) => {
      setTimeout(() => {
        _socket.connect();
      }, time);
    };
    return resolve();
  });
  useEffect(() => {
    if (_socket) {
      const returnInitialize = payload => {
        console.log(payload);
        if (props.setRooms) {
          props.setRooms(payload);
        }
      };
      const returnNotify = payload => {
        console.log(payload);
      };
      const joinChat = payload => {
        if (props.setRooms) {
          console.log('Rooms', payload);
          props.setRooms(payload);
        }
        setTimeout(() => {
          if (payload?.log) {
            props._LocalEventEmitter.dispatch('receive_chat', payload.log);
          }
        }, 250);
      };
      const receiveChat = payload => {
        console.log('Receive', payload);
        if (payload?.log) {
          props._LocalEventEmitter.dispatch('receive_chat', payload.log);
        }
      };
      const receiveBanTable = payload => {
        console.log(payload);
        if (payload?.tables) {
          props._LocalEventEmitter.dispatch('receive_ban_table', payload.tables);
        }
      };
      _socket.on('returnInitialize', returnInitialize);
      _socket.on('returnNotify', returnNotify);
      _socket.on('joinChat', joinChat);
      _socket.on('receiveChat', receiveChat);
      _socket.on('receiveBanTable', receiveBanTable);
      return () => {
        _socket.off('returnInitialize', returnInitialize);
        _socket.off('returnNotify', returnNotify);
        _socket.off('joinChat', joinChat);
        _socket.off('receiveChat', receiveChat);
        _socket.off('receiveBanTable', receiveBanTable);
      };
    }
  }, [props._loggedIn, props.setRooms]);
  return _div || (_div = /*#__PURE__*/React.createElement("div", null));
};
export default SocketContainer;