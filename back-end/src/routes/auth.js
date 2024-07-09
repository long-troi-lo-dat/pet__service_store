const express = require('express');
const router = express.Router();

// import controller 
const authController = require('../controllers/authController');
const middlewareToken = require('../middlewares/token');

// define route for /api/auth
router.get('/:id_user', middlewareToken.verify, authController.getDetailUser);
// router.post('/refresh', middlewareToken.refreshToken)
router.post('/login', authController.loginUser);
router.post('/register', authController.registerUser);

module.exports = router;