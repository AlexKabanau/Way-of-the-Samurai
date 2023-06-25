import React from "react";
import axios from "axios"

import { Navigate } from "react-router-dom";
import { getUserProfile, setUserProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
import Profile from "./Profile";
// import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { useEffect, useState } from "react";


const ProfileContainer = (props) => {
  let {userId} = useParams();
  if (!userId) {
    userId = 29275;
    // userId = 2;
  }
  const [profile, getUserProfile] = useState(null);

  useEffect( () => {
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
    .then(response => response.data)
    .then(data => getUserProfile(data))
  }, [userId]);
  props.getStatus(userId)

//   componentDidMount() {
//     let {userId} = useParams();
//     // let userId = this.props.match.params.userId;
//     if (!userId) {
//         userId = 2;
//     }
//     this.props.getUserProfile(userId);
// }

  // render() {

    return (
      <main>
        <Profile
          {...props}
          profile={profile}
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </main>
    )
  // }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status

  }
}

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus
  }),
  // withAuthRedirect
)(ProfileContainer);