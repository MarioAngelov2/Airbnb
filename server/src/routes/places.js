const { Router } = require("express");
const createUser = require("../controllers/register");
const loginUser = require("../controllers/login");
const getUser = require("../controllers/getUser");
const logout = require("../controllers/logout");
const uploadByLink = require("../controllers/UploadPhotos/UploadByLink");

const router = Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/profile", getUser);
router.get("/logout", logout);
router.post("/upload-by-link", uploadByLink);

module.exports = router;
