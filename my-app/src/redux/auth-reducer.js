import { authAPI } from "../components/API/api";

const SET_USER_DATA = 'SET_USER_DATA';

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

export const getAuthUserData = () => (dispatch) => {
  authAPI.authMe()
    .then(data => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setAuthUserDataAC(id, email, login, true))
      } 
    })
}
export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe)
    .then(data => {
      debugger
      if (data.resultCode === 0) {
        debugger
        dispatch(getAuthUserData())
      } else {
        alert(data.messages)
      }
    })
}
export const logout = () => (dispatch) => {
  authAPI.logout()
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserDataAC(null, null, null, false))
      // } else {
        // let action = stopSubmit();
        // debugger
      }
    })
}

export default authReducer