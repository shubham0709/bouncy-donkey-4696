import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { logoutAPI } from "../Redux/Auth/auth.action";
import "./profilepage.css";
import Sidebar from "./Sidebar";

import { useNavigate } from "react-router-dom";

const Profilepage = () => {
  const navigate = useNavigate();
  const getCapitalName = () => {
    let name = localStorage.getItem("email").split("@")[0];
    return name.toUpperCase();
  };

  return (
    <Flex>
      <Box w="15%" bg="blue.200">
        <Sidebar />
      </Box>
      <Box w="85%" h="100vh" m="auto">
        <Box className="profile_main_pg" textAlign="left">
          <div className="prfl_body_pad">
            <div className="body_content">
              <div className="profile">
                <h1 className="profile_text">Profile</h1>
                <div className="name_email">
                  <div className="fname">
                    <label htmlFor="" id="lable_fname">
                      NAME
                    </label>
                    <input type="text" id="fname" value={getCapitalName()} />
                  </div>
                  <div className="email">
                    <label htmlFor="" id="lable_email">
                      EMAIL
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="email-up"
                      value={localStorage.getItem("email")}
                    />
                  </div>
                </div>
                {/* Personal work schedule */}
                <h5 className="my-3">Personal work schedule</h5>
                <div className="custom-control">
                  <input type="checkbox" className="c-c-inout" />
                  <label
                    className="custom-control-label"
                    htmlFor="workingWeekends"
                  >
                    Working on weekends
                  </label>
                  <span className="info-div">
                    <i className="fa-solid fa-circle-info" />
                  </span>
                </div>
                <div className="form-fd-hr">
                  <div className="f-f-1">
                    <label id="f-f-1-lab">FIRST DAY OF THE WEEK</label>
                    <select className="select-s">
                      <option value="">Sunday</option>
                      <option value="" selected="">
                        Monday
                      </option>
                      <option value="">Saturday</option>
                    </select>
                  </div>
                  <div className="f-f-2">
                    <label id="f-f-2-lab">WORKING HOURS</label>
                    <div className="wrk-h">
                      <select name="time" className="select-s select_time">
                        <option value="00:00">12.00 AM</option>
                        <option value="01:00">1.00 AM</option>
                        <option value="02:00">2.00 AM</option>
                        <option value="03:00">3.00 AM</option>
                        <option value="04:00">4.00 AM</option>
                        <option value="05:00">5.00 AM</option>
                        <option value="06:00">6.00 AM</option>
                        <option value="07:00">7.00 AM</option>
                        <option value="08:00">8.00 AM</option>
                        <option value="09:00" selected="">
                          9.00 AM
                        </option>
                        <option value="10:00">10.00 AM</option>
                        <option value="11:00">11.00 AM</option>
                        <option value="12:00">12.00 PM</option>
                        <option value="13:00">1.00 PM</option>
                        <option value="14:00">2.00 PM</option>
                        <option value="15:00">3.00 PM</option>
                        <option value="16:00">4.00 PM</option>
                        <option value="17:00">5.00 PM</option>
                        <option value="18:00">6.00 PM</option>
                        <option value="19:00">7.00 PM</option>
                        <option value="20:00">8.00 PM</option>
                        <option value="21:00">9.00 PM</option>
                        <option value="22:00">10.00 PM</option>
                        <option value="23:00">11.00 PM</option>
                      </select>
                      <span id="to_time">to</span>
                      <select name="time" className="select-s select_time">
                        <option value="00:00">12.00 AM</option>
                        <option value="01:00">1.00 AM</option>
                        <option value="02:00">2.00 AM</option>
                        <option value="03:00">3.00 AM</option>
                        <option value="04:00">4.00 AM</option>
                        <option value="05:00">5.00 AM</option>
                        <option value="06:00">6.00 AM</option>
                        <option value="07:00">7.00 AM</option>
                        <option value="08:00">8.00 AM</option>
                        <option value="09:00">9.00 AM</option>
                        <option value="10:00">10.00 AM</option>
                        <option value="11:00">11.00 AM</option>
                        <option value="12:00">12.00 PM</option>
                        <option value="13:00">1.00 PM</option>
                        <option value="14:00">2.00 PM</option>
                        <option value="15:00">3.00 PM</option>
                        <option value="16:00">4.00 PM</option>
                        <option value="17:00" selected="">
                          5.00 PM
                        </option>
                        <option value="18:00">6.00 PM</option>
                        <option value="19:00">7.00 PM</option>
                        <option value="20:00">8.00 PM</option>
                        <option value="21:00">9.00 PM</option>
                        <option value="22:00">10.00 PM</option>
                        <option value="23:00">11.00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* Time tracking */}
                <h5 className="my-3">Time tracking</h5>
                <div className="custom-control">
                  <input
                    type="checkbox"
                    className="c-c-inout"
                    defaultChecked=""
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="workingWeekends"
                  >
                    Enable new track UI
                  </label>
                  <span className="info-div">
                    <i className="fa-solid fa-circle-info" />
                  </span>
                </div>
                <div className="custom-control">
                  <input type="checkbox" className="c-c-inout" />
                  <label
                    className="custom-control-label"
                    htmlFor="workingWeekends"
                  >
                    Allow decimal input of duration
                  </label>
                  <span className="info-div">
                    <i className="fa-solid fa-circle-info" />
                  </span>
                </div>
                <div className="name_email">
                  <div className="fname">
                    <label htmlFor="" id="lable_fname">
                      TIME STEPS IN MINUTES
                    </label>
                    <input type="number" className="tsim" defaultValue={5} />
                  </div>
                </div>
                <h5 className="my-3">Weekly snapshot</h5>
                <div className="custom-control">
                  <input type="checkbox" className="c-c-inout" />
                  <label
                    className="custom-control-label"
                    htmlFor="workingWeekends"
                  >
                    Unsubscribe from weekly timesheet email
                  </label>
                  <span className="info-div">
                    <i className="fa-solid fa-circle-info" />
                  </span>
                </div>
                {/* Save & cancel button */}
                <div className="s_c">
                  <div className="buttons">
                    <span>
                      <button className="btn" id="save" onclick="save()">
                        Save
                      </button>
                    </span>
                    <span>
                      <button className="btn" id="cancel">
                        Cancel
                      </button>
                    </span>
                  </div>
                </div>
                <hr className="my-4 hr-line" />
                <div className="change-pass">
                  <a href="" className="c-p-btn">
                    <i className="fa-solid fa-key" /> Change Password
                  </a>
                </div>
                <div className="sign-out">
                  <button
                    className="s-c-btn"
                    onClick={() => {
                      logoutAPI();
                      localStorage.clear();
                      console.clear();
                      navigate("/");
                    }}
                  >
                    <i className="fa-solid fa-power-off" /> Sign out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </Flex>
  );
};

export default Profilepage;
