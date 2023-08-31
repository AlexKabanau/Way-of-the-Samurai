import React, { useState } from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../../Common/Preloader/Preloader";
// import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../../assets/images/userphoto.png"
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
  
  let [editMode, setEditMode] = useState(false);
  
  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (element) => {
    // debugger
    if (element.target.files.length) {
      savePhoto(element.target.files[0])
    }
  }

  // const onSubmit = (formData) => {
  //   debugger
  //   console.log(formData)
  //   // saveProfile(formData).then(
  //   //   () => {
  //   //     setEditMode(false)
  //   //   }
  //   // )
  // }

  return (
    <div>
      <div>
        <img src="https://open.lib.umn.edu/app/uploads/sites/5/2015/09/9.1.jpg" alt="User mainPhoto" className={s.userMainPhoto} />
      </div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} alt="" className={s.userPhoto} />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}

        { editMode 
        ? <ProfileDataForm profile={profile} saveProfile={saveProfile} setEditMode={setEditMode}/> 
        : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {setEditMode(true)}}/> }

        <ProfileStatusWithHooks
          status={status}
          updateStatus={updateStatus}
        />
      </div>
    </div>
  )
}

export const Contact = ({ contactTitle, contactValue }) => {
  return <div className={s.contact}><b>{contactTitle}:</b> {contactValue}</div>
}


const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return <div>
    { isOwner && <button onClick={goToEditMode}>Edit</button> }
    <div>
      <b>Full name: </b>{profile.fullName}
    </div>
    <div>
      <b>Looking for a job: </b>{profile.lookingForAJob ? "yes" : "no"}
    </div>
    {profile.lookingForAJob &&
      <div>
        <b>My professional skills: </b>{profile.lookingForAJobDescription}
      </div>}
    <div>
      <b>About me: </b>{profile.aboutMe}
    </div>
    <div>
      <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
      })}
    </div>

  </div>
}

export default ProfileInfo;