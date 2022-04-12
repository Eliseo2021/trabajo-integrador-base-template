require('dotenv').config();
module.exports = {
    // API 
    services: {
        api: {
            hostname: 'https://',
            apikey: process.env.VAR_API,
        }
    },
    // MONGODB_URL_DB = `host/database`
    database: {
        mongodb: {
            MONGODB_DB: process.env.MONGODB_URL,
        },
    },

}