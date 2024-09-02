import React, { FC, useEffect } from 'react';
// import s from "./Users.module.css";
// import userPhoto from "../../assets/images/userphoto.png"
// import { NavLink } from "react-router-dom";
// import axios from "axios";
// import { usersAPI } from "../API/api";
// import { Formik, Form, Field } from 'formik';
import Paginator from './Paginator';
import User from './User';
// import { UserType } from '../../types/types';
import { UsersSerachForm } from './UsersSearchForm';
import {
  // actions,
  // ActionsTypes,
  // DispatchType,
  FilterType,
  requestUsers,
} from '../../redux/users-reducer';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentPage,
  getFollowingInProgress,
  getPageSize,
  getTotalUsersCount,
  getUsers,
  getUsersFilter,
} from '../../redux/users-selectors';
import { AppDispatch } from '../../redux/redux-store';
// import store from '../../state';
// import { Dispatch } from 'redux';

type PropsType = {};
// type AppDispatch = typeof store.dispatch;

export const Users: FC<PropsType> = (props) => {
  const users = useSelector(getUsers);
  const totalUsersCount = useSelector(getTotalUsersCount);
  const currentPage = useSelector(getCurrentPage);
  const pageSize = useSelector(getPageSize);
  const filter = useSelector(getUsersFilter);
  const followingInProgress = useSelector(getFollowingInProgress);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(requestUsers(currentPage, pageSize, filter));
  }, []);

  const onPageChanged = (pageNumber: number) => {
    dispatch(requestUsers(pageNumber, pageSize, filter));
  };
  const onFilterChanged = (filter: FilterType) => {
    dispatch(requestUsers(1, pageSize, filter));
  };
  const follow = (userId: number) => {
    dispatch(follow(userId));
  };
  const unfollow = (userId: number) => {
    dispatch(unfollow(userId));
  };
  debugger;

  return (
    <div>
      <UsersSerachForm onFilterChanged={onFilterChanged} />
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
