const Place = require("../../models/Place");
const createHttpError = require("http-errors");

const places = async (req, res) => {
    try {
        const places = await Place.find({}).exec();

        if (!places) {
            throw createHttpError(404, "Places not found.");
        }

        res.json(places);
    } catch (error) {
        console.log(error);
    }
};

module.exports = places;
