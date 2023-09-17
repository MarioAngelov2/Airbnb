const logout = (req, res, next) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            sameSite: "None",
            secure: true,
        });

        res.json("Logout successful");
    } catch (error) {
        next(error);
    }
};

module.exports = logout;
