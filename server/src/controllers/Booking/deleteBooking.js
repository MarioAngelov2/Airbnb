const Booking = require("../../models/Booking");
const jwt = require("jsonwebtoken");

const deleteBooking = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { token } = req.cookies;

        if (!id) {
            throw new Error("Place is not found.");
        }

        if (!token) {
            throw new Error("Authorization token not found.");
        }

        const delBooking = await Booking.findByIdAndDelete(id);
        res.json(delBooking);
    } catch (error) {
        next(error);
    }
};

module.exports = deleteBooking;
