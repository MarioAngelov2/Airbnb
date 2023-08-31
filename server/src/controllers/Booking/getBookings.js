const Booking = require("../../models/Booking");
const jwt = require("jsonwebtoken");

const getBookings = async (req, res) => {
    const { token } = req.cookies;

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.id;

    if (userId) {
        const bookings = await Booking.find({}).exec();
        res.json(bookings);
    }
};

module.exports = getBookings;
