import axios from "axios";
import * as types from "./auth.actionTypes";

export const registerAPI = (creds) => (dispatch) => {
  return axios
    .post("http://localhost:7000/user/register", creds)
    .then((res) => {
      dispatch({ type: types.USER_REGISTER });
    });
};

export const loginAPI = (creds) => (dispatch) => {

  dispatch({ type: types.USER_LOGIN_REQUEST });
  return axios
    .post("http://localhost:7000/user/login", creds)
    .then((res) => {
      dispatch({ type: types.USER_LOGIN_SUCCESS, payload: res.data.token });
      return types.USER_LOGIN_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: types.USER_LOGIN_FAILED, payload: err });
    });
};

export const logoutAPI = () => (dispatch) => {
  dispatch({ type: types.USER_LOGOUT });
};
