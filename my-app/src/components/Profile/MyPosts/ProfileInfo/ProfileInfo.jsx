import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="User main Photo" className={s.userMainPhoto}/>
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt="" className={s.userPhoto}/>
        <div className={s.description}>
          <p className={s.fullName}>{props.profile.fullName}</p>
          <p className={s.aboutMe}>{props.profile.aboutMe}</p>
          <p className={s.job}>{props.profile.lookingForAJobDescription}</p>

        </div>
      </div>
      <ProfileStatus
      status={props.status}
      updateStatus={props.updateStatus}
      />
    </div>
  )
}

export default ProfileInfo;