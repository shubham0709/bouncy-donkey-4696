import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
        className="leftDiv"
      >
        <img
          src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd37c83dfa3ccb0d2d9836f_myhours-logo.svg"
          alt="site Logo"
        />{" "}
      </div>
      <div className="rightDiv">
        <span onClick={() => navigate("/howitworks")}>How it works</span>
        <span onClick={() => navigate("/usecases")}>Use cases</span>
        <span>Pricing</span>
        <span>Support</span>
        <span onClick={() => navigate("/signin")}>Sign in</span>
        <button className="navbarBtn">Get My Hours Free</button>
      </div>
    </div>
  );
};

export default Navbar;
