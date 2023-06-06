import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
// import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer';

import './App.css';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Setting';
import { Routes, Route,  } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

function App(props) {

  return (
    // <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
        <Routes>
          <Route path="/" element={ 
            <ProfileContainer 
              // store={props.store}
            /> }/>
          <Route path="/dialogs/*" element={ 
            <DialogsContainer 
              // store={props.store}
            /> }/>
          <Route path="/profile/" element={ 
            <ProfileContainer 
            // store={props.store}
            /> }/>
          <Route path="/profile/:userId" element={ 
            <ProfileContainer 
            // store={props.store}
            /> }/>
          <Route path="/news" element={ 
            <News /> }/>
          <Route path="/music" element={ 
            <Music /> }/>
          <Route path="/settings" element={ 
            <Settings /> }/>
          <Route path="/users" element={ 
            <UsersContainer /> }/>
        </Routes>


        </div>
        <footer></footer>
      </div>
    // </BrowserRouter>

  );
}



export default App;
