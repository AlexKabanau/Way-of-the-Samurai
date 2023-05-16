import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

let posts = [
  { id: 1, message: "Hi, how are you?", name: "Alex K", age: 34, likesCount: 12 },
  { id: 2, message: "It's my first post", name: "John Doe", age: 52, likesCount: 11 },
  { id: 3, message: "Lorem", name: "Dima K", age: 28, likesCount: 8 },
];

let dialogsData = [
  { id: 1, name: "Alex" },
  { id: 2, name: "Dima" },
  { id: 3, name: "Artiom" },
  { id: 4, name: "Vadzim" },
  { id: 5, name: "Dima" },
  { id: 6, name: "Vlad" },
];

let messagesData = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How are you" },
  { id: 3, message: "How are you" },
  { id: 4, message: "What's up" },
  { id: 5, message: "What's up" },
  { id: 6, message: "YO" },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts={posts} dialogsData={dialogsData} messagesData={messagesData} />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
