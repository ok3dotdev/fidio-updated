import React from 'react';
import WatchPageStyles from './WatchPage.module.scss';
import { Chat } from '../chat';
const Module = props => {
  return <div className={`${props?.className ?? ''} ${WatchPageStyles.chatContainer} ${props?.chatState ? `${WatchPageStyles.chatOpen}` : `${WatchPageStyles.chatClosed}`} ${!props?.chatState && props?._isMobile ? `${WatchPageStyles.chatClosedMobile}` : null} WatchPage_ChatContainer`}>
            <Chat {...props} setMobileStyleConfigs={props?.handleSetMobileStyleConfigs} chatFor={props?.watchData?.id} videoStatus={props?.watchData?.status} chatState={props?.chatState} />
        </div>;
};
export default Module;