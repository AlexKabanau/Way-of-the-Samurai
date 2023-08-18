import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Header from "./Header";
// import axios from "axios";
import { connect } from "react-redux";
import { getAuthUserData } from "../../redux/auth-reducer";
import { authAPI } from "../API/api";
import { logout } from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {
  // componentDidMount() {
  //   this.props.getAuthUserData()

  // }


  render() {
    return <Header {...this.props} />
  }
  
}
let mapStateToProps = (state) => {
  // debugger
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }
}
export default connect(mapStateToProps, { logout})(HeaderContainer);