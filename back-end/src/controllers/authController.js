const authModel = require("../models/authModel")

const getDetailUser = (req, res) => {
    const id = req.params.id_user;
    authModel.detailUser(id)
        .then((results) => res.json(results))
        .catch((err) => res.status(500).send(err));
};
const updateUser = (req, res) => {
    const nguoidung = req.body;
    const anhdaidien = req.file ? req.file.filename : null;
    const id = req.params.id_user;
    console.log(nguoidung, anhdaidien, id);
    if (req.fileValidationError) {
        return res.status(400).send(req.fileValidationError);
    } else if (!req.file) {
        return res.status(400).send('Please select an image to upload');
    }
    authModel.updateUser(nguoidung, anhdaidien, id)
        .then((results) => res.json(results))
        .catch((err) => res.status(500).send(err));
};

const registerUser = (req, res) => {
    const nguoidung = req.body
    authModel.registerUser(nguoidung)
        .then((results) => res.json({ message: results }))
        .catch((err) => res.status(500).send(err));
};

const loginUser = (req, res) => {
    const nguoidung = req.body;
    authModel.loginUser(nguoidung)
        .then((results) => res.json(results))
        .catch((err) => res.status(500).send(err));
};

module.exports = { getDetailUser, updateUser, registerUser, loginUser }