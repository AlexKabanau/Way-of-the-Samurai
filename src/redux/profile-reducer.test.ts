import { ProfileType } from '../types/types';
import profileReducer, { actions } from './profile-reducer';

let state = {
  posts: [
    { id: 1, message: 'Hi, how are you?', name: 'Alex K', age: 34, likesCount: 12 },
    { id: 2, message: "It's my first post", name: 'John Doe', age: 52, likesCount: 11 },
    { id: 3, message: 'Lorem', name: 'Dima K', age: 28, likesCount: 8 },
  ],
  profile: null,
  status: '',
  newPostText: '',
};

test('lenght post should be incremented', () => {
  // 1. test data
  let action = actions.addPostActionCreator('It kamasutra.com');

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(4);
  // expect(newState.posts[3].message).toBe("It kamasutra.com")
});

test('message of new post should be correct', () => {
  // 1. test data
  let action = actions.addPostActionCreator('It kamasutra.com');

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  // expect(newState.posts.length).toBe(4)
  expect(newState.posts[3].message).toBe('It kamasutra.com');
});

test('after del length of message should be decrement', () => {
  // 1. test data
  let action = actions.deletePost(1);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(2);
});

test('after del length of message shouldn`t be decrement if ID is incorrect', () => {
  // 1. test data
  let action = actions.deletePost(1000);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
});
