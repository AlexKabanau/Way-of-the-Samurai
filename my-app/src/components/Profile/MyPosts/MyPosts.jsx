import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state";



const MyPosts = (props) => {


  let postsElements = props.posts
  .map( post => <Post name={post.name} message={post.message} id={post.id} age={post.age} likeCount={post.likesCount}/> );

  let newPostElement = React.createRef();


  let addPost = () => {
    // let text = newPostElement.current.value;
    // alert(text);
    props.dispatch( addPostActionCreator() );
    // props.updateNewPostText('')
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    newPostElement.current.value = ''
    props.dispatch( action )
  }

  return (
    <div className={s.postsBlock}>
      <h3>
        my posts
      </h3>
      <div>
        <div>
          <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
        </div>

        <div>
          <button onClick={ addPost }>Add Post</button>
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