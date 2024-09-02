import React, { FC } from 'react';
import { connect, useSelector } from 'react-redux';
// import { actions, follow, unfollow, requestUsers, FilterType } from '../../redux/users-reducer';
import Preloader from '../Common/Preloader/Preloader';
// import { withAuthRedirect } from "../../hoc/withAuthRedirect";
// import { compose } from 'redux';
import {
  // getCurrentPage,
  // getFollowingInProgress,
  getIsFetching,
  // getPageSize,
  // getTotalUsersCount,
  // getUsers,
  // getUsersFilter,
} from '../../redux/users-selectors';
// import { UserType } from '../../types/types';
// import { AppStateType } from '../../redux/redux-store';
// import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { Users } from './Users';

// type MapStatePropsType = {
//   currentPage: number;
//   pageSize: number;
//   isFetching: boolean;
//   totalUsersCount: number;
//   filter: FilterType;

//   users: Array<UserType>;
//   followingInProgress: Array<number>;
// };

// type MapDispatchPropsType = {
//   getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void;
//   unfollow: (userId: number) => void;
//   follow: (userId: number) => void;
//   // setCurrentPage: (currentPage: number) => void;
//   // toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void;
// };

// type OwnPropsType = {
//   pageTitle: string;
// };

// type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

type UsersPagePropsType = {
  pageTitle: string;
};

export const UsersPage: FC<UsersPagePropsType> = (props) => {
  const isFetching = useSelector(getIsFetching);
  debugger;

  return (
    <>
      <h2>{props.pageTitle}</h2>
      {isFetching ? <Preloader /> : null}
      <Users
      // totalUsersCount={this.props.totalUsersCount}
      // pageSize={this.props.pageSize}
      // currentPage={this.props.currentPage}
      // onPageChanged={this.onPageChanged}
      // onFilterChanged={this.onFilterChanged}
      // follow={this.props.follow}
      // unfollow={this.props.unfollow}
      // users={this.props.users}
      // followingInProgress={this.props.followingInProgress}
      />
    </>
  );
};

// class UsersContainer extends React.Component<PropsType> {
//   componentDidMount() {
//     const { currentPage, pageSize, filter } = this.props;
//     this.props.getUsers(currentPage, pageSize, filter);
//   }

//   onPageChanged = (pageNumber: number) => {
//     const { pageSize, filter } = this.props;
//     this.props.getUsers(pageNumber, pageSize, filter);
//   };

//   onFilterChanged = (filter: FilterType) => {
//     const { pageSize } = this.props;

//     this.props.getUsers(1, pageSize, filter);
//   };

//   render() {
//     return (
//       <>
//         {/* <h2>{this.props.pageTitle}</h2> */}
//         {this.props.isFetching ? (
//           <Preloader />
//         ) : (
//           <Users
//           // totalUsersCount={this.props.totalUsersCount}
//           // pageSize={this.props.pageSize}
//           // currentPage={this.props.currentPage}
//           // onPageChanged={this.onPageChanged}
//           // onFilterChanged={this.onFilterChanged}
//           // follow={this.props.follow}
//           // unfollow={this.props.unfollow}
//           // users={this.props.users}
//           // followingInProgress={this.props.followingInProgress}
//           />
//         )}
//       </>
//     );
//   }
// }

// let mapStateToProps = (state: AppStateType): MapStatePropsType => {
//   return {
//     // users: getUsersSuperSelector(state),
//     users: getUsers(state),
//     pageSize: getPageSize(state),
//     totalUsersCount: getTotalUsersCount(state),
//     currentPage: getCurrentPage(state),
//     isFetching: getIsFetching(state),
//     followingInProgress: getFollowingInProgress(state),
//     filter: getUsersFilter(state),
//   };
// };
// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
//   }
// }

// export default compose<React.ComponentType>(
//   withAuthRedirect,
//   connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
//     follow,
//     unfollow,
//     // toggleIsFollowingProgress: actions.toggleIsFollowingProgress,
//     // setCurrentPage: actions.setCurrentPage,
//     getUsers: requestUsers,
//   }),
// )(UsersContainer);
