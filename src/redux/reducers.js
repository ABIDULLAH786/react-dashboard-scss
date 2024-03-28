import { combineReducers } from "redux";
import authReducer from "./slice/auth/auth-slice";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
