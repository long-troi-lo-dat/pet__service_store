const express = require('express');
const router = express.Router(); 

const productRouter = require("../routes/product/product")

router.use("/product", productRouter)

module.exports = router;