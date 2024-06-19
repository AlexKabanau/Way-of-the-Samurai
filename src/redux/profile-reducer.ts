import { profileAPI, usersAPI } from '../components/API/api';
import { PhotosType, PostType, ProfileType } from '../types/types';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

type InitialStateType = typeof initialState;

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', name: 'Alex K', age: 34, likesCount: 12 },
    { id: 2, message: "It's my first post", name: 'John Doe', age: 52, likesCount: 11 },
    { id: 3, message: 'Lorem', name: 'Dima K', age: 28, likesCount: 8 },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: '',
  newPostText: '',
};

// type ProfileReducerActionType = {
//   type: typeof ADD_POST | SET_USER_PROFILE | SET_STATUS | DELETE_POST | SAVE_PHOTO_SUCCESS;
// };

const profileReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        message: action.newPostText,
        name: 'AlexK',
        age: 34,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.id),
      };
    }
    case SAVE_PHOTO_SUCCESS: {
      return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType };
    }
    default:
      return state;
  }
};
type AddPostActionCreatorType = {
  type: typeof ADD_POST;
  newPostText: string;
};
export const addPostActionCreator = (newPostText: string): AddPostActionCreatorType => {
  // debugger
  return {
    type: ADD_POST,
    newPostText,
  };
};
type DeletePostType = {
  type: typeof DELETE_POST;
  postId: number;
};
export const deletePost = (postId: number): DeletePostType => {
  // debugger
  return {
    type: DELETE_POST,
    postId,
  };
};

type SetUserProfileType = {
  type: typeof SET_USER_PROFILE;
  profile: ProfileType;
};
export const setUserProfile = (profile: ProfileType): SetUserProfileType => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};

type SetStatusType = {
  type: typeof SET_STATUS;
  status: string;
};
export const setStatus = (status: string): SetStatusType => {
  return {
    type: SET_STATUS,
    status,
  };
};

type SavePhotoSuccessType = {
  type: typeof SAVE_PHOTO_SUCCESS;
  photos: PhotosType;
};
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos,
  };
};

type GetUserProfileType = {};

export const getUserProfile = (userId: number) => async (dispatch: any) => {
  let response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};
export const getStatus = (userId: number) => async (dispatch: any) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};
export const updateStatus = (status: string) => async (dispatch: any) => {
  let response = await profileAPI.updateStatus(status);

  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export const savePhoto = (file: any) => async (dispatch: any) => {
  let response = await profileAPI.savePhoto(file);

  if (response.data.resultCode === 0) {
    // debugger
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};
export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
  const userId = getState().auth.userId;
  let response = await profileAPI.saveProfile(profile);
  // debugger
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  }
};

export default profileReducer;
