import React from "react";
// import s from "./Profile.module.css"
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

  return (
    <main>
      <ProfileInfo 
        profile={props.profile}
      />
      <MyPostsContainer
        // store={props.store}
      />
    </main>
  )
}

export default Profile;