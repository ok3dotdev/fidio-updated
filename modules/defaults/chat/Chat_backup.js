import React from 'react'
import ChatStyles from '/modules/streaming/chat/Chat.module.scss'
import WatchPageStyles from '/modules/streaming/watch/WatchPage.module.scss'
import ChatLog from './ChatLog'
import { DonateBar } from '/modules/streaming/chat'
import { RecentChatTimeout, ReplyTo, ReplyToInfo, ModChatTools } from '/modules/streaming/chat/parts'
import TextareaAutosize from 'react-textarea-autosize'

const Module = props => {
    const { chatInputRef, blockChat, handleChatTextChange, handleKeyPressChat, handleSendChat, currentChat, blockSend, blockSendForce, renderDonations, handleRunTasks, windowWidth } = props

    return (
        <div className={`${props?.className ?? ''} ${WatchPageStyles.chatContainer} ${props?.chatState ? `${WatchPageStyles.chatOpen}` : `${WatchPageStyles.chatClosed}`} ${!props?.chatState && props?._isMobile ? `${WatchPageStyles.chatClosedMobile}` : null} WatchPage_ChatContainer`}>
            <div className={`${props.className} ${ChatStyles.chatContainer} Chat_ChatContainer`} style={{ height: `${!props.chatState ? 0 : windowWidth === null || windowWidth > 700 ? `calc(100vh - ${props?.menuHeight})` : '50vh'}` }} onClick={handleRunTasks}>
                <ModChatTools { ...props } />
                {renderDonations}
                <ChatLog { ...props } />
                <div className={`${ChatStyles.chatInputContainer} ${!props.chatState ? `${ChatStyles.forceHideChat}` : null} Chat_ChatInputContainer`}>
                    <div className={`${ChatStyles.chatInputInternalContainer} Chat_ChatInputInternalContainer`}>
                        <RecentChatTimeout { ...props } />
                        <DonateBar { ...props } />
                        <ReplyTo { ...props } />
                        <ReplyToInfo { ...props } />
                        <div className={`${ChatStyles.chatInputSendContainer} Chat_ChatInputSendContainer`}>
                            <TextareaAutosize className={`${ChatStyles.textChatInput} ${ChatStyles.highlightBorder} Chat_TextChatInput`} ref={chatInputRef} onKeyPress={(e) => {handleKeyPressChat(e, handleSendChat)}} onChange={handleChatTextChange} disabled={blockChat || !currentChat}/>
                            <button className={`${ChatStyles.send} ${ChatStyles.highlightBorder} Chat_Send`} onClick={handleSendChat} disabled={blockSend || blockSendForce}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Module
