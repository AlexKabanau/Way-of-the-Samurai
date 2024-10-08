import React, { FC } from 'react';
// import { reduxForm } from "redux-form";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { connect, useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';
import { AppDispatch, AppStateType } from '../../redux/redux-store';
import state from '../../state';

// type MapStateToPropsType = {
//   // captchaUrl: string | null;
//   // isAuth: boolean;
// };
// type MapDispatchToPropsType = {
//   // login: (email: string, password: string, rememberMe: boolean, antiBotSymbols: string) => void;
//   // captchaUrl: string;
//   // isAuth: boolean;
// };
type InitialStateFormikType = {
  email: string;
  password: string;
  rememberMe: boolean;
  antiBotSymbols: string;
};

// const LoginRduxForm = reduxForm({
//   form: 'login'
// })(LoginForm)

export const LoginPage: FC = (props) => {
  return (
    <>
      <h1>Login</h1>
      <LoginForm />
    </>
  );
};

type SetSubmitTypeStatus = {
  setSubmitting: (param: boolean) => void;
};

const LoginForm: FC = (props) => {
  // debugger;
  const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl);
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth);

  const dispatch: AppDispatch = useDispatch();

  // const login = (email, password, rememberMe, antiBotSymbols) => {
  //   dispatch()
  // }

  const submit = (values: InitialStateFormikType, { setSubmitting }: SetSubmitTypeStatus) => {
    // console.log(values);
    dispatch(login(values.email, values.password, values.rememberMe, values.antiBotSymbols));
    setSubmitting(false);
  };
  // let captchaUrl = props.captchaUrl;

  if (isAuth) {
    return <Navigate to="/profile" />;
  }
  return (
    <Formik
      initialValues={{ email: '', password: '', rememberMe: false, antiBotSymbols: '' }}
      validate={(values) => {
        const errors: InitialStateFormikType = {
          email: '',
          password: '',
          rememberMe: false,
          antiBotSymbols: '',
        };
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      captchaUrl={captchaUrl}
      onSubmit={submit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="password">Password</label>

            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <Field type={'checkbox'} name="rememberMe" />
            Remember me
          </div>

          {captchaUrl && <img src={captchaUrl} alt="Captcha" />}
          {captchaUrl && (
            <div>
              <label htmlFor="antiBotSymbols">Captcha</label>
              <Field type="text" name="antiBotSymbols" requiered />
            </div>
          )}

          <div>
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
// const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
//   debugger;
//   return {
//     // captchaUrl: state.auth.captchaUrl,
//     // isAuth: state.auth.isAuth,
//   };
// };
//@ts-ignore
// export default connect(null, { login })(Login);
