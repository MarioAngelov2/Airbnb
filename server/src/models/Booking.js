const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    place: { type: mongoose.Schema.Types.ObjectId, required: true },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
    guests: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
});

const BookingModel = mongoose.model("Booking", BookingSchema);

module.exports = BookingModel;
