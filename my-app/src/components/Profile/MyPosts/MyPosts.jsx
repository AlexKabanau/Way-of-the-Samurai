import { Formik, Form, Field } from "formik";
import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
// import { requiredField, maxLength30 } from "../../../utils/validators/validator";
import { basicPostSchema } from "../../../utils/validators/validator";
import { PostTextArea } from "../../Common/FormsControls/FormsControls";




const MyPosts = React.memo(props => {

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
})

const AddPostForm = (props) => {

  const submit = (values, { setSubmitting, resetForm }) => {
      props.onAddPost(values.newPostText)
      // console.log(props)
      resetForm();
      setSubmitting(false);
    }


    return (
      <Formik
        initialValues={{ newPostText: '', errorMessage: '' }}
        onSubmit={submit}
        validationSchema={basicPostSchema}
        
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <div>
              <Field
                name="newPostText"
                as={PostTextArea}
                placeholder="Enter your post"
                // validate={requiredField, maxLength30}
                // validate={requiredField, maxLength30}
                // className={errors.newPostText && touched.newPostText ? `${s.input_error}` : ""}
                {...errors}
              >
              </Field>
            </div>

            <div>
              <button
                disabled={isSubmitting}
                type="submit"
              >
                Add Post
              </button>
            </div>
          </Form>
        )}
      </Formik>
    )
  }

  export default MyPosts;