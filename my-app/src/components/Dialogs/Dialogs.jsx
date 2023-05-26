import React from "react"
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  debugger

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

  let messagesElements = state.messages
    .map(message => <Message message={message.message} author={message.author} location={message.location} date={message.date} />);

  let newMessageBody = state.newMessageBody;

  let newMessageElement = React.createRef();

  let onSendMessageClick = () => {
    props.sendMessage()
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    // let body = newMessageElement.current.value;
    props.updateNewMessageBody(body);
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