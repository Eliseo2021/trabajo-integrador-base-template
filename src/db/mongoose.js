const mongoose = require("mongoose");
const config = require("config");
const { MONGODB_DB } = config.get("database.mongodb");

const MONGODB_URI = `mongodb+srv:/${MONGODB_DB}`;


async function connectToDB() {
    try {
        await mongoose.connect(MONGODB_URI)
        console.log('Database is connected')
    } catch (error) {
        console.log(err)
    }
}

module.exports = { 
    connectToDB, 
}