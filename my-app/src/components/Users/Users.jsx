import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/userphoto.png"
import { NavLink } from "react-router-dom";
// import axios from "axios";
import { usersAPI } from "../API/api";
import { Formik, Form, Field, ErrorMessage } from 'formik';


let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <UsersSerachForm />
      <div>
        {pages.map((page) => {
          return <span
            className={props.currentPage === page ? s.selectedPage : ''}
            onClick={() => { props.onPageChanged(page) }}
          >{page}</span>
        })}
      </div>
      {props.users.map(user =>
        <div key={user.id}>
          <span>
            <div>
              <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.userPhoto} alt="User Photo" />
              </NavLink>
            </div>
            <div>
              {user.followed
                ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                  props.unfollow(user.id)
                }}>Unfollow</button>
                : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                  props.follow(user.id)
                }}>Follow</button>
              }
            </div>
          </span>
          <span>
            <span>
              <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
              </span>
              <span>
                <div>{"user.location.city"}</div>
                <div>{"user.location.country"}</div>
              </span>
            </span>
          </span>
        </div>
      )}
    </div>
  )
}

const userSearchSerchValidate = (values) => {
  
    const errors = {};
    // if (!values.email) {
    //   errors.email = 'Required';
    // } else if (
    //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    // ) {
    //   errors.email = 'Invalid email address';
    // }
    return errors;
  
}

const UsersSerachForm = () => {

  const submit = (values, { setSubmitting }) => {
    debugger
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
