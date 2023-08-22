import { usersAPI } from "../components/API/api";
import { updateObjectInArray } from "../utils/validators/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET USERS';
const SET_CURRENT_PAGE = 'SET CURRENT PAGE';
const SET_TOTAL_USERS_COUNT = 'SET TOTAL USERS COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE IS FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
  // debugger
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
        // users: state.users.map((user) => {
        //   if (user.id === action.userId) {
        //     return { ...user, followed: true }
        //   }
        //   return user
        // })
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
        // users: state.users.map((user) => {
        //   if (user.id === action.userId) {
        //     return { ...user, followed: false }
        //   }
        //   return user
        // })
      };
    }
    case SET_USERS: {
      return { ...state, users: action.users }
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count }
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    }
    default:
      return state

  }
}

export const followSuccess = (userId) => {
  return {
    type: FOLLOW,
    userId
  }
}
export const unfollowSuccess = (userId) => {
  return {
    type: UNFOLLOW,
    userId
  }
}
export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users
  }
}
export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage,
  }
}
export const setTotalUsersCount = (totalUsersCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount,
  }
}
export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching
  }
}
export const toggleIsFollowingProgress = (isFetching, userId) => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
  }
}

export const requestUsers = (page, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    let data = await usersAPI.getUsers(page, pageSize);

    dispatch(toggleIsFetching(false));
    // dispatch(setCurrentPage(page));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));


  }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {

  dispatch(toggleIsFollowingProgress(true, userId));
  let data = await apiMethod(userId)
  debugger
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(toggleIsFollowingProgress(false, userId));

}


export const follow = (userId) => {
  return async (dispatch) => {
    let apiMethod = usersAPI.followUser.bind(userId)
    let actionCreator = followSuccess;
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)

    // dispatch(toggleIsFollowingProgress(true, userId));
    // let data = await apiMethod(userId)
    // debugger
    // if (data.resultCode === 0) {
    //   dispatch(actionCreator(userId))
    // }
    // dispatch(toggleIsFollowingProgress(false, userId));

  }
}
export const unfollow = (userId) => {
  return async (dispatch) => {
    let apiMethod = usersAPI.unfollowUser.bind(userId)
    let actionCreator = unfollowSuccess;


    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)


    // dispatch(toggleIsFollowingProgress(true, userId));
    // let data = await apiMethod(userId)
    // debugger
    // if (data.resultCode === 0) {
    //   dispatch(actionCreator(userId))
    // }
    // dispatch(toggleIsFollowingProgress(false, userId));

  }
}


export default usersReducer