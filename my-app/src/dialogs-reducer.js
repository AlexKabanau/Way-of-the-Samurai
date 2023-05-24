const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

const dialogsReducer = (state, action) => {

  if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    state.newMessageBody = action.body;
  } else if (action.type === SEND_MESSAGE) {
    let body = state.newMessageBody;
    state.newMessageBody = '';
    state.messagesData.push({
      id: 10,
      message: body,
      author: "Michael John",
      location: "Local Austria",
      date: "Today"
    });
  }

  return state
}

export default dialogsReducer
