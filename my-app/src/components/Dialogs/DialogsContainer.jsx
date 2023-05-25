import React from "react"
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
// import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/state";

const DialogsContainer = (props) => {
  debugger

  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    debugger
    props.store.dispatch(sendMessageCreator())
    // let text = newMessageElement.current.value;
    // alert(text)
  }

  let onNewMessageChange = (body) => {
    debugger
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }

  return (
    <Dialogs 
      updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialogsPage={state}
    />
  )
}

export default DialogsContainer;