const express = require("express");
const router = express.Router();

const signup_controller = require("../controller/signUpFormController");

router.get("/", signup_controller.sign_up_get);
router.post("/", signup_controller.sign_up_post);

module.exports = router;
