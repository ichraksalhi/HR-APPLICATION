import axios from 'axios';
import { setAlert} from './alert';
import {
    GET_JOBS,
    GET_JOBSHR,
    GET_JOBS_ACTIVATED,
    GET_JOBS_DEACTIVATED,
    GET_JOB,
    JOB_ERROR,
    UPDATE_LIKES,
    GET_ERRORS,
    JOB_ACTIVATED,
    JOB_DEACTIVATED,
    JOB_DELETED,
    GET_JOBS_NONAPP,
    JOB_APPROVED,
    ADD_JOB,
    ADD_ERROR,
    REMOVE_COMMENT,ADD_COMMENT
} from './types';

//Get list jobs candidate
export const getJobs = () => async dispatch => {
    try{
        const res= await axios.get('http://localhost:5000/api/Job/');
        dispatch({
            type: GET_JOBS,
            payload: res.data
        });
    }
    catch(err){
        dispatch({
            type: JOB_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
}
//Get list jobs HR approved by admin and created by the connected HR
export const getJobsHR = () => async dispatch => {
    try{
        const res= await axios.get('http://localhost:5000/api/JobHR');
        dispatch({
            type: GET_JOBSHR,
            payload: res.data
        });
    }
    catch(err){
        dispatch({
            type: JOB_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
}
//Get list activated jobs HR approved by admin and created by the connected HR 
export const getJobsHRAct = () => async dispatch => {
    try{
        const res= await axios.get('http://localhost:5000/api/JobHR/ActivatedJob');
        dispatch({
            type: GET_JOBS_ACTIVATED,
            payload: res.data
        });
    }
    catch(err){
        dispatch({
            type: JOB_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
}
//Get list deactivated jobs HR approved by admin and created by the connected HR 
export const getJobsHRDeact = () => async dispatch => {
    try{
        const res= await axios.get('http://localhost:5000/api/JobHR/DeActivateJob');
        dispatch({
            type: GET_JOBS_DEACTIVATED,
            payload: res.data
        });
    }
    catch(err){
        dispatch({
            type: JOB_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
}
//Get list to approved by admin
export const getJobsnonAppAdmin = () => async dispatch => {
    try{
        const res= await axios.get('http://localhost:5000/api/JobAdmin/nonApp');
        dispatch({
            type: GET_JOBS_NONAPP,
            payload: res.data
        });
    }
    catch(err){
        dispatch({
            type: JOB_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
}



//Get list to approved by admin
export const getJobsnonApp = () => async dispatch => {
    try{
        const res= await axios.get('http://localhost:5000/api/JobAdmin/nonApp');
        dispatch({
            type: GET_JOBS_NONAPP,
            payload: res.data
        });
    }
    catch(err){
        dispatch({
            type: JOB_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
}


//delete job by HR
export const deleteJob = (id) => async dispatch => {
    try{
        const res= await axios.get(`http://localhost:5000/api/JobHR/${id}`);
        dispatch({
            type: JOB_DELETED,
            payload: res.data
        });
    }
    catch(err){
        dispatch({
            type: JOB_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
}
//Approved job by admin
export const ApprovedJob = (id) => async dispatch => {
    try{
        const res= await axios.put(`http://localhost:5000/api/JobAdmin/approved/${id}`);
        dispatch({
            type: JOB_APPROVED,
            payload: res.data
        });
    }
    catch(err){
        dispatch({
            type: JOB_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
}
//deactivate Job by HR
export const deactivateJob = (id) => async dispatch => {
    try{
        const res= await axios.put(`http://localhost:5000/api/JobHR/deactivate/${id}`);
        dispatch({
            type: JOB_DEACTIVATED,
            payload: res.data
        });
    }
    catch(err){
        dispatch({
            type: JOB_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
}
//activate Job by HR
export const activateJob = (id) => async dispatch => {
    try{
        const res= await axios.put(`http://localhost:5000/api/JobHR/activate/${id}`);
        dispatch({
            type: JOB_ACTIVATED,
            payload: res.data
        });
    }
    catch(err){
        dispatch({
            type: JOB_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
}
//Get detail job candidate HR
export const getJob = id => async dispatch => {
    try{
        const res= await axios.get(`http://localhost:5000/api/Job/${id}`);
        dispatch({
            type: GET_JOB,
            payload: res.data
        });
    }
    catch(err){
        dispatch({
            type: JOB_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
}
// Add Job
export const addJob = (formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try{
      const res= await axios.post("http://localhost:5000/api/Job", formData, config);
      dispatch({
          type: ADD_JOB,
          payload: res.data
      });
      dispatch(setAlert('Job added', 'success'));
    }
      catch(err){
          dispatch({
              type: ADD_ERROR,
              payload: {msg: err.response.statusText, status: err.response.status}
  
          });
      }    
    };
//UPDATE LIKES
export const addLike = id => async dispatch => {
    try{
        const res= await axios.put(`http://localhost:5000/api/Job/like/${id}`);
        dispatch({
            type: UPDATE_LIKES,
            payload: {id, likes: res.data}
        });
    }
    catch(err){
        dispatch({
            type: GET_ERRORS,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
}

//remove LIKES
export const removeLike = id => async dispatch => {
    try{
        const res= await axios.put(`http://localhost:5000/api/Job/unlike/${id}`);
        dispatch({
            type: UPDATE_LIKES,
            payload: {id, likes: res.data}
        });
    }
    catch(err){
        dispatch({
            type: GET_ERRORS,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
}

// Add Comment
export const addComment = (jobId, commentData) => async dispatch => {
  const config = {
      headers: {
          'Content-Type': 'application/json'
      }
  };
  try{
    const res= await axios.post(`http://localhost:5000/api/Job/comment/${jobId}`, commentData, config);
    dispatch({
        type: ADD_COMMENT,
        payload: res.data
    });
    dispatch(setAlert('Comment sent', 'success'));
  }
    catch(err){
        dispatch({
            type: GET_ERRORS,
            payload: {msg: err.response.statusText, status: err.response.status}

        });
    }    
  };
  // remove Comment
export const deleteComment = (jobId, commentId) => async dispatch => {
    try{
      axios.delete(`http://localhost:5000/api/Job/comment/${jobId}/${commentId}`);
       dispatch({
          type: REMOVE_COMMENT,
          payload: commentId
      });
      dispatch(setAlert('Comment REMOVED', 'success'));
    }
      catch(err){
          dispatch({
              type: GET_ERRORS,
              payload: {msg: err.response.statusText, status: err.response.status}
          });
      }    
    };