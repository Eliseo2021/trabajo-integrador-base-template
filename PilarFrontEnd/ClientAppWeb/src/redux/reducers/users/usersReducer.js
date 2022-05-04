//constants
import { GET_ALL_USERS, GET_BY_USER, ADD_USER, UPDATE_USER, DELETE_USER } from '../../constants';

const initialState = {
    users: []
}

export const usersReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_USERS:
            return { ...state, users: payload }
        case GET_BY_USER:
            return { ...state, user: payload }
        case ADD_USER:
            return { ...state, user: payload }
        case UPDATE_USER:
            return { ...state, user: payload }
        case DELETE_USER:
            return { ...state, user: payload }
        default:
            return state
    }
}