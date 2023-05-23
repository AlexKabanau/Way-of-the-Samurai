import React from "react";
// import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = (props) => {

  // let posts = [
  //   {id: 1, message: "Hi, how are you?", name: "Alex K", age: 34, likesCount: 12},
  //   {id: 2, message: "It's my first post", name: "John Doe", age: 52, likesCount: 11},
  //   {id: 3, message: "Lorem", name: "Dima K", age: 28, likesCount: 8},
  // ];

  return (
    <main>
      <ProfileInfo />
      <MyPosts 
        posts={props.profilePage.posts} 
        newPostText={props.profilePage.newPostText}
        updateNewPostText={props.updateNewPostText}
        addPost={props.addPost}/>
    </main>
  )
}

export default Profile;