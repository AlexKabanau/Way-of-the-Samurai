import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
  compose,
  Action,
  AnyAction,
} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import appReducer from './app-reducer';
import chatReducer from './chat-reducer';

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
  chat: chatReducer,
});

type RootReduserType = typeof rootReducer;

export type AppStateType = ReturnType<RootReduserType>;

// type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;

// export type InferActionsTypes1<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<
//   PropertiesType<T>
// >;
export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U }
  ? U
  : never;

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  AppStateType,
  unknown,
  A
>;

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export type AppDispatch = typeof store.dispatch;
// export type AppDispatch = ThunkDispatch<AppStateType, unknown, AnyAction>;

// let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
//@ts-ignore
window.__store__ = store;

export default store;
