const User = require("../models/User");
const createHttpError = require("http-errors");
const bcrypt = require("bcryptjs");

const createUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            throw new Error("Username, email or password are missing");
        }

        const existingUser = await User.findOne({ email: email }).exec();

        if (existingUser) {
            throw new Error("The user already exist. Please log in.");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
};

module.exports = createUser;
