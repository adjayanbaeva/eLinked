import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from 'jwt-decode';

export const registerUser = (userData, history) => dispatch => {
    axios.post('/api/users/register', userData)
            .then((res) => history.push('/login'))
            .catch(err => dispatch({type: GET_ERRORS, payload: err.response.data}))
}

export const loginUser = (userData) => dispatch => {
    axios.post('/api/users/login', userData)
        .then(res => {
            //Save token to browser's store
            const {token} = res.data;
            localStorage.setItem('jwtToken', token);

            //Set token to axios header
            setAuthToken(token);

            //Decode the token
            const decoded = jwt_decode(token);

            //Dispatch SET_CURRENT_USER call
            dispatch({
                type: SET_CURRENT_USER,
                payload: decoded
            })
        })
        .catch(err => dispatch({type: GET_ERRORS, payload: err.response.data}))
}