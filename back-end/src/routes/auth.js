const express = require('express');
const router = express.Router();

// import controller 
const authController = require('../controllers/authController');

// define route for /api/product
router.post('/login', authController.loginUser);
router.post('/register', authController.registerUser);

module.exports = router;