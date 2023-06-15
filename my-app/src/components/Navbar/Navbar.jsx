import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/userphoto.png"

const Navbar = () => {
  return (<aside className={s.aside}>
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/profile' className={({ isActive }) => isActive ? `${s.profile_link} ${s.link} ${s.active}` : `${s.profile_link} ${s.link}`}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/dialogs' className={({ isActive }) => isActive ? `${s.messages_link} ${s.link} ${s.active}` : `${s.messages_link} ${s.link}`} >Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/news' className={({ isActive }) => isActive ? `${s.news_link} ${s.link} ${s.active}` : `${s.news_link} ${s.link}`} >News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/music' className={({ isActive }) => isActive ? `${s.music_link} ${s.link} ${s.active}` : `${s.music_link} ${s.link}`} >Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/settings' className={({ isActive }) => isActive ? `${s.setting_link} ${s.link} ${s.active}` : `${s.setting_link} ${s.link}`} >Settings</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/users' className={({ isActive }) => isActive ? `${s.users_link} ${s.link} ${s.active}` : `${s.users_link} ${s.link}`} >Users</NavLink>
      </div>
    </nav>

    <ul className={s.friends}>
      <li className={s.friendsItem}>
        <img src={userPhoto} alt="" className={s.userPhoto} />
        <span>UserName</span>
      </li>
      <li className={s.friendsItem}>
        <img src={userPhoto} alt="" className={s.userPhoto} />
        <span>UserName</span>
      </li>
      <li className={s.friendsItem}>
        <img src={userPhoto} alt="" className={s.userPhoto} />
        <span>UserName</span>
      </li>
    </ul>
  </aside>

  )
}

export default Navbar;