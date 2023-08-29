const { Router } = require("express");
const path = require("path");
const multer = require("multer");
const createUser = require("../controllers/register");
const loginUser = require("../controllers/login");
const getUser = require("../controllers/getUser");
const logout = require("../controllers/logout");
const uploadByLink = require("../controllers/UploadPhotos/UploadByLink");
const uploadPhotoFromDevice = require("../controllers/UploadPhotos/UploadFromDevice");
const createPlace = require("../controllers/Places/createPlace");

const parentDirectory = path.resolve(__dirname, "..");
const PATH_TO_UPLOADS = path.join(
    parentDirectory,
    "/controllers/UploadPhotos/uploads"
);

const photosMiddleware = multer({ dest: PATH_TO_UPLOADS });

const router = Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/profile", getUser);
router.get("/logout", logout);
router.post("/upload-by-link", uploadByLink);
router.post(
    "/upload",
    photosMiddleware.array("photos", 10),
    uploadPhotoFromDevice
);
router.post("/add-place", createPlace);

module.exports = router;
