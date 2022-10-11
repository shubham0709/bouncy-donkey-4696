import axios from "axios";
import * as types from "./auth.actionTypes";

// let url = "https://lit-lowlands-05042.herokuapp.com/"
export const registerAPI = (creds) => (dispatch) => {

  return axios
    .post("https://lit-lowlands-05042.herokuapp.com/user/register", creds)
    .then((res) => {
      dispatch({ type: types.USER_REGISTER });
    });
};

export const loginAPI = (creds) => (dispatch) => {
  dispatch({ type: types.USER_LOGIN_REQUEST });
  return axios
    .post("https://lit-lowlands-05042.herokuapp.com/user/login", creds)
    .then((res) => {
      localStorage.setItem("email", res.data.email);
      dispatch({ type: types.USER_LOGIN_SUCCESS, payload: res.data.token });
      return types.USER_LOGIN_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: types.USER_LOGIN_FAILED, payload: err });
      return types.USER_LOGIN_FAILED
    });
};

export const logoutAPI = () => (dispatch) => {
  localStorage.clear();
  dispatch({ type: types.USER_LOGOUT });
  return true;
};
