import React from 'react'
import { Chat } from '@tycoonsystems/tycoon-modules/streaming/chat'

const Module = props => {
    return (
        <div className={`${props?.MessagingStyles?.container} ${props?.messagingOpen ? `${props?.MessagingStyles?.containerOpen}` : `${props?.MessagingStyles?.containerClosed}`} Messaging_Container ${props.className}`} onClick={!props?.messagingOpen && props?.toggleOpenMessaging ? props.toggleOpenMessaging : null} modif={'open'}>
            <div className={`${props?.MessagingStyles?.header}`}>
                {
                    props?.currentWindow === 'message'
                    ? <>
                            <div className='flex al-cen gap-p5'>
                                <div className={`material-icons Messaging_Close_Icon`} onClick={props?.goback} modif={'close'} style={{ cursor: 'pointer', marginLeft: '.25rem' }}>arrow_back</div>
                                <div className={`${props?.MessagingStyles?.headerText}`}>{props?.currentOtherUser?.username ?? ''}</div>
                            </div>
                            <div className={`${props?.MessagingStyles?.headerIconContainer}`}>
                                <div className={`${!props?.messagingOpen ? 'display-none' : null} material-icons Messaging_Close_Icon`} onClick={props?.messagingOpen && props?.toggleOpenMessaging ? props.toggleOpenMessaging : null} modif={'close'} style={{ cursor: 'pointer', marginLeft: '.25rem' }}>keyboard_double_arrow_down</div>
                            </div>
                        </>
                    : <>
                        <div className={`${props?.MessagingStyles?.headerText}`}>Messaging
                            {
                                    props?.allConversations?.read && Object.entries(props.allConversations.read).length > 0 && Object.entries(props.allConversations.read).findIndex(m => m?.[1] === false) > -1 && !props?.messagingOpen
                                        ? <div className={`${props?.MessagingStyles?.notificationWaitingCountHeader} Messaging_NotificationWaitingCountHeader`}>{Object.entries(props.allConversations.read).reduce((p, a) => (a?.[1] === false ? 1 : 0) + p, 0)}</div>
                                        : null
                            }
                        </div>
                        <div className={`${props?.MessagingStyles?.headerIconContainer}`}>
                            <div className={`material-icons Messaging_Open_Icon`} onClick={props?.messagingCreateNewMessage ?? null} style={{ cursor: 'pointer', marginLeft: '.25rem' }}>mail_outline<div></div></div>
                            <div className={`${props?.messagingOpen ? 'display-none' : null} material-icons Messaging_Open_Icon`} style={{ marginLeft: '.25rem' }}>keyboard_double_arrow_up</div>
                            <div className={`${!props?.messagingOpen ? 'display-none' : null} material-icons Messaging_Close_Icon`} onClick={props?.messagingOpen && props?.toggleOpenMessaging ? props.toggleOpenMessaging : null} modif={'close'} style={{ cursor: 'pointer', marginLeft: '.25rem' }}>keyboard_double_arrow_down</div>
                        </div>
                    </>
                }
            </div>
            {
                props?.messagingOpen
                    ? <div className={`${props?.MessagingStyles?.messagingFeedContainer} Messaging_MessagingFeedContainer`}>
                        <div className={`${props?.MessagingStyles?.messagingExternalChatContainer} Messaging_MessagingExternalChatContainer`} style={{ display: props?.currentWindow === 'message' ? 'block' : 'none' }}>
                            {
                                props?.currentWindow === 'message'
                                    ? <Chat  { ...props } />
                                    : null
                            }
                        </div>
                        {
                            props?.currentWindow == 'general'
                                ? <div>
                                    <div className={`${props?.menuStyle.searchContainer} Menu_searchContainer`}>
                                        <div className={`${props?.menuStyle.searchBar} Menu_searchBar ${props?.MessagingStyles?.searchBar}`} ref={props?.searchBarRef ?? null}>
                                            <div className='material-icons'>search</div>
                                            <input className={`${props?.menuStyle.searchBarInternal} Menu_searchBarInternal ${props?.MessagingStyles?.searchBarInternal}`} ref={props?.searchRef} type='text' placeholder={props?.placeholder ?? 'Search messages'} onFocus={props?.handleOnFocus} onBlur={props?.handleOnBlur} onKeyDown={props?.onKeyDown} />
                                        </div>
                                    </div>
                                    <div className={`${props?.MessagingStyles?.conversationListContainer} Messaging_ConversationListContainer`}>
                                        {
                                            props?.allConversations?.records && Object.entries(props.allConversations.records)?.length > 0
                                                ? Object.entries(props.allConversations.records).map((m, i) => {
                                                    const otherUser = props?.resolveOtherUser(m[1]) ?? {}
                                                    const chatLog = props.allConversations?.log?.[m[0]]
                                                    const recentChat = chatLog?.slice().reverse().find(m => Object.prototype.hasOwnProperty.call(m, 'content'))
                                                    const notificationWaiting = props.allConversations.read[m[0]] === false
                                                    return (
                                                        <div className={`${props?.MessagingStyles?.conversationListItemContainer} Messaging_ConversationListItemContainer`} key={i} onClick={props?.handleSetCurrentChat} modif={m?.[1]?.id}>
                                                            <div className={`${props?.MessagingStyles?.conversationListItemContainerInternal} Messaging_ConversationListItemContainerInternal`}>
                                                                <img className={`${props?.MessagingStyles?.ConversationListItemIcon} Messaging_ConversationListItemIcon`} src={otherUser?.icon?.match(/^https?:.*/) ? otherUser?.icon : `${props?.cdn?.static}/${otherUser?.icon}`} />
                                                                <div className={`${props?.MessagingStyles?.ConversationListItemMeta} Messaging_ConversationListItemMeta`}>
                                                                    <div className={`${props?.MessagingStyles?.ConversationNameHeader} Messaging_ConversationNameHeader`}>
                                                                        <div className={`${props?.MessagingStyles?.UsernameLabel} Messaging_UsernameLabel`}>{otherUser?.username ?? ''}</div>
                                                                        {
                                                                            notificationWaiting
                                                                                ? <div className={`${props?.MessagingStyles?.notificationWaitingConversationDot} Messaging_NotificationWaitingConversationDot`}></div>
                                                                                : null
                                                                        }
                                                                    </div>
                                                                    <div className={`${props?.MessagingStyles?.ContentPreview} Messaging_ContentPreview ${notificationWaiting ? `${props?.MessagingStyles?.ContentPreviewNew} Messaging_ContentPreviewNew` : null}`}>{recentChat?.content ?? ''}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                                : null
                                        }
                                    </div>
                                </div>
                                : null
                        }
                    </div>
                    : null
            }
        </div>
    )
}

export default Module
