import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg' />
      </div>
      <div className={s.descriptionBlock}>
        avatar+descriptions
      </div>
    </div>
  )
}

export default ProfileInfo;