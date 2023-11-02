import React, { useRef } from 'react';
import Talk from 'talkjs';

const chatboxEl = useRef();

const [talkLoaded, markTalkLoaded] = useState(false);

const LiveChat = () => {
  const chatboxEl = useRef();

  React.useEffect(() => {
    // This ensures code inside here only runs on the client
    if (typeof window !== 'undefined') {
      Talk.ready.then(() => markTalkLoaded(true));
      // Rest of your TalkJS initialization logic...
    }
  }, []);

  React.useEffect(() => {
    Talk.ready.then(() => markTalkLoaded(true));

    if (talkLoaded) {
      const currentUser = new Talk.User({
        id: '1',
        name: 'Henry Mill',
        email: 'henrymill@example.com',
        photoUrl: 'henry.jpeg',
        welcomeMessage: 'Hello!',
        role: 'default',
      });

      const otherUser = new Talk.User({
        id: '2',
        name: 'Fidio stream',
        email: 'jessicawells@example.com',
        photoUrl: '/img/internal/group4.png',
        welcomeMessage: 'Hello!',
        role: 'default',
      });

      const session = new Talk.Session({
        appId: 'tiqNwksi',
        me: currentUser,
      });

      const conversationId = Talk.oneOnOneId(currentUser, otherUser);
      const conversation = session.getOrCreateConversation(conversationId);
      conversation.setParticipant(currentUser);
      conversation.setParticipant(otherUser);

      const chatbox = session.createChatbox();
      chatbox.select(conversation);
      chatbox.mount(chatboxEl.current);

      return () => session.destroy();
    }
  }, [talkLoaded]);
  return <div ref={chatboxEl} className='h-screen'></div>;
};

export default LiveChat;
