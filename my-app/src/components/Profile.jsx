import React from "react";
import s from "./Profile.module.css"

const Profile = () => {
  return (
    <main className={s.content}>
        <div>
          <img src='https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg'/>
        </div>
        <div>
          avatar+descriptions
        </div>
        <div>
          my posts
          <div>
            new post
          </div>
          <div>
            posts
            <div>
              Post1
            </div>
            <div>
              Post2
            </div>
          </div>
        </div>
        Main content
      </main>
  )
}

export default Profile;