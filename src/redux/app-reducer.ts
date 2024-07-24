// import { authAPI } from "../components/API/api";
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { getAuthUserData } from './auth-reducer';
import { AppStateType, InferActionsTypes } from './redux-store';

// const INITIALIZED_SUCCESS = 'SN/APP/INITIALIZED_SUCCESS';

let initialState = {
  initialized: false,
};

export type InitialStateType = typeof initialState;
export type ActionsType = InferActionsTypes<typeof actions>;

// type InitializedSuccessActionType = {
//   type: typeof INITIALIZED_SUCCESS;
// };

export const actions = {
  initializedSuccess: () =>
    ({
      type: 'SN/APP/INITIALIZED_SUCCESS',
    } as const),
};

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
  // debugger
  switch (action.type) {
    case 'SN/APP/INITIALIZED_SUCCESS': {
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
// type GetStateType = () => AppStateType;
// type DispatchType = Dispatch<InitializedSuccessActionType>;
// type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, InitializedSuccessActionType>;

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());

  Promise.all([promise]).then(() => {
    dispatch(actions.initializedSuccess());
  });
};

export default appReducer;
