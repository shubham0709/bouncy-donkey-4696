import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="loginPage">
        <div className="loginLogo">
          <img
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd37c83dfa3ccb0d2d9836f_myhours-logo.svg"
            alt=""
          />
        </div>
        <div className="signInTitle">Sign in</div>
        {/* form  */}
        <div className="signInFormDiv">
          <form className="signInForm">
            <span className="email">EMAIL</span>
            <input
              type="text"
              name=""
              placeholder="Email"
              className="emailInput"
              autoFocus
            />
            <span className="password">PASSWORD</span>
            <input
              autoFocus
              type="password"
              name=""
              placeholder="Password"
              className="passwordInput"
            />
            <div className="signInDiv">
              <div className="signInBtn">Sign in</div>
              <div>Reset Passsword</div>
            </div>
          </form>
        </div>
        {/* lnk */}
        <div className="signUpLink">New to My Hours? Sign up</div>
      </div>
    </div>
  );
};

export default Login;
