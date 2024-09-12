import { Avatar, Button, message } from 'antd';
import React, { useEffect, useState } from 'react';

export type ChatMessageType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};

const ChatPage: React.FC = () => {
  return (
    <div>
      <Chat />
    </div>
  );
};

export default ChatPage;

const Chat: React.FC = () => {
  const [wsChannel, setWsChannel] = useState<WebSocket | null>(null);
  // let wsChannel: WebSocket;

  useEffect(() => {
    let ws: WebSocket;
    const closeHandler = () => {
      console.log('Close socket');
      setTimeout(createWS, 3000);
      createWS();
    };
    function createWS() {
      if (ws) {
        ws.removeEventListener('close', closeHandler);
        ws.close();
      }
      ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');

      ws.addEventListener('close', closeHandler);
      setWsChannel(ws);
    }
    createWS();
    return () => {
      ws.removeEventListener('close', closeHandler);
      ws.close();
    };
  }, []);

  // useEffect(() => {
  //   if (wsChannel)
  //     wsChannel.addEventListener('close', () => {
  //       console.log('Close socket');
  //     });
  // }, [wsChannel]);

  return (
    <>
      <Messages wsChannel={wsChannel} />
      <AddMessageForm wsChannel={wsChannel} />
    </>
  );
};

const Messages: React.FC<{ wsChannel: WebSocket | null }> = ({ wsChannel }) => {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const messageHandler = (event: MessageEvent) => {
    let newMessages = JSON.parse(event.data);
    setMessages((prevMessages) => [...prevMessages, ...newMessages]);
  };
  useEffect(() => {
    if (wsChannel) wsChannel.addEventListener('message', messageHandler);
    debugger;
    return () => {
      if (wsChannel) wsChannel.removeEventListener('message', messageHandler);
    };
  }, [wsChannel]);

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

const AddMessageForm: React.FC<{ wsChannel: WebSocket | null }> = ({ wsChannel }) => {
  const [message, setMessage] = useState('');
  const [readyStateus, setReadyStatus] = useState<'pending' | 'ready'>('pending');
  const sendMessage = () => {
    if (!message) return;
    if (wsChannel) wsChannel.send(message);
    setMessage('');
  };
  const openHadler = () => {
    setReadyStatus('ready');
  };
  useEffect(() => {
    if (wsChannel) wsChannel.addEventListener('open', openHadler);
    return () => {
      if (wsChannel) wsChannel.removeEventListener('open', openHadler);
    };
  }, [wsChannel]);
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
      <Button disabled={readyStateus !== 'ready'} onClick={sendMessage}>
        Send
      </Button>
    </>
  );
};
