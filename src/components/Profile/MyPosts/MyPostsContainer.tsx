// import React from "react";
import { actions } from '../../../redux/profile-reducer';
import { AppStateType } from '../../../redux/redux-store';
import MyPosts, { DispatchPropsType, MapPropsType } from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts,
  };
};

const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(
  mapStateToProps,
  {
    addPost: actions.addPostActionCreator,
  },
)(MyPosts);
export default MyPostsContainer;
