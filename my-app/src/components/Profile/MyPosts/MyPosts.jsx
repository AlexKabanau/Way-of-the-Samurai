import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {


  let postsElements = props.posts
  .map( post => <Post name={post.name} id={post.id} age={post.age} likeCount={post.likesCount}/> );


  return (
    <div className={s.postsBlock}>
      <h3>
        my posts
      </h3>
      <div>
        <div>
          <textarea></textarea>
        </div>

        <div>
          <button>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>

        {
          postsElements
        }

      </div>
    </div>
  )
}

export default MyPosts;