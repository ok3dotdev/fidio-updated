var _React$Fragment, _div;
import React from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import TextareaAutosize from 'react-textarea-autosize';
import { attemptBanUserChat, joinChat, requestBanTable, sendChat } from '../../utility/socket';
import { isObjectEmpty } from '../../util';
import ChatStyles from './Chat.module.scss';
import { handleKeyPressChat, scrollChatDown } from './utility';
import Close from '@mui/icons-material/Close';
import Reply from '@mui/icons-material/Reply';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import Tooltip from '@mui/material/Tooltip';
const CONNECT_THRESHOLD = 12500;
const ADHOC_BLOCK_CHAT = 1500;
const RECENT_CHAT_THRESHOLD = 20000;
const RECENT_CHAT_TIMEOUT = 10000;
const MAX_RECENT_CHATS = 9;
const Module = props => {
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [componentId, setComponentId] = React.useState(null);
  const [fetchBusy, setFetchBusy] = React.useState(false);
  const [chatMaybeReady, setChatMaybeReady] = React.useState(false);
  const [lastChatInitialization, setLastChatInitialization] = React.useState({});
  const [currentChat, setCurrentChat] = React.useState(false);
  const [chatLog, setChatLog] = React.useState(null);
  const [blockChat, setBlockChat] = React.useState(false);
  const [blockSend, setBlockSend] = React.useState(false);
  const [blockSendForce, setBlockSendForce] = React.useState(false);
  const [lastAdhocTimeout, setLastAdhocTimeout] = React.useState(-1);
  const [recentChats, setRecentChats] = React.useState([]);
  const [recentChatTimeout, setRecentChatTimeout] = React.useState(null);
  const [modPower, setModPower] = React.useState({});
  const [userDisplay, setUserDisplay] = React.useState(null);
  const [currentBanTable, setCurrentBanTable] = React.useState(null);
  const [lastBanTableCheck, setLastBanTableCheck] = React.useState(-1);
  const [replyToId, setReplyToId] = React.useState(null);
  const [replyToUsername, setReplyToUsername] = React.useState(null);
  const [replyToContent, setReplyToContent] = React.useState([]);
  const [highlightedChat, setHighlightedChat] = React.useState(null);
  const [highlightedChatTimeout, setHighlightedChatTimeout] = React.useState(-1);
  const [mobileStyleConfigs, setMobileStyleConfigs] = React.useState(false);
  const chatInputRef = React.useRef();
  const scrollChatRef = React.useRef();
  const scrollChatInnerRef = React.useRef();
  React.useEffect(() => {
    if (!componentDidMount) {
      const id = uuidv4();
      setComponentId(id);
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  React.useEffect(() => {
    if (props._LocalEventEmitter) {
      props._LocalEventEmitter.unsubscribe('receive_chat');
      props._LocalEventEmitter.subscribe('receive_chat', e => {
        if (e) {
          const chats = Object.entries(e);
          for (let i = 0; i < chats.length; i++) {
            if (chats[i][0] && chats[i][0] === currentChat && chats[i][1]) {
              console.log(chats[i][1], chatLog);
              const forceScroll = !chatLog || chatLog.length < 50;
              const offset = chatLog?.length ? chats[i][1].length - chatLog.length : 0;
              setTimeout(() => {
                if (checkScrollThreshold(offset) || forceScroll) {
                  scrollChatDown(scrollChatRef, !chatLog ? 'instant' : 'smooth');
                }
              }, 50);
              setChatLog(chats[i][1]);
              break;
            }
          }
        }
      });
    }
  }, [props._LocalEventEmitter, props.chatConfig, currentChat, scrollChatRef.current, scrollChatInnerRef.current, chatLog]);
  React.useEffect(() => {
    if (props._LocalEventEmitter) {
      props._LocalEventEmitter.unsubscribe('receive_ban_table');
      props._LocalEventEmitter.subscribe('receive_ban_table', e => {
        console.log(e);
        if (e) {
          const chats = Object.entries(e);
          for (let i = 0; i < Object.entries(chats).length; i++) {
            const streamKey = `${props.chatFor}-chat-${props.dborigin}`;
            if (chats[i][0] && chats[i][0] === streamKey) {
              console.log('Setting ban table', chats[i][1]);
              setCurrentBanTable(chats[i][1] ?? {});
              break;
            }
          }
        }
      });
    }
  }, [props._LocalEventEmitter, props.chatFor, props.dborigin]);
  React.useEffect(() => {
    if (props._LocalEventEmitter) {
      props._LocalEventEmitter.unsubscribe('join_chat_waiting');
      props._LocalEventEmitter.subscribe('join_chat_waiting', e => {
        const useRoom = `${props.chatFor}-chat`;
        attemptInitChat(useRoom);
      });
    }
  }, [fetchBusy, props._socket, props.dborigin, props._rooms, props.chatFor, props._loggedIn, props.dborigin, chatMaybeReady, lastChatInitialization, currentChat]);
  React.useEffect(() => {
    const goodStatus = ['live'];
    if (props?.videoStatus && props?._loggedIn?.identifier && props?._loggedIn?.hash && props.chatFor && goodStatus.indexOf(props.videoStatus) > -1) {
      setChatMaybeReady(true); // Based on frontend data, it is possible that there is a valid chat and user is logged in
    } else {
      setChatMaybeReady(false);
    }
  }, [props._loggedIn, props.chatFor, props.videoStatus, chatMaybeReady]);
  const manageRecentChats = newChat => {
    console.log('Manage Chats', newChat, recentChats);
    const temp = recentChats;
    if (newChat) {
      temp.push({
        chat: newChat,
        time: new Date().getTime()
      });
    }
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].time < new Date().getTime() - RECENT_CHAT_THRESHOLD) {
        temp.splice(i, 1);
      }
    }
    setRecentChats(temp);
    setRecentChatsBlock(temp);
  };
  React.useEffect(() => {
    console.log(fetchBusy, props._rooms, props._socket, props.chatFor);
    const useRoom = `${props.chatFor}-chat`;
    attemptInitChat(useRoom);
    handleSetCurrentChat();
    manageRecentChats();
  }, [fetchBusy, props._socket, props.dborigin, props._rooms, props.chatFor, props._loggedIn, props.dborigin, chatMaybeReady, lastChatInitialization, currentChat, manageRecentChats]);

  /**
   * Will attempt to join user to chat in manner that does not overwhelm server
   * @param {*} useRoom 
   */
  const attemptInitChat = useRoom => {
    try {
      if (!currentChat || `${props.chatFor}-chat-${props.dborigin}` !== currentChat || !chatLog) {
        console.log(props._rooms.rooms.indexOf(`${useRoom}-${props.dborigin}`), props._rooms, `${useRoom}-${props.dborigin}`);
        if (!fetchBusy && props._rooms && chatMaybeReady && (!props._rooms.rooms || props._rooms.rooms.indexOf(`${useRoom}-${props.dborigin}`) < 0 || !chatLog)) {
          if (isObjectEmpty(lastChatInitialization) || lastChatInitialization.time < new Date().getTime() - CONNECT_THRESHOLD && lastChatInitialization.attempt < 5) {
            setFetchBusy(true);
            setTimeout(() => {
              setFetchBusy(false);
              setTimeout(() => {
                props._LocalEventEmitter.dispatch('join_chat_waiting', {});
              }, 500);
            }, (lastChatInitialization.attempt ?? 1) * CONNECT_THRESHOLD);
            joinChat(props._socket, props._loggedIn, props.dborigin, useRoom, lastChatInitialization.attempt ?? 1);
            setLastChatInitialization({
              time: new Date().getTime(),
              attempt: lastChatInitialization.attempt ? lastChatInitialization.attempt + 1 : 2
            });
          }
        }
      }
    } catch (err) {
      // fail silently
    }
  };
  const handleSetCurrentChat = () => {
    if (props.chatFor) {
      const useRoom = `${props.chatFor}-chat`;
      if (props.dborigin && props?._rooms?.rooms?.indexOf(`${useRoom}-${props.dborigin}`) > -1 && currentChat !== `${useRoom}-${props.dborigin}`) {
        setCurrentChat(`${useRoom}-${props.dborigin}`);
      }
    }
  };
  const handleSendChat = async e => {
    if (chatInputRef?.current?.value && !blockChat) {
      const newChat = chatInputRef.current.value;
      console.log('Chat To Send', newChat);
      // Do not update local chat due to nature of multi-participant chat
      if (props.chatFor && props._socket && props?._loggedIn?.username && props?._loggedIn?.identifier && props?._loggedIn?.hash && props.dborigin) {
        const useRoom = `${props.chatFor}-chat`;
        manageRecentChats(newChat);
        sendChat(props._socket, props._loggedIn, props.dborigin, useRoom, newChat, replyToId, replyToUsername); // Send chat to server and server will immediately return newest chat
        setReplyToId(null);
        setReplyToUsername(null);
      }
      setBlockSend(true); // Prevent new chats for x seconds assuming newest chats will have returned by then to prevent user duplicate actions
      setLastAdhocTimeout(new Date().getTime());
      setTimeout(() => {
        setBlockSend(false);
        setTimeout(() => {
          if (chatInputRef?.current) {
            chatInputRef.current.select();
          }
        }, 50);
      }, ADHOC_BLOCK_CHAT);
      setTimeout(() => {
        scrollChatDown(scrollChatRef, 'smooth'); // Scroll Chat Down
      }, 250);
      chatInputRef.current.value = ''; // Reset chat value
      chatInputRef.current.setAttribute('style', 'height: 1.35rem'); // Reset chat styles
    }
  };

  /**
   * Checks if threshold for scrolling down is surpassed. Allow users to read all messages without issue. Calculates offset for large amount of incoming chats difference with current chat
   * @returns 
   */
  const checkScrollThreshold = (offset = 0) => {
    if (scrollChatRef?.current && scrollChatInnerRef?.current) {
      const chatItemHeight = props?.chatConfig?.chatItemHeight ?? 17.5;
      const calcOffset = offset * chatItemHeight;
      console.log(scrollChatRef.current.scrollTop, scrollChatInnerRef.current.clientHeight - scrollChatRef.current.clientHeight, offset, calcOffset, scrollChatRef.current.scrollTop + calcOffset);
      const useChatHeight = scrollChatRef.current.clientHeight + 100;
      console.log(scrollChatRef.current.scrollTop + calcOffset, scrollChatInnerRef.current.clientHeight - useChatHeight);
      if (scrollChatRef.current.scrollTop + calcOffset > scrollChatInnerRef.current.clientHeight - useChatHeight) {
        return true;
      }
    }
    return false;
  };
  const setRecentChatsBlock = chats => {
    const useChats = chats ?? recentChats;
    if (useChats.length > MAX_RECENT_CHATS && !recentChatTimeout) {
      setBlockChat(true);
      setBlockSendForce(true);
      const r = setTimeout(() => {
        setBlockChat(false);
        setBlockSendForce(false);
        setRecentChatTimeout(null);
      }, RECENT_CHAT_TIMEOUT);
      if (recentChatTimeout?.r) {
        clearTimeout(recentChatTimeout.r);
      }
      setRecentChatTimeout({
        r: r,
        time: new Date().getTime() + RECENT_CHAT_TIMEOUT
      });
    }
  };
  const handleChatTextChange = e => {};
  React.useEffect(() => {
    let temp = modPower;
    let change = false;
    if (props?.watchData?.author === props._loggedIn?.identifier && !modPower.canBan) {
      change = true;
      temp.canBan = true;
      if (!currentBanTable && lastBanTableCheck < new Date().getTime() - 10) {
        setLastBanTableCheck(new Date().getTime());
        const useRoom = `${props.chatFor}-chat`;
        requestBanTable(props._socket, props._loggedIn, props.dborigin, useRoom);
      }
    }
    if (change) {
      setModPower(temp);
    }
  }, [props.watchData, props._loggedIn, modPower, currentBanTable, props.chatFor, props._socket, props.dborigin, lastBanTableCheck]);
  const handleSetUserDisplay = e => {
    if (e?.target?.getAttribute('username') && e?.target?.getAttribute('author')) {
      const user = e.target.getAttribute('username');
      const userId = e.target.getAttribute('author');
      setUserDisplay({
        user: user,
        id: userId
      });
      if (checkScrollThreshold()) {
        scrollChatDown(scrollChatRef, 'instant'); // Scroll Chat Down
      }
    }
  };
  const handleSetUserDisplayOff = e => {
    setUserDisplay(null);
  };
  const handleAttemptBanUser = e => {
    if (e?.target?.getAttribute('userid')) {
      const useRoom = `${props.chatFor}-chat`;
      attemptBanUserChat(props._socket, props._loggedIn, props.dborigin, useRoom, e.target.getAttribute('userid'));
    }
  };
  const handleAttemptUnBanUser = e => {
    if (e?.target?.getAttribute('userid')) {
      const useRoom = `${props.chatFor}-chat`;
      attemptBanUserChat(props._socket, props._loggedIn, props.dborigin, useRoom, e.target.getAttribute('userid'), {
        unban: true
      });
    }
  };
  const handleReplyTo = e => {
    let root = e?.target.getAttribute('logid') ? e.target : e.target.parentElement;
    root = e?.target.getAttribute('logid') ? e.target : e.target.parentElement;
    console.log(e);
    if (root.getAttribute('logid') && root.getAttribute('username') && root.getAttribute('author')) {
      const logid = root.getAttribute('logid');
      const username = root.getAttribute('username');
      const author = root.getAttribute('author');
      /* ALLOW USERS TO RESPOND TO THEMSELVES */
      if (logid && username && author) {
        setReplyToId(logid);
        setReplyToUsername(username);
        const found = chatLog.find(m => m.id === logid);
        if (found?.content && found?.username) {
          const chatThread = [];
          chatThread.push({
            id: logid,
            username: found.username,
            content: found.content,
            replyLogid: found.replyLogid ?? null
          });
          for (let i = 0; i < 3; i++) {
            if (chatThread[i]?.replyLogid) {
              const f = chatLog.find(m => m.id === chatThread[i]?.replyLogid);
              if (f) {
                chatThread.push({
                  id: f.id,
                  username: f.username,
                  content: f.content,
                  replyLogid: f.replyLogid ?? null
                });
              } else {
                break;
              }
            }
          }
          setReplyToContent(chatThread);
        }
      }
    }
  };
  const handleCancelReplyTo = e => {
    setReplyToId(null);
    setReplyToUsername(null);
  };
  const handleGoToPost = e => {
    let root = e?.target.getAttribute('logid') ? e.target : e.target.parentElement;
    root = e?.target.getAttribute('logid') ? e.target : e.target.parentElement;
    console.log(root);
    if (root.getAttribute('logid')) {
      const logid = root.getAttribute('logid');
      const found = document.querySelector(`div[logid='${logid}']`);
      console.log(found);
      if (found?.scrollIntoView) {
        setHighlightedChat(logid);
        if (highlightedChatTimeout > -1) {
          clearTimeout(highlightedChatTimeout);
        }
        const r = setTimeout(() => {
          setHighlightedChat(null);
        }, 10000);
        setHighlightedChatTimeout(r);
        found.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    }
  };
  const checkMobileStyling = () => {
    if (componentDidMount && props?._isMobile) {
      if (document?.activeElement === chatInputRef?.current && !mobileStyleConfigs) {
        setMobileStyleConfigs(true);
        if (window) {
          // Scroll upwards to ensure video and chat is in view
          setTimeout(() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }, 250);
        }
        if (props?.setMobileStyleConfigs) {
          props.setMobileStyleConfigs(true);
        }
      } else if ((!document || !document.activeElement || document?.activeElement !== chatInputRef?.current) && mobileStyleConfigs) {
        setMobileStyleConfigs(false);
        if (props?.setMobileStyleConfigs) {
          props.setMobileStyleConfigs(false);
        }
      }
    }
  };
  const handleRunTasks = () => {
    checkMobileStyling();
  };
  checkMobileStyling();
  const useThreadOffset = props?.chatConfig?.menuThreadOffset ?? 2.85;
  const replyOff = props?.chatConfig?.replyOff;

  // Chat should have 1000 last chats

  console.log('Chat Log', chatLog, Array.isArray(chatLog), props.className, recentChats, props, userDisplay, currentBanTable, useThreadOffset, blockSend, blockChat);
  return /*#__PURE__*/React.createElement("div", {
    className: `${props.className} ${ChatStyles.chatContainer} Chat_ChatContainer`,
    onClick: handleRunTasks
  }, userDisplay ? /*#__PURE__*/React.createElement("div", {
    className: `${ChatStyles.userDisplayContainer} Chat_UserDisplayContainer`
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: `Chat_UserDisplayInternalContainer`,
    style: {
      display: 'flex',
      gap: '.25rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: `Chat_UserDisplayUser`
  }, /*#__PURE__*/React.createElement(Link, {
    href: `/p?u=${userDisplay.user}`,
    style: {
      alignSelf: 'center'
    }
  }, userDisplay.user)), modPower?.canBan && userDisplay.id !== props._loggedIn.identifier ? currentBanTable && currentBanTable[userDisplay.id] ? /*#__PURE__*/React.createElement("button", {
    style: {
      fontSize: '.75rem',
      padding: '.125rem .25rem'
    },
    onClick: handleAttemptUnBanUser,
    userid: `${userDisplay.id}`
  }, "Unban User") : /*#__PURE__*/React.createElement("button", {
    style: {
      fontSize: '.75rem',
      padding: '.125rem .25rem'
    },
    onClick: handleAttemptBanUser,
    userid: `${userDisplay.id}`
  }, "Ban User") : null)), /*#__PURE__*/React.createElement(Close, {
    className: `${ChatStyles.close}`,
    onClick: handleSetUserDisplayOff,
    modif: "close"
  })) : null, /*#__PURE__*/React.createElement("div", {
    className: `${ChatStyles.chatLogExternalContainer} ${mobileStyleConfigs ? `${ChatStyles.mobileChatLogExternalContainer}` : null} Chat_ChatLogExternalContainer`,
    ref: scrollChatRef
  }, /*#__PURE__*/React.createElement("div", {
    className: `${ChatStyles.chatLogContainer} Chat_ChatLogContainer`,
    ref: scrollChatInnerRef
  }, chatLog && Array.isArray(chatLog) ? chatLog.map((m, i) => /*#__PURE__*/React.createElement("div", {
    className: `Chat_ChatLogItemContainer`,
    key: i,
    index: i
  }, m.id && m.content && m.author ? /*#__PURE__*/React.createElement("div", {
    className: `Chat_ChatLogItemInternalContainer`,
    logid: m.id,
    time: m.time,
    author: m.author,
    replylogid: m.replyLogid ?? null,
    replyusername: m.replyUsername
  }, /*#__PURE__*/React.createElement("div", {
    className: `${ChatStyles.chatLogMain} ${highlightedChat === m.id ? `${ChatStyles.highlightedChat}` : ''} Chat_ChatLogMain`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${ChatStyles.username} ${ChatStyles.usernameChat} Chat_ChatUsername`,
    username: m.username,
    author: m.author,
    onClick: handleSetUserDisplay
  }, m.username), replyOff ? null : /*#__PURE__*/React.createElement(React.Fragment, null, m.replyLogid && m.replyUsername ? /*#__PURE__*/React.createElement("div", {
    className: `${ChatStyles.replyMeta}`
  }, /*#__PURE__*/React.createElement("div", null, "Chat is Reply to ", /*#__PURE__*/React.createElement("b", null, "@", m.replyUsername))) : /*#__PURE__*/React.createElement("div", {
    className: `${ChatStyles.replyMeta}`
  }, /*#__PURE__*/React.createElement("div", null, "Reply to ", /*#__PURE__*/React.createElement("b", null, "@", m.username)))), /*#__PURE__*/React.createElement("div", {
    className: `Chat_Content`
  }, m.content), replyOff ? null : /*#__PURE__*/React.createElement(React.Fragment, null, m.replyLogid ? /*#__PURE__*/React.createElement("div", {
    className: `${ChatStyles.viewReplyTo} Chat_ViewReplyTo`,
    onClick: handleGoToPost,
    logid: m.replyLogid,
    style: {
      marginTop: '.25rem'
    }
  }, /*#__PURE__*/React.createElement(ArrowUpward, {
    logid: m.replyLogid
  })) : null, /*#__PURE__*/React.createElement("div", {
    className: `${ChatStyles.replyTo} Chat_ReplyTo`,
    onClick: handleReplyTo,
    logid: m.id,
    username: m.username,
    author: m.author,
    style: {
      marginTop: '.25rem'
    }
  }, /*#__PURE__*/React.createElement(Reply, {
    logid: m.id,
    username: m.username,
    author: m.author
  }))))) : _React$Fragment || (_React$Fragment = /*#__PURE__*/React.createElement(React.Fragment, null)))) : _div || (_div = /*#__PURE__*/React.createElement("div", null)))), /*#__PURE__*/React.createElement("div", {
    className: `${ChatStyles.chatInputContainer} ${!props.chatState ? `${ChatStyles.forceHideChat}` : null} Chat_ChatInputContainer`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${ChatStyles.chatInputInternalContainer} Chat_ChatInputInternalContainer`
  }, recentChatTimeout ? /*#__PURE__*/React.createElement("div", {
    className: `${ChatStyles.chatWarningContainer} Chat_ChatWarningContainer`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${ChatStyles.warningText} Chat_WarningText`
  }, recentChatTimeout ? 'Timed Out' : ''), recentChats?.length ? /*#__PURE__*/React.createElement("div", {
    className: `${ChatStyles.warningBody}`,
    style: {
      fontSize: '.85rem'
    }
  }, "You have sent ", recentChats.length, " recent chats") : null) : null, replyToId && replyToUsername ? /*#__PURE__*/React.createElement("div", null, replyToContent && Array.isArray(replyToContent) && replyToContent.length > 0 ? /*#__PURE__*/React.createElement("div", {
    className: `${ChatStyles.replyToRepliesContainer} Chat_ReplyToRepliesContainer`,
    style: {
      top: `-${replyToContent.length > 4 ? 4 + useThreadOffset : replyToContent.length + useThreadOffset}rem`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: `${ChatStyles.threadLabel} Chat_ThreadLabel`
  }, "Thread"), replyToContent.slice(0).reverse().map((m, i) => i < 4 ? /*#__PURE__*/React.createElement("div", {
    className: `${ChatStyles.replyToRepliesThread} Chat_ReplyToRepliesThread`,
    style: {
      display: 'flex',
      gap: '.25rem'
    },
    key: i,
    index: i
  }, /*#__PURE__*/React.createElement("div", {
    className: `Chat_ReplyToRepliesUsername`
  }, /*#__PURE__*/React.createElement("b", null, m.username ?? '')), /*#__PURE__*/React.createElement("div", {
    className: `Chat_ReplyToRepliesContent`
  }, m.content ?? '')) : null)) : null, /*#__PURE__*/React.createElement("div", {
    className: `${ChatStyles.replyToContainer} Chat_ReplyToContainer`,
    replytoid: replyToId
  }, /*#__PURE__*/React.createElement("div", {
    className: `Chat_ReplyingToUsername`
  }, "Replying to ", /*#__PURE__*/React.createElement("b", null, "@", replyToUsername)), /*#__PURE__*/React.createElement(Tooltip, {
    title: `Cancel Reply`,
    placement: "top"
  }, /*#__PURE__*/React.createElement(Close, {
    onClick: handleCancelReplyTo,
    className: `${ChatStyles.chatCancelReplyTo}`,
    sx: {
      height: '17.5px'
    }
  })))) : null, /*#__PURE__*/React.createElement("div", {
    className: `${ChatStyles.chatInputSendContainer} Chat_ChatInputSendContainer`
  }, /*#__PURE__*/React.createElement(TextareaAutosize, {
    className: `${ChatStyles.textChatInput} ${ChatStyles.highlightBorder} Chat_TextChatInput`,
    ref: chatInputRef,
    onKeyPress: e => {
      handleKeyPressChat(e, handleSendChat);
    },
    onChange: handleChatTextChange,
    disabled: blockChat || !currentChat
  }), /*#__PURE__*/React.createElement("button", {
    className: `${ChatStyles.send} ${ChatStyles.highlightBorder} Chat_Send`,
    onClick: handleSendChat,
    disabled: blockSend || blockSendForce
  }, "Send")))));
};
export default Module;