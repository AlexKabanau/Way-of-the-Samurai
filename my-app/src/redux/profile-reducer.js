import { profileAPI, usersAPI } from "../components/API/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", name: "Alex K", age: 34, likesCount: 12 },
    { id: 2, message: "It's my first post", name: "John Doe", age: 52, likesCount: 11 },
    { id: 3, message: "Lorem", name: "Dima K", age: 28, likesCount: 8 },
  ],
  newPostText: "it-kamasutra.com",
  profile: null,
  status: "",
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
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }
    case SET_STATUS: {
      console.log(state)
      console.log(action.status)
      return {
        ...state,
        status: action.status
      };
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
export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile
  }
}
export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status
  }
}
export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId)
  .then(response => {
    dispatch(setUserProfile(response.data))
  })
}
export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
    .then(response => {
      // debugger
      dispatch(setStatus(response.data))
    })
}
export const updateStatus = (status) => (dispatch) => {
  console.log(status)
  profileAPI.updateStatus(status)
    .then(response => {
      debugger
      console.log(response.data.resultCode)
      if (response.data.resultCode === 0) {


        dispatch(setStatus(status))
      }
    })
}

export default profileReducer