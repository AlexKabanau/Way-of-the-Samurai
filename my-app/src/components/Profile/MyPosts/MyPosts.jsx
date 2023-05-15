import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {

  // let posts = [
  //   {id: 1, message: "Hi, how are you?", name: "Alex K", age: 34, likesCount: 12},
  //   {id: 2, message: "It's my first post", name: "John Doe", age: 52, likesCount: 11},
  //   {id: 3, message: "Lorem", name: "Dima K", age: 28, likesCount: 8},
  // ];

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
        posts
        {
          postsElements
        }

      </div>
    </div>
  )
}

export default MyPosts;