// import { rerenderEntireTree } from "../render";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
  _state: {
    
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", name: "Alex K", age: 34, likesCount: 12 },
        { id: 2, message: "It's my first post", name: "John Doe", age: 52, likesCount: 11 },
        { id: 3, message: "Lorem", name: "Dima K", age: 28, likesCount: 8 },
      ],
      newPostText: "it-kamasutra.com",
    },
    messagesPage: {
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
    },
    sidebar: {},

  },
  _callSubscriber() { },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 4,
        message: this._state.profilePage.newPostText,
        name: "AlexK",
        age: 34,
        likesCount: 0
      };
  
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.messagesPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body  = this._state.messagesPage.newMessageBody;
      this._state.messagesPage.newMessageBody = '';
      this._state.messagesPage.messagesData.push({ 
        id: 10,
        message: body,
        author: "Michael John",
        location: "Local Austria",
        date: "Today"
       });
      this._callSubscriber(this._state);
    }
  }
}
export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
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

export default store;

