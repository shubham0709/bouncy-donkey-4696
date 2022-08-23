import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/auth.reducer";
import { appReducer } from "./App/app.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
