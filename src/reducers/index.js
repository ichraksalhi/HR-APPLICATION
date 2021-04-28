import { combineReducers } from "redux";
import alert from './alert';
import auth  from './auth';
import job  from './job';
import calendarReducer from './calendarReducer';

export default combineReducers({
    alert, auth, job,
    calendar: calendarReducer
});