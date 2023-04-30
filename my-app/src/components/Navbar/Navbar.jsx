import React from "react";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a className={`${s.profile_link} ${s.link}`}>Profile</a>
      </div>
      <div className={s.item}>
        <a className={`${s.messages_link} ${s.link}`}>Messages</a>
      </div>
      <div className={s.item}>
        <a className={`${s.news_link} ${s.link}`}>News</a>
      </div>
      <div className={s.item}>
        <a className={`${s.music_link} ${s.link}`}>Music</a>
      </div>
      <div className={s.item}>
        <a className={`${s.setting_link} ${s.link}`}>Settings</a>
      </div>
    </nav>
  )
}

export default Navbar;