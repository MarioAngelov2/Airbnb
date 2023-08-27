const logout = (req, res) => {
    res.cookie("token", "", { expires: new Date(0) });
    res.json("Logout successful");
};

module.exports = logout;
