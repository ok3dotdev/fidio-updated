import React from 'react';
import ChatStyles from '/modules/streaming/chat/Chat.module.scss';
import Reply from '@mui/icons-material/Reply';
import ArrowUpward from '@mui/icons-material/ArrowUpward';

const Module = (props) => {
  const chatLog = props.chatLog;
  const scrollChatRef = props.scrollChatRef;
  const scrollChatInnerRef = props.scrollChatInnerRef;
  const mobileStyleConfigs = props.mobileStyleConfigs;
  const handleSetUserDisplay = props.handleSetUserDisplay;
  const highlightedChat = props.highlightedChat;
  const handleGoToPost = props.handleGoToPost;
  const handleReplyTo = props.handleReplyTo;
  const replyOff = props.replyOff;

  return (
    <div
      className={`${ChatStyles.chatLogExternalContainer} ${
        mobileStyleConfigs
          ? `${ChatStyles.mobileChatLogExternalContainer}`
          : null
      } Chat_ChatLogExternalContainer`}
      ref={scrollChatRef}
    >
      <div
        className={`${ChatStyles.chatLogContainer} Chat_ChatLogContainer`}
        ref={scrollChatInnerRef}
      >
        {chatLog && Array.isArray(chatLog) ? (
          chatLog.map((m, i) => (
            <div
              className={`${
                ChatStyles.chatLogItemContainer
              } Chat_ChatLogItemContainer ${
                m.type === 'donation'
                  ? `${ChatStyles.chatLogItemContainerDonation} Chat_ChatLogItemContainerDonation`
                  : ''
              }`}
              key={i}
              index={i}
            >
              {m.id && m.content && m.author ? (
                <div
                  className={`Chat_ChatLogItemInternalContainer`}
                  logid={m.id}
                  time={m.time}
                  author={m.author}
                  replylogid={m.replyLogid ?? null}
                  replyusername={m.replyUsername}
                >
                  <div
                    className={` ${ChatStyles.chatLogMain} ${
                      highlightedChat === m.id
                        ? `${ChatStyles.highlightedChat}`
                        : ''
                    } Chat_ChatLogMain flex-start`}
                  >
                    {m?.avatar ? (
                      <div
                        className={`${ChatStyles.chatMessageAvatarContainer} Chat_ChatMessageAvatarContainer`}
                      >
                        <img src={m.avatar} />
                      </div>
                    ) : null}
                    <div
                      className={`${ChatStyles.userContentContainerFlex} ${
                        m.type === 'donation'
                          ? `${ChatStyles.userContentContainerFlexOff}`
                          : ''
                      }`}
                    >
                      <div
                        className={`${ChatStyles.username} ${ChatStyles.usernameChat} Chat_ChatUsername inline`}
                        username={m.username}
                        author={m.author}
                        onClick={handleSetUserDisplay}
                      >
                        {m.username}
                      </div>
                      {/* Supports reply to functionality  */}
                      {replyOff ? null : (
                        <React.Fragment>
                          {m.replyLogid && m.replyUsername ? (
                            <div className={`${ChatStyles.replyMeta}`}>
                              <div>
                                Chat is Reply to <b>@{m.replyUsername}</b>
                              </div>
                            </div>
                          ) : (
                            <div className={`${ChatStyles.replyMeta}`}>
                              <div>
                                Reply to <b>@{m.username}</b>
                              </div>
                            </div>
                          )}
                        </React.Fragment>
                      )}
                      <div className={`Chat_Content inline`}>{m.content}</div>
                    </div>
                    {/* Supports reply to functionality  */}
                    {replyOff ? null : (
                      <React.Fragment>
                        {m.replyLogid ? (
                          <div
                            className={`${ChatStyles.viewReplyTo} Chat_ViewReplyTo`}
                            onClick={handleGoToPost}
                            logid={m.replyLogid}
                            style={{ marginTop: '.25rem' }}
                          >
                            <ArrowUpward logid={m.replyLogid}></ArrowUpward>
                          </div>
                        ) : null}
                        <div
                          className={`${ChatStyles.replyTo} Chat_ReplyTo`}
                          onClick={handleReplyTo}
                          logid={m.id}
                          username={m.username}
                          author={m.author}
                          style={{ marginTop: '.25rem' }}
                        >
                          <Reply
                            logid={m.id}
                            username={m.username}
                            author={m.author}
                          ></Reply>
                        </div>
                      </React.Fragment>
                    )}
                  </div>
                </div>
              ) : (
                <React.Fragment></React.Fragment>
              )}
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Module;
