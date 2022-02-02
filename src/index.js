import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: 'Hi, how are you?', likesCount: 12 },
  { id: 2, message: "It's my first post", likesCount: 11 },
  { id: 2, message: "It's my last post", likesCount: 100 },
]

let messages = [
  { id: 1, message: 'hi' },
  { id: 2, message: 'how are you' },
  { id: 3, message: 'yo' },
  { id: 4, message: 'yo' },
  { id: 5, message: 'yo' },
]

let dialogs = [
  { id: 1, name: 'dimych' },
  { id: 2, name: 'katya' },
  { id: 3, name: 'olya' },
  { id: 4, name: 'galya' },
  { id: 5, name: 'buryj' },
]



ReactDOM.render(
  <React.StrictMode>
    <App
      posts={posts}
      messages={messages}
      dialogs={dialogs} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
