import React from "react";
import s from "./Post.module.css"

const Post = (props) => {
  
  // debugger;

  return (
    

    <div className={s.item}>
      <img src="https://img.championat.com/s/735x490/news/big/y/g/avatar-2-sobral-v-rossii-bolshe-2-4-mlrd-rublej_16758793371084217002.jpg" alt="" />
      <div>
        <span>{props.name}, {props.age}</span>
      </div>
      { props.message }
      <div>
        <span>Like { props.likeCount }</span>
      </div>
    </div>

  )
}

export default Post;