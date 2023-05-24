import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {


  let postsElements = props.posts
  .map( post => <Post name={post.name} message={post.message} id={post.id} age={post.age} likeCount={post.likesCount}/> );

  let newPostElement = React.createRef();


  let addPost = () => {
    // let text = newPostElement.current.value;
    // alert(text);
    props.dispatch( { type: 'ADD-POST', } );
    // props.updateNewPostText('')
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch( { type: 'UPDATE-NEW-POST-TEXT', newText: text } )
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