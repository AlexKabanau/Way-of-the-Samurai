// import { rerenderEntireTree } from "../render";
let rerenderEntireTree;

let state = {
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
  },

}

export const addPost = () => {
  let newPost = {
    id: 4,
    message: state.profilePage.newPostText,
    name: "AlexK",
    age: 34,
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state)
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;