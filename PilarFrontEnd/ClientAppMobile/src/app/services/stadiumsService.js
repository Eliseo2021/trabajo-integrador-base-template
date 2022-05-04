import api from "../clients/index"
import routes from "../apiRoutes/apiStadiumsRoutes"

export const getAllStadiums = async () => {
    return api.get(routes.getAllStadiums())
}

export const getStadiumById = async (idStadium) => {
    return api.get(routes.getStadiumById(idStadium))
}

export const addNewStadium = async (Stadium) => {
    return api.post(routes.addStadium(), Stadium)
}

export const deleteStadiumById = async (idStadium) => {
    return api.delete(routes.getStadiumById(idStadium))
}

export const updateStadiumById = async (idStadium) => {
    return api.patch(routes.getStadiumById(idStadium))
}
