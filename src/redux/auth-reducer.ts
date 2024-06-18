import { authAPI, securityAPI } from '../components/API/api';

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

const authReducer = (state = initialState, action: any): InitialStateType => {
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

type GetCaptchUrlSuccessActionType = {
  type: typeof GET_CAPTCH_URL_SECCESS;
  payload: {
    captchaUrl: string;
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

export const getAuthUserData = () => async (dispatch: any) => {
  let response = await authAPI.authMe();
  // debugger
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserDataAC(id, email, login, true));
  }
};
export const login = (email: string, password: string, rememberMe: boolean, captcha: any) => async (
  dispatch: any,
) => {
  let response = await authAPI.login(email, password, rememberMe, captcha);

  // debugger
  if (response.resultCode === 0) {
    // debugger
    dispatch(getAuthUserData());
  } else {
    if (response.resultCode === 10) {
      dispatch(getCaptchUrl());
    }

    alert(response.messages);
  }
};
export const logout = () => async (dispatch: any) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserDataAC(null, null, null, false));
    // } else {
    //   let action = stopSubmit();
    //   debugger
  }
};

export const getCaptchUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchUrl();
  const captchUrl = response.data.url;
  dispatch(getCaptchUrlSuccess(captchUrl));
};
export default authReducer;
