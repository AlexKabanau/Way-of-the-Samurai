import React from "react"
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
}

const Message = (props) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  return (
    <div>
      Dialogs
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          <DialogItem name="Alex" id="1" />
          <DialogItem name="Dima" id="2" />
          <DialogItem name="Artiom" id="3" />
          <DialogItem name="Vadzim" id="4" />
          <DialogItem name="Dima" id="5" />
          <DialogItem name="Vlad" id="6" />
        </div>
        <div className={s.messages}>
          <Message message="Hi"/>
          <Message message="How are you"/>
          <Message message="What's up"/>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;