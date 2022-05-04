const baseUrl = 'https://app-backend-stadiums.herokuapp.com/' //process.env.REACT_APP_API
const stadiumsUrl = `${baseUrl}stadiums`
const usersUrl = `${baseUrl}users`

const routes = {
    postStadium: () => stadiumsUrl,
    getAllStadiums: () => stadiumsUrl,
    getStadiumById: (idStadium) => `${stadiumsUrl}/${idStadium}`,
    putStadiumById: (idStadium) => `${stadiumsUrl}/${idStadium}`,
    deleteStadiumById: (idStadium) => `${stadiumsUrl}/${idStadium}`,
    
    postUser: () => usersUrl,
    getAllUsers: () => usersUrl,
    getUserById: (User) => `${usersUrl}/${User}`,
    putUserById: (idUser) => `${usersUrl}/${idUser}`,
    deleteUserById: (idUser) => `${usersUrl}/${idUser}`,
}

export default routes;