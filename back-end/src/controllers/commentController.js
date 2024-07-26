const commentModel = require('../models/commentModel');

module.exports = {
    getComments: (req, res) => {
        commentModel.getAll()
            .then(results => res.json(results))
            .catch(err => res.status(500).send(err));
    },
    getCommentsByProductId: (req, res) => {
        commentModel.getOneByProductId(req.params.id)
            .then(results => res.json(results))
            .catch(err => res.status(500).send(err));
    },
    getOneComment: (req, res) => {
        commentModel.getOne(req.params.id)
            .then(results => res.json(results))
            .catch(err => res.status(500).send(err));
    },
    createComment: (req, res) => {
        const comment = req.body;
        commentModel.create(comment)
            .then(results => res.status(201).json(results))
            .catch(err => res.status(500).send(err));
    },
    updateComment: (req, res) => {
        commentModel.update(req.params.id, req.body)
            .then(results => res.json(results))
            .catch(err => res.status(500).send(err));
    },
    deleteComment: (req, res) => {
        commentModel.delete(req.params.id)
            .then(results => res.json(results))
            .catch(err => res.status(500).send(err));
    },
};
