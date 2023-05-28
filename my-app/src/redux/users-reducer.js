const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET USERS';

let initialState = {
  users: [
    {id: 1, photoUrl: 'https://www.libarts.colostate.edu/wp-content/uploads/2018/02/userphoto.png', fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', counry: 'Belarus'}, followed: false, },
    {id: 2, photoUrl: 'https://www.libarts.colostate.edu/wp-content/uploads/2018/02/userphoto.png', fullName: 'Alesha', status: 'I am a boss too', location: {city: 'Moscow', counry: 'Russia'}, followed: true, },
    {id: 3, photoUrl: 'https://www.libarts.colostate.edu/wp-content/uploads/2018/02/userphoto.png', fullName: 'Alex', status: 'I am a boss too too', location: {city: 'Kiev', counry: 'Ukrainw'}, followed: false, },
  ],
}

const usersReducer = (state = initialState, action) => {
  
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
      return {...state, users: [ ...state.users, ...action.users ]}
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

export default usersReducer