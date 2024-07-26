const express = require('express');
const router = express.Router();
const { uploadCommentImages } = require("../config/multer")

// import controller 
const commentController = require('../controllers/commentController');

// define route for /api/comment
router.get('/', commentController.getComments);
router.get('/:id', commentController.getOneComment);
router.get('/detailproduct/:id', commentController.getCommentsByProductId);
router.post('/', commentController.createComment);
router.put('/:id', commentController.updateComment);
router.delete('/:id', commentController.deleteComment);

module.exports = router;