import React from 'react';
import ChatStyles from '/modules/streaming/chat/Chat.module.scss';
import WatchPageStyles from '/modules/streaming/watch/WatchPage.module.scss';
import ChatLog from './ChatLog';
import { DonateBar } from '/modules/streaming/chat';
import {
  RecentChatTimeout,
  ReplyTo,
  ReplyToInfo,
  ModChatTools,
} from '/modules/streaming/chat/parts';
import TextareaAutosize from 'react-textarea-autosize';
import { X } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const Module = (props) => {
  const {
    chatInputRef,
    blockChat,
    handleChatTextChange,
    handleKeyPressChat,
    handleSendChat,
    currentChat,
    blockSend,
    blockSendForce,
    renderDonations,
    handleRunTasks,
    windowWidth,
  } = props;

  const dispatchSetVideoSetChatState = () => {
    props?._LocalEventEmitter?.dispatch('video_set_chat_state', {});
  };

  return (
    <div
      className={`${props?.className ?? ''} ${WatchPageStyles.chatContainer} ${
        props?.chatState
          ? `${WatchPageStyles.chatOpen}`
          : `${WatchPageStyles.chatClosed}`
      } ${
        !props?.chatState && props?._isMobile
          ? `${WatchPageStyles.chatClosedMobile}`
          : null
      } WatchPage_ChatContainer`}
    >
      <div
        className={`${props.className} ${ChatStyles.chatContainer} Chat_ChatContainer `}
        style={{
          height: `${
            !props.chatState
              ? 0
              : windowWidth === null || windowWidth > 700
              ? `calc(100vh - ${props?.menuHeight})`
              : '50vh'
          }`,
          maxHeight: '80vh',
        }}
        onClick={handleRunTasks}
      >
        <div className='flex border-b-[0.5px] border-dashBorder justify-between px-4 py-2 border-solid overflow-hidden w-full'>
          <div className='flex gap-2 items-center'>
            <div className='w-2 h-2 bg-[#12CB12] rounded'></div>
            <h2 className='font-bold text-lg'>Live chat</h2>
          </div>
          <X
            className='text-dashtext cursor-pointer'
            onClick={dispatchSetVideoSetChatState}
          />
        </div>

        <ModChatTools {...props} />
        {renderDonations}
        <ChatLog {...props} />
        <div
          className={`${ChatStyles.chatInputContainer} ${
            !props.chatState ? `${ChatStyles.forceHideChat}` : null
          } Chat_ChatInputContainer`}
        >
          <div
            className={`${ChatStyles.chatInputInternalContainer} Chat_ChatInputInternalContainer `}
          >
            <RecentChatTimeout {...props} />
            <DonateBar {...props} />
            <ReplyTo {...props} />
            <ReplyToInfo {...props} />
            {/* <div
              className={`${ChatStyles.chatInputSendContainer} Chat_ChatInputSendContainer`}
            >
              <TextareaAutosize
                className={`${ChatStyles.textChatInput} ${ChatStyles.highlightBorder} Chat_TextChatInput`}
                ref={chatInputRef}
                onKeyPress={(e) => {
                  handleKeyPressChat(e, handleSendChat);
                }}
                onChange={handleChatTextChange}
                disabled={blockChat || !currentChat}
              />
              <button
                className={`${ChatStyles.send} ${ChatStyles.highlightBorder} Chat_Send`}
                onClick={handleSendChat}
                disabled={blockSend || blockSendForce}
              >
                Send
              </button>
            </div> */}
            <div className='flex items-start p-2  bg-black rounded-b-[20px] border-dashSides border-[1px] border-l-[2px]'>
              <div className='relative flex-1'>
                <Textarea
                  placeholder='Send a message'
                  className='dark:bg-dashSides text-white placeholder-white dark:placeholder-white rounded-full px-4 py-2 focus:outline-none pr-12 min-h-[42px] resize-none border-none'
                  rows={1}
                  ref={chatInputRef}
                  onKeyPress={(e) => {
                    handleKeyPressChat(e, handleSendChat);
                  }}
                  onChange={handleChatTextChange}
                  disabled={blockChat || !currentChat}
                />
                <div className='absolute top-1/2 right-2 -translate-y-1/2'>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='p-1 dark:hover:bg-transparent dark:hover:border-none'
                    onClick={handleSendChat}
                    disabled={blockSend || blockSendForce}
                  >
                    <SendIcon className='w-5 h-5 text-white dark:bg-inherit' />
                  </Button>
                </div>
              </div>
              <Button variant='ghost' size='icon' className='p-2' disabled>
                <SmileIcon className='w-5 h-5 text-white' />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module;

function SendIcon(props) {
  return (
    <svg
      {...props}
      width='24'
      height='24'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7.04536 3.36618L13.0459 6.36644C15.7377 7.71236 15.7377 9.91349 13.0459 11.2594L7.04536 14.2597C3.00762 16.2785 1.36028 14.6242 3.37915 10.5935L3.98902 9.38073C4.14324 9.07229 4.14324 8.56056 3.98902 8.25212L3.37915 7.03239C1.36028 3.00166 3.01463 1.34731 7.04536 3.36618Z'
        stroke='white'
        stroke-width='1.0515'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M4.19238 8.81348H7.97777'
        stroke='white'
        stroke-width='1.0515'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}

function SmileIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='12' cy='12' r='10' />
      <path d='M8 14s1.5 2 4 2 4-2 4-2' />
      <line x1='9' x2='9.01' y1='9' y2='9' />
      <line x1='15' x2='15.01' y1='9' y2='9' />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
    </svg>
  );
}
