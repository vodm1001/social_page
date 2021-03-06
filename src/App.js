import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {

   return (
      <BrowserRouter>

         <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
               <Routes>
                  <Route path='/dialogs/*' element={<DialogsContainer
                  // store={props.store}
                  // messages={props.state.dialogsPage.messages}
                  // NewMessageText={props.state.dialogsPage.NewMessageText}
                  // dialogs={props.state.dialogsPage.dialogs}
                  // dispatch={props.dispatch}
                  />} />
                  {/* <Route path='/dialogs/*' > <Dialogs messages={props.state.dialogsPage.messages} dialogs={props.state.dialogsPage.dialogs} /> </Route> */}
                  <Route path='/profile' element={<Profile
                  // store={props.store}
                  // posts={props.state.profilePage.posts}
                  // newPostText={props.state.profilePage.newPostText}
                  // dispatch={props.dispatch} 
                  />} />
                  <Route path='/News' element={<News />} />
                  <Route path='/Music' element={<Music />} />
                  <Route path='/Users' element={<UsersContainer />} />
                  <Route path='/Settings' element={<Settings />} />




                  {/* <Route path='/dialogs/*' render={() => <Dialogs messages={props.messages} dialogs={props.dialogs} />} />
                  <Route path='/profile' render={() => <Profile />} />              //?????? ?????????????? element ???? render ?????? ???? ??????????????????!!!!!!!!
                  <Route path='/News' render={() => <News />} />
                  <Route path='/Music' render={() => <Music />} />
                  <Route path='/Settings' render={() => <Settings />} /> */}
               </Routes>
            </div>
         </div>
      </BrowserRouter>
   )
}


export default App;