import { combineReducers } from "redux";
import alert from './alert';
import auth  from './auth';
import job  from './job';
import calendarReducer from './calendarReducer';
import quiz from './quiz';
import errors from './errors';

export default combineReducers({
    alert, auth, job, quiz, errors,
    calendar: calendarReducer
});