import React, { FC } from 'react';
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

type MapPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = {
  getUserProfile: (userId: number) => void;
  getStatus: (userId: number) => void;
  updateStatus: (status: string) => void;
  savePhoto: (file: File) => void;
  saveProfile: (profile: ProfileType) => Promise<any>;
};
type PathParamsType = {
  userId: string;
};

type PropsType = MapPropsType & DispatchPropsType;
let userId = 29275;

class ProfileContainer extends React.Component<PropsType> {
  refreshProfile() {
    // userId = 2;
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }
  // const [profile, getUserProfile] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
  //     .then((response) => response.data)
  //     .then((data) => getUserProfile(data));
  // }, [userId]);
  // props.getStatus(userId);

  render() {
    return (
      <main>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
          isOwner={userId === 29275 ? true : false}
          savePhoto={this.props.savePhoto}
        />
      </main>
    );
  }
  // }
}

let mapStateToProps = (state: AppStateType) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
  };
};

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
  }),
)(ProfileContainer);
