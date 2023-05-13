import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Setting';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    // <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
        <Routes>
          <Route path="/" element={<Profile />}/>
          <Route path="/dialogs/*" element={<Dialogs />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/news" element={<News />}/>
          <Route path="/music" element={<Music />}/>
          <Route path="/settings" element={<Settings />}/>
        </Routes>


        </div>
        <footer></footer>
      </div>
    // </BrowserRouter>

  );
}



export default App;
