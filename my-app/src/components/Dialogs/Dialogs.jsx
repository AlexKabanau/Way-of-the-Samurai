import React from "react"
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogs-reducer";
// import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/state";

const Dialogs = (props) => {

  // let state = props.store.getState().dialogsPage;

  let dialogsElements = props.state.dialogsData
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

  let messagesElements = props.state.messagesData
    .map(message => <Message message={message.message} author={message.author} location={message.location} date={message.date} />);

  let newMessageBody = props.state.newMessageBody;

  let newMessageElement = React.createRef();

  let onSendMessageClick = () => {
    props.dispatch(sendMessageCreator())
    // let text = newMessageElement.current.value;
    // alert(text)
  }

  let onNewMessageChange = () => {
    let body = newMessageElement.current.value;
    props.dispatch(updateNewMessageBodyCreator(body))
  }

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
          <div>
            <div>
              <textarea
                placeholder="Enter your message"
                ref={newMessageElement}
                value={ newMessageBody }
                onChange={ onNewMessageChange }
              >
              </textarea>
            </div>
            <div>
              <button onClick={onSendMessageClick}>Send</button>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Dialogs;