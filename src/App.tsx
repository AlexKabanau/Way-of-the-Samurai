import React, { FC, Suspense } from 'react';
// import Header from './components/Header/Header';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
// import Profile from './components/Profile/Profile';
import { UsersPage } from './components/Users/UsersContainer';

import './App.css';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Setting';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
// import { getAuthUserData } from './redux/auth-reducer';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/Common/Preloader/Preloader';

import store, { AppStateType } from './redux/redux-store';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer_copy_2'));

type MapPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = {
  initializeApp: () => void;
};

class App extends React.Component<MapPropsType & DispatchPropsType> {
  // class App = (props) => {
  catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
    alert('Some Error occured 1');
  };
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }
  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      // <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/" element={<ProfileContainer />} />
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/profile/" element={<ProfileContainer />} />
              <Route path="/profile/:userId" element={<ProfileContainer />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
              {/* <Route path="/users" element={<UsersPage />} /> */}
              <Route path="/users" element={<UsersPage pageTitle="Самураи" />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<div>404 NOT FOUND</div>} />
            </Routes>
          </Suspense>
        </div>
        <footer></footer>
      </div>
      // </BrowserRouter>
    );
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    initialized: state.app.initialized,
  };
};
let AppContainer = connect(mapStateToProps, { initializeApp })(App);

let SamuraiJSApp: FC = () => {
  return (
    <React.StrictMode>
      <HashRouter>
        {/* <BrowserRouter> */}
        <Provider store={store}>
          <AppContainer
          // state={state}
          // dispatch={store.dispatch.bind(store)}
          // store={store}
          />
        </Provider>
      </HashRouter>
      {/* </BrowserRouter> */}
    </React.StrictMode>
  );
};

export default SamuraiJSApp;
