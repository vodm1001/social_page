import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


const App = (props) => {




   return (
      <BrowserRouter>

         <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
               <Routes>
                  <Route path='/dialogs/*' element={<Dialogs messages={props.messages} dialogs={props.dialogs} />} />
                  <Route path='/profile' element={<Profile posts={props.posts} />} />
                  <Route path='/News' element={<News />} />
                  <Route path='/Music' element={<Music />} />
                  <Route path='/Settings' element={<Settings />} />



                  {/* <Route path='/dialogs/*' render={() => <Dialogs messages={props.messages} dialogs={props.dialogs} />} />
                  <Route path='/profile' render={() => <Profile />} />              //мав змінити element на render але не працювало!!!!!!!!
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