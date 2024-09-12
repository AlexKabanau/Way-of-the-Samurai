import React, { FC, Suspense, useState } from 'react';
// import Header from './components/Header/Header';
import {AppHeader} from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
// import Profile from './components/Profile/Profile';
import { UsersPage } from './components/Users/UsersContainer';

import './App.css';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Setting';
import { Routes, Route, BrowserRouter, NavLink, Link } from 'react-router-dom';
// import ProfileContainer from './components/Profile/ProfileContainer';
import { LoginPage } from './components/Login/Login';
// import { getAuthUserData } from './redux/auth-reducer';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/Common/Preloader/Preloader';

import store, { AppStateType } from './redux/redux-store';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Breadcrumb, Layout, Menu, theme } from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';
// import { ChatPage } from './pages/Chat/ChatPage';

type MenuItem = Required<MenuProps>['items'][number];

const { Header, Content, Footer, Sider } = Layout;

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer_copy_2'));
const ChatPage = React.lazy(() => import('./pages/Chat/ChatPage'));


// const {
//   token: { colorBgContainer, borderRadiusLG },
// } = theme.useToken();


type MapPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = {
  initializeApp: () => void;
};

class App extends React.Component<MapPropsType & DispatchPropsType> {
  catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
    alert('Some Error occured');
  };
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }
  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }

  render() {
    // if (!this.props.initialized) {
    //   return <Preloader />;
    // }
    return (
    <Layout>
      <AppHeader/>
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout className="site-layout-background" style={{padding: '24px 0'}}>
        <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              // defaultSelectedKeys={['1']}
              // defaultOpenKeys={['sub1']}
              // selectedKeys={[current]}
              // onClick={onClick}
              style={{ height: '100%' }}
              // items={items2}
            >
              <SubMenu key='sub1' icon={<UserOutlined />} title='My Profile'>
                <Menu.Item key='1'><NavLink to="/profile">Profile</NavLink></Menu.Item>
                <Menu.Item key='2'><NavLink to="/dialogs">Dialogs</NavLink></Menu.Item>
                <Menu.Item key='3'>Option 1</Menu.Item>
                <Menu.Item key='4'>Option 2</Menu.Item>
              </SubMenu>
              <SubMenu key='sub2' icon={<LaptopOutlined />} title='Users'>
                <Menu.Item key='5'><NavLink to="/users">Developers</NavLink></Menu.Item>
                <Menu.Item key='6'>Option 3</Menu.Item>
                <Menu.Item key='7'>Option 4</Menu.Item>
              </SubMenu>
              <Menu.Item key='8'><NavLink to="/news">News</NavLink></Menu.Item>
              <Menu.Item key='9'><NavLink to="/music">Music</NavLink></Menu.Item>
              <Menu.Item key='10'><NavLink to="/settings">Settings</NavLink></Menu.Item>
              <Menu.Item key='11'><NavLink to="/chat">Chat</NavLink></Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <Routes>
            <Route path="/" element={<ProfileContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/profile/" element={<ProfileContainer />} />
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/users" element={<UsersPage pageTitle="Самураи" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route
                path="*"
                element={
                  <div>
                    404 NOT FOUND
                  </div>
                }
              />
          </Routes>
        </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Samuray Social Network ©2024 created by IT-KAMASUTRA
      </Footer>
    </Layout>
    
      // <BrowserRouter>
      
      // <div className="app-wrapper">
      //   <HeaderContainer />
      //   <Navbar />
      //   <div className="app-wrapper-content">
      //     <Suspense fallback={<Preloader />}>
      //       <Routes>
      //         <Route path="/" element={<ProfileContainer />} />
      //         <Route path="/dialogs/*" element={<DialogsContainer />} />
      //         <Route path="/profile/" element={<ProfileContainer />} />
      //         <Route path="/profile/:userId" element={<ProfileContainer />} />
      //         <Route path="/news" element={<News />} />
      //         <Route path="/music" element={<Music />} />
      //         <Route path="/settings" element={<Settings />} />
      //         {/* <Route path="/users" element={<UsersPage />} /> */}
      //         <Route path="/users" element={<UsersPage pageTitle="Самураи" />} />
      //         <Route path="/login" element={<LoginPage />} />
      //         <Route
      //           path="*"
      //           element={
      //             <div>
      //               404 NOT FOUND
      //               <Button type="dashed">ok</Button>
      //             </div>
      //           }
      //         />
      //       </Routes>
      //     </Suspense>
      //   </div>
      //   <footer></footer>
      // </div>
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
