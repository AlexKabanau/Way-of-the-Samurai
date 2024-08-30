import { Dispatch } from 'redux';
import { usersAPI } from '../components/API/users-api';
import { PhotosType, UserType } from '../types/types';
import { updateObjectInArray } from '../utils/validators/object-helpers';
import { AppStateType, BaseThunkType, InferActionsTypes } from './redux-store';
import { ThunkAction } from 'redux-thunk';
import { APIResponseType } from '../components/API/api';

// const FOLLOW = 'FOLLOW';
// const UNFOLLOW = 'UNFOLLOW';
// const SET_USERS = 'SET USERS';
// const SET_CURRENT_PAGE = 'SET CURRENT PAGE';
// const SET_TOTAL_USERS_COUNT = 'SET TOTAL USERS COUNT';
// const TOGGLE_IS_FETCHING = 'TOGGLE IS FETCHING';
// const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

export type InitialStateType = typeof initialState;
export type FilterType = typeof initialState.filter;

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as Array<number>, //array of users ids,
  filter: {
    term: '',
    friend: null as null | boolean,
  },
};
type ActionsTypes = InferActionsTypes<typeof actions>;
// | FollowSuccessActionType
// | UnfollowSuccessActionType
// | SetUsersActionType
// | SetCurrentPageActionType
// | SetTotalUsersCountActionType
// | ToggleIsFetchingActionType
// | ToggleIsFollowingProgressActionType;

export const actions = {
  followSuccess: (userId: number) => {
    return {
      type: 'FOLLOW',
      userId,
    } as const;
  },

  unfollowSuccess: (userId: number) => {
    return {
      type: 'UNFOLLOW',
      userId,
    } as const;
  },

  setUsers: (users: Array<UserType>) => {
    return {
      type: 'SET_USERS',
      users,
    } as const;
  },

  setCurrentPage: (currentPage: number) => {
    return {
      type: 'SET_CURRENT_PAGE',
      currentPage: currentPage,
    } as const;
  },
  setFilter: (filter: FilterType) => {
    return {
      type: 'SET_FILTER',
      payload: filter,
    } as const;
  },

  setTotalUsersCount: (totalUsersCount: number) => {
    return {
      type: 'SET_TOTAL_USERS_COUNT',
      count: totalUsersCount,
    } as const;
  },

  toggleIsFetching: (isFetching: boolean) => {
    return {
      type: 'TOGGLE_IS_FETCHING',
      isFetching,
    } as const;
  },

  toggleIsFollowingProgress: (isFetching: boolean, userId: number) => {
    return {
      type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
      isFetching,
      userId,
    } as const;
  },
};

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  // debugger
  switch (action.type) {
    case 'FOLLOW': {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: true }),
        // users: state.users.map((user) => {
        //   if (user.id === action.userId) {
        //     return { ...user, followed: true }
        //   }
        //   return user
        // })
      };
    }
    case 'UNFOLLOW': {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: false }),
        // users: state.users.map((user) => {
        //   if (user.id === action.userId) {
        //     return { ...user, followed: false }
        //   }
        //   return user
        // })
      };
    }
    case 'SET_USERS': {
      return { ...state, users: action.users };
    }
    case 'SET_CURRENT_PAGE': {
      return { ...state, currentPage: action.currentPage };
    }
    case 'SET_FILTER': {
      return { ...state, filter: action.payload };
    }
    case 'SET_TOTAL_USERS_COUNT': {
      return { ...state, totalUsersCount: action.count };
    }
    case 'TOGGLE_IS_FETCHING': {
      return { ...state, isFetching: action.isFetching };
    }
    case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};
// type FollowSuccessActionType = {
//   type: typeof FOLLOW;
//   userId: number;
// };

// type UnfollowSuccessActionType = {
//   type: typeof UNFOLLOW;
//   userId: number;
// };

// type SetUsersActionType = {
//   type: typeof SET_USERS;
//   users: Array<UserType>;
// };

// type SetCurrentPageActionType = {
//   type: typeof SET_CURRENT_PAGE;
//   currentPage: number;
// };

// type SetTotalUsersCountActionType = {
//   type: typeof SET_TOTAL_USERS_COUNT;
//   count: number;
// };

// type ToggleIsFetchingActionType = {
//   type: typeof TOGGLE_IS_FETCHING;
//   isFetching: boolean;
// };

// type ToggleIsFollowingProgressActionType = {
//   type: typeof TOGGLE_IS_FOLLOWING_PROGRESS;
//   isFetching: boolean;
//   userId: number;
// };

type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionsTypes>;
type ThunkType = BaseThunkType<ActionsTypes>;

export const requestUsers = (page: number, pageSize: number, filter: FilterType): ThunkType => {
  return async (dispatch: DispatchType, getState: GetStateType) => {
    dispatch(actions.toggleIsFetching(true));
    dispatch(actions.setCurrentPage(page));
    dispatch(actions.setFilter(filter));

    let data = await usersAPI.getUsers(page, pageSize, filter.term, filter.friend);

    dispatch(actions.toggleIsFetching(false));
    // dispatch(setCurrentPage(page));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsersCount(data.totalCount));
  };
};

const _followUnfollowFlow = async (
  dispatch: DispatchType,
  userId: number,
  apiMethod: (userId: number) => Promise<APIResponseType>,
  actionCreator: (userId: number) => ActionsTypes,
) => {
  dispatch(actions.toggleIsFollowingProgress(true, userId));
  let data = await apiMethod(userId);
  // debugger;
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(actions.toggleIsFollowingProgress(false, userId));
};

export const follow = (userId: number): ThunkType => {
  return async (dispatch) => {
    let apiMethod = usersAPI.followUser.bind(userId);
    let actionCreator = actions.followSuccess;
    await _followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);

    // dispatch(toggleIsFollowingProgress(true, userId));
    // let data = await apiMethod(userId)
    // debugger
    // if (data.resultCode === 0) {
    //   dispatch(actionCreator(userId))
    // }
    // dispatch(toggleIsFollowingProgress(false, userId));
  };
};
export const unfollow = (userId: number): ThunkType => {
  return async (dispatch) => {
    let apiMethod = usersAPI.unfollowUser.bind(userId);
    let actionCreator = actions.unfollowSuccess;

    await _followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);

    // dispatch(toggleIsFollowingProgress(true, userId));
    // let data = await apiMethod(userId)
    // debugger
    // if (data.resultCode === 0) {
    //   dispatch(actionCreator(userId))
    // }
    // dispatch(toggleIsFollowingProgress(false, userId));
  };
};

export default usersReducer;
