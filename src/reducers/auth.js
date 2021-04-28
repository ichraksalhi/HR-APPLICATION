import { 
    REGISTER_FAIL, REGISTER_SUCCESS,
    AUTH_ERROR, USER_LOADED,
    LOGIN_SUCCESS, LOGIN_FAIL,
    LOGOUT } from '../actions/types';
//state for our auth
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    //once we make our request and get data or get response we will set it to false
    loading: true,
    user: null
}
function auth(state = initialState, action){
    const {type, payload} = action;

    switch (type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token); //put the token in the localStorage
            localStorage.setItem('user', JSON.stringify(payload.user) );
            console.log(payload);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token');
            //remove the token and clear everything out
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }
        default: 
            return state;
    }
}

export default auth;