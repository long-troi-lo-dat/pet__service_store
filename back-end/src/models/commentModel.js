const db = require("../config/database");

module.exports = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            db.query("", (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    },
    delete: (id) => {
        return new Promise((resolve, reject) => {
            db.query("", [id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    },
}