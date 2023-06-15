import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    // debugger
    return <Preloader />
  }
  // debugger
  return (
    <div>
      <div>
        <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="User main Photo" className={s.userMainPhoto}/>
        {/* <img src='https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg' /> */}
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt="" className={s.userPhoto}/>
        <div className={s.description}>
          <p className={s.fullName}>{props.profile.fullName}</p>
          <p className={s.aboutMe}>{props.profile.aboutMe}</p>
          <p className={s.job}>{props.profile.lookingForAJobDescription}</p>

        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;