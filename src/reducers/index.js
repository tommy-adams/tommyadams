import { combineReducers } from "redux";
import sched from "./classReducer";
import auth from "./userReducer";
import assignment from "./assignmentReducer";

export default combineReducers({
  sched,
  auth,
  assignment
});