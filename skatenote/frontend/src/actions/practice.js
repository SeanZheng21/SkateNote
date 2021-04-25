import axios from 'axios';

import { createMessage } from './messages';
import { GET_PRACTICE, DELETE_PRACTICE, ADD_PRACTICE, GET_ERRORS } from './types';

// GET PRACTICE
export const getPractice = () => dispatch => {
    axios.get('/api/practice/')
        .then(res => {
            dispatch({
                type: GET_PRACTICE,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
}

// DELETE PRACTICE
export const deletePractice = (id) => dispatch => {
    axios.delete(`/api/practice/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_PRACTICE,
                payload: id
            });
        })
        .catch(err => console.log(err));

}

// ADD PRACTICE
export const addPractice = (practice) => dispatch => {
    axios.post('/api/practice/', practice)
        .then(res => {
            dispatch({
                type: ADD_PRACTICE,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
    // .catch(err => {
    //     const errors = {
    //         msg: err.response.data,
    //         status: err.response.status
    //     }
    //     dispatch({
    //         type: GET_ERRORS,
    //         payload: errors
    //     });
    // });
}