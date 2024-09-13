import { Action, Dispatch } from 'redux';
import { ResultCodeForCaptureEnum, ResultCodesEnum } from '../components/API/api';
import { securityAPI } from '../components/API/security-api';
import { authAPI } from '../components/API/auth-api';
import { AppDispatch, AppStateType, BaseThunkType, InferActionsTypes } from './redux-store';
import { ThunkAction } from 'redux-thunk';
import { cahtAPI, ChatMessageAPIType, StatusType } from '../components/API/chat-api';
import { message } from 'antd';
import { v1 } from 'uuid';
// import { ActionsType } from './app-reducer';

// const SET_USER_DATA = 'sn/auth/SET_USER_DATA';
// const GET_CAPTCH_URL_SECCESS = 'sn/auth/GET_CAPTCH_URL_SECCESS';

export type InitialStateType = typeof initialState;
type ChatMessageType = ChatMessageAPIType & { id: string };

let initialState = {
  messages: [] as ChatMessageType[],
  status: 'pending' as StatusType,
};

const chatReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  // debugger
  switch (action.type) {
    case 'SN/chat/MESSAGES_RECEVIED': {
      // debugger;
      return {
        ...state,
        messages: [...state.messages, ...action.payload.messages]
          .map((m) => ({ ...m, id: v1() }))
          .filter((e, index, array) => index >= array.length - 100),
      };
    }
    case 'SN/chat/STATUS_CHANGED':
      return {
        ...state,
        status: action.payload.status,
      };
    default:
      return state;
  }
};

export const actions = {
  messagesReceived: (messages: ChatMessageAPIType[]) =>
    ({
      type: 'SN/chat/MESSAGES_RECEVIED',
      payload: { messages },
    } as const),
  statusChanged: (status: StatusType) =>
    ({
      type: 'SN/chat/STATUS_CHANGED',
      payload: { status },
    } as const),
};
let _newMessageHandler: ((message: ChatMessageAPIType[]) => void) | null = null;

const newMessageHandlerCreator = (dispatch: AppDispatch) => {
  if (_newMessageHandler === null) {
    _newMessageHandler = (messages) => {
      dispatch(actions.messagesReceived(messages));
    };
    return _newMessageHandler;
  }
};
let _statusChangingHandler: ((status: StatusType) => void) | null = null;

const statusChangingHandlerCreator = (dispatch: AppDispatch) => {
  if (_statusChangingHandler === null) {
    _statusChangingHandler = (status) => {
      dispatch(actions.statusChanged(status));
    };
    return _statusChangingHandler;
  }
};

export const startMessagesListening = (): ThunkType => async (
  dispatch: AppDispatch,
  getState: GetStateType,
) => {
  cahtAPI.start();
  //@ts-ignore
  cahtAPI.subscribe('message-received', newMessageHandlerCreator(dispatch));
  //@ts-ignore
  cahtAPI.subscribe('status-changed', statusChangingHandlerCreator(dispatch));
};
export const stopMessagesListening = (): ThunkType => async (
  dispatch: AppDispatch,
  getState: GetStateType,
) => {
  //@ts-ignore
  cahtAPI.unsubscribe('message-received', newMessageHandlerCreator(dispatch));
  //@ts-ignore
  cahtAPI.unsubscribe('status-changed', statusChangingHandlerCreator(dispatch));
  cahtAPI.stop();
};
export const sendMessage = (message: string): ThunkType => async (
  dispatch,
  getState: GetStateType,
) => {
  cahtAPI.sendMessage(message);
};

export default chatReducer;
type ActionsTypes = InferActionsTypes<typeof actions>;

type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionsTypes>;
type ThunkType = BaseThunkType<ActionsTypes>;
