const express = require('express');
const router = express.Router();
const { uploadProductImages } = require("../config/multer")

// import controller 
const productController = require('../controller/productController');

// define route for /api/product
router.get('/', productController.getProducts);
router.get('/:id', productController.getOneProduct);
router.post('/', uploadProductImages.array('productImages', 10), productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;