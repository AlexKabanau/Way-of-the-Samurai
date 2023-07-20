import React from 'react';
import Header from './components/Header/Header';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
// import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer';

import './App.css';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Setting';
import { Routes, Route, } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import { getAuthUserData } from './redux/auth-reducer';
import { connect } from "react-redux";
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/Common/Preloader/Preloader';


class App extends React.Component {
  // class App = (props) => {
  componentDidMount() {
    this.props.initializeApp()

  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      // <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/" element={
              <ProfileContainer />} />
            <Route path="/dialogs/*" element={
              <DialogsContainer />} />
            <Route path="/profile/" element={
              <ProfileContainer />} />
            <Route path="/profile/:userId" element={
              <ProfileContainer />} />
            <Route path="/news" element={
              <News />} />
            <Route path="/music" element={
              <Music />} />
            <Route path="/settings" element={
              <Settings />} />
            <Route path="/users" element={
              <UsersContainer />} />
            <Route path="/login" element={
              <Login />} />
          </Routes>


        </div>
        <footer></footer>
      </div>
      // </BrowserRouter>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}



export default connect(mapStateToProps, {initializeApp})(App);