// import { rerenderEntireTree } from "../render";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer.ts";
import dialogsReducer from "./dialogs-reducer";

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

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}

export default store;

