const express = require("express");
const router = express.Router();

const productRouter = require("../routes/product");
const commentRouter = require("../routes/comment")
const userRouter = require("../routes/user");
const authRouter = require("../routes/auth");

router.use("/product", productRouter);
router.use("/comment", commentRouter);
router.use("/user", userRouter);
router.use("/auth", authRouter);

module.exports = router;
