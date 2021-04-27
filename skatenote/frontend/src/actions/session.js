import axios from 'axios';

import { createMessage } from './messages';
import {
    GET_SESSION, DELETE_SESSION, ADD_SESSION,
    GET_ERRORS,
    GET_SESSION_OF_PRACTICE
} from './types';
import { tokenConfig } from './auth';


// GET SESSION
export const getSession = () => (dispatch, getState) => {
    axios.get('/api/session/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_SESSION,
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

// DELETE SESSION
export const deleteSession = (id) => (dispatch, getState) => {
    axios.delete(`/api/session/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deleteSession: "Session deleted" }));
            dispatch({
                type: DELETE_SESSION,
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

// ADD SESSION
export const addSession = (session) => (dispatch, getState) => {
    axios.post('/api/session/', session, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addSession: "Session added" }));
            dispatch({
                type: ADD_SESSION,
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

// GET SESSION OF PRACTICE
export const getSessionOfPractice = (id) => (dispatch, getState) => {
    // console.log("getSessionOfPractice: " + id)
    axios.get(`/api/session_of_practice/?pid=${id}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_SESSION_OF_PRACTICE,
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