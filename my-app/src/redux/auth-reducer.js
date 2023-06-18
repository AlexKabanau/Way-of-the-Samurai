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
        ...action.data,
        isAuth: true,
      };
    }
    default:
      return state

  }
}

export const setAuthUserDataAC = (userId, email, login) => {
  return {
    type: SET_USER_DATA,
    data: {
      userId,
      email,
      login
    }
  }
}

export const getAuthUserData = () => (dispatch) => {
  authAPI.authMe()
    .then(data => {
      if (data.resultCode === 0) {
        // debugger
        // console.log(this.props)
        let { id, login, email } = data.data;
        dispatch(setAuthUserDataAC(id, email, login))
      }
    })
}

export default authReducer