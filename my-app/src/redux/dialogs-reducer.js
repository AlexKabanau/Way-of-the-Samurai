const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Michael John" },
    { id: 2, name: "Fredericka Michelin" },
    { id: 3, name: "Mila Riksha" },
    { id: 4, name: "Oskar Samborsky" },
    { id: 5, name: "Dima" },
    { id: 6, name: "Vlad" },
  ],
  messages: [
    { id: 1, message: "Hi", author: "Michael John", location: "Local Austria", date: "Today" },
    { id: 2, message: "How are you", author: "Fredericka Michelin", location: "Local Austria", date: "Yesterday" },
    { id: 3, message: "How are you123", author: "Mila Riksha", location: "Local Austria", date: "Yesterday" },
    { id: 4, message: "What's up", author: "Oskar Samborsky", location: "Local Austria", date: "Yesterday" },
    { id: 5, message: "What's up bro", author: "Michael John", location: "Local Austria", date: "Today" },
    { id: 6, message: "YO", author: "Me", location: "Local Austria", date: "Yesterday" },
  ],
  newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      return { 
        ...state,
        newMessageBody: action.body
      };
    }

    case SEND_MESSAGE: {
      let body = state.newMessageBody;
      let newMessage = { 
        id: 10,
        message: body,
        author: "Me",
        location: "Local Austria",
        date: "Today"
      };
      return { 
        ...state,
        messages: [...state.messages, newMessage],
        newMessageBody : '',
      };
    }
    default:
      return state

  }
}

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE
  }
}

export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  }
}

export default dialogsReducer
