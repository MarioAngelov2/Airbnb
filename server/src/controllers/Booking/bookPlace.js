const Booking = require("../../models/Booking");
const Place = require("../../models/Place");
const jwt = require("jsonwebtoken");
const createHttpError = require("http-errors");

const bookPlace = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { token } = req.cookies;
        const { checkIn, checkOut, guests, name, phone, price } = req.body;

        if (!token) {
            throw new Error("Authorization token not found.");
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decodedToken.id;

        if (!userId) {
            throw new Error("User ID not found in token.");
        }

        const booking = await Booking.create({
            place: id,
            user: userId,
            checkIn,
            checkOut,
            guests,
            name,
            phone,
            price,
        });

        res.json(booking);
    } catch (error) {
        next(error);
    }
};

module.exports = bookPlace;
