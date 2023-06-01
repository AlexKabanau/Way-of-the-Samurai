import React from "react";
// import Users from "./UsersC";
// import UsersAPIComponent from "./UsersAPIComponent";
// import Users from "./Users";
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsFetchingAC } from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import preloader from "../../assets/images/Spinner-1s-200px.svg"


class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(true);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);

      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(true);
        this.props.setUsers(response.data.items);
      })
  }

  render() {
    return <>

      <img src={preloader} />
      {/* {this.props.isFetching ? <div style={ {backgroundColor: 'yellow'} }>
        <img src={preloader} />
      </div> : null} */}

      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        users={this.props.users}
      />
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

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount))
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)