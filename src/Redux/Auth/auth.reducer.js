import * as types from "./auth.actionTypes";

let initialAuthStatus = JSON.parse(localStorage.getItem("isAuth")) || false;
const initialState = {
  isLoading: false,
  isError: false,
  isAuth: initialAuthStatus,
  token: localStorage.getItem("token") || ""
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.USER_REGISTER: {
      return state;
    }

    case types.USER_LOGIN_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }

    case types.USER_LOGIN_SUCCESS: {
      if (payload) {
        localStorage.setItem("token", payload);
      }
      return { ...state, isLoading: false, isError: false, isAuth: true, token: payload };
    }

    case types.USER_LOGIN_FAILED: {
      return { ...state, isLoading: false, isError: true, isAuth: false };
    }

    case types.USER_LOGOUT: {
      localStorage.removeItem("token");
      return initialState;
    }

    default: {
      return state;
    }
  }
};
