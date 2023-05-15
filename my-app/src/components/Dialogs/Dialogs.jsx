import React from "react"
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";


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

  let dialogsElements = dialogsData
  .map( dialog =>  <DialogItem name={dialog.name} id={dialog.id} />);
  
  let messagesElements = messagesData
  .map( message =>  <Message message={message.message}/>);
  
  

  return (
    <div>
      Dialogs
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>

          {
            dialogsElements
          }

        </div>
        <div className={s.messages}>
          {
            messagesElements
          }
        </div>
      </div>
    </div>
  )
}

export default Dialogs;