const { Router } = require("express");
const path = require("path");
const multer = require("multer");
const createUser = require("../controllers/register");
const loginUser = require("../controllers/login");
const getUser = require("../controllers/getUser");
const logout = require("../controllers/logout");
const uploadByLink = require('../controllers/uploadByLink');
const uploadPhotoFromDevice = require("../controllers/uploadFromDevice");
const createPlace = require("../controllers/Places/createPlace");
const userPlaces = require("../controllers/Places/userPlaces");
const place = require("../controllers/Places/place");
const updatePlace = require("../controllers/Places/updatePlace");
const places = require("../controllers/Places/places");
const bookPlace = require("../controllers/Booking/bookPlace");
const getBookings = require("../controllers/Booking/getBookings");
const deletePlace = require("../controllers/Places/deletePlace");
const getBookedPlace = require("../controllers/Booking/getBookedPlace");
const deleteBooking = require("../controllers/Booking/deleteBooking");

const parentDirectory = path.resolve(__dirname, "../../");
const PATH_TO_UPLOADS = path.join(parentDirectory, "/assets/uploads/");

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
router.get("/user-places", userPlaces);
router.get("/place/:id", place);
router.put("/place/:id", updatePlace);
router.get("/places", places);
router.post("/place/booking/:id", bookPlace);
router.get("/account/bookings", getBookings);
router.delete("/place/:id", deletePlace);
router.get("/account/bookings/:id", getBookedPlace);
router.delete("/account/bookings/:id", deleteBooking);

module.exports = router;
