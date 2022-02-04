import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addMessage, addNewLetter, addPost, updateNewMessage } from './redux/state'


let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} addNewLetter={addNewLetter} updateNewMessage={updateNewMessage} addMessage={addMessage} />
    </React.StrictMode>,
    document.getElementById('root')
  );

}
export default rerenderEntireTree

