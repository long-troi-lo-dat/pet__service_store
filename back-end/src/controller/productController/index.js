const sanphamModel = require('../../model/productModel/index');

module.exports = {
  getSanpham: (req, res) => {
    sanphamModel.getAll()
      .then(results => res.json(results))
      .catch(err => res.status(500).send(err));
  }
}