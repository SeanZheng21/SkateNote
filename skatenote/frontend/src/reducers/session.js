import { GET_SESSION, DELETE_SESSION, ADD_SESSION, GET_SESSION_OF_PRACTICE, EDIT_SESSION } from '../actions/types.js';

const initialState = {
    session: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_SESSION:
        case GET_SESSION_OF_PRACTICE:
            return {
                ...state,
                session: action.payload
            }
        case DELETE_SESSION:
            return {
                ...state,
                session: state.session.filter(p => p.id !== action.payload)
            }
        case ADD_SESSION:
            return {
                ...state,
                session: [...state.session, action.payload]
            }
        case EDIT_SESSION:
            return {
                ...state,
                session: [...state.session]
            }
        default:
            return state;
    }
}