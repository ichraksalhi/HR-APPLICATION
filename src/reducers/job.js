
  
import {
    GET_JOBS,
    GET_JOBSHR,
    GET_JOBS_ACTIVATED,
    GET_JOBS_DEACTIVATED,
    GET_JOB,
    JOB_ERROR,
    UPDATE_LIKES,
    JOB_DELETED,
    JOB_ACTIVATED,
    JOB_DEACTIVATED,
    GET_JOBS_NONAPP,
    ADD_JOB,
    REMOVE_COMMENT,ADD_COMMENT
} from '../actions/types';
const initialState = {
    jobs: [],
    job: null,
    loading: true,
    error: {}
}
export default function(state = initialState, action){
    const {type, payload} = action;

    switch(type){
        case GET_JOBS:
            return {
                ...state,
                jobs: payload,
                loading: false
            }
        case GET_JOBS_NONAPP:
            return {
                ...state,
                jobs: payload,
                loading: false
            }
        case GET_JOBSHR:
            return {
                ...state,
                jobs: payload,
                loading: false
            }
        case JOB_ACTIVATED:
            return {
                ...state,
                jobs: state.jobs.map(job => job._id === payload.id ? {...job, activate: payload.activate} : job),
                loading: false
            }
        case JOB_DEACTIVATED:
            return {
                ...state,
                jobs: state.jobs.map(job => job._id === payload.id ? {...job, activate: payload.activate} : job),
                loading: false
            }
        case JOB_DELETED: 
            return {
                ...state,
                jobs: state.jobs.filter(job => job._id !== payload),
                loading: false                
            }
        case GET_JOBS_ACTIVATED:
            return {
                ...state,
                jobs: payload,
                loading: false                
            }
        case GET_JOBS_DEACTIVATED:
            return {
                ...state,
                jobs: payload,
                loading: false                      
            }
        case GET_JOB:
            return {
                ...state,
                job: payload,
                loading: false
            } 
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, payload],
                loading: false
            }
        case JOB_ERROR:
            return {
                ...state,
                jobs: payload,
                loading: false
            }
        case UPDATE_LIKES:
            return {
                ...state,
                jobs: state.jobs.map(job => job._id === payload.id ? {...job, likes: payload.likes} : job),
                loading: false
            }
        case ADD_COMMENT:
            return {
                ...state,
                job: {...state.job, comments: payload},
                loading: false
            }
        case REMOVE_COMMENT:
            return {
                ...state,
                job: {
                    ...state.job,
                    comments: state.job.comments.filter(comment => comment._id !== payload)
                },
                loading: false
            }
        default: 
            return state;
    }
}