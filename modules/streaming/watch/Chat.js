function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import WatchPageStyles from './WatchPage.module.scss';
import { Chat } from '../chat';
const Module = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: `${props?.className ?? ''} ${WatchPageStyles.chatContainer} ${props?.chatState ? `${WatchPageStyles.chatOpen}` : `${WatchPageStyles.chatClosed}`} ${!props?.chatState && props?._isMobile ? `${WatchPageStyles.chatClosedMobile}` : null} WatchPage_ChatContainer`
  }, /*#__PURE__*/React.createElement(Chat, _extends({}, props, {
    setMobileStyleConfigs: props?.handleSetMobileStyleConfigs,
    chatFor: props?.watchData?.id,
    videoStatus: props?.watchData?.status,
    chatState: props?.chatState
  })));
};
export default Module;