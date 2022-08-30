import React, { useRef } from "react";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../../Redux/Auth/auth.action";
import { USER_LOGIN_SUCCESS } from "../../Redux/Auth/auth.actionTypes";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelLogin = (e) => {
    e.preventDefault();
    var email = emailRef.current.value;
    var password = passwordRef.current.value;
    // if (email.length && password.length) {
    // } else {
    //   alert("Login Failed, Enter All Fields");
    // }
    const creds = {
      email: email,
      password: password,
    };
    dispatch(loginAPI(creds)).then((res) => {
      console.log(res);
      if (res === USER_LOGIN_SUCCESS) {
        alert("Login successful");
        localStorage.setItem("isAuth", JSON.stringify(true));
        navigate("/project");
      } else {
        alert("Login failed");
      }
    });
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
            <span className="email" style={{ textAlign: "left" }}>
              EMAIL
            </span>
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
              <div
                className="signInBtn"
                style={{ color: "white" }}
                onClick={handelLogin}
              >
                Sign in
              </div>
              <div>Reset Passsword</div>
            </div>
          </form>
        </div>
        {/* lnk */}
        <div onClick={() => navigate("/signup")} className="signUpLink">
          New to My Hours? Sign up
        </div>
      </div>
    </div>
  );
};

export default Login;
