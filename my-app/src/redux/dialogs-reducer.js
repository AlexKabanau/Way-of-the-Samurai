const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogsData: [
    { id: 1, name: "Michael John" },
    { id: 2, name: "Fredericka Michelin" },
    { id: 3, name: "Mila Riksha" },
    { id: 4, name: "Oskar Samborsky" },
    { id: 5, name: "Dima" },
    { id: 6, name: "Vlad" },
  ],
  messagesData: [
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
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messagesData.push({
        id: 10,
        message: body,
        author: "Me",
        location: "Local Austria",
        date: "Today"
      });
      return state
    default:
      return state

  }

  // if (action.type === UPDATE_NEW_MESSAGE_BODY) {
  //   state.newMessageBody = action.body;
  // } else if (action.type === SEND_MESSAGE) {
  //   let body = state.newMessageBody;
  //   state.newMessageBody = '';
  //   state.messagesData.push({
  //     id: 10,
  //     message: body,
  //     author: "Michael John",
  //     location: "Local Austria",
  //     date: "Today"
  //   });
  // }

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
