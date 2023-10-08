const db = require('../../db/dbConfig');

module.exports = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM sanpham', (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  }
}