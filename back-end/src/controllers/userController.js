const userModel = require("../models/userModel");

module.exports = {
    getUsers: (req, res) => {
        userModel.getAllUsers()
            .then((results) => res.json(results))
            .catch((err) => res.status(500).send(err));
    },
    getOneUser: (req, res) => {
        const id = req.params.id
        userModel.getOneUser(id)
            .then((results) => res.json(results))
            .catch((err) => res.status(500).send(err));
    },
    createUser: (req, res) => {
        const nguoidung = req.body;
        userModel.createUser(nguoidung)
            .then((results) => res.json(results))
            .catch((err) => res.status(500).send(err));
    },
    updateUser: (req, res) => {
        const nguoidung = req.body;
        const id = req.params.id;
        userModel.updateUser(nguoidung, id)
            .then((results) => res.json(results))
            .catch((err) => res.status(500).send(err));
    },
    deleteUser: (req, res) => {
        const id = req.params.id;
        userModel.deleteUser(id)
            .then((results) => res.json(results))
            .catch((err) => res.status(500).send(err));
    },
};
