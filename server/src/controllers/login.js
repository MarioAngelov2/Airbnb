const User = require("../models/User");
const bcrypt = require("bcryptjs");
const createHttpError = require("http-errors");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).exec();

        if (user) {
            const correctPass = bcrypt.compare(password, user.password);

            if (correctPass) {
                jwt.sign(
                    { email: user.email, id: user._id },
                    process.env.JWT_SECRET,
                    {},
                    (err, token) => {
                        if (err) throw err;
                        res.cookie("token", token, {
                            httpOnly: true,
                            secure: true,
                            sameSite: "None",
                        }).json(user);
                    }
                );
            } else {
                throw new Error("Invalid credentials");
            }
        } else {
            throw new Error("User not found");
        }
    } catch (error) {
        next(error);
    }
};

module.exports = loginUser;
