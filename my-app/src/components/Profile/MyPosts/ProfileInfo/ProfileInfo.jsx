import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src='https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg' />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt="" />
        avatar+descriptions
      </div>
    </div>
  )
}

export default ProfileInfo;