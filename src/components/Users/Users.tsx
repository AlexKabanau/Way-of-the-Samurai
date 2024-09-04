import React, { FC, useEffect } from 'react';
import qs from 'qs';

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
  follow,
  requestUsers,
  unfollow,
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
import { useLocation, useNavigate } from 'react-router-dom';
import QueryString from 'qs';
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
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const search = location.search;
    const parsed = qs.parse(search.substring(1)) as { term: string; page: string; friend: string };

    let actualPage = currentPage;
    if (!!parsed.page) {
      actualPage = Number(parsed.page);
    }
    let actualFilter = filter;
    if (!!parsed.term) {
      actualFilter = { ...actualFilter, term: parsed.term as string };
    }
    if (!!parsed.friend) {
      actualFilter = {
        ...actualFilter,
        friend: parsed.friend === 'null' ? null : parsed.friend === 'true' ? true : false,
      };
    }
    // debugger;
    debugger;
    console.log(parsed);

    dispatch(requestUsers(actualPage, pageSize, actualFilter));
  }, []);
  useEffect(() => {
    navigate(`/users?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`);
  }, [filter, currentPage]);

  const onPageChanged = (pageNumber: number) => {
    dispatch(requestUsers(pageNumber, pageSize, filter));
  };
  const onFilterChanged = (filter: FilterType) => {
    dispatch(requestUsers(1, pageSize, filter));
  };
  const followUser = (userId: number) => {
    dispatch(follow(userId));
  };
  const unfollowUser = (userId: number) => {
    dispatch(unfollow(userId));
  };
  // debugger;

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
          unfollow={unfollowUser}
          follow={followUser}
        />
      ))}
    </div>
  );
};
