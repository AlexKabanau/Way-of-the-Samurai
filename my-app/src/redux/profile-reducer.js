const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", name: "Alex K", age: 34, likesCount: 12 },
    { id: 2, message: "It's my first post", name: "John Doe", age: 52, likesCount: 11 },
    { id: 3, message: "Lorem", name: "Dima K", age: 28, likesCount: 8 },
  ],
  newPostText: "it-kamasutra.com",
}

const profileReducer = (state = initialState, action) => {
  
  switch (action.type) {

    case ADD_POST: {
      let newPost = {
        id: 4,
        message: state.newPostText,
        name: "AlexK",
        age: 34,
        likesCount: 0
      };
      let stateCopy = {...state}
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = {...state};

      stateCopy.newPostText = action.newText;
      return stateCopy
    }
    default:
      return state

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

export default profileReducer