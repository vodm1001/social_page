import store from './redux/reduxStore.js'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';


// let rerenderEntireTree = () => {
ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
         <App
         // dispatch={store.dispatch.bind(store)}
         // store={store}
         />
      </Provider>
   </React.StrictMode>,
   document.getElementById('root')
);

// }

// rerenderEntireTree()

// store.subscribe(() => {
//    rerenderEntireTree()
// })

