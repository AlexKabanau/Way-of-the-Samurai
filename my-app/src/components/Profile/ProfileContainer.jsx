import React from "react";
import { Navigate } from "react-router-dom";
import { setUserProfile } from "../../redux/profile-reducer";
import Profile from "./Profile";
// import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {

  componentDidMount() {
  }

  render() {

    return (
      <main>
        <Profile
          {...this.props}
          profile={this.props.profile}
        />
      </main>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
}

export default compose(
  connect(mapStateToProps, {
    setUserProfile
  }),
  // withAuthRedirect
)(ProfileContainer);