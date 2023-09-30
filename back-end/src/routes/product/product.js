const express = require('express');
const router = express.Router();

// import controller 
const sanphamController = require('../../controller/productController/index');

// define route for /api/sanpham
router.get('/', sanphamController.getSanpham); 

module.exports = router;