import React from "react"
import s from "./../Dialogs.module.css";

const Message = (props) => {
  debugger
  return (
    <div className={s.message}>

      <div className={s.feedbackWrapper}>
        <div className={s.feedbackCard}>
          <div className={s.feedbackHeader}>
            <img className={s.authorImage} src="../../assets/icons/icon-user.svg" alt="Michael John"/>
              <div className={s.about}>
                <p className={s.authorName}>{props.author}</p>
                <div className={s.locationNDate}>
                  <p className={`${s.location} ${s.smallParagraph}`}>{props.location}</p>
                  <p className={`${s.datetime} ${s.smallParagraph}`}>{props.date}</p>
                </div>
              </div>
          </div>
          <p className={`${s.feedbackText} ${s.smallParagraph}`}>{props.message}</p>
        </div>
      </div>

    </div>
  )
}

export default Message;