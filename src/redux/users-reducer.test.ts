import usersReducer, { InitialStateType, actions } from './users-reducer';

let state: InitialStateType;

beforeEach(() => {
  state = {
    users: [
      {
        id: 0,
        name: 'User 0',
        followed: false,
        photos: {
          small: '',
          large: '',
        },
        status: 'status0',
      },
      {
        id: 1,
        name: 'User 1',
        followed: false,
        photos: {
          small: '',
          large: '',
        },
        status: 'status1',
      },
      {
        id: 2,
        name: 'User 2',
        followed: true,
        photos: {
          small: '',
          large: '',
        },
        status: 'status2',
      },
      {
        id: 3,
        name: 'User 3',
        followed: true,
        photos: {
          small: '',
          large: '',
        },
        status: 'status3',
      },
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [], // array of UsersId
  };
});

test('unfollow success', () => {
  // Your test code here

  //userReducer
  const newState = usersReducer(state, actions.unfollowSuccess(2));

  expect(newState.users[0].followed).toBeFalsy();
  expect(newState.users[1].followed).toBeFalsy();
  expect(newState.users[2].followed).toBeFalsy();
  expect(newState.users[3].followed).toBeTruthy();
});
test('follow success', () => {
  // Your test code here

  //userReducer
  const newState = usersReducer(state, actions.followSuccess(1));

  expect(newState.users[0].followed).toBeFalsy();
  expect(newState.users[1].followed).toBeTruthy();
  expect(newState.users[2].followed).toBeTruthy();
  expect(newState.users[3].followed).toBeTruthy();
});
