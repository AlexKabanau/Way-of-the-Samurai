import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

import './App.css';
import Dialogs from './components/Dialogs/Dialogs';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Dialogs />
        {/* <Profile /> */}

      </div>
      <footer></footer>
    </div>
  );
}



export default App;
