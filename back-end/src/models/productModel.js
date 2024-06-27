const db = require("../config/database");

module.exports = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT sanpham.*,hinhanh.url AS hinh FROM `sanpham` INNER JOIN hinhanh ON sanpham.id_sp = hinhanh.id_sanpham ORDER BY id_dm DESC, ngaythem DESC", (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  },
  getOne: (id) => {
    return new Promise((resolve, reject) => {
      db.query("SELECT sanpham.*,hinhanh.url AS hinh FROM `sanpham` INNER JOIN hinhanh ON sanpham.id_sp = hinhanh.id_sanpham where id_sp=?", [id], (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  },
  create: (sanpham, hinhanh) => {
    return new Promise((resolve, reject) => {
      const { ten, gia, soluong, mota, id_dm } = sanpham
      const hinh = hinhanh
      // console.log(sanpham, hinh, "console data")
      db.query("INSERT INTO `sanpham` (`ten`,`gia`,`soluong`,`mota`,`id_dm`) VALUES (?,?,?,?,?,?)", [ten, gia, soluong, mota, id_dm], (err, results) => {
        // INSERT INTO `hinhanh`(`id`, `url`, `id_sanpham`) VALUES ('[value-2]','[value-3]')
        // const resultId = req.
        // db.query("INSERT INTO `hinhanh`(`url`, `id_sanpham`) VALUES (?,?')",[hinh,])
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  },
  update: (id) => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM sanpham where id_sp=?", [id], (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  },
  delete: (id) => {
    return new Promise((resolve, reject) => {
      db.query("DELETE * FROM sanpham where id_sp=?", [id], (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  },
  getRelated: (id) => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM sanpham where id_sp!=? limit=4", [id], (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  },
  getPetAccessory: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT sanpham.*,hinhanh.url AS hinh FROM `sanpham` INNER JOIN hinhanh ON sanpham.id_sp = hinhanh.id_sanpham where id_dm=4 ORDER BY ngaythem DESC LIMIT 6", (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  }
};
