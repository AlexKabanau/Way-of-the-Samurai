import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {

  let postsData = [
    {id: 1, message: "Hi, how are you?", name: "Alex K", age: 34, likesCount: 12},
    {id: 2, message: "It's my first post", name: "John Doe", age: 52, likesCount: 11},
    {id: 3, message: "Lorem", name: "Dima K", age: 28, likesCount: 8},
  ]; 

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
        <Post message={postsData[0].message} name={postsData[0].name} age={postsData[0].age} likeCount={postsData[0].likesCount} />
        <Post message={postsData[1].message} name={postsData[1].name} age={postsData[1].age} likeCount={postsData[1].likesCount} />
        <Post message={postsData[2].message} name={postsData[2].name} age={postsData[2].age} likeCount={postsData[2].likesCount} />
        

      </div>
    </div>
  )
}

export default MyPosts;