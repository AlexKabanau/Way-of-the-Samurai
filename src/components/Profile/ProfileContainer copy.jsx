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

const ProfileContainer = (props) => {
  let { userId } = useParams();
  if (!userId) {
    userId = '29275';
    // userId = 2;
  }
  const [profile, getUserProfile] = useState(null);

  useEffect(() => {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
      .then((response) => response.data)
      .then((data) => getUserProfile(data));
  }, [userId]);
  props.getStatus(userId);

  return (
    <main>
      <Profile
        {...props}
        profile={profile}
        status={props.status}
        updateStatus={props.updateStatus}
        isOwner={userId === 29275 ? true : false}
        savePhoto={props.savePhoto}
      />
    </main>
  );
  // }
};

let mapStateToProps = (state) => {
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
