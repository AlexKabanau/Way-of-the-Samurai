import React from "react";
// import s from "./Profile.module.css"
import { setUserProfile } from "../../redux/profile-reducer";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";

// import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
// import MyPostsContainer from "./MyPosts/MyPostsContainer";

class ProfileContainer extends React.Component {
  
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        // this.props.toggleIsFetching(false);
        // console.log(this.props.isFetching); // undef
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

export default connect(mapStateToProps, {
  setUserProfile
})(ProfileContainer);