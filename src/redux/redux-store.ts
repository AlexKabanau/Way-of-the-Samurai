import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
  compose,
  Action,
} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import appReducer from './app-reducer';

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});

type RootReduserType = typeof rootReducer;

export type AppStateType = ReturnType<RootReduserType>;

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;

export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<
  PropertiesType<T>
>;

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  AppStateType,
  unknown,
  A
>;

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

// let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
//@ts-ignore
window.__store__ = store;

export default store;
