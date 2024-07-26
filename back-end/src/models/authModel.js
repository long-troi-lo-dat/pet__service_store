const db = require("../config/database");
const bcrypt = require('bcryptjs');

const { generateAccessToken, generateRefreshToken } = require("../utils/jwt")

const detailUser = (id) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM nguoidung WHERE id_user=?`, [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

const updateUser = (nguoidung, anhdaidien, id) => {
    return new Promise((resolve, reject) => {
        const { hoTen, sdt, matkhau, diachi } = nguoidung;
        const query = `UPDATE nguoidung SET hoTen=?, sdt=?, matkhau=?, diachi=?${anhdaidien ? ', anhdaidien=?' : ''} WHERE id_user=?`;
        const values = anhdaidien ? [hoTen, sdt, matkhau, diachi, anhdaidien, id] : [hoTen, sdt, matkhau, diachi, id];

        db.query(query, values, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

// const updateUser = (nguoidung, id) => {
//     return new Promise((resolve, reject) => {
//         const { hoTen, sdt, matkhau, diachi } = nguoidung
//         db.query(`UPDATE nguoidung SET hoTen=?,sdt=?,matkhau=?,diachi=? WHERE id_user=?`, [hoTen, sdt, matkhau, diachi, id], (err, results) => {
//             if (err) {
//                 return reject(err);
//             }
//             return resolve(results);
//         });
//     });
// };
const registerUser = async (nguoidung) => {
    return new Promise((resolve, reject) => {
        const { hoten, email, matkhau } = nguoidung;
        if (!hoten || !email || !matkhau) {
            return reject("Họ tên, email và mật khẩu không được để trống");
        }
        bcrypt.hash(matkhau, 10, (err, hashedPassword) => {
            if (err) {
                return reject("Lỗi khi mã hóa mật khẩu");
            }
            db.query(`SELECT * FROM nguoidung WHERE email=?`, [email], async (err, results) => {
                if (err) {
                    return reject("Lỗi truy vấn cơ sở dữ liệu");
                }
                if (results.length === 0) {
                    db.query(`INSERT INTO nguoidung (hoTen, email, matkhau) VALUES (?, ?, ?)`, [hoten, email, hashedPassword], (err, results) => {
                        if (err) {
                            return reject("Lỗi khi tạo tài khoản");
                        }
                        return resolve("Tạo tài khoản thành công");
                    });
                } else {
                    return reject("Email đã tồn tại trong hệ thống");
                }
            });
        });
    });
};


const loginUser = (nguoidung) => {
    return new Promise((resolve, reject) => {
        const { email, matkhau } = nguoidung;
        if (!email || !matkhau) {
            return reject("Email và mật khẩu không được để trống");
        }
        db.query(`SELECT * FROM nguoidung WHERE email=?`, [email], async (err, results) => {
            if (err) {
                return reject("Lỗi truy vấn cơ sở dữ liệu");
            }
            if (results.length > 0) {
                const user = results[0];
                bcrypt.compare(matkhau, user.matkhau, (err, isMatch) => {
                    if (err) {
                        return reject("Lỗi khi mã hóa mật khẩu");
                    }
                    if (isMatch) {
                        const { id_user, hoTen, vaitro } = user;
                        const accessToken = generateAccessToken({ id_user, hoTen, vaitro }, process.env.JWT_ACCESS_TOKEN_SECRET, '10s');
                        const refreshToken = generateRefreshToken({ id_user, hoTen, vaitro }, process.env.JWT_REFRESH_TOKEN_SECRET, '365d');
                        resolve({ id_user, accessToken, refreshToken });
                    } else {
                        return reject("Tài khoản hoặc mật khẩu không đúng!!");
                    }
                });
            } else {
                return reject("Đăng nhập không thành công");
            }
        });
    });
};

module.exports = { detailUser, updateUser, registerUser, loginUser }