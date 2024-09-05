import React, { FC, useEffect } from 'react';
import qs from 'qs';
import Paginator from './Paginator';
import User from './User';
import { UsersSerachForm } from './UsersSearchForm';
import { FilterType, follow, requestUsers, unfollow } from '../../redux/users-reducer';
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

type PropsType = {};
type QueryParamsType = { term?: string; page?: string; friend?: string };

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
    const parsed = qs.parse(location.search) as QueryParamsType;

    let actualPage = currentPage;
    let actualFilter = filter;
    if (!!parsed.page) actualPage = Number(parsed.page);
    if (!!parsed.term) actualFilter = { ...actualFilter, term: parsed.term as string };

    if (!!parsed.term) actualFilter = { ...actualFilter, term: parsed.term as string };

    switch (parsed.friend) {
      case 'null':
        actualFilter = { ...actualFilter, friend: null };
        break;
      case 'true':
        actualFilter = { ...actualFilter, friend: true };
        break;
      case 'false':
        actualFilter = { ...actualFilter, friend: false };
        break;
    }

    dispatch(requestUsers(actualPage, pageSize, actualFilter));
  }, []);

  useEffect(() => {
    const query: QueryParamsType = {};

    if (!!filter.term) query.term = filter.term;
    if (filter.friend !== null) query.friend = String(filter.friend);
    if (currentPage !== 1) query.page = String(currentPage);

    navigate(`/users?${qs.stringify(query)}`);
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
