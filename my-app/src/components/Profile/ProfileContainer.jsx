import React from "react";
import { setUserProfile } from "../../redux/profile-reducer";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import { useParams } from "react-router-dom";

class ProfileContainer extends React.Component {
  
  componentDidMount() {
    // console.log(useParams())
    // let userId;
    // // let userId = this.props.match.parapm.userId;
    // if (!userId) {
    //   userId = 2;
    // }
    // debugger
    // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
    //   .then(response => {
    //     debugger
    //     this.props.setUserProfile(response.data);
    //   })
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

// let withURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  setUserProfile
})(ProfileContainer);