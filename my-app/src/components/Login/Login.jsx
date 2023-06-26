import React from "react";


const Login = (props) => {
  return <>
    <h1>Login</h1>
    <LoginForm />
  </>
}
const LoginForm = (props) => {
  return (
    <form action="">
      <div>
        <input type="text" placeholder={"Login"}/>
      </div>
      <div>
        <input type="text" placeholder={"Password"}/>
      </div>
      <div>
        <input type={"checkbox"} />Remember me
      </div>
      <div>
        <button>
          Login
        </button>
      </div>
    </form>
  )
}
export default Login;