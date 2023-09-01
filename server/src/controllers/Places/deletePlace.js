const Place = require("../../models/Place");

const deletePlace = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { token } = req.cookies;

        if (!token) {
            throw new Error("Authorization token not found.");
        }

        if (!id) {
            throw new Error("Place is not found.");
        }

        const delPlace = await Place.findByIdAndDelete(id);
        res.json(delPlace);
    } catch (error) {
        next(error);
    }
};

module.exports = deletePlace;
