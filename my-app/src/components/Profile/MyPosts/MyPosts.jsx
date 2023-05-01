import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      my posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div className={s.posts}>
        posts
        <Post message="Hi, how are you?" name="Alex K" age="34" likeCount="15"/>
        <Post message="It's my first post" name="John Doe" age="52" likeCount="8"/>
        <Post messege="Lorem" name="Dima K" age="28" likeCount="11"/>

      </div>
    </div>
  )
}

export default MyPosts;