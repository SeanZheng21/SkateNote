import axios from 'axios';

import { createMessage } from './messages';
import { GET_ERRORS, GET_TRICK, GET_TRICK_ONE } from './types';



// GET TRICK
export const getTrick = () => dispatch => {
    axios.get('/api/trick/')
        .then(res => {
            dispatch({
                type: GET_TRICK,
                payload: res.data
            });
        })
        // .catch(err => console.log(err));
        .catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            });
        });
}

// GET TRICK ONE
export const getTrickOne = (id) => dispatch => {
    axios.get(`/api/trick/${id}/`)
        .then(res => {
            dispatch({
                type: GET_TRICK_ONE,
                payload: res.data
            });
        })
        // .catch(err => console.log(err));
        .catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            });
        });
}