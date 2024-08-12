import React, { FC } from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Formik, Form, Field, FormikProps } from 'formik';
import { MessageTextArea } from '../Common/FormsControls/FormsControls';
import { basicMessageSchema } from '../../utils/validators/validator';
import { InitialStateType } from '../../redux/dialogs-reducer';

type PropsType = {
  dialogsPage: InitialStateType;
  sendMessage: (messageText: string) => void;
};
type OwnPropsType = {
  dialogsPage: InitialStateType;
  sendMessage: (messageText: string) => void;
};
type MapStateToPropsType = {
  captchaUrl: string | null;
  isAuth: boolean;
};
type MapDispatchToPropsType = {
  sendMessage: (newMessageBody: string) => void;
  login: (email: string, password: string, rememberMe: boolean, antiBotSymbols: string) => void;
  captchaUrl: string;
  isAuth: boolean;
};
type InitialStateFormikType = {
  newMessageBody: string;
};

const Dialogs: FC<PropsType> = (props) => {
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

  let onSendMessageClick = (newMessageBody: string) => {
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
          <AddMessageForm {...props} />
          {/* <AddMessageForm onSendMessageClick={onSendMessageClick} /> */}
        </div>
      </div>
    </div>
  );
};

type SetSubmitTypeStatus = {
  setSubmitting: (param: boolean) => void;
  resetForm: () => void;
};

type FormValuesType = {
  newMessageBody: string;
};

type ObjValuesType = {
  setSubmitting: (b: boolean) => void;
  resetForm: () => void;
};

type OtherPropsType = {
  onSendMessageClick: (newMessageBody: string) => void;
};

type AddMessageFormType = {
  sendMessage: (newMessageBody: string) => void;
};

const AddMessageForm: FC<AddMessageFormType> = (props) => {
  const submit = (
    values: InitialStateFormikType,
    { setSubmitting, resetForm }: SetSubmitTypeStatus,
  ) => {
    // debugger
    // console.log(values.newMessageBody);
    props.sendMessage(values.newMessageBody);
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
