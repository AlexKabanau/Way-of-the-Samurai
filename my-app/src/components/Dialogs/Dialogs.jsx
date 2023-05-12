import React from "react"
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";


const Dialogs = (props) => {
  return (
    <div>
      Dialogs
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          <div className={s.dialog}>
            <NavLink to="dialogs/1">Alex</NavLink>
          </div>
          <div className={`${s.dialog} ${s.active}`}>
            <NavLink to="dialogs/2">Dima</NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to="dialogs/3">Artiom</NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to="dialogs/4">Vadzim</NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to="dialogs/5">Dima</NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to="dialogs/6">Vlad</NavLink>
          </div>

        </div>
        <div className={s.messages}>
          <div className={s.message}>Hi</div>
          <div className={s.message}>Hi hi</div>
          <div className={s.message}>WhatsApp</div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;