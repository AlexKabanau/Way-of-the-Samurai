import React from "react";
import { Navigate } from "react-router-dom";
import { setUserProfile } from "../../redux/profile-reducer";
import Profile from "./Profile";
// import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

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

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)


let mapStateToProps =(state) => {
  return {
    profile: state.profilePage.profile,
  }
}

// let withURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  setUserProfile
})(AuthRedirectComponent);