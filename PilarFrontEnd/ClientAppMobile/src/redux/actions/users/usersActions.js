//functions to call the actions
import { getAllUsers, addNewUser, deleteUserById, updateUserById} from "../../../app/services/usersService"
//constants
import { GET_ALL_USERS, GET_BY_USER, ADD_USER, UPDATE_USER, DELETE_USER } from '../../constants';

//Actions creator
const getAllUsersAction = (users) => ({type: GET_ALL_USERS, payload: users})
const getByUserAction = (user) => ({type: GET_BY_USER, payload: user})
const addUserAction = (user) => ({type: ADD_USER, payload: user})
const deleteUserAction = (user) => ({type: UPDATE_USER, payload: user})
const updateUserAction = (user) => ({type: DELETE_USER, payload: user})


//Async actions
export const allUsers = () => {
    return async dispatch => {
        try {
            const users = await getAllUsers()
            dispatch(getAllUsersAction(users))
        } catch(err) {
            console.log(err)
        }
    }
}

export const byUser = (id) => {
    return (dispatch, getState) => {
        const state = getState()
        const { users } = state.usersReducer
        const fundedUser = users.find((user) => user._id === id)
        dispatch(getByUserAction(fundedUser))
    }
}

export const addUser = (user) => {
    return async dispatch => {
        try {
            const newUser = await addNewUser(user)
            dispatch(addUserAction(newUser))
        } catch(err) {
            console.log(err)
        }
    }
}

export const deleteUser = (id) => {
    return async dispatch => {
        try {
            const delUser = await deleteUserById(id)
            dispatch(deleteUserAction(delUser))
        } catch(err) {
            console.log(err)
        }
    }
}

export const updateUser = (id) => {
    return async dispatch => {
        try {
            const updUser = await updateUserById(id)
            dispatch(updateUserAction(updUser))
        } catch(err) {
            console.log(err)
        }
    }
}

