import axios from 'axios';

const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['x-auth-token'] = token;
    }else{
        //if the pass is not a token delete it from the global headers
        delete axios.defaults.headers.common['x-auth-token'];
    }
}
export default setAuthToken;