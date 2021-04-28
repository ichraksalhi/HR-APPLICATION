import axios from "axios";

import {
 CALENDAR_LOADING,
 ADD_CALENDAR,
 EDIT_CALENDAR,
 GET_CALENDAR,
 IS_MODIFIED_CALENDAR,
 CLEAR_ERRORS,
 GET_ERRORS

  // SEARCH_EVENT,
} from "./types";
/*
export const addCalendar = (eventData) => async dispatch => {
  try{
      const res= await axios.post('http://localhost:5000/calendar/add',eventData);
      dispatch({
          type: ADD_CALENDAR,
          payload: res.data
      });
  }
  catch(err){
      dispatch({
          type: GET_ERRORS,
          payload: {msg: err.response.statusText, status: err.response.status}
      });
  }
}*/

export const addCalendar = (eventData) => dispatch => {
  dispatch(clearErrors()); 
  axios.post("/calendar/add", eventData)
    .then(res =>
        dispatch({
        type: ADD_CALENDAR,
        payload: res.data
      })
    )
    .catch(error => {
      if (error.response && error.response.data) {
        dispatch({
          type: GET_ERRORS,
          payload: {
            message: error.response.data,
            visible: true
          }
        })
      }
    })
};


export const getCalendar = () => dispatch => {
  dispatch(setCalendarLoading());
  axios
    .get('http://localhost:5000/calendar')
    .then(res => {
      dispatch({
        type: GET_CALENDAR,
        payload: res.data
      });
    })
    .catch(error => {
      if (error.response && error.response.data) {
        dispatch({
          type: GET_ERRORS,
          payload: {
            message: error.response.data,
            visible: true
          }
        })
      }
    })
};



export const editCalendar = (eventData) => dispatch => {
  dispatch(clearErrors());
  axios.put(`http://localhost:5000/calendar/update`, eventData)
    .then(res =>
      dispatch({
        type: EDIT_CALENDAR,
        payload: res.data
      })
    )
    .catch(error => {
      if (error.response && error.response.data) {
        dispatch({
          type: GET_ERRORS,
          payload: {
            message: error.response.data,
            visible: true
          }
        })
      }
    })
};

export const setIsModifiedCalendarLoading = () => {
  return {
    type: IS_MODIFIED_CALENDAR
  };
};

// Set loading state
export const setCalendarLoading = () => {
  return {
    type: CALENDAR_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
