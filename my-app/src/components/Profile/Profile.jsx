import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <main className={s.content}>
        <div>
          <img src='https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg'/>
        </div>
        <div>
          avatar+descriptions
        </div>
        <MyPosts />
        Main content
      </main>
  )
}

export default Profile;