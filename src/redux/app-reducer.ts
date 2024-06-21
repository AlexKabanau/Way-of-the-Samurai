// import { authAPI } from "../components/API/api";
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { getAuthUserData } from './auth-reducer';
import { AppStateType } from './redux-store';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState: InitialStateType = {
  initialized: false,
};

export type InitialStateType = {
  initialized: boolean;
};

type InitializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS;
};

const appReducer = (
  state = initialState,
  action: InitializedSuccessActionType,
): InitialStateType => {
  // debugger
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      // debugger
      return {
        ...state,
        initialized: true,
      };
    }
    default:
      return state;
  }
};
type GetStateType = () => AppStateType;
type DispatchType = Dispatch<InitializedSuccessActionType>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, InitializedSuccessActionType>;

export const setInitializedSuccess = (): InitializedSuccessActionType => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());

  Promise.all([promise]).then(() => {
    dispatch(setInitializedSuccess());
  });
};

export default appReducer;
