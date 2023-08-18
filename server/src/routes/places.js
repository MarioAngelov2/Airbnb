const { Router } = require("express");
const createUser = require("../controllers/register");

const router = Router();

router.post("/register", createUser);


module.exports = router;