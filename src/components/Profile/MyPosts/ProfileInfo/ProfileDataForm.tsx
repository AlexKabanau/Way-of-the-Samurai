import React, { FC } from 'react';
import { Formik, Form, Field } from 'formik';
// import { Contact } from "./ProfileInfo";
import s from './ProfileInfo.module.css';
import { ProfileType } from '../../../../types/types';
import { GetStringKeys } from '../../../Common/FormsControls/FormsControls';

type PropsType = {
  profile: ProfileType;
  saveProfile: (profile: ProfileType) => Promise<void>;
  setEditMode: (param: boolean) => void;
};
type ProfileTypeKeys = GetStringKeys<ProfileType>;

type InitialStateFormikType = {
  profile: ProfileType;
};

type SetSubmitTypeStatus = {
  setEditMode: (param: boolean) => void;
  resetForm: () => void;
};

const ProfileDataForm: FC<PropsType> = (props) => {
  const submit = (
    values: InitialStateFormikType,
    { setEditMode, resetForm }: SetSubmitTypeStatus,
  ) => {
    // debugger
    // console.log(formData)

    props.saveProfile(values.profile).then(() => {
      // debugger
      setEditMode(false);
    });
  };
  return (
    <Formik initialValues={profile} onSubmit={submit}>
      {({ isSubmitting }) => (
        <Form>
          <div>
            <button type="submit" disabled={isSubmitting}>
              Save
            </button>
          </div>
          <div>
            <label htmlFor="fullName">
              <b>Full Name: </b>
            </label>
            <Field type="text" name="fullName" />
            {/* <ErrorMessage name="fullName" component="div" /> */}
          </div>
          <div>
            <Field type={'checkbox'} name="lookingForAJob" />
            Looking for a job
          </div>
          <div>
            <label htmlFor="lookingForAJobDescription">
              <b>My professinal skills: </b>
            </label>
            <Field
              name="lookingForAJobDescription"
              as="textarea"
              placeholder="Enter your skills"
              required
            />
          </div>
          <div>
            <label htmlFor="aboutMe">
              <b>About Me: </b>
            </label>
            <Field name="aboutMe" as="textarea" placeholder="About Me" required />
          </div>
          <div>
            <b>Contacts:</b>{' '}
            {Object.keys(profile.contacts).map((key) => {
              return (
                <div key={key} className={s.contact}>
                  <label htmlFor={`contacts.` + key}>
                    <b>{key}</b>:
                  </label>
                  <Field type="text" name={`contacts.` + key} />
                </div>
              );
            })}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileDataForm;
