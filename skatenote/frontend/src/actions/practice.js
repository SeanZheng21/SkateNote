import axios from 'axios';

import { GET_PRACTICE } from './types';

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