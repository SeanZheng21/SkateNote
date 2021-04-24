import { GET_PRACTICE } from '../actions/types.js';

const initialState = {
    practice: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PRACTICE:
            return {
                ...state,
                practice: action.payload
            }

        default:
            return state;
    }
}