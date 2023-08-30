const Place = require("../../models/Place");
const jwt = require("jsonwebtoken");

const updatePlace = async (req, res) => {
    const { token } = req.cookies;
    const { id } = req.params;
    const {
        title,
        address,
        uploadPhotos,
        description,
        perks,
        extraInfo,
        checkIn,
        checkOut,
        maxGuests,
        price,
    } = req.body;

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.id;

    const place = await Place.findById(id);

    if (userId === place.owner.toString()) {
        place.set({
            title,
            address,
            photos: uploadPhotos,
            description,
            perks,
            extraInfo,
            checkIn,
            checkOut,
            maxGuests,
            price,
        });

        place.save();
        res.json(place);
    }
};

module.exports = updatePlace;
