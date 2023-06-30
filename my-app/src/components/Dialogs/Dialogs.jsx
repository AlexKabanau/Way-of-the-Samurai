import React from "react";
import { Navigate } from "react-router-dom";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Formik, Form, Field } from "formik";

const Dialogs = (props) => {
  // debugger

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

  let messagesElements = state.messages
    .map(message => <Message message={message.message} author={message.author} location={message.location} date={message.date} />);

  let newMessageBody = state.newMessageBody;

  let newMessageElement = React.createRef();

  let onSendMessageClick = () => {
    debugger
    props.sendMessage()
  }

  let onNewMessageChange = (e) => {
    debugger
    // let body = e.target.value;
    props.updateNewMessageBody(e);
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
          <AddMessageForm 
          onSendMessageClick={onSendMessageClick}
          onNewMessageChange={onNewMessageChange}
          />

        </div>

      </div>
    </div>
  )
}

const AddMessageForm = (props) => {
  const submit = (values, { setSubmitting, resetForm }) => {
    debugger
    console.log(values.newMessageBody);
    props.onNewMessageChange(values.newMessageBody)
    // props.onNewMessageChange(values.newMessageBody)
    props.onSendMessageClick()
    resetForm();
    setSubmitting(false);
    
  }
  const change = (values) => {
    debugger
    console.log(values)
    props.onNewMessageChange(values)


  }
  return (
    <Formik
      initialValues={{ newMessageBody: '' }}
      onSubmit={submit}
      // onChange={change}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <Field 
              name="newMessageBody"
              as="textarea"
              placeholder="Enter your message"
              // ref={newMessageElement}
              // value={newMessageBody}
              // onChange={onNewMessageChange}
              // onChange={change}

              >
            </Field>
          </div>
          <div>
            <button 
            // onClick={onSendMessageClick} 
            disabled={isSubmitting}
            >Send
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default Dialogs;