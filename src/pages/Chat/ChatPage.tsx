import { Avatar, Button, message } from 'antd';
import React, { useEffect, useState } from 'react';

export type ChatMessageType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};

const wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');

const ChatPage: React.FC = () => {
  return (
    <div>
      <Chat />
    </div>
  );
};

export default ChatPage;

const Chat: React.FC = () => {
  return (
    <>
      <Messages />
      <AddMessageForm />
    </>
  );
};

const Messages: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  useEffect(() => {
    wsChannel.addEventListener('message', (event: MessageEvent) => {
      let newMessages = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, ...newMessages]);
    });
  }, []);

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

const Message: React.FC<{ message: ChatMessageType }> = ({ message }) => {
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

const AddMessageForm: React.FC = () => {
  const [message, setMessage] = useState('');
  const sendMessage = () => {
    if (!message) return;
    wsChannel.send(message);
    setMessage('');
  };
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
      <Button onClick={sendMessage}>Send</Button>
    </>
  );
};
