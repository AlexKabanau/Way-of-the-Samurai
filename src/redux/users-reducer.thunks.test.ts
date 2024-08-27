import axios from 'axios';
import { APIResponseType, ResultCodesEnum } from '../components/API/api';
import { usersAPI } from '../components/API/users-api';
import { actions, follow, unfollow } from './users-reducer';
jest.mock('../components/API/users-api');
const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>;

const result: APIResponseType = {
  resultCode: ResultCodesEnum.Success,
  data: {},
  messages: [],
};

userAPIMock.follow.mockReturnValue(Promise.resolve(result));
userAPIMock.unfollow.mockReturnValue(Promise.resolve(result));

test('success follow thunk', async () => {
  const thunk = follow(1);
  const dispatchMock = jest.fn();
  const getStateMock = jest.fn();

  await thunk(dispatchMock, getStateMock, {});

  expect(dispatchMock).toHaveBeenCalledTimes(3);
  expect(dispatchMock).toHaveBeenCalledWith(1, actions.toggleIsFollowingProgress(true, 1));
  expect(dispatchMock).toHaveBeenCalledWith(2, actions.followSuccess(1));
  expect(dispatchMock).toHaveBeenCalledWith(3, actions.toggleIsFollowingProgress(false, 1));
});

test('success unfollow thunk', async () => {
  const thunk = unfollow(3);
  const dispatchMock = jest.fn();
  const getStateMock = jest.fn();

  await thunk(dispatchMock, getStateMock, {});

  expect(dispatchMock).toHaveBeenCalledTimes(3);
  expect(dispatchMock).toHaveBeenCalledWith(3, actions.toggleIsFollowingProgress(true, 1));
  expect(dispatchMock).toHaveBeenCalledWith(3, actions.unfollowSuccess(1));
  expect(dispatchMock).toHaveBeenCalledWith(3, actions.toggleIsFollowingProgress(false, 1));
});
