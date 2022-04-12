const Joi = require('joi')
const StadiumModel = require('../models/stadium.model');
const { stadiumsSchema } = require('../schemas/validate.schemas');

async function getStadiums(req, res) {
    try {
        const Stadium = await StadiumModel.find() //get all Stadiums
        return res.json(Stadium)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

async function getByIdStadium(req, res) {
    try {
        const { id } = (req.params)
        const Stadium = await
            StadiumModel.findById(id) //get Stadium by id
        if (!Stadium) {
            return res.status(404).json({
                code: "bad_request",
                message: "Invalid request, check that the ID is valid",
                severity: "LOW",
            })
        }
        return res.json(Stadium)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

async function createStadium(req, res) {
    try {
        const data = { stadiumname, imageURL, description, capacity, location, map } = req.body;
        Joi.assert(data, stadiumsSchema); //validate data
        const Stadium = new StadiumModel({ stadiumname, imageURL, description, capacity, location, map }); //create new Stadium
        await Stadium.save(); //save Stadium in database
        return res.json(Stadium)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

async function deleteStadium(req, res) {
    try {
        const { id } = (req.params)
        const Stadium = await
            StadiumModel.findByIdAndDelete(id) //delete Stadium by id
        if (!Stadium) {
            return res.status(404).json({
                code: "bad_request",
                message: "Invalid request, check that the ID is valid",
                severity: "LOW",
            })
        }
        return res.json('Stadium deleted!')
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

async function updateStadium(req, res) {
    try {
        const { id } = (req.params)
        const data = { stadiumname, imageURL, description, capacity, location, map } = req.body;
        Joi.assert(data, stadiumsSchema); //validate data
        const Stadium = await
            StadiumModel.findByIdAndUpdate(id, { stadiumname, imageURL, description, capacity, location, map }, { new: true }) //update Stadium by id
        if (!Stadium) {
            return res.status(404).json({
                code: "bad_request",
                message: "Invalid request, check that the ID is valid",
                severity: "LOW",
            })
        }
        return res.json(Stadium)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


module.exports = {
    getStadiums,
    getByIdStadium,
    createStadium,
    updateStadium,
    deleteStadium
};