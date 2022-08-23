import * as types from "./app.actionTypes";

const initialState = {
    taskname: "",
    status: "",
    tag: ""
};

export const appReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.GET_TODO_REQUEST: {
            return state;
        }

        case types.GET_TODO_SUCCESS: {
            return { ...state, isLoading: true, isError: false };
        }

        case types.GET_TODO_FAILURE: {
            if (payload) {
                localStorage.setItem("token", payload);
            }
            return { ...state, isLoading: false, isError: false, isAuth: true, token: payload };
        }
        default: {
            return state;
        }
    }
};
