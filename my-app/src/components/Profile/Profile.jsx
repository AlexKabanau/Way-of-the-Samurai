import React from "react";
// import s from "./Profile.module.css"
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { setUserProfile } from "../../redux/profile-reducer";


const Profile = (props) => {
  // console.log(useParams())

  // let {userId} = useParams();
  // if (!userId) {
  //   userId = 2;
  // }
  // const [profile, setUserProfile] = useState(null);

  // useEffect( () => {
  //   fetch('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
  //   .then(response => response.json())
  //   .then(data => setUserProfile(data))
  // }, [userId]);


  return (
    <main>
      <ProfileInfo 
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer
        // store={props.store}
      />
    </main>
  )
}

export default Profile;