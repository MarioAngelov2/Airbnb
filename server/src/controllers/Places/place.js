const Place = require("../../models/Place");

const place = async (req, res) => {
    const { id } = req.params;

    if (id) {
        const place = await Place.findById(id);
        res.json(place)
    }
};

module.exports = place;
