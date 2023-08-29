import React from "react";
// import { reduxForm } from "redux-form";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom"



// const LoginRduxForm = reduxForm({
//   form: 'login'
// })(LoginForm)

const Login = (props) => {
  return <>
    <h1>Login</h1>
    <LoginForm {...props}/>
  </>
}
const LoginForm = (props) => {
  debugger
  const submit = (values, { setSubmitting }) => {

    console.log(values);
    props.login(values.email, values.password, values.rememberMe, values.antiBotSymbols);
    setSubmitting(false);

  }
  let captchaUrl=props.captchaUrl;

  if (props.isAuth) {
    return <Navigate to="/profile" />
  }
  return (
    <Formik
      initialValues={{ email: '', password: '', rememberMe: false, antiBotSymbols: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      captchaUrl={props.captchaUrl}
      onSubmit={submit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label for="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label for="password">Password</label>

            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <Field type={"checkbox"} name="rememberMe" />Remember me
          </div>

        {captchaUrl && <img src={captchaUrl}/>}
        {captchaUrl && <div>
            <label for="antiBotSymbols">Captcha</label>
            <Field type="text" name="antiBotSymbols" requiered/>
          </div>}

          <div>
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
const mapStateToProps = (state) => {
  debugger
  return {
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
  }
}
export default connect(mapStateToProps, { login })(Login);