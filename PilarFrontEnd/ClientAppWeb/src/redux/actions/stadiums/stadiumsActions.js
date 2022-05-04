import { getAllStadiums } from "../../../app/services/stadiumsService"
import { GET_ALL_STADIUMS, GET_BY_STADIUM } from '../../constants';

//Actions creator
const getAllStadiumsAction = (stadiums) => ({type: GET_ALL_STADIUMS, payload: stadiums})
const getByStadiumAction = (stadium) => ({type: GET_BY_STADIUM, payload: stadium})


//Async actions
export const allStadiums = () => {
    return async dispatch => {
        try {
            const stadiums = await getAllStadiums()
            dispatch(getAllStadiumsAction(stadiums))
        } catch(err) {
            console.log(err)
        }
    }
}

export const byStadium = (id) => {
    return (dispatch, getState) => {
        const state = getState()
        const { stadiums } = state.stadiumsReducer
        const fundedStadium = stadiums.find((stadium) => stadium._id === id)
        dispatch(getByStadiumAction(fundedStadium))
    }
}