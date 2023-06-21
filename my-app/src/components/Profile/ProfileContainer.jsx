import React from "react";
import { Navigate } from "react-router-dom";
import { setUserProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
import Profile from "./Profile";
// import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let {userId} = useParams();
    this.props.getStatus(userId)
  }

  render() {

    return (
      <main>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
        />
      </main>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status

  }
}

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    getStatus,
    updateStatus
  }),
  // withAuthRedirect
)(ProfileContainer);