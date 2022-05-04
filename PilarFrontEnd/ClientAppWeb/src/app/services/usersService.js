import api from "../clients/index"
import routes from "../apiRoutes/apiStadiumsRoutes"

export const getAllUsers = async () => {
    return api.get(routes.getAllUsers())
}

export const getUserById = async (idUser) => {
    return api.get(routes.getUserById(idUser))
}

export const addNewUser = async (User) => {
    return api.post(routes.addUser(), User)
}

export const deleteUserById = async (idUser) => {
    return api.get(routes.getUserById(idUser))
}

export const updateUserById = async (idUser) => {
    return api.get(routes.getUserById(idUser))
}