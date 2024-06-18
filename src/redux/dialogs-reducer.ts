const SEND_MESSAGE = 'SEND-MESSAGE';

type InitialStateType1 = {
  dialogs: Array<DialogType>;
  messages: Array<MessageType>;
};

export type InitialStateType = typeof initialState;

type DialogType = {
  id: number;
  name: string;
};

type MessageType = {
  id: number;
  message: string;
  author: string;
  location: string;
  date: string;
};

type DialogsReducerActionType = {
  type: string;
  newMessageBody: string;
};

let initialState = {
  dialogs: [
    { id: 1, name: 'Michael John' },
    { id: 2, name: 'Fredericka Michelin' },
    { id: 3, name: 'Mila Riksha' },
    { id: 4, name: 'Oskar Samborsky' },
    { id: 5, name: 'Dima' },
    { id: 6, name: 'Vlad' },
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: 'Hi', author: 'Michael John', location: 'Local Austria', date: 'Today' },
    {
      id: 2,
      message: 'How are you',
      author: 'Fredericka Michelin',
      location: 'Local Austria',
      date: 'Yesterday',
    },
    {
      id: 3,
      message: 'How are you123',
      author: 'Mila Riksha',
      location: 'Local Austria',
      date: 'Yesterday',
    },
    {
      id: 4,
      message: "What's up",
      author: 'Oskar Samborsky',
      location: 'Local Austria',
      date: 'Yesterday',
    },
    {
      id: 5,
      message: "What's up bro",
      author: 'Michael John',
      location: 'Local Austria',
      date: 'Today',
    },
    { id: 6, message: 'YO', author: 'Me', location: 'Local Austria', date: 'Yesterday' },
  ] as Array<MessageType>,
};

const dialogsReducer = (
  state = initialState,
  action: DialogsReducerActionType,
): InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = action.newMessageBody;
      let newMessage = {
        id: 10,
        message: body,
        author: 'Me',
        location: 'Local Austria',
        date: 'Today',
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    }
    default:
      return state;
  }
};
type SendMessageCreatorActionType = {
  type: typeof SEND_MESSAGE;
  newMessageBody: string;
};
export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => {
  return {
    type: SEND_MESSAGE,
    newMessageBody,
  };
};

export default dialogsReducer;
