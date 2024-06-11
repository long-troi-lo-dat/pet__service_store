const express = require("express");
const router = express.Router();

// import controller
const userController = require("../controller/userController");

router.get("/", userController.getUsers);

module.exports = router;
