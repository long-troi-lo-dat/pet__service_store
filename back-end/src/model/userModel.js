const db = require("../config/database");

module.exports = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM user", (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  },
  getOne: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM user where id=?`, [id], (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  },
};
