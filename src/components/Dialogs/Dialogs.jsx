import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Formik, Form, Field } from 'formik';
import { MessageTextArea } from '../Common/FormsControls/FormsControls.tsx';
import { basicMessageSchema } from '../../utils/validators/validator';

const Dialogs = (props) => {
  // debugger

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = state.messages.map((message) => (
    <Message
      message={message.message}
      author={message.author}
      location={message.location}
      date={message.date}
    />
  ));

  let onSendMessageClick = (newMessageBody) => {
    // debugger
    props.sendMessage(newMessageBody);
  };

  return (
    <div>
      Dialogs
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsElements}</div>
        <div className={s.messages}>
          {messagesElements}
          <AddMessageForm onSendMessageClick={onSendMessageClick} />
        </div>
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  const submit = (values, { setSubmitting, resetForm }) => {
    // debugger
    // console.log(values.newMessageBody);
    props.onSendMessageClick(values.newMessageBody);
    resetForm();
    setSubmitting(false);
  };
  return (
    <Formik
      initialValues={{ newMessageBody: '' }}
      onSubmit={submit}
      validationSchema={basicMessageSchema}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form>
          <div>
            <Field
              name="newMessageBody"
              as={MessageTextArea}
              placeholder="Enter your message"
              {...errors}
            ></Field>
          </div>
          <div>
            <button disabled={isSubmitting}>Send</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Dialogs;
