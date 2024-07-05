const db = require("../config/database");

const authModel = require("../models/authModel")

const registerUser = (req, res) => {
    const nguoidung = req.body
    authModel.registerUser(nguoidung)
        .then((results) => res.json(results))
        .catch((err) => res.status(500).send(err));
};

const loginUser = (req, res) => {
    const nguoidung = req.body
    authModel.loginUser(nguoidung)
        .then((results) => res.json(results))
        .catch((err) => res.status(500).send(err));
};

module.exports = { registerUser, loginUser }