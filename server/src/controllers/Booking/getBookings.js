const Booking = require("../../models/Booking");
const jwt = require("jsonwebtoken");

const getBookings = async (req, res, next) => {
    try {
        const { token } = req.cookies;

        if (!token) {
            throw new Error("Authorization token not found.");
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decodedToken.id;

        if (!userId) {
            throw new Error("User ID not found in token.");
        }

        const bookings = await Booking.find({ user: userId }).populate("place");

        
        res.json(bookings);
    } catch (error) {
        next(error);
    }
};

module.exports = getBookings;
