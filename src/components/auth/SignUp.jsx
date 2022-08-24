import React from "react";
import "./signup.css";

const SignUp = () => {
  return (
    <div className="login">
      <div className="loginPage">
        <div className="signUpLogo">
          <img
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd37c83dfa3ccb0d2d9836f_myhours-logo.svg"
            alt=""
          />
        </div>
        <div className="signInTitle">Welcome to My Hours</div>
        {/* form  */}
        <div className="signInFormDiv">
          <form className="signUpForm">
            <span className="signupFullname">FULLNAME</span>
            <span className="fullnameDisc">
              So we know what to call you in the app
            </span>
            <input
              type="text"
              name="fullnam"
              className="signupFullnameInput"
              autoFocus
              placeholder="Fullname"
            />
            <span className="signupEmail">EMAIL</span>
            <span className="emailDisc">You will use this email to login</span>
            <input
              type="text"
              name=""
              placeholder="Email"
              className="signupEmailInput"
              autoFocus
            />
            <span className="signupPassword">PASSWORD</span>
            <input
              autoFocus
              type="password"
              name=""
              placeholder="Password"
              className="signupPasswordInput"
            />
            <div className="signupLink">
              By signing up you agree to the <span> Terms of Use</span>
            </div>

            <div className="signupDiv">
              <div className="signupBtn">NEXT</div>
            </div>
          </form>
        </div>
        <ul className="dot">
          <li></li>
          <li></li>
        </ul>
        {/* lnk */}
        <div className="spicaLogo">
          <img
            src="https://www.spica.com/steam/dynamic/W1siZmYiLCIvaG9tZS9yYWlscy9jbXMvcHVibGljL3NpdGVzLzVkNjgzY2JkMjRkMzVmMTE0NzdmZWQwZi9hc3NldHMvNWViNTM3M2QyNGQzNWY3MjcwNzgyYzg2L1NwaWNhLWxvZ28td2ViLnBuZyJdLFsicCIsInRodW1iIiwiNDAweDEwMD4iXV0/a4f1262a707e0e38/Spica-logo-web.png"
            alt="spicaLogo"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
