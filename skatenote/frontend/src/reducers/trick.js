import { GET_TRICK, GET_TRICK_ONE } from '../actions/types.js';

const initialState = {
    trick: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TRICK:
            return {
                ...state,
                trick: action.payload
            }
        case GET_TRICK_ONE:
            return {
                ...state,
                trick: [action.payload]
            }
        default:
            return state;
    }
}