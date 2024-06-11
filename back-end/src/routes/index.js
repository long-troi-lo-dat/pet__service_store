const express = require("express");
const router = express.Router();

const productRouter = require("../routes/product");
const userRouter = require("../routes/user");

router.use("/product", productRouter);
router.use("/user", userRouter);

module.exports = router;
