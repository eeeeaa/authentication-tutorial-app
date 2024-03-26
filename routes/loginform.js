const express = require("express");
const router = express.Router();

const login_controller = require("../controller/loginController");

router.post("/", login_controller.authenticate);

module.exports = router;
