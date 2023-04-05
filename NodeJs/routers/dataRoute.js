const express = require("express");
const router = express.Router();

const getAllData = require("../controller/dataController");

router.route("/").get(getAllData);

module.exports = router;