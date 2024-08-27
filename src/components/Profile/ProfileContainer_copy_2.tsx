import React from 'react';
import axios from 'axios';

// import { Navigate } from "react-router-dom";
import {
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile,
} from '../../redux/profile-reducer';
import Profile from './Profile';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { compose } from 'redux';
import { useEffect, useState } from 'react';
import { AppStateType } from '../../redux/redux-store';
import { ProfileType } from '../../types/types';

type MapStatePropsType = ReturnType<typeof mapStateToProps>;

type MapDispatchPropsType = {
  getProfile: (userId: number) => void;
  getStatus: (userId: number) => void;
  updateStatus: (status: string) => void;
  savePhoto: (file: File) => void;
  saveProfile: (profile: ProfileType) => void;
};

type OwnPropsType = {
  // pageTitle: string;
};
type PathParamsType = {
  userId: string;
};

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

const ProfileContainer: React.FC<PropsType> = (props) => {
  let { userId } = useParams();
  let id = Number(userId);
  if (!id) {
    id = 29275;
    // userId = 2;
  }
  const [profile, getUserProfile] = useState(null);

  useEffect(() => {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/profile/' + id)
      .then((response) => response.data)
      .then((data) => getUserProfile(data));
  }, [userId]);
  props.getStatus(id);

  return (
    <main>
      <Profile
        {...props}
        profile={profile}
        status={props.status}
        updateStatus={props.updateStatus}
        isOwner={id === 29275 ? true : false}
        savePhoto={props.savePhoto}
      />
    </main>
  );
  // }
};

let mapStateToProps = (state: AppStateType) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
  }),
)(ProfileContainer);
