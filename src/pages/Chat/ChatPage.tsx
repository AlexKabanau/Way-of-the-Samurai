import { Avatar, Button, message } from 'antd';
import React, { useEffect, useRef, useState, UIEvent, UIEventHandler } from 'react';
import { ChatMessageAPIType } from '../../components/API/chat-api';
import { useDispatch, useSelector } from 'react-redux';
import {
  sendMessage,
  startMessagesListening,
  stopMessagesListening,
} from '../../redux/chat-reducer';
import { AppDispatch } from '../../redux/redux-store';
import store, { AppStateType } from '../../redux/redux-store';

const ChatPage: React.FC = () => {
  return (
    <div>
      <Chat />
    </div>
  );
};

export default ChatPage;

const Chat: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  let status = useSelector((state: AppStateType) => state.chat.status);

  useEffect(() => {
    dispatch(startMessagesListening());
    return () => {
      dispatch(stopMessagesListening());
    };
  }, []);

  return (
    <>
      {status === 'error' && <div>Some Error Occured. Please Refresh thepage</div>}

      <>
        <Messages />
        <AddMessageForm />
      </>
    </>
  );
};

const Messages: React.FC = ({}) => {
  const messagesAnchorRef = useRef<HTMLDivElement>(null);

  const messages = useSelector((state: AppStateType) => state.chat.messages);
  const [autoscroll, setAutoscrollIsActive] = useState(false);
  const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const element = e.currentTarget;
    if (Math.abs(element.scrollHeight - element.scrollTop - element.clientHeight) < 300) {
      // console.log('долистал');
      !autoscroll && setAutoscrollIsActive(true);
    } else {
      autoscroll && setAutoscrollIsActive(false);
    }
  };

  useEffect(() => {
    if (autoscroll) {
      if (messagesAnchorRef.current)
        messagesAnchorRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div
      style={{
        height: '400px',
        overflowY: 'auto',
      }}
      //@ts-ignore
      onScroll={scrollHandler}
    >
      {messages.map((n, index) => (
        <Message key={n.id} message={n} />
      ))}
      <div ref={messagesAnchorRef}></div>
    </div>
  );
};

const Message: React.FC<{ message: ChatMessageAPIType }> = React.memo(({ message }) => {
  return (
    <div>
      <img src={message.photo} style={{ width: '30px' }} />
      <b>{message.userName}</b>
      <br />
      {message.message}
      <hr />
    </div>
  );
});

const AddMessageForm: React.FC = ({}) => {
  const [message, setMessage] = useState('');
  // const [readyStateus, setReadyStatus] = useState<'pending' | 'ready'>('pending');
  let status = useSelector((state: AppStateType) => state.chat.status);
  const dispatch: AppDispatch = useDispatch();

  const sendMessageHandler = () => {
    if (!message) return;
    dispatch(sendMessage(message));
    setMessage('');
  };
  // const openHadler = () => {
  //   setReadyStatus('ready');
  // };

  return (
    <>
      <div>
        <textarea
          onChange={(e) => setMessage(e.currentTarget.value)}
          value={message}
          name=""
          id=""
        ></textarea>
      </div>
      <Button disabled={status !== 'ready'} onClick={sendMessageHandler}>
        Send
      </Button>
    </>
  );
};
