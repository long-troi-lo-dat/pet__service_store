const multer = require("multer")
const path = require("path")

const productImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../../uploads/products"))
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const uploadProductImages = multer({ storage: productImageStorage });

module.exports = { uploadProductImages }