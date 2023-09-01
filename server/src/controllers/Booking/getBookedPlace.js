const Booking = require("../../models/Booking");
const jwt = require("jsonwebtoken");

const getBookedPlace = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { token } = req.cookies;

        if (!id) {
            throw new Error("Places not found.");
        }

        if (!token) {
            throw new Error("Authorization token not found.");
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decodedToken.id;

        const bookedPlace = await Booking.findById(id).populate("place");
        res.json(bookedPlace);
    } catch (error) {
        next(error);
    }
};

module.exports = getBookedPlace;
