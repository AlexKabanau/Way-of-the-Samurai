import { Action, Dispatch } from 'redux';
import { ResultCodeForCaptureEnum, ResultCodesEnum } from '../components/API/api';
import { securityAPI } from '../components/API/security-api';
import { authAPI } from '../components/API/auth-api';
import { AppStateType, BaseThunkType, InferActionsTypes } from './redux-store';
import { ThunkAction } from 'redux-thunk';
// import { ActionsType } from './app-reducer';

// const SET_USER_DATA = 'sn/auth/SET_USER_DATA';
// const GET_CAPTCH_URL_SECCESS = 'sn/auth/GET_CAPTCH_URL_SECCESS';

export type InitialStateType = typeof initialState;

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null,
};
// type SetAuthUserDataActionPayloadType = {
//   userId: number | null;
//   email: string | null;
//   login: string | null;
//   isAuth: boolean;
// };
// type SetAuthUserDataActionType = {
//   type: typeof SET_USER_DATA;
//   payload: SetAuthUserDataActionPayloadType;
// };
// type GetCaptchUrlSuccessActionType = {
//   type: typeof GET_CAPTCH_URL_SECCESS;
//   payload: {
//     captchaUrl: string;
//   };
// };
// type ActionsType = GetCaptchUrlSuccessActionType | SetAuthUserDataActionType;

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  // debugger
  switch (action.type) {
    case 'sn/auth/SET_USER_DATA':
    case 'sn/auth/GET_CAPTCH_URL_SECCESS': {
      debugger;
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  setAuthUserDataAC: (
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
  ) => {
    return {
      type: 'sn/auth/SET_USER_DATA',
      payload: {
        userId,
        email,
        login,
        isAuth,
      },
    } as const;
  },
  getCaptchUrlSuccess: (captchaUrl: string) => {
    return {
      type: 'sn/auth/GET_CAPTCH_URL_SECCESS',
      payload: {
        captchaUrl,
      },
    } as const;
  },
};

export const getAuthUserData = (): ThunkType => async (dispatch, getState: GetStateType) => {
  let meData = await authAPI.authMe();
  // debugger
  if (meData.resultCode === ResultCodesEnum.Success) {
    let { id, login, email } = meData.data;
    dispatch(actions.setAuthUserDataAC(id, email, login, true));
  }
};
export const login = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string,
): ThunkType => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe, captcha);

  // debugger
  if (response.resultCode === ResultCodesEnum.Success) {
    // debugger
    dispatch(getAuthUserData());
  } else {
    if (response.resultCode === ResultCodeForCaptureEnum.CaptureIsRequired) {
      dispatch(getCaptchUrl());
    }

    alert(response.messages);
  }
};
export const logout = (): ThunkType => async (dispatch, getState: GetStateType) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === ResultCodesEnum.Success) {
    dispatch(actions.setAuthUserDataAC(null, null, null, false));
    // } else {
    //   let action = stopSubmit();
    //   debugger
  }
};

export const getCaptchUrl = (): ThunkType => async (dispatch, getState: GetStateType) => {
  const response = await securityAPI.getCaptchUrl();
  const captchUrl = response.url;
  dispatch(actions.getCaptchUrlSuccess(captchUrl));
};
export default authReducer;
type ActionsTypes = InferActionsTypes<typeof actions>;

type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionsTypes>;
type ThunkType = BaseThunkType<ActionsTypes>;
