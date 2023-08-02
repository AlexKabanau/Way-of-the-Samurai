import React from "react";
import { connect } from "react-redux";
import { follow, unfollow,  setCurrentPage,   toggleIsFollowingProgress } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import { requestUsers } from "../../redux/users-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers, getUsersSuper, getUsersSuperSelector } from "../../redux/users-selectors";


class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {

    this.props.requestUsers(pageNumber, this.props.pageSize);

  }

  render() {
    return <>

      {this.props.isFetching 
      ? <Preloader /> 
      : <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        users={this.props.users}
        followingInProgress={this.props.followingInProgress}
      />}

    </>
  }
}

let mapStateToProps = (state) => {
  return {
    // users: getUsersSuperSelector(state),
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
}
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

export default compose(
  // withAuthRedirect,
  connect(
    mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleIsFollowingProgress,
    requestUsers,
  })
)(UsersContainer)

