const Place = require("../../models/Place");
const fs = require('fs')
const path = require('path')

const deletePlace = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { token } = req.cookies;

        const place = await Place.findById(id);

        if (!token) {
            throw new Error("Authorization token not found.");
        }

        if (!id) {
            throw new Error("Place is not found.");
        }

        const delPlace = await Place.findByIdAndDelete(id);

        place.photos.forEach((filename) => {
            const filePath = path.join(__dirname, '../../../assets/uploads', filename);
            fs.unlinkSync(filePath)
        })
        res.json(delPlace);
    } catch (error) {
        next(error);
    }
};

module.exports = deletePlace;
