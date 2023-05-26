import React from "react"
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {


  // let state = props.store.getState().dialogsPage;

  // let onSendMessageClick = () => {
  //   props.store.dispatch(sendMessageCreator())
  // }

  // let onNewMessageChange = (body) => {
  //   props.store.dispatch(updateNewMessageBodyCreator(body))
  // }

  return (

    <StoreContext.Consumer>
      {
        (store) => {
          debugger
          let state = store.getState().dialogsPage;

          let onSendMessageClick = () => {
            store.dispatch(sendMessageCreator())
          }

          let onNewMessageChange = (body) => {
            store.dispatch(updateNewMessageBodyCreator(body))
          }
          return (
            <Dialogs
              updateNewMessageBody={onNewMessageChange}
              sendMessage={onSendMessageClick}
              dialogsPage={state}
            />
          )
        }

      }

    </StoreContext.Consumer>
  )
}

export default DialogsContainer;