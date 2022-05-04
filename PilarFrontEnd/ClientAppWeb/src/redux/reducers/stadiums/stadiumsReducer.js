import { GET_ALL_STADIUMS, GET_BY_STADIUM } from '../../constants';

const initialState = {
    stadiums: []
}

export const stadiumsReducer = (state = initialState, { type, payload }) => {
    switch(type){
        case GET_ALL_STADIUMS: 
            return { ...state, stadiums: payload }
        case GET_BY_STADIUM: 
            return { ...state, stadiums: payload }
        default:
            return state
    }
}