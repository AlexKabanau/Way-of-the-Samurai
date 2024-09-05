import React from 'react';
import s from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';
import { Avatar, Button, Menu } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Header } from 'antd/es/layout/layout';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUserLogin, selectIsAuth } from '../../redux/auth-selectors';
import { AppDispatch } from '../../redux/redux-store';
import { logout } from '../../redux/auth-reducer';

export const AppHeader: React.FC = (props) => {
  // debugger
  const isAuth = useSelector(selectIsAuth);
  const login = useSelector(selectCurrentUserLogin);

  const dispatch: AppDispatch = useDispatch();

  const logoutCallback = () => {
    dispatch(logout());
  };
  return (
    <Header style={{ display: 'flex', alignItems: 'center' }}>
      <div className="demo-logo" />
      <Menu theme="dark" mode="horizontal" style={{ flex: 1, minWidth: 0 }}>
        <Menu.Item key="1">
          <Link to="/profile">Profile</Link>
        </Menu.Item>
      </Menu>
      {isAuth ? (
        <div>
          <Avatar alt={login || ''} shape="square" size={64} icon={<UserOutlined />} />
          {login} <Button onClick={logoutCallback}>LogOut</Button>
        </div>
      ) : (
        <Button>
          <NavLink to={'/login'}>Login</NavLink>
        </Button>
      )}
    </Header>
  );
};
