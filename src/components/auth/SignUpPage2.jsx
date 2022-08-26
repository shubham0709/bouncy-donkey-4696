import React, { useRef } from "react";
import "./signupPage2.css";

const SignUpPage2 = () => {
  const companyNameRef = useRef();
  const countryNameRef = useRef();
  const mobileNoRef = useRef();

  const handelSignupPage2 = (e) => {
    e.preventDefault();
    var companyName = companyNameRef.current.value;
    var countryName = countryNameRef.current.value;
    var mobileNo = mobileNoRef.current.value;
    console.log(companyName, countryName, mobileNo);
  };
  return (
    <div className="signupPage2">
      <div className="signupPage2Div">
        <div className="signUpPage2Logo">
          <img
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd37c83dfa3ccb0d2d9836f_myhours-logo.svg"
            alt=""
          />
        </div>
        <div className="signupPage2InTitle">Details about your company</div>
        {/* form  */}
        <div className="signUpPage2FormDiv">
          <form className="signUpPage2Form">
            <span className="signupFullname">COMPANY NAME</span>

            <input
              type="text"
              name="fullname"
              className="signupFullnameInput"
              autoFocus
              placeholder="COMPANY NAME"
              ref={companyNameRef}
            />
            <span className="signupEmail">EMAIL</span>
            <span className="emailDisc">
              We will adapt your experience to the specifics of your region
            </span>
            <input
              type="text"
              name=""
              placeholder="COUNTRY"
              className="signupEmailInput"
              autoFocus
              ref={countryNameRef}
            />

            <span className="signupPassword">MOBILE NUMBER (OPTIONAL)</span>
            <input
              autoFocus
              type="text"
              name=""
              placeholder="MOBILE NUMBER"
              className="signupPasswordInput"
              ref={mobileNoRef}
            />

            <div className="signupDiv">
              <div className="signupBtn" onClick={handelSignupPage2}>
                Create New Company
              </div>
            </div>
            <div className="backPage2"> Back </div>
          </form>
        </div>

        <ul className="dotPage2">
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

export default SignUpPage2;
