import {
    GET_JOBS,
    GET_JOB,
    JOB_ERROR,
    UPDATE_LIKES,
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
        case GET_JOB:
            return {
                ...state,
                job: payload,
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