import React from "react";
// import s from "./Users.module.css";
// import userPhoto from "../../assets/images/userphoto.png"
// import { NavLink } from "react-router-dom";
// import axios from "axios";
// import { usersAPI } from "../API/api";
import { Formik, Form, Field } from 'formik';
import Paginator from "./Paginator"
import User from "./User";

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, followingInProgress, unfollow, follow, ...props}) => {
  return (
    <div>
      <UsersSerachForm />
      <Paginator
        currentPage={currentPage}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        onPageChanged={onPageChanged}
      />
      {props.users.map(user =>
        <User 
          key={user.id}
          user={user}
          followingInProgress={followingInProgress}
          unfollow={unfollow}
          follow={follow}
        />
      )}
    </div>
  )
}

const userSearchSerchValidate = (values) => {

  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;

}

const UsersSerachForm = () => {

  const submit = (values, { setSubmitting }) => {
    // debugger
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }

  return <>
    <Formik
      initialValues={{ term: '' }}
      validate={userSearchSerchValidate}
      onSubmit={submit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="term" />
          <button type="submit" disabled={isSubmitting}>
            Find
          </button>
        </Form>
      )}
    </Formik>
  </>
}

export default Users
