const User = require("../models/User");
const createHttpError = require("http-errors");
const jwt = require("jsonwebtoken");

const getUser = async (req, res) => {
    try {
        const { token } = req.cookies;

        if (token) {
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            const userData = await User.findById(decodedToken.id);

            if (!userData) {
                throw createHttpError(404, 'User not found.')
            }

            const {name, email, id} = userData;
            res.json({name, email, id})
        } else {
            res.json(null)
        }
    } catch (error) {
        console.log(error)
    }
};

module.exports = getUser;
