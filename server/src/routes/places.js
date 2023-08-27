const { Router } = require("express");
const createUser = require("../controllers/register");
const loginUser = require("../controllers/login");

const router = Router();

router.post("/register", createUser);
router.post("/login", loginUser);

module.exports = router;
