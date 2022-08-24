import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="leftDiv">
        <img
          src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd37c83dfa3ccb0d2d9836f_myhours-logo.svg"
          alt="site Logo"
        />{" "}
      </div>
      <div className="rightDiv">
        <span>How it works</span>
        <span>Use cases</span>
        <span>Pricing</span>
        <span>Support</span>
        <span>Sign in</span>
        <button className="navbarBtn">Get My Hours Free</button>
      </div>
    </div>
  );
};

export default Navbar;
