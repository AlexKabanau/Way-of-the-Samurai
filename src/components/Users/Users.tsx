import React, { FC } from 'react';
// import s from "./Users.module.css";
// import userPhoto from "../../assets/images/userphoto.png"
// import { NavLink } from "react-router-dom";
// import axios from "axios";
// import { usersAPI } from "../API/api";
import { Formik, Form, Field } from 'formik';
import Paginator from './Paginator';
import User from './User';
import { UserType } from '../../types/types';

type PropsType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged: (pageNumber: number) => void;
  followingInProgress: Array<number>;
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
  users: Array<UserType>;
};

let Users: FC<PropsType> = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
  followingInProgress,
  unfollow,
  follow,
  users,
  ...props
}) => {
  return (
    <div>
      {/* <UsersSerachForm /> */}
      <Paginator
        currentPage={currentPage}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        onPageChanged={onPageChanged}
      />
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          followingInProgress={followingInProgress}
          unfollow={unfollow}
          follow={follow}
        />
      ))}
    </div>
  );
};

// const userSearchSerchValidate = (values) => {

//   const errors = {};
//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (
//     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//   ) {
//     errors.email = 'Invalid email address';
//   }
//   return errors;

// }

// const UsersSerachForm = () => {

//   const submit = (values, { setSubmitting }) => {
//     // debugger
//     setTimeout(() => {
//       alert(JSON.stringify(values, null, 2));
//       setSubmitting(false);
//     }, 400);
//   }

//   return <>
//     <Formik
//       initialValues={{ term: '' }}
//       validate={userSearchSerchValidate}
//       onSubmit={submit}
//     >
//       {({ isSubmitting }) => (
//         <Form>
//           <Field type="text" name="term" />
//           <button type="submit" disabled={isSubmitting}>
//             Find
//           </button>
//         </Form>
//       )}
//     </Formik>
//   </>
// }

export default Users;
