import { Field } from "formik";
import React from "react";
import s from "./FormsControls.module.css"




export const PostTextArea = (props) => {
  debugger
  return (
    <div className={props.newPostText && s.formControl + ' ' + s.error}>
      <div>
        <Field {...props} as="textarea" />
      </div>
      {props.newPostText && <span>{props.newPostText}</span> }
      
    </div>
  )
}

export const MessageTextArea = (props) => {
  debugger
  return (
    <div className={props.newMessageBody && s.formControl + ' ' + s.error}>
      <div>
        <Field {...props} as="textarea" />
      </div>
      {props.newMessageBody && <span>{props.newMessageBody}</span> }
      
    </div>
  )
}