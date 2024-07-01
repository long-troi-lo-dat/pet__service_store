const productModel = require('../models/productModel');

module.exports = {
  getProducts: (req, res) => {
    productModel.getAll()
      .then(results => res.json(results))
      .catch(err => res.status(500).send(err));
  },
  getOneProduct: (req, res) => {
    productModel.getOne(req.params.id)
      .then(results => res.json(results))
      .catch(err => res.status(500).send(err));
  },
  createProduct: (req, res) => {
    const sanpham = req.body;
    const hinhanh = req.files;
    productModel.create(sanpham, hinhanh)
      .then(results => res.status(201).json(results))
      .catch(err => res.status(500).send(err));
  },
  updateProduct: (req, res) => {
    productModel.update(req.params.id, req.body)
      .then(results => res.json(results))
      .catch(err => res.status(500).send(err));
  },
  deleteProduct: (req, res) => {
    productModel.delete(req.params.id)
      .then(results => res.json(results))
      .catch(err => res.status(500).send(err));
  },
  getPetAccessories: (req, res) => {
    productModel.getPetAccessory()
      .then(results => res.json(results))
      .catch(err => res.status(500).send(err));
  },
  getPetFood: (req, res) => {
    productModel.getPetFood()
      .then(results => res.json(results))
      .catch(err => res.status(500).send(err));
  },
};
