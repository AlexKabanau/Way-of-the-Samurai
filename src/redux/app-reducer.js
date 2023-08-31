// import { authAPI } from "../components/API/api";
import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
  initialized: false
}

const appReducer = (state = initialState, action) => {
  // debugger
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      // debugger
      return {
        ...state,
        initialized: true
      };
    }
    default:
      return state

  }
}

export const setInitializedSuccess = () => {
  return {
    type: INITIALIZED_SUCCESS,
  }
}

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());

  Promise.all([promise])
  .then(() => {
    dispatch(setInitializedSuccess());

  })
}


export default appReducer