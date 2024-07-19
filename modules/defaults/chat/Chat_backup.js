import React from 'react'
import ChatStyles from '/modules/streaming/chat/Chat.module.scss'
import ChatLog from './ChatLog'
import { DonateBar } from '/modules/streaming/chat'
import { RecentChatTimeout, ReplyTo, ReplyToInfo } from '/modules/streaming/chat/parts'
import TextareaAutosize from 'react-textarea-autosize'

const Module = props => {
    const { chatInputRef, blockChat, handleChatTextChange, handleKeyPressChat, handleSendChat, currentChat, blockSend, blockSendForce, renderDonations } = props

    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

export default Module
