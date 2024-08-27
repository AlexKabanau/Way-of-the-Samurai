import React from 'react';
import s from './../Dialogs.module.css';

type PropsType = {
  author: string;
  location: string;
  date: string;
  message: string;
};

const Message: React.FC<PropsType> = (props) => {
  let messageSide = props.author === 'Me' ? s.myMessage : s.notMyMessage;
  return (
    <div className={`${s.message} ${messageSide}`}>
      <div className={s.messageWrapper}>
        <div className={s.messageCard}>
          <div className={s.messageHeader}>
            <img
              className={s.authorImage}
              src="https://img.championat.com/s/735x490/news/big/y/g/avatar-2-sobral-v-rossii-bolshe-2-4-mlrd-rublej_16758793371084217002.jpg"
              alt="Michael John"
            />
            <div className={s.about}>
              <p className={s.authorName}>{props.author}</p>
              <div className={s.locationNDate}>
                <p className={`${s.location} ${s.smallParagraph}`}>{props.location}</p>
                <p className={`${s.datetime} ${s.smallParagraph}`}>{props.date}</p>
              </div>
            </div>
          </div>
          <p className={`${s.messageText} ${s.smallParagraph}`}>{props.message}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
