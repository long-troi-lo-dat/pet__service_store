const db = require("../config/database");
const jwt = require("jsonwebtoken")

const { generateToken, verifyToken } = require("../utils/jwt")

const registerUser = (nguoidung) => {
    return new Promise((resolve, reject) => {
        const { email, password } = nguoidung
        if (!email || !password) {
            return
        }
        const hashedPassword = bcrypt.hash(password, 10);
        db.query(`SELECT * FROM nguoidung WHERE email=?`, [email], async (err, results) => {
            if (err) {
                reject(err);
            }
            if (results.length == 0) {
                db.query(`INSERT INTO nguoidung (email,matkhau) VALUES (?,?)`, [email, hashedPassword], async (err, results) => {
                    if (err) {
                        reject(err);
                    }
                    resolve("Tạo tài khoản thành công");
                })
            } else {
                reject("Tạo tài khoản không thành công do email đã tồn tại")
            }
        })
    })
}
const loginUser = (nguoidung) => {
    return new Promise((resolve, reject) => {
        const { email, password } = nguoidung
        if (!email || !password) {
            return
        }
        db.query(`SELECT * FROM nguoidung WHERE email=? and matkhau=?`, [email, password], async (err, results) => {
            if (err) {
                reject(err);
            }
            if (results.length > 0) {
                console.log(results[0], "results.data")
                const { id_user, hoTen, vaitro } = results[0]
                const accessToken = generateToken({ id_user, hoTen, vaitro }, process.env.JWT_ACCESS_TOKEN_SECRET, 1440)
                console.log(accessToken)
            } else {
                reject("Đăng nhập không thành công")
            }
        })
    })
}

module.exports = { registerUser, loginUser }