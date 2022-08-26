import React, { useRef } from "react";
import "./login.css";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handelLogin = (e) => {
    e.preventDefault();
    var email = emailRef.current.value;
    var password = passwordRef.current.value;
    console.log(email, password);
  };

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
              ref={emailRef}
            />
            <span className="password">PASSWORD</span>
            <input
              autoFocus
              type="password"
              name=""
              placeholder="Password"
              className="passwordInput"
              ref={passwordRef}
            />
            <div className="signInDiv">
              <div className="signInBtn" onClick={handelLogin}>
                Sign in
              </div>
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
