import React from "react"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Contact } from "./ProfileInfo";
import s from "./ProfileInfo.module.css"

const ProfileDataForm = ({ profile, saveProfile, setEditMode }) => {
  const onSubmit = (formData) => {
    // debugger
    // console.log(formData)

    saveProfile(formData).then(
      () => {
        // debugger
        setEditMode(false)
      }
    )
  }
  return (

    <Formik
      initialValues={{ profile }}
    onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <button type="submit" disabled={isSubmitting}>
              Save
            </button>
          </div>
          <div>
            <label for="fullName"><b>Full Name: </b></label>
            <Field type="text" name="fullName" />
            {/* <ErrorMessage name="fullName" component="div" /> */}
          </div>
          <div>
            <Field type={"checkbox"} name="lookingForAJob" />Looking for a job
          </div>
          <div>
            <label for="lookingForAJobDescription"><b>My professinal skills: </b></label>
            <Field name="lookingForAJobDescription"
              as='textarea'
              placeholder="Enter your skills"
              required
            />
          </div>
          <div>
            <label for="aboutMe"><b>About Me: </b></label>
            <Field name="aboutMe"
              as='textarea'
              placeholder="About Me"
              required
            />
          </div>
          <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
              return <div key={key} className={s.contact}>
                <label for={`contacts.` + key}><b>{key}</b>:</label>
                <Field type="text" name={`contacts.` + key} />
              </div>
            })}
          </div>
        </Form>
      )}
    </Formik>

  )
}

export default ProfileDataForm