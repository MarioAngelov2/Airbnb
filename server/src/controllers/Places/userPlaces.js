const Place = require("../../models/Place");
const jwt = require("jsonwebtoken");

const userPlaces = async (req, res) => {
    const { token } = req.cookies;

    if (!token) {
        throw new Error("Authorization token not found.");
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.id;

    if (!userId) {
        throw new Error("User ID not found in token.");
    }

    const places = await Place.find({ owner: userId });
    res.json(places);
};

module.exports = userPlaces;
