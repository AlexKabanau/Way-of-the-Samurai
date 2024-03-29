import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";


const Header = (props) => {
  // debugger
  return (
    <header className={s.header}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/The_social_network.svg/2560px-The_social_network.svg.png" alt="Social networks"/>
      <div className={s.loginBlock}>
        { props.isAuth 
        
        ? <div>{props.login} - <button onClick={props.logout}>LogOut</button></div>
        : <NavLink to={'/login'}>Login</NavLink> }
        
      </div>
    </header>
  )
}

export default Header;