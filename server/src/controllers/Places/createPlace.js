const Place = require("../../models/Place");
const jwt = require("jsonwebtoken");

const createPlace = async (req, res) => {
    console.log(req.body);
    const { token } = req.cookies;

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

    if (decodedToken) {
        const newPlace = await Place.create({
            userOwner: token._id,
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

        res.json(newPlace);
    }
};

module.exports = createPlace;
