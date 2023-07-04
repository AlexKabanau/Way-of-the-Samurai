import { Field } from "formik";
import React from "react";
import s from "./FormsControls.module.css"




export const TextArea = (props) => {
  debugger
  return (
    <div className={s.formControl + ' ' + s.error}>
      <div>
        <Field {...props} as="textarea" />
      </div>
      {props.newPostText && <span>{props.newPostText}</span> }
        
    </div>
  )
}