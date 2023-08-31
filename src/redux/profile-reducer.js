import { profileAPI, usersAPI } from "../components/API/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", name: "Alex K", age: 34, likesCount: 12 },
    { id: 2, message: "It's my first post", name: "John Doe", age: 52, likesCount: 11 },
    { id: 3, message: "Lorem", name: "Dima K", age: 28, likesCount: 8 },
  ],
  profile: null,
  status: "",
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_POST: {
      let newPost = {
        id: 4,
        message: action.newPostText,
        name: "AlexK",
        age: 34,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.id)
      };
    }
    case SAVE_PHOTO_SUCCESS: {
      return {...state, profile: {...state.profile, photos: action.photos}
      };
    }
    default:
      return state

  }
}

export const addPostActionCreator = (newPostText) => {
  // debugger
  return {
    type: ADD_POST,
    newPostText
  }
}
export const deletePost = (postId) => {
  // debugger
  return {
    type: DELETE_POST,
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
export const savePhotoSuccess = (photos) => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos
  }
}


export const getUserProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data))
}
export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data))

}
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);

  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}
export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);

  if (response.data.resultCode === 0) {
    // debugger
    dispatch(savePhotoSuccess(response.data.data.photos))
  }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  let response = await profileAPI.saveProfile(profile);
  // debugger
  if (response.data.resultCode === 0) {
    
    dispatch(getUserProfile(userId))
  }
}

export default profileReducer