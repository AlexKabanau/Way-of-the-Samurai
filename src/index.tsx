import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SamuraiJSApp from './App';
// import store from './redux/redux-store';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import StoreContext, { Provider } from './StoreContext';
// import { addPost, updateNewPostText } from './redux/state';
// import { Provider } from 'react-redux';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// let rerenderEntireTree = (state) => {
// ReactDOM.render(<SamuraiJSApp />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<SamuraiJSApp />);

// }
// addPost("JSSamuraiJS")
// rerenderEntireTree(store.getState());
// store.subscribe(() => {
//   let state = store.getState()
//   rerenderEntireTree(state)
// });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
