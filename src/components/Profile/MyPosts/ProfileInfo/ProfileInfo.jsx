import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../../assets/images/userphoto.png"


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (element) => {
    debugger
    if (element.target.files.length) {
      savePhoto(element.target.files[0])
    }
  }

  return (
    <div>
      <div>
        <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="User main Photo" className={s.userMainPhoto}/>
      </div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} alt="" className={s.userPhoto}/>
        
        <div className={s.description}>
          <p className={s.fullName}>{profile.fullName}</p>
          <p className={s.aboutMe}>{profile.aboutMe}</p>
          <p className={s.job}>{profile.lookingForAJobDescription}</p>

        </div>
      </div>
      { isOwner && <input type={"file"} onChange={onMainPhotoSelected} /> }
      <ProfileStatusWithHooks
      status={status}
      updateStatus={updateStatus}
      />
    </div>
  )
}

export default ProfileInfo;