import { GET_PRACTICE, DELETE_PRACTICE, ADD_PRACTICE } from '../actions/types.js';

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
        case DELETE_PRACTICE:
            return {
                ...state,
                practice: state.practice.filter(p => p.id !== action.payload)
            }
        case ADD_PRACTICE:
            return {
                ...state,
                practice: [...state.practice, action.payload]
            }
        default:
            return state;
    }
}