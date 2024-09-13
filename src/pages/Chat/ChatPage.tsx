import { Avatar, Button, message } from 'antd';
import React, { useEffect, useState } from 'react';
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

  // useEffect(() => {
  //   let ws: WebSocket;
  //   const closeHandler = () => {
  //     console.log('Close socket');
  //     setTimeout(createWS, 3000);
  //     createWS();
  //   };

  //   createWS();
  //   return () => {
  //     ws.removeEventListener('close', closeHandler);
  //     ws.close();
  //   };
  // }, []);

  // useEffect(() => {
  //   if (wsChannel)
  //     wsChannel.addEventListener('close', () => {
  //       console.log('Close socket');
  //     });
  // }, [wsChannel]);

  return (
    <>
      {status === 'error' ? (
        <div>Some Error Occured. Please Refresh thepage</div>
      ) : (
        <>
          <Messages />
          <AddMessageForm />
        </>
      )}
    </>
  );
};

const Messages: React.FC = ({}) => {
  const messages = useSelector((state: AppStateType) => state.chat.messages);

  return (
    <div
      style={{
        height: '400px',
        overflowY: 'auto',
      }}
    >
      {messages.map((n, index) => (
        <Message key={index} message={n} />
      ))}
    </div>
  );
};

const Message: React.FC<{ message: ChatMessageAPIType }> = ({ message }) => {
  return (
    <div>
      <img src={message.photo} style={{ width: '30px' }} />
      <b>{message.userName}</b>
      <br />
      {message.message}
      <hr />
    </div>
  );
};

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
