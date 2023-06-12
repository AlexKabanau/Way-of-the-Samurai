import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthUserDataAC } from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {
  componentDidMount() {
    console.log(this.props)
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
      withCredentials: true
    })
      .then(response => {
        if (response.data.resultCode === 0) {
          debugger
          console.log(this.props)
          let {id, login, email} = response.data.data;
          this.props.setAuthUserDataAC(id, email, login)
        }
      })
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
export default connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer);