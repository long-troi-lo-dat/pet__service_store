const multer = require("multer")
const path = require("path")
const fs = require('fs');

const uploadUserImageDir = path.join(__dirname, '../../uploads/users');

if (!fs.existsSync(uploadUserImageDir)) {
    fs.mkdirSync(uploadUserImageDir, { recursive: true });
}

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
        cb(null, uploadUserImageDir);
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const uploadProductImages = multer({ storage: productImageStorage });
const uploadCommentImages = multer({ storage: commentImageStorage });
const uploadUserImages = multer({ storage: userImageStorage });

module.exports = { uploadProductImages, uploadCommentImages, uploadUserImages }