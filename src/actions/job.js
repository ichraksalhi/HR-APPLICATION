import axios from 'axios';
import { setAlert} from './alert';
import {
    GET_JOBS,
    GET_JOB,
    JOB_ERROR,
    UPDATE_LIKES,
    GET_ERRORS,
    REMOVE_COMMENT,ADD_COMMENT
} from './types';

//Get list jobs
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

//Get detail job
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