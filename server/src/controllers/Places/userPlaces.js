const Place = require("../../models/Place");
const jwt = require("jsonwebtoken");

const userPlaces = async (req, res) => {
    const { token } = req.cookies;

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.id;

    if (userId) {
        const places = await Place.find({ owner: userId });
        res.json(places);
    }
};

module.exports = userPlaces;
