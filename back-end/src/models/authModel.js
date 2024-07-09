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
const registerUser = async (nguoidung) => {
    return new Promise((resolve, reject) => {
        const { hoten, email, matkhau } = nguoidung;
        if (!hoten || !email || !matkhau) {
            return reject("Họ tên, email và mật khẩu không được để trống");
        }
        bcrypt.hash(matkhau, 10, (err, hashedPassword) => {
            if (err) {
                return reject(err);
            }
            db.query(`SELECT * FROM nguoidung WHERE email=?`, [email], async (err, results) => {
                if (err) {
                    return reject(err);
                }
                if (results.length === 0) {
                    db.query(`INSERT INTO nguoidung (hoTen, email, matkhau) VALUES (?, ?, ?)`, [hoten, email, hashedPassword], (err, results) => {
                        if (err) {
                            return reject(err);
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
                return reject(err);
            }
            if (results.length > 0) {
                const user = results[0];
                bcrypt.compare(matkhau, user.matkhau, (err, isMatch) => {
                    if (err) {
                        return reject(err);
                    }
                    if (isMatch) {
                        const { id_user, hoTen, vaitro } = user;
                        const accessToken = generateAccessToken({ id_user, hoTen, vaitro }, process.env.JWT_ACCESS_TOKEN_SECRET, '30m');
                        const refreshToken = generateRefreshToken({ id_user, hoTen, vaitro }, process.env.JWT_REFRESH_TOKEN_SECRET, '365d');
                        resolve({ id_user, accessToken, refreshToken });
                    } else {
                        return reject("Đăng nhập thất bại!! dòng 52 authModel");
                    }
                });
            } else {
                return reject("Đăng nhập không thành công");
            }
        });
    });
};

module.exports = { detailUser, registerUser, loginUser }