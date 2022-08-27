import React from "react";
import "./logout.css";

const Logout = () => {
  return (
    <div className="logout">
      <h2 className="profileTitle">Profile</h2>

      <div className="userInfo">
        <div className="logoutFullname">
          <span>FULL NAME</span>
          <input type="text" placeholder="prakash" />
        </div>
        {/* // */}
        <div className="logoutEmail">
          <span>EMAIL</span>
          <input type="email" placeholder="prakash@gmail.com" />
        </div>
      </div>

      <p className="personalTitle">Personal work schedule</p>

      <div className="working">
        <input type="checkbox" />
        <span>Working on weekends</span>
      </div>

      <div className="personalInfo">
        <div className="firstDay">
          <span>FIRST DAY OF THE WEEK</span>
          <input type="text" />
        </div>
        <div className="workingHour">
          <span>WORKING HOURS</span>
          <input type="number" />
        </div>
        <div className="workingHour2">
          <span> " "</span>
          <input type="number" />
        </div>
      </div>

      <div className="timeTracking">
        <p>Time tracking</p>
        <div>
          <input type="checkbox" />
          <span>Enable new track UI</span>
        </div>
        <div>
          <input type="checkbox" />
          <span>Allow decimal input of duration</span>
        </div>
      </div>

      <div className="step">
        <span>TIME STEPS IN MINUTES</span>
        <input type="text" />
      </div>

      <div className="snapshot">
        <p>Weekly snapshot</p>
        <div className="snapshotCheckbox">
          <input type="checkbox" />
          <span>Unsubscribe from weekly timesheet email</span>
        </div>
      </div>

      <div className="controlBtn">
        <span>SAVE</span>
        <span>CANCEL</span>
      </div>
      <hr />
      <div className="controlBtn2">
        <span className="forgetBtn">Change Password</span>
        <span className="signoutBtn">Sign Out</span>
      </div>
    </div>
  );
};

export default Logout;
