const userModel = require("../model/userModel");

module.exports = {
    getUsers: (req, res) => {
        userModel.getAll()
            .then((results) => res.json(results))
            .catch((err) => res.status(500).send(err));
    },
    getOneUser: (req, res) => {
        userModel.getOne(req.params.id)
            .then((results) => res.json(results))
            .catch((err) => res.status(500).send(err));
    },
};
