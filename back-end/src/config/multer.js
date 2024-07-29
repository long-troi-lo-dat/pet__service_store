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

const commentImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../../uploads/comments"))
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const userImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(path.join(__dirname, "../../uploads/users", "oasdigoaoiasdngoasdngoid"))
        cb(null, path.join(__dirname, "../../uploads/users"));
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const uploadProductImages = multer({ storage: productImageStorage });
const uploadCommentImages = multer({ storage: commentImageStorage });
const uploadUserImages = multer({ storage: userImageStorage });

module.exports = { uploadProductImages, uploadCommentImages, uploadUserImages }