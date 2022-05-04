const baseUrl = process.env.RECURS_API
const stadiumsUrl = `${baseUrl}stadiums`
const usersUrl = `${baseUrl}users`

const routes = {
    postStadium: () => stadiumsUrl,
    getAllStadiums: () => stadiumsUrl,
    getStadiumById: (idStadium) => `${stadiumsUrl}/${idStadium}`,
    patchStadiumById: (idStadium) => `${stadiumsUrl}/${idStadium}`,
    deleteStadiumById: (idStadium) => `${stadiumsUrl}/${idStadium}`,
    
    postUser: () => usersUrl,
    getAllUsers: () => usersUrl,
    getUserById: (User) => `${usersUrl}/${User}`,
    patchUserById: (idUser) => `${usersUrl}/${idUser}`,
    deleteUserById: (idUser) => `${usersUrl}/${idUser}`,
}

export default routes;