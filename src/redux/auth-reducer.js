import { authAPI, securityAPI } from "../components/API/api";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const GET_CAPTCH_URL_SECCESS = 'samurai-network/auth/GET_CAPTCH_URL_SECCESS';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
}

const authReducer = (state = initialState, action) => {
  // debugger
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCH_URL_SECCESS: {
      debugger
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state

  }
}

export const setAuthUserDataAC = (userId, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    payload: {
      userId,
      email,
      login,
      isAuth
    }
  }
}
export const getCaptchUrlSuccess = (captchaUrl) => {
  return {
    type: GET_CAPTCH_URL_SECCESS,
    payload: {
      captchaUrl
    }
  }
}

export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.authMe();
  // debugger
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserDataAC(id, email, login, true))
  }


}
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe, captcha);

  // debugger
  if (response.resultCode === 0) {
    // debugger
    dispatch(getAuthUserData())
  } else  {
    if (response.resultCode === 10) {
      dispatch(getCaptchUrl())
    }
    alert(response.messages)
    
  }

}
export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserDataAC(null, null, null, false))
    // } else {
      // let action = stopSubmit();
      // debugger
    }
  }
  
  export const getCaptchUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchUrl();
    const captchUrl = response.data.url;
    dispatch(getCaptchUrlSuccess(captchUrl))

  
  }
export default authReducer