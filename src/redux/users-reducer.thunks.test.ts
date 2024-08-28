import axios from 'axios';
import { APIResponseType, ResultCodesEnum } from '../components/API/api';
import { usersAPI } from '../components/API/users-api';
import { actions, follow, unfollow } from './users-reducer';
jest.mock('../components/API/users-api');
const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>;

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

const result: APIResponseType = {
  resultCode: ResultCodesEnum.Success,
  data: {},
  messages: [],
};

beforeEach(() => {
  dispatchMock.mockClear();
  getStateMock.mockClear();
  userAPIMock.followUser.mockClear();
  userAPIMock.unfollowUser.mockClear();
});

// userAPIMock.unfollowUser.mockReturnValue(Promise.resolve(result));

test('success follow thunk', async () => {
  userAPIMock.followUser.mockReturnValue(Promise.resolve(result));

  const thunk = follow(1);

  await thunk(dispatchMock, getStateMock, {});

  expect(dispatchMock).toHaveBeenCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleIsFollowingProgress(true, 1));
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess(1));
  expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleIsFollowingProgress(false, 1));
});

test('success unfollow thunk', async () => {
  userAPIMock.unfollowUser.mockReturnValue(Promise.resolve(result));

  const thunk = unfollow(3);

  await thunk(dispatchMock, getStateMock, {});

  expect(dispatchMock).toHaveBeenCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleIsFollowingProgress(true, 3));
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollowSuccess(3));
  expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleIsFollowingProgress(false, 3));
});
