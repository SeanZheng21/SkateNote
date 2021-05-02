import axios from 'axios';

import { createMessage } from './messages';
import {
    GET_PRACTICE, DELETE_PRACTICE, ADD_PRACTICE,
    GET_ERRORS, GET_TRICK, EDIT_PRACTICE
} from './types';
import { tokenConfig } from './auth';


// GET PRACTICE
export const getPractice = () => (dispatch, getState) => {
    axios.get('/api/practice/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_PRACTICE,
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

// DELETE PRACTICE
export const deletePractice = (id) => (dispatch, getState) => {
    axios.delete(`/api/practice/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deletePractice: "Practice deleted" }));
            dispatch({
                type: DELETE_PRACTICE,
                payload: id
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

// ADD PRACTICE
export const addPractice = (practice) => (dispatch, getState) => {
    axios.post('/api/practice/', practice, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addPractice: "Practice added" }));
            dispatch({
                type: ADD_PRACTICE,
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

// EDIT PRACTICE
export const editPractice = (id, practice) => (dispatch, getState) => {
    axios.put(`/api/practice/${id}/`, practice, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ editPractice: "Practice updated" }));
            dispatch({
                type: EDIT_PRACTICE,
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