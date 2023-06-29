import React from "react";
import { reduxForm } from "redux-form";
import { Formik, Form, Field, ErrorMessage } from 'formik';


// const LoginRduxForm = reduxForm({
//   form: 'login'
// })(LoginForm)

const Login = (props) => {
  return <>
    <h1>Login</h1>
    <LoginForm />
  </>
}
const LoginForm = (props) => {
  const submit = (values, { setSubmitting }) => {
    
    console.log(values)
    setSubmitting(false);
    
  }
  return (
    <Formik
      initialValues={{ email: '', password: '', rememberMe: false }}
      validate={values => {
        const errors = {};
        // if (!values.email) {
        //   errors.email = 'Required';
        // } else if (
        //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        // ) {
        //   errors.email = 'Invalid email address';
        // }
        return errors;
      }}
      onSubmit={submit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <Field type={"checkbox"} name="rememberMe" />Remember me
          </div>
          <div>
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </div>
          {/* <div>
            <Field type="text" placeholder={"Login"} />
          </div>
          <div>
            <Field type="text" placeholder={"Password"} />
          </div>
          <div>
            <Field type={"checkbox"} />Remember me
          </div>
          <div>
            <button>
              Login
            </button>
          </div> */}
        </Form>
      )}
    </Formik>
  )
}
export default Login;