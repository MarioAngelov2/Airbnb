const Booking = require("../../models/Booking");
const Place = require("../../models/Place");
const jwt = require("jsonwebtoken");

const bookPlace = async (req, res) => {
    const { id } = req.params;
    const { token } = req.cookies;
    const { checkIn, checkOut, guests, name, phone, price } = req.body;

    if (!token) {
        throw new Error("Not existing token");
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.id;

    const place = await Place.findById(id);

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
};

module.exports = bookPlace;
