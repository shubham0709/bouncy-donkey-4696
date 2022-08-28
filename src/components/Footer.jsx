import React from "react";
import { useNavigate } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="footerDiv">
        <div className="footerTop">
          <div className="copyRightLogo">
            <img
              src="https://play-lh.googleusercontent.com/djmFibeLxtcmyULP92t6_VxSrAjf6A-l9An-QoF3Ts-Df_VQFTaxrZVkiFaIoWLGevze"
              alt=""
            />
            <p>© 2022 My Hours. All rights reserved.</p>
          </div>
          {/* 1 */}
          <div className="footerList">
            <span className="footerListheading">Product</span>
            <span onClick={() => navigate("/howitworks")}>How it works</span>
            <span>Features</span>
            <span>Mobile app</span>
            <span onClick={() => navigate("/usecases")}>
              Use case collection
            </span>
            <span onClick={() => navigate("/price")}>Pricing</span>
            <span>Guides</span>
            <span>Customer Reviews</span>
            <span>Start Free</span>
          </div>
          {/* 2 */}
          <div className="footerList">
            <span className="footerListheading">Resources</span>
            <span>Time Tracking Library</span>
            <span>About</span>
            <span>Terms of Use</span>
            <span>Sitemap</span>
            <span>Project Management Software</span>
            <span>Time Management Apps</span>
            <span>Best Time Tracking Apps of 2022</span>
            <span>Free Time Card Calculator</span>
          </div>

          {/* 3 */}
          <div className="footerList">
            <span className="footerListheading">Use Cases</span>
            <span>Project billing</span>
            <span>Time reports and Project analytics</span>
            <span>Attendance and Absence tracking</span>
            <span>Expense tracking</span>
            <span>Calculating project profitability</span>
            <span>Timesheet time tracking</span>
          </div>
          {/* 4 */}
          <div className="footerList">
            <span className="footerListheading">Integrations</span>
            <span>QuickBooks</span>
            <span>Zapier</span>
          </div>
          {/* 5 */}
          <div className="footerList">
            <span className="footerListheading">Social</span>
            <span>Facebook</span>

            <span>Twitter</span>
          </div>
        </div>
        <div className="footerBottom">
          Looking for employee attendance and absence tracking? Visit
          <span>All Hours.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
