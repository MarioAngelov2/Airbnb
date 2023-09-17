const logout = (req, res, next) => {
    try {
        res.cookie("token", "", { expires: new Date(0) });

        res.cookie("token", "", { expires: new Date(0), sameSite: "Lax" });

        res.cookie("token", "", {
            expires: new Date(0),
            sameSite: "Lax",
            secure: true,
        });

        res.json("Logout successful");
    } catch (error) {
        next(error);
    }
};

module.exports = logout;
