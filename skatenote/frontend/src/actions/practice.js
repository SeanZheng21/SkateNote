import axios from 'axios';

import { GET_PRACTICE, DELETE_PRACTICE, ADD_PRACTICE } from './types';

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
}