const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    username: { type: String }, 
    email: { type: String, unique: true, required: true }, 
    password: { type: String, trim: true, required: true },
});

module.exports = mongoose.model('UserModel', userSchema);