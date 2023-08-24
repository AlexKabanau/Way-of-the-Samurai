import { authAPI } from "../components/API/api";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
}

const authReducer = (state = initialState, action) => {
  // debugger
  switch (action.type) {
    case SET_USER_DATA: {
      // debugger
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

export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.authMe();
  debugger
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserDataAC(id, email, login, true))
  }


}
export const login = (email, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe);

  debugger
  if (response.resultCode === 0) {
    debugger
    dispatch(getAuthUserData())
  } else {
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

export default authReducer