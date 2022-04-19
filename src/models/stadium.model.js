const mongoose = require("mongoose");
const { Schema } = mongoose;

const stadiumsSchema = new Schema({
    stadiumname: { type: String, trim: true, required: true },
    imageURL: { type: String, required: true },
    description: { type: String },
    capacity: { type: Number },
    location: { type: String },
    map: { type: String, required: true },
    trk: { type: Array, required: true },
});

module.exports = mongoose.model("StadiumsModel", stadiumsSchema);