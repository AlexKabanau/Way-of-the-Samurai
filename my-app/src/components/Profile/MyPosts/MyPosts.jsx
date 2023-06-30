import { Formik, Form, Field } from "formik";
import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";



const MyPosts = (props) => {

  let postsElements = props.posts
    .map(post => <Post name={post.name} message={post.message} id={post.id} age={post.age} likeCount={post.likesCount} />);

  let onAddPost = (newPostText) => {
    props.addPost(newPostText);
  }

  return (
    <div className={s.postsBlock}>
      <h3>
        my posts
      </h3>
      <AddPostForm 
        onAddPost={onAddPost}
      />
      <div className={s.posts}>

        {
          postsElements
        }

      </div>
    </div>
  )
}

const AddPostForm = (props) => {

  const submit = (values, { setSubmitting, resetForm }) => {
      props.onAddPost(values.newPostText)
      resetForm();
      setSubmitting(false);

    }

    return (
      <Formik
        initialValues={{ newPostText: '' }}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field
                name="newPostText"
                as="textarea"
                placeholder="Enter your post"
              >
              </Field>
            </div>

            <div>
              <button
                disabled={isSubmitting}
              >
                AddPost
              </button>
            </div>
          </Form>
        )}
      </Formik>
    )
  }

  export default MyPosts;