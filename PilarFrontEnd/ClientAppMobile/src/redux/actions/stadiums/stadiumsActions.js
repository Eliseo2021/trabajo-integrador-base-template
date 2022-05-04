import { getAllStadiums, addNewStadium, deleteStadiumById, updateStadiumById } from "../../../app/services/stadiumsService"
import { GET_ALL_STADIUMS, GET_BY_STADIUM, ADD_STADIUM, UPDATE_STADIUM, DELETE_STADIUM } from '../../constants';

//Actions creator
const getAllStadiumsAction = (stadiums) => ({type: GET_ALL_STADIUMS, payload: stadiums})
const getByStadiumAction = (stadium) => ({type: GET_BY_STADIUM, payload: stadium})
const addStadiumAction = (stadium) => ({type: ADD_STADIUM, payload: stadium})
const deleteStadiumAction = (stadium) => ({type: UPDATE_STADIUM, payload: stadium})
const updateStadiumAction = (stadium) => ({type: DELETE_STADIUM, payload: stadium})


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

export const addStadium = (stadium) => {
    return async dispatch => {
        try {
            const newStadium = await addNewStadium(stadium)
            dispatch(addStadiumAction(newStadium))
        } catch(err) {
            console.log(err)
        }
    }
}

export const deleteStadium = (id) => {
    return async dispatch => {
        try {
            const delStadium = await deleteStadiumById(id)
            dispatch(deleteStadiumAction(delStadium))
        } catch(err) {
            console.log(err)
        }
    }
}

export const updateStadium = (id) => {
    return async dispatch => {
        try {
            const updStadium = await updateStadiumById(id)
            dispatch(updateStadiumAction(updStadium))
        } catch(err) {
            console.log(err)
        }
    }
}
