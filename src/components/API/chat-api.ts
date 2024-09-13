import { unsubscribe } from 'diagnostics_channel';

const subscribers = {
  'message-received': [] as MessagesReceivedSubscriberType[],
  'status-changed': [] as StatusChangedSubscriberType[],
};

let ws: WebSocket | null = null;

const closeHandler = () => {
  console.log('Close socket');
  notifySubscribersAboutStatus('pending');
  setTimeout(createChannel, 3000);
};

const messageHandler = (event: MessageEvent) => {
  const newMessages = JSON.parse(event.data);
  subscribers['message-received'].forEach((s) => s(newMessages));
};
const openHandler = () => {
  notifySubscribersAboutStatus('ready');
};
const errorHandler = () => {
  notifySubscribersAboutStatus('error');
  console.error('RESTART PAGE');
};

const cleanUp = () => {
  if (ws) {
    ws.removeEventListener('close', closeHandler);
    ws.removeEventListener('message', messageHandler);
    ws.removeEventListener('open', openHandler);
    ws.removeEventListener('error', errorHandler);
  }
};
const notifySubscribersAboutStatus = (status: StatusType) => {
  subscribers['status-changed'].forEach((s) => s(status));
};

function createChannel() {
  cleanUp();
  if (ws) ws.close();

  ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
  notifySubscribersAboutStatus('pending');
  ws.addEventListener('close', closeHandler);
  ws.addEventListener('open', openHandler);
  ws.addEventListener('error', errorHandler);
}

export const cahtAPI = {
  start() {
    createChannel();
  },
  stop() {
    subscribers['message-received'] = [];
    subscribers['status-changed'] = [];
    cleanUp();
    if (ws) ws.close();
  },
  subscribe(
    eventName: EventsNamesType,
    callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType,
  ) {
    //@ts-ignore
    subscribers[eventName].push(callback);
    return () => {
      //@ts-ignore
      subscribers[eventName] = subscribers[eventName].filter((s) => s !== callback);
    };
  },
  unsubscribe(
    eventName: EventsNamesType,
    callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType,
  ) {
    //@ts-ignore
    subscribers[eventName] = subscribers[eventName].filter((s) => s !== callback);
  },
  sendMessage(message: string) {
    if (ws) ws.send(message);
  },
};

type MessagesReceivedSubscriberType = (messages: ChatMessageAPIType[]) => void;
type StatusChangedSubscriberType = (status: StatusType) => void;

export type ChatMessageAPIType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};

type EventsNamesType = 'message-received' | 'status-changed';
export type StatusType = 'pending' | 'ready' | 'error';
