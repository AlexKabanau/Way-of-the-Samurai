import { AppStateType, BaseThunkType, InferActionsTypes } from './redux-store';
import { profileAPI } from '../components/API/profile-api';
import { usersAPI } from '../components/API/users-api';
import { PhotosType, PostType, ProfileType } from '../types/types';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

const ADD_POST = 'SN/PROFILE/ADD-POST';
const SET_USER_PROFILE = 'SN/PROFILE/SET_USER_PROFILE';
const SET_STATUS = 'SN/PROFILE/SET_STATUS';
const DELETE_POST = 'SN/PROFILE/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SN/PROFILE/SAVE_PHOTO_SUCCESS';

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

type ActionsTypes = InferActionsTypes<typeof actions>;

const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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
        posts: state.posts.filter((post) => post.id !== action.postId),
      };
    }
    case SAVE_PHOTO_SUCCESS: {
      return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType };
    }
    default:
      return state;
  }
};

export const actions = {
  addPostActionCreator: (newPostText: string) => {
    // debugger
    return {
      type: ADD_POST,
      newPostText,
    } as const;
  },
  deletePost: (postId: number) => {
    // debugger
    return {
      type: DELETE_POST,
      postId,
    } as const;
  },
  setUserProfile: (profile: ProfileType) => {
    return {
      type: SET_USER_PROFILE,
      profile,
    } as const;
  },
  setStatus: (status: string) => {
    return {
      type: SET_STATUS,
      status,
    } as const;
  },
  savePhotoSuccess: (photos: PhotosType) => {
    return {
      type: SAVE_PHOTO_SUCCESS,
      photos,
    } as const;
  },
};

type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionsTypes>;
type ThunkType = BaseThunkType<ActionsTypes>;

export const getUserProfile = (userId: number): ThunkType => async (dispatch: DispatchType) => {
  let response = await profileAPI.getProfile(userId);
  dispatch(actions.setUserProfile(response));
};
export const getStatus = (userId: number): ThunkType => async (
  dispatch: DispatchType,
  getState: GetStateType,
) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(actions.setStatus(response));
};
export const updateStatus = (status: string): ThunkType => async (dispatch: DispatchType) => {
  let response = await profileAPI.updateStatus(status);

  if (response.resultCode === 0) {
    dispatch(actions.setStatus(status));
  }
};
export const savePhoto = (file: any): ThunkType => async (dispatch: DispatchType) => {
  let response = await profileAPI.savePhoto(file);

  if (response.resultCode === 0) {
    // debugger
    dispatch(actions.savePhotoSuccess(response.data.photos));
  }
};
export const saveProfile = (profile: ProfileType): ThunkType => async (
  dispatch,
  getState: GetStateType,
) => {
  const userId = getState().auth.userId as number;
  let response = await profileAPI.saveProfile(profile);
  // debugger
  if (response.resultCode === 0) {
    dispatch(getUserProfile(userId));
  }
};

export default profileReducer;
