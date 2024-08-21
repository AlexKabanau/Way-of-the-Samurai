import { Field } from 'formik';
import React, { FC } from 'react';
import s from './FormsControls.module.css';

type PostTextAreaPropsType = {
  newPostText: string;
  formControl: string;
};
type MessageTextAreaPropsType = {
  newMessageBody: string;
};

export const PostTextArea: FC<PostTextAreaPropsType> = (props) => {
  debugger;
  return (
    <div className={props.newPostText && s.formControl + ' ' + s.error}>
      <div>
        <Field {...props} as="textarea" />
      </div>
      {props.newPostText && <span>{props.newPostText}</span>}
    </div>
  );
};

export const MessageTextArea: FC<MessageTextAreaPropsType> = (props) => {
  debugger;
  return (
    <div className={props.newMessageBody && s.formControl + ' ' + s.error}>
      <div>
        <Field {...props} as="textarea" />
      </div>
      {props.newMessageBody && <span>{props.newMessageBody}</span>}
    </div>
  );
};

export type GetStringKeys<T> = Extract<keyof T, string>;
