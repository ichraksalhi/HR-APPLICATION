import { combineReducers } from "redux";
import alert from './alert';
import auth  from './auth';
import job  from './job';
export default combineReducers({
    alert, auth, job
});