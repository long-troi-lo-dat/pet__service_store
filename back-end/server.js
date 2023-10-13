const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const route = require("./src/routes/index")
const db = require("./src/db/dbConfig");
dotenv.config();

const port = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api", route)

app.get('/', (re, res) => {
  return res.json("abc");
})

//api crud
app.post('/signup', (req, res) => {
  const sql = "INSERT into `nguoidung` (`hoten`,`sdt`,`email`,`matkhau`) values (?,?,?,?)";
  const values = [
    req.body.hoten,
    req.body.sdt,
    req.body.email,
    req.body.password
  ]
  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json("Error")
    }
    return res.json(data)
  })
})

app.post('/login', (req, res) => {
  const sql = "SELECT * FROM `nguoidung` WHERE `email` = ? AND `matkhau` = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error")
    }
    if (data.length > 0) {
      return res.json("success")
    } else {
      return res.json("fail")
    }
  })
})

app.post('/bookingservice', (req, res) => {
  const sql = "INSERT INTO `donhangdichvu` (`hoten`, `sodienthoai`, `diachi`, `email`, `thoigian`, `tenthucung`, `loai`, `thuocgiong`, `sotuoi`, `trongluong`, `ghichu`, `id_dichvu`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
  const values = [
    req.body.hoten,
    req.body.sdt,
    req.body.diachi,
    req.body.email,
    req.body.thoigianhen,
    req.body.tenthucung,
    req.body.loai,
    req.body.thuocgiong,
    req.body.tuoi,
    req.body.trongluong,
    req.body.ghichu,
    req.body.dichvu
  ]
  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json(err)
    }
    return res.json(data)
  })
})

// Khởi động máy chủ
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
