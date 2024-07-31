import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Formik, Form, Field, FormikProps } from 'formik';
import { MessageTextArea } from '../Common/FormsControls/FormsControls';
import { basicMessageSchema } from '../../utils/validators/validator';
import { InitialStateType } from '../../redux/dialogs-reducer';

type OwnPropsType = {
  dialogsPage: InitialStateType;
  sendMessage: (messageText: string) => void;
};
type MapStatePropsType = {};
type MapDispatchPropsType = {};

const Dialogs: React.FC<OwnPropsType> = (props) => {
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
          {/* <AddMessageForm onSendMessageClick={onSendMessageClick} /> */}
        </div>
      </div>
    </div>
  );
};

type SubmitType = {
  values: FormValuesType;
  obj: ObjValuesType;
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

type AddMessageFormType = OtherPropsType & FormikProps<FormValuesType>;

const AddMessageForm: React.FC<AddMessageFormType> = (props) => {
  const submit = (values: FormValuesType, { setSubmitting, resetForm }: ObjValuesType) => {
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
