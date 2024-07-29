const express = require('express');
const router = express.Router();

const { uploadUserImages } = require("../config/multer")
// import controller 
const authController = require('../controllers/authController');
// const middlewareToken = require('../middlewares/token');

// define route for /api/auth
router.get('/:id_user', authController.getDetailUser);
router.put('/:id_user', uploadUserImages.single("anhdaidien"), authController.updateUser);
router.post('/login', authController.loginUser);
router.post('/register', authController.registerUser);

module.exports = router;