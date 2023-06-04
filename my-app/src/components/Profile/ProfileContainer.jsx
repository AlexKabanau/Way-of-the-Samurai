import React from "react";
import { setUserProfile } from "../../redux/profile-reducer";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"

class ProfileContainer extends React.Component {
  
  componentDidMount() {
    debugger
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        debugger
        this.props.setUserProfile(response.data);
      })
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

let mapStateToProps =(state) => {
  return {
    profile: state.profilePage.profile
  }
}

let withURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
  setUserProfile
})(ProfileContainer);