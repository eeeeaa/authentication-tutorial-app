const express = require("express");
const router = express.Router();

const index_controller = require("../controller/indexController");

router.get("/", index_controller.index);
router.get("/log-out", index_controller.logout);

module.exports = router;
