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

////////////////////////////////

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

////////////////////////////////

// type MapPropsType = ReturnType<typeof mapStateToProps>;
// type DispatchPropsType = {
//   getUserProfile: (userId: number) => void;
//   getStatus: (userId: number) => void;
//   updateStatus: (status: string) => void;
//   savePhoto: (file: File) => void;
//   saveProfile: (profile: ProfileType) => Promise<any>;
// };
// type PathParamsType = {
//   userId: string;
// };

// type PropsType = MapPropsType & DispatchPropsType;

/////////////////////

// let userId = 29275;

/////////////////

class ProfileContainer extends React.Component<PropsType> {
  get getUserId() {
    if (this.props.profile) {
      return this.props.profile.userId;
    }
    return 29275;
  }
  // this.userId = +useParams(),
  refreshProfile() {
    let userId: number | null = +useParams();

    if (!userId) {
      // this.props.history.push;
      userId = userId = this.props.authorizedUserId;
      // throw new Error('ID should exist');
    }
    if (!userId) {
      console.error("ID should exists in URI params or in state ('authorizedUserId')");
    } else {
      this.props.getProfile(userId);
      this.props.getStatus(userId);
    }

    // const params = useParams<{ userId: string }>();
    // userId = Number(params.userId);
    // userId = useParams();

    // userId = 2;
    // this.props.getProfile(userId);
    // this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
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
          isOwner={this.getUserId() === 29275 ? true : false}
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
          savePhoto={this.props.savePhoto}
          // saveProfile={this.props.saveProfile}
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
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
)(ProfileContainer);
