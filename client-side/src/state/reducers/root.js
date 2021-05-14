import { combineReducers } from "redux";
import error from "./error";
import session from "./session";


export default combineReducers({
  session,
  error
});