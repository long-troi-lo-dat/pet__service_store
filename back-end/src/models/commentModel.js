const db = require("../config/database");

module.exports = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM binhluan order by ngaythem desc", (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    },
    getOneByProductId: (id) => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM binhluan where anhien=0 and id_sp=?", [id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    },
    getOne: (id) => {
        return new Promise((resolve, reject) => {
            db.query("", [id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    },
    create: (comment) => {
        return new Promise((resolve, reject) => {
            const { hoten, email, binhluan, id_sp } = comment
            db.query("INSERT INTO `binhluan`(`id`, `hoten`, `binhluan`, `id_sp`) VALUES (?,?,?,?)", [hoten, email, binhluan, id_sp], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    },
    update: (id) => {
        return new Promise((resolve, reject) => {
            db.query("", [id], (err, results) => {
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
};
