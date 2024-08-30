import React, { FC, useEffect } from 'react';
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
import { actions, FilterType, requestUsers } from '../../redux/users-reducer';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentPage,
  getFollowingInProgress,
  getPageSize,
  getTotalUsersCount,
  getUsers,
  getUsersFilter,
} from '../../redux/users-selectors';

type PropsType = {
  // totalUsersCount: number;
  // pageSize: number;
  // currentPage: number;
  // onPageChanged: (pageNumber: number) => void;
  // onFilterChanged: (filter: FilterType) => void;
  // followingInProgress: Array<number>;
  // unfollow: (userId: number) => void;
  // follow: (userId: number) => void;
  // users: Array<UserType>;
};

export const Users: FC<PropsType> = ({
  // currentPage,
  // onPageChanged,
  // totalUsersCount,
  // pageSize,
  // followingInProgress,
  // unfollow,
  // follow,
  // users,
  ...props
}) => {
  const users = useSelector(getUsers);
  const totalUsersCount = useSelector(getTotalUsersCount);
  const currentPage = useSelector(getCurrentPage);
  const pageSize = useSelector(getPageSize);
  const filter = useSelector(getUsersFilter);
  const followingInProgress = useSelector(getFollowingInProgress);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.requestUsers(currentPage, pageSize, filter));
  }, []);

  const onPageChanged = (pageNumber: number) => {
    dispatch(actions.requestUsers(pageNumber, pageSize, filter));
  };
  const onFilterChanged = (filter: FilterType) => {
    dispatch(actions.requestUsers(1, pageSize, filter));
  };
  const follow = (userId: number) => {
    dispatch(actions.follow(userId));
  };
  const unfollow = (userId: number) => {
    dispatch(actions.unfollow(userId));
  };

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
