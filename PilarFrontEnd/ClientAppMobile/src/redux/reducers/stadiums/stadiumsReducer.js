import { GET_ALL_STADIUMS, GET_BY_STADIUM, ADD_STADIUM, UPDATE_STADIUM, DELETE_STADIUM } from '../../constants';

const initialState = {
    stadiums: []
}

export const stadiumsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_STADIUMS:
            return { ...state, stadiums: payload }
        case GET_BY_STADIUM:
            return { ...state, stadium: payload }
        case ADD_STADIUM:
            return { ...state, stadium: payload }
        case UPDATE_STADIUM:
            return { ...state, stadium: payload }
        case DELETE_STADIUM:
            return { ...state, stadium: payload }
        default:
            return state
    }
}