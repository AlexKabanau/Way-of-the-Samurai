import React from 'react';
// import s from "./Header.module.css";
// import { NavLink } from "react-router-dom";
import Header, { DispatchPropsType, MapPropsType } from './Header';
// import axios from "axios";
import { connect } from 'react-redux';
// import { getAuthUserData } from "../../redux/auth-reducer";
// import { authAPI } from "../API/api";
import { logout } from '../../redux/auth-reducer';
import { AppStateType } from '../../redux/redux-store';

class HeaderContainer extends React.Component<MapPropsType & DispatchPropsType> {
  // componentDidMount() {
  //   this.props.getAuthUserData()

  // }

  render() {
    return <Header {...this.props} />;
  }
}
let mapStateToProps = (state: AppStateType) => {
  // debugger
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};
export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {
  logout,
})(HeaderContainer);
