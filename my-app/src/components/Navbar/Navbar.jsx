import React from "react";
import s from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <Link to='/profile' className={`${s.profile_link} ${s.link}`}>Profile</Link>
      </div>
      <div className={s.item}>
        <Link to='/dialogs' className={`${s.messages_link} ${s.link}`}>Messages</Link>
      </div>
      <div className={s.item}>
        <Link to='/news' className={`${s.news_link} ${s.link}`}>News</Link>
      </div>
      <div className={s.item}>
        <Link to='/music' className={`${s.music_link} ${s.link}`}>Music</Link>
      </div>
      <div className={s.item}>
        <Link to='/settings' className={`${s.setting_link} ${s.link}`}>Settings</Link>
      </div>
    </nav>
  )
}

export default Navbar;