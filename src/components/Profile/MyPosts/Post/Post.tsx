import React, { FC } from 'react';
import s from './Post.module.css';

type PropsType = {
  id: number;
  name: string;
  age: number;
  message: string;
  likeCount: number;
};

const Post: FC<PropsType> = (props) => {
  // debugger;

  return (
    <div className={s.item}>
      <img
        src="https://img.championat.com/s/735x490/news/big/y/g/avatar-2-sobral-v-rossii-bolshe-2-4-mlrd-rublej_16758793371084217002.jpg"
        alt=""
      />
      <div>
        <span>
          {props.name}, {props.age}
        </span>
      </div>
      {props.message}
      <div>
        <span>Like {props.likeCount}</span>
      </div>
    </div>
  );
};

export default Post;
