import { Dispatch } from 'redux';
import {
  authAPI,
  ResultCodeForCaptureEnum,
  ResultCodesEnum,
  securityAPI,
} from '../components/API/api';
import { AppStateType } from './redux-store';
import { ThunkAction } from 'redux-thunk';

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const GET_CAPTCH_URL_SECCESS = 'samurai-network/auth/GET_CAPTCH_URL_SECCESS';

export type InitialStateType = typeof initialState;

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null,
};
type SetAuthUserDataActionPayloadType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};
type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA;
  payload: SetAuthUserDataActionPayloadType;
};
type GetCaptchUrlSuccessActionType = {
  type: typeof GET_CAPTCH_URL_SECCESS;
  payload: {
    captchaUrl: string;
  };
};
type ActionsType = GetCaptchUrlSuccessActionType | SetAuthUserDataActionType;

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
  // debugger
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCH_URL_SECCESS: {
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

export const setAuthUserDataAC = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean,
): SetAuthUserDataActionType => {
  return {
    type: SET_USER_DATA,
    payload: {
      userId,
      email,
      login,
      isAuth,
    },
  };
};

export const getCaptchUrlSuccess = (captchaUrl: string): GetCaptchUrlSuccessActionType => {
  return {
    type: GET_CAPTCH_URL_SECCESS,
    payload: {
      captchaUrl,
    },
  };
};

type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionsType>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>;

export const getAuthUserData = (): ThunkType => async (
  dispatch: DispatchType,
  getState: GetStateType,
) => {
  let meData = await authAPI.authMe();
  // debugger
  if (meData.resultCode === ResultCodesEnum.Success) {
    let { id, login, email } = meData.data;
    dispatch(setAuthUserDataAC(id, email, login, true));
  }
};
export const login = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: any,
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
export const logout = (): ThunkType => async (dispatch: DispatchType, getState: GetStateType) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === ResultCodesEnum.Success) {
    dispatch(setAuthUserDataAC(null, null, null, false));
    // } else {
    //   let action = stopSubmit();
    //   debugger
  }
};

export const getCaptchUrl = (): ThunkType => async (
  dispatch: DispatchType,
  getState: GetStateType,
) => {
  const response = await securityAPI.getCaptchUrl();
  const captchUrl = response.data.url;
  dispatch(getCaptchUrlSuccess(captchUrl));
};
export default authReducer;
