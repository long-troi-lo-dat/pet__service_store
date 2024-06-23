const express = require("express");
const router = express.Router();

// import controller
const userController = require("../controllers/userController");

router.get("/", userController.getUsers);
router.get("/:id", userController.getOneUser);
router.post("/", userController.createUser);

module.exports = router;
