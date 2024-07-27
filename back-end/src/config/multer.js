const multer = require("multer")
const path = require("path")

const productImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `${process.env.REACT_APP_URL_API}/products`)
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const commentImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `${process.env.REACT_APP_URL_API}/comments`)
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const userImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `${process.env.REACT_APP_URL_API}/users`);
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const uploadProductImages = multer({ storage: productImageStorage });
const uploadCommentImages = multer({ storage: commentImageStorage });
const uploadUserImages = multer({ storage: userImageStorage });

module.exports = { uploadProductImages, uploadCommentImages, uploadUserImages }