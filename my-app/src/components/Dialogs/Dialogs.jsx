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

  let dialogsData = [
    {id: 1, name: "Alex"},
    {id: 2, name: "Dima"},
    {id: 3, name: "Artiom"},
    {id: 4, name: "Vadzim"},
    {id: 5, name: "Dima"},
    {id: 6, name: "Vlad"},
  ];

  let messagesData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are you"},
    {id: 3, message: "How are you"},
    {id: 4, message: "What's up"},
    {id: 5, message: "What's up"},
    {id: 6, message: "YO"},
  ]; 

  return (
    <div>
      Dialogs
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
          <DialogItem name="Dima" id="2" />
          <DialogItem name="Artiom" id="3" />
          <DialogItem name="Vadzim" id="4" />
          <DialogItem name="Dima" id="5" />
          <DialogItem name="Vlad" id="6" />
        </div>
        <div className={s.messages}>
          <Message message={messagesData[0].message}/>
          <Message message="How are you"/>
          <Message message="What's up"/>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;