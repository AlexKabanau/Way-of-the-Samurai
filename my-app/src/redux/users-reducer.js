const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET USERS';
const SET_CURRENT_PAGE = 'SET CURRENT PAGE';
const SET_TOTAL_USERS_COUNT = 'SET TOTAL USERS COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE IS FETCHING';

let initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
}

const usersReducer = (state = initialState, action) => {
  // debugger
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state, 
        users: state.users.map( (user) => {
          if (user.id === action.userId) {
            return {...user, followed: true}
          }
          return user
        } )
      };
    }
    case UNFOLLOW: {
      return {
        ...state, 
        users: state.users.map( (user) => {
          if (user.id === action.userId) {
            return {...user, followed: false}
          }
          return user
        } )
      };
    }
    case SET_USERS: {
      return {...state, users: action.users }
    }
    case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.currentPage}
    }
    case SET_TOTAL_USERS_COUNT: {
      return {...state, totalUsersCount: action.count}
    }
    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: action.isFetching}
    }
    default:
      return state

  }
}

export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId
  }
}
export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId
  }
}
export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users
  }
}
export const setCurrentPageAC = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage,
  }
}
export const setTotalUsersCountAC = (totalUsersCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount,
  }
}
export const toggleIsFetchingAC = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching
  }
}

export default usersReducer