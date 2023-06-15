import React from "react";
// import Users from "./UsersC";
// import UsersAPIComponent from "./UsersAPIComponent";
// import Users from "./Users";
import { connect } from "react-redux";
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from "../../redux/users-reducer";
// import axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import { usersAPI } from "../API/api";


class UsersContainer extends React.Component {

  componentDidMount() {
    // debugger
    // console.log(this.props)
    this.props.toggleIsFetching(true);
    // console.log(this.props.isFetching); // true

    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        // debugger
        // console.log(this.props)
        this.props.toggleIsFetching(false);
        // console.log(this.props.isFetching); // undef
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);

      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    // console.log(this.props.isFetching); // true
    usersAPI.getUsers(pageNumber, this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false);
        // console.log(this.props.isFetching); // undef
        this.props.setUsers(data.items);
      })
  }

  render() {
    // debugger
    return <>

      {/* { console.log(this.props.isFetching) } */}
      {/* <img src={preloader} /> */}

      {this.props.isFetching ? <Preloader /> : <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        users={this.props.users}
      />}


    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId))
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId))
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount))
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching))
//     },
//   }
// }

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersContainer)