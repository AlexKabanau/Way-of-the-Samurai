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
import { UsersSerachForm } from './UsersSearchForm';

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
      <UsersSerachForm />
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

export default Users;
