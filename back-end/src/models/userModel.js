const db = require("../config/database");
const bcrypt = require("bcryptjs");


const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM nguoidung", (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};
const getOneUser = (id) => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM nguoidung WHERE id_user=?`, [id], (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};
const createUser = (nguoidung) => {
  return new Promise((resolve, reject) => {
    const { hoTen, anhdaidien, sdt, email, password, diachi, mota, vaitro } = nguoidung
    if (!email || !password) {
      return
    }
    const hashedPassword = bcrypt.hash(password, 10);
    db.query(`SELECT * FROM nguoidung WHERE email=?`, [email], async (err, results) => {
      if (err) {
        reject(err);
      }
      if (results.length == 0) {
        db.query(`INSERT into nguoidung (hoTen,anhdaidien,sdt,email,matkhau,diachi,mota,vaitro) values (?,?,?,?,?,?,?,?)`, [hoTen, anhdaidien, sdt, email, hashedPassword, diachi, mota, vaitro], async (err, results) => {
          if (err) {
            reject(err);
          }
          resolve("Tạo người dùng mới thành công");
        })
      } else {
        reject("Tạo tài khoản không thành công do email đã tồn tại")
      }
    })
  })
};
const updateUser = (nguoidung, id) => {
  const { hoTen, anhdaidien, sdt, diachi, mota } = nguoidung
  const id_user = id
  if (!hoTen || !anhdaidien || !sdt || !diachi || !mota) {
    return
  }
  return new Promise((resolve, reject) => {
    db.query(`UPDATE nguoidung SET hoTen=?,anhdaidien=?,sdt=?,diachi=?,mota=? WHERE id_user=?`, [hoTen, anhdaidien, sdt, diachi, mota, id_user], (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};
const deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    db.query(`DELETE FROM nguoidung WHERE id_user=?`, [id], (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};
const loginUser = (nguoidung) => {
  const { email, password } = nguoidung
  return new Promise((resolve, results) => {
    db.query(`SELECT * FROM nguoidung WHERE email=? and password=?`,)
  })
}
module.exports = { getAllUsers, getOneUser, createUser, updateUser, deleteUser }
