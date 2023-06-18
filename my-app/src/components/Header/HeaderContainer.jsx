import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Header from "./Header";
// import axios from "axios";
import { connect } from "react-redux";
import { getAuthUserData } from "../../redux/auth-reducer";
import { authAPI } from "../API/api";


class HeaderContainer extends React.Component {
  componentDidMount() {
    // console.log(this.props)
    this.props.getAuthUserData()
    // authAPI.authMe()
    //   .then(data => {
    //     if (data.resultCode === 0) {
    //       // debugger
    //       // console.log(this.props)
    //       let {id, login, email} = data.data;
    //       this.props.setAuthUserDataAC(id, email, login)
    //     }
    //   })
  }


  render() {
    return <Header {...this.props} />
  }
  
}
let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }
}
export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);